import type { HistoricalEvent } from '../types'

// Period 4: Reforma, Intervención, Segundo Imperio y Porfiriato (1855–1910).
// The chronology volumes of the INEHRM and the health history published by the
// Secretaría de Salud are the backbone. Codes that the read sources do not
// sustain (volcanic activity, most banditry entries, some disaster dates) are
// sent to research/ledger.json instead of being turned into narrative.
export const period4: HistoricalEvent[] = [
  {
    id: 'p4-ayutla-1855', title: '1855: el triunfo de Ayutla y la Ley Juárez', shortTitle: 'El triunfo de Ayutla', year: 1855, date: '1855',
    location: 'Cuernavaca, Guerrero y Ciudad de México', states: ['MX-GRO', 'MX-MOR', 'MX-CMX'], coordinates: [-99.23, 18.92], category: 'politica', review: 'verificada',
    summary: 'La Revolución de Ayutla derribó a Santa Anna y abrió el ciclo liberal. Juan Álvarez fue elegido presidente interino y la Ley Juárez suprimió los fueros eclesiástico y militar, primer golpe contra el orden corporativo heredado.',
    chapters: [
      { title: 'La caída de Santa Anna', text: 'El Plan de Ayutla se había proclamado el 1 de marzo de 1854. La rebelión se extendió por el sur y el centro hasta que, en agosto de 1855, Santa Anna renunció y salió del país. El 13 de agosto la guarnición de la capital se pronunció por el plan y nombró presidente interino a Rómulo Díaz de la Vega. El 16 de septiembre se firmaron los Convenios de Lagos, que unieron a los jefes revolucionarios.' },
      { title: 'Un gobierno de transición', text: 'El 4 de octubre una junta de representantes reunida en Cuernavaca eligió presidente de la República a Juan Álvarez. Su gobierno convocó al Congreso Constituyente, pero nació dividido entre liberales radicales y moderados. En diciembre Álvarez dejó la presidencia y nombró sustituto a Ignacio Comonfort.' },
      { title: 'La Ley Juárez', text: 'El 22 de noviembre de 1855 se expidió la Ley sobre Administración de Justicia y Orgánica de los Tribunales, conocida como Ley Juárez. Suprimió los fueros eclesiástico y militar en los asuntos civiles y penales. La medida no separaba todavía la Iglesia del Estado, pero atacaba un privilegio central del antiguo régimen y desató pronunciamientos conservadores.' },
    ],
    people: ['juan-alvarez', 'comonfort', 'santa-anna', 'juarez'], sourceIds: ['inehrm-reforma'],
    evidence: [
      { sourceId: 'inehrm-reforma', locator: 'pp. 21–25', supports: 'La renuncia de Santa Anna, los Convenios de Lagos, la elección de Juan Álvarez el 4 de octubre de 1855, la convocatoria constituyente y la Ley Juárez del 22 de noviembre.' },
    ],
    documentCodes: ['P4-H01', 'P4-P01'],
  },
  {
    id: 'p4-ley-lerdo', title: '1856: la Ley Lerdo y la desamortización de las corporaciones', shortTitle: 'La Ley Lerdo', year: 1856, date: '25 de junio de 1856',
    location: 'Ciudad de México', states: ['MX-CMX'], coordinates: [-99.13, 19.43], category: 'sociedad', review: 'verificada',
    summary: 'La Ley Lerdo obligó a las corporaciones civiles y eclesiásticas a vender sus fincas rústicas y urbanas. Buscaba crear una propiedad individual y dinamizar la economía, pero afectó tierras comunales y concentró la propiedad en quienes podían comprar.',
    chapters: [
      { title: 'Una ley contra la propiedad corporativa', text: 'El 25 de junio de 1856 se expidió la Ley de Desamortización de fincas rústicas y urbanas propiedad de corporaciones civiles y eclesiásticas. La ley partía de una idea liberal: la propiedad debía estar en manos de individuos, no de la Iglesia, los ayuntamientos o los pueblos. Las fincas debían venderse y los arrendatarios tenían preferencia.' },
      { title: 'El impacto sobre los pueblos', text: 'La norma no distinguía con claridad entre bienes eclesiásticos y tierras comunales indígenas. Muchas comunidades perdieron el control de sus tierras o las vieron repartidas entre vecinos con recursos. La desamortización no creó una clase media rural: en muchos lugares reforzó a los hacendados y a los comerciantes locales.' },
      { title: 'La resistencia conservadora', text: 'La Iglesia condenó la ley y los obispos llamaron a resistirla. En diciembre de 1856 el papa Pío IX condenó la Ley Juárez y la Ley Lerdo. La desamortización se convirtió en una de las causas inmediatas de la Guerra de Reforma y en un tema que volvería a discutirse durante el Porfiriato.' },
    ],
    people: ['miguel-lerdo', 'comonfort'], sourceIds: ['inehrm-reforma'],
    evidence: [
      { sourceId: 'inehrm-reforma', locator: 'pp. 30–33', supports: 'La expedición de la Ley Lerdo el 25 de junio de 1856, su contenido desamortizador y la condena papal de diciembre de 1856.' },
    ],
    editorialNotes: ['La ficha original presentaba la desamortización como una medida que benefició a los pueblos. La fuente consultada permite afirmar la venta de bienes corporativos, pero no un reparto equitativo de la tierra.'],
    documentCodes: ['P4-P02', 'P4-S01'],
  },
  {
    id: 'p4-constitucion-1857', title: '1857: la Constitución liberal y el debate sobre derechos', shortTitle: 'La Constitución de 1857', year: 1857, date: '5 de febrero de 1857',
    location: 'Ciudad de México', states: ['MX-CMX'], coordinates: [-99.13, 19.43], category: 'politica', review: 'verificada',
    summary: 'La Constitución de 1857 consagró derechos individuales, libertad de imprenta y un Estado federal. No separó formalmente la Iglesia del Estado ni resolvió la cuestión agraria, y su aplicación inmediata desató la guerra civil.',
    chapters: [
      { title: 'Un texto nuevo para un país dividido', text: 'El Congreso Constituyente discutió el proyecto durante meses y promulgó la Constitución el 5 de febrero de 1857. El texto estableció la república federal, la soberanía popular y un catálogo de derechos individuales. Suprimió la pena de muerte para delitos políticos y garantizó la libertad de imprenta.' },
      { title: 'Los límites del consenso', text: 'La Constitución no declaró la separación de la Iglesia y el Estado ni nacionalizó los bienes eclesiásticos. Tampoco dio derechos colectivos a los pueblos indígenas. Esas omisiones permitieron que liberales radicales y conservadores la acusaran, desde posiciones opuestas, de ser incompleta o peligrosa.' },
      { title: 'La entrada en vigor y el golpe', text: 'La Constitución entró en vigor el 16 de septiembre de 1857. Comonfort fue electo presidente y Benito Juárez presidente de la Suprema Corte. En diciembre, Comonfort aceptó el Plan de Tacubaya y dio un golpe contra el orden constitucional que él mismo había jurado.' },
    ],
    people: ['comonfort', 'juarez', 'ocampo'], sourceIds: ['inehrm-reforma'],
    evidence: [
      { sourceId: 'inehrm-reforma', locator: 'pp. 32–43', supports: 'La promulgación del 5 de febrero de 1857, su entrada en vigor el 16 de septiembre, la elección de Comonfort y Juárez y el golpe de diciembre.' },
    ],
    documentCodes: ['P4-H02', 'P4-P03', 'P4-S02'],
  },
  {
    id: 'p4-tacubaya', title: '1857–1861: Tacubaya, la Guerra de Reforma y dos gobiernos', shortTitle: 'Tacubaya y la Guerra de Reforma', year: 1857, endYear: 1861, date: 'diciembre de 1857 – diciembre de 1860',
    location: 'Ciudad de México y Veracruz', states: ['MX-CMX', 'MX-VER'], coordinates: [-99.13, 19.43], category: 'politica', review: 'verificada',
    summary: 'El Plan de Tacubaya desconoció la Constitución de 1857 y abrió una guerra civil de tres años. México tuvo dos gobiernos: el conservador en la capital y el constitucional de Juárez, que se sostuvo en Veracruz.',
    chapters: [
      { title: 'El golpe de Comonfort', text: 'El 17 de diciembre de 1857 se promulgó el Plan de Tacubaya, que declaraba que dejaba de regir la Constitución. Comonfort participó en el golpe y retuvo a Juárez en Palacio Nacional. La maniobra pretendía concentrar el poder para pacificar el país, pero terminó dividiendo al ejército y a la clase política.' },
      { title: 'Dos presidentes', text: 'En enero de 1858 los conservadores nombraron presidente a Félix Zuloaga y derogaron las leyes Juárez y Lerdo. Juárez, como presidente de la Suprema Corte, reclamó la legitimidad constitucional y estableció su gobierno en Veracruz. La guerra se libró en el centro, el Bajío y el occidente, con movilización de tropas y recursos locales.' },
      { title: 'El triunfo liberal', text: 'La guerra terminó en diciembre de 1860 con la derrota conservadora en Calpulalpan. Juárez entró en la capital en enero de 1861. El conflicto dejó un país endeudado, destruido y profundamente dividido, y preparó el terreno para la intervención europea.' },
    ],
    people: ['comonfort', 'juarez', 'zuloaga', 'miramon'], sourceIds: ['inehrm-reforma'],
    evidence: [
      { sourceId: 'inehrm-reforma', locator: 'pp. 41–55', supports: 'El Plan de Tacubaya del 17 de diciembre de 1857, la creación de dos gobiernos, la derogación de las leyes liberales y el fin de la guerra en Calpulalpan.' },
    ],
    documentCodes: ['P4-P04', 'P4-H03'],
  },
  {
    id: 'p4-leyes-reforma', title: '1859: las Leyes de Reforma desde Veracruz', shortTitle: 'Las Leyes de Reforma', year: 1859, date: 'julio de 1859',
    location: 'Veracruz', states: ['MX-VER'], coordinates: [-96.13, 19.17], category: 'politica', review: 'verificada',
    summary: 'Desde Veracruz, el gobierno de Juárez nacionalizó los bienes eclesiásticos y creó el matrimonio y el registro civil. Las Leyes de Reforma separaron de hecho a la Iglesia del Estado y dieron un contenido social y laico al liberalismo.',
    chapters: [
      { title: 'Legislar en la guerra', text: 'El gobierno constitucional, sitiado en Veracruz, necesitaba recursos y un programa político. El 12 de julio de 1859 Juárez promulgó la Ley de Nacionalización de Bienes Eclesiásticos. La medida pasó al Estado los bienes del clero y suprimió las órdenes religiosas, con excepciones para las que atendían hospitales y enseñanza.' },
      { title: 'Un Estado civil', text: 'En julio de 1859 se establecieron el matrimonio civil y el registro civil. La ley orgánica del registro permitió al Estado llevar cuenta de nacimientos, matrimonios y defunciones, funciones antes controladas por las parroquias. La Reforma no solo quitó bienes a la Iglesia: construyó instituciones laicas.' },
      { title: 'La resistencia y la guerra', text: 'El arzobispo de México condenó las leyes y los conservadores las presentaron como un ataque a la religión. La guerra continuó hasta 1860. Al triunfar, los liberales aplicaron las leyes en todo el país, pero su cumplimiento fue desigual y dejó conflictos que se prolongaron durante décadas.' },
    ],
    people: ['juarez', 'ocampo', 'miguel-lerdo'], sourceIds: ['inehrm-reforma'],
    evidence: [
      { sourceId: 'inehrm-reforma', locator: 'pp. 62–63', supports: 'La Ley de Nacionalización de Bienes Eclesiásticos del 12 de julio de 1859, el matrimonio civil del 23 de julio y el registro civil del 28 de julio.' },
    ],
    documentCodes: ['P4-P05'],
  },
  {
    id: 'p4-deuda-1861', title: '1861: la suspensión de pagos y el camino a la intervención', shortTitle: 'La deuda de 1861', year: 1861, date: '17 de julio de 1861',
    location: 'Ciudad de México', states: ['MX-CMX'], coordinates: [-99.13, 19.43], category: 'politica', review: 'verificada',
    summary: 'El gobierno de Juárez suspendió por dos años el pago de la deuda pública, incluida la externa. Francia, España y Reino Unido rompieron relaciones y acordaron una intervención militar que terminó en el Segundo Imperio.',
    chapters: [
      { title: 'Un erario en ruinas', text: 'La Guerra de Reforma dejó al gobierno de Juárez sin recursos. En julio de 1861 el Congreso decretó la suspensión por dos años de todas las deudas públicas, aun las contraídas con naciones extranjeras. La medida buscaba ganar tiempo, pero afectó a acreedores europeos que ya presionaban por el pago.' },
      { title: 'La protesta europea', text: 'El ministro francés Dubois de Saligny protestó de inmediato. Francia y Reino Unido rompieron relaciones con México. En octubre de 1861, en la Convención de Londres, las tres potencias acordaron intervenir para cobrar sus créditos. España aportó tropas y Francia asumió el liderazgo político de la operación.' },
      { title: 'De la reclamación al imperio', text: 'Las fuerzas europeas llegaron a Veracruz en 1862. España y Reino Unido se retiraron cuando quedó claro que Francia pretendía derrocar a Juárez. La intervención francesa se prolongó hasta 1867 y permitió el establecimiento del Segundo Imperio. La deuda fue el pretexto; el objetivo real fue reordenar el poder en México.' },
    ],
    people: ['juarez', 'napoleon-iii'], sourceIds: ['inehrm-reforma'],
    evidence: [
      { sourceId: 'inehrm-reforma', locator: 'pp. 92–97', supports: 'El decreto del 17 de julio de 1861, la protesta francesa, la ruptura de relaciones y la Convención de Londres.' },
    ],
    documentCodes: ['P4-P06'],
  },
  {
    id: 'p4-puebla-1862', title: '1862: la batalla de Puebla y la resistencia a la intervención', shortTitle: 'La batalla de Puebla', year: 1862, date: '5 de mayo de 1862',
    location: 'Puebla', states: ['MX-PUE'], coordinates: [-98.2, 19.04], category: 'politica', review: 'verificada',
    summary: 'El Ejército de Oriente, mandado por Ignacio Zaragoza, derrotó al ejército francés en Puebla. La victoria no detuvo la intervención, pero se convirtió en un símbolo durable de la resistencia republicana.',
    chapters: [
      { title: 'El avance francés', text: 'Tras el desembarco en Veracruz, el ejército francés avanzó hacia el altiplano. El 4 de mayo de 1862 declaró a Puebla en estado de sitio y estableció su campamento en Amozoc. Zaragoza organizó la defensa con el Ejército de Oriente y milicias locales, apoyado por fortificaciones y por el conocimiento del terreno.' },
      { title: 'El 5 de mayo', text: 'El conde de Lorencez atacó la ciudad el 5 de mayo. Las fuerzas republicanas resistieron el asalto y obligaron al ejército francés a retirarse. La batalla fue una victoria táctica, no el fin de la guerra: Francia envió refuerzos y en 1863 sitió y tomó Puebla. El 17 de mayo de 1863 Jesús González Ortega rindió la plaza.' },
      { title: 'Un símbolo y sus usos', text: 'La victoria de 1862 se convirtió en fiesta cívica y en símbolo del patriotismo mexicano. También fue utilizada por gobiernos posteriores para construir una imagen de unidad nacional. La historia debe recordar la batalla y, al mismo tiempo, la derrota de 1863 y la ocupación que siguió.' },
    ],
    people: ['zaragoza', 'lorencez', 'juarez'], sourceIds: ['inehrm-reforma', 'inah-grandeza'],
    evidence: [
      { sourceId: 'inehrm-reforma', locator: 'pp. 107–121', supports: 'El sitio de Puebla, la batalla del 5 de mayo de 1862 y la rendición de la plaza el 17 de mayo de 1863.' },
      { sourceId: 'inah-grandeza', locator: 'pp. 250–252', supports: 'La resistencia republicana frente a la intervención francesa y el lugar de Puebla en la memoria nacional.' },
    ],
    documentCodes: ['P4-H04', 'P4-S03'],
  },
  {
    id: 'p4-segundo-imperio', title: '1864: el Segundo Imperio y la llegada de Maximiliano', shortTitle: 'El Segundo Imperio', year: 1864, endYear: 1867, date: '1864–1867',
    location: 'Ciudad de México y Veracruz', states: ['MX-CMX', 'MX-VER'], coordinates: [-99.13, 19.43], category: 'politica', review: 'verificada',
    summary: 'Maximiliano de Habsburgo aceptó la corona ofrecida por los conservadores y Francia. Llegó a México en 1864 y gobernó con apoyo del ejército francés, sin lograr consolidar un régimen propio ni resolver la guerra civil.',
    chapters: [
      { title: 'Una corona ofrecida', text: 'Tras la ocupación de la capital en 1863, una asamblea de notables ofreció la corona a Maximiliano. El archiduque austriaco aceptó en abril de 1864 y firmó con Francia los Tratados de Miramar. Llegó a Veracruz el 28 de mayo y entró solemnemente en la Ciudad de México el 12 de junio.' },
      { title: 'Un emperador entre dos proyectos', text: 'Maximiliano intentó presentarse como un monarca reformador: mantuvo algunas leyes liberales, impulsó la educación y protegió a los pueblos indígenas. Pero dependía del ejército francés y de los conservadores que lo habían llevado al trono. Su gobierno nunca controló todo el territorio.' },
      { title: 'La guerra continúa', text: 'Juárez mantuvo un gobierno itinerante y la resistencia republicana siguió en el norte y el occidente. Francia retiró sus tropas entre 1866 y 1867 por presión de Estados Unidos y por sus propios problemas europeos. Sin ese apoyo, el Imperio se desmoronó y Maximiliano quedó cercado en Querétaro.' },
    ],
    people: ['maximiliano', 'carlota', 'napoleon-iii', 'juarez'], sourceIds: ['inehrm-reforma'],
    evidence: [
      { sourceId: 'inehrm-reforma', locator: 'pp. 146–153', supports: 'La aceptación de la corona, los Tratados de Miramar, la llegada a Veracruz el 28 de mayo de 1864 y la entrada en la capital el 12 de junio.' },
    ],
    documentCodes: ['P4-H05', 'P4-P07'],
  },
  {
    id: 'p4-maximiliano-1867', title: '1867: el fusilamiento de Maximiliano y la restauración republicana', shortTitle: 'Querétaro, 1867', year: 1867, date: '19 de junio de 1867',
    location: 'Cerro de las Campanas, Querétaro', states: ['MX-QUE'], coordinates: [-100.39, 20.59], category: 'politica', review: 'verificada',
    summary: 'El ejército republicano tomó Querétaro y juzgó a Maximiliano, Miramón y Mejía. Fueron fusilados el 19 de junio de 1867. La República se restableció, pero el país quedó marcado por la intervención y la guerra.',
    chapters: [
      { title: 'El cerco de Querétaro', text: 'En 1867 las fuerzas republicanas de Mariano Escobedo sitiaron Querétaro, donde se había refugiado Maximiliano. El emperador intentó resistir y esperar auxilios que nunca llegaron. La ciudad cayó y Maximiliano fue hecho prisionero junto con los generales Miguel Miramón y Tomás Mejía.' },
      { title: 'El consejo de guerra', text: 'Un consejo de guerra los juzgó con base en la ley del 25 de enero de 1862, que castigaba a quienes atentaran contra la independencia. La sentencia de muerte fue confirmada. Juárez negó el indulto, aunque concedió una prórroga de tres días para arreglar sus asuntos. La decisión fue política: el gobierno republicano quería cerrar la posibilidad de una nueva intervención monárquica.' },
      { title: 'El fusilamiento y la restauración', text: 'El 19 de junio de 1867 Maximiliano, Miramón y Mejía fueron fusilados en el Cerro de las Campanas. El 21 de junio Porfirio Díaz ocupó la Ciudad de México. La República quedó restaurada, pero la guerra había dejado una profunda división y una economía devastada.' },
    ],
    people: ['maximiliano', 'miramon', 'tomas-mejia', 'juarez', 'porfirio-diaz'], sourceIds: ['inehrm-reforma'],
    evidence: [
      { sourceId: 'inehrm-reforma', locator: 'pp. 198–201', supports: 'El consejo de guerra, la negativa del indulto, el fusilamiento del 19 de junio de 1867 y la ocupación de la capital el 21 de junio.' },
    ],
    editorialNotes: ['La ficha original fechaba el fusilamiento el 16 de junio. La cronología del INEHRM y el expediente del consejo de guerra sitúan la ejecución el 19 de junio de 1867.'],
    documentCodes: ['P4-H06', 'P4-P08'],
  },
  {
    id: 'p4-tuxtepec', title: '1876: el Plan de Tuxtepec y el regreso de Porfirio Díaz', shortTitle: 'Tuxtepec y el poder', year: 1876, date: '1876',
    location: 'Ojitlán, Oaxaca y Tecoac, Tlaxcala', states: ['MX-OAX', 'MX-TLA'], coordinates: [-96.73, 17.07], category: 'politica', review: 'verificada',
    summary: 'El Plan de Tuxtepec se levantó contra la reelección de Sebastián Lerdo de Tejada. La victoria de Tecoac llevó a Porfirio Díaz a la presidencia y abrió un ciclo de poder personal que se prolongaría, con interrupciones, hasta 1911.',
    chapters: [
      { title: 'La rebelión contra Lerdo', text: 'El 10 de enero de 1876 el general Fidencio Hernández proclamó en Ojitlán, Oaxaca, el Plan de Tuxtepec. El documento desconocía a Sebastián Lerdo de Tejada y exigía elecciones. Porfirio Díaz se sumó y modificó el plan en marzo. La rebelión combinó el rechazo a la reelección con ambiciones regionales y militares.' },
      { title: 'La campaña', text: 'Díaz fue derrotado en Icamole en mayo, pero la guerra se extendió. En noviembre, las fuerzas tuxtepecanas derrotaron a los lerdistas en Tecoac, Tlaxcala. Lerdo abandonó la capital y Díaz entró triunfal el 26 de noviembre. El 28 de noviembre se proclamó presidente.' },
      { title: 'Un nuevo orden', text: 'Díaz convocó elecciones y asumió la presidencia el 1 de diciembre de 1877. Su primer gobierno se presentó como una restauración de la legalidad, pero también inició la centralización del poder y la conciliación con los caciques regionales. La no reelección, que había sido su bandera, sería reformada años después para permitir su permanencia.' },
    ],
    people: ['porfirio-diaz', 'lerdo-presidente'], sourceIds: ['inehrm-reforma', 'inehrm-porfiriato'],
    evidence: [
      { sourceId: 'inehrm-reforma', locator: 'pp. 218–222', supports: 'La proclamación del Plan de Tuxtepec el 10 de enero de 1876, la batalla de Tecoac, la entrada de Díaz el 26 de noviembre y su proclamación como presidente.' },
      { sourceId: 'inehrm-porfiriato', locator: 'pp. 9–10, 66–67', supports: 'La interpretación del tuxtepecanismo como centralización del poder y conciliación de intereses, y la toma de posesión del 1 de diciembre de 1877.' },
    ],
    documentCodes: ['P4-H07', 'P4-P09'],
  },
  {
    id: 'p4-porfiriato', title: '1884–1911: el Porfiriato, un orden prolongado', shortTitle: 'El Porfiriato', year: 1884, endYear: 1911, date: '1884–1911',
    location: 'Ciudad de México', states: ['MX-CMX'], coordinates: [-99.13, 19.43], category: 'politica', review: 'verificada',
    summary: 'Porfirio Díaz gobernó de forma casi continua entre 1877 y 1911. Su régimen combinó crecimiento económico, inversión extranjera, ferrocarriles y control político; también produjo desigualdad, represión laboral y despojo agrario.',
    chapters: [
      { title: 'La construcción del poder', text: 'Díaz gobernó de 1877 a 1880 y, tras el interinato de Manuel González, volvió a la presidencia en 1884. Se apoyó en el ejército, en los gobernadores y en una red de caciques. La reforma constitucional de 1887 permitió la reelección y consolidó un régimen personal que se presentaba como garantía de orden y progreso.' },
      { title: 'Modernización y desigualdad', text: 'El régimen impulsó ferrocarriles, telégrafos, minería, puertos y bancos. La inversión extranjera, sobre todo estadounidense y europea, financió buena parte del crecimiento. Ese progreso se concentró en ciudades y regiones conectadas al mercado; amplios sectores rurales quedaron fuera o sufrieron la pérdida de sus tierras.' },
      { title: 'El costo del orden', text: 'La paz porfiriana se sostuvo con elecciones sin competencia real, censura, policía y represión. Las huelgas de Cananea y Río Blanco y las campañas contra los yaquis mostraron el costo humano del modelo. La crisis de 1907 y la entrevista de Díaz con Creelman en 1908 abrieron la sucesión que llevaría a la Revolución.' },
    ],
    people: ['porfirio-diaz', 'limantour'], sourceIds: ['inehrm-porfiriato', 'inah-grandeza'],
    evidence: [
      { sourceId: 'inehrm-porfiriato', locator: 'pp. 8–10, 130–133', supports: 'La periodización del Porfiriato, el regreso de Díaz en 1884, la centralización del poder y la conciliación con los caciques.' },
      { sourceId: 'inah-grandeza', locator: 'pp. 252–256', supports: 'El balance del crecimiento económico porfiriano y sus costos sociales y regionales.' },
    ],
    documentCodes: ['P4-H08'],
  },
  {
    id: 'p4-ferrocarriles', title: '1880–1910: ferrocarriles, inversión y migración de trabajadores', shortTitle: 'Los ferrocarriles', year: 1880, endYear: 1910, date: '1880–1910',
    location: 'Territorio nacional', states: ['MX-CMX', 'MX-VER', 'MX-SON'], coordinates: [-99.13, 19.43], category: 'territorio', review: 'verificada',
    summary: 'Las concesiones ferroviarias y los subsidios por kilómetro construido multiplicaron las vías y conectaron mercados, puertos y minas. También desplazaron comunidades, atrajeron trabajadores migrantes y facilitaron el control militar del territorio.',
    chapters: [
      { title: 'Concesiones y subsidios', text: 'El gobierno de Manuel González y luego el de Díaz otorgaron concesiones a compañías nacionales y extranjeras. La ley pagaba un subsidio por kilómetro construido y garantizaba tarifas y terrenos. La red pasó de unos cientos de kilómetros en 1876 a más de diecinueve mil en 1910. El Ferrocarril Central y el Nacional dominaron el sistema.' },
      { title: 'La geografía del progreso', text: 'Las vías unieron la capital con Veracruz, el norte minero y la frontera estadounidense. Ese trazado favoreció la exportación de minerales y productos agrícolas y la importación de manufacturas. Las regiones sin ferrocarril quedaron marginadas del mercado nacional y de la modernización que el régimen exhibía.' },
      { title: 'Trabajo y conflicto', text: 'La construcción y operación de los ferrocarriles emplearon a miles de trabajadores, muchos de ellos migrantes. Las condiciones de trabajo y los accidentes generaron conflictos. En 1882 los trabajadores del Ferrocarril Central se declararon en huelga por las horas excesivas; en 1906 se fundó una liga de empleados ferroviarios. El ferrocarril fue a la vez motor del progreso y escenario de organización obrera.' },
    ],
    people: ['porfirio-diaz'], sourceIds: ['inehrm-porfiriato'],
    evidence: [
      { sourceId: 'inehrm-porfiriato', locator: 'pp. 110–119, 220–221', supports: 'Las concesiones ferroviarias, los subsidios por kilómetro, la huelga del Ferrocarril Central en 1882 y la liga de empleados de 1906.' },
    ],
    documentCodes: ['P4-S06'],
  },
  {
    id: 'p4-escuela-laica', title: '1868–1905: la escuela laica y el proyecto educativo', shortTitle: 'La escuela laica', year: 1868, endYear: 1905, date: '1868–1905',
    location: 'Ciudad de México', states: ['MX-CMX'], coordinates: [-99.13, 19.43], category: 'sociedad', review: 'contextual',
    summary: 'La Escuela Nacional Preparatoria abrió en 1868 y se convirtió en el símbolo de la educación laica y positivista. En 1905 se creó la Secretaría de Instrucción Pública y Bellas Artes, pero la escolarización siguió siendo desigual.',
    chapters: [
      { title: 'Una escuela para el nuevo orden', text: 'La Escuela Nacional Preparatoria inició sus labores el 1 de febrero de 1868, en el edificio del antiguo Colegio de San Ildefonso. El proyecto buscaba formar una élite laica con una educación científica y positivista, distinta de la que impartían los colegios religiosos. Gabino Barreda, médico y divulgador del positivismo, quedó asociado a esa reforma.' },
      { title: 'El legado de Barreda', text: 'Barreda murió en 1881. En su oración fúnebre, Justo Sierra lo recordó como quien había intentado preparar a la patria para la reorganización intelectual y moral. La Preparatoria se consolidó como institución de prestigio, pero su modelo elitista no resolvió la falta de escuelas primarias en el resto del país.' },
      { title: 'La educación en el Porfiriato', text: 'En 1905 se creó la Secretaría de Instrucción Pública y Bellas Artes, separada de Justicia, y Justo Sierra fue su primer titular. La medida dio rango ministerial a la educación, aunque la obligatoriedad escolar siguió siendo limitada y dependía de los estados y los municipios. La alfabetización avanzó lentamente y la desigualdad educativa persistió.' },
    ],
    people: ['barreda', 'porfirio-diaz'], sourceIds: ['inehrm-reforma', 'inehrm-porfiriato', 'salud-constitucion'],
    evidence: [
      { sourceId: 'inehrm-reforma', locator: 'p. 206', supports: 'La apertura de la Escuela Nacional Preparatoria el 1 de febrero de 1868.' },
      { sourceId: 'inehrm-porfiriato', locator: 'pp. 132–133, 218–219', supports: 'La muerte de Gabino Barreda y la oración fúnebre de Justo Sierra en 1881; la creación de la Secretaría de Instrucción Pública y Bellas Artes en 1905.' },
      { sourceId: 'salud-constitucion', locator: 'pp. 20–21', supports: 'La creación de la Secretaría de Instrucción Pública y Bellas Artes el 19 de mayo de 1905.' },
    ],
    editorialNotes: ['La ficha original atribuía a Gabino Barreda la reforma educativa completa. Las fuentes leídas documentan la apertura de la Preparatoria en 1868 y su legado, pero no permiten sostener que dirigiera por sí solo todo el sistema educativo.'],
    documentCodes: ['P4-S04'],
  },
  {
    id: 'p4-yaquis', title: '1885–1900: la guerra contra los yaquis en Sonora', shortTitle: 'La guerra contra los yaquis', year: 1885, endYear: 1900, date: '1885–1900',
    location: 'Sierra del Bacatete, Sonora', states: ['MX-SON'], coordinates: [-110.3, 27.9], category: 'seguridad', review: 'verificada',
    summary: 'El Estado porfirista combatió la autonomía yaqui en Sonora con campañas militares, deportaciones y ocupación de tierras. La resistencia se prolongó durante décadas y dejó una profunda huella en las comunidades del noroeste.',
    chapters: [
      { title: 'Tierra, agua y autonomía', text: 'Los yaquis defendían su territorio y sus formas de gobierno frente a la expansión agrícola y ganadera en el valle del Yaqui. El gobierno consideraba esa autonomía un obstáculo para la colonización y el control del estado. La conflictividad se intensificó en la década de 1880.' },
      { title: 'Cajeme y la resistencia', text: 'José María Leyva, Cajeme, encabezó una resistencia que combinó acciones militares y organización política. En 1885 su casa fue atacada y en 1886 las fuerzas del gobierno tomaron la fortificación de Buatachive. La campaña dejó cientos de muertos y obligó a miles de personas a desplazarse; la viruela y las balas golpearon a la población civil.' },
      { title: 'La derrota y la memoria', text: 'Cajeme fue capturado y fusilado en 1887. La resistencia continuó con otros jefes, pero el ejército federal y las tropas estatales acabaron imponiéndose. En 1900 se libró el combate de Mazocoba, con un costo humano muy alto. La guerra contra los yaquis fue una de las faces más violentas de la modernización porfiriana.' },
    ],
    people: ['porfirio-diaz'], sourceIds: ['inehrm-porfiriato'],
    evidence: [
      { sourceId: 'inehrm-porfiriato', locator: 'pp. 134–135, 148–149, 196–197', supports: 'El ataque a la casa de Cajeme en 1885, la toma de Buatachive, su fusilamiento en 1887, el combate de Mazocoba en 1900 y el informe de Díaz sobre la campaña.' },
    ],
    documentCodes: ['P4-S07'],
  },
  {
    id: 'p4-tierra-conflicto', title: '1878–1892: tierras, jornales y la rebelión de Tomóchic', shortTitle: 'Tierra y conflicto rural', year: 1878, endYear: 1892, date: '1878–1892',
    location: 'Valle de México, Morelos y Tomóchic, Chihuahua', states: ['MX-CMX', 'MX-MOR', 'MX-CHH'], coordinates: [-107.9, 28.4], category: 'sociedad', review: 'verificada',
    summary: 'La expansión de haciendas y los deslindes de baldíos agravaron los conflictos por la tierra. Pueblos indígenas y campesinos protestaron y se rebelaron; Tomóchic, en Chihuahua, fue uno de los episodios más violentos de la represión porfirista.',
    chapters: [
      { title: 'Deslindes y despojo', text: 'Las leyes de baldíos y las compañías deslindadoras permitieron al Estado y a particulares reclamar tierras que las comunidades usaban sin títulos escritos. En 1878 representantes de pueblos de Hidalgo, México, Morelos, Distrito Federal, Michoacán y Veracruz se quejaron ante el Congreso por la usurpación de sus tierras y los miserables jornales que recibían. La protesta no detuvo el avance de las haciendas.' },
      { title: 'Tomóchic', text: 'En noviembre de 1891 el pueblo de Tomóchic, en Chihuahua, se sublevó al mando de Cruz Chávez. Los pobladores estaban descontentos con las autoridades locales y defendían su tierra y su religión. El gobierno envió tropas; la rebelión fue reprimida con un costo elevado y se convirtió en símbolo de la resistencia campesina.' },
      { title: 'La paz armada del campo', text: 'La modernización agrícola y la expansión de la red ferroviaria aumentaron la demanda de tierras y de mano de obra. Los peones enfrentaron deudas, salarios bajos y castigos; las comunidades, despojos y litigios. Esa tensión agraria sería una de las causas de la Revolución de 1910.' },
    ],
    people: ['porfirio-diaz'], sourceIds: ['inehrm-porfiriato'],
    evidence: [
      { sourceId: 'inehrm-porfiriato', locator: 'pp. 56–57, 86–87, 168–171', supports: 'La protesta indígena de mayo de 1878, la sublevación de Tomóchic del 30 de noviembre de 1891 y su represión en 1892.' },
    ],
    documentCodes: ['P4-S05', 'P4-C04'],
  },
  {
    id: 'p4-cananea', title: '1906: la huelga de Cananea', shortTitle: 'La huelga de Cananea', year: 1906, date: '1 de junio de 1906',
    location: 'Cananea, Sonora', states: ['MX-SON'], coordinates: [-110.3, 31.0], category: 'seguridad', review: 'verificada',
    summary: 'Los mineros de la Cananea Consolidated Copper Company se declararon en huelga por salarios, jornada y trato laboral. La empresa y el gobierno movilizaron a los rurales y a grupos armados estadounidenses; la represión dejó muertos y heridos.',
    chapters: [
      { title: 'El pliego petitorio', text: 'El 1 de junio de 1906 inició la huelga en la Cananea Consolidated Copper Company, propiedad del estadounidense William C. Greene. Los trabajadores exigían la destitución de un mayordomo, un salario mínimo de cinco pesos diarios, una jornada máxima de ocho horas y que el 75% de las plazas se reservara a mexicanos aptos para ascender. Unos cuatrocientos huelguistas se concentraron en la mina.' },
      { title: 'La intervención armada', text: 'El gobernador de Sonora, Rafael Izabal, autorizó la presencia de rangers estadounidenses, que llegaron a Cananea. El 2 de junio el secretario de Estado Elihu Root telegrafió alarmado a su embajador hablando de una “guerra racial”. La represión dejó un número de muertos que las fuentes discrepan; el gobierno de Díaz informó al Congreso que la huelga había sido reprimida “con energía, prontitud y prudencia”.' },
      { title: 'Un antecedente de la Revolución', text: 'La huelga de Cananea mostró la capacidad de organización de los trabajadores y la disposición del régimen a usar la fuerza para proteger a las empresas extranjeras. También reveló la influencia del Partido Liberal Mexicano y de los hermanos Flores Magón. No fue una revolución, pero se convirtió en uno de sus antecedentes más citados.' },
    ],
    people: ['porfirio-diaz', 'william-greene', 'flores-magon'], sourceIds: ['inehrm-porfiriato', 'inehrm-revolucion'],
    evidence: [
      { sourceId: 'inehrm-porfiriato', locator: 'pp. 220–225', supports: 'El inicio de la huelga el 1 de junio de 1906, el pliego petitorio, la llegada de rangers, la protesta de Root y el informe de Díaz.' },
      { sourceId: 'inehrm-revolucion', locator: 'pp. 11–13', supports: 'La huelga de Cananea como antecedente del movimiento revolucionario y la participación de militantes del Partido Liberal Mexicano.' },
    ],
    documentCodes: ['P4-H09', 'P4-S09', 'P4-C09'],
  },
  {
    id: 'p4-rio-blanco', title: '1907: la huelga textil de Río Blanco y su represión', shortTitle: 'Río Blanco, 1907', year: 1907, date: '7–8 de enero de 1907',
    location: 'Río Blanco, Veracruz', states: ['MX-VER'], coordinates: [-97.1, 18.85], category: 'seguridad', review: 'verificada',
    summary: 'La huelga textil de Río Blanco estalló tras un tiroteo en la tienda de raya. El gobierno envió tropas y fusiló a dirigentes obreros sin formación de causa. La represión cerró el ciclo de protestas textiles de 1906–1907.',
    chapters: [
      { title: 'La tienda de raya', text: 'Los trabajadores de la fábrica textil de Río Blanco, en Veracruz, llevaban meses organizándose contra las tiendas de raya y las condiciones de trabajo. El 7 de enero de 1907, empleados de la tienda de Víctor García dispararon contra los trabajadores que estaban afuera: murió uno y otro resultó herido. La huelga se extendió de inmediato.' },
      { title: 'La represión', text: 'El 8 de enero llegaron tropas al mando de Rosalino Martínez, subsecretario de Guerra. Los soldados ocuparon la zona y se produjeron fusilamientos sin formación de causa. Entre las víctimas estuvieron los dirigentes Ricardo Moreno y Manuel Juárez. El gobierno presentó la intervención como una medida necesaria para restaurar el orden.' },
      { title: 'El fin de un ciclo', text: 'La huelga de Río Blanco fue la última gran protesta textil del Porfiriato. Su represión desmoralizó al movimiento obrero, pero también alimentó el descontento que llevaría a la Revolución. En abril de 1907 Díaz informó al Congreso que los disturbios se habían reprimido “con tanta prontitud como energía”.' },
    ],
    people: ['porfirio-diaz'], sourceIds: ['inehrm-porfiriato'],
    evidence: [
      { sourceId: 'inehrm-porfiriato', locator: 'pp. 226–229', supports: 'El tiroteo del 7 de enero de 1907, la llegada de tropas el 8 de enero, los fusilamientos de Ricardo Moreno y Manuel Juárez y el informe de Díaz.' },
    ],
    documentCodes: ['P4-H10', 'P4-S10', 'P4-C10'],
  },
  {
    id: 'p4-creelman', title: '1908: la entrevista Díaz-Creelman y la sucesión', shortTitle: 'La entrevista Creelman', year: 1908, date: '1908',
    location: 'Castillo de Chapultepec, Ciudad de México', states: ['MX-CMX'], coordinates: [-99.18, 19.42], category: 'politica', review: 'verificada',
    summary: 'Porfirio Díaz declaró al periodista James Creelman que México estaba maduro para la democracia y que no buscaría la reelección en 1910. La entrevista animó a la oposición y abrió la competencia que llevaría a la Revolución.',
    chapters: [
      { title: 'Una declaración inesperada', text: 'A principios de 1908, Díaz concedió una entrevista en el Castillo de Chapultepec al periodista estadounidense James Creelman, de Pearson’s Magazine. El presidente afirmó que el país estaba preparado para la democracia y que vería con buenos ojos la formación de partidos. También insinuó que no se presentaría a la reelección en 1910.' },
      { title: 'La traducción y el debate', text: 'El diario oficial El Imparcial publicó una traducción incompleta de la entrevista el 3 y 4 de marzo de 1908. La declaración fue leída como una apertura política. Francisco I. Madero y otros opositores la tomaron como base para organizar el antirreeleccionismo; el régimen, en cambio, nunca fijó una fecha ni una regla clara de sucesión.' },
      { title: 'El camino a 1910', text: 'La entrevista no democratizó el país por sí sola, pero rompió el silencio sobre la sucesión. En 1909 se fundó el Centro Antirreeleccionista y Madero se convirtió en su candidato. La represión y el fraude electoral de 1910 llevaron al Plan de San Luis y al levantamiento armado. La promesa de Creelman quedó como un episodio de apertura frustrada.' },
    ],
    people: ['porfirio-diaz', 'creelman'], sourceIds: ['inehrm-porfiriato', 'inehrm-revolucion'],
    evidence: [
      { sourceId: 'inehrm-porfiriato', locator: 'pp. 236–237', supports: 'La entrevista de principios de 1908, su publicación parcial en El Imparcial el 3 y 4 de marzo y el debate que provocó.' },
      { sourceId: 'inehrm-revolucion', locator: 'pp. 13–15', supports: 'El impacto de la entrevista en la organización del antirreeleccionismo y la sucesión de 1910.' },
    ],
    documentCodes: ['P4-P10'],
  },
  {
    id: 'p4-regeneracion', title: '1900–1906: Regeneración y el Partido Liberal Mexicano', shortTitle: 'Regeneración y el PLM', year: 1900, endYear: 1906, date: '1900–1906',
    location: 'Ciudad de México, San Luis Missouri y Cananea', states: ['MX-CMX'], coordinates: [-99.13, 19.43], category: 'politica', review: 'verificada',
    summary: 'El periódico Regeneración y el Partido Liberal Mexicano articularon una oposición radical al Porfiriato. Su programa de 1906 combinó demandas laborales, agrarias y políticas, y tuvo eco en los trabajadores de Cananea.',
    chapters: [
      { title: 'Un periódico de oposición', text: 'Regeneración apareció en 1900, dirigido por los hermanos Ricardo y Enrique Flores Magón. Desde sus páginas denunció la corrupción, la represión y las condiciones de trabajo del régimen porfirista. La publicación sufrió clausuras y sus editores fueron encarcelados; en 1904 reapareció en Texas.' },
      { title: 'El programa de 1906', text: 'El 1 de julio de 1906, en San Luis, Missouri, el Partido Liberal Mexicano publicó su Programa y Manifiesto a la Nación con el lema “Reforma, Libertad y Justicia”. El documento incluía la jornada de ocho horas, el salario mínimo, el reparto de tierras, la educación laica y la no reelección. Era un programa más radical que el de los liberales moderados.' },
      { title: 'La red de Cananea', text: 'En enero de 1906, un grupo de trabajadores de Cananea encabezado por Manuel M. Diéguez constituyó la sociedad secreta Unión Liberal Humanidad, que pronto se adhirió a la Junta Organizadora del PLM. La huelga de junio mostró la conexión entre el periodismo opositor, la organización obrera y el descontento del norte. El régimen respondió con cárcel y persecución.' },
    ],
    people: ['flores-magon', 'porfirio-diaz'], sourceIds: ['inehrm-porfiriato'],
    evidence: [
      { sourceId: 'inehrm-porfiriato', locator: 'pp. 200–201, 220–225', supports: 'La fundación y persecución de Regeneración, el Programa del PLM del 1 de julio de 1906 y la Unión Liberal Humanidad de Cananea.' },
    ],
    documentCodes: ['P4-S08'],
  },
  {
    id: 'p4-peste-mazatlan', title: '1902–1903: la peste bubónica en Mazatlán', shortTitle: 'La peste de Mazatlán', year: 1902, endYear: 1903, date: 'diciembre de 1902 – 1903',
    location: 'Mazatlán, Sinaloa', states: ['MX-SIN'], coordinates: [-106.42, 23.25], category: 'salud', review: 'verificada',
    summary: 'Mazatlán sufrió un brote de peste bubónica entre 1902 y 1903. El Consejo Superior de Salubridad impuso cuarentenas, desinfección y vacunación masiva; la epidemia fue controlada, pero la discriminación contra los chinos marcó la respuesta social.',
    chapters: [
      { title: 'El regreso de la peste', text: 'La peste bubónica había aparecido en Mazatlán en 1892, procedente de un barco llegado de China. El segundo brote se registró en diciembre de 1902. La enfermedad se transmitía por pulgas de roedores y encontró condiciones favorables en el puerto, el comercio marítimo y la vivienda hacinada.' },
      { title: 'El cerco sanitario', text: 'Las autoridades aplicaron un cerco sanitario, desinfectaron viviendas, quemaron muebles y ropa y aislaron a los enfermos. Se aplicaron las vacunas de Haffkine y Besredka a más de veinte mil personas. El Consejo Superior de Salubridad y el Instituto Bacteriológico Nacional coordinaron la respuesta, que logró controlar el brote en 1903.' },
      { title: 'La culpa y el prejuicio', text: 'Parte de la población y de la prensa atribuyó la peste a los migrantes chinos, un grupo ya sometido a discriminación. La explicación era falsa y alimentó campañas antichinas en el norte del país. La epidemia muestra cómo una crisis sanitaria puede convertirse en un episodio de racismo y exclusión.' },
    ],
    people: ['liceaga'], sourceIds: ['salud-constitucion', 'inehrm-porfiriato'],
    evidence: [
      { sourceId: 'salud-constitucion', locator: 'pp. 56–59', supports: 'El primer brote de 1892, el segundo de diciembre de 1902, las medidas de cerco, desinfección y vacunación, y el control de la peste en 1903.' },
      { sourceId: 'inehrm-porfiriato', locator: 'pp. 202–205', supports: 'La atribución de la peste a los chinos y la discriminación que enfrentaba esa migración.' },
    ],
    documentCodes: ['P4-D08', 'P4-M07'],
  },
  {
    id: 'p4-salud-porfiriato', title: '1891–1908: el Estado sanitario y la medicina del Porfiriato', shortTitle: 'La salud del Porfiriato', year: 1891, endYear: 1908, date: '1891–1908',
    location: 'Ciudad de México', states: ['MX-CMX'], coordinates: [-99.13, 19.43], category: 'salud', review: 'contextual',
    summary: 'El Código Sanitario de 1891, el Hospital General de 1905 y los institutos médicos ampliaron la acción federal en salud. El sistema siguió siendo desigual y dependiente de la beneficencia, y la influenza de 1890 mostró sus límites.',
    chapters: [
      { title: 'Un código para todo el país', text: 'El 15 de julio de 1891 se promulgó el Código Sanitario, primer instrumento federal para enfrentar epidemias en todo el territorio. El Consejo Superior de Salubridad, creado en 1841, ganó atribuciones y las juntas estatales se multiplicaron. El código permitió organizar cuarentenas, controlar alimentos y coordinar campañas, aunque su aplicación dependía de recursos locales.' },
      { title: 'Hospitales e institutos', text: 'En 1905 se inauguró el Hospital General de la Ciudad de México, símbolo de la beneficencia porfiriana. Ese mismo año la sección de Bacteriología del Instituto Patológico se transformó en Instituto Bacteriológico Nacional. Sus laboratorios produjeron vacunas y sueros, y en 1906 comenzaron a usar tuberculina para diagnosticar la tuberculosis. La medicina de laboratorio se volvió parte del Estado.' },
      { title: 'Las enfermedades y sus límites', text: 'La influenza de 1890 recorrió el país como cuarta pandemia mundial. La sífilis, la tuberculosis, la viruela y el paludismo siguieron siendo problemas graves. En 1905 comenzó la primera campaña contra la sífilis, centrada en la higiene sexual y el registro de personas enfermas. El Estado sanitario creció, pero no alcanzó a toda la población.' },
    ],
    people: ['porfirio-diaz', 'liceaga'], sourceIds: ['salud-constitucion'],
    evidence: [
      { sourceId: 'salud-constitucion', locator: 'pp. 25–35, 56–59, 97–98', supports: 'El Código Sanitario del 15 de julio de 1891, el Hospital General de 1905, el Instituto Bacteriológico Nacional, la campaña contra la sífilis de 1905 y la influenza de 1890.' },
    ],
    editorialNotes: ['La ficha original fechaba la inauguración del Hospital General en 1906. La fuente consultada la sitúa en 1905. La ampliación de atribuciones federales de 1908 no se pudo documentar con precisión; por eso la historia se marca como contextual.'],
    documentCodes: ['P4-D07', 'P4-M01', 'P4-M02', 'P4-M03', 'P4-M04', 'P4-M05', 'P4-M06', 'P4-M08', 'P4-M09', 'P4-M10'],
  },
]
