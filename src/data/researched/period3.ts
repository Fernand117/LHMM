import type { HistoricalEvent } from '../types'

// Period 3: insurgency, independence and the first federal republic (1810–1854).
// Each story names the guide codes it replaces and the passages that were read.
// Codes without enough evidence are recorded in research/ledger.json; they are
// not turned into narrative merely to keep the old numbering complete.
export const period3: HistoricalEvent[] = [
  {
    id: 'p3-dolores', title: '1810: la conspiración de Querétaro y el levantamiento de Dolores', shortTitle: 'El levantamiento de Dolores', year: 1810, date: '16 de septiembre de 1810',
    location: 'Dolores, Guanajuato', states: ['MX-GUA'], coordinates: [-100.93, 21.16], category: 'politica', review: 'verificada',
    summary: 'Una red de conspiradores en Querétaro, San Miguel y Dolores fue descubierta en septiembre de 1810. Miguel Hidalgo adelantó el levantamiento armado y convirtió una conjura de notables en una movilización popular de alcance imprevisto.',
    chapters: [
      { title: 'Una conspiración de ciudades', text: 'La conjura reunió a criollos, militares y clérigos en Querétaro, San Miguel el Grande y Dolores. No era un plan independentista único ni una organización moderna: era una red de relaciones personales y locales. La denuncia del capitán Juan Arias el 10 de septiembre y las del 13 de septiembre precipitaron las detenciones.' },
      { title: 'La madrugada que cambió el calendario', text: 'Josefa Ortiz de Domínguez avisó a Ignacio Pérez que la conjura había sido descubierta. Allende interceptó su orden de aprehensión y se dirigió a Dolores. El 15 de septiembre Hidalgo se decidió por la lucha armada; el 16 se inició el levantamiento. La fecha quedó como el comienzo simbólico de la Independencia, aunque el proceso venía de 1808.' },
      { title: 'Un movimiento popular y violento', text: 'La insurgencia creció con campesinos, mineros, indígenas y sectores urbanos. Esa fuerza desbordó a sus promotores y también produjo matanzas, saqueos y exacciones. La historia no debe convertir el levantamiento en una gesta sin víctimas: la violencia de ambos bandos marcó la guerra.' },
    ],
    people: ['hidalgo', 'allende', 'josefa-ortiz', 'riano'], sourceIds: ['inehrm-independencia', 'inah-grandeza'],
    evidence: [
      { sourceId: 'inehrm-independencia', supports: 'Las denuncias de la conjura, el aviso de Josefa Ortiz, la decisión de Hidalgo el 15 de septiembre y el levantamiento del 16.' },
      { sourceId: 'inah-grandeza', locator: 'pp. 28–30', supports: 'El carácter indígena, campesino y popular del levantamiento y su programa posterior.' },
    ],
    documentCodes: ['P3-H01', 'P3-P01', 'P3-S01', 'P3-D01', 'P3-C01'],
  },
  {
    id: 'p3-alhondiga', title: 'Guanajuato, 1810: la toma de la Alhóndiga de Granaditas', shortTitle: 'La Alhóndiga de Granaditas', year: 1810, date: '28 de septiembre de 1810',
    location: 'Guanajuato', states: ['MX-GUA'], coordinates: [-101.26, 21.02], category: 'politica', review: 'verificada',
    summary: 'El intendente Riaño reunió a españoles y criollos en la Alhóndiga, el granero fortificado de Guanajuato. Las fuerzas insurgentes tomaron el edificio tras un asedio y mataron a quienes se habían refugiado en él.',
    chapters: [
      { title: 'Un granero convertido en fortaleza', text: 'Ante el avance insurgente, Juan Antonio Riaño ordenó refugiarse en la Alhóndiga de Granaditas. El edificio ofrecía muros gruesos y una sola entrada, pero no estaba diseñado para resistir un ejército. Dentro se concentraron autoridades, comerciantes y familias, junto con bienes y alimentos.' },
      { title: 'El asalto y la matanza', text: 'Hidalgo intimó la rendición y Riaño se negó. El 28 de septiembre las tropas insurgentes, mandadas por José Mariano Abasolo y otros jefes, tomaron la ciudad y asaltaron el edificio. La fuente del INAH registra el asesinato de 150 europeos y americanos que se habían fortificado allí. Fue una victoria militar y una matanza.' },
      { title: 'El Pípila: memoria y verificación', text: 'La figura del Pípila, el barretero que habría incendiado la puerta, pertenece a la memoria popular y a la iconografía posterior. No se localizó en las fuentes leídas un registro contemporáneo que permita confirmar su nombre y su acción. La historia puede conservar el relato como tradición, siempre que no lo presente como hecho comprobado.' },
    ],
    people: ['hidalgo', 'allende', 'riano'], sourceIds: ['inehrm-independencia', 'inah-grandeza'],
    evidence: [
      { sourceId: 'inehrm-independencia', supports: 'La negativa de Riaño, el asedio y la toma de Guanajuato el 28 de septiembre de 1810.' },
      { sourceId: 'inah-grandeza', locator: 'p. 247', supports: 'El asesinato de 150 europeos y americanos refugiados en la Alhóndiga de Granaditas.' },
    ],
    editorialNotes: ['La tradición del Pípila se conserva como memoria, no como dato documentado en las fuentes consultadas.'],
    documentCodes: ['P3-H02'],
  },
  {
    id: 'p3-cadiz', title: '1812: la Constitución de Cádiz llega a Nueva España', shortTitle: 'La Constitución de Cádiz', year: 1812, date: '19 de marzo de 1812',
    location: 'Cádiz y Nueva España', states: ['MX-CMX', 'MX-VER'], coordinates: [-99.13, 19.43], category: 'politica', review: 'verificada',
    summary: 'La Constitución de Cádiz estableció derechos, ayuntamientos electos y representación americana. En Nueva España se juró en 1812, se aplicó de forma desigual y fue abolida cuando Fernando VII recuperó el trono.',
    chapters: [
      { title: 'Una constitución para ambos mundos', text: 'Las Cortes de Cádiz promulgaron la Constitución el 19 de marzo de 1812. El texto definía una monarquía constitucional, reconocía la igualdad entre españoles y americanos y creaba ayuntamientos y diputaciones provinciales. No concedía la independencia, pero abría espacios de participación.' },
      { title: 'El juramento y sus límites', text: 'El 30 de septiembre de 1812 las autoridades de México juraron la Constitución. Se convocaron elecciones y se instalaron ayuntamientos constitucionales. La aplicación chocó con la guerra, con los privilegios corporativos y con la desconfianza de las élites. Para los insurgentes, Cádiz era a la vez un lenguaje de derechos y una oferta insuficiente.' },
      { title: 'La vuelta atrás', text: 'Fernando VII regresó en 1814 y abolió la Constitución. En Nueva España se disolvieron los ayuntamientos constitucionales y se restableció la Inquisición. La experiencia dejó una idea duradera: la soberanía podía residir en la nación y no solo en el rey.' },
    ],
    people: [], sourceIds: ['inehrm-independencia'],
    evidence: [
      { sourceId: 'inehrm-independencia', supports: 'La promulgación el 19 de marzo de 1812, el juramento en México el 30 de septiembre y la abolición de 1814.' },
    ],
    documentCodes: ['P3-P02'],
  },
  {
    id: 'p3-hidalgo', title: '1811: la captura y ejecución de Hidalgo', shortTitle: 'La caída de Hidalgo', year: 1811, date: '21 de marzo – 30 de julio de 1811',
    location: 'Norias de Baján y Chihuahua', states: ['MX-COA', 'MX-CHH'], coordinates: [-106.08, 28.63], category: 'politica', review: 'verificada',
    summary: 'Tras la derrota de Puente de Calderón, los principales dirigentes insurgentes intentaron llegar a Estados Unidos. Fueron capturados en las Norias de Baján y ejecutados meses después en Chihuahua.',
    chapters: [
      { title: 'La retirada hacia el norte', text: 'Después de la derrota de Puente de Calderón en enero de 1811, Hidalgo y Allende perdieron el control de la ruta hacia el Bajío. Decidieron marchar al norte y buscar apoyo en Estados Unidos. La columna llevaba tropas, familias y una parte del gobierno insurgente.' },
      { title: 'La traición de Baján', text: 'El 21 de marzo de 1811, Ignacio Elizondo detuvo a Hidalgo, Allende, Jiménez, Abasolo y Aldama en las Norias de Baján. Los prisioneros fueron conducidos a Monclova y Chihuahua. Elizondo había sido realista y su cambio de bando formó parte de las fracturas internas de la insurgencia.' },
      { title: 'El castigo ejemplar', text: 'Hidalgo fue degradado, juzgado y fusilado el 30 de julio de 1811. Su cabeza, junto con las de Allende, Aldama y Jiménez, fue exhibida en la Alhóndiga de Granaditas. La ejecución pretendía cerrar el ciclo insurgente; en cambio, contribuyó a convertirlo en símbolo.' },
    ],
    people: ['hidalgo', 'allende', 'elizondo'], sourceIds: ['inehrm-independencia'],
    evidence: [
      { sourceId: 'inehrm-independencia', supports: 'La captura en las Norias de Baján el 21 de marzo de 1811 y el fusilamiento de Hidalgo el 30 de julio.' },
    ],
    documentCodes: ['P3-H03'],
  },
  {
    id: 'p3-cuautla', title: 'Cuautla, 1812: un sitio, una epidemia y una salida nocturna', shortTitle: 'El sitio de Cuautla', year: 1812, date: 'diciembre de 1811 – 2 de mayo de 1812',
    location: 'Cuautla, Morelos', states: ['MX-MOR'], coordinates: [-98.95, 18.81], category: 'desastres', review: 'verificada',
    summary: 'Morelos fortificó Cuautla y resistió el cerco de Calleja durante meses. El hambre, el hacinamiento y la enfermedad mataron a más personas que el combate; la salida nocturna del 2 de mayo permitió sobrevivir a parte de la fuerza insurgente.',
    chapters: [
      { title: 'Una plaza fortificada', text: 'Morelos entró en Cuautla el 25 de diciembre de 1811 y convirtió la villa en una plaza defensiva. Calleja acampó frente a ella el 17 de febrero de 1812. El INAH calcula que la defendían unos 12 000 hombres, de los cuales solo 2 500 tenían fusil. Los conventos de Santo Domingo y San Diego servían de ciudadela.' },
      { title: 'La guerra contra los víveres', text: 'Los realistas no lograron tomar la plaza por asalto y optaron por el cerco. Los insurgentes impedían el abastecimiento y hostigaban a los sitiadores, pero dentro de Cuautla faltaban comida, agua y medicinas. El hacinamiento y la insalubridad provocaron una epidemia de “fiebres” que se extendió después por el virreinato.' },
      { title: 'La fuga y la memoria', text: 'En la madrugada del 2 de mayo de 1812, Morelos rompió el cerco y se dirigió a Ocuituco. La operación fue posible por un cambio en la situación política y por la disciplina de la tropa. La resistencia de Cuautla se convirtió en símbolo, pero su costo humano fue enorme y debe contarse.' },
    ],
    people: ['morelos', 'calleja'], sourceIds: ['inehrm-independencia', 'inah-grandeza', 'unam-fiebres-1813'],
    evidence: [
      { sourceId: 'inehrm-independencia', supports: 'La entrada de Morelos el 25 de diciembre de 1811, el cerco de Calleja desde el 17 de febrero y la ruptura del sitio el 2 de mayo de 1812.' },
      { sourceId: 'inah-grandeza', locator: 'pp. 249–250', supports: 'La fortificación de Cuautla, la composición de la fuerza y la salida nocturna.' },
      { sourceId: 'unam-fiebres-1813', supports: 'El origen de las “fiebres misteriosas” de 1813 en las condiciones del sitio de Cuautla.' },
    ],
    documentCodes: ['P3-H04', 'P3-S03', 'P3-C03', 'P3-D02', 'P3-M01'],
  },
  {
    id: 'p3-chilpancingo', title: '1813: Chilpancingo y los Sentimientos de la Nación', shortTitle: 'El Congreso de Chilpancingo', year: 1813, date: '14 de septiembre de 1813',
    location: 'Chilpancingo, Guerrero', states: ['MX-GRO'], coordinates: [-99.5, 17.55], category: 'politica', review: 'verificada',
    summary: 'Morelos convocó un congreso en Chilpancingo para dar un gobierno y un programa a la insurgencia. Los Sentimientos de la Nación proclamaron la independencia, la igualdad y la soberanía popular, aunque su aplicación quedó limitada por la guerra.',
    chapters: [
      { title: 'La necesidad de un gobierno', text: 'La insurgencia había crecido sin una autoridad central estable. Morelos publicó el 28 de junio de 1813 la convocatoria a un congreso en Chilpancingo. El 14 de septiembre se inauguró la asamblea y Juan Nepomuceno Rosáins dio lectura a los Sentimientos de la Nación.' },
      { title: 'Un programa político', text: 'El documento declaraba la independencia de América, la soberanía del pueblo, la igualdad ante la ley y la abolición de la esclavitud y de las castas. También defendía la religión católica y proponía moderar la opulencia y la indigencia. Era un programa radical para su época, no una constitución completa.' },
      { title: 'Las tensiones del congreso', text: 'El congreso nombró a Morelos generalísimo y le encargó el poder ejecutivo, pero pronto surgieron conflictos entre los jefes insurgentes. La unidad militar y la política no siempre coincidieron. La experiencia de Chilpancingo muestra que la independencia también fue una disputa sobre quién debía gobernar.' },
    ],
    people: ['morelos', 'guerrero'], sourceIds: ['inehrm-independencia', 'inah-grandeza'],
    evidence: [
      { sourceId: 'inehrm-independencia', supports: 'La convocatoria del 28 de junio, la inauguración del 14 de septiembre y la lectura de los Sentimientos de la Nación.' },
      { sourceId: 'inah-grandeza', locator: 'pp. 28–30', supports: 'El carácter programático de los Sentimientos de la Nación y su lugar en el levantamiento popular.' },
    ],
    documentCodes: ['P3-H05', 'P3-P03', 'P3-S04', 'P3-D03', 'P3-M02'],
  },
  {
    id: 'p3-apatzingan', title: '1814: la Constitución de Apatzingán', shortTitle: 'La Constitución de Apatzingán', year: 1814, date: '22 de octubre de 1814',
    location: 'Apatzingán, Michoacán', states: ['MX-MIC'], coordinates: [-102.36, 19.09], category: 'politica', review: 'verificada',
    summary: 'El congreso insurgente promulgó en Apatzingán un decreto constitucional que organizaba una república y declaraba la independencia. El texto nunca pudo aplicarse en todo el territorio, pero fijó un lenguaje de derechos y soberanía.',
    chapters: [
      { title: 'Una constitución en movimiento', text: 'El congreso insurgente, perseguido por las fuerzas realistas, se trasladó a Apatzingán. El 22 de octubre de 1814 promulgó el Decreto constitucional para la libertad de la América mexicana. El texto establecía una república representativa y dividía los poderes.' },
      { title: 'Derechos y religión', text: 'La constitución reconocía la soberanía popular, la igualdad ante la ley y derechos como la seguridad y la propiedad. Al mismo tiempo, mantenía la religión católica como oficial y no resolvía la situación de la esclavitud ni de las castas con la misma claridad que los Sentimientos de la Nación.' },
      { title: 'El abismo entre el texto y el territorio', text: 'La constitución no pudo aplicarse de forma estable porque el congreso y el ejército vivían en retirada. Su importancia es política: demostró que la insurgencia podía imaginar un Estado. La distancia entre el texto y la práctica es parte de su historia.' },
    ],
    people: ['morelos'], sourceIds: ['inehrm-independencia', 'inah-grandeza'],
    evidence: [
      { sourceId: 'inehrm-independencia', supports: 'La promulgación del decreto constitucional en Apatzingán el 22 de octubre de 1814.' },
      { sourceId: 'inah-grandeza', locator: 'pp. 28–30', supports: 'El proyecto político insurgente y su continuidad hasta la república federal.' },
    ],
    documentCodes: ['P3-P04'],
  },
  {
    id: 'p3-morelos', title: '1815: la captura y ejecución de Morelos', shortTitle: 'La muerte de Morelos', year: 1815, date: '22 de diciembre de 1815',
    location: 'San Cristóbal Ecatepec, Estado de México', states: ['MX-MEX'], coordinates: [-99.05, 19.6], category: 'politica', review: 'verificada',
    summary: 'Morelos fue capturado en 1815 y fusilado en San Cristóbal Ecatepec. Su muerte no terminó la insurgencia: Vicente Guerrero y otros jefes mantuvieron la guerra en el sur.',
    chapters: [
      { title: 'El declive militar', text: 'Después de 1813, la insurgencia sufrió derrotas y divisiones. Morelos fue capturado en noviembre de 1815 y conducido a la Ciudad de México. El virrey Calleja ordenó su proceso y su ejecución.' },
      { title: 'El fusilamiento', text: 'El 22 de diciembre de 1815 Morelos fue fusilado en San Cristóbal Ecatepec. Antes de morir se retractó públicamente, un acto que debe leerse en el contexto de la presión religiosa y política. Su cuerpo fue sepultado en la parroquia del lugar.' },
      { title: 'La guerra que continuó', text: 'La muerte de Morelos dejó a la insurgencia sin su principal dirigente, pero no la extinguió. Vicente Guerrero, Guadalupe Victoria y otras partidas sostuvieron una guerra de guerrillas. Esa resistencia obligó a las élites a negociar la independencia en 1821.' },
    ],
    people: ['morelos', 'calleja', 'guerrero', 'victoria'], sourceIds: ['inehrm-independencia', 'inah-grandeza'],
    evidence: [
      { sourceId: 'inehrm-independencia', supports: 'La sentencia del 20 de diciembre de 1815 y el fusilamiento de Morelos el 22 de diciembre en San Cristóbal Ecatepec.' },
      { sourceId: 'inah-grandeza', locator: 'p. 30', supports: 'La continuidad de la insurgencia bajo Vicente Guerrero después de la muerte de Morelos.' },
    ],
    documentCodes: ['P3-H06'],
  },
  {
    id: 'p3-iguala', title: '1821: el Plan de Iguala y la consumación de la Independencia', shortTitle: 'Iguala y la consumación', year: 1821, date: '24 de febrero – 27 de septiembre de 1821',
    location: 'Iguala, Guerrero y Ciudad de México', states: ['MX-GRO', 'MX-CMX'], coordinates: [-99.54, 18.35], category: 'politica', review: 'corregida',
    summary: 'Iturbide y Guerrero acordaron un plan que declaraba la independencia y garantizaba religión, unión y monarquía constitucional. El Ejército Trigarante entró en la capital el 27 de septiembre de 1821.',
    chapters: [
      { title: 'Un pacto entre antiguos enemigos', text: 'Agustín de Iturbide, militar realista, se reunió con Vicente Guerrero en Acatempan. El 24 de febrero de 1821 firmó el Plan de Iguala y lo envió al virrey Apodaca; el 1 de marzo lo dio a conocer a sus tropas. El plan proponía una monarquía constitucional, la religión católica y la unión de todos los grupos.' },
      { title: 'Las Tres Garantías', text: 'El Ejército Trigarante adoptó como bandera los colores de religión, independencia y unión. El plan no abolía la esclavitud ni resolvía la desigualdad social, pero ofrecía una salida política a las élites y a los jefes insurgentes. La independencia se negoció más de lo que se conquistó en el campo de batalla.' },
      { title: 'La entrada a la capital', text: 'Los Tratados de Córdoba, firmados en agosto de 1821, reconocieron la independencia. El 27 de septiembre entró el Ejército Trigarante a la Ciudad de México. Al día siguiente se firmó el Acta de Independencia del Imperio Mexicano. La fecha correcta del plan es el 24 de febrero, no el 1 de marzo que reproducía la ficha original.' },
    ],
    people: ['iturbide', 'guerrero'], sourceIds: ['inehrm-independencia', 'inehrm-republica', 'inah-grandeza'],
    evidence: [
      { sourceId: 'inehrm-independencia', supports: 'La firma del Plan de Iguala el 24 de febrero de 1821, su difusión a las tropas el 1 de marzo y la entrada del Ejército Trigarante el 27 de septiembre.' },
      { sourceId: 'inehrm-republica', supports: 'La entrada del Ejército Trigarante y el Acta de Independencia del 28 de septiembre de 1821.' },
      { sourceId: 'inah-grandeza', locator: 'pp. 30, 250', supports: 'La negociación de la independencia mediante el Plan de Iguala y el papel de las élites criollas.' },
    ],
    editorialNotes: ['La ficha original fechaba el Plan de Iguala el 1 de marzo de 1821. La cronología del INEHRM distingue la firma (24 de febrero) de su lectura a las tropas (1 de marzo).'],
    documentCodes: ['P3-H07', 'P3-S05'],
  },
  {
    id: 'p3-iturbide', title: '1822–1823: el Imperio de Iturbide y su caída', shortTitle: 'El Imperio de Iturbide', year: 1822, endYear: 1823, date: '1822–1823',
    location: 'Ciudad de México', states: ['MX-CMX'], coordinates: [-99.13, 19.43], category: 'politica', review: 'verificada',
    summary: 'Iturbide fue proclamado emperador en 1822, pero su gobierno careció de recursos y apoyo. El Plan de Casa Mata y la presión militar lo obligaron a abdicar en 1823.',
    chapters: [
      { title: 'De general a emperador', text: 'El Congreso proclamó emperador a Iturbide el 18 de mayo de 1822 y lo coronó el 21 de julio. El nuevo régimen intentó sostener un aparato monárquico con un erario agotado y sin acuerdo entre federalistas, centralistas y republicanos.' },
      { title: 'Un imperio sin base', text: 'El gobierno de Iturbide enfrentó conspiraciones, falta de dinero y resistencia de las provincias. La disolución del Congreso y las medidas autoritarias aumentaron el aislamiento. El Imperio no logró construir una legitimidad estable.' },
      { title: 'Casa Mata y la abdicación', text: 'En febrero de 1823, Santa Anna y Echávarri proclamaron el Plan de Casa Mata, que exigía reinstalar el Congreso y desconocer al emperador. Iturbide abdicó el 19 de marzo. La caída abrió el camino a la república federal de 1824.' },
    ],
    people: ['iturbide', 'santa-anna', 'victoria'], sourceIds: ['inehrm-republica'],
    evidence: [
      { sourceId: 'inehrm-republica', supports: 'La proclamación y coronación de Iturbide en 1822, el Plan de Casa Mata y la abdicación del 19 de marzo de 1823.' },
    ],
    documentCodes: ['P3-P05'],
  },
  {
    id: 'p3-1824', title: '1824: la primera Constitución federal y Guadalupe Victoria', shortTitle: 'La Constitución de 1824', year: 1824, date: '4 de octubre de 1824',
    location: 'Ciudad de México', states: ['MX-CMX'], coordinates: [-99.13, 19.43], category: 'politica', review: 'verificada',
    summary: 'La Constitución de 1824 organizó una república federal representativa. Guadalupe Victoria fue elegido primer presidente, pero el nuevo Estado nació con un erario débil y profundas divisiones políticas.',
    chapters: [
      { title: 'La república federal', text: 'El Congreso Constituyente promulgó la Constitución el 4 de octubre de 1824. El texto estableció tres poderes, un Congreso bicameral y estados con gobiernos propios. La federación era una apuesta por integrar un territorio enorme y diverso.' },
      { title: 'El primer gobierno', text: 'El 10 de octubre las legislaturas eligieron a Guadalupe Victoria como primer presidente. Su gobierno enfrentó la falta de recursos, la deuda, la resistencia de las provincias y la amenaza española. La estabilidad política fue más un deseo que una realidad.' },
      { title: 'Un Estado con problemas pendientes', text: 'La Constitución no resolvió la esclavitud, la desigualdad de castas ni los privilegios del clero y del ejército. Tampoco definió con claridad la relación entre la federación y los estados. Esas tensiones explican buena parte de las guerras civiles del siglo XIX.' },
    ],
    people: ['victoria', 'iturbide'], sourceIds: ['inehrm-republica', 'inah-grandeza'],
    evidence: [
      { sourceId: 'inehrm-republica', supports: 'La promulgación de la Constitución el 4 de octubre de 1824 y la elección de Guadalupe Victoria el 10 de octubre.' },
      { sourceId: 'inah-grandeza', locator: 'p. 30', supports: 'La adopción de la república federal y la inclusión de Chiapas en la Federación.' },
    ],
    documentCodes: ['P3-H08', 'P3-P06', 'P3-C05', 'P3-C06'],
  },
  {
    id: 'p3-abolicion', title: '1829: la abolición de la esclavitud y la excepción de Texas', shortTitle: 'La abolición de 1829', year: 1829, date: '15 de septiembre de 1829',
    location: 'Ciudad de México y Texas', states: ['MX-CMX', 'MX-COA'], coordinates: [-99.13, 19.43], category: 'sociedad', review: 'verificada',
    summary: 'Vicente Guerrero decretó la abolición de la esclavitud en 1829. La medida ratificó los bandos insurgentes, pero los propietarios de esclavos en Texas lograron una exención y mantuvieron el trabajo esclavizado.',
    chapters: [
      { title: 'Una promesa de la insurgencia', text: 'Hidalgo y Morelos habían decretado la abolición de la esclavitud durante la guerra. En 1829, el presidente Vicente Guerrero retomó esa promesa con un decreto que declaraba abolida la esclavitud en la República. La medida tenía un valor político y moral, pero su aplicación dependía de autoridades locales.' },
      { title: 'La excepción de Texas', text: 'Los propietarios de esclavos radicados en Texas se opusieron y obtuvieron una exención. La frontera texana siguió recibiendo personas esclavizadas, a pesar de la ley. La abolición nacional no bastó para desmontar una economía esclavista en una región en disputa.' },
      { title: 'El límite de una ley', text: 'La abolición de 1829 no terminó con la esclavitud de hecho ni con el racismo. Tampoco resolvió la situación de los afrodescendientes libres, sujetos a discriminación y a jerarquías sociales. La historia debe distinguir el decreto de su cumplimiento.' },
    ],
    people: ['guerrero'], sourceIds: ['inehrm-republica'],
    evidence: [
      { sourceId: 'inehrm-republica', supports: 'El decreto de abolición de la esclavitud del 15 de septiembre de 1829 y la exención obtenida por los propietarios de Texas.' },
    ],
    documentCodes: ['P3-S06'],
  },
  {
    id: 'p3-colera-1833', title: '1833: el cólera y la reforma de la enseñanza médica', shortTitle: 'El cólera de 1833', year: 1833, date: '1833',
    location: 'Ciudad de México y territorio nacional', states: ['MX-CMX', 'MX-GUA', 'MX-ZAC'], coordinates: [-99.13, 19.43], category: 'salud', review: 'verificada',
    summary: 'La primera gran epidemia de cólera de México mató a miles de personas y desbordó hospitales sin recursos. El gobierno de Gómez Farías respondió con medidas sanitarias y con la creación del Establecimiento de Ciencias Médicas.',
    chapters: [
      { title: 'La llegada del cólera', text: 'El cólera morbus se propagó por el territorio en 1833. En la Ciudad de México se contagiaron 37 863 personas; 20 356 sanaron y 5 822 murieron. La cifra no incluye a todos los enfermos ni a quienes murieron sin registro, pero muestra la magnitud de la crisis.' },
      { title: 'Hospitales sin capacidad', text: 'Los hospitales no tenían recursos ni camas para atender a los enfermos. El gobierno del Distrito Federal ordenó limpiar calles y atarjeas y prohibió la vagancia, medidas que mezclaban higiene con control social. La epidemia golpeó con más fuerza a los sectores pobres.' },
      { title: 'Una reforma en medio de la crisis', text: 'En 1833 se creó el Establecimiento de Ciencias Médicas, una institución laica que sustituyó parte de las funciones del antiguo Protomedicato y de la Facultad Médica. La reforma buscaba formar médicos y cirujanos con criterios modernos. La enfermedad y la política universitaria se entrelazaron.' },
    ],
    people: ['gomez-farias'], sourceIds: ['inehrm-republica', 'salud-constitucion'],
    evidence: [
      { sourceId: 'inehrm-republica', supports: 'La propagación del cólera en 1833 y las cifras de contagiados, recuperados y muertos en la Ciudad de México.' },
      { sourceId: 'salud-constitucion', locator: 'pp. 25–27, 53–57', supports: 'La falta de recursos hospitalarios, la creación del Establecimiento de Ciencias Médicas y la historia del cólera en México.' },
    ],
    documentCodes: ['P3-S07', 'P3-D06', 'P3-M04', 'P3-M05'],
  },
  {
    id: 'p3-influenza', title: '1826 y 1836: las influenza que recorrieron el país', shortTitle: 'Las influenza de 1826 y 1836', year: 1826, endYear: 1836, date: '1826–1836',
    location: 'Nueva España y República Mexicana', states: ['MX-CMX', 'MX-YUC'], coordinates: [-99.13, 19.43], category: 'salud', review: 'verificada',
    summary: 'Dos brotes de influenza, en 1826 y 1836, mostraron la fragilidad sanitaria del nuevo país. La enfermedad se extendió por rutas comerciales y militares y afectó sobre todo a poblaciones debilitadas.',
    chapters: [
      { title: '1826: de la capital a Yucatán', text: 'El brote de influenza comenzó en mayo de 1826 y se mantuvo activo hasta noviembre, alcanzando Yucatán. La circulación de personas y mercancías facilitó la propagación. Los médicos de la época no conocían los virus y trataban los síntomas con medidas de sostén.' },
      { title: '1836: una nueva oleada', text: 'En julio de 1836 comenzó otra epidemia de influenza, relacionada con la segunda pandemia moderna. La coincidencia con la guerra de Texas y la movilización de tropas favoreció el contagio. La enfermedad agravó una situación política y fiscal ya crítica.' },
      { title: 'Enfermar en un Estado pobre', text: 'La respuesta sanitaria dependía de autoridades locales, hospitales y caridad. No existía un sistema nacional de salud. Las epidemias de influenza se sumaron al cólera, la viruela y el tifo para convertir la enfermedad en una experiencia cotidiana del siglo XIX.' },
    ],
    people: [], sourceIds: ['salud-constitucion'],
    evidence: [
      { sourceId: 'salud-constitucion', locator: 'pp. 53–54', supports: 'Los brotes de influenza de 1826 y 1836, su duración y su extensión hasta Yucatán.' },
    ],
    documentCodes: ['P3-D05', 'P3-M03', 'P3-D07', 'P3-M06'],
  },
  {
    id: 'p3-siete-leyes', title: '1835–1836: las Siete Leyes, el centralismo y Texas', shortTitle: 'Las Siete Leyes y Texas', year: 1835, endYear: 1836, date: '1835–1836',
    location: 'Ciudad de México y Texas', states: ['MX-CMX', 'MX-COA'], coordinates: [-99.13, 19.43], category: 'politica', review: 'verificada',
    summary: 'La república centralista de las Siete Leyes sustituyó a la federación de 1824. La medida agravó los conflictos con las provincias y coincidió con la independencia de Texas.',
    chapters: [
      { title: 'Del federalismo al centralismo', text: 'En 1835 el Congreso comenzó a desmantelar la Constitución de 1824. Las Siete Leyes, promulgadas el 29 de diciembre de 1835, crearon un Supremo Poder Conservador y sustituyeron los estados por departamentos. El cambio concentró decisiones en el gobierno central.' },
      { title: 'Texas se separa', text: 'Los colonos texanos se opusieron al centralismo y declararon la independencia el 2 de marzo de 1836. Santa Anna marchó al norte y tomó El Álamo el 6 de marzo. El 21 de abril, Houston sorprendió al ejército mexicano en San Jacinto y capturó a Santa Anna al día siguiente.' },
      { title: 'Una derrota con consecuencias', text: 'La independencia de Texas no fue reconocida de inmediato por México. La guerra costó vidas, recursos y prestigio al gobierno central. En 1845, la anexión de Texas a Estados Unidos llevó a una nueva guerra, mucho más destructiva.' },
    ],
    people: ['santa-anna'], sourceIds: ['inehrm-republica'],
    evidence: [
      { sourceId: 'inehrm-republica', supports: 'La promulgación de las Siete Leyes el 29 de diciembre de 1835, la declaración de independencia de Texas el 2 de marzo de 1836 y la batalla de San Jacinto el 21–22 de abril.' },
    ],
    documentCodes: ['P3-P07', 'P3-H09'],
  },
  {
    id: 'p3-pasteles', title: '1838: la Guerra de los Pasteles y la defensa de Veracruz', shortTitle: 'La Guerra de los Pasteles', year: 1838, date: '1838–1839',
    location: 'Veracruz', states: ['MX-VER'], coordinates: [-96.13, 19.17], category: 'politica', review: 'verificada',
    summary: 'Francia bloqueó los puertos mexicanos para exigir el pago de reclamaciones. La guerra terminó con un tratado y una indemnización, pero dejó una lección sobre la vulnerabilidad del país.',
    chapters: [
      { title: 'Reclamaciones y cañones', text: 'Francia exigió 600 000 pesos por daños sufridos por sus ciudadanos y la exención de préstamos forzosos. Ante la negativa mexicana, la Armada francesa bloqueó Veracruz. El 27 de noviembre de 1838 bombardeó San Juan de Ulúa, que capituló.' },
      { title: 'La defensa y la política', text: 'El gobierno declaró la guerra a Francia y nombró a Santa Anna comandante en Veracruz. La resistencia mexicana no pudo romper el bloqueo, pero la opinión pública se movilizó. El episodio se conoció como “Guerra de los Pasteles”, aunque las causas eran más amplias.' },
      { title: 'El tratado de 1839', text: 'El 9 de marzo de 1839 se firmó el Tratado de Paz. México aceptó pagar 600 000 pesos y Francia devolvió San Juan de Ulúa. La guerra mostró la debilidad naval y diplomática del Estado mexicano frente a las potencias europeas.' },
    ],
    people: ['santa-anna'], sourceIds: ['inehrm-republica'],
    evidence: [
      { sourceId: 'inehrm-republica', supports: 'El ultimátum francés, el bombardeo de San Juan de Ulúa el 27 de noviembre de 1838 y el tratado de paz del 9 de marzo de 1839.' },
    ],
    documentCodes: ['P3-S08', 'P3-C08'],
  },
  {
    id: 'p3-intervencion-eeuu', title: '1846–1848: la guerra con Estados Unidos y el Tratado de Guadalupe Hidalgo', shortTitle: 'La guerra de 1847', year: 1846, endYear: 1848, date: '1846–1848',
    location: 'Texas, Veracruz, Ciudad de México y Guadalupe Hidalgo', states: ['MX-CMX', 'MX-VER', 'MX-COA'], coordinates: [-99.13, 19.43], category: 'territorio', review: 'verificada',
    summary: 'La anexión de Texas llevó a la guerra con Estados Unidos. La invasión ocupó Veracruz y la capital; el Tratado de Guadalupe Hidalgo obligó a México a ceder más de la mitad de su territorio.',
    chapters: [
      { title: 'La guerra que empezó en Texas', text: 'Estados Unidos anexó Texas en 1845 y envió tropas al río Bravo. El conflicto escaló en 1846. Las fuerzas estadounidenses ocuparon Nuevo México y California y bloquearon los puertos mexicanos. La guerra fue desigual en recursos, armamento y organización.' },
      { title: 'Veracruz y la capital', text: 'En marzo de 1847, Scott desembarcó en Veracruz y tomó la ciudad. La campaña avanzó hacia el altiplano. El 13 de septiembre cayó Chapultepec; al día siguiente, la capital fue ocupada. La resistencia incluyó soldados, milicias y civiles, pero no pudo detener al ejército invasor.' },
      { title: 'El tratado y la cesión', text: 'El 2 de febrero de 1848 se firmó el Tratado de Guadalupe Hidalgo. México cedió Texas, Nuevo México y California y recibió 15 millones de pesos. La pérdida territorial, la deuda y la humillación militar marcaron la política mexicana durante décadas.' },
    ],
    people: ['santa-anna'], sourceIds: ['inehrm-republica'],
    evidence: [
      { sourceId: 'inehrm-republica', supports: 'La campaña de 1847, la caída de Chapultepec, la ocupación de la capital y la firma del Tratado de Guadalupe Hidalgo el 2 de febrero de 1848.' },
    ],
    documentCodes: ['P3-H10', 'P3-S09', 'P3-D08', 'P3-M07', 'P3-C09'],
  },
  {
    id: 'p3-tacubaya-acta', title: '1841–1847: Tacubaya, el Acta de Reformas y el regreso del federalismo', shortTitle: 'Tacubaya y el Acta de 1847', year: 1841, endYear: 1847, date: '1841–1847',
    location: 'Ciudad de México', states: ['MX-CMX'], coordinates: [-99.13, 19.43], category: 'politica', review: 'verificada',
    summary: 'Las Bases de Tacubaya desconocieron a Bustamante y abrieron un nuevo ciclo constituyente. En 1847, el Acta Constitutiva y de Reformas restableció la Constitución federal en medio de la guerra.',
    chapters: [
      { title: 'El pronunciamiento de Tacubaya', text: 'El 28 de septiembre de 1841, los generales Paredes, Valencia y Santa Anna firmaron las Bases de Tacubaya. Desconocieron al presidente Bustamante y convocaron un nuevo Congreso. El país volvió a discutir si debía ser centralista o federal.' },
      { title: 'Una década de ensayos', text: 'Las Bases Orgánicas de 1843 y la dictadura de Santa Anna no resolvieron la inestabilidad. La guerra con Estados Unidos agravó la crisis. En 1847, el Congreso restableció la Constitución de 1824 con reformas mediante el Acta Constitutiva y de Reformas.' },
      { title: 'Federalismo en tiempos de invasión', text: 'El Acta fue jurada el 21 de mayo de 1847, mientras las tropas estadounidenses avanzaban. El regreso al federalismo no detuvo la derrota, pero reafirmó un principio que sobrevivió a la guerra: la república debía organizarse como federación.' },
    ],
    people: ['santa-anna'], sourceIds: ['inehrm-republica'],
    evidence: [
      { sourceId: 'inehrm-republica', supports: 'Las Bases de Tacubaya del 28 de septiembre de 1841 y el restablecimiento del régimen federal jurado el 21 de mayo de 1847.' },
    ],
    documentCodes: ['P3-P08', 'P3-P09'],
  },
  {
    id: 'p3-ayutla', title: '1854: el Plan de Ayutla y el fin de la dictadura de Santa Anna', shortTitle: 'El Plan de Ayutla', year: 1854, date: '1 de marzo de 1854',
    location: 'Ayutla, Guerrero', states: ['MX-GRO'], coordinates: [-99.1, 16.96], category: 'politica', review: 'verificada',
    summary: 'El Plan de Ayutla desconoció a Santa Anna y convocó un Congreso Constituyente. La rebelión del sur se extendió y abrió el ciclo de la Reforma liberal.',
    chapters: [
      { title: 'El descontento contra Santa Anna', text: 'La dictadura de Santa Anna, reinstalada en 1853, impuso impuestos, persiguió a la oposición y se alió con los conservadores. En febrero de 1854, Juan Álvarez y otros jefes del sur redactaron un plan que enviaron a Florencio Villarreal. El 1 de marzo se publicó en Ayutla.' },
      { title: 'Un programa mínimo', text: 'El plan exigía la renuncia de Santa Anna, la elección de un presidente interino y la convocatoria de un Congreso Constituyente. No definía todavía el programa liberal completo, pero unificaba a federalistas, moderados y descontentos. Ignacio Comonfort reformó el texto en Acapulco.' },
      { title: 'La caída del dictador', text: 'La rebelión se extendió por el sur y el centro. Santa Anna respondió con represión y quemó pueblos, pero no pudo sostener el gobierno. En 1855 renunció y salió del país. El Plan de Ayutla abrió el camino a las leyes de Reforma y a la Constitución de 1857.' },
    ],
    people: ['santa-anna', 'juarez'], sourceIds: ['inehrm-republica'],
    evidence: [
      { sourceId: 'inehrm-republica', supports: 'La publicación del Plan de Ayutla el 1 de marzo de 1854, sus exigencias y la caída de Santa Anna.' },
    ],
    documentCodes: ['P3-P10', 'P3-S10', 'P3-C07', 'P3-C10'],
  },
  {
    id: 'p3-colera-recurrente', title: '1849–1854: el cólera regresa', shortTitle: 'El cólera de 1849–1854', year: 1849, endYear: 1854, date: '1849–1854',
    location: 'Ciudad de México, Guanajuato y Zacatecas', states: ['MX-CMX', 'MX-GUA', 'MX-ZAC'], coordinates: [-99.13, 19.43], category: 'salud', review: 'contextual',
    summary: 'El cólera volvió en varias oleadas después de 1833. Los brotes de 1849–1850 y 1854 se sumaron a la guerra, la escasez y la falta de infraestructura sanitaria. Las cifras disponibles son parciales.',
    chapters: [
      { title: 'Una enfermedad recurrente', text: 'El cólera no desapareció después de 1833. La fuente sanitaria consultada registra brotes en 1849–1850 y una tercera oleada que llegó en 1854. Las rutas marítimas y terrestres, la movilización militar y las condiciones de higiene favorecieron su difusión.' },
      { title: 'Ciudades y regiones', text: 'Los brotes afectaron de forma desigual. Zacatecas y Guanajuato registraron epidemias en 1850 y 1851; otras entidades sufrieron crisis recurrentes. Los hospitales seguían dependiendo de recursos locales y de la caridad, sin capacidad para responder a una emergencia nacional.' },
      { title: 'Lo que no se puede afirmar', text: 'Las cifras de muertos varían entre ciudades y fuentes. No es posible sumarlas como si formaran una serie homogénea. Esta historia presenta el marco documentado y evita atribuir a cada año una estadística que las fuentes no sostienen.' },
    ],
    people: [], sourceIds: ['salud-constitucion'],
    evidence: [
      { sourceId: 'salud-constitucion', locator: 'pp. 53–57', supports: 'Los brotes de cólera de 1849–1850 y 1854, su distribución regional y las limitaciones de los registros.' },
    ],
    editorialNotes: ['Las fichas originales hablaban de una “segunda gran oleada” en 1850 y un “repunte” en 1854. La fuente consultada confirma brotes, pero no una serie nacional única; por eso la historia se marca como contextual.'],
    documentCodes: ['P3-D09', 'P3-M08', 'P3-M10', 'P3-D10'],
  },
]
