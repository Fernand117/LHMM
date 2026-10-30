import type { HistoricalEvent } from './types'
import { researchedEvents } from './researched'
import { resolveAlias } from './researched/aliases'

export const events = researchedEvents
export const eventById = Object.fromEntries(events.map((event) => [event.id, event])) as Record<string, HistoricalEvent>

/**
 * Resolve a public story id, a guide code (internal) or a legacy saved id.
 * Withdrawn stories return null so old links and saved items do not open a
 * page that no longer has evidence behind it.
 */
export function resolveEventId(id: string) {
  const clean = id.trim()
  if (!clean) return null
  if (Object.hasOwn(eventById, clean)) return clean
  return resolveAlias(clean)
}
