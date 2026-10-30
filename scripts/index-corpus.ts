import { writeFileSync } from 'node:fs'
import { period1 } from '../src/data/researched/period1'
import { period2 } from '../src/data/researched/period2'
import { period3 } from '../src/data/researched/period3'
import { period4 } from '../src/data/researched/period4'
import { period5 } from '../src/data/researched/period5'
import { period6 } from '../src/data/researched/period6'

const corpus = [...period1, ...period2, ...period3, ...period4, ...period5, ...period6]
const index = corpus.map((event) => ({
  id: event.id,
  year: event.year,
  endYear: event.endYear,
  title: event.title,
  shortTitle: event.shortTitle,
  category: event.category,
  review: event.review,
  people: event.people,
  sourceIds: event.sourceIds,
  documentCodes: event.documentCodes ?? [],
  chapters: event.chapters.map((chapter) => chapter.title),
}))
writeFileSync('research/corpus-index.json', JSON.stringify(index, null, 2))
console.log('wrote', index.length)
