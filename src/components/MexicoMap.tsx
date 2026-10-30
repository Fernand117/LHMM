import { useEffect, useMemo, useRef, useState } from 'react'
import { geoArea, geoMercator, geoPath } from 'd3-geo'
import type { FeatureCollection, Geometry } from 'geojson'
import { Compass, LocateFixed, Minus, Plus, RotateCcw } from 'lucide-react'
import { stateById } from '../data/catalog'
import type { HistoricalEvent } from '../data/types'

type MexicoGeoJSON = FeatureCollection<Geometry, { id: string; name: string }>

function reverseRings(geometry: Geometry): Geometry {
  if (geometry.type === 'Polygon') return { ...geometry, coordinates: geometry.coordinates.map((ring) => [...ring].reverse()) }
  if (geometry.type === 'MultiPolygon') return { ...geometry, coordinates: geometry.coordinates.map((polygon) => polygon.map((ring) => [...ring].reverse())) }
  return geometry
}

const majorLabels: Record<string, { dx: number; dy: number; anchor?: 'end' | 'start' }> = {
  'MX-JAL': { dx: -18, dy: -19, anchor: 'end' },
  'MX-CMX': { dx: 0, dy: 31 },
  'MX-VER': { dx: 30, dy: -12 },
  'MX-TAM': { dx: 20, dy: -10 },
  'MX-CHH': { dx: 19, dy: 4 },
}

interface Props {
  events: HistoricalEvent[]
  selectedState: string
  onSelectState: (state: string) => void
}

export default function MexicoMap({ events, selectedState, onSelectState }: Props) {
  const [geojson, setGeojson] = useState<MexicoGeoJSON | null>(null)
  const [error, setError] = useState(false)
  const [hovered, setHovered] = useState('')
  const [zoom, setZoom] = useState(1)
  const [pan, setPan] = useState({ x: 0, y: 0 })
  const drag = useRef<{ x: number; y: number; panX: number; panY: number; moved: boolean } | null>(null)

  useEffect(() => {
    const controller = new AbortController()
    fetch('/mexico-states.geo.json', { signal: controller.signal })
      .then((response) => { if (!response.ok) throw new Error('Map unavailable'); return response.json() as Promise<MexicoGeoJSON> })
      .then((data) => setGeojson({ ...data, features: data.features.map((feature) => geoArea(feature) > 2 * Math.PI ? { ...feature, geometry: reverseRings(feature.geometry) } : feature) }))
      .catch((cause: Error) => { if (cause.name !== 'AbortError') setError(true) })
    return () => controller.abort()
  }, [])

  const projection = useMemo(() => geojson ? geoMercator().fitExtent([[50, 80], [845, 480]], geojson) : null, [geojson])
  const path = useMemo(() => projection ? geoPath(projection) : null, [projection])
  const counts = useMemo(() => {
    const result: Record<string, number> = {}
    events.forEach((event) => event.states.forEach((state) => { result[state] = (result[state] ?? 0) + 1 }))
    return result
  }, [events])
  const markers = useMemo(() => {
    const groups = new Map<string, { coordinates: [number, number]; count: number }>()
    events.forEach((event) => {
      const state = event.states[0]
      const existing = groups.get(state)
      if (existing) existing.count++
      else groups.set(state, { coordinates: event.coordinates, count: 1 })
    })
    return [...groups.entries()]
  }, [events])

  const selectState = (id: string) => {
    if (drag.current?.moved) return
    onSelectState(id === selectedState ? '' : id)
  }

  return (
    <div className="map-canvas">
      <div className="map-heading">
        <span className="eyebrow">01 / EXPLORA EL TERRITORIO</span>
        <h3>Cada lugar tiene<br />una historia.</h3>
        <p>Selecciona un estado. Sigue el hilo.</p>
      </div>
      <div className="map-live"><span className="live-dot" /> {events.length} historias por descubrir</div>

      {error ? <div className="map-message"><Compass size={32} /><p>No pudimos cargar el mapa.</p><span>Puedes seguir explorando con el selector de estados.</span></div> : !geojson ? <div className="map-message" role="status"><Compass className="loading-compass" size={32} /><p>Preparando el territorio…</p></div> : (
        <svg
          className={`mexico-map ${zoom > 1 ? 'is-zoomed' : ''}`}
          viewBox="0 0 900 540"
          role="group"
          aria-label="Mapa interactivo de los 32 estados de México"
          onPointerDown={(event) => {
            if (zoom <= 1) return
            drag.current = { x: event.clientX, y: event.clientY, panX: pan.x, panY: pan.y, moved: false }
          }}
          onPointerMove={(event) => {
            if (!drag.current) return
            const dx = event.clientX - drag.current.x
            const dy = event.clientY - drag.current.y
            if (Math.abs(dx) + Math.abs(dy) > 5) {
              drag.current.moved = true
              event.currentTarget.setPointerCapture(event.pointerId)
              const ratio = 900 / event.currentTarget.getBoundingClientRect().width
              setPan({ x: Math.max(-300, Math.min(300, drag.current.panX + dx * ratio)), y: Math.max(-200, Math.min(200, drag.current.panY + dy * ratio)) })
            }
          }}
          onPointerUp={() => { if (drag.current && !drag.current.moved) drag.current = null }}
          onPointerCancel={() => { drag.current = null }}
        >
          <defs>
            <pattern id="map-grid" width="52" height="52" patternUnits="userSpaceOnUse"><path d="M 52 0 L 0 0 0 52" fill="none" stroke="#a0b5a0" strokeOpacity=".07" strokeWidth=".6" /></pattern>
            <radialGradient id="map-glow"><stop stopColor="#7d9767" stopOpacity=".15" /><stop offset="1" stopColor="#7d9767" stopOpacity="0" /></radialGradient>
            <filter id="pin-glow" x="-100%" y="-100%" width="300%" height="300%"><feGaussianBlur stdDeviation="3" /></filter>
          </defs>
          <rect width="900" height="540" fill="url(#map-grid)" />
          <ellipse cx="530" cy="300" rx="350" ry="250" fill="url(#map-glow)" />
          <g className="map-geography" transform={`translate(${450 + pan.x} ${280 + pan.y}) scale(${zoom}) translate(-450 -280)`}>
            {geojson.features.map((feature) => {
              const id = feature.properties.id
              const count = counts[id] ?? 0
              const selected = selectedState === id
              const fill = selected ? '#d6edb2' : count >= 5 ? '#8c9b72' : count >= 3 ? '#6c805e' : count > 0 ? '#52674e' : '#303e35'
              return <path key={id} d={path!(feature) ?? ''} fill={fill} className={`state-path ${selected ? 'is-selected' : ''} ${hovered === id ? 'is-hovered' : ''}`} stroke={selected ? '#e0f5bb' : '#82927a'} strokeOpacity={selected ? 1 : 0.38} strokeWidth={selected ? 1.5 : 0.7} vectorEffect="non-scaling-stroke" role="button" tabIndex={0} aria-label={`${stateById[id]}, ${count} acontecimientos`} aria-pressed={selected} onClick={() => selectState(id)} onKeyDown={(event) => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); drag.current = null; selectState(id) } }} onMouseEnter={() => setHovered(id)} onMouseLeave={() => setHovered('')} onFocus={() => setHovered(id)} onBlur={() => setHovered('')}><title>{stateById[id]} · {count} acontecimientos</title></path>
            })}
            {markers.map(([state, marker]) => {
              const point = projection!(marker.coordinates)
              if (!point) return null
              const [x, y] = point
              const dimmed = !!selectedState && state !== selectedState
              const label = majorLabels[state]
              const count = counts[state] ?? marker.count
              return <g key={state} className={`map-pin-group ${dimmed ? 'is-dimmed' : ''}`} transform={`translate(${x},${y})`}>
                <g className="map-marker" role="button" tabIndex={0} aria-label={`Explorar ${stateById[state]}, ${count} historias`} onClick={() => selectState(state)} onKeyDown={(event) => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); drag.current = null; selectState(state) } }} onMouseEnter={() => setHovered(state)} onMouseLeave={() => setHovered('')} onFocus={() => setHovered(state)} onBlur={() => setHovered('')}>
                <circle r="18" fill="#d2edaa" opacity=".10" /><circle r="10" fill="#d2edaa" opacity=".12" />
                <circle r={count > 1 ? 7 : 4} fill="#d6efb6" stroke="#202b23" strokeWidth="2" />
                {count > 1 && <text y="2.5" textAnchor="middle" fill="#23321f" fontSize="7" fontWeight="800">{count}</text>}
                </g>
                {label && <text x={label.dx} y={label.dy} textAnchor={label.anchor ?? 'start'} className="state-label" aria-hidden="true">{state === 'MX-CMX' ? 'CDMX' : stateById[state]}</text>}
              </g>
            })}
          </g>
          <text x="304" y="395" transform="rotate(26 304 395)" className="ocean-label">OCÉANO PACÍFICO</text>
          <text x="726" y="258" className="ocean-label" textAnchor="middle">GOLFO DE</text>
          <text x="726" y="276" className="ocean-label" textAnchor="middle">MÉXICO</text>
          <g transform="translate(825 80)" className="map-north"><text y="-20" textAnchor="middle">N</text><path d="M0 -10L-5 9L0 5L5 9Z" fill="currentColor" /><path d="M0 15V30M-9 21H9" stroke="currentColor" strokeWidth=".5" /></g>
        </svg>
      )}

      {hovered && <div className="map-tooltip" role="status"><span className="live-dot" /><strong>{stateById[hovered]}</strong><span>{counts[hovered] ?? 0} fichas</span></div>}

      <div className="map-bottom">
        <div className="map-controls" aria-label="Controles del mapa">
          <button className="map-control" aria-label="Acercar mapa" disabled={zoom >= 2.2} onClick={() => { drag.current = null; setZoom((value) => Math.min(2.2, value + .3)) }}><Plus size={17} /></button>
          <button className="map-control" aria-label="Alejar mapa" disabled={zoom <= 1} onClick={() => { drag.current = null; setZoom((value) => Math.max(1, value - .3)); setPan({ x: 0, y: 0 }) }}><Minus size={17} /></button>
          <button className="map-control" aria-label="Restablecer mapa" onClick={() => { drag.current = null; setZoom(1); setPan({ x: 0, y: 0 }) }}><LocateFixed size={17} /></button>
        </div>
        {selectedState ? <button className="map-clear" onClick={() => onSelectState('')}><RotateCcw size={13} /> Ver todo México</button> : <div className="map-density"><span>Menos</span><i /><i /><i /><i /><span>Más historias</span></div>}
        <span className="map-coordinate">23° 38′ N &nbsp; 102° 33′ O</span>
      </div>
    </div>
  )
}
