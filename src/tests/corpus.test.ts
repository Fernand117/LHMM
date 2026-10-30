import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { existsSync, readFileSync } from 'node:fs'
import { personById } from '../data/catalog'
import { events } from '../data/events'
import periodMedia from '../data/period-media.json'
import { getPortrait, portraitCount, portraits } from '../data/portraits'
import { portraitExclusions } from '../data/portrait-policy'
import { eventVisual } from '../components/StoryVisual'
import { localNetwork, networkNeighborLimit } from '../lib/network'

interface LedgerCode {
  title: string
  year: string
  theme: string
  status: 'integrada' | 'relacionada' | 'duplicada' | 'retirada'
  stories: string[]
  reason?: string
  note?: string
}

interface Ledger {
  summary: { totalCodes: number; integrada: number; relacionada: number; duplicada: number; retirada: number; publishedStories: number }
  codes: Record<string, LedgerCode>
}

const ledger = JSON.parse(readFileSync('research/ledger.json', 'utf8')) as Ledger
const storyIds = new Set(events.map((event) => event.id))

describe('Cobertura y registro de retiradas', () => {
  it('el registro cubre las 360 entradas del directorio y coincide con las historias publicadas', () => {
    assert.equal(ledger.summary.totalCodes, 360)
    assert.equal(Object.keys(ledger.codes).length, 360)
    assert.equal(ledger.summary.publishedStories, events.length)
    const counted = { integrada: 0, relacionada: 0, duplicada: 0, retirada: 0 }
    for (const code of Object.values(ledger.codes)) counted[code.status]++
    assert.deepEqual(counted, {
      integrada: ledger.summary.integrada,
      relacionada: ledger.summary.relacionada,
      duplicada: ledger.summary.duplicada,
      retirada: ledger.summary.retirada,
    })
  })

  it('cada código integrado pertenece a una historia y cada historia declara sus códigos', () => {
    const publishedCodes = new Set(events.flatMap((event) => event.documentCodes ?? []))
    for (const [code, entry] of Object.entries(ledger.codes)) {
      assert.ok(entry.title && entry.year && entry.theme, `${code}: ficha incompleta`)
      if (entry.status === 'retirada') {
        assert.equal(entry.stories.length, 0, `${code}: una retirada no puede tener historia`)
        assert.ok(entry.reason && entry.reason.length > 30, `${code}: falta motivo de retirada`)
      } else {
        assert.ok(entry.stories.length > 0, `${code}: falta historia`)
        assert.ok(entry.stories.every((story) => storyIds.has(story)), `${code}: historia inexistente`)
      }
      if (entry.status === 'integrada') assert.ok(publishedCodes.has(code), `${code}: marcada integrada pero no publicada`)
      if (entry.status === 'duplicada') assert.equal(entry.stories.length, 2, `${code}: una duplicada debe repartirse entre dos historias`)
      if (entry.status === 'relacionada') assert.ok(entry.note, `${code}: falta explicación de la relación`)
    }
    for (const code of publishedCodes) assert.ok(ledger.codes[code], `${code}: publicado sin registro`)
  })

  it('una historia adicional sin código del directorio se explica en sus notas', () => {
    const withoutCodes = events.filter((event) => !event.documentCodes?.length)
    assert.deepEqual(withoutCodes.map((event) => event.id), ['p6-sarampion-2025'])
    assert.ok(withoutCodes[0].editorialNotes?.length)
  })
})

describe('Imágenes de época y retratos con atribución', () => {
  it('las imágenes de época existen, tienen licencia y no se presentan como el acontecimiento', () => {
    assert.ok(periodMedia.length >= 4)
    for (const item of periodMedia) {
      assert.ok(existsSync(`public${item.src}`), `${item.id}: falta el archivo`)
      assert.ok(item.kind && item.date && item.caption.length > 35)
      assert.ok(item.source.startsWith('https://commons.wikimedia.org/'))
      assert.ok(item.author && item.license)
      assert.equal(createHash('sha256').update(readFileSync(`public${item.src}`)).digest('hex'), item.sha256)
    }
  })

  it('publica imágenes locales con licencia, identidad y archivo de procedencia', () => {
    assert.ok(portraitCount >= 70)
    for (const portrait of Object.values(portraits)) {
      assert.ok(personById[portrait.personId])
      assert.ok(existsSync(`public${portrait.src}`))
      assert.match(portrait.license, /^(Public domain|CC0|CC BY(?:-SA)? [1-4]\.0)$/)
      assert.match(portrait.source, /^https:\/\/commons\.wikimedia\.org\/wiki\/File:/)
      assert.ok(portrait.author.length > 1 && portrait.caption.length > 35)
      assert.equal(createHash('sha256').update(readFileSync(`public${portrait.src}`)).digest('hex'), portrait.sha256)
      if (portrait.license.startsWith('CC BY')) assert.match(portrait.licenseUrl!, /^https:\/\/creativecommons\.org\//)
    }
  })

  it('no presenta paisajes, libros, escenas ambiguas o personas dudosas como retratos', () => {
    for (const id of Object.keys(portraitExclusions)) assert.equal(getPortrait(id), undefined)
    assert.equal(getPortrait('gargallo'), undefined)
    assert.equal(getPortrait('antonio-rojas'), undefined)
    assert.equal(getPortrait('constructor'), undefined)
    assert.equal(getPortrait('cuauhtemoc')!.kind, 'representacion')
    assert.equal(getPortrait('sor-juana')!.kind, 'representacion')
    assert.match(getPortrait('sor-juana')!.caption, /no una fotografía/)
    assert.equal(getPortrait('kiki')!.kind, 'fotografia')
  })

  it('no inventa una imagen para un acontecimiento contemporáneo sin material propio', () => {
    assert.equal(eventVisual(events.find((event) => event.id === 'p6-colosio-1994')!).src, undefined)
    assert.equal(eventVisual(events.find((event) => event.id === 'p6-sismos-2017')!).src, undefined)
    assert.equal(eventVisual(events.find((event) => event.id === 'p6-terremoto-1985')!).label, 'Fotografía de archivo')
    const colonial = eventVisual(events.find((event) => event.id === 'p1-volcanes')!)
    assert.equal(colonial.period?.id, 'period-conquest')
    assert.equal(colonial.label, 'Manuscrito del siglo XVI')
  })
})

describe('Red local', () => {
  it('limita los vecinos y no inventa relaciones', () => {
    const network = localNetwork(events, 'p6-terremoto-1985')
    assert.equal(network.center, 'p6-terremoto-1985')
    assert.ok(network.ids.length <= networkNeighborLimit + 1)
    assert.ok(network.edges.every((edge) => network.ids.includes(edge.from) && network.ids.includes(edge.to)))
    assert.equal(network.pageCount, 1)
    assert.equal(localNetwork([], 'cortes').ids.length, 0)
  })

  it('recorre páginas cuando hay más vecinos que el límite', () => {
    const network = localNetwork(events, 'p1-toxcatl')
    const second = localNetwork(events, 'p1-toxcatl', 1)
    assert.ok(network.neighborCount <= networkNeighborLimit || network.pageCount > 1)
    assert.equal(network.ids[0], 'p1-toxcatl')
    assert.equal(second.ids[0], 'p1-toxcatl')
  })
})
