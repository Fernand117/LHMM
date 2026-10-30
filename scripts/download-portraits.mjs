import { mkdir, readFile, writeFile, access } from 'node:fs/promises'
import { createHash } from 'node:crypto'
import { setTimeout as respectRetryAfter } from 'node:timers/promises'
import { people } from '../src/data/catalog.ts'
import { portraitExclusions } from '../src/data/portrait-policy.ts'

const headers = { 'User-Agent': 'LHMM/0.1 (educational local prototype; attributed Wikimedia images)' }
const metadataPath = 'src/data/portraits.json'
await mkdir('public/images/people', { recursive: true })
let portraits = JSON.parse(await readFile(metadataPath, 'utf8'))
const requestedIds = new Set(process.argv.slice(2))
const previousAudit = JSON.parse(await readFile('src/data/portrait-audit.json', 'utf8'))
const audit = requestedIds.size ? previousAudit.filter((item) => !requestedIds.has(item.id)) : []
const clean = (text = '') => text.replace(/<style[\s\S]*?<\/style>/gi, '').replace(/<[^>]+>/g, '').replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/\s+/g, ' ').trim()
const allowedLicense = /^(Public domain|CC0|CC BY(?:-SA)? [1-4]\.0)$/i

async function api(host, params) {
  const url = new URL(`https://${host}/w/api.php`)
  url.search = new URLSearchParams({ action: 'query', format: 'json', formatversion: '2', ...params })
  let response = await fetch(url, { headers, signal: AbortSignal.timeout(30000) })
  for (let attempt = 0; response.status === 429 && attempt < 3; attempt++) {
    // This is HTTP backoff requested by the source, not a background-job poll.
    const retrySeconds = Math.min(60, Math.max(10, Number(response.headers.get('retry-after')) || 15 * (attempt + 1)))
    await respectRetryAfter(retrySeconds * 1000)
    response = await fetch(url, { headers, signal: AbortSignal.timeout(30000) })
  }
  if (!response.ok) throw new Error(`${host}: ${response.status}`)
  const result = await response.json()
  if (result.error) throw new Error(result.error.info)
  return result.query
}

async function findImages(items, language) {
  const result = new Map()
  for (let index = 0; index < items.length; index += 35) {
    const batch = items.slice(index, index + 35)
    const pages = await api(`${language}.wikipedia.org`, { titles: batch.map((person) => language === 'en' ? person.portraitPage : person.name).join('|'), prop: 'pageimages|pageprops', redirects: '1', ppprop: 'disambiguation' })
    const redirects = new Map([...(pages.normalized ?? []), ...(pages.redirects ?? [])].map((item) => [item.from, item.to]))
    for (const person of batch) {
      let title = language === 'en' ? person.portraitPage : person.name
      for (let step = 0; step < 5 && redirects.has(title); step++) title = redirects.get(title)
      const page = pages.pages.find((candidate) => candidate.title === title)
      if (page && page.pageimage && !Object.hasOwn(page.pageprops ?? {}, 'disambiguation')) result.set(person.id, page.pageimage.replaceAll('_', ' '))
    }
  }
  return result
}

async function imageMetadata(files) {
  const result = new Map()
  for (let index = 0; index < files.length; index += 25) {
    // Wikipedia exposes Commons' shared image metadata without using Commons'
    // more restrictive anonymous API. Attribution still points to the original file.
    const query = await api('en.wikipedia.org', { titles: files.slice(index, index + 25).map((file) => `File:${file}`).join('|'), prop: 'imageinfo', iiprop: 'url|mime|extmetadata', iiurlwidth: '640', redirects: '1' })
    const pages = query.pages ?? []
    for (const page of pages) {
      const info = page.imageinfo?.[0]
      if (info) result.set(page.title.replace(/^File:/, '').replaceAll('_', ' '), info)
    }
    // Image aliases can redirect to another file name; keep those associations.
    for (const redirect of query.redirects ?? []) {
      const original = redirect.from.replace(/^File:/, '').replaceAll('_', ' ')
      const target = redirect.to.replace(/^File:/, '').replaceAll('_', ' ')
      if (result.has(target)) result.set(original, result.get(target))
    }
  }
  return result
}

const pending = []
for (const person of people) {
  if (requestedIds.size && !requestedIds.has(person.id)) continue
  const cached = portraits[person.id]
  if (portraitExclusions[person.id]) { audit.push({ id: person.id, status: 'excluido', reason: portraitExclusions[person.id] }); continue }
  if (cached && allowedLicense.test(cached.license)) {
    try { await access(`public${cached.src}`); audit.push({ id: person.id, status: 'cached' }); continue } catch {}
  }
  if (!person.portraitPage) { audit.push({ id: person.id, status: 'sin-imagen', reason: 'Sin un retrato identificado con procedencia y derechos suficientes; no se sustituye por otra persona.' }); continue }
  pending.push(person)
}

const english = await findImages(pending, 'en')
const spanish = await findImages(pending, 'es')
const allFiles = [...new Set([...english.values(), ...spanish.values()])]
const metadata = await imageMetadata(allFiles)

// Commons can omit expensive extmetadata fields from batched shared lookups.
// Retry incomplete records once, individually; do not infer a free license.
for (const file of allFiles) {
  if (metadata.get(file)?.extmetadata?.LicenseShortName) continue
  const recovered = await imageMetadata([file])
  if (recovered.has(file)) metadata.set(file, recovered.get(file))
}

for (const person of pending) {
  let saved = false
  const attempts = []
  const candidates = [...new Set([english.get(person.id), spanish.get(person.id)].filter(Boolean))]
  for (const file of candidates) {
    const info = metadata.get(file)
    const meta = info?.extmetadata
    const license = clean(meta?.LicenseShortName?.value)
    if (!info || !/^https:\/\/commons\.wikimedia\.org\//.test(info.descriptionurl) || !allowedLicense.test(license) || !/^image\/(jpeg|png|webp)$/.test(info.mime)) { attempts.push({ file, result: 'Metadatos, licencia o formato no admitidos', license, mime: info?.mime }); continue }
    const author = clean(meta.Artist?.value)
    if (!author && /^CC BY/.test(license)) continue
    try {
      let response = await fetch(info.thumburl || info.url, { headers, signal: AbortSignal.timeout(30000) })
      if (!response.ok) response = await fetch(info.url, { headers, signal: AbortSignal.timeout(30000) })
      if (!response.ok) { attempts.push({ file, result: `Descarga HTTP ${response.status}` }); continue }
      if (Number(response.headers.get('content-length') ?? 0) > 8000000) continue
      const buffer = Buffer.from(await response.arrayBuffer())
      if (buffer.length > 8000000) continue
      const contentType = response.headers.get('content-type') ?? info.mime
      if (!/^image\/(jpeg|png|webp)(?:;|$)/i.test(contentType)) { attempts.push({ file, result: `Respuesta no gráfica: ${contentType}` }); continue }
      const extension = contentType.includes('png') ? 'png' : contentType.includes('webp') ? 'webp' : 'jpg'
      const src = `/images/people/${person.id}.${extension}`
      await writeFile(`public${src}`, buffer)
      const creditHtml = meta.Credit?.value ?? ''
      const originalUrl = creditHtml.match(/href="(https?:\/\/[^\"]+)"/)?.[1]?.replaceAll('&amp;', '&')
      portraits[person.id] = {
        personId: person.id, src, file,
        author: /^unknown author/i.test(author) ? 'Autor no identificado (ver archivo)' : author || 'Autor no identificado (ver archivo)',
        license, licenseUrl: meta.LicenseUrl?.value || null,
        source: info.descriptionurl,
        originalSource: clean(creditHtml), originalUrl: originalUrl ?? null,
        caption: person.portraitNote ?? `Retrato o representación de ${person.name}; consulta la ficha original.`,
        description: clean(meta.ImageDescription?.value),
        sha256: createHash('sha256').update(buffer).digest('hex'),
      }
      console.log(`${person.id}: ${license} · ${file}`)
      audit.push({ id: person.id, status: 'descargado', file, license })
      saved = true
      break
    } catch (error) { console.warn(`${person.id}: ${error.message}`) }
  }
  if (!saved) audit.push({ id: person.id, status: 'sin-imagen', reason: 'No se encontró entre las imágenes consultadas un retrato descargable con licencia y atribución admitidas. No se usa material de prensa sin permiso.', candidates, attempts })
}

await writeFile(metadataPath, JSON.stringify(portraits, null, 2))
await writeFile('src/data/portrait-audit.json', JSON.stringify(audit, null, 2))
console.log(`Imágenes adquiridas: ${Object.keys(portraits).length}; publicables tras exclusiones: ${Object.keys(portraits).filter((id) => !portraitExclusions[id]).length}/${people.length}. Las no disponibles permanecen sin fotografía.`)
