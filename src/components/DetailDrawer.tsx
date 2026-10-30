import { useEffect, useRef, useState } from 'react'
import { ArrowRight, ArrowUpRight, Bookmark, ChevronDown, Clock3, FileText, GitBranch, MapPin, Play, Share2, ShieldCheck, UserRound, X } from 'lucide-react'
import credits from '../data/media-credits.json'
import { categoryById, personById } from '../data/catalog'
import { connectionKindLabels } from '../data/connections'
import { eventById } from '../data/events'
import { getPortrait } from '../data/portraits'
import { reviewDescriptions, reviewLabels } from '../data/review'
import { connectedEvents, getConnections } from '../lib/archive'
import Dialog from './Dialog'
import EventCard from './EventCard'
import EvidenceList from './EvidenceList'
import PersonAvatar from './PersonAvatar'
import PortraitCredit from './PortraitCredit'
import SourceList from './SourceList'
import StoryVisual, { eventVisual } from './StoryVisual'

export type DetailSelection = { type: 'event' | 'person'; id: string }
type Tab = 'historia' | 'conexiones' | 'fuentes' | 'versiones'
interface Props { selection: DetailSelection; saved: string[]; onClose: () => void; onOpen: (selection: DetailSelection) => void; onSave: (id: string) => void; onShare: (selection: DetailSelection) => void; onExploreConnections: (id: string) => void }

export default function DetailDrawer({ selection, saved, onClose, onOpen, onSave, onShare, onExploreConnections }: Props) {
  const [tab, setTab] = useState<Tab>('historia')
  const [relatedLimit, setRelatedLimit] = useState(16)
  const bodyRef = useRef<HTMLDivElement>(null)
  useEffect(() => { setTab('historia'); setRelatedLimit(16); bodyRef.current?.scrollTo({ top: 0 }) }, [selection.id])
  const event = selection.type === 'event' ? eventById[selection.id] : null
  const person = selection.type === 'person' ? personById[selection.id] : null
  const links = getConnections(selection.id)
  const credit = event ? credits.find((item) => item.id === event.image) : null
  const visual = event ? eventVisual(event) : null
  const portrait = person ? getPortrait(person.id) : null
  const relatedEvents = person ? connectedEvents(person.id).sort((a, b) => a.year - b.year) : []
  const isSaved = saved.includes(selection.id)
  const readingTime = event ? Math.max(1, Math.ceil([event.summary, ...event.chapters.map((chapter) => chapter.text)].join(' ').split(/\s+/).length / 180)) : 1
  const review = event?.review ?? 'contextual'
  const evidenceCount = event?.evidence?.length ?? event?.sourceIds.length ?? 0

  return <Dialog onClose={onClose} labelledBy="detail-title" className="detail-drawer">
    <div className="detail-topbar"><span className="detail-brand"><span className="tiny-mark">LHMM.</span> EL ARCHIVO / {event ? event.year : 'PERSONAJES'}</span><div>{event && <button className={`icon-button ${isSaved ? 'is-saved' : ''}`} aria-label={isSaved ? 'Quitar de guardados' : 'Guardar acontecimiento'} onClick={() => onSave(event.id)}><Bookmark size={18} fill={isSaved ? 'currentColor' : 'none'} /></button>}<button className="icon-button" aria-label="Compartir ficha" onClick={() => onShare(selection)}><Share2 size={18} /></button><button className="icon-button close-dialog" aria-label="Cerrar ficha" onClick={onClose}><X size={21} /></button></div></div>
    <div className="detail-scroll" ref={bodyRef}>
      {event && visual && <figure className={`detail-photo ${visual.portrait ? 'has-portrait' : ''}`}><StoryVisual event={event} className="detail-story-visual" /><figcaption>{visual.label}{visual.portrait ? <> · {personById[visual.portrait.personId].name} / <a href={visual.portrait.source} target="_blank" rel="noreferrer">{visual.portrait.author} · {visual.portrait.license}<ArrowUpRight size={10} /></a></> : visual.period ? <> · <a href={visual.period.source} target="_blank" rel="noreferrer">{visual.period.author} · {visual.period.license}<ArrowUpRight size={10} /></a></> : credit ? <> / <a href={credit.source} target="_blank" rel="noreferrer">{credit.id === 'conquest' ? 'Autor no identificado' : credit.author.replace(/<[^>]*>/g, '').trim()} · {credit.license}<ArrowUpRight size={10} /></a></> : null}</figcaption></figure>}
      <div className="detail-content">
        {event ? <>
          <div className="detail-meta"><span className="category-label" style={{ '--category-color': categoryById[event.category].color } as React.CSSProperties}><i />{categoryById[event.category].name}</span><span><Clock3 size={12} /> {readingTime} min de contexto</span></div>
          <h2 id="detail-title">{event.title}</h2>
          <p className="detail-location"><MapPin size={14} /> {event.location}</p><p className="detail-date">{event.date}</p>
          <p className="detail-summary">{event.summary}</p>
          <div className={`documentation-note documentation-note--${review}`}><ShieldCheck size={17} /><span><strong>{reviewLabels[review]}</strong><span>{reviewDescriptions[review]}</span></span></div>
          <div className="detail-tabs" role="tablist" aria-label="Secciones de la ficha">
            {([['historia', 'La historia'], ['conexiones', `Conexiones · ${links.length}`], ['fuentes', `Evidencia · ${evidenceCount}`], ...(event.claims?.length ? [['versiones', 'Versiones y mitos']] : [])] as [Tab, string][]).map(([id, label]) => <button key={id} id={`detail-tab-${id}`} role="tab" aria-selected={tab === id} aria-controls="detail-tabpanel" onClick={() => setTab(id)}>{label}</button>)}
          </div>
          <div className="detail-tabpanel" id="detail-tabpanel" role="tabpanel" aria-labelledby={`detail-tab-${tab}`}>
            {tab === 'historia' && <>
              <div className="chapters">{event.chapters.map((chapter, index) => <details key={`${event.id}-${index}`} open={index === 0}><summary><span>{String(index + 1).padStart(2, '0')}</span><h3>{chapter.title}</h3><ChevronDown size={17} /></summary><p>{chapter.text}</p></details>)}</div>
              {event.geographicNote && <p className="geographic-note"><MapPin size={14} />{event.geographicNote}</p>}
              {!!event.editorialNotes?.length && <section className="review-notes"><h3><FileText size={15} /> Notas de revisión</h3><ul>{event.editorialNotes.map((note) => <li key={note}>{note}</li>)}</ul></section>}
              {event.people.length > 0 && <section className="detail-people"><h3 className="section-kicker">QUIÉNES APARECEN EN ESTA HISTORIA</h3>{event.people.map((id) => <button key={id} onClick={() => onOpen({ type: 'person', id })}><PersonAvatar id={id} /><span><strong>{personById[id].name}</strong><small>{personById[id].role}</small>{getPortrait(id) && <small className="avatar-credit-hint">Imagen y créditos en su perfil</small>}</span><ArrowUpRight size={16} /></button>)}</section>}
              {event.mentionedActors && <p className="mentioned-actors"><strong>También se mencionan personas e instituciones:</strong> {event.mentionedActors}. La presencia en esta lista no atribuye culpabilidad ni un papel específico sin revisar las fuentes.</p>}
              {event.video && <a className="video-link" href={event.video.url} target="_blank" rel="noreferrer"><span className="video-play"><Play size={19} fill="currentColor" /></span><span><small>EN VÍDEO · {event.video.publisher}</small><strong>{event.video.title}</strong><span>Ver en el canal original</span></span><ArrowUpRight size={18} /></a>}
              {visual?.portrait ? <PortraitCredit portrait={visual.portrait} /> : <div className="photo-credit"><p>{visual?.note}</p>{visual?.period ? <a href={visual.period.source} target="_blank" rel="noreferrer">{visual.period.author} · {visual.period.license} <ArrowUpRight size={11} /></a> : credit && <a href={credit.source} target="_blank" rel="noreferrer">{credit.id === 'conquest' ? 'Autor no identificado' : credit.author.replace(/<[^>]*>/g, '').trim()} · {credit.license} <ArrowUpRight size={11} /></a>}</div>}
              {event.claims?.length ? <button className="claim-prompt" onClick={() => setTab('versiones')}><ShieldCheck size={18} /><span>¿Y las otras versiones?<small>Revisa qué está documentado y qué no.</small></span><ArrowRight size={17} /></button> : null}
            </>}
            {tab === 'conexiones' && <><p className="tab-intro">Las líneas distinguen vínculos documentados, relaciones de contexto y menciones. Una mención permite navegar, pero no es una atribución de responsabilidad ni un vínculo causal verificado.</p>{links.length ? links.slice(0, relatedLimit).map((connection) => {
              const id = connection.from === event.id ? connection.to : connection.from
              const isPerson = !!personById[id]
              return <button className="connection-item" key={id} onClick={() => onOpen({ type: isPerson ? 'person' : 'event', id })}><span className="connection-icon">{isPerson ? <PersonAvatar id={id} /> : <GitBranch size={18} />}</span><span><small>{connectionKindLabels[connection.kind].toLocaleUpperCase('es-MX')}</small><strong>{eventById[id]?.shortTitle ?? personById[id]?.name}</strong><span>{connection.label}</span><p>{connection.description}</p></span><ArrowUpRight size={16} /></button>
            }) : <p className="tab-intro">Todavía no hay conexiones publicadas para esta ficha. Es preferible una red incompleta a un vínculo inventado.</p>}{links.length > relatedLimit && <button className="all-events-button" onClick={() => setRelatedLimit(relatedLimit + 16)}>Mostrar más conexiones<ChevronDown size={14} /></button>}<button className="primary-button" onClick={() => onExploreConnections(event.id)}>Explorar esta red <GitBranch size={15} /></button></>}
            {tab === 'fuentes' && <><p className="tab-intro">Cada referencia indica qué apoya en esta historia y, cuando existe, el localizador consultado. Una cita no demuestra por sí sola todos los detalles del relato.</p><EvidenceList evidence={event.evidence ?? []} />{!event.evidence?.length && <SourceList ids={event.sourceIds} />}</>}
            {tab === 'versiones' && <><p className="tab-intro">Una pregunta abierta no convierte cualquier respuesta en verdadera. Aquí distinguimos controversia, hipótesis y desinformación.</p>{event.claims?.map((claim) => <section className={`claim-card claim-${claim.status === 'En disputa' ? 'disputed' : 'unsupported'}`} key={claim.title}><span className="claim-status">{claim.status === 'En disputa' ? <GitBranch size={13} /> : <ShieldCheck size={13} />}{claim.status}</span><h3>{claim.title}</h3><p>{claim.explanation}</p><SourceList ids={claim.sourceIds} /></section>)}</>}
          </div>
        </> : person && <>
          <span className="eyebrow">PERSONAJES DEL ARCHIVO</span><h2 id="detail-title">{person.name}</h2><p className="person-role">{person.role}</p>
          {portrait ? <figure className="person-portrait"><img src={portrait.src} alt={`${portrait.kind === 'representacion' ? 'Retrato o representación de' : 'Imagen de'} ${person.name}`} /><figcaption><PortraitCredit portrait={portrait} /></figcaption></figure> : <div className="person-no-portrait"><PersonAvatar id={person.id} className="person-detail-avatar" /><p>Sin retrato identificado con procedencia y derechos de uso claros. No se sustituye por la imagen de otra persona.</p></div>}
          <p className="detail-summary">{person.description}</p>
          <p className="documentation-note"><UserRound size={17} /> El perfil reúne las historias investigadas en las que aparece este personaje. Una mención no verifica por sí sola un papel histórico ni atribuye responsabilidad.</p><h3 className="person-section-title">Sus conexiones en el archivo · {relatedEvents.length}</h3>
          {relatedEvents.slice(0, relatedLimit).map((item) => <EventCard key={item.id} event={item} onOpen={(id) => onOpen({ type: 'event', id })} />)}
          {relatedEvents.length > relatedLimit && <button className="all-events-button" onClick={() => setRelatedLimit(relatedLimit + 16)}>Mostrar más historias<ChevronDown size={14} /></button>}
          {!relatedEvents.length && <p className="tab-intro">Aún no tiene fichas enlazadas; no inventamos una relación para completar el perfil.</p>}
          <button className="primary-button person-graph-button" onClick={() => onExploreConnections(person.id)}>Ver en la red de conexiones<GitBranch size={16} /></button>
          <details className="person-source-details"><summary>Referencias de sus historias y menciones</summary><SourceList ids={links.flatMap((link) => link.sourceIds)} /></details>
        </>}
        <div className="detail-endnote"><span className="tiny-mark">LHMM.</span><p>La historia se entiende mejor con contexto.<br /><strong>Lee las fuentes. Haz nuevas preguntas.</strong></p></div>
      </div>
    </div>
  </Dialog>
}
