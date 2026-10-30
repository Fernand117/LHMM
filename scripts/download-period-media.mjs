// Reproducible acquisition. Only free licenses explicitly reported by the file
// repository are accepted; a painting is never described as an event photograph.
import { mkdir, writeFile } from 'node:fs/promises'
import { createHash } from 'node:crypto'

const candidates = [
  { id: 'period-conquest', file: 'CodexMendoza01.jpg', date: 'ca. 1541–1542', kind: 'Manuscrito del siglo XVI', caption: 'Primera lámina del Códice Mendoza, ca. 1541–1542. Contexto de la sociedad mexica y de su representación colonial; no ilustra cada episodio de la conquista.' },
  { id: 'period-colonial', file: 'Vista de la Plaza Mayor de la Ciudad de México - Cristobal de Villalpando.jpg', date: '1695', kind: 'Pintura de época', caption: 'Cristóbal de Villalpando, Vista de la Plaza Mayor de la Ciudad de México, 1695. Imagen representativa del mundo virreinal; no representa el acontecimiento de esta ficha.' },
  { id: 'period-republic', file: 'Mexico, Plaza de la Constitucion. (24229427350).jpg', date: 'ca. 1885–1899', kind: 'Fotografía histórica', caption: 'Abel Briquet, vista de la Plaza de la Constitución, ca. 1885–1899. Fotografía de época sobre la ciudad porfiriana; no documenta el acontecimiento narrado.' },
  { id: 'period-independence', file: 'Congreso de Chilpancingo.png', date: '2010', kind: 'Ilustración digital moderna', caption: 'Recreación digital de 2010 del Congreso de Chilpancingo. No es una pintura de época ni un registro contemporáneo de los hechos; se usa solo como referencia visual del episodio.' },
]
const acceptedLicenses = /^(Public domain|PD|CC0|No restrictions|CC BY(?:-SA)?(?: [\d.]+)?)$/i
const headers = { 'User-Agent': 'LHMM/0.1 educational history atlas (source attribution audit)' }
await mkdir('public/images/periods', { recursive: true })
const results = []
for (const candidate of candidates) {
  try {
    const params = new URLSearchParams({ action: 'query', format: 'json', titles: `File:${candidate.file}`, prop: 'imageinfo', iiprop: 'url|extmetadata', iiurlwidth: '1440' })
    const response = await fetch(`https://commons.wikimedia.org/w/api.php?${params}`, { headers })
    if (!response.ok) throw new Error(`Metadata ${response.status}: ${candidate.file}`)
    const data = await response.json()
    const info = Object.values(data.query.pages)[0].imageinfo?.[0]
    if (!info) throw new Error(`No metadata: ${candidate.file}`)
    const meta = info.extmetadata
    const license = meta.LicenseShortName?.value ?? ''
    if (!acceptedLicenses.test(license)) throw new Error(`Review license manually: ${license}`)
    let image = await fetch(info.thumburl ?? info.url, { headers })
    if (!image.ok) image = await fetch(info.url, { headers })
    if (!image.ok || !image.headers.get('content-type')?.startsWith('image/')) throw new Error(`Image unavailable: ${candidate.file}`)
    const bytes = Buffer.from(await image.arrayBuffer())
    const extension = image.headers.get('content-type').includes('png') ? 'png' : 'jpg'
    const src = `/images/periods/${candidate.id}.${extension}`
    await writeFile(`public${src}`, bytes)
    results.push({ ...candidate, src, source: info.descriptionurl, originalUrl: info.url, author: meta.Artist?.value?.replace(/<[^>]*>/g, '').trim() ?? 'Autor no identificado por el repositorio', license, licenseUrl: meta.LicenseUrl?.value ?? '', description: meta.ImageDescription?.value?.replace(/<[^>]*>/g, '').trim() ?? '', repositoryDate: meta.DateTimeOriginal?.value?.replace(/<[^>]*>/g, '').trim() ?? '', retrievedAt: new Date().toISOString(), sha256: createHash('sha256').update(bytes).digest('hex') })
    console.log(`${candidate.id}: ${license}; ${meta.DateTimeOriginal?.value}; ${bytes.length} bytes`)
  } catch (error) {
    console.error(`${candidate.id}: ${error.message}`)
  }
}
await writeFile('src/data/period-media.json', JSON.stringify(results, null, 2) + '\n')
