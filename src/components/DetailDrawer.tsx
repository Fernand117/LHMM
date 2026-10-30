import { useEffect, useRef, useState } from 'react'
import { ArrowRight, ArrowUpRight, Bookmark, Check, ChevronDown, Clock3, GitBranch, MapPin, Play, Share2, ShieldCheck, UserRound, X } from 'lucide-react'
import credits from '../data/media-credits.json'
import { categoryById, personById } from '../data/catalog'
import { eventById } from '../data/events'
import { connectedEvents, getConnections } from '../lib/archive'
import Dialog from './Dialog'
import EventCard from './EventCard'
import SourceList from './SourceList'

export type DetailSelection = { type: 'event' | 'person'; id: string }
type Tab = 'historia' | 'conexiones' | 'fuentes' | 'versiones'
interface Props { selection: DetailSelection; saved: string[]; onClose: () => void; onOpen: (selection: DetailSelection) => void; onSave: (id: string) => void; onShare: (selection: DetailSelection) => void; onExploreConnections: (id: string) => void }

export default function DetailDrawer({ selection, saved, onClose, onOpen, onSave, onShare, onExploreConnections }: Props) {
  const [tab, setTab] = useState<Tab>('historia')
  const bodyRef = useRef<HTMLDivElement>(null)
  useEffect(() => { setTab('historia'); bodyRef.current?.scrollTo({ top: 0 }) }, [selection.id])
  const event = selection.type === 'event' ? eventById[selection.id] : null
  const person = selection.type === 'person' ? personById[selection.id] : null
  const links = getConnections(selection.id)
  const credit = event ? credits.find((item) => item.id === event.image) : null
  const isSaved = saved.includes(selection.id)

  return <Dialog onClose={onClose} labelledBy="detail-title" className="detail-drawer">
    <div className="detail-topbar"><span className="detail-brand"><span className="tiny-mark">LHMM.</span> EL ARCHIVO / {event ? event.year : 'PERSONAJES'}</span><div>{event && <button className={`icon-button ${isSaved ? 'is-saved' : ''}`} aria-label={isSaved ? 'Quitar de guardados' : 'Guardar acontecimiento'} onClick={() => onSave(event.id)}><Bookmark size={18} fill={isSaved ? 'currentColor' : 'none'} /></button>}<button className="icon-button" aria-label="Compartir ficha" onClick={() => onShare(selection)}><Share2 size={18} /></button><button className="icon-button close-dialog" aria-label="Cerrar ficha" onClick={onClose}><X size={21} /></button></div></div>
    <div className="detail-scroll" ref={bodyRef}>
      {event && <figure className="detail-photo"><img src={`/images/${event.image}.jpg`} alt={event.imageNote} /><span className="detail-photo-year">{event.year}<ArrowUpRight size={24} /></span><figcaption>{event.id === 'sismo-1985' ? 'DOCUMENTO FOTOGRÁFICO' : 'IMAGEN DE CONTEXTO'} / {credit?.id === 'conquest' ? 'Autor no identificado' : credit?.author.replace(/<[^>]*>/g, '').trim() ?? 'Wikimedia Commons'}</figcaption></figure>}
      <div className="detail-content">
        {event ? <>
          <div className="detail-meta"><span className="category-label" style={{ '--category-color': categoryById[event.category].color } as React.CSSProperties}><i />{categoryById[event.category].name}</span><span><Clock3 size={12} /> 4 min de contexto</span></div>
          <h2 id="detail-title">{event.title}</h2>
          <p className="detail-location"><MapPin size={14} /> {event.location}</p><p className="detail-date">{event.date}</p>
          <p className="detail-summary">{event.summary}</p>
          <div className="documentation-note"><ShieldCheck size={15} /><span>{event.sourceIds.length} {event.sourceIds.length === 1 ? 'fuente disponible' : 'fuentes disponibles'}<span> · Colección inicial, sujeta a ampliación</span></span></div>
          <div className="detail-tabs" role="tablist" aria-label="Secciones de la ficha">
            {([['historia', 'La historia'], ['conexiones', `Conexiones · ${links.length}`], ['fuentes', `Fuentes · ${event.sourceIds.length}`], ...(event.claims?.length ? [['versiones', 'Versiones y mitos']] : [])] as [Tab, string][]).map(([id, label]) => <button key={id} id={`detail-tab-${id}`} role="tab" aria-selected={tab === id} aria-controls="detail-tabpanel" onClick={() => setTab(id)}>{label}</button>)}
          </div>
          <div className="detail-tabpanel" id="detail-tabpanel" role="tabpanel" aria-labelledby={`detail-tab-${tab}`}>
            {tab === 'historia' && <>
              <div className="chapters">{event.chapters.map((chapter, index) => <details key={`${event.id}-${index}`} open={index === 0}><summary><span>{String(index + 1).padStart(2, '0')}</span><h3>{chapter.title}</h3><ChevronDown size={17} /></summary><p>{chapter.text}</p></details>)}</div>
              {event.people.length > 0 && <section className="detail-people"><h3 className="section-kicker">QUIÉNES APARECEN EN ESTA HISTORIA</h3>{event.people.map((id) => <button key={id} onClick={() => onOpen({ type: 'person', id })}><span className="person-avatar"><UserRound size={16} /></span><span><strong>{personById[id].name}</strong><small>{personById[id].role}</small></span><ArrowUpRight size={16} /></button>)}</section>}
              {event.video && <a className="video-link" href={event.video.url} target="_blank" rel="noreferrer"><span className="video-play"><Play size={19} fill="currentColor" /></span><span><small>EN VÍDEO · {event.video.publisher}</small><strong>{event.video.title}</strong><span>Ver en el canal original</span></span><ArrowUpRight size={18} /></a>}
              <div className="photo-credit"><p>{event.imageNote}</p>{credit && <a href={credit.source} target="_blank" rel="noreferrer">{credit.id === 'conquest' ? 'Autor no identificado' : credit.author.replace(/<[^>]*>/g, '').trim()} · {credit.license} <ArrowUpRight size={11} /></a>}</div>
              {event.claims?.length && <button className="claim-prompt" onClick={() => setTab('versiones')}><ShieldCheck size={18} /><span>¿Y las otras versiones?<small>Revisa qué está documentado y qué no.</small></span><ArrowRight size={17} /></button>}
            </>}
            {tab === 'conexiones' && <><p className="tab-intro">Las líneas necesitan evidencia. Una relación de contexto no es una acusación ni una explicación causal.</p>{links.length ? links.map((connection) => {
              const id = connection.from === event.id ? connection.to : connection.from
              const isPerson = !!personById[id]
              return <button className="connection-item" key={id} onClick={() => onOpen({ type: isPerson ? 'person' : 'event', id })}><span className="connection-icon">{isPerson ? <UserRound size={18} /> : <GitBranch size={18} />}</span><span><small>{connection.kind === 'contexto' ? 'RELACIÓN DE CONTEXTO' : 'VÍNCULO DOCUMENTADO'}</small><strong>{eventById[id]?.shortTitle ?? personById[id]?.name}</strong><span>{connection.label}</span><p>{connection.description}</p></span><ArrowUpRight size={16} /></button>
            }) : <p className="tab-intro">Todavía no hay conexiones documentadas para esta ficha. Es preferible una red incompleta a un vínculo inventado.</p>}<button className="primary-button" onClick={() => onExploreConnections(event.id)}>Explorar esta red <GitBranch size={15} /></button></>}
            {tab === 'fuentes' && <><p className="tab-intro">Consulta las fuentes completas, sus fechas y sus perspectivas. Las notas de las primeras horas no deben confundirse con balances finales.</p><SourceList ids={event.sourceIds} /></>}
            {tab === 'versiones' && <><p className="tab-intro">Una pregunta abierta no convierte cualquier respuesta en verdadera. Aquí distinguimos controversia, hipótesis y desinformación.</p>{event.claims?.map((claim) => <section className={`claim-card claim-${claim.status === 'En disputa' ? 'disputed' : 'unsupported'}`} key={claim.title}><span className="claim-status">{claim.status === 'En disputa' ? <GitBranch size={13} /> : <ShieldCheck size={13} />}{claim.status}</span><h3>{claim.title}</h3><p>{claim.explanation}</p><SourceList ids={claim.sourceIds} /></section>)}</>}
          </div>
        </> : person && <>
          <div className="person-detail-avatar"><UserRound size={38} /></div><span className="eyebrow">PERSONAJES DEL ARCHIVO</span><h2 id="detail-title">{person.name}</h2><p className="person-role">{person.role}</p><p className="detail-summary">{person.description}</p>
          <p className="documentation-note"><Check size={15} /> Los vínculos se respaldan en las fuentes de las fichas.</p><h3 className="person-section-title">Sus conexiones en el archivo</h3>
          {connectedEvents(person.id).map((item) => <EventCard key={item.id} event={item} onOpen={(id) => onOpen({ type: 'event', id })} />)}
          <button className="primary-button person-graph-button" onClick={() => onExploreConnections(person.id)}>Ver en la red de conexiones<GitBranch size={16} /></button>
          <SourceList ids={links.flatMap((link) => link.sourceIds)} />
        </>}
        <div className="detail-endnote"><span className="tiny-mark">LHMM.</span><p>La historia se entiende mejor con contexto.<br /><strong>Lee las fuentes. Haz nuevas preguntas.</strong></p></div>
      </div>
    </div>
  </Dialog>
}
