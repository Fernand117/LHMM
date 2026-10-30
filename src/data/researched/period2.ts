import type { HistoricalEvent } from '../types'

// Period 2: the colonial vice-royalty, from the consolidation of New Spain
// to the crisis of 1808. Each story names the guide codes it replaces and the
// passages that were actually read. Unsupported codes are recorded in
// research/ledger.json instead of being turned into narrative.
export const period2: HistoricalEvent[] = [
  {
    id: 'p2-yanga', title: 'Yanga: resistencia cimarrona y un pueblo libre en 1631', shortTitle: 'Yanga y San Lorenzo de los Negros', year: 1609, endYear: 1631, date: '1609–1631',
    location: 'Montañas de Veracruz, San Lorenzo de los Negros', states: ['MX-VER'], coordinates: [-96.99, 18.86], category: 'sociedad', review: 'verificada',
    summary: 'Una comunidad de africanos y afrodescendientes escapados de la esclavitud resistió durante años en las montañas de Veracruz. En 1631 obtuvo el reconocimiento de un pueblo propio, San Lorenzo de los Negros.',
    chapters: [
      { title: 'La fuga y la montaña', text: 'Gaspar Yanga encabezó una comunidad cimarrona formada por personas africanas y afrodescendientes que habían escapado de las haciendas y minas. El terreno montañoso y el conocimiento de los caminos les permitieron sostener una resistencia prolongada frente a las autoridades coloniales.' },
      { title: 'Negociar desde una posición de fuerza', text: 'La Corona y el virrey no reconocieron la libertad por un gesto humanitario. Lo hicieron después de comprobar el costo militar y político de una guerra abierta. Las negociaciones de 1631 incluyeron el reconocimiento de un asentamiento y condiciones de autonomía limitada.' },
      { title: 'Un pueblo con límites coloniales', text: 'San Lorenzo de los Negros fue un espacio de libertad conquistado, pero no un territorio fuera del orden colonial. Sus habitantes siguieron sujetos a obligaciones, vigilancia y jerarquías. La historia de Yanga debe leerse como resistencia y negociación, no como una emancipación completa.' },
    ],
    people: ['yanga', 'rodrigo-pacheco'], sourceIds: ['cultura-yanga', 'inah-grandeza'],
    evidence: [
      { sourceId: 'cultura-yanga', supports: 'La resistencia cimarrona encabezada por Yanga y el reconocimiento de San Lorenzo de los Negros en 1631.' },
      { sourceId: 'inah-grandeza', locator: 'pp. 208–209', supports: 'La esclavitud africana, las castas y las jerarquías sociales novohispanas.' },
    ],
    documentCodes: ['P2-H01', 'P2-P02', 'P2-S01', 'P2-C01'],
  },
  {
    id: 'p2-inundaciones', title: '1629–1634: la ciudad que vivió bajo el agua', shortTitle: 'Las inundaciones de 1629', year: 1629, endYear: 1634, date: '1629–1634',
    location: 'Ciudad de México y cuenca del valle', states: ['MX-CMX', 'MX-MEX'], coordinates: [-99.13, 19.43], category: 'desastres', review: 'verificada',
    summary: 'Lluvias extremas y un sistema de desagüe insuficiente dejaron amplias zonas de la capital bajo el agua durante años. La emergencia obligó a discutir obras, alojamientos y el costo social de vivir en una cuenca cerrada.',
    chapters: [
      { title: 'Una cuenca con salida difícil', text: 'La Ciudad de México se construyó sobre lagos y humedales. Drenar el agua exigía obras costosas y mantenimiento constante. Las lluvias de 1629 desbordaron la capacidad existente y el agua permaneció en calles y casas mucho más tiempo que en una inundación ordinaria.' },
      { title: 'Gobernar la emergencia', text: 'Las autoridades recurrieron a obras de desagüe, alojamientos temporales y medidas de control sobre la población. La calamidad no afectó a todos por igual: quienes podían trasladarse o pagar un lugar seco lo hicieron; otros permanecieron en viviendas insalubres.' },
      { title: 'El desagüe como proyecto político', text: 'La inundación reforzó la idea de que el valle necesitaba una gran obra hidráulica. Esa empresa consumió recursos y generó conflictos entre la ciudad, los pueblos y la Corona. El riesgo no era solo natural: también era resultado de decisiones sobre dónde y cómo se construía.' },
    ],
    people: ['rodrigo-pacheco'], sourceIds: ['inah-grandeza'],
    evidence: [
      { sourceId: 'inah-grandeza', locator: 'pp. 225–226', supports: 'Las inundaciones de la capital, el problema del desagüe y las respuestas coloniales.' },
    ],
    documentCodes: ['P2-H02', 'P2-D03'],
  },
  {
    id: 'p2-palafox', title: 'Palafox: obispo, virrey interino y conflicto de poderes', shortTitle: 'Juan de Palafox y Nueva España', year: 1642, date: '1642',
    location: 'Puebla y Ciudad de México', states: ['MX-PUE', 'MX-CMX'], coordinates: [-98.2, 19.04], category: 'politica', review: 'verificada',
    summary: 'Juan de Palafox y Mendoza ocupó brevemente el gobierno virreinal y chocó con las órdenes religiosas. Su conflicto con los jesuitas muestra que la Iglesia novohispana no era un bloque único.',
    chapters: [
      { title: 'Un obispo en el gobierno', text: 'Palafox fue obispo de Puebla y, en 1642, virrey interino. Su llegada al gobierno coincidió con disputas sobre diezmos, doctrinas y jurisdicción entre el clero secular y las órdenes religiosas.' },
      { title: 'La disputa con los jesuitas', text: 'El obispo impulsó la secularización de doctrinas y cuestionó privilegios de la Compañía de Jesús. El conflicto no era solo teológico: involucraba rentas, control de parroquias y autoridad sobre la población indígena.' },
      { title: 'Un poder negociado', text: 'La Corona terminó interviniendo en la disputa y Palafox fue trasladado. El episodio demuestra que el gobierno colonial se construía mediante negociación entre monarquía, obispos, órdenes religiosas y élites locales.' },
    ],
    people: ['palafox'], sourceIds: ['inah-grandeza'],
    evidence: [
      { sourceId: 'inah-grandeza', locator: 'pp. 229, 232', supports: 'El gobierno interino de Palafox, la secularización de doctrinas y el conflicto con las órdenes religiosas.' },
    ],
    documentCodes: ['P2-P04'],
  },
  {
    id: 'p2-motin-1692', title: '1692: el motín del maíz y la crisis de abasto', shortTitle: 'El motín de 1692', year: 1692, date: 'junio de 1692',
    location: 'Ciudad de México', states: ['MX-CMX'], coordinates: [-99.13, 19.43], category: 'sociedad', review: 'verificada',
    summary: 'La escasez y el precio del maíz llevaron a una multitud a atacar el palacio y comercios de la capital. El motín reveló la fragilidad del abasto urbano y el miedo de las autoridades a la plebe.',
    chapters: [
      { title: 'El precio que no se podía pagar', text: 'El maíz era la base de la alimentación popular. Cuando el grano escaseó y su precio subió, amplios sectores de la ciudad quedaron sin acceso a la comida básica. La tensión se acumuló en un contexto de inundaciones, malas cosechas y especulación.' },
      { title: 'El asalto al palacio', text: 'Una multitud se concentró en el centro y atacó el palacio virreinal y establecimientos de comerciantes. Las autoridades respondieron con fuerza. El motín no fue una protesta organizada por un partido moderno: fue una acción colectiva de subsistencia con objetivos concretos.' },
      { title: 'Después del motín', text: 'El gobierno tomó medidas para asegurar el abasto y castigar a los responsables. También reforzó la vigilancia sobre la población urbana. La comida siguió siendo un asunto político: quien controlaba el grano controlaba una parte decisiva de la vida de la ciudad.' },
    ],
    people: ['conde-paredes'], sourceIds: ['inah-grandeza'],
    evidence: [
      { sourceId: 'inah-grandeza', locator: 'pp. 225–226, 230', supports: 'La crisis de abasto, el motín de 1692 y la respuesta del gobierno virreinal.' },
    ],
    documentCodes: ['P2-H05', 'P2-P06', 'P2-S07', 'P2-C07', 'P2-D07'],
  },
  {
    id: 'p2-esclavitud', title: 'Esclavitud africana y castas en la Nueva España', shortTitle: 'Esclavitud y castas', year: 1650, endYear: 1750, date: 'siglos XVII–XVIII',
    location: 'Ciudades, haciendas y minas de Nueva España', states: ['MX-CMX', 'MX-VER', 'MX-PUE'], coordinates: [-99.13, 19.43], category: 'sociedad', review: 'verificada',
    summary: 'La esclavitud africana sostuvo trabajo doméstico, minas, plantaciones y servicios urbanos. La sociedad de castas clasificó a las personas por origen y condición, pero las fronteras entre grupos fueron más porosas de lo que sugiere el esquema legal.',
    chapters: [
      { title: 'Una institución, muchos usos', text: 'Personas africanas y afrodescendientes fueron vendidas y trasladadas a Nueva España. Trabajaron en casas, obrajes, minas, haciendas y puertos. La esclavitud no fue un fenómeno marginal: formó parte de la economía y de la vida cotidiana colonial.' },
      { title: 'Castas y jerarquías', text: 'El orden colonial clasificaba a la población en categorías como español, indio, mestizo, mulato o negro. Esas etiquetas tenían consecuencias fiscales, legales y sociales, pero no describían comunidades cerradas. La movilidad, el matrimonio y la vida urbana desbordaron el esquema.' },
      { title: 'Resistencia y libertad', text: 'Las personas esclavizadas resistieron de muchas formas: fuga, negociación, litigios, redes de parentesco y formación de comunidades cimarronas. Yanga y San Lorenzo de los Negros son un caso conocido, no el único. La libertad se conquistó en los márgenes del orden colonial.' },
    ],
    people: ['yanga'], sourceIds: ['inah-grandeza'],
    evidence: [
      { sourceId: 'inah-grandeza', locator: 'pp. 208–209', supports: 'La esclavitud africana, las castas y la organización social novohispana.' },
    ],
    documentCodes: ['P2-S04'],
  },
  {
    id: 'p2-jesuitas', title: '1767: la expulsión de los jesuitas y el costo de una decisión imperial', shortTitle: 'La expulsión de los jesuitas', year: 1767, date: '1767',
    location: 'Nueva España', states: ['MX-CMX', 'MX-PUE', 'MX-OAX'], coordinates: [-99.13, 19.43], category: 'politica', review: 'verificada',
    summary: 'Carlos III ordenó expulsar a la Compañía de Jesús de sus dominios. En Nueva España la medida implicó despojos, traslados y protestas, y dejó vacíos en educación, misiones y vida intelectual.',
    chapters: [
      { title: 'Una orden que venía de Madrid', text: 'La expulsión respondió a conflictos entre la Corona y la Compañía de Jesús, así como a la voluntad de afirmar el control regio sobre la Iglesia. La orden llegó a Nueva España en 1767 y se ejecutó con rapidez.' },
      { title: 'Bienes, colegios y misiones', text: 'Los jesuitas administraban colegios, misiones y propiedades. La expulsión implicó inventarios, confiscaciones y la salida de religiosos hacia Europa. Las instituciones educativas y misionales resintieron la pérdida de personal y recursos.' },
      { title: 'Resistencia y memoria', text: 'Hubo protestas y muestras de descontento, aunque no una rebelión general. La medida fue recordada como ejemplo del poder de la monarquía borbónica y de la vulnerabilidad de las corporaciones religiosas frente al reformismo imperial.' },
    ],
    people: ['carlos-iii'], sourceIds: ['inah-grandeza'],
    evidence: [
      { sourceId: 'inah-grandeza', locator: 'pp. 230, 191', supports: 'La expulsión de los jesuitas, la confiscación de bienes y el impacto en misiones y educación.' },
    ],
    documentCodes: ['P2-H07', 'P2-S09'],
  },
  {
    id: 'p2-borbon', title: 'Reformas borbónicas: visitas, intendentes y nuevo control imperial', shortTitle: 'Las reformas borbónicas', year: 1765, endYear: 1786, date: '1765–1786',
    location: 'Nueva España', states: ['MX-CMX'], coordinates: [-99.13, 19.43], category: 'politica', review: 'verificada',
    summary: 'La visita de José de Gálvez y la Ordenanza de Intendentes de 1786 buscaron aumentar la recaudación y someter a un control más directo a las élites locales. Las reformas reorganizaron el territorio y multiplicaron los conflictos.',
    chapters: [
      { title: 'La visita de Gálvez', text: 'José de Gálvez llegó como visitador con amplios poderes para revisar la administración, la fiscalidad y el comercio. Su actuación formó parte de un proyecto más amplio de la Corona por centralizar decisiones y aumentar ingresos.' },
      { title: 'Intendentes y provincias', text: 'La Ordenanza de Intendentes de 1786 creó una nueva división administrativa y fortaleció a funcionarios dependientes de la monarquía. Los intendentes concentraron funciones de justicia, policía, hacienda y guerra en sus jurisdicciones.' },
      { title: 'Reformar y conflictuar', text: 'Las reformas chocaron con cabildos, virreyes, comerciantes y corporaciones que defendían sus privilegios. También aumentaron la presión fiscal sobre pueblos y productores. El reformismo borbónico modernizó la administración, pero generó tensiones que reaparecieron en la crisis de 1808.' },
    ],
    people: ['galvez', 'carlos-iii'], sourceIds: ['inah-grandeza'],
    evidence: [
      { sourceId: 'inah-grandeza', locator: 'p. 235', supports: 'La visita de Gálvez, la Ordenanza de Intendentes de 1786 y la reorganización administrativa borbónica.' },
    ],
    documentCodes: ['P2-P08', 'P2-P09'],
  },
  {
    id: 'p2-iturrigaray', title: '1808: el golpe contra Iturrigaray y el miedo a la autonomía', shortTitle: 'El golpe de 1808', year: 1808, date: '15–16 de septiembre de 1808',
    location: 'Ciudad de México', states: ['MX-CMX'], coordinates: [-99.13, 19.43], category: 'politica', review: 'verificada',
    summary: 'La invasión napoleónica de España abrió una crisis de legitimidad. El virrey Iturrigaray y el cabildo de México exploraron formas de gobierno autónomo; comerciantes peninsulares respondieron con un golpe.',
    chapters: [
      { title: 'Una monarquía sin rey', text: 'En 1808 Napoleón obligó a abdicar a Carlos IV y Fernando VII. En Nueva España, la noticia planteó una pregunta decisiva: ¿quién gobernaba mientras el rey estaba ausente o cautivo? El virrey y el cabildo buscaron fórmulas para conservar el gobierno en manos locales.' },
      { title: 'El cabildo y la representación', text: 'Francisco Primo de Verdad y otros juristas del cabildo defendieron que la soberanía residía en el pueblo y que las autoridades debían convocar una representación novohispana. No proponían todavía la independencia, pero sí un gobierno con mayor autonomía.' },
      { title: 'El golpe de los comerciantes', text: 'Gabriel de Yermo y un grupo de peninsulares, con apoyo de sectores militares, detuvieron a Iturrigaray y a los principales promotores del proyecto. La acción impidió la autonomía y mostró que las élites novohispanas estaban divididas. La crisis de 1808 fue el preludio de la insurgencia de 1810.' },
    ],
    people: ['iturrigaray', 'yermo', 'primo-verdad'], sourceIds: ['inah-grandeza'],
    evidence: [
      { sourceId: 'inah-grandeza', locator: 'pp. 240–242', supports: 'La crisis monárquica de 1808, el proyecto del cabildo y el golpe contra Iturrigaray.' },
    ],
    documentCodes: ['P2-H10', 'P2-P10'],
  },
  {
    id: 'p2-protomedicato', title: 'El Protomedicato novohispano: regular la medicina en el imperio', shortTitle: 'El Protomedicato', year: 1646, date: '1646 · con una fecha en disputa',
    location: 'Ciudad de México', states: ['MX-CMX'], coordinates: [-99.13, 19.43], category: 'salud', review: 'corregida',
    summary: 'El Tribunal del Protomedicato examinaba y autorizaba a médicos, cirujanos, boticarios y parteras. Su establecimiento formal se fecha en 1646 en la historiografía sanitaria, aunque algunas instituciones citan 1628.',
    chapters: [
      { title: 'Quién podía curar', text: 'El Protomedicato regulaba el ejercicio de la medicina y la venta de medicamentos. Otorgaba licencias, examinaba aspirantes y perseguía prácticas consideradas ilegales. Su autoridad no eliminó la medicina indígena ni la atención doméstica, pero intentó ordenarlas dentro de una jerarquía profesional.' },
      { title: 'Una fecha que debe explicarse', text: 'La historia de la institución distingue entre disposiciones previas y la organización formal del tribunal. La fuente sanitaria consultada fecha el decreto real de creación en 1646; otras páginas institucionales mencionan 1628. Esta ficha adopta 1646 y señala la discrepancia en lugar de ocultarla.' },
      { title: 'Medicina, poder y exclusión', text: 'La regulación profesional benefició a quienes tenían acceso a formación y redes urbanas. Curanderos, parteras y sanadores populares siguieron siendo centrales para la mayoría de la población. La historia de la salud colonial debe incluir tanto las normas como las prácticas que escapaban a ellas.' },
    ],
    people: [], sourceIds: ['salud-constitucion'],
    evidence: [
      { sourceId: 'salud-constitucion', locator: 'p. 25', supports: 'El decreto real de 1646 y la organización del Protomedicato novohispano.' },
    ],
    editorialNotes: ['La fecha de 1628 aparece en algunas páginas institucionales; la fuente sanitaria consultada sostiene 1646. Se explican ambas porque designan momentos distintos de la institucionalización.'],
    documentCodes: ['P2-M02'],
  },
  {
    id: 'p2-balmis', title: '1804: la expedición Balmis y la vacuna contra la viruela', shortTitle: 'La expedición Balmis', year: 1804, date: '1804',
    location: 'Nueva España y ruta imperial', states: ['MX-CMX', 'MX-VER'], coordinates: [-99.13, 19.43], category: 'salud', review: 'verificada',
    summary: 'La expedición de Francisco Javier Balmis llevó la vacuna antivariólica a América y Filipinas. En Nueva España la campaña se apoyó en niños, familias y autoridades locales para conservar y distribuir el fluido vacunal.',
    chapters: [
      { title: 'Una tecnología frágil', text: 'La vacuna requería conservar el fluido y trasladarlo entre personas. La expedición utilizó a niños para mantener la cadena de transmisión, una práctica que hoy plantea preguntas éticas y que debe explicarse con precisión histórica.' },
      { title: 'Vacunar en un territorio enorme', text: 'La campaña no se limitó a la capital. Se organizaron juntas, se capacitó a personal local y se enviaron instrucciones a provincias. La vacunación enfrentó desconfianza, falta de recursos y dificultades de transporte.' },
      { title: 'El límite de una campaña', text: 'La expedición fue un esfuerzo sanitario notable, pero no eliminó la viruela de inmediato. La enfermedad reapareció en brotes posteriores. La vacuna fue una herramienta poderosa, no una solución automática.' },
    ],
    people: ['balmis'], sourceIds: ['salud-constitucion', 'salud-vacunas'],
    evidence: [
      { sourceId: 'salud-constitucion', locator: 'pp. 44–46', supports: 'La llegada de la vacuna en 1804, la expedición de Balmis y las prácticas de conservación del fluido vacunal.' },
      { sourceId: 'salud-vacunas', supports: 'La introducción de la vacuna antivariólica en México y su lugar en la historia de la vacunación.' },
    ],
    documentCodes: ['P2-M09'],
  },
  {
    id: 'p2-epidemias', title: 'Epidemias coloniales: lo que el registro permite afirmar', shortTitle: 'Epidemias del Virreinato', year: 1615, endYear: 1780, date: 'siglos XVII–XVIII',
    location: 'Nueva España', states: ['MX-CMX', 'MX-PUE', 'MX-OAX'], coordinates: [-99.13, 19.43], category: 'salud', review: 'contextual',
    summary: 'La Nueva España sufrió brotes repetidos de viruela, sarampión, tifo y otras fiebres. Las fechas y cifras de muchos episodios son difíciles de reconstruir; esta historia presenta el marco documentado y evita convertir cada mención en una estadística cierta.',
    chapters: [
      { title: 'Enfermedad y desigualdad', text: 'Las epidemias golpearon con más fuerza a pueblos, barrios y trabajadores que carecían de alimentación adecuada, vivienda y acceso a atención. La enfermedad se combinó con hambre, desplazamiento y condiciones de trabajo.' },
      { title: 'Registros incompletos', text: 'Los archivos coloniales conservan bandos, informes y registros parroquiales, pero no forman una serie estadística continua. Las cifras de muertos varían según la fuente y el territorio. Por eso esta ficha no atribuye una fecha exacta a cada brote ni suma víctimas como si fueran datos homogéneos.' },
      { title: 'Respuestas locales', text: 'Autoridades, órdenes religiosas, médicos y comunidades respondieron con cuarentenas, hospitales, procesiones y medidas de asistencia. La salud pública moderna aún no existía; la gestión de la enfermedad dependía de corporaciones y recursos locales.' },
    ],
    people: [], sourceIds: ['salud-constitucion', 'inah-grandeza'],
    evidence: [
      { sourceId: 'salud-constitucion', locator: 'pp. 24–26, 44–57', supports: 'Marco general de las epidemias y la organización sanitaria novohispana; no confirma por sí solo cada fecha de brote.' },
      { sourceId: 'inah-grandeza', locator: 'pp. 208–213', supports: 'Condiciones de vida, trabajo y jerarquías sociales que incidían en la vulnerabilidad ante la enfermedad.' },
    ],
    editorialNotes: ['Las fichas del documento asignaban fechas precisas a varios brotes (1615–1616, 1633–1634, 1667–1668, 1714, 1736–1739, 1761–1764, 1779–1780). No todas pudieron confirmarse en las fuentes leídas; se conservan en el registro interno como materia de investigación, no como datos publicados.'],
    documentCodes: ['P2-M01', 'P2-M03', 'P2-M04', 'P2-M05', 'P2-M06', 'P2-M07', 'P2-M08', 'P2-M10', 'P2-D02', 'P2-D05', 'P2-D08'],
  },
  {
    id: 'p2-crisis-agricola', title: 'Hambre y crisis agrícola entre el Virreinato y la Independencia', shortTitle: 'La crisis de subsistencias', year: 1785, endYear: 1811, date: '1785–1811',
    location: 'Altiplano central y Bajío', states: ['MX-CMX', 'MX-GUA', 'MX-MEX'], coordinates: [-100.5, 20.5], category: 'desastres', review: 'contextual',
    summary: 'Malas cosechas, heladas y presión fiscal agravaron la escasez de alimentos en el ocaso colonial. La crisis de 1808–1811 está documentada; la etiqueta “Año del hambre” para 1785–1786 requiere todavía una verificación precisa.',
    chapters: [
      { title: 'El alimento como problema político', text: 'El maíz era la base de la dieta popular. Una cosecha mala podía elevar su precio y dejar sin comida a jornaleros y familias urbanas. Las autoridades intentaron regular el abasto, pero sus recursos eran limitados.' },
      { title: 'La crisis de 1808–1811', text: 'La guerra en España, el desorden fiscal y las malas cosechas agravaron la escasez en Nueva España. La carestía se combinó con el inicio de la insurgencia y con desplazamientos de población. La fuente consultada documenta ese deterioro.' },
      { title: 'Una fecha pendiente', text: 'La ficha original llamaba “Año del hambre” a 1785–1786. Esa etiqueta es conocida en la historiografía, pero no se localizó en las fuentes leídas una confirmación suficiente para presentarla como un hecho cerrado. Se mantiene como línea de investigación y no como dato confirmado.' },
    ],
    people: [], sourceIds: ['inah-grandeza'],
    evidence: [
      { sourceId: 'inah-grandeza', locator: 'p. 236', supports: 'La crisis agrícola y de subsistencias de 1808–1811 en el contexto del ocaso colonial.' },
    ],
    editorialNotes: ['No se encontró en las fuentes leídas una confirmación específica del “Año del hambre” de 1785–1786. La historia distingue ese caso de la crisis documentada de 1808–1811.'],
    documentCodes: ['P2-H08', 'P2-D09'],
  },
  {
    id: 'p2-educacion-censo', title: 'Educación y censo: el reformismo borbónico en la vida cotidiana', shortTitle: 'Escuelas y censo de Revillagigedo', year: 1770, endYear: 1790, date: '1770–1790',
    location: 'Ciudad de México y provincias', states: ['MX-CMX'], coordinates: [-99.13, 19.43], category: 'sociedad', review: 'verificada',
    summary: 'Las reformas borbónicas no solo reorganizaron impuestos y provincias. También impulsaron escuelas, instrucción y registros de población. El censo de Revillagigedo buscó hacer visible un territorio que el imperio quería gobernar mejor.',
    chapters: [
      { title: 'Enseñar para ordenar', text: 'La Corona y las autoridades locales promovieron escuelas de primeras letras y formas de instrucción vinculadas a la doctrina cristiana y a la formación de súbditos útiles. El acceso siguió siendo desigual: dependía de la ciudad, la condición social y los recursos de las familias.' },
      { title: 'Contar para gobernar', text: 'El censo impulsado por el virrey Revillagigedo a finales del siglo XVIII buscó registrar población, oficios y condiciones de vida. Los censos no eran neutrales: clasificaban a las personas y producían información para cobrar tributos y organizar el gobierno.' },
      { title: 'Reforma y exclusión', text: 'La expansión de escuelas y registros convivió con jerarquías de casta, género y riqueza. Las mujeres, los pueblos indígenas y los sectores populares tuvieron acceso limitado a la instrucción letrada. El reformismo ilustrado mejoró la administración, pero no eliminó la desigualdad.' },
    ],
    people: ['revillagigedo'], sourceIds: ['inah-grandeza'],
    evidence: [
      { sourceId: 'inah-grandeza', locator: 'pp. 136, 224', supports: 'Las escuelas de primeras letras, la instrucción y el censo de Revillagigedo en el marco del reformismo borbónico.' },
    ],
    documentCodes: ['P2-S08', 'P2-S10'],
  },
]
