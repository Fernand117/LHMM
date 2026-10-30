import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { existsSync, readFileSync } from 'node:fs'
import { categories, people, states } from '../data/catalog'
import { connections } from '../data/connections'
import { events, eventById } from '../data/events'
import { sources } from '../data/sources'
import { connectedEvents, defaultFilters, filterEvents, filtersFromUrl, filtersToParams, normalize } from '../lib/archive'

describe('Integridad del archivo', () => {
  it('contiene 20 fichas y una cartografía local de los 32 estados', () => {
    assert.equal(events.length, 20)
    const geojson = JSON.parse(readFileSync('public/mexico-states.geo.json', 'utf8')) as { features: { properties: { id: string } }[] }
    assert.equal(geojson.features.length, 32)
    assert.deepEqual(new Set(geojson.features.map((feature) => feature.properties.id)), new Set(states.map((state) => state.id)))
  })

  it('no repite identificadores', () => {
    for (const collection of [events, people, sources, states]) assert.equal(new Set(collection.map((item) => item.id)).size, collection.length)
    assert.equal(new Set([...events, ...people].map((item) => item.id)).size, events.length + people.length)
  })

  it('todas las referencias, personajes, categorías, estados e imágenes existen', () => {
    const sourceIds = new Set(sources.map((source) => source.id))
    const personIds = new Set(people.map((person) => person.id))
    const stateIds = new Set(states.map((state) => state.id))
    for (const event of events) {
      assert.ok(event.sourceIds.length > 0, `${event.id}: falta una fuente`)
      assert.ok(event.chapters.length >= 3, `${event.id}: faltan secciones`)
      assert.ok(categories.some((category) => category.id === event.category))
      assert.ok(event.sourceIds.every((id) => sourceIds.has(id)))
      assert.ok(event.people.every((id) => personIds.has(id)))
      assert.ok(event.states.length > 0 && event.states.every((id) => stateIds.has(id)))
      assert.ok(existsSync(`public/images/${event.image}.jpg`), `${event.id}: falta la imagen`)
      assert.ok(event.imageNote.length > 30, `${event.id}: falta contexto fotográfico`)
      for (const claim of event.claims ?? []) assert.ok(claim.sourceIds.length > 0 && claim.sourceIds.every((id) => sourceIds.has(id)))
    }
  })

  it('cada conexión explica su tipo y tiene fuentes', () => {
    const nodes = new Set([...events, ...people].map((item) => item.id))
    for (const connection of connections) {
      assert.ok(nodes.has(connection.from) && nodes.has(connection.to))
      assert.notEqual(connection.from, connection.to)
      assert.ok(connection.description.length > 35)
      assert.ok(['documentada', 'contexto'].includes(connection.kind))
      assert.ok(connection.sourceIds.length > 0 && connection.sourceIds.every((id) => sources.some((source) => source.id === id)))
    }
  })

  it('conserva las precisiones editoriales de los casos sensibles', () => {
    assert.equal(eventById.mencho.location, 'Tapalpa, Jalisco')
    assert.ok(eventById['fragmentacion-zetas'].title.includes('no desaparición'))
    assert.deepEqual(eventById['toribio-gargallo'].states, ['MX-VER'])
    assert.ok(eventById['sismo-2017'].claims?.some((claim) => claim.status === 'Sin evidencia'))
  })

  it('los enlaces de las fuentes son URL web, no búsquedas inventadas', () => {
    for (const source of sources) {
      const url = new URL(source.url)
      assert.ok(url.protocol === 'https:' || url.protocol === 'http:')
      assert.ok(!url.searchParams.has('q'))
    }
  })
})

describe('Exploración y enlaces compartibles', () => {
  it('sin filtros muestra toda la colección', () => {
    assert.equal(filterEvents(events, defaultFilters).length, events.length)
  })

  it('busca sin distinguir acentos, mayúsculas ni nombres de personajes', () => {
    assert.equal(normalize('MéXICO'), 'mexico')
    assert.ok(filterEvents(events, { ...defaultFilters, query: 'CALDERON' }).some((event) => event.id === 'guerra-narco'))
    assert.ok(filterEvents(events, { ...defaultFilters, query: 'Kiki Guadalajara' }).some((event) => event.id === 'kiki-camarena'))
    assert.ok(filterEvents(events, { ...defaultFilters, query: 'Toribio' }).some((event) => event.id === 'toribio-gargallo'))
  })

  it('combina lugar, tema, texto y periodo sin ignorar filtros', () => {
    const result = filterEvents(events, { ...defaultFilters, state: 'MX-JAL', category: 'seguridad', query: 'Kiki', startYear: 1985, endYear: 1985 })
    assert.ok(result.some((event) => event.id === 'kiki-camarena'))
    assert.ok(result.every((event) => event.category === 'seguridad' && event.states.includes('MX-JAL')))
    assert.equal(filterEvents(events, { ...defaultFilters, state: 'MX-OAX' }).length, 0)
  })

  it('los periodos se filtran por intersección, no solo por el año inicial', () => {
    assert.ok(filterEvents(events, { ...defaultFilters, startYear: 1917, endYear: 1917 }).some((event) => event.id === 'revolucion'))
    assert.ok(!filterEvents(events, { ...defaultFilters, startYear: 2020, endYear: 2020 }).some((event) => event.id === 'sismo-2017'))
  })

  it('las versiones solo muestran fichas con un análisis de evidencia', () => {
    const result = filterEvents(events, { ...defaultFilters, category: 'versiones' })
    assert.equal(result.length, 3)
    assert.ok(result.every((event) => !!event.claims?.length))
  })

  it('mantiene la cartografía nacional al filtrar un estado', () => {
    assert.equal(filterEvents(events, { ...defaultFilters, state: 'MX-JAL' }).length, 3)
    assert.equal(filterEvents(events, { ...defaultFilters, state: 'MX-JAL' }, true).length, events.length)
  })

  it('codifica y recupera filtros en la URL', () => {
    const filters = { query: 'México y poder', category: 'politica' as const, state: 'MX-CMX', startYear: 1980, endYear: 1994 }
    assert.deepEqual(filtersFromUrl(filtersToParams(filters).toString()), filters)
  })

  it('rechaza parámetros desconocidos y acota los años', () => {
    assert.deepEqual(filtersFromUrl('?tema=inventado&estado=ZZ&desde=foo&hasta=9999'), defaultFilters)
    const reversed = filtersFromUrl('?desde=2020&hasta=1519')
    assert.equal(reversed.startYear, reversed.endYear)
  })

  it('los personajes llevan a sus acontecimientos', () => {
    assert.ok(connectedEvents('salinas').some((event) => event.id === 'caida-sistema'))
    assert.ok(connectedEvents('kiki').some((event) => event.id === 'kiki-camarena'))
  })
})
