export type CategoryId = 'territorio' | 'politica' | 'sociedad' | 'seguridad' | 'desastres'
export type ImageId = 'city' | 'revolution' | 'conquest' | 'earthquake' | 'guadalajara' | 'tezonapa' | 'tamaulipas'

export interface Source {
  id: string
  publisher: string
  title: string
  url: string
  kind: 'Periodismo' | 'Fuente institucional' | 'Investigación' | 'Verificación'
  date?: string
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
  coordinates: [number, number]
  category: CategoryId
  summary: string
  image: ImageId
  imageNote: string
  chapters: { title: string; text: string }[]
  people: string[]
  sourceIds: string[]
  claims?: Claim[]
  video?: { title: string; publisher: string; url: string }
}

export interface Connection {
  from: string
  to: string
  label: string
  description: string
  kind: 'documentada' | 'contexto'
  sourceIds: string[]
}

export interface Person {
  id: string
  name: string
  role: string
  description: string
}

export type ViewMode = 'mapa' | 'cronologia' | 'conexiones'

export interface Filters {
  query: string
  category: CategoryId | 'todos' | 'versiones'
  state: string
  startYear: number
  endYear: number
}
