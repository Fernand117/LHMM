import type { Source } from './types'
import { researchSources } from './research-sources'

// Only publications that were actually read and cited by a story. A source can
// support one specific claim in one story without endorsing the rest.
export const sources = researchSources
export const sourceById = Object.fromEntries(sources.map((source) => [source.id, source])) as Record<string, Source>
