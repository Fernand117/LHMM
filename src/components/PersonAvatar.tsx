import { UserRound } from 'lucide-react'
import { personById } from '../data/catalog'
import { getPortrait } from '../data/portraits'

export default function PersonAvatar({ id, className = '' }: { id: string; className?: string }) {
  const portrait = getPortrait(id)
  return <span className={`person-avatar ${className}`} aria-hidden="true" title={portrait ? `${personById[id].name} · ${portrait.author} · ${portrait.license}. Créditos completos en el perfil.` : 'Sin retrato identificado con derechos de uso claros'}>
    {portrait ? <img src={portrait.src} alt="" loading="lazy" /> : <UserRound size={20} />}
  </span>
}
