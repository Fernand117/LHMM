import { period1 } from '../src/data/researched/period1'
import { period2 } from '../src/data/researched/period2'
import { period3 } from '../src/data/researched/period3'
import { period4 } from '../src/data/researched/period4'
import { period5 } from '../src/data/researched/period5'
import { period6 } from '../src/data/researched/period6'
import { documentEntries } from '../src/data/document'
import { researchSources } from '../src/data/research-sources'

const corpus = [...period1, ...period2, ...period3, ...period4, ...period5, ...period6]
const sourceIds = new Set(researchSources.map((source) => source.id))
const codes = new Set(documentEntries.map((entry) => entry.code))

console.log('stories', corpus.length)
console.log('codes covered', new Set(corpus.flatMap((event) => event.documentCodes ?? [])).size, 'of', codes.size)
console.log('duplicate ids', corpus.map((event) => event.id).filter((id, index) => corpus.findIndex((item) => item.id === id) !== index))
console.log('non-ascii ids', corpus.filter((event) => /[^\x00-\x7F]/.test(event.id)).map((event) => event.id))
const missingSources = [...new Set(corpus.flatMap((event) => [...event.sourceIds, ...(event.evidence ?? []).map((item) => item.sourceId)]))].filter((id) => !sourceIds.has(id))
console.log('missing sources', missingSources)
const badEvidence = corpus.flatMap((event) => (event.evidence ?? []).filter((item) => !event.sourceIds.includes(item.sourceId)).map((item) => `${event.id}: ${item.sourceId}`))
console.log('evidence source not in sourceIds', badEvidence)
const duplicateCodes = corpus.flatMap((event) => (event.documentCodes ?? []).map((code) => ({ code, id: event.id }))).reduce<Record<string, string[]>>((acc, item) => { (acc[item.code] ??= []).push(item.id); return acc }, {})
console.log('codes in multiple stories', Object.entries(duplicateCodes).filter(([, ids]) => ids.length > 1))
const uncovered = [...codes].filter((code) => !duplicateCodes[code])
console.log('uncovered codes', uncovered.length, uncovered.join(','))
const unknownCodes = Object.keys(duplicateCodes).filter((code) => !codes.has(code))
console.log('unknown codes', unknownCodes)
const badPeople = corpus.filter((event) => event.people.some((id) => !id))
console.log('empty people refs', badPeople.map((event) => event.id))
const noEvidence = corpus.filter((event) => !event.evidence?.length)
console.log('no evidence', noEvidence.map((event) => event.id))
console.log('per period', [period1, period2, period3, period4, period5, period6].map((period) => period.length))
