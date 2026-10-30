import raw from './portraits.json'
import { portraitCaptionOverrides, portraitExclusions, representationPortraits } from './portrait-policy'

interface AcquiredPortrait {
  personId: string
  src: string
  file: string
  author: string
  license: string
  licenseUrl: string | null
  source: string
  originalSource: string
  originalUrl: string | null
  caption: string
  description: string
  sha256: string
}
export interface Portrait extends AcquiredPortrait { kind: 'fotografia' | 'representacion' }

export function displayAuthor(author: string) {
  return /^(?:unknown|unidentified|anonymous)/i.test(author.trim()) ? 'Autor no identificado (ver archivo)' : author.replace(/<[^>]*>/g, '').trim()
}

export const portraits: Record<string, Portrait> = Object.fromEntries(Object.entries(raw as Record<string, AcquiredPortrait>)
  .filter(([id]) => !portraitExclusions[id])
  .map(([id, item]) => [id, {
    ...item, author: displayAuthor(item.author),
    kind: representationPortraits.has(id) ? 'representacion' : 'fotografia',
    caption: portraitCaptionOverrides[id] ?? (representationPortraits.has(id) && !/representaci|fotograf[ií]a del personaje/i.test(item.caption)
      ? `Retrato o representación; no es una fotografía del personaje. ${item.caption}` : item.caption),
  }]))

export function getPortrait(id: string) { return Object.hasOwn(portraits, id) ? portraits[id] : undefined }
export const portraitCount = Object.keys(portraits).length
