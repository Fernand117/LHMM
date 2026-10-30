import { useMemo, useState } from 'react'
import { ArrowUpRight, GitBranch, Info, UserRound, X } from 'lucide-react'
import { categoryById, personById } from '../data/catalog'
import { connections } from '../data/connections'
import { eventById } from '../data/events'
import { sourceById } from '../data/sources'
import type { Connection, HistoricalEvent } from '../data/types'

interface Props { events: HistoricalEvent[]; focus: string; onFocus: (id: string) => void }

export default function ConnectionGraph({ events, focus, onFocus }: Props) {
  const [selectedLink, setSelectedLink] = useState<Connection | null>(null)
  const { nodes, edges, center, availableNodes } = useMemo(() => {
    const allowed = new Set(events.flatMap((event) => [event.id, ...event.people]))
    const possible = connections.filter((edge) => allowed.has(edge.from) && allowed.has(edge.to))
    const start = allowed.has(focus) ? focus : events.find((event) => possible.some((edge) => edge.from === event.id || edge.to === event.id))?.id ?? events[0]?.id
    if (!start) return { nodes: [], edges: [], center: '', availableNodes: [] }
    const depths = new Map<string, number>([[start, 0]])
    const parents = new Map<string, string>()
    for (let depth = 0; depth < 3; depth++) {
      possible.forEach((edge) => {
        for (const [a, b] of [[edge.from, edge.to], [edge.to, edge.from]]) {
          if (depths.get(a) === depth && !depths.has(b)) { depths.set(b, depth + 1); parents.set(b, a) }
        }
      })
    }
    const points = new Map<string, { x: number; y: number }>([[start, { x: 440, y: 290 }]])
    const neighbors = [...depths].filter(([, depth]) => depth === 1).map(([id]) => id)
    neighbors.forEach((id, index) => {
      const angle = -Math.PI / 2 + index * 2 * Math.PI / Math.max(neighbors.length, 1)
      points.set(id, { x: 440 + Math.cos(angle) * 205, y: 290 + Math.sin(angle) * 140 })
      const children = [...depths].filter(([child, depth]) => depth > 1 && parents.get(child) === id).map(([child]) => child)
      children.forEach((child, childIndex) => {
        const childAngle = angle + (childIndex - (children.length - 1) / 2) * .6
        points.set(child, { x: 440 + Math.cos(childAngle) * 320, y: 290 + Math.sin(childAngle) * 205 })
        const grandchild = [...depths].find(([other]) => parents.get(other) === child)?.[0]
        if (grandchild) points.set(grandchild, { x: 440 + Math.cos(childAngle + .35) * 350, y: 290 + Math.sin(childAngle + .35) * 220 })
      })
    })
    const nodes = [...depths].filter(([id]) => points.has(id)).map(([id, depth]) => ({ id, depth, ...points.get(id)!, name: eventById[id]?.shortTitle ?? personById[id]?.name ?? id, person: !!personById[id] }))
    return { nodes, edges: possible.filter((edge) => points.has(edge.from) && points.has(edge.to)), center: start, availableNodes: [...allowed] }
  }, [events, focus])

  return <div className="graph-view">
    <div className="inner-view-heading graph-heading"><div><span className="eyebrow">03 / CONECTA LOS PUNTOS</span><h3>Ninguna historia está sola.</h3><p>Selecciona un nodo para seguir su historia.</p></div><label className="graph-select"><span className="sr-only">Centro de la red</span><select value={center} onChange={(event) => { onFocus(event.target.value); setSelectedLink(null) }}>{availableNodes.map((id) => <option key={id} value={id}>{eventById[id]?.shortTitle ?? personById[id]?.name}</option>)}</select></label></div>
    <svg viewBox="0 0 880 535" className="connection-svg" aria-label="Red de relaciones entre acontecimientos y personajes">
      <defs><pattern id="graph-dots" width="22" height="22" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r=".6" fill="#8d9c86" opacity=".15" /></pattern><radialGradient id="graph-halo"><stop stopColor="#b4cb95" stopOpacity=".08" /><stop offset="1" stopColor="#b4cb95" stopOpacity="0" /></radialGradient></defs>
      <rect width="880" height="535" fill="url(#graph-dots)" /><circle cx="440" cy="290" r="270" fill="url(#graph-halo)" />
      <ellipse cx="440" cy="290" rx="205" ry="140" fill="none" stroke="#8d9c86" strokeOpacity=".09" /><ellipse cx="440" cy="290" rx="320" ry="205" fill="none" stroke="#8d9c86" strokeOpacity=".07" />
      {edges.map((edge) => {
        const a = nodes.find((node) => node.id === edge.from)!
        const b = nodes.find((node) => node.id === edge.to)!
        const active = selectedLink === edge
        return <g key={`${edge.from}-${edge.to}`} className="graph-edge" role="button" tabIndex={0} aria-label={`Relación: ${a.name} y ${b.name}: ${edge.label}`} onClick={() => setSelectedLink(edge)} onKeyDown={(event) => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); setSelectedLink(edge) } }}><path d={`M ${a.x} ${a.y} Q ${(a.x + b.x) / 2 + 12} ${(a.y + b.y) / 2 - 12} ${b.x} ${b.y}`} fill="none" stroke={active ? '#d6edb2' : '#93a184'} strokeOpacity={active ? 1 : .45} strokeWidth={active ? 2 : 1} strokeDasharray={edge.kind === 'contexto' ? '4 5' : undefined} /><path d={`M ${a.x} ${a.y} L ${b.x} ${b.y}`} stroke="transparent" strokeWidth="14" /><title>{edge.label} · {edge.kind === 'contexto' ? 'Relación de contexto' : 'Vínculo documentado'}</title></g>
      })}
      {nodes.map((node) => {
        const color = node.person ? '#d9c6ab' : categoryById[eventById[node.id].category].color
        const centerNode = node.id === center
        const words = node.name.split(' ')
        const split = words.length > 3 ? Math.ceil(words.length / 2) : words.length
        return <g key={node.id} className={`graph-node ${centerNode ? 'is-center' : ''}`} role="button" tabIndex={0} aria-label={`${node.person ? 'Personaje' : 'Acontecimiento'}: ${node.name}`} aria-pressed={centerNode} onClick={() => { onFocus(node.id); setSelectedLink(null) }} onKeyDown={(event) => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); onFocus(node.id); setSelectedLink(null) } }} transform={`translate(${node.x} ${node.y})`}>
          <circle r={centerNode ? 42 : 25} fill={color} opacity={centerNode ? .10 : .05} /><circle r={centerNode ? 30 : 15} fill={centerNode ? '#d6edb2' : '#27342b'} stroke={centerNode ? '#d6edb2' : color} strokeWidth={centerNode ? 1 : 1.3} />
          {node.person ? <UserRound x={centerNode ? -10 : -6} y={centerNode ? -10 : -6} width={centerNode ? 20 : 12} height={centerNode ? 20 : 12} color={centerNode ? '#29351f' : color} /> : <text textAnchor="middle" y={centerNode ? 4 : 3} fill={centerNode ? '#29351f' : color} fontSize={centerNode ? 12 : 7} fontWeight="700">{eventById[node.id].year}</text>}
          <text y={centerNode ? 57 : 37} textAnchor="middle" className="graph-node-label"><tspan x="0">{words.slice(0, split).join(' ')}</tspan>{split < words.length && <tspan x="0" dy="16">{words.slice(split).join(' ')}</tspan>}</text>
          {centerNode && <text y="-55" textAnchor="middle" className="graph-center-label">ESTÁS AQUÍ</text>}
        </g>
      })}
    </svg>
    {nodes.length <= 1 && <div className="graph-empty-note"><GitBranch size={18} /><span>Esta ficha aún no tiene conexiones publicadas. No inventamos vínculos para llenar la red.</span></div>}
    {selectedLink && <div className="graph-link-detail"><button className="icon-button" aria-label="Cerrar relación" onClick={() => setSelectedLink(null)}><X size={15} /></button><span className="eyebrow">{selectedLink.kind === 'documentada' ? 'VÍNCULO DOCUMENTADO' : 'RELACIÓN DE CONTEXTO'}</span><strong>{selectedLink.label}</strong><p>{selectedLink.description}</p><a href={sourceById[selectedLink.sourceIds[0]].url} target="_blank" rel="noreferrer">Consultar: {sourceById[selectedLink.sourceIds[0]].publisher}<ArrowUpRight size={12} /></a></div>}
    <div className="graph-legend"><span><i className="legend-event" /> Acontecimiento</span><span><UserRound size={12} /> Personaje</span><span className="graph-line-key">— Documentado &nbsp; ┄ Contexto</span></div>
    <p className="graph-disclaimer"><Info size={13} /> Una conexión no implica causalidad ni complicidad. Selecciona una línea para conocer su respaldo.</p>
  </div>
}
