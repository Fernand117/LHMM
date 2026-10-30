import { connections } from '../data/connections'
import type { Connection, HistoricalEvent } from '../data/types'

export const networkNeighborLimit = 8
const priority: Record<Connection['kind'], number> = { documentada: 0, contexto: 1, mencion: 2 }

export function localNetwork(events: HistoricalEvent[], focus: string, page = 0) {
  const allowed = new Set(events.flatMap((event) => [event.id, ...event.people]))
  const possible = connections.filter((edge) => allowed.has(edge.from) && allowed.has(edge.to))
  const center = allowed.has(focus) ? focus : events[0]?.id ?? ''
  const neighborSet = new Set(
    possible
      .filter((edge) => edge.from === center || edge.to === center)
      .sort((a, b) => priority[a.kind] - priority[b.kind])
      .map((edge) => (edge.from === center ? edge.to : edge.from)),
  )
  const neighbors = [...neighborSet]
  const pageCount = Math.max(1, Math.ceil(neighbors.length / networkNeighborLimit))
  const currentPage = Math.max(0, page) % pageCount
  const ids = center ? [center, ...neighbors.slice(currentPage * networkNeighborLimit, (currentPage + 1) * networkNeighborLimit)] : []
  const visible = new Set(ids)
  return {
    center,
    ids,
    edges: possible.filter((edge) => visible.has(edge.from) && visible.has(edge.to)),
    availableNodes: [...allowed],
    neighborCount: neighbors.length,
    pageCount,
    currentPage,
  }
}
