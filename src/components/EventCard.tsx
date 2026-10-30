import { ArrowUpRight, Bookmark, MapPin } from 'lucide-react'
import { categoryById } from '../data/catalog'
import { reviewLabels } from '../data/review'
import type { HistoricalEvent } from '../data/types'
import StoryVisual from './StoryVisual'

interface Props {
  event: HistoricalEvent
  onOpen: (id: string) => void
  saved?: boolean
  onToggleSave?: (id: string) => void
  variant?: 'featured' | 'compact' | 'tile'
}

export default function EventCard({ event, onOpen, saved, onToggleSave, variant = 'compact' }: Props) {
  const category = categoryById[event.category]
  const review = event.review ?? 'contextual'
  return (
    <article className={`event-card event-card--${variant}`} style={{ '--category-color': category.color } as React.CSSProperties}>
      <button className="event-open" onClick={() => onOpen(event.id)} aria-label={`Explorar: ${event.shortTitle}`}>
        <StoryVisual event={event} className="event-image" showLabel={variant !== 'compact'} />
        <div className="event-card-text">
          <span className="category-label"><i />{category.shortName}</span>
          <h4>{event.shortTitle}</h4>
          <span className={`review-badge review-badge--${review}`}>{reviewLabels[review]}</span>
          {variant === 'tile' && <p>{event.summary}</p>}
          <span className="event-location"><MapPin size={11} />{event.location.split(' · ')[0]}</span>
        </div>
        <ArrowUpRight className="event-open-arrow" size={17} />
      </button>
      {onToggleSave && variant === 'tile' && <button className={`card-bookmark ${saved ? 'is-saved' : ''}`} onClick={() => onToggleSave(event.id)} aria-label={`${saved ? 'Quitar de' : 'Añadir a'} guardados: ${event.shortTitle}`}><Bookmark size={16} fill={saved ? 'currentColor' : 'none'} /></button>}
    </article>
  )
}
