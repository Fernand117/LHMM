import { BookOpen } from 'lucide-react'
import periodMedia from '../data/period-media.json'
import { getPortrait } from '../data/portraits'
import type { HistoricalEvent } from '../data/types'

interface PeriodMedia {
  id: string
  date: string
  kind: string
  caption: string
  src: string
  source: string
  author: string
  license: string
  licenseUrl?: string
}

const periods = periodMedia as PeriodMedia[]

function periodFor(event: HistoricalEvent) {
  if (event.year <= 1600) return periods.find((item) => item.id === 'period-conquest')
  if (event.year < 1810) return periods.find((item) => item.id === 'period-colonial')
  if (event.year < 1877) return periods.find((item) => item.id === 'period-independence')
  if (event.year <= 1910) return periods.find((item) => item.id === 'period-republic')
  return undefined
}

export function eventVisual(event: HistoricalEvent) {
  // Never silently replace the first named protagonist with another person's
  // portrait when the former has no publishable image (e.g. Colosio / Salinas).
  const portrait = !event.image && event.people[0] ? getPortrait(event.people[0]) : undefined
  const period = !event.image && !portrait ? periodFor(event) : undefined
  return {
    src: event.image ? `/images/${event.image}.jpg` : portrait?.src ?? period?.src,
    note: event.imageNote ?? portrait?.caption ?? period?.caption ?? 'Composición tipográfica del atlas. No es una imagen documental del acontecimiento.',
    label: event.image
      ? event.id === 'p6-terremoto-1985' ? 'Fotografía de archivo' : 'Imagen de contexto'
      : portrait
        ? portrait.kind === 'representacion' ? 'Representación de personaje' : 'Retrato de personaje'
        : period
          ? period.kind
          : 'Ficha del archivo',
    portrait,
    period,
  }
}

export default function StoryVisual({ event, className = '', showLabel = false }: { event: HistoricalEvent; className?: string; showLabel?: boolean }) {
  const visual = eventVisual(event)
  return <div className={`story-visual ${visual.portrait ? 'story-visual--portrait' : ''} ${!visual.src ? 'story-visual--type' : ''} ${className}`}>
    {visual.src ? <img src={visual.src} alt="" loading="lazy" title={visual.portrait ? `${visual.portrait.author} · ${visual.portrait.license}. Créditos en la ficha.` : visual.period ? `${visual.period.author} · ${visual.period.license}. Créditos en la ficha.` : undefined} /> : <span className="visual-placeholder" aria-hidden="true"><BookOpen size={25} /><span>LHMM / ARCHIVO</span></span>}
    <span className="event-year">{event.year}</span>
    {showLabel && <span className="image-context">{visual.label.toLocaleUpperCase('es-MX')}</span>}
  </div>
}
