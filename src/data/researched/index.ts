import type { HistoricalEvent } from '../types'
import { period1 } from './period1'
import { period2 } from './period2'
import { period3 } from './period3'
import { period4 } from './period4'
import { period5 } from './period5'
import { period6 } from './period6'

// The public corpus. Each story was rewritten from read evidence; the guide
// codes in `documentCodes` are internal traceability only.
export const researchedEvents: HistoricalEvent[] = [
  ...period1,
  ...period2,
  ...period3,
  ...period4,
  ...period5,
  ...period6,
]
