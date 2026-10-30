import { useEffect, useId, useMemo, useRef, useState } from 'react'
import { ArrowRight, ArrowUpRight, GitBranch, Info, UserRound, X } from 'lucide-react'
import { categoryById, personById } from '../data/catalog'
import { connectionKindLabels } from '../data/connections'
import { eventById } from '../data/events'
import { getPortrait } from '../data/portraits'
import { sourceById } from '../data/sources'
import type { Connection, HistoricalEvent } from '../data/types'
import { localNetwork } from '../lib/network'

interface Props { events: HistoricalEvent[]; focus: string; onFocus: (id: string) => void }

function labelLines(name: string) {
  const shortened = name.length > 39 ? `${name.slice(0, 36).trimEnd()}…` : name
  const words = shortened.split(' ')
  let first = ''
  while (words.length && (first.length + words[0].length <= 21 || !first)) first += `${first ? ' ' : ''}${words.shift()}`
  return [first, words.join(' ')]
}

export default function ConnectionGraph({ events, focus, onFocus }: Props) {
  const [selectedLink, setSelectedLink] = useState<Connection | null>(null)
  const [page, setPage] = useState({ key: '', index: 0 })
  const prefix = useId().replace(/:/g, '')
  const canvas = useRef<HTMLDivElement>(null)
  const pageKey = focus
  const network = useMemo(() => localNetwork(events, focus, page.key === pageKey ? page.index : 0), [events, focus, page, pageKey])
  const { center, edges, availableNodes } = network
  const nodes = network.ids.map((id, index) => {
    const angle = -Math.PI / 2 + (index - 1) * 2 * Math.PI / Math.max(network.ids.length - 1, 1)
    return { id, x: index === 0 ? 440 : 440 + Math.cos(angle) * 285, y: index === 0 ? 315 : 315 + Math.sin(angle) * 145, name: eventById[id]?.shortTitle ?? personById[id]?.name ?? id, person: !!personById[id], portrait: getPortrait(id) }
  })
  const activeLink = selectedLink && edges.includes(selectedLink) ? selectedLink : null
  useEffect(() => { const element = canvas.current; if (element) element.scrollLeft = (element.scrollWidth - element.clientWidth) / 2 }, [focus])

  return <div className="graph-view">
    <div className="inner-view-heading graph-heading"><div><span className="eyebrow">03 / CONECTA LOS PUNTOS</span><h3>Ninguna historia está sola.</h3><p>Una red local. Selecciona un nodo para continuar.</p></div><label className="graph-select"><span className="sr-only">Centro de la red</span><select value={center} onChange={(event) => { onFocus(event.target.value); setSelectedLink(null) }}>{availableNodes.map((id) => <option key={id} value={id}>{eventById[id]?.shortTitle ?? personById[id]?.name}</option>)}</select></label></div>
    <div className="graph-options">{network.pageCount > 1 && <button onClick={() => { setPage({ key: pageKey, index: network.currentPage + 1 }); setSelectedLink(null) }}>Otros vínculos ({network.currentPage + 1}/{network.pageCount})<ArrowRight size={12} /></button>}</div>
    <div className="graph-canvas" ref={canvas}><svg viewBox="0 0 880 550" className="connection-svg" aria-label="Red de relaciones entre acontecimientos y personajes">
      <defs><pattern id={`${prefix}-dots`} width="22" height="22" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r=".6" fill="#8d9c86" opacity=".15" /></pattern>{nodes.filter((node) => node.portrait).map((node) => <clipPath id={`${prefix}-${node.id}`} key={node.id}><circle r={node.id === center ? 30 : 20} /></clipPath>)}</defs>
      <rect width="880" height="550" fill={`url(#${prefix}-dots)`} />
      <ellipse cx="440" cy="315" rx="285" ry="145" fill="none" stroke="#8d9c86" strokeOpacity=".12" />
      {edges.map((edge) => {
        const a = nodes.find((node) => node.id === edge.from)!
        const b = nodes.find((node) => node.id === edge.to)!
        const active = activeLink === edge
        return <g key={`${edge.from}-${edge.to}`} className="graph-edge" role="button" tabIndex={0} aria-label={`Relación: ${a.name} y ${b.name}: ${edge.label}`} onClick={() => setSelectedLink(edge)} onKeyDown={(event) => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); setSelectedLink(edge) } }}><path d={`M ${a.x} ${a.y} Q ${(a.x + b.x) / 2 + 12} ${(a.y + b.y) / 2 - 12} ${b.x} ${b.y}`} fill="none" stroke={active ? '#d6edb2' : '#93a184'} strokeOpacity={active ? 1 : .65} strokeWidth={active ? 2 : 1} strokeDasharray={edge.kind === 'contexto' ? '5 5' : edge.kind === 'mencion' ? '2 5' : undefined} /><path d={`M ${a.x} ${a.y} L ${b.x} ${b.y}`} stroke="transparent" strokeWidth="14" /><title>{edge.label} · {connectionKindLabels[edge.kind]}</title></g>
      })}
      {nodes.map((node) => {
        const color = node.person ? '#d9c6ab' : categoryById[eventById[node.id].category].color
        const centerNode = node.id === center
        const radius = centerNode ? 30 : 20
        const lines = labelLines(node.name)
        return <g key={node.id} className={`graph-node ${centerNode ? 'is-center' : ''}`} role="button" tabIndex={0} aria-label={`${node.person ? 'Personaje' : 'Acontecimiento'}: ${node.name}`} aria-pressed={centerNode} onClick={() => { onFocus(node.id); setSelectedLink(null) }} onKeyDown={(event) => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); onFocus(node.id); setSelectedLink(null) } }} transform={`translate(${node.x} ${node.y})`}>
          <circle r={centerNode ? 42 : 30} fill={color} opacity={centerNode ? .10 : .05} /><circle r={radius} fill={centerNode ? '#d6edb2' : '#27342b'} stroke={centerNode ? '#d6edb2' : color} strokeWidth="1.5" />
          {node.portrait ? <image href={node.portrait.src} x={-radius} y={-radius} width={radius * 2} height={radius * 2} preserveAspectRatio="xMidYMid slice" clipPath={`url(#${prefix}-${node.id})`} /> : node.person ? <UserRound x="-9" y="-9" width="18" height="18" color={centerNode ? '#29351f' : color} /> : <text textAnchor="middle" y="4" fill={centerNode ? '#29351f' : color} fontSize={centerNode ? 12 : 9} fontWeight="700">{eventById[node.id].year}</text>}
          <text y={centerNode ? 55 : 38} textAnchor="middle" className="graph-node-label"><tspan x="0">{lines[0]}</tspan>{lines[1] && <tspan x="0" dy="15">{lines[1]}</tspan>}</text>
          {centerNode && <text y="-55" textAnchor="middle" className="graph-center-label">ESTÁS AQUÍ</text>}
          <title>{node.name}{node.portrait ? ` · ${node.portrait.author} · ${node.portrait.license}. Atribución completa en el perfil.` : ''}</title>
        </g>
      })}
    </svg></div>
    {nodes.length <= 1 && <div className="graph-empty-note"><GitBranch size={18} /><span>Sin vínculos visibles con estos filtros.</span></div>}
    {activeLink && <div className="graph-link-detail"><button className="icon-button" aria-label="Cerrar relación" onClick={() => setSelectedLink(null)}><X size={15} /></button><span className="eyebrow">{connectionKindLabels[activeLink.kind].toLocaleUpperCase('es-MX')}</span><strong>{activeLink.label}</strong><p>{activeLink.description}</p>{activeLink.sourceIds.slice(0, 2).map((id) => <a key={id} href={sourceById[id].url} target="_blank" rel="noreferrer">Consultar: {sourceById[id].publisher}<ArrowUpRight size={12} /></a>)}</div>}
    <div className="graph-legend"><span><i className="legend-event" /> Acontecimiento</span><span><UserRound size={12} /> Personaje</span><span className="graph-line-key">— Documentado · ┄ Contexto · ··· Mención</span><span className="graph-pan-hint">Desliza la red ↔</span></div>
    <p className="graph-disclaimer"><Info size={13} /> Hasta 8 vecinos por vista. Una línea no implica causalidad ni complicidad. Imágenes y créditos completos en el perfil.</p>
  </div>
}
