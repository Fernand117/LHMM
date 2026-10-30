import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { ArrowDown, ArrowRight, ArrowUpRight, Bookmark, CalendarRange, Check, ChevronDown, Compass, GitBranch, Layers3, Map, MapPin, Search, ShieldCheck, SlidersHorizontal, Sparkles, UserRound, X } from 'lucide-react'
import { categories, categoryById, personById, stateById, states } from './data/catalog'
import { connections } from './data/connections'
import { eventById, events, resolveEventId } from './data/events'
import { eras } from './data/eras'
import { getPortrait } from './data/portraits'
import { sources } from './data/sources'
import type { Filters, ViewMode } from './data/types'
import { connectedEvents, defaultFilters, filterEvents, filtersFromUrl, filtersToParams } from './lib/archive'
import MexicoMap from './components/MexicoMap'
import EventCard from './components/EventCard'
import Chronology from './components/Chronology'
import ConnectionGraph from './components/ConnectionGraph'
import DetailDrawer from './components/DetailDrawer'
import type { DetailSelection } from './components/DetailDrawer'
import InfoDialog from './components/InfoDialog'
import type { InfoMode } from './components/InfoDialog'
import ThemeControl from './components/ThemeControl'
import PersonAvatar from './components/PersonAvatar'
import PortraitCredit from './components/PortraitCredit'

function readView(): ViewMode {
  const view = new URLSearchParams(window.location.search).get('vista')
  return view === 'cronologia' || view === 'conexiones' ? view : 'mapa'
}

function readSelection(): DetailSelection | null {
  const params = new URLSearchParams(window.location.search)
  const event = resolveEventId(params.get('evento') ?? '')
  const person = params.get('personaje')
  return event ? { type: 'event', id: event } : person && Object.hasOwn(personById, person) ? { type: 'person', id: person } : null
}

function Logo({ small = false }: { small?: boolean }) {
  return <span className={`logo ${small ? 'logo-small' : ''}`}><svg viewBox="0 0 34 34" aria-hidden="true"><path d="M5 8h24M5 17h16M5 26h24" /><circle cx="24" cy="17" r="4" /><circle cx="12" cy="8" r="3" /><circle cx="17" cy="26" r="3" /></svg><span>LHMM<span className="logo-period">.</span></span><span className="logo-subtitle">La Historia del<br />México Moderno</span></span>
}

const priority = ['p6-terremoto-1985', 'p4-puebla-1862', 'p4-peste-mazatlan', 'p6-otis-2023', 'p6-cartel-guadalajara', 'p6-eleccion-1988', 'p6-zambada-2024', 'p5-tlatelolco']
const timeMilestones = [1519, 1810, 1910, 1968, 1985, 1988, 1994, 2006, 2014, 2017, 2026]
const viewTabs = [{ id: 'mapa', name: 'Mapa interactivo', Icon: Map }, { id: 'cronologia', name: 'Línea del tiempo', Icon: CalendarRange }, { id: 'conexiones', name: 'Conexiones', Icon: GitBranch }] as const

export default function App() {
  const [filters, setFilters] = useState<Filters>(() => filtersFromUrl(window.location.search))
  const [view, setView] = useState<ViewMode>(readView)
  const [selection, setSelection] = useState<DetailSelection | null>(readSelection)
  const [focus, setFocus] = useState(() => new URLSearchParams(window.location.search).get('foco') ?? 'salinas')
  const [info, setInfo] = useState<InfoMode | null>(null)
  const [toast, setToast] = useState<{ message: string; link?: string } | null>(null)
  const [saved, setSaved] = useState<string[]>(() => {
    // Preserve collections saved under the previous provisional name.
    try {
      const parsed: unknown = JSON.parse(localStorage.getItem('lhmm-saved-v1') ?? localStorage.getItem('entrelineas-saved-v1') ?? '[]')
      if (!Array.isArray(parsed)) return []
      const migrated = parsed
        .filter((id): id is string => typeof id === 'string')
        .map((id) => resolveEventId(id))
        .filter((id): id is string => !!id)
      return [...new Set(migrated)]
    } catch { return [] }
  })
  const searchRef = useRef<HTMLInputElement>(null)
  const toastRef = useRef<HTMLDivElement>(null)
  const explorerRef = useRef<HTMLElement>(null)
  const updateFilters = (update: Partial<Filters>) => setFilters((current) => ({ ...current, ...update }))
  const filtered = useMemo(() => filterEvents(events, filters), [filters])
  const spatialEvents = useMemo(() => filterEvents(events, filters, true), [filters])
  const ordered = useMemo(() => [...filtered].sort((a, b) => {
    const aIndex = priority.indexOf(a.id)
    const bIndex = priority.indexOf(b.id)
    return (aIndex < 0 ? 100 : aIndex) - (bIndex < 0 ? 100 : bIndex) || a.year - b.year
  }), [filtered])
  const allowedNodes = useMemo(() => new Set(filtered.flatMap((event) => [event.id, ...event.people])), [filtered])
  const effectiveFocus = allowedNodes.has(focus) ? focus : filtered[0]?.id ?? ''
  const focusEvent = eventById[effectiveFocus]
  const focusPerson = personById[effectiveFocus]
  const focusPortrait = focusPerson ? getPortrait(focusPerson.id) : undefined
  const focusStories = focusPerson ? connectedEvents(focusPerson.id).filter((event) => allowedNodes.has(event.id)) : []
  const hasFilters = !!(filters.query || filters.state || filters.category !== 'todos' || filters.startYear !== 1519 || filters.endYear !== 2026 || filters.era)

  useEffect(() => {
    const params = filtersToParams(filters)
    if (view !== 'mapa') params.set('vista', view)
    if (view === 'conexiones' && effectiveFocus) params.set('foco', effectiveFocus)
    if (selection) params.set(selection.type === 'event' ? 'evento' : 'personaje', selection.id)
    const query = params.toString()
    window.history.replaceState(null, '', `${window.location.pathname}${query ? `?${query}` : ''}${window.location.hash}`)
  }, [filters, view, selection, effectiveFocus])

  useEffect(() => {
    const onPop = () => { setFilters(filtersFromUrl(window.location.search)); setView(readView()); setSelection(readSelection()); setFocus(new URLSearchParams(window.location.search).get('foco') ?? 'salinas'); setInfo(null) }
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])

  useEffect(() => {
    const listener = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k' && !selection && !info) { event.preventDefault(); searchRef.current?.focus(); explorerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }) }
    }
    window.addEventListener('keydown', listener)
    return () => window.removeEventListener('keydown', listener)
  }, [selection, info])

  useEffect(() => {
    if (!toast) return
    const element = toastRef.current
    if (element && typeof element.showPopover === 'function' && !element.matches(':popover-open')) element.showPopover()
    if (toast.link) return
    const timeout = window.setTimeout(() => setToast(null), 3200)
    return () => window.clearTimeout(timeout)
  }, [toast])

  const openEvent = useCallback((id: string) => { setInfo(null); setSelection({ type: 'event', id }) }, [])
  const toggleSave = (id: string) => {
    const next = saved.includes(id) ? saved.filter((item) => item !== id) : [...saved, id]
    setSaved(next)
    try { localStorage.setItem('lhmm-saved-v1', JSON.stringify(next)); setToast({ message: next.includes(id) ? 'Historia guardada. Un hilo más por seguir.' : 'Historia eliminada de tus guardados.' }) } catch { setToast({ message: 'Guardado durante esta visita. El navegador no permite conservarlo.' }) }
  }
  const share = async (item: DetailSelection) => {
    const url = new URL(window.location.href)
    url.searchParams.delete('evento'); url.searchParams.delete('personaje')
    url.searchParams.set(item.type === 'event' ? 'evento' : 'personaje', item.id)
    url.hash = ''
    try { await navigator.clipboard.writeText(url.toString()); setToast({ message: 'Enlace copiado. La historia se comparte.' }) } catch { setToast({ message: 'Copia este enlace para compartir la ficha:', link: url.toString() }) }
  }
  const exploreNetwork = (id: string) => {
    setSelection(null); setView('conexiones'); setFocus(id)
    if (!allowedNodes.has(id)) setFilters({ ...defaultFilters })
    requestAnimationFrame(() => explorerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }))
  }
  const startRoute = (category: Filters['category'], id: string) => {
    setFilters({ ...defaultFilters, category }); setFocus(id); setView('conexiones')
    explorerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return <>
    <a href="#atlas" className="skip-link">Saltar al atlas interactivo</a>
    <header className="site-header"><div className="header-inner">
      <a className="brand-link" href="#" aria-label="LHMM — La Historia del México Moderno, inicio" onClick={(event) => { event.preventDefault(); setFilters({ ...defaultFilters }); setView('mapa'); window.scrollTo({ top: 0, behavior: 'smooth' }) }}><Logo /></a>
      <nav className="main-nav" aria-label="Navegación principal"><a className="is-current" href="#atlas">El atlas<span /></a><a href="#rutas">Rutas de historia</a><button onClick={() => setInfo('metodologia')}>El proyecto<ArrowUpRight size={12} /></button></nav>
      <div className="header-actions"><ThemeControl /><button className="saved-button" aria-label={`Mis guardados, ${saved.length} historias`} onClick={() => setInfo('guardados')}><Bookmark size={16} /><span className="saved-label">Mis guardados</span><span className="saved-count">{saved.length.toString().padStart(2, '0')}</span></button></div>
    </div></header>

    <main>
      <section className="hero page-width">
        <div className="hero-main"><div className="hero-eyebrow"><span className="live-dot" /> EL PASADO NO SON HECHOS AISLADOS</div><h1>Un país. Miles de historias.<br /><span>Todo está conectado.</span><svg viewBox="0 0 70 50" aria-hidden="true"><path d="M4 38C26 42 28 4 63 11M49 2L64 11 54 24" /></svg></h1><p className="hero-caption">Cinco siglos de historias conectadas.</p></div>
        <div className="hero-aside"><div className="hero-period"><span>1519</span><span className="period-dashes" /><ArrowRight size={14} /><span>2026</span></div><p>Acontecimientos, personajes y lugares.<br />Explora lo que pasó. Descubre qué los une.<br /><strong>Forma tu propia mirada.</strong></p><a href="#atlas" className="hero-scroll">Empieza a explorar<span><ArrowDown size={15} /></span></a></div>
      </section>

      <section className="atlas-section page-width" id="atlas" ref={explorerRef} aria-labelledby="atlas-title">
        <div className="atlas-section-heading"><h2 id="atlas-title"><span className="section-number">01—</span> UN PAÍS PARA EXPLORAR</h2><span className="collection-status"><span className="live-dot" /> Archivo investigado<span className="status-divider">/</span>{events.length} historias navegables</span></div>
        <div className="explorer">
          <div className="explorer-toolbar"><div className="view-tabs" role="group" aria-label="Vista del archivo">{viewTabs.map(({ id, name, Icon }) => <button key={id} aria-pressed={view === id} className={view === id ? 'is-active' : ''} onClick={() => setView(id)}><Icon size={16} /><span>{name}</span></button>)}</div><div className="search-box"><Search size={16} /><input ref={searchRef} aria-label="Buscar acontecimientos, personas o lugares" placeholder="Un evento, un nombre, un lugar…" value={filters.query} onChange={(event) => updateFilters({ query: event.target.value })} />{filters.query ? <button className="icon-button" aria-label="Limpiar búsqueda" onClick={() => updateFilters({ query: '' })}><X size={14} /></button> : <kbd>Ctrl K</kbd>}</div></div>
          <div className="filter-bar"><div className="topic-filters" aria-label="Filtrar por tema"><button className={`topic-chip ${filters.category === 'todos' ? 'is-active' : ''}`} aria-pressed={filters.category === 'todos'} onClick={() => updateFilters({ category: 'todos' })}><Layers3 size={13} />Todos los temas</button>{categories.map((category) => <button className={`topic-chip ${filters.category === category.id ? 'is-active' : ''}`} key={category.id} aria-pressed={filters.category === category.id} style={{ '--category-color': category.color } as React.CSSProperties} onClick={() => updateFilters({ category: category.id })}><i />{category.shortName}</button>)}<button className={`topic-chip myth-chip ${filters.category === 'versiones' ? 'is-active' : ''}`} aria-pressed={filters.category === 'versiones'} onClick={() => updateFilters({ category: 'versiones' })}><ShieldCheck size={13} />Versiones y mitos</button></div></div>
          <div className="archive-filters"><label><span>ÉPOCA</span><select aria-label="Filtrar por época" value={filters.era} onChange={(event) => updateFilters({ era: event.target.value })}><option value="">Las seis épocas · 1519–2026</option>{eras.map((era) => <option key={era.id} value={era.id}>{era.start}–{era.end} · {era.name}</option>)}</select></label><button onClick={() => setInfo('personajes')}><UserRound size={14} />Personajes<ArrowUpRight size={12} /></button><button onClick={() => setInfo('metodologia')}><ShieldCheck size={14} />Cómo se investigó<ArrowUpRight size={12} /></button></div>
          <div className="explorer-workspace">
            <div className="explorer-stage">
              {view === 'mapa' ? <MexicoMap events={spatialEvents} selectedState={filters.state} onSelectState={(state) => updateFilters({ state })} /> : filtered.length === 0 ? <div className="stage-empty"><Search size={32} /><h3>No hay historias con estos filtros.</h3><p>Prueba otro periodo, un tema distinto o explora todo el archivo.</p><button className="dark-outline-button" onClick={() => setFilters({ ...defaultFilters })}>Restablecer filtros<ArrowRight size={14} /></button></div> : view === 'cronologia' ? <Chronology events={filtered} onOpen={openEvent} /> : <ConnectionGraph events={filtered} focus={effectiveFocus} onFocus={setFocus} />}
              {view === 'mapa' && <div className="time-rail"><div className="time-rail-label"><CalendarRange size={14} /><span>ELIGE UN MOMENTO<small>Hitos · escala no proporcional</small></span><button aria-label="Mostrar todos los años" className={filters.startYear === 1519 && filters.endYear === 2026 ? 'is-active' : ''} onClick={() => updateFilters({ startYear: 1519, endYear: 2026 })}>Todos</button></div><div className="year-buttons">{timeMilestones.map((year) => <button key={year} className={filters.startYear === year && filters.endYear === year ? 'is-active' : ''} onClick={() => updateFilters(filters.startYear === year && filters.endYear === year ? { startYear: 1519, endYear: 2026 } : { startYear: year, endYear: year })} aria-pressed={filters.startYear === year && filters.endYear === year}><i /><span>{year}</span></button>)}</div></div>}
            </div>

            <aside className="results-panel" aria-label="Resultados del archivo">
              <div className="results-heading"><span className="section-kicker">{view === 'conexiones' ? 'SIGUE EL HILO' : 'HISTORIAS DEL ARCHIVO'}</span><span className="results-total" aria-label={`${filtered.length} resultados`}>{filtered.length.toString().padStart(2, '0')}</span></div>
              <label className="state-select"><MapPin size={16} /><span className="sr-only">Seleccionar estado</span><select aria-label="Seleccionar estado" value={filters.state} onChange={(event) => updateFilters({ state: event.target.value })}><option value="">Todo México</option>{states.map((state) => <option key={state.id} value={state.id}>{state.name}</option>)}</select><ChevronDown size={14} /></label>
              <details className="period-control"><summary><span><SlidersHorizontal size={13} />Periodo</span><span>{filters.startYear} — {filters.endYear}<ChevronDown size={12} /></span></summary><div className="period-popover"><label>Desde <output>{filters.startYear}</output><input aria-label="Año inicial" type="range" min="1519" max="2026" value={filters.startYear} onChange={(event) => updateFilters({ startYear: Math.min(Number(event.target.value), filters.endYear) })} /></label><label>Hasta <output>{filters.endYear}</output><input aria-label="Año final" type="range" min="1519" max="2026" value={filters.endYear} onChange={(event) => updateFilters({ endYear: Math.max(Number(event.target.value), filters.startYear) })} /></label><div className="period-presets"><button onClick={() => updateFilters({ startYear: 1519, endYear: 1917 })}>1519–1917</button><button onClick={() => updateFilters({ startYear: 1968, endYear: 2026 })}>1968–hoy</button><button onClick={() => updateFilters({ startYear: 2000, endYear: 2026 })}>Este siglo</button></div></div></details>
              <div className="result-summary" aria-live="polite"><span>{filters.state ? stateById[filters.state] : filters.category === 'todos' ? 'Una selección para despertar tu curiosidad' : filters.category === 'versiones' ? 'Preguntas que necesitan evidencia' : categoryById[filters.category].name} · {filtered.length} resultados</span>{hasFilters && <button onClick={() => setFilters({ ...defaultFilters })} aria-label="Quitar todos los filtros"><X size={12} />Limpiar</button>}</div>
              {!ordered.length ? <div className="results-empty"><Compass size={32} /><h3>{filters.state && !filters.query ? 'Aún quedan historias por contar aquí.' : 'No encontramos coincidencias.'}</h3><p>Prueba otra época o estado. Las regiones sin una localización precisa se conservan en la cronología nacional.</p><button className="text-button" onClick={() => setFilters({ ...defaultFilters })}>Explorar todo México<ArrowRight size={14} /></button></div> : view === 'conexiones' && (focusEvent || focusPerson) ? <div className="focus-panel">
                {focusEvent ? <><EventCard event={focusEvent} variant="featured" onOpen={openEvent} /><p className="focus-description">{focusEvent.summary}</p><button className="primary-button" onClick={() => openEvent(focusEvent.id)}>Abrir la historia completa<ArrowUpRight size={15} /></button></> : focusPerson && <><PersonAvatar id={focusPerson.id} className="focus-person-icon" /><span className="category-label">PERSONAJE</span><h3>{focusPerson.name}</h3><span className="focus-role">{focusPerson.role}</span><p className="focus-description">{focusPerson.description}</p><button className="primary-button" onClick={() => setSelection({ type: 'person', id: focusPerson.id })}>Explorar personaje<ArrowUpRight size={15} /></button>{focusPortrait && <PortraitCredit portrait={focusPortrait} compact />}<h4 className="focus-related-title">Aparece en estas historias · {focusStories.length}</h4>{focusStories.slice(0, 6).map((event) => <EventCard key={event.id} event={event} onOpen={openEvent} />)}{focusStories.length > 6 && <button className="all-events-button" onClick={() => setSelection({ type: 'person', id: focusPerson.id })}>Más historias en su perfil<ArrowUpRight size={14} /></button>}</>}
                <div className="focus-tip"><GitBranch size={17} /><p>Selecciona otro punto de la red.<br />Siempre hay un hilo por seguir.</p></div>
              </div> : <><div className="results-list">{ordered.slice(0, 4).map((event, index) => <EventCard key={event.id} event={event} onOpen={openEvent} variant={index === 0 ? 'featured' : 'compact'} />)}</div><button className="all-events-button" onClick={() => { setView('cronologia'); explorerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }) }}>Ver {filtered.length === 1 ? 'el acontecimiento' : `los ${filtered.length} acontecimientos`}<ArrowRight size={15} /></button></>}
              <div className="results-source-note"><ShieldCheck size={12} /><span>Más contexto. Menos versiones sin respaldo.</span></div>
            </aside>
          </div>
        </div>
        <div className="atlas-bottom-note"><span><MapPin size={12} />{events.length} historias investigadas. Cada ficha declara su evidencia y su estado de revisión.</span><button onClick={() => setInfo('metodologia')}>Método y trazabilidad<ArrowUpRight size={12} /></button></div>
      </section>

      <section className="routes-section page-width" id="rutas" aria-labelledby="routes-title"><div className="routes-heading"><div><span className="eyebrow">NO SABES POR DÓNDE EMPEZAR</span><h2 id="routes-title">Una historia lleva a otra<span>.</span></h2></div><p>Tres puertas de entrada.<br />Tú decides hasta dónde seguir.</p></div>
        <div className="route-grid">
          <button className="route-card route-memory" onClick={() => startRoute('desastres', 'p6-terremoto-1985')}><img src="/images/earthquake.jpg" alt="Hospital General tras el terremoto de 1985" loading="lazy" /><span className="route-topline"><span>01 / MEMORIA COLECTIVA</span><span>1985 — 2017</span></span><span className="route-content"><span>La fuerza de estar juntos.</span><strong>Cuando la ciudad<br />se volvió comunidad.</strong><span className="route-action">Explorar la conexión<span><ArrowUpRight size={18} /></span></span></span></button>
          <button className="route-card route-power" onClick={() => startRoute('politica', 'p6-eleccion-1988')}><img src="/images/city.jpg" alt="Vista aérea contemporánea del centro de Ciudad de México, imagen de contexto" loading="lazy" /><span className="route-topline"><span>02 / POLÍTICA Y PODER</span><span>1988 — 1994</span></span><span className="route-content"><span>Las preguntas que siguen abiertas.</span><strong>El poder,<br />bajo la lupa.</strong><span className="route-action">Seguir el hilo<span><ArrowUpRight size={18} /></span></span></span></button>
          <button className="route-card route-security" onClick={() => startRoute('seguridad', 'p6-cartel-guadalajara')}><img src="/images/guadalajara.jpg" alt="Vista contemporánea de Guadalajara, imagen de contexto" loading="lazy" /><span className="route-topline"><span>03 / CRIMEN ORGANIZADO</span><span>DÉCADA DE 1980</span></span><span className="route-content"><span>Entender el origen, sin mitificarlo.</span><strong>Guadalajara:<br />las raíces de una red.</strong><span className="route-action">Conectar los puntos<span><ArrowUpRight size={18} /></span></span></span></button>
        </div>
      </section>

      <section className="methodology-banner page-width"><div className="methodology-symbol"><Sparkles size={32} strokeWidth={1.2} /><span>LA DUDA ES EL INICIO.</span></div><div className="methodology-copy"><h2>Cuestiona todo.<br /><span>También lo que encuentres aquí.</span></h2><p>Historias investigadas, evidencia localizada y versiones en disputa.<br />Te decimos qué sostiene cada relato y qué sigue pendiente.</p></div><button onClick={() => setInfo('metodologia')}>Nuestra forma de documentar<ArrowUpRight size={16} /></button></section>

      <section className="archive-numbers page-width" aria-label="La colección en cifras"><div><strong>{events.length.toString().padStart(2, '0')}</strong><span>historias investigadas<br />de seis épocas</span></div><div><strong>32</strong><span>estados,<br />una memoria compartida</span></div><div><strong>{connections.length}</strong><span>vínculos, contextos<br />y menciones</span></div><div><strong>{sources.length}</strong><span>referencias<br />leídas y citadas</span></div><span className="archive-note">Un archivo vivo.<br /><strong>Una historia que seguimos construyendo.</strong></span></section>
    </main>

    <footer className="site-footer page-width"><div className="footer-top"><Logo small /><span>No se trata de memorizar fechas.<br /><strong>Se trata de entender cómo llegamos aquí.</strong></span><div><button onClick={() => setInfo('metodologia')}>El proyecto</button><button onClick={() => setInfo('fuentes')}>Fuentes del archivo<ArrowUpRight size={12} /></button><button onClick={() => setInfo('creditos')}>Créditos y licencias<ArrowUpRight size={12} /></button></div></div><div className="footer-bottom"><span>© 2026 LHMM · La Historia del México Moderno.</span><span>Hecho con curiosidad. Y con contexto.<span className="footer-dot" /></span></div></footer>

    {selection && <DetailDrawer selection={selection} saved={saved} onClose={() => setSelection(null)} onOpen={setSelection} onSave={toggleSave} onShare={share} onExploreConnections={exploreNetwork} />}
    {info && <InfoDialog key={info} mode={info} saved={saved} onClose={() => setInfo(null)} onOpen={openEvent} onOpenPerson={(id) => { setInfo(null); setSelection({ type: 'person', id }) }} />}
    {toast && <div ref={toastRef} popover="manual" className="toast" role="status"><Check size={16} /><div>{toast.message}{toast.link && <input value={toast.link} readOnly aria-label="Enlace para compartir" onFocus={(event) => event.target.select()} />}</div><button aria-label="Cerrar aviso" onClick={() => setToast(null)}><X size={14} /></button></div>}
  </>
}
