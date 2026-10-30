import type { Connection } from './types'
import { personById } from './catalog'
import { events } from './events'

// Curated links between stories. Each one says what kind of relation it is;
// a shared date or theme never becomes a causal claim on its own.
const editorialConnections: Connection[] = [
  { from: 'p1-alianzas', to: 'p1-toxcatl', label: 'Proceso de conquista', description: 'La alianza tlaxcalteca y la entrada a Tenochtitlan antecedieron a la ruptura de 1520.', kind: 'documentada', sourceIds: ['inah-grandeza'] },
  { from: 'p1-toxcatl', to: 'p1-epidemias', label: 'Viruela y ruptura', description: 'La epidemia de viruela forma parte del mismo proceso que debilitó a Tenochtitlan durante el sitio.', kind: 'documentada', sourceIds: ['inah-grandeza'] },
  { from: 'p1-virreinato', to: 'p1-mixton', label: 'Gobierno y guerra', description: 'La guerra del Mixtón ocurrió dentro del proceso de consolidación del gobierno novohispano.', kind: 'documentada', sourceIds: ['inah-grandeza'] },
  { from: 'p1-iglesia-educacion', to: 'p1-hospitales', label: 'Iglesia, educación y caridad', description: 'Las órdenes religiosas participaron tanto en la evangelización y la enseñanza como en la fundación de hospitales.', kind: 'contexto', sourceIds: ['inah-grandeza'] },
  { from: 'p2-yanga', to: 'p2-esclavitud', label: 'Resistencia y castas', description: 'La resistencia cimarrona se entiende dentro de la historia de la esclavitud africana y del orden de castas.', kind: 'documentada', sourceIds: ['inah-grandeza'] },
  { from: 'p2-iturrigaray', to: 'p3-dolores', label: 'Crisis de 1808 y ruptura', description: 'El golpe contra Iturrigaray y la crisis de legitimidad de 1808 abrieron el camino a la insurgencia de 1810.', kind: 'contexto', sourceIds: ['inah-grandeza'] },
  { from: 'p3-dolores', to: 'p3-hidalgo', label: 'Levantamiento y represión', description: 'La insurgencia iniciada en Dolores continuó hasta la captura y ejecución de Hidalgo en 1811.', kind: 'documentada', sourceIds: ['inehrm-independencia'] },
  { from: 'p3-dolores', to: 'p3-alhondiga', label: 'Campaña insurgente', description: 'La toma de la Alhóndiga de Granaditas ocurrió durante la primera campaña insurgente.', kind: 'documentada', sourceIds: ['inehrm-independencia'] },
  { from: 'p3-chilpancingo', to: 'p3-apatzingan', label: 'Congreso y Constitución', description: 'El Congreso de Chilpancingo dio paso a la Constitución de Apatzingán.', kind: 'documentada', sourceIds: ['inehrm-independencia'] },
  { from: 'p3-iguala', to: 'p3-iturbide', label: 'Consumación e Imperio', description: 'El Plan de Iguala condujo a la consumación de la Independencia y al posterior Imperio de Iturbide.', kind: 'documentada', sourceIds: ['inehrm-republica'] },
  { from: 'p4-ley-lerdo', to: 'p4-constitucion-1857', label: 'Reforma liberal', description: 'La Ley Lerdo y las medidas de desamortización forman parte del programa que desembocó en la Constitución de 1857.', kind: 'documentada', sourceIds: ['inehrm-reforma'] },
  { from: 'p4-tacubaya', to: 'p4-leyes-reforma', label: 'Guerra de Reforma', description: 'El Plan de Tacubaya abrió la Guerra de Reforma, durante la cual se promulgaron las Leyes de Reforma.', kind: 'documentada', sourceIds: ['inehrm-reforma'] },
  { from: 'p4-puebla-1862', to: 'p4-segundo-imperio', label: 'Intervención e Imperio', description: 'La intervención francesa y la batalla de Puebla precedieron al establecimiento del Segundo Imperio.', kind: 'documentada', sourceIds: ['inehrm-reforma'] },
  { from: 'p4-porfiriato', to: 'p4-cananea', label: 'Orden porfiriano y huelgas', description: 'La huelga de Cananea ocurrió dentro del orden político y laboral del Porfiriato.', kind: 'contexto', sourceIds: ['inehrm-porfiriato'] },
  { from: 'p4-porfiriato', to: 'p4-rio-blanco', label: 'Orden porfiriano y represión', description: 'La huelga de Río Blanco y su represión se explican por las condiciones laborales del Porfiriato.', kind: 'contexto', sourceIds: ['inehrm-porfiriato'] },
  { from: 'p4-porfiriato', to: 'p4-creelman', label: 'Sucesión y entrevista', description: 'La entrevista Díaz-Creelman de 1908 se produjo dentro de la larga permanencia de Díaz en el poder.', kind: 'contexto', sourceIds: ['inehrm-porfiriato'] },
  { from: 'p5-plan-san-luis', to: 'p5-renuncia-diaz', label: 'Levantamiento y renuncia', description: 'El levantamiento maderista de 1910 condujo a los Tratados de Ciudad Juárez y a la renuncia de Díaz en 1911.', kind: 'documentada', sourceIds: ['inehrm-revolucion'] },
  { from: 'p5-decena-tragica', to: 'p5-veracruz-1914', label: 'Revolución y ocupación', description: 'La ocupación estadounidense de Veracruz ocurrió durante la guerra civil revolucionaria.', kind: 'contexto', sourceIds: ['inehrm-revolucion'] },
  { from: 'p5-constitucion-1917', to: 'p5-agua-prieta', label: 'Orden constitucional y ruptura', description: 'El Plan de Agua Prieta de 1920 desafió al gobierno surgido del orden constitucional de 1917.', kind: 'contexto', sourceIds: ['inehrm-posrevolucion'] },
  { from: 'p5-tlatelolco', to: 'p5-halconazo', label: 'Represión y continuidad', description: 'El Halconazo de 1971 se entiende en continuidad con la represión del movimiento estudiantil de 1968.', kind: 'contexto', sourceIds: ['inehrm-contemporaneo'] },
  { from: 'p5-crisis-1982', to: 'p6-terremoto-1985', label: 'Austeridad y emergencia', description: 'La crisis de la deuda y las políticas de austeridad enmarcaron la respuesta pública al sismo de 1985.', kind: 'contexto', sourceIds: ['inehrm-contemporaneo'] },
  { from: 'p6-terremoto-1985', to: 'p6-sismos-2017', label: 'Memoria sísmica', description: 'Ambos sismos forman parte de la memoria de la organización ciudadana. No se afirma un vínculo causal entre los movimientos geológicos.', kind: 'contexto', sourceIds: ['unam-desastres'] },
  { from: 'p6-eleccion-1988', to: 'p6-prd-1989', label: 'Crisis electoral y nuevo partido', description: 'La crisis electoral de 1988 precedió a la fundación del PRD en 1989.', kind: 'documentada', sourceIds: ['inehrm-contemporaneo'] },
  { from: 'p6-prd-1989', to: 'p6-ife-1990', label: 'Oposición y reforma electoral', description: 'La nueva fuerza opositora participó en el debate que llevó a la creación del IFE en 1990.', kind: 'contexto', sourceIds: ['inehrm-contemporaneo'] },
  { from: 'p6-ife-1990', to: 'p6-reforma-1996', label: 'Reformas electorales', description: 'La reforma de 1996 profundizó la autonomía del IFE creado en 1990.', kind: 'documentada', sourceIds: ['inehrm-contemporaneo'] },
  { from: 'p6-tlcan-ezln-1994', to: 'p6-colosio-1994', label: 'Año de crisis', description: 'El levantamiento del EZLN y el asesinato de Colosio ocurrieron en el mismo año de crisis política.', kind: 'contexto', sourceIds: ['inehrm-contemporaneo'] },
  { from: 'p6-colosio-1994', to: 'p6-crisis-1994', label: 'Sucesión y crisis financiera', description: 'El asesinato de Colosio alteró la sucesión presidencial en un año que cerró con la devaluación de diciembre.', kind: 'contexto', sourceIds: ['inehrm-contemporaneo'] },
  { from: 'p6-1997-mayoria', to: 'p6-alternancia-2000', label: 'Competencia electoral', description: 'La pérdida de la mayoría absoluta del PRI en 1997 antecedió a la alternancia presidencial de 2000.', kind: 'documentada', sourceIds: ['inehrm-contemporaneo'] },
  { from: 'p6-eleccion-2018', to: 'p6-eleccion-2024', label: 'Continuidad de la alternancia', description: 'Ambas elecciones forman parte del ciclo de alternancias y continuidades políticas del siglo XXI.', kind: 'contexto', sourceIds: ['elpais-2024'] },
  { from: 'p6-eleccion-2024', to: 'p6-judicial-2025', label: 'Nueva mayoría y reforma judicial', description: 'La elección de 2024 configuró la mayoría que impulsó la elección popular del Poder Judicial en 2025.', kind: 'contexto', sourceIds: ['elpais-2025'] },
  { from: 'p6-cartel-guadalajara', to: 'p6-zambada-2024', label: 'Genealogía criminal', description: 'El Cártel de Guadalajara y las detenciones de 2024 pertenecen a historias distintas. La conexión es de contexto: no se prueba una continuidad organizativa ni una responsabilidad compartida.', kind: 'contexto', sourceIds: ['inehrm-contemporaneo', 'us-embassy-zambada'] },
  { from: 'p6-vacunacion-universal-1991', to: 'p6-covid-2020', label: 'Política de vacunación', description: 'El Programa de Vacunación Universal de 1991 forma parte de los antecedentes institucionales de la respuesta vacunal de 2020.', kind: 'contexto', sourceIds: ['salud-vacunas'] },
  { from: 'p6-seguro-popular-2003', to: 'p6-imss-bienestar', label: 'Cobertura y salud pública', description: 'Ambas historias tratan la ampliación de la cobertura sanitaria desde instituciones y programas distintos.', kind: 'contexto', sourceIds: ['salud-constitucion'] },
  { from: 'p6-h1n1-2009', to: 'p6-covid-2020', label: 'Respuesta a pandemias', description: 'La experiencia de 2009 se cita como antecedente de preparedness sanitaria, no como explicación de la pandemia de 2020.', kind: 'contexto', sourceIds: ['salud-constitucion'] },
]

const pairKey = (from: string, to: string) => [from, to].sort().join('|')
const used = new Set(editorialConnections.map((edge) => pairKey(edge.from, edge.to)))

const mentions: Connection[] = events.flatMap((event) => event.people.filter((id) => !used.has(pairKey(id, event.id))).map((id) => {
  used.add(pairKey(id, event.id))
  return {
    from: id,
    to: event.id,
    kind: 'mencion' as const,
    label: 'Mención en la historia',
    description: `${personById[id].name} aparece en el texto o en la lista de protagonistas de esta historia. Es una mención para navegar, no una atribución de responsabilidad ni un vínculo causal verificado.`,
    sourceIds: event.sourceIds,
  }
}))

export const connections: Connection[] = [...editorialConnections, ...mentions]
export const connectionKindLabels: Record<Connection['kind'], string> = {
  documentada: 'Vínculo documentado',
  contexto: 'Relación de contexto',
  mencion: 'Mención en la historia',
}
