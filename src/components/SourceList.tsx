import { ArrowUpRight, FileText } from 'lucide-react'
import { sourceById } from '../data/sources'

export default function SourceList({ ids }: { ids: string[] }) {
  return <div className="source-list">{[...new Set(ids)].map((id, index) => {
    const source = sourceById[id]
    if (!source) return null
    return <a key={id} className="source-item" href={source.url} target="_blank" rel="noreferrer"><span className="source-number">{String(index + 1).padStart(2, '0')}</span><span><span className="source-publisher">{source.publisher}<span>{source.kind}</span></span><strong>{source.title}</strong>{source.date && <small>{source.date}</small>}</span><ArrowUpRight size={17} /></a>
  })}<p className="source-notice"><FileText size={14} /> Lectura en el medio original. Algunos enlaces pueden requerir suscripción. Una fuente institucional también debe leerse críticamente.</p></div>
}
