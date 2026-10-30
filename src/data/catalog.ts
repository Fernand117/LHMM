import type { CategoryId, Person } from './types'

export const categories: { id: CategoryId; name: string; shortName: string; color: string }[] = [
  { id: 'territorio', name: 'Historia y territorio', shortName: 'Historia', color: '#c6ad7f' },
  { id: 'politica', name: 'Política y poder', shortName: 'Política', color: '#aa9bd0' },
  { id: 'sociedad', name: 'Sociedad y resistencia', shortName: 'Sociedad', color: '#91bba6' },
  { id: 'seguridad', name: 'Crimen organizado', shortName: 'Crimen organizado', color: '#d38b77' },
  { id: 'desastres', name: 'Desastres y salud', shortName: 'Desastres y salud', color: '#d0b868' },
]

export const categoryById = Object.fromEntries(categories.map((category) => [category.id, category]))

export const states = [
  ['MX-AGU', 'Aguascalientes'], ['MX-BCN', 'Baja California'], ['MX-BCS', 'Baja California Sur'],
  ['MX-CAM', 'Campeche'], ['MX-CHP', 'Chiapas'], ['MX-CHH', 'Chihuahua'], ['MX-CMX', 'Ciudad de México'],
  ['MX-COA', 'Coahuila'], ['MX-COL', 'Colima'], ['MX-DUR', 'Durango'], ['MX-MEX', 'Estado de México'],
  ['MX-GUA', 'Guanajuato'], ['MX-GRO', 'Guerrero'], ['MX-HID', 'Hidalgo'], ['MX-JAL', 'Jalisco'],
  ['MX-MIC', 'Michoacán'], ['MX-MOR', 'Morelos'], ['MX-NAY', 'Nayarit'], ['MX-NLE', 'Nuevo León'],
  ['MX-OAX', 'Oaxaca'], ['MX-PUE', 'Puebla'], ['MX-QUE', 'Querétaro'], ['MX-ROO', 'Quintana Roo'],
  ['MX-SLP', 'San Luis Potosí'], ['MX-SIN', 'Sinaloa'], ['MX-SON', 'Sonora'], ['MX-TAB', 'Tabasco'],
  ['MX-TAM', 'Tamaulipas'], ['MX-TLA', 'Tlaxcala'], ['MX-VER', 'Veracruz'], ['MX-YUC', 'Yucatán'], ['MX-ZAC', 'Zacatecas'],
].map(([id, name]) => ({ id, name }))

export const stateById = Object.fromEntries(states.map((state) => [state.id, state.name]))

export const people: Person[] = [
  { id: 'cortes', name: 'Hernán Cortés', role: 'Conquistador', description: 'Encabezó la expedición española de 1519 y participó en la coalición que sitió Tenochtitlan.' },
  { id: 'malintzin', name: 'Malintzin', role: 'Intérprete y mediadora', description: 'Figura central de la comunicación y mediación entre la expedición de Cortés y distintos pueblos indígenas.' },
  { id: 'cuauhtemoc', name: 'Cuauhtémoc', role: 'Tlatoani de Tenochtitlan', description: 'Encabezó la resistencia mexica durante el sitio de 1521 y fue capturado al caer la ciudad.' },
  { id: 'hidalgo', name: 'Miguel Hidalgo', role: 'Dirigente insurgente', description: 'Participó en la conspiración y convocó al levantamiento de septiembre de 1810 en Dolores.' },
  { id: 'madero', name: 'Francisco I. Madero', role: 'Político y revolucionario', description: 'Impulsó el antirreeleccionismo y el Plan de San Luis, que convocó al levantamiento de 1910.' },
  { id: 'zapata', name: 'Emiliano Zapata', role: 'Dirigente agrarista', description: 'Encabezó el movimiento del sur durante la Revolución y defendió la restitución de tierras.' },
  { id: 'felix-gallardo', name: 'Miguel Ángel Félix Gallardo', role: 'Integrante del Cártel de Guadalajara', description: 'Dirigente de redes del narcotráfico en los años ochenta, procesado en relación con el caso Camarena.' },
  { id: 'kiki', name: 'Enrique “Kiki” Camarena', role: 'Agente de la DEA', description: 'Investigó redes del narcotráfico desde Guadalajara. Fue secuestrado y asesinado en 1985.' },
  { id: 'salinas', name: 'Carlos Salinas de Gortari', role: 'Presidente · 1988–1994', description: 'Candidato declarado ganador en la controvertida elección de 1988 y presidente durante los acontecimientos de 1994.' },
  { id: 'cardenas', name: 'Cuauhtémoc Cárdenas', role: 'Candidato presidencial en 1988', description: 'Encabezó el Frente Democrático Nacional y cuestionó los resultados de la elección presidencial de 1988.' },
  { id: 'gargallo', name: 'Toribio “El Toro” Gargallo', role: 'Figura de poder regional', description: 'Los Angeles Times documentó en 1991 testimonios de violencia y cacicazgo en torno a él en el centro de Veracruz.' },
  { id: 'colosio-persona', name: 'Luis Donaldo Colosio', role: 'Candidato presidencial del PRI', description: 'Fue asesinado durante la campaña presidencial de 1994, en Lomas Taurinas, Tijuana.' },
  { id: 'calderon', name: 'Felipe Calderón', role: 'Presidente · 2006–2012', description: 'Impulsó una estrategia federal de seguridad con despliegue militar, iniciada en Michoacán en diciembre de 2006.' },
  { id: 'mencho-persona', name: 'Nemesio Oseguera Cervantes', role: 'Dirigente del CJNG', description: 'Conocido como “El Mencho”. Reuters y EL PAÍS reportaron su muerte en el operativo de Tapalpa de febrero de 2026.' },
]

export const personById = Object.fromEntries(people.map((person) => [person.id, person])) as Record<string, Person>
