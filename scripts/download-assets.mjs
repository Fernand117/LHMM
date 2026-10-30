import { mkdir, writeFile } from 'node:fs/promises'
import { createHash } from 'node:crypto'
import { feature } from 'topojson-client'

await mkdir('public/images', { recursive: true })
const headers = { 'User-Agent': 'LHMM/0.1 (educational local prototype)' }
const map = await fetch('https://raw.githubusercontent.com/markmarkoh/datamaps/master/src/js/data/mex.topo.json', { headers })
if (!map.ok) throw new Error(`Map download failed: ${map.status}`)
const topology = await map.json()
const stateCodes = { BN: 'BCN', BS: 'BCS', CA: 'COA', CH: 'CHH', DU: 'DUR', SI: 'SIN', SO: 'SON', ZA: 'ZAC', NL: 'NLE', SL: 'SLP', TM: 'TAM', AG: 'AGU', CL: 'COL', JA: 'JAL', MC: 'MIC', NA: 'NAY', CM: 'CAM', OA: 'OAX', PU: 'PUE', TB: 'TAB', TL: 'TLA', DF: 'CMX', GJ: 'GUA', GR: 'GRO', HI: 'HID', MX: 'MEX', MR: 'MOR', QE: 'QUE', VE: 'VER', CP: 'CHP', QR: 'ROO', YU: 'YUC' }
const converted = feature(topology, topology.objects.mex)
const geojson = { type: 'FeatureCollection', features: converted.features.filter((item) => item.properties.name).map((item) => {
  const id = `MX-${stateCodes[item.id.split('.')[1]]}`
  return { ...item, id, properties: { id, name: id === 'MX-CMX' ? 'Ciudad de México' : item.properties.name } }
}) }
await writeFile('public/mexico-states.geo.json', JSON.stringify(geojson))
await mkdir('public/licenses', { recursive: true })
const mapLicense = await fetch('https://raw.githubusercontent.com/markmarkoh/datamaps/master/LICENSE', { headers })
if (!mapLicense.ok) throw new Error('Map license unavailable')
await writeFile('public/licenses/datamaps.txt', await mapLicense.text())
console.log(`Saved ${geojson.features.length} Mexican states`)

const images = [
  ['city', 'Sobrevuelos CDMX HJ2A4913 (25514321687) (cropped).jpg'],
  ['revolution', 'Decena trágica.JPG'],
  ['conquest', 'Conquista-de-México-por-Cortés-Tenochtitlan-Painting.png'],
  ['earthquake', '1985 Mexico Earthquake - Collapsed General Hospital.jpg'],
  ['guadalajara', 'Panorámica Guadalajara desde edificio Bansi hacia norte (cropped).jpg'],
  ['tezonapa', 'Avenida Principal in Tezonapa.jpg'],
  ['tamaulipas', 'El Bernalito, en el valle abajo de la Cuesta de Llera - panoramio.jpg'],
]
const credits = []
for (const [name, file] of images) {
  const params = new URLSearchParams({ action: 'query', titles: `File:${file}`, prop: 'imageinfo', iiprop: 'url|extmetadata', iiurlwidth: '1280', format: 'json' })
  const response = await fetch(`https://commons.wikimedia.org/w/api.php?${params}`, { headers })
  if (!response.ok) throw new Error(`Commons metadata failed: ${response.status}`)
  const data = await response.json()
  const info = Object.values(data.query.pages)[0].imageinfo?.[0]
  if (!info) throw new Error(`No image information: ${file}`)
  let image = await fetch(info.thumburl || info.url, { headers })
  if (!image.ok) {
    const hash = createHash('md5').update(file.replaceAll(' ', '_')).digest('hex')
    image = await fetch(`https://upload.wikimedia.org/wikipedia/commons/${hash[0]}/${hash.slice(0, 2)}/${encodeURIComponent(file.replaceAll(' ', '_'))}`, { headers })
  }
  if (!image.ok) throw new Error(`Image failed: ${file} (${image.status})`)
  await writeFile(`public/images/${name}.jpg`, Buffer.from(await image.arrayBuffer()))
  const meta = info.extmetadata
  credits.push({ id: name, file, source: info.descriptionurl, author: meta.Artist?.value, license: meta.LicenseShortName?.value, licenseUrl: meta.LicenseUrl?.value, description: meta.ImageDescription?.value })
  console.log(`Saved ${name} (${meta.LicenseShortName?.value})`)
}
await writeFile('public/images/credits.json', JSON.stringify(credits, null, 2))
await writeFile('src/data/media-credits.json', JSON.stringify(credits, null, 2))
