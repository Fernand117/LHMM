export type CategoryId = 'territorio' | 'politica' | 'sociedad' | 'seguridad' | 'desastres' | 'salud'
export type ImageId = 'city' | 'revolution' | 'conquest' | 'earthquake' | 'guadalajara' | 'tezonapa' | 'tamaulipas'
export type ReviewStatus = 'verificada' | 'corregida' | 'contextual'

export interface Source {
  id: string
  publisher: string
  title: string
  url: string
  kind: 'Periodismo' | 'Fuente institucional' | 'Investigación' | 'Verificación'
  date?: string
  note?: string
}

/** What a specific source supports in a specific story. A citation is not a blanket endorsement. */
export interface Evidence {
  sourceId: string
  locator?: string
  supports: string
}

export interface Claim {
  title: string
  status: 'Sin evidencia' | 'En disputa' | 'Desmentido'
  explanation: string
  sourceIds: string[]
}

export interface HistoricalEvent {
  id: string
  title: string
  shortTitle: string
  year: number
  endYear?: number
  date: string
  location: string
  states: string[]
  coordinates?: [number, number]
  geographicScope?: 'local' | 'regional' | 'nacional' | 'exterior' | 'por-localizar'
  geographicNote?: string
  category: CategoryId
  summary: string
  image?: ImageId
  imageNote?: string
  chapters: { title: string; text: string }[]
  people: string[]
  sourceIds: string[]
  evidence?: Evidence[]
  review?: ReviewStatus
  claims?: Claim[]
  video?: { title: string; publisher: string; url: string }
  /** Internal traceability to the topic directory. Never displayed as provenance. */
  documentCodes?: string[]
  editorialNotes?: string[]
  mentionedActors?: string
}

export interface Connection {
  from: string
  to: string
  label: string
  description: string
  kind: 'documentada' | 'contexto' | 'mencion'
  sourceIds: string[]
  documentCodes?: string[]
}

export interface Person {
  id: string
  name: string
  role: string
  description: string
  aliases?: string[]
  portraitPage?: string
  portraitNote?: string
}

export type ViewMode = 'mapa' | 'cronologia' | 'conexiones'

export interface Filters {
  query: string
  category: CategoryId | 'todos' | 'versiones'
  state: string
  startYear: number
  endYear: number
  era: string
}
