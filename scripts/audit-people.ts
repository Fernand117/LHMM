import { period1 } from '../src/data/researched/period1'
import { period2 } from '../src/data/researched/period2'
import { period3 } from '../src/data/researched/period3'
import { period4 } from '../src/data/researched/period4'
import { period5 } from '../src/data/researched/period5'
import { period6 } from '../src/data/researched/period6'
import { people } from '../src/data/catalog'

const corpus = [...period1, ...period2, ...period3, ...period4, ...period5, ...period6]
const personIds = new Set(people.map((person) => person.id))
const missing = [...new Set(corpus.flatMap((event) => event.people))].filter((id) => !personIds.has(id))
console.log('missing people', missing)
const unusedPeople = people.filter((person) => !corpus.some((event) => event.people.includes(person.id))).map((person) => person.id)
console.log('catalog people not in any story', unusedPeople.length, unusedPeople)
console.log('images', corpus.filter((event) => event.image).map((event) => `${event.id}:${event.image}`))
console.log('claims', corpus.filter((event) => event.claims?.length).map((event) => event.id))
console.log('videos', corpus.filter((event) => event.video).map((event) => event.id))
console.log('editorialNotes', corpus.filter((event) => event.editorialNotes?.length).map((event) => event.id))
