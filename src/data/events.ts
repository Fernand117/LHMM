import type { HistoricalEvent } from './types'

const cityNote = 'Vista aérea contemporánea de Ciudad de México. Imagen de contexto, no del acontecimiento.'
const guadalajaraNote = 'Vista contemporánea de Guadalajara. Imagen de contexto, no del operativo ni de sus protagonistas.'
const revolutionNote = 'Soldados durante la Decena Trágica, 1913. Fotografía de Osuna; contexto de la Revolución, no del levantamiento de 1910.'
const conquestNote = 'Representación pictórica posterior de la caída de Tenochtitlan. No es un registro contemporáneo del sitio.'

export const events: HistoricalEvent[] = [
  {
    id: 'llegada-cortes', title: '1519: el encuentro que cambió el territorio', shortTitle: 'La llegada de Cortés', year: 1519, date: '1519 · inicio de un proceso', location: 'Costa de Veracruz', states: ['MX-VER', 'MX-TLA'], coordinates: [-96.32, 19.43], category: 'territorio',
    summary: 'El desembarco de la expedición de Hernán Cortés y sus alianzas con pueblos indígenas abrieron un proceso de conquista que no fue una sola batalla.', image: 'conquest', imageNote: conquestNote,
    chapters: [
      { title: 'Un territorio, muchos pueblos', text: 'Mesoamérica no era un país unificado. Pueblos con intereses, conflictos y sistemas políticos propios enfrentaron la llegada de la expedición española. Usar los estados actuales en este mapa sirve únicamente como referencia geográfica.' },
      { title: 'Las alianzas cambiaron la historia', text: 'Las alianzas de Cortés con grupos totonacas y tlaxcaltecas fueron decisivas para el avance hacia el valle de México. Los aliados indígenas actuaron con objetivos propios; reducirlos a simples acompañantes borra su protagonismo.' },
      { title: 'Lo que vino después', text: 'El recorrido culminó en el sitio de Tenochtitlan de 1521, pero la expansión colonial y las resistencias continuaron durante siglos en distintas regiones.' },
    ], people: ['cortes', 'malintzin'], sourceIds: ['bbc-conquista'],
  },
  {
    id: 'tenochtitlan', title: 'La caída de México-Tenochtitlan', shortTitle: 'La caída de Tenochtitlan', year: 1521, date: '13 de agosto de 1521', location: 'México-Tenochtitlan · actual CDMX', states: ['MX-CMX'], coordinates: [-99.13, 19.43], category: 'territorio',
    summary: 'Tras meses de sitio, Tenochtitlan cayó ante una coalición hispano-indígena. Fue un punto de quiebre, no el final de todas las resistencias.', image: 'conquest', imageNote: conquestNote,
    chapters: [
      { title: 'Una ciudad sitiada', text: 'La interrupción de suministros, las epidemias y los combates debilitaron a la población mexica. El 13 de agosto fue capturado Cuauhtémoc, el último tlatoani de Tenochtitlan.' },
      { title: 'Más allá de una historia de dos bandos', text: 'La investigación histórica destaca el peso de los contingentes indígenas aliados de los españoles. No fue un enfrentamiento entre dos naciones modernas: esas categorías aún no existían.' },
      { title: 'Una conquista que no terminó en 1521', text: 'La caída de la capital mexica dio paso a una reorganización colonial. Otros pueblos resistieron o negociaron su posición durante mucho tiempo. Sus historias no deben quedar fuera del mapa.' },
    ], people: ['cortes', 'malintzin', 'cuauhtemoc'], sourceIds: ['bbc-conquista'],
  },
  {
    id: 'independencia', title: 'El inicio de la Independencia', shortTitle: 'El Grito de Dolores', year: 1810, endYear: 1821, date: '16 de septiembre de 1810', location: 'Dolores Hidalgo, Guanajuato', states: ['MX-GUA'], coordinates: [-100.93, 21.16], category: 'territorio',
    summary: 'El llamado de Miguel Hidalgo en Dolores inició una guerra larga y diversa. La independencia se consumaría once años después.', image: 'conquest', imageNote: 'Pintura sobre la conquista, utilizada como contexto del orden colonial anterior a la Independencia. No representa el Grito de Dolores.',
    chapters: [
      { title: 'La madrugada de Dolores', text: 'Tras el descubrimiento de la conspiración de Querétaro, Hidalgo y otros participantes adelantaron el levantamiento. La convocatoria reunió a personas con agravios y expectativas distintas.' },
      { title: 'Once años, distintas etapas', text: 'La insurgencia no tuvo un solo líder ni un programa inmutable. Después de Hidalgo, dirigentes como José María Morelos, Vicente Guerrero y muchas comunidades sostuvieron la lucha.' },
      { title: 'Independencia no significó igualdad inmediata', text: 'La entrada del Ejército Trigarante en 1821 cerró la guerra, pero no resolvió la desigualdad social, las disputas por la tierra ni el problema de cómo gobernar el nuevo país.' },
    ], people: ['hidalgo'], sourceIds: ['cndh-independencia'],
  },
  {
    id: 'revolucion', title: 'La Revolución: muchas luchas, un país en transformación', shortTitle: 'La Revolución Mexicana', year: 1910, endYear: 1920, date: '20 de noviembre de 1910 · fecha convocada', location: 'Chihuahua, Puebla y otros estados', states: ['MX-CHH', 'MX-PUE', 'MX-MOR'], coordinates: [-106.07, 28.63], category: 'sociedad',
    summary: 'La lucha contra la reelección de Porfirio Díaz abrió una década de conflictos por la democracia, la tierra y el poder.', image: 'revolution', imageNote: revolutionNote,
    chapters: [
      { title: 'El llamado de Madero', text: 'El Plan de San Luis convocó a tomar las armas el 20 de noviembre de 1910. La inconformidad con el régimen porfirista tenía raíces políticas, laborales y agrarias.' },
      { title: 'No hubo una sola revolución', text: 'Los proyectos de Madero, Zapata, Villa y Carranza no eran idénticos. Hubo alianzas, rupturas y guerras entre facciones, con grandes costos para la población civil.' },
      { title: 'De las armas a las instituciones', text: 'La Constitución de 1917 incorporó demandas sociales, pero su promulgación no puso fin inmediato a la violencia. La periodización de la Revolución varía según la región y el enfoque histórico.' },
    ], people: ['madero', 'zapata'], sourceIds: ['cndh-revolucion'],
  },
  {
    id: 'constitucion', title: '1917: una Constitución con derechos sociales', shortTitle: 'La Constitución de 1917', year: 1917, date: '5 de febrero de 1917', location: 'Querétaro', states: ['MX-QUE'], coordinates: [-100.39, 20.59], category: 'politica',
    summary: 'El Congreso Constituyente promulgó una nueva carta magna, con disposiciones fundamentales sobre educación, tierra y trabajo.', image: 'revolution', imageNote: revolutionNote,
    chapters: [
      { title: 'El Congreso de Querétaro', text: 'Convocado por Venustiano Carranza, el Constituyente debatió una reforma del orden jurídico en plena etapa revolucionaria. El resultado fue una nueva Constitución.' },
      { title: 'Los derechos sociales', text: 'Los artículos 3, 27 y 123 se convirtieron en referentes de la educación, la propiedad de la tierra y las relaciones laborales. Su aplicación fue objeto de disputas posteriores.' },
      { title: 'Un documento vivo', text: 'La Constitución ha sido reformada numerosas veces. Su texto original y sus versiones vigentes deben leerse por separado para no atribuir a 1917 normas adoptadas después.' },
    ], people: [], sourceIds: ['inah-constitucion', 'cndh-revolucion'],
  },
  {
    id: 'tlatelolco', title: 'Tlatelolco: la memoria que no se apaga', shortTitle: 'El 2 de octubre de 1968', year: 1968, date: '2 de octubre de 1968', location: 'Plaza de las Tres Culturas, CDMX', states: ['MX-CMX'], coordinates: [-99.14, 19.45], category: 'sociedad',
    summary: 'La represión del mitin estudiantil en Tlatelolco marcó la relación entre la sociedad y el Estado. La exigencia de verdad sigue siendo parte de su memoria.', image: 'city', imageNote: cityNote,
    chapters: [
      { title: 'El movimiento estudiantil', text: 'Durante 1968, estudiantes y otros sectores se organizaron para exigir libertades democráticas y el fin de la represión. El Consejo Nacional de Huelga articuló buena parte de sus demandas.' },
      { title: 'La tarde del 2 de octubre', text: 'Fuerzas estatales reprimieron a los asistentes al mitin de la Plaza de las Tres Culturas. Las fuentes no permiten establecer una cifra única y definitiva de víctimas.' },
      { title: 'Archivos contra el silencio', text: 'Testimonios, fotografías, documentos y trabajo de investigación han cuestionado las versiones oficiales iniciales. Las cifras y responsabilidades deben presentarse con atribución, no como si toda la documentación fuera concluyente.' },
    ], people: [], sourceIds: ['inehrm-1968', 'cndh-1968'],
  },
  {
    id: 'cartel-guadalajara', title: 'El ascenso del Cártel de Guadalajara', shortTitle: 'El Cártel de Guadalajara', year: 1980, endYear: 1989, date: 'Década de 1980 · periodo aproximado', location: 'Guadalajara, Jalisco', states: ['MX-JAL', 'MX-SIN'], coordinates: [-103.35, 20.67], category: 'seguridad',
    summary: 'Una organización con base en Guadalajara concentró redes del narcotráfico en los años ochenta. Su ruptura ayuda a entender parte del escenario posterior.', image: 'guadalajara', imageNote: guadalajaraNote,
    chapters: [
      { title: 'Una red, no un acta de fundación', text: 'El nombre Cártel de Guadalajara agrupa redes asociadas con Miguel Ángel Félix Gallardo, Rafael Caro Quintero y Ernesto Fonseca Carrillo. Su formación fue gradual; asignarle un día exacto produciría una falsa precisión.' },
      { title: 'El caso Camarena', text: 'El secuestro y asesinato del agente de la DEA Enrique Camarena en 1985 llevó a una investigación de gran impacto bilateral y a procesos contra integrantes de la organización.' },
      { title: 'Ruptura y reconfiguración', text: 'Las capturas de dirigentes durante los años ochenta reconfiguraron las redes existentes. Las genealogías de organizaciones criminales son procesos complejos, no líneas de sucesión empresariales perfectamente documentadas.' },
    ], people: ['felix-gallardo', 'kiki'], sourceIds: ['elpais-guadalajara', 'dea-kiki'],
  },
  {
    id: 'kiki-camarena', title: 'Kiki Camarena: un caso que cruzó la frontera', shortTitle: 'El caso Kiki Camarena', year: 1985, date: '7 de febrero de 1985 · secuestro', location: 'Guadalajara, Jalisco', states: ['MX-JAL'], coordinates: [-103.35, 20.67], category: 'seguridad',
    summary: 'El secuestro y asesinato del agente Enrique Camarena abrió una crisis entre México y Estados Unidos y una investigación que trascendió décadas.', image: 'guadalajara', imageNote: guadalajaraNote,
    chapters: [
      { title: 'El agente y la investigación', text: 'Enrique Camarena trabajaba en la oficina de la DEA en Guadalajara. Según la cronología institucional de la agencia, fue secuestrado el 7 de febrero de 1985 y su cuerpo se encontró el 5 de marzo.' },
      { title: 'Una investigación internacional', text: 'La Operación Leyenda investigó el crimen y las redes que lo rodearon. El caso derivó en detenciones y procesos a ambos lados de la frontera.' },
      { title: 'Separar expedientes de dramatizaciones', text: 'Series y documentales han popularizado versiones sobre el caso. Una acusación, un testimonio y una sentencia tienen distinto valor probatorio: ninguna dramatización sustituye la consulta de los expedientes.' },
    ], people: ['kiki', 'felix-gallardo'], sourceIds: ['dea-kiki', 'elpais-guadalajara'],
  },
  {
    id: 'sismo-1985', title: '1985: la ciudad que se levantó entre los escombros', shortTitle: 'El terremoto de 1985', year: 1985, date: '19 de septiembre de 1985', location: 'Ciudad de México · sismo frente a Michoacán', states: ['MX-CMX', 'MX-MIC'], coordinates: [-99.13, 19.43], category: 'desastres',
    summary: 'La destrucción transformó la capital. Entre el duelo y la emergencia, miles de personas hicieron de la organización ciudadana una fuerza histórica.', image: 'earthquake', imageNote: 'Hospital General colapsado tras el sismo de 1985. Fotografía del USGS, de dominio público.',
    chapters: [
      { title: 'Las 7:19 de la mañana', text: 'Un gran sismo frente a la costa de Michoacán causó daños especialmente graves en la capital. Las cifras de personas fallecidas difieren entre recuentos oficiales y estimaciones posteriores.' },
      { title: 'La respuesta de la gente', text: 'Vecinos, rescatistas voluntarios y organizaciones civiles participaron en la búsqueda, el alojamiento y el reparto de ayuda. La emergencia exhibió deficiencias de las autoridades y de la construcción urbana.' },
      { title: 'Una memoria que volvió en 2017', text: 'La organización de damnificados influyó en la vida pública y en los debates sobre protección civil. La coincidencia de fecha con el sismo de 2017 no implica una relación causal entre ambos movimientos.' },
    ], people: [], sourceIds: ['elpais-sismo85'],
    video: { title: 'A 40 años del sismo de 1985 en Ciudad de México', publisher: 'EL PAÍS', url: 'https://www.youtube.com/watch?v=FqgKWqgqbDY' },
  },
  {
    id: 'caida-sistema', title: '1988: la noche en que “se cayó el sistema”', shortTitle: 'La caída del sistema', year: 1988, date: '6 de julio de 1988', location: 'Ciudad de México · elección nacional', states: ['MX-CMX'], coordinates: [-99.15, 19.43], category: 'politica',
    summary: 'La interrupción de la información electoral y las denuncias de fraude abrieron una de las mayores crisis de legitimidad del México contemporáneo.', image: 'city', imageNote: cityNote,
    chapters: [
      { title: 'Una elección excepcional', text: 'Carlos Salinas de Gortari, Cuauhtémoc Cárdenas y Manuel Clouthier compitieron en una elección bajo un sistema administrado por el gobierno. La ruptura de una corriente del PRI había modificado el mapa político.' },
      { title: 'La interrupción de los resultados', text: 'Durante la noche del 6 de julio dejó de fluir la información del cómputo. Las autoridades declararon posteriormente ganador a Salinas; sectores opositores denunciaron fraude y cuestionaron el proceso.' },
      { title: 'Lo que puede y no puede reconstruirse', text: 'El episodio fue parte del contexto de reformas electorales posteriores. La controversia sobre el cómputo y la destrucción posterior de boletas limita reconstrucciones independientes completas de la elección.' },
    ], people: ['salinas', 'cardenas'], sourceIds: ['universal-1988'],
    claims: [{ title: '¿La “caída” explica por sí sola quién ganó?', status: 'En disputa', explanation: 'La interrupción informativa y las denuncias de fraude están documentadas. Eso no equivale a disponer hoy de un recuento independiente y completo que permita reconstruir cada voto. Las interpretaciones deben atribuirse a sus autores.', sourceIds: ['universal-1988'] }],
  },
  {
    id: 'toribio-gargallo', title: 'Toribio Gargallo y el poder del cacicazgo regional', shortTitle: 'El cacicazgo de Toribio Gargallo', year: 1991, date: 'Octubre de 1991 · muerte reportada', location: 'Zona cañera del centro de Veracruz', states: ['MX-VER'], coordinates: [-96.78, 18.72], category: 'seguridad',
    summary: 'Un reportaje de 1991 documentó el miedo, los testimonios de violencia y las relaciones de poder alrededor de Toribio “El Toro” Gargallo.', image: 'tezonapa', imageNote: 'Avenida principal de Tezonapa, Veracruz. Vista de contexto regional; no es un registro del periodo de Gargallo.',
    chapters: [
      { title: 'Lo documentado en la prensa', text: 'La periodista Marjorie Miller reportó para Los Angeles Times el 9 de noviembre de 1991 desde San Pablo Ojo de Agua. Su texto recoge testimonios de habitantes y autoridades sobre Gargallo y el hallazgo de fosas en sus terrenos.' },
      { title: 'Cacicazgo, tierra y miedo', text: 'La crónica describe relaciones entre poder rural, producción cañera y autoridades. Las acusaciones del reportaje se presentan como información atribuida a esas fuentes, no como una sentencia judicial reconstruida por este archivo.' },
      { title: 'Una investigación que debe ampliarse', text: 'El alcance específico de su influencia en Tezonapa y en Cosolapa, Oaxaca, requiere contrastar hemerotecas y documentación local. Por eso esta ficha no asigna todavía el caso a Oaxaca ni dibuja vínculos con otras organizaciones sin evidencia.' },
    ], people: ['gargallo'], sourceIds: ['latimes-gargallo'],
  },
  {
    id: 'ezln', title: 'El levantamiento zapatista: “¡Ya basta!”', shortTitle: 'El levantamiento del EZLN', year: 1994, date: '1 de enero de 1994', location: 'San Cristóbal de las Casas, Chiapas', states: ['MX-CHP'], coordinates: [-92.64, 16.74], category: 'sociedad',
    summary: 'El EZLN hizo visibles las demandas de pueblos indígenas en el mismo día en que entró en vigor el Tratado de Libre Comercio de América del Norte.', image: 'city', imageNote: cityNote,
    chapters: [
      { title: 'El primero de enero', text: 'Integrantes del Ejército Zapatista de Liberación Nacional ocuparon cabeceras municipales de Chiapas. Denunciaban exclusión, pobreza y falta de representación política.' },
      { title: 'De la guerra al diálogo', text: 'Tras los combates iniciales se abrió una etapa de negociación. Los Acuerdos de San Andrés de 1996 se volvieron una referencia de las demandas sobre derechos y cultura indígenas.' },
      { title: 'Autonomía y continuidad', text: 'El zapatismo continuó mediante formas de organización autónoma y redes civiles. Sus transformaciones no deben reducirse al momento armado de 1994.' },
    ], people: ['salinas'], sourceIds: ['elpais-ezln'],
  },
  {
    id: 'colosio', title: 'Colosio: el magnicidio y las preguntas abiertas', shortTitle: 'El asesinato de Colosio', year: 1994, date: '23 de marzo de 1994', location: 'Lomas Taurinas, Tijuana, Baja California', states: ['MX-BCN'], coordinates: [-117.0, 32.51], category: 'politica',
    summary: 'El asesinato del candidato presidencial del PRI conmocionó al país. Las investigaciones y controversias sobre el caso han continuado durante décadas.', image: 'city', imageNote: cityNote,
    chapters: [
      { title: 'El mitin de Lomas Taurinas', text: 'Luis Donaldo Colosio fue atacado al terminar un acto de campaña en Tijuana. Su muerte cambió la elección presidencial de 1994 y alimentó una larga crisis de confianza.' },
      { title: 'La investigación y sus revisiones', text: 'Mario Aburto fue condenado por el asesinato. Posteriores revisiones judiciales y actuaciones de la Fiscalía han reabierto controversias sobre el caso y sobre otras posibles participaciones.' },
      { title: 'Hipótesis no significa sentencia', text: 'La cobertura de 2024 y 2025 recoge la hipótesis ministerial de un segundo tirador. Una detención o acusación no prueba culpabilidad: este archivo no presenta esa hipótesis como un hecho judicialmente demostrado.' },
    ], people: ['colosio-persona', 'salinas'], sourceIds: ['elpais-colosio', 'elpais-colosio25'],
    claims: [{ title: 'La hipótesis de un segundo tirador', status: 'En disputa', explanation: 'La Fiscalía ha sostenido esta línea de investigación y la prensa ha documentado su reactivación. No debe confundirse una hipótesis ministerial ni una recaptura con una sentencia firme que la confirme.', sourceIds: ['elpais-colosio', 'elpais-colosio25'] }],
  },
  {
    id: 'origen-zetas', title: 'El origen de Los Zetas', shortTitle: 'El origen de Los Zetas', year: 1997, endYear: 2000, date: 'Finales de los años noventa · aproximado', location: 'Tamaulipas', states: ['MX-TAM'], coordinates: [-99.51, 27.48], category: 'seguridad',
    summary: 'La incorporación de exmilitares al brazo armado del Cártel del Golfo transformó las formas de violencia de las organizaciones criminales.', image: 'tamaulipas', imageNote: 'Paisaje de El Bernalito, Tamaulipas. Fotografía de contexto geográfico, no de integrantes de la organización.',
    chapters: [
      { title: 'Un brazo armado', text: 'Reportajes de la BBC describieron a Los Zetas como un grupo integrado inicialmente por exmilitares, vinculado al Cártel del Golfo. La consolidación ocurrió gradualmente a finales de los noventa.' },
      { title: 'Violencia contra la población', text: 'Su expansión se asoció con secuestro, extorsión y ataques contra civiles. La perspectiva de este archivo prioriza el daño social, no las figuras o símbolos de la organización.' },
      { title: 'Ruptura y divisiones', text: 'El grupo se separó del Cártel del Golfo y, más tarde, sufrió divisiones. Es incorrecto describir ese proceso como un exterminio total: surgieron facciones y organizaciones sucesoras.' },
    ], people: [], sourceIds: ['bbc-zetas', 'insight-fragmentacion'],
  },
  {
    id: 'guerra-narco', title: '2006: el inicio de la “guerra contra el narco”', shortTitle: 'La estrategia de Calderón', year: 2006, date: 'Diciembre de 2006', location: 'Michoacán · posterior despliegue nacional', states: ['MX-MIC'], coordinates: [-102.35, 19.09], category: 'seguridad',
    summary: 'El Operativo Conjunto Michoacán marcó el arranque de una estrategia militarizada cuyas consecuencias siguen en el centro del debate nacional.', image: 'guadalajara', imageNote: guadalajaraNote,
    chapters: [
      { title: 'El despliegue inicial', text: 'Poco después de asumir la presidencia, Felipe Calderón ordenó el despliegue federal en Michoacán. La estrategia se extendió después a otras entidades del país.' },
      { title: 'Una política con costos humanos', text: 'El crecimiento de la violencia, las desapariciones y las denuncias de violaciones de derechos humanos obligan a estudiar la estrategia desde la experiencia de las comunidades, además de las cifras de capturas.' },
      { title: 'Evitar explicaciones únicas', text: 'La violencia contemporánea tiene raíces previas y múltiples causas. Una conexión cronológica con una política no demuestra por sí sola que esa política explique cada hecho violento posterior.' },
    ], people: ['calderon'], sourceIds: ['universal-calderon'],
  },
  {
    id: 'fragmentacion-zetas', title: 'Los Zetas: fragmentación, no desaparición', shortTitle: 'La fragmentación de Los Zetas', year: 2010, endYear: 2015, date: '2010–2015 · ruptura y fragmentación', location: 'Tamaulipas y noreste de México', states: ['MX-TAM', 'MX-NLE', 'MX-COA', 'MX-VER'], coordinates: [-98.3, 26.08], category: 'seguridad',
    summary: 'La ruptura con el Cártel del Golfo y las posteriores divisiones dieron lugar a facciones. La violencia no terminó con la captura de sus dirigentes.', image: 'tamaulipas', imageNote: 'Paisaje de Tamaulipas. Imagen de contexto, no un mapa de presencia ni un registro de hechos violentos.',
    chapters: [
      { title: 'Una organización que se divide', text: 'La separación respecto al Cártel del Golfo alrededor de 2010 abrió enfrentamientos y nuevas disputas. La pérdida de dirigentes y las rivalidades internas contribuyeron a divisiones posteriores.' },
      { title: 'Las organizaciones sucesoras', text: 'InSight Crime documenta facciones como el Cártel del Noreste y Zetas Vieja Escuela. Su existencia impide afirmar que Los Zetas y todas sus redes fueron exterminados.' },
      { title: 'La continuidad de los daños', text: 'La fragmentación puede cambiar los nombres sin resolver la extorsión o el desplazamiento. El mapa representa acontecimientos históricos, no ofrece un mapa actual de control territorial.' },
    ], people: [], sourceIds: ['insight-fragmentacion', 'bbc-zetas'],
  },
  {
    id: 'ayotzinapa', title: 'Ayotzinapa: 43 ausencias, una exigencia de verdad', shortTitle: 'La desaparición de los 43', year: 2014, date: '26–27 de septiembre de 2014', location: 'Iguala, Guerrero', states: ['MX-GRO'], coordinates: [-99.54, 18.34], category: 'sociedad',
    summary: 'Los ataques contra estudiantes normalistas y la desaparición de 43 de ellos desencadenaron una búsqueda de verdad y justicia que no se ha cerrado.', image: 'city', imageNote: cityNote,
    chapters: [
      { title: 'La noche de Iguala', text: 'Estudiantes de la normal rural de Ayotzinapa fueron atacados en Iguala. La desaparición de 43 jóvenes se convirtió en un caso emblemático de la crisis de derechos humanos.' },
      { title: 'El trabajo de las familias y el GIEI', text: 'Las familias, sus representantes y los expertos independientes cuestionaron la versión oficial inicial y documentaron inconsistencias, ocultamiento de información y obstáculos a la investigación.' },
      { title: 'Un caso abierto', text: 'La cobertura de Reuters de septiembre de 2024 documenta que las familias continuaban buscando respuestas. Este resumen no supone que se haya esclarecido el destino de todos los estudiantes ni que exista una resolución final.' },
    ], people: [], sourceIds: ['reuters-ayotzinapa', 'giei-ayotzinapa'],
  },
  {
    id: 'sismo-2017', title: '19S: cuando México volvió a encontrarse', shortTitle: 'El sismo del 19 de septiembre', year: 2017, date: '19 de septiembre de 2017', location: 'Puebla, Morelos y Ciudad de México', states: ['MX-PUE', 'MX-MOR', 'MX-CMX', 'MX-MEX'], coordinates: [-98.72, 18.4], category: 'desastres',
    summary: 'Un sismo de magnitud 7.1 golpeó el centro del país. Las brigadas ciudadanas y las redes de ayuda convivieron con rumores y desinformación.', image: 'city', imageNote: cityNote,
    chapters: [
      { title: 'Un sismo distinto al de 1985', text: 'El reporte del Servicio Sismológico Nacional sitúa el origen del movimiento en la región Puebla–Morelos. Aunque coincidió en fecha con el terremoto de 1985, se trató de un evento geológico distinto.' },
      { title: 'Rescate y reconstrucción', text: 'Brigadistas, personal de emergencias y vecinos participaron en las labores. El acceso a vivienda segura y la rendición de cuentas sobre edificios colapsados forman parte de la historia posterior.' },
      { title: 'La información también salva', text: 'Durante una emergencia, imágenes sin fecha y versiones no comprobadas pueden desviar ayuda. La nota periodística enlazada es un reporte de las primeras horas: su cifra del titular no es el balance final.' },
    ], people: [], sourceIds: ['ssn-sismo17', 'elpais-sismo17', 'animal-haarp'],
    claims: [{ title: '¿Una tecnología secreta puede provocar estos sismos?', status: 'Sin evidencia', explanation: 'No hay evidencia científica que atribuya estos grandes terremotos a HAARP. El Sabueso revisó esta narrativa recurrente en 2021 con especialistas de la UNAM. Esa verificación no es un reporte de las primeras horas del 19S de 2017.', sourceIds: ['animal-haarp', 'ssn-sismo17'] }],
  },
  {
    id: 'pandemia', title: 'La pandemia que cambió la vida cotidiana', shortTitle: 'La llegada de la COVID-19', year: 2020, date: '28 de febrero de 2020 · primer caso confirmado', location: 'Ciudad de México · impacto nacional', states: ['MX-CMX', 'MX-SIN'], coordinates: [-99.13, 19.43], category: 'desastres',
    summary: 'El primer caso confirmado abrió una emergencia que alteró la salud, el trabajo, la educación y las formas de acompañarnos en todo México.', image: 'city', imageNote: cityNote,
    chapters: [
      { title: 'El primer caso confirmado', text: 'El 28 de febrero de 2020 se anunció el primer caso confirmado en México. Esa fecha no indica necesariamente la primera infección ocurrida en el país, sino su confirmación pública.' },
      { title: 'Una crisis desigual', text: 'El cierre de actividades, la educación a distancia y la presión sobre los servicios de salud afectaron de manera distinta a hogares y trabajadores. La experiencia no puede resumirse solamente en conferencias y cifras.' },
      { title: 'Una historia todavía por documentar', text: 'Esta ficha inicial toma la noticia del primer caso como punto de entrada. Las cifras finales, la vacunación y las políticas sanitarias requieren un expediente de fuentes adicional antes de incorporarse en detalle.' },
    ], people: [], sourceIds: ['telemundo-covid'],
  },
  {
    id: 'mencho', title: 'Tapalpa, 2026: el operativo contra “El Mencho”', shortTitle: 'El operativo de Tapalpa', year: 2026, date: '22 de febrero de 2026', location: 'Tapalpa, Jalisco', states: ['MX-JAL'], coordinates: [-103.76, 19.95], category: 'seguridad',
    summary: 'La muerte de Nemesio Oseguera Cervantes en un operativo militar en Tapalpa provocó una ola de violencia y abrió preguntas sobre el futuro del CJNG.', image: 'guadalajara', imageNote: guadalajaraNote,
    chapters: [
      { title: 'Dónde ocurrió', text: 'Reuters y EL PAÍS sitúan el operativo del 22 de febrero de 2026 en Tapalpa, Jalisco. No ocurrió en la ciudad de Guadalajara, aunque las repercusiones alcanzaron esa ciudad y otras zonas.' },
      { title: 'La información de los primeros días', text: 'La cobertura del 23 de febrero recogió la muerte del líder del Cártel Jalisco Nueva Generación y una ola de bloqueos y ataques. Los detalles iniciales deben leerse con su fecha de publicación y atribución.' },
      { title: 'Lo que no puede darse por hecho', text: 'La muerte de un dirigente no demuestra la desaparición de una organización ni permite anticipar con certeza una sucesión. Este archivo no convierte escenarios de analistas en acontecimientos confirmados.' },
    ], people: ['mencho-persona'], sourceIds: ['reuters-mencho', 'elpais-mencho'],
  },
]

export const eventById = Object.fromEntries(events.map((event) => [event.id, event])) as Record<string, HistoricalEvent>
