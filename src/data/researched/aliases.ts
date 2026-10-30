import { researchedEvents } from './index'

// Codes from the topic directory resolve to the researched story that absorbed
// them. The directory is a guide, never a public source.
const codeAliases: Record<string, string> = {}

for (const event of researchedEvents) {
  for (const code of event.documentCodes ?? []) {
    // A shared code opens the first story that carries it.
    if (!codeAliases[code]) codeAliases[code] = event.id
  }
}

// Codes covered contextually by a story without being part of its canonical list.
const relatedCodes: Record<string, string> = {
  'P1-H01': 'p1-alianzas',
  'P1-P03': 'p1-virreinato',
  'P5-M10': 'p6-sida-1981',
}
for (const [code, story] of Object.entries(relatedCodes)) {
  if (!codeAliases[code]) codeAliases[code] = story
}

// Previous public identifiers. Old links keep working when a researched
// successor exists; withdrawn stories resolve to null instead of a dead page.
const legacyStories: Record<string, string> = {
  'llegada-cortes': 'p1-alianzas',
  'tenochtitlan': 'p1-toxcatl',
  'independencia': 'p3-dolores',
  'revolucion': 'p5-plan-san-luis',
  'constitucion': 'p5-constitucion-1917',
  'tlatelolco': 'p5-tlatelolco',
  'cartel-guadalajara': 'p6-cartel-guadalajara',
  'kiki-camarena': 'p6-cartel-guadalajara',
  'sismo-1985': 'p6-terremoto-1985',
  'caida-sistema': 'p6-eleccion-1988',
  'ezln': 'p6-tlcan-ezln-1994',
  'colosio': 'p6-colosio-1994',
  'sismo-2017': 'p6-sismos-2017',
  'pandemia': 'p6-covid-2020',
}

const legacyAliases: Record<string, string> = { ...legacyStories }

for (const [code, story] of Object.entries(codeAliases)) {
  const generated = code.toLowerCase()
  if (!legacyAliases[generated]) legacyAliases[generated] = story
}

// Codes that used to share an original story keep resolving to the same one.
const sharedOriginal: Record<string, string[]> = {
  'p5-h04': ['p5-constitucion-1917'],
  'p5-p04': ['p5-constitucion-1917'],
  'p5-h09': ['p5-tlatelolco'],
  'p5-p08': ['p5-tlatelolco'],
  'p5-s08': ['p5-tlatelolco'],
  'p6-c01': ['p6-cartel-guadalajara'],
  'p6-h01': ['p6-terremoto-1985'],
  'p6-d01': ['p6-terremoto-1985'],
  'p6-s01': ['p6-terremoto-1985'],
  'p6-h02': ['p6-eleccion-1988'],
  'p6-p01': ['p6-eleccion-1988'],
  'p6-h03': ['p6-tlcan-ezln-1994'],
  'p6-s02': ['p6-tlcan-ezln-1994'],
  'p6-h08': ['p6-covid-2020'],
  'p6-m07': ['p6-covid-2020'],
  'p6-d09': ['p6-sismos-2017'],
}
for (const [legacy, [story]] of Object.entries(sharedOriginal)) {
  legacyAliases[legacy] = story
}

export { codeAliases, legacyAliases }

export function resolveAlias(id: string) {
  const code = id.toUpperCase()
  if (Object.hasOwn(codeAliases, code)) return codeAliases[code]
  const lower = id.toLowerCase()
  if (Object.hasOwn(legacyAliases, id)) return legacyAliases[id]
  if (Object.hasOwn(legacyAliases, lower)) return legacyAliases[lower]
  return null
}
