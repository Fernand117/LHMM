import { ArrowUpRight, FileText } from 'lucide-react'
import { sourceById } from '../data/sources'
import type { Evidence } from '../data/types'

export default function EvidenceList({ evidence }: { evidence: Evidence[] }) {
  return <div className="source-list evidence-list">{[...new Set(evidence.map((item) => `${item.sourceId}|${item.locator ?? ''}|${item.supports}`))].map((key, index) => {
    const item = evidence.find((candidate) => `${candidate.sourceId}|${candidate.locator ?? ''}|${candidate.supports}` === key)!
    const source = sourceById[item.sourceId]
    if (!source) return null
    return <a key={key} className="source-item evidence-item" href={source.url} target="_blank" rel="noreferrer">
      <span className="source-number">{String(index + 1).padStart(2, '0')}</span>
      <span>
        <span className="source-publisher">{source.publisher}<span>{source.kind}</span></span>
        <strong>{source.title}</strong>
        {item.locator && <small>{item.locator}</small>}
        <span className="evidence-supports">{item.supports}</span>
      </span>
      <ArrowUpRight size={17} />
    </a>
  })}<p className="source-notice"><FileText size={14} /> Cada referencia indica qué apoya en esta historia. Una cita no respalda todo el relato ni sustituye la lectura crítica.</p></div>
}
