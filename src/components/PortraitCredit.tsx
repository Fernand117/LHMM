import { ArrowUpRight } from 'lucide-react'
import type { Portrait } from '../data/portraits'

export default function PortraitCredit({ portrait, compact = false }: { portrait: Portrait; compact?: boolean }) {
  return <div className={`portrait-credit ${compact ? 'is-compact' : ''}`}>
    {!compact && <p>{portrait.caption}</p>}
    <p>Crédito declarado: {portrait.author} · {portrait.license === 'Public domain' ? 'Dominio público (según repositorio)' : portrait.license}</p>
    <div><a href={portrait.source} target="_blank" rel="noreferrer">Archivo y atribución completa<ArrowUpRight size={11} /></a>
      {portrait.originalUrl && <a href={portrait.originalUrl} target="_blank" rel="noreferrer">Procedencia indicada<ArrowUpRight size={11} /></a>}
      {portrait.licenseUrl && <a href={portrait.licenseUrl} target="_blank" rel="noreferrer">Licencia<ArrowUpRight size={11} /></a>}
    </div>
    {!compact && <small>Presentación: recorte visual mediante CSS. El archivo descargado no se retoca; la fuente conserva su contexto y las condiciones de uso.</small>}
  </div>
}
