import raw from './imported/document.json'

export interface DocumentEntry {
  code: string
  period: number
  theme: 'H' | 'P' | 'S' | 'C' | 'D' | 'M'
  yearLabel: string
  title: string
  location: string
  actors: string
  context: string
  relatedCodes: string[]
  sourceCodes: string[]
  paragraph: number
}

export const documentMetadata = raw.metadata
export const documentEntries = raw.entries as DocumentEntry[]
export const documentBibliography = raw.sources
export const documentAppendix = raw.claims
export const documentByCode = Object.fromEntries(documentEntries.map((entry) => [entry.code, entry])) as Record<string, DocumentEntry>
