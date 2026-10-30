import { categories, personById, stateById } from '../data/catalog'
import { connections } from '../data/connections'
import { events } from '../data/events'
import type { Filters, HistoricalEvent } from '../data/types'

export const defaultFilters: Filters = { query: '', category: 'todos', state: '', startYear: 1519, endYear: 2026 }

export function normalize(text: string) {
  return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLocaleLowerCase('es-MX')
}

export function filterEvents(items: HistoricalEvent[], filters: Filters, ignoreState = false) {
  const query = normalize(filters.query.trim())
  return items.filter((event) => {
    if (!ignoreState && filters.state && !event.states.includes(filters.state)) return false
    if (event.year > filters.endYear || (event.endYear ?? event.year) < filters.startYear) return false
    if (filters.category === 'versiones' && !event.claims?.length) return false
    if (filters.category !== 'todos' && filters.category !== 'versiones' && event.category !== filters.category) return false
    const haystack = normalize([event.title, event.shortTitle, event.summary, event.date, event.location, ...event.states.map((id) => stateById[id]), ...event.people.map((id) => personById[id].name), ...event.chapters.map((chapter) => chapter.text)].join(' '))
    return !query || query.split(/\s+/).every((term) => haystack.includes(term))
  })
}

export function getConnections(id: string) {
  return connections.filter((connection) => connection.from === id || connection.to === id)
}

export function connectedEvents(id: string) {
  return events.filter((event) => event.people.includes(id) || getConnections(id).some((connection) => connection.from === event.id || connection.to === event.id))
}

export function filtersFromUrl(search: string): Filters {
  const params = new URLSearchParams(search)
  const category = params.get('tema')
  const state = params.get('estado') ?? ''
  const startYear = Math.max(1519, Math.min(2026, Number(params.get('desde') ?? 1519) || 1519))
  const endYear = Math.max(startYear, Math.min(2026, Number(params.get('hasta') ?? 2026) || 2026))
  return {
    query: params.get('q') ?? '',
    category: category === 'versiones' || categories.some((item) => item.id === category) ? category as Filters['category'] : 'todos',
    state: stateById[state] ? state : '',
    startYear, endYear,
  }
}

export function filtersToParams(filters: Filters) {
  const params = new URLSearchParams()
  if (filters.query) params.set('q', filters.query)
  if (filters.category !== 'todos') params.set('tema', filters.category)
  if (filters.state) params.set('estado', filters.state)
  if (filters.startYear !== 1519) params.set('desde', String(filters.startYear))
  if (filters.endYear !== 2026) params.set('hasta', String(filters.endYear))
  return params
}
