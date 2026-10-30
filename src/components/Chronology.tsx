import { ArrowDownUp, ArrowUpRight } from 'lucide-react'
import { useState } from 'react'
import { categoryById } from '../data/catalog'
import type { HistoricalEvent } from '../data/types'

export default function Chronology({ events, onOpen }: { events: HistoricalEvent[]; onOpen: (id: string) => void }) {
  const [descending, setDescending] = useState(false)
  const ordered = [...events].sort((a, b) => descending ? b.year - a.year : a.year - b.year)
  return <div className="chronology-view">
    <div className="inner-view-heading"><div><span className="eyebrow">02 / RECORRE EL TIEMPO</span><h3>El pasado, paso a paso.</h3><p>Los momentos cambian. Las preguntas conectan.</p></div><button className="dark-outline-button" onClick={() => setDescending(!descending)}><ArrowDownUp size={14} />{descending ? 'Más recientes primero' : 'Más antiguos primero'}</button></div>
    <div className="chronology-list">
      {ordered.map((event, index) => <div className="timeline-entry" key={event.id} style={{ '--category-color': categoryById[event.category].color } as React.CSSProperties}>
        <div className="timeline-year"><span>{event.year}</span><i /></div>
        <button className="timeline-event" onClick={() => onOpen(event.id)}>
          <img src={`/images/${event.image}.jpg`} alt="" loading="lazy" />
          <span className="timeline-event-copy"><span className="category-label"><i />{categoryById[event.category].shortName}</span><h4>{event.shortTitle}</h4><span className="timeline-date">{event.date}</span></span>
          <span className="timeline-index">{String(index + 1).padStart(2, '0')}</span><ArrowUpRight size={18} />
        </button>
      </div>)}
    </div>
    <p className="view-footnote">Los periodos aproximados están señalados en cada ficha. Esta selección no es una cronología exhaustiva.</p>
  </div>
}
