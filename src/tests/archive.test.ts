import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { existsSync, readFileSync } from 'node:fs'
import { categories, people, states } from '../data/catalog'
import { connections } from '../data/connections'
import { eventById, events, resolveEventId } from '../data/events'
import { codeAliases, legacyAliases } from '../data/researched/aliases'
import { sources } from '../data/sources'
import { connectedEvents, defaultFilters, filterEvents, filtersFromUrl, filtersToParams, normalize } from '../lib/archive'

describe('Integridad del archivo investigado', () => {
  it('publica 118 historias y una cartografía local de los 32 estados', () => {
    assert.equal(events.length, 118)
    const geojson = JSON.parse(readFileSync('public/mexico-states.geo.json', 'utf8')) as { features: { properties: { id: string } }[] }
    assert.equal(geojson.features.length, 32)
    assert.deepEqual(new Set(geojson.features.map((feature) => feature.properties.id)), new Set(states.map((state) => state.id)))
  })

  it('no repite identificadores', () => {
    for (const collection of [events, people, sources, states]) assert.equal(new Set(collection.map((item) => item.id)).size, collection.length)
    assert.equal(new Set([...events, ...people].map((item) => item.id)).size, events.length + people.length)
    for (const event of events) assert.match(event.id, /^[a-z0-9-]+$/, `${event.id}: el identificador debe ser ASCII`)
  })

  it('todas las referencias, personajes, categorías, estados e imágenes existen', () => {
    const sourceIds = new Set(sources.map((source) => source.id))
    const personIds = new Set(people.map((person) => person.id))
    const stateIds = new Set(states.map((state) => state.id))
    for (const event of events) {
      assert.ok(event.sourceIds.length > 0, `${event.id}: falta una fuente`)
      assert.ok(event.chapters.length >= 2, `${event.id}: faltan secciones`)
      assert.ok(categories.some((category) => category.id === event.category))
      assert.ok(event.sourceIds.every((id) => sourceIds.has(id)))
      assert.ok(event.people.every((id) => personIds.has(id)))
      assert.ok(event.states.every((id) => stateIds.has(id)))
      assert.ok(event.year >= 1519 && event.year <= 2026, `${event.id}: año fuera del atlas`)
      assert.ok((event.endYear ?? event.year) >= event.year, `${event.id}: periodo invertido`)
      if (event.image) {
        assert.ok(existsSync(`public/images/${event.image}.jpg`), `${event.id}: falta la imagen`)
        assert.ok(event.imageNote && event.imageNote.length > 30, `${event.id}: falta contexto fotográfico`)
      }
    }
  })

  it('cada historia declara revisión y evidencia concreta', () => {
    const sourceIds = new Set(sources.map((source) => source.id))
    for (const event of events) {
      assert.ok(['verificada', 'corregida', 'contextual'].includes(event.review ?? ''), `${event.id}: falta estado de revisión`)
      assert.ok(event.evidence?.length, `${event.id}: falta evidencia`)
      for (const item of event.evidence ?? []) {
        assert.ok(sourceIds.has(item.sourceId), `${event.id}: evidencia de una fuente inexistente`)
        assert.ok(event.sourceIds.includes(item.sourceId), `${event.id}: la evidencia no está entre sus fuentes`)
        assert.ok(item.supports.trim().length > 20, `${event.id}: la evidencia no explica qué sostiene`)
      }
    }
  })

  it('no conserva el modelo editorial anterior ni rastros públicos del directorio', () => {
    for (const event of events) {
      assert.equal('editorial' in event, false, `${event.id}: conserva editorial`)
      assert.equal('paralelo' in event, false, `${event.id}: conserva paralelo`)
      assert.ok(!event.sourceIds.some((id) => id.startsWith('word-')), `${event.id}: cita una fuente del directorio`)
    }
    for (const connection of connections) assert.notEqual(connection.kind, 'paralelo' as never)
    assert.equal('editorial' in defaultFilters, false)
  })

  it('cada conexión explica su tipo y tiene fuentes', () => {
    const nodes = new Set([...events, ...people].map((item) => item.id))
    const pairs = new Set<string>()
    for (const connection of connections) {
      assert.ok(nodes.has(connection.from) && nodes.has(connection.to))
      assert.notEqual(connection.from, connection.to)
      assert.ok(connection.description.length > 35)
      assert.ok(['documentada', 'contexto', 'mencion'].includes(connection.kind))
      assert.ok(connection.sourceIds.length > 0 && connection.sourceIds.every((id) => sources.some((source) => source.id === id)))
      const pair = [connection.from, connection.to].sort().join('|')
      assert.ok(!pairs.has(pair), `conexión duplicada: ${pair}`)
      pairs.add(pair)
      if (connection.kind === 'mencion') assert.match(connection.description, /mención/i)
    }
  })

  it('los enlaces de las fuentes son URL web, no búsquedas inventadas', () => {
    for (const source of sources) {
      const url = new URL(source.url)
      assert.ok(url.protocol === 'https:' || url.protocol === 'http:')
      assert.ok(!url.searchParams.has('q'))
    }
  })

  it('los códigos del directorio resuelven a una historia o a null, nunca a una página vacía', () => {
    for (const [code, story] of Object.entries(codeAliases)) {
      assert.ok(eventById[story], `${code}: alias roto`)
      assert.equal(resolveEventId(code), story)
      assert.equal(resolveEventId(code.toLowerCase()), story)
    }
    for (const [legacy, story] of Object.entries(legacyAliases)) assert.ok(eventById[story], `${legacy}: alias heredado roto`)
    assert.equal(resolveEventId('P6-H01'), 'p6-terremoto-1985')
    assert.equal(resolveEventId('sismo-1985'), 'p6-terremoto-1985')
    assert.equal(resolveEventId('P6-H04'), 'p6-colosio-1994')
    assert.equal(resolveEventId('P9-H99'), null)
    assert.equal(resolveEventId('no-existe'), null)
    assert.equal(resolveEventId('constructor'), null)
    assert.equal(resolveEventId('__proto__'), null)
  })

  it('conserva los códigos compartidos y las precisiones editoriales', () => {
    assert.equal(eventById['p6-colosio-1994'].documentCodes?.includes('P6-H04'), true)
    assert.equal(eventById['p6-crisis-1994'].documentCodes?.includes('P6-H04'), true)
    assert.ok(eventById['p6-sida-1981'].editorialNotes?.some((note) => note.includes('1981')))
    assert.equal(eventById['p6-sida-1981'].year, 1981)
    assert.ok(eventById['p6-sarampion-2025'].editorialNotes?.some((note) => note.includes('no incluye')))
    assert.equal(eventById['p6-sarampion-2025'].documentCodes, undefined)
  })
})

describe('Exploración y enlaces compartibles', () => {
  it('sin filtros muestra toda la colección', () => {
    assert.equal(filterEvents(events, defaultFilters).length, events.length)
  })

  it('busca sin distinguir acentos, mayúsculas, personajes ni códigos internos', () => {
    assert.equal(normalize('MéXICO'), 'mexico')
    assert.ok(filterEvents(events, { ...defaultFilters, query: 'CALDERON' }).some((event) => event.id === 'p6-eleccion-2006'))
    assert.ok(filterEvents(events, { ...defaultFilters, query: 'Kiki Guadalajara' }).some((event) => event.id === 'p6-cartel-guadalajara'))
    assert.ok(filterEvents(events, { ...defaultFilters, query: 'P6-H01' }).some((event) => event.id === 'p6-terremoto-1985'))
  })

  it('combina lugar, tema, texto y periodo sin ignorar filtros', () => {
    const result = filterEvents(events, { ...defaultFilters, state: 'MX-JAL', category: 'seguridad', query: 'Kiki', startYear: 1985, endYear: 1985 })
    assert.ok(result.some((event) => event.id === 'p6-cartel-guadalajara'))
    assert.ok(result.every((event) => event.category === 'seguridad' && event.states.includes('MX-JAL')))
    assert.ok(filterEvents(events, { ...defaultFilters, state: 'MX-OAX' }).length > 0)
  })

  it('los periodos se filtran por intersección, no solo por el año inicial', () => {
    assert.ok(filterEvents(events, { ...defaultFilters, startYear: 1917, endYear: 1917 }).some((event) => event.id === 'p5-constitucion-1917'))
    assert.ok(!filterEvents(events, { ...defaultFilters, startYear: 2020, endYear: 2020 }).some((event) => event.id === 'p6-sismos-2017'))
  })

  it('las épocas usan rangos y no una etiqueta fija', () => {
    assert.ok(filterEvents(events, { ...defaultFilters, era: 'p6' }).every((event) => (event.endYear ?? event.year) >= 1983 && event.year <= 2026))
    assert.ok(filterEvents(events, { ...defaultFilters, era: 'p4' }).some((event) => event.id === 'p4-puebla-1862'))
  })

  it('las versiones solo muestran fichas con un análisis de evidencia', () => {
    const result = filterEvents(events, { ...defaultFilters, category: 'versiones' })
    assert.ok(result.every((event) => !!event.claims?.length))
    assert.equal(result.length, events.filter((event) => !!event.claims?.length).length)
  })

  it('mantiene la cartografía nacional al filtrar un estado', () => {
    assert.equal(filterEvents(events, { ...defaultFilters, state: 'MX-JAL' }).length, 6)
    assert.equal(filterEvents(events, { ...defaultFilters, state: 'MX-JAL' }, true).length, events.length)
  })

  it('codifica y recupera filtros en la URL', () => {
    const filters = { ...defaultFilters, query: 'México y poder', category: 'politica' as const, state: 'MX-CMX', startYear: 1980, endYear: 1994, era: 'p6' }
    assert.deepEqual(filtersFromUrl(filtersToParams(filters).toString()), filters)
  })

  it('rechaza parámetros desconocidos y acota los años', () => {
    assert.deepEqual(filtersFromUrl('?tema=inventado&estado=ZZ&desde=foo&hasta=9999'), defaultFilters)
    const reversed = filtersFromUrl('?desde=2020&hasta=1519')
    assert.equal(reversed.startYear, reversed.endYear)
  })

  it('los personajes llevan a sus acontecimientos', () => {
    assert.ok(connectedEvents('salinas').some((event) => event.id === 'p6-eleccion-1988'))
    assert.ok(connectedEvents('kiki').some((event) => event.id === 'p6-cartel-guadalajara'))
  })
})
