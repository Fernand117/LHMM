import type { HistoricalEvent } from '../types'

// Period 1: conquest and the first century of New Spain.
// Every story names the guide codes it replaces (documentCodes) and the evidence
// that was actually read. Codes not covered here are recorded in research/ledger.json.
export const period1: HistoricalEvent[] = [
  {
    id: 'p1-alianzas', title: '1519: Tlaxcala, la alianza que cambió la guerra', shortTitle: 'La alianza con Tlaxcala', year: 1519, date: 'septiembre de 1519',
    location: 'Tlaxcala y valle de México', states: ['MX-TLA', 'MX-VER'], coordinates: [-98.24, 19.32], category: 'territorio', review: 'verificada',
    summary: 'La expedición de Cortés no avanzó sola. Tras combatir con los señoríos tlaxcaltecas, selló una alianza que le dio guías, guerreros y conocimiento del territorio.',
    chapters: [
      { title: 'Primero la guerra, después el pacto', text: 'Los tlaxcaltecas resistieron a los españoles durante varios días en septiembre de 1519. La superioridad militar de la expedición no bastó para someterlos; el acuerdo llegó después de medir fuerzas y calcular el costo de una alianza con los enemigos de los mexicas.' },
      { title: 'Una decisión con intereses propios', text: 'Tlaxcala vivía bajo presión mexica y buscó cambiar el equilibrio regional. Sus gobernantes no actuaron como simples auxiliares: negociaron condiciones, conservaron mando sobre sus tropas y participaron en el sitio de Tenochtitlan con objetivos políticos propios.' },
      { title: 'El encuentro con Motecuhzoma', text: 'En noviembre de 1519 la expedición entró a México-Tenochtitlan. El recibimiento de Motecuhzoma Xocoyotzin y su posterior prisión forman parte de un proceso conflictivo, reconstruido de forma desigual por fuentes españolas e indígenas. No fue un acto de entrega unánime.' },
    ],
    people: ['cortes', 'malintzin', 'moctezuma'], sourceIds: ['inah-grandeza'],
    evidence: [
      { sourceId: 'inah-grandeza', locator: 'pp. 27–28, 199', supports: 'Los combates de septiembre de 1519 y la alianza tlaxcalteca; el papel de Malintzin como intérprete y mediadora.' },
      { sourceId: 'inah-grandeza', locator: 'pp. 146–148', supports: 'La entrada a Tenochtitlan y la prisión de Motecuhzoma dentro de un proceso conflictivo.' },
    ],
    documentCodes: ['P1-H02', 'P1-H03', 'P1-P01', 'P1-S01', 'P1-S02'],
  },
  {
    id: 'p1-toxcatl', title: '1520: la matanza de Tóxcatl y la ruptura', shortTitle: 'La matanza de Tóxcatl', year: 1520, date: 'mayo de 1520',
    location: 'Templo Mayor, México-Tenochtitlan', states: ['MX-CMX'], coordinates: [-99.131, 19.435], category: 'sociedad', review: 'verificada',
    summary: 'Mientras Cortés combatía a una expedición rival en la costa, Pedro de Alvarado atacó una celebración mexica. La matanza rompió el precario entendimiento y desató el asedio al palacio.',
    chapters: [
      { title: 'La fiesta interrumpida', text: 'Los mexicas solicitaron permiso para celebrar Tóxcatl, dedicada a Tezcatlipoca y Huitzilopochtli. Durante la ceremonia, los españoles que habían quedado al mando irrumpieron en el recinto y atacaron a los participantes. Las fuentes discrepan sobre el motivo inmediato, pero coinciden en la ruptura que provocó.' },
      { title: 'El cerco y la salida nocturna', text: 'La indignación llevó a un asedio constante al alojamiento de los españoles. Cortés regresó y logró reunir a sus fuerzas, pero la retirada de la ciudad se hizo bajo persecución. La “Noche Triste” fue una derrota española; la victoria mexica quedó asociada a Cuitláhuac.' },
      { title: 'La guerra que siguió', text: 'La viruela, traída en la expedición de Pánfilo de Narváez, golpeó a la población indígena en los meses siguientes. Cuitláhuac murió y Cuauhtémoc asumió el mando. La conquista no se decidió en una sola batalla, sino en una guerra con aliados indígenas, epidemias y asedio.' },
    ],
    people: ['cortes', 'alvarado', 'cuitlahuac', 'cuauhtemoc', 'moctezuma'], sourceIds: ['inah-grandeza'],
    evidence: [
      { sourceId: 'inah-grandeza', locator: 'pp. 146–148', supports: 'La celebración de Tóxcatl, el ataque, el asedio y la retirada; la viruela y la muerte de Cuitláhuac.' },
      { sourceId: 'inah-grandeza', locator: 'p. 140', supports: 'La caída de Tenochtitlan y Tlatelolco el 13 de agosto de 1521 y la captura de Cuauhtémoc.' },
    ],
    documentCodes: ['P1-H04', 'P1-H05', 'P1-H06', 'P1-P02', 'P1-C01', 'P1-C02'],
  },
  {
    id: 'p1-virreinato', title: 'De la Audiencia al virreinato: cómo se gobernó Nueva España', shortTitle: 'El gobierno colonial', year: 1524, endYear: 1571, date: '1524–1571',
    location: 'Ciudad de México y monarquía hispánica', states: ['MX-CMX'], coordinates: [-99.13, 19.43], category: 'politica', review: 'verificada',
    summary: 'La conquista militar dio paso a un orden administrativo disputado: Consejo de Indias, audiencias, virrey, cabildos y tribunales. Cada institución concentró poder y generó conflictos.',
    chapters: [
      { title: 'Del mando de Cortés a la Corona', text: 'Cortés fue nombrado gobernador y capitán general en 1522, pero la Corona buscó limitar su autonomía. El Consejo de Indias, instalado en 1524, centralizó la supervisión de justicia, comercio y gobierno. La primera Audiencia de México llegó en 1528 y pronto acumuló acusaciones de abuso.' },
      { title: 'La segunda Audiencia y el virrey', text: 'La segunda Audiencia, presidida por Sebastián Ramírez de Fuenleal, intentó ordenar la administración y frenar abusos. En 1535 Antonio de Mendoza asumió como primer virrey, con autoridad sobre un territorio enorme y recursos limitados. El virreinato no sustituyó de golpe a las redes locales: las articuló.' },
      { title: 'Leyes, tributos e Inquisición', text: 'Las Leyes Nuevas de 1542 intentaron limitar la herencia de las encomiendas y mejorar la condición de los indígenas; su aplicación fue parcial y conflictiva. En 1571 se estableció el Tribunal del Santo Oficio en la Ciudad de México. La monarquía gobernaba mediante negociación, presión y adaptación local, no solo por decretos.' },
    ],
    people: ['cortes', 'carlos-v', 'antonio-mendoza', 'ramirez-fuenleal', 'moya-contreras'], sourceIds: ['inah-grandeza'],
    evidence: [
      { sourceId: 'inah-grandeza', locator: 'capítulo 10, pp. 211–236', supports: 'Encomiendas, primeras órdenes religiosas, administración virreinal, reformas borbónicas y tensiones de gobierno.' },
      { sourceId: 'inah-grandeza', locator: 'pp. 224–225', supports: 'Tributo, cajas de comunidad y obligaciones impuestas a los pueblos.' },
    ],
    documentCodes: ['P1-H07', 'P1-H08', 'P1-H09', 'P1-P04', 'P1-P05', 'P1-P06', 'P1-P07', 'P1-P08', 'P1-P09', 'P1-P10'],
  },
  {
    id: 'p1-mixton', title: '1541–1542: la guerra del Mixtón y sus cautivos', shortTitle: 'La guerra del Mixtón', year: 1541, endYear: 1542, date: '1541–1542',
    location: 'Nueva Galicia, actual Jalisco y Zacatecas', states: ['MX-JAL', 'MX-ZAC'], coordinates: [-103.5, 21.2], category: 'territorio', review: 'verificada',
    summary: 'La resistencia de pueblos chichimecas y mesoamericanos prófugos en el Mixtón obligó al virrey Mendoza a intervenir. La guerra dejó muerte, represalias y circulación forzada de cautivos.',
    chapters: [
      { title: 'Una rebelión contra el avance colonial', text: 'El avance español hacia el occidente y el norte chocó con pueblos que defendían tierras y autonomía. En 1541 la rebelión del Mixtón creció en Jalisco y Zacatecas. Pedro de Alvarado murió durante la campaña, y el virrey Antonio de Mendoza acudió personalmente con españoles y miles de guerreros aliados.' },
      { title: 'La guerra no fue solo española', text: 'La represión combinó tropas virreinales, encomenderos y contingentes indígenas aliados. La victoria colonial reordenó el territorio, pero no eliminó la resistencia. Nuevas rebeliones y conflictos fronterizos continuaron durante décadas.' },
      { title: 'Cautivos y trabajo forzado', text: 'La guerra alimentó la captura y el comercio de indígenas, incluidos cautivos vendidos o distribuidos como mano de obra. Esa práctica no equivale a una esclavitud industrial moderna, pero sí formó parte de un sistema coercitivo que el atlas no debe suavizar.' },
    ],
    people: ['antonio-mendoza', 'alvarado', 'nuno-guzman'], sourceIds: ['inah-grandeza'],
    evidence: [
      { sourceId: 'inah-grandeza', locator: 'p. 205', supports: 'La rebelión del Mixtón de 1541, la muerte de Pedro de Alvarado y la intervención del virrey Mendoza.' },
      { sourceId: 'inah-grandeza', locator: 'pp. 186–187', supports: 'La expansión colonial en el noroeste y las formas coercitivas de trabajo y evangelización.' },
    ],
    documentCodes: ['P1-H10', 'P1-C03', 'P1-C04'],
  },
  {
    id: 'p1-iglesia-educacion', title: 'Evangelización, colegios y la primera universidad', shortTitle: 'Evangelización y educación', year: 1524, endYear: 1551, date: '1524–1551',
    location: 'México central y Tlatelolco', states: ['MX-CMX'], coordinates: [-99.14, 19.45], category: 'sociedad', review: 'verificada',
    summary: 'Los franciscanos construyeron escuelas, gramáticas y redes de catequesis. El Colegio de Santa Cruz de Tlatelolco y la Real Universidad de México muestran un proyecto educativo desigual, atravesado por el control religioso.',
    chapters: [
      { title: 'Los doce franciscanos', text: 'En 1524 llegaron doce frailes franciscanos encabezados por Martín de Valencia. Con ellos se organizó una evangelización que aprendió las lenguas indígenas y produjo vocabularios, doctrinas y catecismos. Pedro de Gante había llegado antes y fundó una escuela en Texcoco.' },
      { title: 'Santa Cruz de Tlatelolco', text: 'El Colegio de Santa Cruz, fundado en 1536, formó a jóvenes indígenas en letras, latín y doctrina. Fue un espacio pionero y también un experimento limitado: la Corona y las órdenes religiosas no sostuvieron con la misma fuerza la formación de un clero indígena.' },
      { title: 'La universidad y sus límites', text: 'La Real Universidad de México se creó en 1551. Su fundación no significó educación universal: el acceso dependía de condición social, género y redes de poder. La alfabetización y la enseñanza superior quedaron concentradas en una minoría.' },
    ],
    people: ['pedro-gante', 'martin-valencia', 'sahagun', 'carlos-v'], sourceIds: ['inah-grandeza'],
    evidence: [
      { sourceId: 'inah-grandeza', locator: 'pp. 211–213', supports: 'La llegada de los franciscanos en 1523–1524, la escuela de Pedro de Gante y la producción de gramáticas y doctrinas.' },
    ],
    documentCodes: ['P1-S03', 'P1-S05', 'P1-S08'],
  },
  {
    id: 'p1-hospitales', title: 'Hospitales de la Nueva España: caridad, medicina y segregación', shortTitle: 'Los primeros hospitales', year: 1524, endYear: 1553, date: '1524–1553',
    location: 'Ciudad de México', states: ['MX-CMX'], coordinates: [-99.13, 19.43], category: 'salud', review: 'corregida',
    summary: 'El Hospital de Jesús, el de San José de los Naturales y el Hospital Real de Naturales atendieron necesidades distintas. Su historia muestra tanto la caridad cristiana como la separación entre españoles e indígenas.',
    chapters: [
      { title: 'Tres hospitales, tres públicos', text: 'El Hospital de Jesús se fundó en 1524 y se asoció a la atención de españoles y a la figura de Cortés. El de San José de los Naturales, atendido por franciscanos, se dirigió a la población indígena. En 1553 el Hospital Real de Naturales quedó vinculado a la atención de los pueblos originarios.' },
      { title: 'La medicina que se practicaba', text: 'Los hospitales combinaban saberes europeos con prácticas indígenas. La atención dependía de recursos escasos, órdenes religiosas y trabajo no remunerado. No eran instituciones de salud pública modernas: eran espacios de caridad, control social y aprendizaje médico.' },
      { title: 'Una fecha que debe precisarse', text: 'La ficha original mezclaba la fundación de San José con la del Hospital Real de Naturales. La documentación del archivo hospitalario permite separar ambos momentos: San José en 1531 y el Hospital Real en 1553. Conservamos la corrección porque una fecha mal atribuida cambia la historia institucional.' },
    ],
    people: ['cortes', 'pedro-gante'], sourceIds: ['inah-grandeza', 'bnah-hospital-real', 'salud-constitucion'],
    evidence: [
      { sourceId: 'bnah-hospital-real', supports: 'Descripción del archivo del Hospital Real de Naturales y su relación con la atención indígena.' },
      { sourceId: 'salud-constitucion', locator: 'pp. 25–35', supports: 'Trayectoria de la asistencia hospitalaria novohispana y la fundación del Hospital de Jesús.' },
      { sourceId: 'inah-grandeza', locator: 'pp. 211–213', supports: 'El papel de las órdenes religiosas en la atención y la evangelización.' },
    ],
    editorialNotes: ['El documento de trabajo fechaba el Hospital de San José en 1531 y el Hospital Real de Naturales en 1553 en fichas separadas; esta historia las reúne sin confundir ambas fundaciones.'],
    documentCodes: ['P1-S04', 'P1-M02', 'P1-M04', 'P1-M06'],
  },
  {
    id: 'p1-epidemias', title: 'Viruela, sarampión y cocoliztli: la catástrofe demográfica', shortTitle: 'Las epidemias del siglo XVI', year: 1520, endYear: 1581, date: '1520–1581',
    location: 'Altiplano central y Nueva España', states: ['MX-CMX', 'MX-PUE', 'MX-MEX'], coordinates: [-99.13, 19.43], category: 'salud', review: 'verificada',
    summary: 'Una sucesión de epidemias arrasó poblaciones indígenas. La viruela de 1520, el sarampión de 1531 y los cocoliztli de 1545–1548 y 1576–1581 transformaron la demografía, el trabajo y la vida comunitaria.',
    chapters: [
      { title: 'La viruela de 1520', text: 'La viruela llegó con la expedición de Pánfilo de Narváez. La población indígena carecía de defensas frente a un virus desconocido; la enfermedad mató a Cuitláhuac y debilitó a Tenochtitlan durante el sitio. No fue un “aliado” neutral: fue una catástrofe humana.' },
      { title: 'Sarampión y cocoliztli', text: 'En 1531 se registró una epidemia de sarampión. Entre 1545 y 1548, y de nuevo entre 1576 y 1581, el cocoliztli provocó una mortandad enorme. Las causas exactas siguen discutidas; las investigaciones combinan factores infecciosos, hambre y condiciones de vida.' },
      { title: 'Consecuencias sociales', text: 'La caída demográfica redujo la mano de obra, alteró el tributo y reconfiguró las comunidades. Las autoridades coloniales respondieron con medidas fiscales y religiosas, no con una política sanitaria moderna. Las cifras varían mucho entre estimaciones y deben presentarse como rangos, no como certezas.' },
    ],
    people: ['cuitlahuac', 'antonio-mendoza'], sourceIds: ['inah-grandeza', 'salud-constitucion'],
    evidence: [
      { sourceId: 'inah-grandeza', locator: 'pp. 197–199', supports: 'La viruela de 1520, su origen en la expedición de Narváez y su impacto en la conquista.' },
      { sourceId: 'inah-grandeza', locator: 'p. 186', supports: 'La caída demográfica por viruela, sarampión y fiebres intestinales en el noroeste.' },
      { sourceId: 'salud-constitucion', locator: 'pp. 45–57', supports: 'Las epidemias de influenza, cólera y otras enfermedades en la historia sanitaria mexicana; se usa como marco, no como cifra única.' },
    ],
    documentCodes: ['P1-D01', 'P1-D02', 'P1-D03', 'P1-D06', 'P1-D09', 'P1-M01', 'P1-M03', 'P1-M05', 'P1-M08', 'P1-S07'],
  },
  {
    id: 'p1-ciencia', title: 'Saberes médicos y naturalistas del siglo XVI', shortTitle: 'Medicina y naturaleza', year: 1570, endYear: 1590, date: '1570–1590',
    location: 'Nueva España', states: ['MX-CMX'], coordinates: [-99.13, 19.43], category: 'salud', review: 'contextual',
    summary: 'La expedición de Francisco Hernández, el Códice Florentino y los tratados de Juan de Cárdenas y Agustín Farfán muestran cómo se mezclaron la observación indígena y la medicina europea.',
    chapters: [
      { title: 'Francisco Hernández y la naturaleza americana', text: 'Entre 1570 y 1577, el médico Francisco Hernández recorrió Nueva España para registrar plantas, animales y prácticas medicinales. Su trabajo dependió de informantes indígenas y de una red de traducción y clasificación. No fue una simple “descubrimiento” europeo: fue una apropiación de saberes locales.' },
      { title: 'El Códice Florentino', text: 'Bernardino de Sahagún y sus colaboradores nahuas reunieron testimonios sobre religión, sociedad, historia y medicina. El Códice Florentino, concluido hacia 1577, es una fuente fundamental, pero también un producto del proyecto evangelizador y del control colonial.' },
      { title: 'La medicina que circulaba', text: 'Los tratados de Juan de Cárdenas y Agustín Farfán circularon a finales del siglo XVI. Combinaban autoridades clásicas, observación local y prejuicios sobre los cuerpos y las costumbres. Leerlos exige distinguir el conocimiento práctico de las jerarquías sociales que lo ordenaban.' },
    ],
    people: ['francisco-hernandez', 'sahagun', 'juan-cardenas', 'agustin-farfan'], sourceIds: ['inah-grandeza', 'salud-constitucion'],
    evidence: [
      { sourceId: 'inah-grandeza', locator: 'capítulo 10', supports: 'La producción de saberes, crónicas y obras sobre la sociedad novohispana.' },
      { sourceId: 'salud-constitucion', locator: 'pp. 30–45', supports: 'La medicina novohispana, el Protomedicato y la circulación de tratados.' },
    ],
    documentCodes: ['P1-M07', 'P1-M09', 'P1-M10'],
  },
  {
    id: 'p1-pacifico', title: 'El Pacífico novohispano: Acapulco, Manila y las reducciones', shortTitle: 'Acapulco y el Galeón de Manila', year: 1565, endYear: 1590, date: '1565–1590',
    location: 'Acapulco y el Pacífico', states: ['MX-GRO'], coordinates: [-99.89, 16.85], category: 'territorio', review: 'verificada',
    summary: 'La ruta Manila–Acapulco conectó Nueva España con Asia. Al mismo tiempo, las autoridades coloniales impulsaron reducciones de pueblos indígenas para controlar territorio, tributo y evangelización.',
    chapters: [
      { title: 'La ruta que unió dos océanos', text: 'Andrés de Urdaneta encontró en 1565 una ruta de regreso desde Filipinas hacia América. El Galeón de Manila llevó seda, especias y plata entre Asia y Nueva España. Acapulco se convirtió en un puerto estacional, dependiente de trabajadores y comerciantes locales.' },
      { title: 'Plata, comercio y poder', text: 'La plata novohispana circuló por el Pacífico y el Atlántico. La ruta no benefició por igual a todos: enriqueció a comerciantes y funcionarios, mientras las comunidades costeras cargaron con trabajos y requisiciones. El comercio global tuvo costos locales.' },
      { title: 'Reducciones y congregaciones', text: 'Las autoridades coloniales agruparon a poblaciones dispersas en pueblos de indios para facilitar evangelización, tributo y control. Las reducciones no fueron un simple reacomodo: rompieron vínculos con tierras y santuarios, y provocaron resistencias y adaptaciones.' },
    ],
    people: ['andres-urdaneta'], sourceIds: ['inah-grandeza'],
    evidence: [
      { sourceId: 'inah-grandeza', locator: 'capítulo 8', supports: 'La reconfiguración del territorio novohispano, las congregaciones de pueblos y la articulación de regiones.' },
    ],
    documentCodes: ['P1-S09', 'P1-S10'],
  },
  {
    id: 'p1-pirateria', title: 'Corsarios en el Golfo: comercio, guerra y saqueo', shortTitle: 'Corsarios del Golfo', year: 1550, endYear: 1590, date: '1550–1590',
    location: 'Veracruz, Campeche y el Caribe', states: ['MX-VER', 'MX-CAM'], coordinates: [-96.13, 19.2], category: 'seguridad', review: 'contextual',
    summary: 'El comercio atlántico atrajo corsarios franceses e ingleses. Veracruz, Campeche y las rutas marítimas se volvieron objetivos militares y espacios de contrabando.',
    chapters: [
      { title: 'La guerra europea llegó al Golfo', text: 'Las rivalidades entre monarquías europeas se trasladaron al Caribe y al Golfo de México. Corsarios con patentes de sus gobiernos atacaron barcos y puertos; piratas sin patente operaron por cuenta propia. La distinción importa para no llamar “pirata” a cualquier marino armado.' },
      { title: 'San Juan de Ulúa, 1568', text: 'La expedición de John Hawkins llegó a San Juan de Ulúa con mercancías y esclavos. Un enfrentamiento con la flota española destruyó parte de sus naves. El episodio muestra la delgada línea entre comercio, contrabando y guerra naval.' },
      { title: 'Defensas incompletas', text: 'La Corona financió fortificaciones y convoyes, pero no pudo proteger todos los puertos. El contrabando prosperó con la complicidad de autoridades y comerciantes locales. La seguridad marítima fue un problema crónico, no una batalla única.' },
    ],
    people: ['john-hawkins', 'francis-drake'], sourceIds: ['inah-grandeza'],
    evidence: [
      { sourceId: 'inah-grandeza', locator: 'capítulo 8', supports: 'La configuración del Golfo, los puertos y las rutas comerciales novohispanas.' },
    ],
    documentCodes: ['P1-C05', 'P1-C06', 'P1-C07', 'P1-C10'],
  },
  {
    id: 'p1-fraudes', title: 'Tributo, minería y fraude en el siglo XVI', shortTitle: 'Fraudes y tributos', year: 1570, endYear: 1590, date: '1570–1590',
    location: 'Zacatecas, Guanajuato y pueblos del centro', states: ['MX-ZAC', 'MX-GUA', 'MX-CMX'], coordinates: [-102.7, 23.1], category: 'seguridad', review: 'contextual',
    summary: 'El cobro irregular de tributos y la circulación clandestina de plata muestran que el orden colonial dependía de redes locales y de una fiscalidad difícil de controlar.',
    chapters: [
      { title: 'El tributo como conflicto', text: 'Los pueblos debían entregar tributo en especie o dinero, además de sostener a curas y autoridades. Los cobros irregulares, las exenciones y los atrasos generaron pleitos. La fiscalidad colonial no era un sistema uniforme: se negociaba pueblo por pueblo.' },
      { title: 'La plata y sus caminos', text: 'La minería de Zacatecas y Guanajuato produjo riqueza, pero también fraudes, contrabando y deudas. La plata salía por Veracruz y Acapulco; parte escapaba de los registros. El control del metal precioso fue una obsesión de la Corona y una oportunidad para redes locales.' },
      { title: 'Un delito difícil de separar', text: 'Fraude fiscal, contrabando y abuso de autoridad se mezclaban. No todo intercambio ilegal era “crimen organizado” en el sentido contemporáneo. La historia de estas prácticas exige distinguir entre infracción administrativa, violencia y resistencia comunitaria.' },
    ],
    people: [], sourceIds: ['inah-grandeza'],
    evidence: [
      { sourceId: 'inah-grandeza', locator: 'pp. 224–236', supports: 'Tributo, cajas de comunidad, minería y reformas fiscales borbónicas.' },
    ],
    documentCodes: ['P1-C08', 'P1-C09'],
  },
  {
    id: 'p1-volcanes', title: 'Volcanes y erupciones en el registro colonial temprano', shortTitle: 'Erupciones del siglo XVI', year: 1533, endYear: 1590, date: '1533–1590',
    location: 'Pico de Orizaba y Volcán de Colima', states: ['MX-VER', 'MX-PUE', 'MX-COL'], coordinates: [-97.27, 19.03], category: 'desastres', review: 'contextual',
    summary: 'Crónicas y registros coloniales mencionan actividad del Pico de Orizaba y del Volcán de Colima. Son testimonios valiosos, pero incompletos: no permiten reconstruir cada erupción con precisión moderna.',
    chapters: [
      { title: 'Lo que dicen las fuentes', text: 'El Pico de Orizaba (Citlaltépetl) y el Volcán de Colima aparecen en crónicas del siglo XVI. Los registros describen humo, ceniza y erupciones, pero no siempre distinguen fenómenos ni fechas. La vulcanología histórica debe combinar documentos, estratigrafía y dataciones.' },
      { title: 'El riesgo de la lista', text: 'Convertir cada mención en una erupción confirmada produce falsa precisión. Algunas fechas son aproximadas o corresponden a episodios mal identificados. Por eso esta historia presenta un marco de actividad y no una secuencia cerrada de eventos.' },
      { title: 'Vivir cerca del volcán', text: 'Las poblaciones cercanas desarrollaron conocimientos y respuestas propias. La ceniza afectó cultivos, agua y caminos. La historia del desastre no empieza con la erupción: incluye la exposición, la vulnerabilidad y la capacidad de recuperación.' },
    ],
    people: [], sourceIds: ['unam-desastres'],
    evidence: [
      { sourceId: 'unam-desastres', supports: 'Marco sobre desastres, amenazas naturales y vulnerabilidad en México; no confirma por sí solo cada fecha eruptiva.' },
    ],
    documentCodes: ['P1-D04', 'P1-D05', 'P1-D07', 'P1-D08', 'P1-D10'],
  },
  {
    id: 'p1-pueblos-hospital', title: 'Los pueblos-hospital de Vasco de Quiroga', shortTitle: 'Pueblos-hospital de Michoacán', year: 1540, endYear: 1550, date: '1540–1550',
    location: 'Michoacán', states: ['MX-MIC'], coordinates: [-101.8, 19.3], category: 'sociedad', review: 'verificada',
    summary: 'Vasco de Quiroga organizó pueblos con hospitales, escuelas y trabajo comunal en Michoacán. El proyecto combinó protección, evangelización y control del trabajo indígena.',
    chapters: [
      { title: 'Una utopía colonial', text: 'Vasco de Quiroga, obispo de Michoacán, impulsó pueblos-hospital inspirados en ideas humanistas y en la experiencia de las reducciones. Buscaba proteger a los indígenas de abusos, pero también organizar su vida religiosa y laboral bajo autoridad cristiana.' },
      { title: 'Hospital, escuela y comunidad', text: 'Los pueblos combinaban atención de enfermos, enseñanza de oficios y cultivo de tierras comunes. No eran autónomos: dependían de la Iglesia y de la Corona. La experiencia fue importante, aunque limitada y atravesada por jerarquías.' },
      { title: 'Evaluar sin idealizar', text: 'Quiroga es recordado como defensor de los indígenas y como hombre de su tiempo. Su proyecto no eliminó la explotación ni la evangelización forzada. La historia colonial exige sostener ambas dimensiones sin convertir al personaje en mito.' },
    ],
    people: ['vasco-quiroga'], sourceIds: ['inah-grandeza'],
    evidence: [
      { sourceId: 'inah-grandeza', locator: 'capítulo 10', supports: 'Las formas de organización colonial, las órdenes religiosas y los proyectos de congregación.' },
    ],
    documentCodes: ['P1-S06'],
  },
]
