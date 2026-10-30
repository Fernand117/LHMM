import { ArrowDown, ArrowDownUp, ArrowUpRight } from 'lucide-react'
import { useEffect, useMemo, useRef, useState } from 'react'
import { categoryById } from '../data/catalog'
import { reviewLabels } from '../data/review'
import type { HistoricalEvent } from '../data/types'
import StoryVisual from './StoryVisual'

const pageSize = 30

export default function Chronology({ events, onOpen }: { events: HistoricalEvent[]; onOpen: (id: string) => void }) {
  const [descending, setDescending] = useState(false)
  const [page, setPage] = useState({ key: '', limit: pageSize })
  const viewport = useRef<HTMLDivElement>(null)
  const key = `${descending}:${events.map((event) => event.id).join(',')}`
  useEffect(() => { setPage({ key, limit: pageSize }); viewport.current?.scrollTo({ top: 0 }) }, [key])
  const limit = page.key === key ? page.limit : pageSize
  const ordered = useMemo(() => [...events].sort((a, b) => (descending ? b.year - a.year : a.year - b.year) || a.id.localeCompare(b.id)), [events, descending])
  return <div className="chronology-view" ref={viewport}>
    <div className="inner-view-heading"><div><span className="eyebrow">02 / RECORRE EL TIEMPO</span><h3>El pasado, paso a paso.</h3><p>Historias investigadas y su estado de revisión, sin confundirlos.</p></div><button className="dark-outline-button" aria-label={descending ? 'Más recientes primero' : 'Más antiguos primero'} onClick={() => { setDescending(!descending); viewport.current?.scrollTo({ top: 0 }) }}><ArrowDownUp size={14} />{descending ? 'Más recientes primero' : 'Más antiguos primero'}</button></div>
    <div className="chronology-list">
      {ordered.slice(0, limit).map((event, index) => <div className="timeline-entry" key={event.id} style={{ '--category-color': categoryById[event.category].color } as React.CSSProperties}>
        <div className="timeline-year"><span>{event.year}</span><i /></div>
        <button className="timeline-event" onClick={() => onOpen(event.id)}>
          <StoryVisual event={event} className="timeline-visual" />
          <span className="timeline-event-copy"><span className="category-label"><i />{categoryById[event.category].shortName}</span><h4>{event.shortTitle}</h4><span className="timeline-date">{event.date}</span><span className="timeline-editorial">{reviewLabels[event.review ?? 'contextual'].toLocaleUpperCase('es-MX')}</span></span>
          <span className="timeline-index">{String(index + 1).padStart(2, '0')}</span><ArrowUpRight size={18} />
        </button>
      </div>)}
    </div>
    <div className="chronology-pagination"><span role="status">Mostrando {Math.min(limit, ordered.length)} de {ordered.length} historias</span>{limit < ordered.length && <button className="dark-outline-button" onClick={() => setPage({ key, limit: limit + pageSize })}>Cargar 30 historias más<ArrowDown size={14} /></button>}</div>
    <p className="view-footnote">Los periodos aproximados están señalados. Varias entradas de un mismo episodio pueden compartir una historia investigada.</p>
  </div>
}
