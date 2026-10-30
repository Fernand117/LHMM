import type { HistoricalEvent } from '../types'

// Period 6: México contemporáneo (1982–2025).
// The backbone is the INEHRM chronology 1968–2000, the Secretaría de Salud
// histories, the UNAM disaster study, official public-health releases and
// EL PAÍS coverage of the elections and Otis. Each story records the passage
// that sustains it. Codes without read evidence are sent to research/ledger.json.
export const period6: HistoricalEvent[] = [
  {
    id: 'p6-terremoto-1985', title: '1985: los sismos de septiembre y la organización ciudadana', shortTitle: 'Los sismos de 1985', year: 1985, date: '19–20 de septiembre de 1985',
    location: 'Ciudad de México y centro-sur del país', states: ['MX-CMX', 'MX-JAL', 'MX-MIC', 'MX-GRO'], coordinates: [-99.13, 19.43], category: 'desastres', review: 'verificada',
    summary: 'El 19 de septiembre de 1985, a las 7:19, un sismo de magnitud 8.1 sacudió la Ciudad de México durante 90 segundos. Al día siguiente se registró una segunda sacudida y la respuesta ciudadana desbordó la capacidad del gobierno.',
    chapters: [
      { title: 'El primer sismo', text: 'El sismo del 19 de septiembre de 1985 se registró a las 7:19 horas y duró 90 segundos. La cronología del INEHRM lo consigna con magnitud 8.1 y enumera daños en la capital, en municipios de Jalisco, Michoacán y Guerrero. El estudio de Alcántara-Ayala, basado en EM-DAT, registra 9,500 víctimas fatales y 2,130,204 personas afectadas.' },
      { title: 'La segunda sacudida y la respuesta ciudadana', text: 'El 20 de septiembre, a las 19:30, se registró un segundo sismo de 90 segundos con epicentro en las costas de Michoacán y Guerrero. La magnitud de la destrucción rebasó los servicios de emergencia. Vecinos, brigadas y organizaciones civiles improvisaron rescates, albergues y acopio de víveres.' },
      { title: 'Costureras, damnificados y reconstrucción', text: 'El 25 de septiembre, un grupo de costureras marchó al Palacio Legislativo para denunciar las condiciones de trabajo que el sismo dejó al descubierto. El 27 de septiembre, grupos de damnificados de Tlatelolco, Tepito y la colonia Morelos marcharon a Los Pinos. El 11 de octubre se integró la Comisión Nacional de Reconstrucción y se decretó la expropiación de unos 5,500 predios en 250 hectáreas para beneficio de 200,000 habitantes; el 14 de octubre se instituyó el programa de Renovación Habitacional Popular.' },
    ],
    people: ['de-la-madrid'], sourceIds: ['inehrm-contemporaneo', 'unam-desastres'],
    evidence: [
      { sourceId: 'inehrm-contemporaneo', locator: 'PDF pp. 72–73', supports: 'La hora, magnitud y duración del sismo del 19 de septiembre; el segundo sismo del 20 de septiembre; las marchas de costureras y damnificados; la Comisión Nacional de Reconstrucción, la expropiación de 5,500 predios y el programa de Renovación Habitacional Popular.' },
      { sourceId: 'unam-desastres', locator: 'PDF pp. 6–7, Tabla 1', supports: 'Las 9,500 víctimas fatales, las 2,130,204 personas afectadas y las pérdidas estimadas en 4,104 millones de dólares del sismo del 19 de septiembre de 1985.' },
    ],
    image: 'earthquake',
    imageNote: 'Fotografía de archivo del Hospital General colapsado tras el sismo de 1985 (USGS, dominio público). Documenta la destrucción del 19 de septiembre; no ilustra cada escena narrada.',
    documentCodes: ['P6-H01', 'P6-D01', 'P6-S01'],
  },
  {
    id: 'p6-eleccion-1988', title: '1988: la elección presidencial y la “caída del sistema”', shortTitle: 'La elección de 1988', year: 1988, date: '6–13 de julio de 1988',
    location: 'Ciudad de México', states: ['MX-CMX'], coordinates: [-99.13, 19.43], category: 'politica', review: 'verificada',
    summary: 'La jornada del 6 de julio de 1988 quedó marcada por la interrupción de los resultados y la protesta de la oposición. El 13 de julio se publicaron los resultados oficiales: Salinas 50.36%, Cárdenas 31.2% y Clouthier 17.07%.',
    chapters: [
      { title: 'La jornada y la interrupción', text: 'El 6 de julio de 1988 se celebraron las elecciones presidenciales. Por la noche, el secretario de Gobernación, Manuel Bartlett Díaz, informó de “la caída del sistema”, que suspendía la difusión de resultados hasta las diez de la noche. Rosario Ibarra de Piedra, Cuauhtémoc Cárdenas y Manuel J. Clouthier acudieron a Gobernación para entregar un documento titulado “Llamado a la legalidad”.' },
      { title: 'El triunfo proclamado', text: 'En la madrugada del 7 de julio, el líder nacional del PRI, Jorge de la Vega, proclamó el triunfo “contundente, legal e inobjetable” de Carlos Salinas de Gortari. Más tarde, Gobernación atribuyó el retraso a las condiciones climatológicas. Clouthier calificó los comicios como “el fraude más burdo en la historia de México”.' },
      { title: 'Los resultados oficiales', text: 'El 13 de julio se publicaron los resultados oficiales: Salinas 50.36%, Cárdenas 31.2% y Clouthier 17.07%. La oposición impugnó la elección y organizó protestas, pero el Congreso declaró válido el resultado. La desconfianza en las instituciones electorales se convirtió en el motor de las reformas de los años siguientes.' },
    ],
    people: ['salinas', 'cardenas', 'clouthier'], sourceIds: ['inehrm-contemporaneo'],
    evidence: [
      { sourceId: 'inehrm-contemporaneo', locator: 'PDF pp. 88–89', supports: 'La “caída del sistema” del 6 de julio, el “Llamado a la legalidad”, la proclamación del triunfo de Salinas, la explicación oficial del retraso, la acusación de Clouthier y los porcentajes oficiales del 13 de julio.' },
    ],
    documentCodes: ['P6-H02', 'P6-P01'],
  },
  {
    id: 'p6-prd-1989', title: '1989: la fundación del Partido de la Revolución Democrática', shortTitle: 'La fundación del PRD', year: 1989, date: '5–26 de mayo de 1989',
    location: 'Ciudad de México', states: ['MX-CMX'], coordinates: [-99.13, 19.43], category: 'politica', review: 'verificada',
    summary: 'El 5 de mayo de 1989 se fundó el Partido de la Revolución Democrática con la confluencia de la Corriente Democrática, el PMS, la Asociación Cívica Nacional Revolucionaria y Punto Crítico. Recibió su registro el 26 de mayo.',
    chapters: [
      { title: 'La confluencia de la izquierda', text: 'El PRD se fundó el 5 de mayo de 1989. La cronología del INEHRM enumera entre sus organizaciones fundadoras a la Corriente Democrática, el Partido Mexicano Socialista, la Asociación Cívica Nacional Revolucionaria y la Organización Revolucionaria Punto Crítico. La fundación recogía el descontento dejado por la elección de 1988.' },
      { title: 'El registro', text: 'El 26 de mayo de 1989 el PRD recibió su registro como partido político nacional. Con ello quedó habilitado para competir en las elecciones federales y para recibir financiamiento público. La nueva fuerza política se colocó a la izquierda del PRI y del PAN.' },
      { title: 'Un partido marcado por 1988', text: 'El PRD nació con una fuerte carga de impugnación del sistema electoral. Su primer gran desafío fue convertir la protesta de 1988 en una estructura partidista capaz de ganar elecciones. Lo lograría de forma parcial en 1997, cuando Cuauhtémoc Cárdenas ganó la Jefatura de Gobierno del Distrito Federal.' },
    ],
    people: ['cardenas'], sourceIds: ['inehrm-contemporaneo'],
    evidence: [
      { sourceId: 'inehrm-contemporaneo', locator: 'PDF p. 92', supports: 'La fundación del PRD el 5 de mayo de 1989, sus organizaciones fundadoras y la obtención del registro el 26 de mayo de 1989.' },
    ],
    documentCodes: ['P6-P02'],
  },
  {
    id: 'p6-ife-1990', title: '1990: la creación del Instituto Federal Electoral', shortTitle: 'La creación del IFE', year: 1990, date: '15 de agosto – 15 de octubre de 1990',
    location: 'Ciudad de México', states: ['MX-CMX'], coordinates: [-99.13, 19.43], category: 'politica', review: 'verificada',
    summary: 'El COFIPE, promulgado el 15 de agosto de 1990, creó el Instituto Federal Electoral en sustitución de la Comisión Federal Electoral y estableció el Tribunal Federal Electoral. El IFE inició labores el 15 de octubre.',
    chapters: [
      { title: 'El COFIPE', text: 'El 15 de agosto de 1990 se promulgó el Código Federal de Instituciones y Procedimientos Electorales. El código configuró el Instituto Federal Electoral como organismo autónomo y sustituyó a la Comisión Federal Electoral. También instauró el Tribunal Federal Electoral.' },
      { title: 'El nuevo organismo', text: 'El IFE nació con la tarea de organizar las elecciones federales y de emitir los resultados. Su creación respondió a la crisis de confianza de 1988 y a la presión de la oposición por separar la organización electoral del gobierno. El 15 de octubre de 1990 inició oficialmente sus labores.' },
      { title: 'Una autonomía incompleta', text: 'La reforma de 1990 fue un primer paso, pero el Ejecutivo conservó influencia sobre el instituto. La autonomía plena llegaría con las reformas de 1996, que sacaron al Tribunal Electoral del ámbito administrativo y reforzaron las atribuciones del IFE. La construcción de una autoridad electoral creíble fue un proceso gradual.' },
    ],
    people: [], sourceIds: ['inehrm-contemporaneo'],
    evidence: [
      { sourceId: 'inehrm-contemporaneo', locator: 'PDF pp. 95–96', supports: 'La promulgación del COFIPE el 15 de agosto de 1990, la creación del IFE en sustitución de la Comisión Federal Electoral, la instauración del TRIFE y el inicio de labores del IFE el 15 de octubre.' },
    ],
    documentCodes: ['P6-P03'],
  },
  {
    id: 'p6-tlcan-ezln-1994', title: '1994: el TLCAN y el levantamiento del EZLN', shortTitle: 'TLCAN y EZLN', year: 1994, date: '1 de enero de 1994',
    location: 'Chiapas y territorio nacional', states: ['MX-CHP'], coordinates: [-92.64, 16.74], category: 'politica', review: 'verificada',
    summary: 'El 1 de enero de 1994 entró en vigor el Tratado de Libre Comercio con Estados Unidos y Canadá. Ese mismo día, el EZLN se levantó en armas en Chiapas, ocupó municipios y declaró la guerra al Estado mexicano.',
    chapters: [
      { title: 'El TLCAN', text: 'El Tratado de Libre Comercio de América del Norte entró en vigor el 1 de enero de 1994. México, Estados Unidos y Canadá pusieron en marcha un mercado común con reglas para el comercio y la inversión. El acuerdo coronaba una década de apertura económica.' },
      { title: 'El levantamiento', text: 'También el 1 de enero, el Ejército Zapatista de Liberación Nacional se levantó en armas en Chiapas y ocupó diversos municipios. El grupo declaró la guerra al Estado mexicano. Al día siguiente atacó cuarteles en Rancho Nuevo y el ejército sitió Ocosingo; el 4 de enero recuperó las cabeceras municipales, aunque los enfrentamientos continuaron.' },
      { title: 'El cese al fuego', text: 'El 5 de enero el gobierno federal ofreció un cese al fuego a cambio de la deposición y entrega de armas, la liberación de rehenes, el fin de las hostilidades y la identificación de los dirigentes. El conflicto no se resolvió militarmente y abrió una larga negociación política sobre derechos indígenas y autonomía.' },
    ],
    people: ['marcos', 'salinas'], sourceIds: ['inehrm-contemporaneo'],
    evidence: [
      { sourceId: 'inehrm-contemporaneo', locator: 'PDF p. 104', supports: 'La entrada en vigor del TLCAN el 1 de enero de 1994, el levantamiento del EZLN y la ocupación de municipios, los ataques del 2 de enero, la recuperación de cabeceras el 4 de enero y la oferta de cese al fuego del 5 de enero.' },
    ],
    documentCodes: ['P6-H03', 'P6-S02'],
  },
  {
    id: 'p6-colosio-1994', title: '1994: el asesinato de Luis Donaldo Colosio', shortTitle: 'El asesinato de Colosio', year: 1994, date: '23–29 de marzo de 1994',
    location: 'Tijuana, Baja California', states: ['MX-BCN'], coordinates: [-117.03, 32.51], category: 'politica', review: 'verificada',
    summary: 'Luis Donaldo Colosio, candidato presidencial del PRI, fue baleado el 23 de marzo de 1994 durante un mitin en Lomas Taurinas, Tijuana. Murió a las pocas horas y el PRI designó a Ernesto Zedillo como su sustituto.',
    chapters: [
      { title: 'La campaña', text: 'Colosio registró formalmente su candidatura el 4 de marzo de 1994. El 6 de marzo, en el 65 aniversario del PRI, rindió protesta como abanderado en el Monumento a la Revolución y pronunció un discurso interpretado como un distanciamiento de Salinas.' },
      { title: 'El atentado', text: 'El 23 de marzo, durante un mitin en Lomas Taurinas, Baja California, Colosio fue baleado. Murió a las pocas horas. El 24 de marzo el presidente anunció la creación de una subprocuraduría especial para investigar el caso.' },
      { title: 'La sucesión', text: 'El 29 de marzo, tras la muerte del candidato, el PRI eligió a Ernesto Zedillo como su sustituto. El asesinato conmocionó al país y se sumó a la crisis política de 1994. Las investigaciones no cerraron todas las preguntas sobre el crimen y la impunidad persistió.' },
    ],
    people: ['colosio-persona', 'zedillo', 'salinas'], sourceIds: ['inehrm-contemporaneo'],
    evidence: [
      { sourceId: 'inehrm-contemporaneo', locator: 'PDF p. 107', supports: 'El registro de la candidatura de Colosio el 4 de marzo, su discurso del 6 de marzo, el atentado del 23 de marzo en Lomas Taurinas, la subprocuraduría especial y la designación de Zedillo el 29 de marzo.' },
    ],
    documentCodes: ['P6-H04'],
  },
  {
    id: 'p6-crisis-1994', title: '1994–1995: la devaluación y el “error de diciembre”', shortTitle: 'La crisis de 1994', year: 1994, endYear: 1995, date: '18–22 de diciembre de 1994',
    location: 'Ciudad de México y mercados internacionales', states: ['MX-CMX'], coordinates: [-99.13, 19.43], category: 'politica', review: 'verificada',
    summary: 'En diciembre de 1994 la caída de las reservas y la fuga de capitales llevaron a ampliar la banda cambiaria y a una devaluación. El peso se desplomó, las tasas de interés se dispararon y estalló la crisis conocida como “error de diciembre”.',
    chapters: [
      { title: 'La presión sobre el peso', text: 'El 18 de diciembre de 1994 la Bolsa Mexicana de Valores cayó y el peso se acercó al límite de su banda de flotación. Al día siguiente, el EZLN anunció la ocupación de 38 localidades chiapanecas y los inversionistas retiraron divisas. El Pacto para el Bienestar, la Estabilidad y el Crecimiento decidió ampliar la banda en 53 centavos, equivalentes a una devaluación de 15 por ciento.' },
      { title: 'El estallido', text: 'El 20 de diciembre estalló la crisis. Los bancos elevaron las tasas de interés de los créditos hasta 130%, y las deudas se incrementaron sin relación con el valor de las propiedades. El 21 de diciembre el Banco de México se retiró del mercado y el dólar se cotizó en 5.75 pesos; al día siguiente la paridad se fijó en 6.00 pesos.' },
      { title: 'El ajuste', text: 'El 29 de diciembre el presidente adelantó los lineamientos del Programa de Emergencia Económica, orientado a reducir el déficit en cuenta corriente y evitar una espiral inflacionaria. En enero de 1995 el gobierno anunció que recurriría al FMI para obtener 14,000 millones de dólares. La crisis marcó el fin de un modelo de crecimiento y dejó una larga resaca social.' },
    ],
    people: ['zedillo', 'salinas'], sourceIds: ['inehrm-contemporaneo'],
    evidence: [
      { sourceId: 'inehrm-contemporaneo', locator: 'PDF pp. 113–114', supports: 'La caída de la bolsa y la ampliación de la banda cambiaria el 18–19 de diciembre, la devaluación de 15%, las tasas de 130%, las paridades de 5.75 y 6.00 pesos, el Programa de Emergencia Económica y la solicitud de 14,000 millones de dólares al FMI.' },
    ],
    documentCodes: ['P6-H04'],
  },
  {
    id: 'p6-reforma-1996', title: '1996: la reforma electoral y la autonomía del IFE', shortTitle: 'La reforma de 1996', year: 1996, date: '22 de agosto – 22 de noviembre de 1996',
    location: 'Ciudad de México', states: ['MX-CMX'], coordinates: [-99.13, 19.43], category: 'politica', review: 'verificada',
    summary: 'La reforma constitucional de agosto de 1996 estableció la afiliación individual a los partidos, el predominio del financiamiento público y la elección directa del Jefe de Gobierno del Distrito Federal. La reforma al COFIPE de noviembre fijó 128 senadores y un tope de 300 diputados por partido.',
    chapters: [
      { title: 'La reforma constitucional', text: 'El 22 de agosto de 1996 se publicó en el Diario Oficial la reforma constitucional que estableció la afiliación individual a los partidos y el predominio del financiamiento público sobre el privado. También dispuso que el Tribunal Federal Electoral formara parte del Poder Judicial, la elección directa del Jefe de Gobierno del Distrito Federal a partir de 1997, la de los delegados en 2000 y el voto desde el extranjero.' },
      { title: 'La reforma legal', text: 'El 22 de noviembre se publicó la reforma al COFIPE. La Cámara de Senadores quedó integrada por 128 miembros: dos de mayoría relativa por entidad, uno para la primera minoría y 32 por representación proporcional. Ningún partido podría tener más de 300 diputados por ambos principios.' },
      { title: 'El nuevo sistema', text: 'La reforma de 1996 buscó dar credibilidad a las elecciones y equilibrar la competencia. La elección directa de la Jefatura de Gobierno capitalina y el voto de los mexicanos en el exterior ampliaron el espacio político. El IFE ganó autonomía, aunque su consolidación dependió de los años siguientes.' },
    ],
    people: ['zedillo'], sourceIds: ['inehrm-contemporaneo'],
    evidence: [
      { sourceId: 'inehrm-contemporaneo', locator: 'PDF pp. 127–129', supports: 'La reforma constitucional del 22 de agosto de 1996 y la reforma al COFIPE del 22 de noviembre, con la afiliación individual, el financiamiento público, el TRIFE en el Poder Judicial, la elección directa del Jefe de Gobierno, los 128 senadores y el tope de 300 diputados.' },
    ],
    documentCodes: ['P6-P04'],
  },
  {
    id: 'p6-1997-mayoria', title: '1997: el PRI pierde la mayoría absoluta y Cárdenas gana la capital', shortTitle: 'La elección de 1997', year: 1997, date: '6 de julio – 5 de diciembre de 1997',
    location: 'Ciudad de México', states: ['MX-CMX'], coordinates: [-99.13, 19.43], category: 'politica', review: 'verificada',
    summary: 'El 6 de julio de 1997 el PRI perdió por primera vez la mayoría absoluta en la Cámara de Diputados. Cuauhtémoc Cárdenas ganó la primera elección de Jefe de Gobierno del Distrito Federal con 47.11% de los votos.',
    chapters: [
      { title: 'La jornada', text: 'El 6 de julio de 1997 se celebraron las primeras elecciones para Jefe de Gobierno del Distrito Federal y se renovó la Legislatura. Cuauhtémoc Cárdenas, candidato del PRD, ganó la capital con 47.11% de los votos. En la Cámara de Diputados, el PRI perdió la mayoría absoluta por primera vez.' },
      { title: 'Un nuevo equilibrio', text: 'El resultado cambió la relación entre el Ejecutivo y el Legislativo. La oposición ganó peso y el gobierno de Zedillo tuvo que negociar reformas. La elección capitalina convirtió a Cárdenas en el primer Jefe de Gobierno electo por los habitantes de la ciudad.' },
      { title: 'La toma de posesión', text: 'Cárdenas tomó posesión el 5 de diciembre de 1997. La elección de 1997 fue un paso decisivo hacia la alternancia presidencial de 2000. También mostró que el sistema electoral reformado podía producir resultados adversos al partido en el gobierno.' },
    ],
    people: ['cardenas'], sourceIds: ['inehrm-contemporaneo'],
    evidence: [
      { sourceId: 'inehrm-contemporaneo', locator: 'PDF pp. 131–132', supports: 'La elección del 6 de julio de 1997, el triunfo de Cárdenas con 47.11%, la pérdida de la mayoría absoluta del PRI y la toma de posesión del 5 de diciembre.' },
    ],
    documentCodes: ['P6-P05'],
  },
  {
    id: 'p6-acteal-1997', title: '1997: la masacre de Acteal', shortTitle: 'La masacre de Acteal', year: 1997, date: '22 de diciembre de 1997',
    location: 'Acteal, San Pedro Chenalhó, Chiapas', states: ['MX-CHP'], coordinates: [-92.49, 16.99], category: 'seguridad', review: 'verificada',
    summary: 'El 22 de diciembre de 1997, un grupo armado mató a 45 indígenas en Acteal, municipio de San Pedro Chenalhó, Chiapas. La mayoría eran mujeres y niños. El caso provocó la destitución del secretario de Gobernación y la salida del gobernador.',
    chapters: [
      { title: 'El contexto', text: 'Acteal se encontraba en una región de conflicto entre comunidades indígenas y grupos armados vinculados al conflicto chiapaneco. La tensión había aumentado desde el levantamiento zapatista de 1994 y la militarización de la zona.' },
      { title: 'La masacre', text: 'El 22 de diciembre de 1997, un grupo armado irrumpió en la comunidad de Acteal y mató a 45 indígenas, en su mayoría mujeres y niños. Las víctimas eran desplazadas que se refugiaban en la iglesia local. La violencia generó indignación nacional e internacional.' },
      { title: 'Las consecuencias', text: 'El 4 de enero de 1998, Emilio Chuayffet fue destituido como secretario de Gobernación. Tres días después se concedió licencia al gobernador de Chiapas, Julio César Rodríguez Fierro, sustituido por Roberto Albores Guillén. Las investigaciones y juicios se prolongaron durante años y dejaron preguntas sin resolver.' },
    ],
    people: [], sourceIds: ['inehrm-contemporaneo'],
    evidence: [
      { sourceId: 'inehrm-contemporaneo', locator: 'PDF p. 132', supports: 'La masacre de 45 indígenas en Acteal el 22 de diciembre de 1997, la mayoría mujeres y niños, la destitución de Chuayffet y la licencia del gobernador de Chiapas.' },
    ],
    documentCodes: ['P6-S03'],
  },
  {
    id: 'p6-paulina-1997', title: '1997: el huracán Paulina y la devastación de Guerrero y Oaxaca', shortTitle: 'El huracán Paulina', year: 1997, date: '8–9 de octubre de 1997',
    location: 'Guerrero y Oaxaca', states: ['MX-GRO', 'MX-OAX'], coordinates: [-99.88, 16.85], category: 'desastres', review: 'verificada',
    summary: 'El huracán Paulina golpeó Guerrero y Oaxaca el 9 de octubre de 1997. La cronología del INEHRM registra casi 400 muertos y daños por 80,000 millones de pesos; el estudio de desastres contabiliza 800,200 personas afectadas.',
    chapters: [
      { title: 'El impacto', text: 'El huracán Paulina ocasionó severos daños a su paso por Guerrero y Oaxaca. La cronología del INEHRM fecha el impacto el 9 de octubre de 1997 y registra la muerte de casi 400 personas, además de daños por 80,000 millones de pesos.' },
      { title: 'Acapulco y la costa', text: 'El puerto de Acapulco y las zonas costeras sufrieron inundaciones, deslaves y destrucción de viviendas e infraestructura. La emergencia rebasó la capacidad de respuesta local y obligó a movilizar recursos federales. El turismo y la economía regional tardaron en recuperarse.' },
      { title: 'El registro del desastre', text: 'La base EM-DAT, citada por Alcántara-Ayala, registra 800,200 personas afectadas por Paulina. La cifra muestra la escala social del desastre, más allá del número de víctimas mortales. La reconstrucción y la prevención quedaron como tareas pendientes.' },
    ],
    people: [], sourceIds: ['inehrm-contemporaneo', 'unam-desastres'],
    evidence: [
      { sourceId: 'inehrm-contemporaneo', locator: 'PDF p. 132', supports: 'El paso del huracán Paulina por Guerrero y Oaxaca el 9 de octubre de 1997, casi 400 muertos y daños por 80,000 millones de pesos.' },
      { sourceId: 'unam-desastres', locator: 'PDF p. 7, Tabla 1', supports: 'Las 800,200 personas afectadas por el huracán Paulina, registradas por EM-DAT.' },
    ],
    documentCodes: ['P6-D03'],
  },
  {
    id: 'p6-alternancia-2000', title: '2000: la alternancia presidencial y el triunfo de Vicente Fox', shortTitle: 'La alternancia de 2000', year: 2000, date: '2 de julio – 2 de agosto de 2000',
    location: 'Ciudad de México', states: ['MX-CMX'], coordinates: [-99.13, 19.43], category: 'politica', review: 'verificada',
    summary: 'El 2 de julio de 2000, Vicente Fox, candidato del PAN, derrotó al PRI en la elección presidencial. El 2 de agosto recibió la acreditación del Tribunal Electoral del Poder Judicial de la Federación como presidente electo.',
    chapters: [
      { title: 'La derrota del PRI', text: 'El 2 de julio de 2000, los resultados electorales arrojaron la derrota del PRI en la elección presidencial frente a Vicente Fox. Fue la primera vez que el partido fundado en 1929 perdía la Presidencia de la República. En el Distrito Federal, Andrés Manuel López Obrador ganó la Jefatura de Gobierno.' },
      { title: 'La acreditación', text: 'El 2 de agosto de 2000, Fox recibió la acreditación del Tribunal Electoral del Poder Judicial de la Federación como presidente electo. La transición se realizó dentro de las instituciones y puso fin a décadas de hegemonía priista en el Ejecutivo federal.' },
      { title: 'El significado', text: 'La alternancia no cambió de inmediato las estructuras del Estado, pero demostró que el sistema electoral podía producir un cambio de partido en la Presidencia. Fox gobernó entre 2000 y 2006. La competencia política se consolidó, aunque la desigualdad y la violencia siguieron marcando el país.' },
    ],
    people: ['fox', 'labastida'], sourceIds: ['inehrm-contemporaneo'],
    evidence: [
      { sourceId: 'inehrm-contemporaneo', locator: 'PDF p. 142', supports: 'La derrota del PRI frente a Vicente Fox el 2 de julio de 2000, el triunfo de López Obrador en el Distrito Federal y la acreditación de Fox por el Tribunal Electoral el 2 de agosto.' },
    ],
    documentCodes: ['P6-H05', 'P6-P06'],
  },
  {
    id: 'p6-eleccion-2006', title: '2006: la elección presidencial más cerrada y el fallo del Tribunal', shortTitle: 'La elección de 2006', year: 2006, date: '2 de julio – 5 de septiembre de 2006',
    location: 'Ciudad de México', states: ['MX-CMX'], coordinates: [-99.13, 19.43], category: 'politica', review: 'verificada',
    summary: 'La elección del 2 de julio de 2006 fue muy cerrada. El 5 de septiembre, el Tribunal Electoral declaró presidente electo a Felipe Calderón por una ventaja de 233,831 votos sobre Andrés Manuel López Obrador.',
    chapters: [
      { title: 'La jornada', text: 'El 2 de julio de 2006 se celebró una elección presidencial muy competida entre Felipe Calderón, Andrés Manuel López Obrador y Roberto Madrazo. Los resultados preliminares mostraron una diferencia mínima y la incertidumbre se prolongó durante semanas.' },
      { title: 'El recuento y la impugnación', text: 'López Obrador impugnó la elección y exigió el recuento voto por voto. Sus partidarios mantuvieron un plantón en el centro de la Ciudad de México. El Tribunal Electoral revisó las irregularidades alegadas y analizó la validez de la jornada.' },
      { title: 'El fallo', text: 'El 5 de septiembre de 2006, el Tribunal Electoral declaró presidente electo a Felipe Calderón. La ventaja sobre López Obrador fue de 233,831 votos. Los siete magistrados concluyeron que no había una violación “importante y generalizada” que anulara la elección. El resultado fue aceptado por las instituciones, pero la legitimidad del gobierno quedó cuestionada por amplios sectores.' },
    ],
    people: ['calderon', 'lopez-obrador'], sourceIds: ['elpais-2006'],
    evidence: [
      { sourceId: 'elpais-2006', locator: '5 de septiembre de 2006', supports: 'La declaración de Felipe Calderón como presidente electo, la ventaja de 233,831 votos sobre López Obrador y la conclusión de los siete magistrados de que no hubo una violación “importante y generalizada”.' },
    ],
    documentCodes: ['P6-P07'],
  },
  {
    id: 'p6-eleccion-2018', title: '2018: el triunfo de López Obrador y la nueva alternancia', shortTitle: 'La elección de 2018', year: 2018, date: '1 de julio de 2018',
    location: 'Ciudad de México', states: ['MX-CMX'], coordinates: [-99.13, 19.43], category: 'politica', review: 'verificada',
    summary: 'El 1 de julio de 2018, Andrés Manuel López Obrador ganó la Presidencia con cerca de 53% de los votos según el conteo rápido, unos 30 puntos por encima de Ricardo Anaya y José Antonio Meade.',
    chapters: [
      { title: 'La jornada', text: 'El 1 de julio de 2018, Andrés Manuel López Obrador, candidato de la coalición Juntos Haremos Historia, ganó la elección presidencial. El conteo rápido le atribuyó cerca de 53% de los votos, con una ventaja de unos 30 puntos sobre Ricardo Anaya y José Antonio Meade.' },
      { title: 'El fin del ciclo priista', text: 'El resultado devolvió la Presidencia a la izquierda y puso fin a un periodo de gobiernos del PAN y del PRI. López Obrador había competido en 2006, 2012 y 2018. Su triunfo se apoyó en el descontento con la corrupción, la violencia y la desigualdad.' },
      { title: 'El nuevo gobierno', text: 'López Obrador asumió la Presidencia el 1 de diciembre de 2018. Su gobierno impulsó programas sociales, obras de infraestructura y una retórica de austeridad y combate a la corrupción. La relación con la prensa y con los organismos autónomos se volvió conflictiva.' },
    ],
    people: ['lopez-obrador'], sourceIds: ['elpais-2018'],
    evidence: [
      { sourceId: 'elpais-2018', locator: '2 de julio de 2018', supports: 'El triunfo de López Obrador con cerca de 53% en el conteo rápido y su ventaja de unos 30 puntos sobre Anaya y Meade.' },
    ],
    documentCodes: ['P6-H07'],
  },
  {
    id: 'p6-eleccion-2024', title: '2024: Claudia Sheinbaum, primera presidenta de México', shortTitle: 'La elección de 2024', year: 2024, date: '2 de junio de 2024',
    location: 'Ciudad de México', states: ['MX-CMX'], coordinates: [-99.13, 19.43], category: 'politica', review: 'verificada',
    summary: 'El 2 de junio de 2024, Claudia Sheinbaum ganó la Presidencia con 58.8% de los votos cuando se había contado más de 80% de las casillas. Xóchitl Gálvez obtuvo 28.2% y Jorge Álvarez Máynez 10.5%.',
    chapters: [
      { title: 'La jornada', text: 'El 2 de junio de 2024, Claudia Sheinbaum, candidata de la coalición encabezada por Morena, ganó la elección presidencial. Con más de 80% de las casillas contadas, obtuvo 58.8% de los votos. La participación fue de alrededor de 61%.' },
      { title: 'Los resultados', text: 'Xóchitl Gálvez, de la coalición opositora, obtuvo 28.2% de los votos, y Jorge Álvarez Máynez, de Movimiento Ciudadano, 10.5%. La coalición de Sheinbaum logró mayoría en la Cámara de Diputados y mayoría simple en el Senado, además de ganar 24 de las 32 entidades.' },
      { title: 'La primera presidenta', text: 'Sheinbaum se convirtió en la primera mujer presidenta de México. Su triunfo dio continuidad al proyecto de López Obrador y concentró el poder en el partido gobernante. La oposición quedó reducida y el nuevo gobierno enfrentó retos de seguridad, energía y relación con Estados Unidos.' },
    ],
    people: ['sheinbaum', 'xochitl-galvez', 'alvarez-maynez', 'lopez-obrador'], sourceIds: ['elpais-2024'],
    evidence: [
      { sourceId: 'elpais-2024', locator: '3 de junio de 2024', supports: 'El triunfo de Sheinbaum con 58.8% de los votos con más de 80% de las casillas contadas, la participación de alrededor de 61%, los resultados de Gálvez y Máynez, la mayoría legislativa y los 24 de 32 estados ganados.' },
    ],
    documentCodes: ['P6-H09', 'P6-P09'],
  },
  {
    id: 'p6-judicial-2025', title: '2025: la primera elección popular del Poder Judicial', shortTitle: 'La elección judicial de 2025', year: 2025, date: '1 de junio de 2025',
    location: 'Territorio nacional', states: ['MX-CMX'], coordinates: [-99.13, 19.43], category: 'politica', review: 'verificada',
    summary: 'El 1 de junio de 2025 México celebró por primera vez elecciones para elegir a 2,681 impartidores de justicia. La participación fue de 13%, unos 13 millones de votantes. Hugo Aguilar obtuvo 6.2 millones de apoyos y quedó perfilado para presidir la Suprema Corte.',
    chapters: [
      { title: 'Una elección sin precedentes', text: 'El 1 de junio de 2025, la ciudadanía votó para elegir a 2,681 impartidores de justicia entre el nivel federal y estatal. Era la primera elección popular de jueces y magistrados en la historia del país. El Instituto Nacional Electoral confirmó una participación de 13%, equivalente a unos 13 millones de votantes.' },
      { title: 'Los resultados', text: 'En la Suprema Corte, el abogado mixteco Hugo Aguilar consiguió el mayor número de apoyos, con 6.2 millones de votos, y quedó perfilado como el próximo presidente del tribunal. Los resultados se distribuyeron entre candidatos de distintas corrientes y estados.' },
      { title: 'La transición institucional', text: 'La elección forma parte de una reforma que transformó la composición y la legitimidad del Poder Judicial. El proceso estuvo marcado por la controversia sobre la independencia judicial y por una participación baja. La implementación de los resultados y la coordinación entre los nuevos órganos serán decisivas para el funcionamiento del sistema.' },
    ],
    people: [], sourceIds: ['elpais-2025'],
    evidence: [
      { sourceId: 'elpais-2025', locator: '6 de junio de 2025', supports: 'La elección de 2,681 impartidores de justicia el 1 de junio de 2025, la participación de 13% y 13 millones de votantes, y los 6.2 millones de apoyos de Hugo Aguilar.' },
    ],
    documentCodes: ['P6-H10', 'P6-P10'],
  },
  {
    id: 'p6-sida-1981', title: '1981: el primer caso documentado de sida en México', shortTitle: 'El primer caso de sida', year: 1981, date: '1 de diciembre de 1981',
    location: 'Ciudad de México', states: ['MX-CMX'], coordinates: [-99.13, 19.43], category: 'salud', review: 'corregida',
    summary: 'El 1 de diciembre de 1981 se registró en México el primer caso documentado de síndrome de inmunodeficiencia adquirida. En 1987, una reforma a la Ley General de Salud incorporó el sida a la vigilancia epidemiológica.',
    chapters: [
      { title: 'El primer registro', text: 'La cronología del INEHRM registra el 1 de diciembre de 1981 como la fecha del primer caso documentado de sida en México. La aparición de la enfermedad planteó un desafío a un sistema de salud que todavía no contaba con tratamientos eficaces ni con una respuesta institucional específica.' },
      { title: 'La respuesta inicial', text: 'Durante los primeros años, la información sobre el sida circuló con desconfianza y estigma. Las organizaciones civiles y los profesionales de la salud exigieron atención, prevención y respeto a los derechos de las personas afectadas. La epidemia mostró las limitaciones de la vigilancia y de la educación sexual.' },
      { title: 'La vigilancia epidemiológica', text: 'El 6 de abril de 1987, el Ejecutivo envió al Congreso reformas a la Ley General de Salud para considerar el sida como una enfermedad sujeta a vigilancia epidemiológica. La medida formalizó el registro de casos y la intervención del Estado. La lucha contra el sida continuó con altibajos en las décadas siguientes.' },
    ],
    people: [], sourceIds: ['inehrm-contemporaneo'],
    evidence: [
      { sourceId: 'inehrm-contemporaneo', locator: 'PDF p. 52', supports: 'El primer caso documentado de sida en México el 1 de diciembre de 1981.' },
      { sourceId: 'inehrm-contemporaneo', locator: 'PDF p. 81', supports: 'La reforma enviada al Congreso el 6 de abril de 1987 para incorporar el sida a la vigilancia epidemiológica.' },
    ],
    editorialNotes: ['El directorio fechaba los primeros casos en 1983. La cronología del INEHRM registra el primer caso documentado el 1 de diciembre de 1981; se corrige la fecha y se conserva P6-M01 como rastro interno.'],
    documentCodes: ['P6-M01'],
  },
  {
    id: 'p6-vacunacion-universal-1991', title: '1991: el Programa de Vacunación Universal', shortTitle: 'La vacunación universal', year: 1991, date: '22 de enero de 1991',
    location: 'Territorio nacional', states: ['MX-CMX'], coordinates: [-99.13, 19.43], category: 'salud', review: 'verificada',
    summary: 'El Programa de Vacunación Universal se creó por decreto presidencial el 22 de enero de 1991. Su meta era que todos los niños menores de cinco años contaran con el esquema básico de ocho dosis.',
    chapters: [
      { title: 'El decreto', text: 'El Programa de Vacunación Universal se creó por decreto presidencial el 22 de enero de 1991. El Consejo Nacional de Vacunación quedó encargado de coordinar las acciones de las instituciones públicas, sociales y privadas. El programa se dirigió a la protección de la salud de la niñez.' },
      { title: 'La meta de ocho dosis', text: 'El objetivo era que, para 1992, todos los niños menores de cinco años contaran con el esquema básico de vacunación: tres dosis de Sabin, tres de DPT, una de BCG y una de sarampión. La meta exigía ampliar la cobertura y mantener la cadena de frío en todo el país.' },
      { title: 'Los resultados', text: 'El programa se apoyó en las Semanas Nacionales de Vacunación y en la organización comunitaria. México había registrado el último caso de poliomielitis en 1990, en Tomatlán, Jalisco, y en 1991 registró el último caso de difteria en Lázaro Cárdenas, Michoacán. La vacunación universal se convirtió en una política permanente.' },
    ],
    people: [], sourceIds: ['salud-vacunas'],
    evidence: [
      { sourceId: 'salud-vacunas', locator: 'PDF pp. 3–4', supports: 'La creación del Programa de Vacunación Universal por decreto presidencial el 22 de enero de 1991, la meta de ocho dosis para 1992, el último caso de poliomielitis en Tomatlán en 1990 y el último de difteria en 1991.' },
    ],
    documentCodes: ['P6-M03'],
  },
  {
    id: 'p6-seguro-popular-2003', title: '2003: la creación del Seguro Popular', shortTitle: 'El Seguro Popular', year: 2003, date: '2003',
    location: 'Territorio nacional', states: ['MX-CMX'], coordinates: [-99.13, 19.43], category: 'salud', review: 'verificada',
    summary: 'La reforma financiera a la Ley General de Salud de 2003 creó el Sistema de Protección Social en Salud, conocido como Seguro Popular. Su objetivo era reducir el gasto de bolsillo y evitar gastos catastróficos en la población más pobre.',
    chapters: [
      { title: 'La reforma', text: 'En 2003 se llevó a cabo una reforma financiera a la Ley General de Salud encabezada por el secretario Julio Frenk. La reforma creó el Sistema de Protección Social en Salud, cuyo brazo operativo fue el Seguro Popular. El nuevo esquema buscaba afiliar a la población sin seguridad social.' },
      { title: 'El objetivo', text: 'El Seguro Popular pretendía reducir el gasto de bolsillo y evitar los gastos catastróficos de la población más pobre y vulnerable. Antes de su creación, el gasto anual en salud de una familia equivalía a 52% de sus necesidades clínicas y de medicamentos; con el programa se redujo a 49%, un impacto limitado en proporción a los recursos invertidos.' },
      { title: 'Los límites', text: 'La reforma incrementó el financiamiento, pero no resolvió la falta de transparencia ni la corrupción en el manejo de los recursos. El impacto del Seguro Popular fue menor al esperado y su operación enfrentó críticas. En 2020 fue sustituido por el Instituto de Salud para el Bienestar.' },
    ],
    people: [], sourceIds: ['salud-constitucion'],
    evidence: [
      { sourceId: 'salud-constitucion', locator: 'PDF pp. 417, 423–424', supports: 'La reforma financiera de 2003 a la Ley General de Salud, la creación del Sistema de Protección Social en Salud y del Seguro Popular, sus objetivos y la reducción del gasto de bolsillo de 52% a 49%.' },
    ],
    documentCodes: ['P6-M04'],
  },
  {
    id: 'p6-h1n1-2009', title: '2009: la pandemia de influenza A(H1N1)', shortTitle: 'La influenza de 2009', year: 2009, date: 'abril de 2009 – 2010',
    location: 'Territorio nacional', states: ['MX-CMX'], coordinates: [-99.13, 19.43], category: 'salud', review: 'verificada',
    summary: 'En 2009 México enfrentó una nueva cepa de influenza A(H1N1) capaz de transmitirse entre personas. El país contaba con un Plan Nacional de Preparación y Respuesta desde 2006 y aplicó medidas de aislamiento, higiene y vigilancia.',
    chapters: [
      { title: 'La nueva cepa', text: 'En 2009 apareció una nueva cepa de influenza A(H1N1) capaz de transmitirse fácilmente entre personas y con potencial de causar enfermedad grave. La pandemia demandó acciones extraordinarias de salud. México ya contaba con un Plan Nacional de Preparación y Respuesta diseñado desde 2006.' },
      { title: 'La respuesta', text: 'El plan establecía coordinación, vigilancia epidemiológica, atención médica, difusión y reserva estratégica de antivirales y equipo. Durante la emergencia se promovieron la etiqueta del estornudo, el lavado de manos, el uso de alcohol-gel y el aislamiento voluntario de los enfermos. Se evitaron aglomeraciones y se cerraron escuelas y espacios públicos.' },
      { title: 'La normalización', text: 'La experiencia de 2009 mostró la importancia de la preparación y de la comunicación de riesgo. Desde 2010, la variedad A(H1N1) es considerada estacional. La pandemia dejó aprendizajes que se retomaron en emergencias posteriores, aunque también reveló las brechas del sistema de salud.' },
    ],
    people: [], sourceIds: ['salud-constitucion'],
    evidence: [
      { sourceId: 'salud-constitucion', locator: 'PDF pp. 129–131', supports: 'La nueva cepa de influenza A(H1N1) de 2009, el Plan Nacional de Preparación y Respuesta de 2006, las medidas de higiene y aislamiento, y la consideración estacional de la variedad desde 2010.' },
    ],
    documentCodes: ['P6-M05'],
  },
  {
    id: 'p6-covid-2020', title: '2020: la emergencia de COVID-19 y el inicio de la vacunación', shortTitle: 'La COVID-19 en México', year: 2020, endYear: 2021, date: '28 de febrero de 2020 – 2021',
    location: 'Ciudad de México y territorio nacional', states: ['MX-CMX'], coordinates: [-99.13, 19.43], category: 'salud', review: 'verificada',
    summary: 'El 28 de febrero de 2020 se confirmó en México el primer caso importado de COVID-19: un hombre de 35 años residente en la Ciudad de México que había viajado a Italia. El 23 de diciembre de 2020 llegó el primer embarque de vacunas de Pfizer y al día siguiente comenzó la vacunación.',
    chapters: [
      { title: 'El primer caso', text: 'El 28 de febrero de 2020, la Secretaría de Salud confirmó el primer caso importado de COVID-19 en México. Se trataba de un hombre de 35 años residente en la Ciudad de México que había viajado a Italia del 14 al 22 de febrero. El caso abrió la fase de contención de la epidemia.' },
      { title: 'La emergencia', text: 'La propagación del virus llevó a suspender clases, actividades no esenciales y eventos masivos. El gobierno implementó la Jornada Nacional de Sana Distancia y reforzó la vigilancia epidemiológica. La pandemia golpeó con especial fuerza a personas con enfermedades crónicas y a los trabajadores de la salud.' },
      { title: 'La vacunación', text: 'El 23 de diciembre de 2020 llegó a México el primer embarque de vacunas contra COVID-19 de Pfizer-BioNTech. La vacunación comenzó el 24 de diciembre, priorizando al personal de salud. La campaña se amplió por grupos de edad y enfrentó retos de logística, desinformación y cobertura.' },
    ],
    people: [], sourceIds: ['salud-covid-2020', 'salud-vacunas-2020'],
    evidence: [
      { sourceId: 'salud-covid-2020', locator: 'Comunicado 077, 28 de febrero de 2020', supports: 'La confirmación del primer caso importado de COVID-19 en México, un hombre de 35 años residente en la Ciudad de México que viajó a Italia del 14 al 22 de febrero.' },
      { sourceId: 'salud-vacunas-2020', locator: 'Comunicado 263, 23 de diciembre de 2020', supports: 'La llegada del primer embarque de vacunas de Pfizer-BioNTech el 23 de diciembre de 2020 y el inicio de la vacunación el 24 de diciembre.' },
    ],
    documentCodes: ['P6-H08', 'P6-M07', 'P6-M08'],
  },
  {
    id: 'p6-imss-bienestar', title: '1979–2025: de IMSS-Coplamar a IMSS-Bienestar', shortTitle: 'IMSS-Bienestar', year: 1979, endYear: 2025, date: '1979–2025',
    location: 'Territorio nacional', states: ['MX-CMX'], coordinates: [-99.13, 19.43], category: 'salud', review: 'verificada',
    summary: 'El programa que hoy se conoce como IMSS-Bienestar nació en 1979 como IMSS-Coplamar. Pasó por IMSS-Solidaridad, IMSS-Oportunidades e IMSS-Prospera hasta adoptar su nombre actual en 2018. En 2022 inició su expansión a los estados y en 2025 incorporó formalmente a IMSS-Coplamar.',
    chapters: [
      { title: 'El antecedente', text: 'En 1973, una reforma a la Ley del Seguro Social facultó al IMSS a extender su acción a núcleos de población sin capacidad contributiva. El 25 de mayo de 1979 surgió el Programa IMSS-Coplamar, mediante un convenio con la Coordinación General del Plan Nacional de Zonas Deprimidas y Grupos Marginados. El objetivo era llevar servicios de salud a todo el territorio nacional.' },
      { title: 'Los cambios de nombre', text: 'El programa se transformó en IMSS-Solidaridad en 1989, IMSS-Oportunidades en 2002 e IMSS-Prospera en 2014. En 2018 adoptó el nombre de IMSS-Bienestar. Cada cambio acompañó una reorientación de la política social y de la relación entre el IMSS y los programas federales contra la pobreza.' },
      { title: 'La expansión', text: 'En 2022 el programa comenzó a operar en Nayarit como parte de la federalización de los servicios de salud. La expansión continuó en otros estados y en 2025 el gobierno firmó un decreto que incorporó formalmente a IMSS-Coplamar. El reto sigue siendo garantizar personal, medicamentos y atención en las comunidades más marginadas.' },
    ],
    people: [], sourceIds: ['imss-bienestar'],
    evidence: [
      { sourceId: 'imss-bienestar', locator: 'Programa IMSS-Bienestar 1979–2025', supports: 'La creación de IMSS-Coplamar el 25 de mayo de 1979, los cambios a IMSS-Solidaridad, IMSS-Oportunidades e IMSS-Prospera, el nombre IMSS-Bienestar en 2018, el inicio en Nayarit en 2022 y el decreto del 1 de julio de 2025.' },
    ],
    documentCodes: ['P6-M09'],
  },
  {
    id: 'p6-sarampion-2025', title: '2025–2026: el brote de sarampión', shortTitle: 'El brote de sarampión', year: 2025, endYear: 2026, date: '14 de febrero de 2025 – 12 de febrero de 2026',
    location: 'Territorio nacional', states: ['MX-CMX'], coordinates: [-99.13, 19.43], category: 'salud', review: 'verificada',
    summary: 'El brote de sarampión iniciado el 14 de febrero de 2025 acumuló 9,351 casos hasta el 12 de febrero de 2026, según el boletín epidemiológico citado por el IMSS. El IMSS registró 2,805 de esos casos.',
    chapters: [
      { title: 'El brote', text: 'El brote actual de sarampión inició el 14 de febrero de 2025. De acuerdo con el boletín epidemiológico del 12 de febrero de 2026, se registraron 9,351 casos. El IMSS informó que atendió 2,805 de ellos. El sarampión, que se consideraba eliminado en México, volvió a circular.' },
      { title: 'La respuesta', text: 'Las instituciones de salud reforzaron la vacunación y la vigilancia epidemiológica. El IMSS recordó que el Programa de Vacunación Universal fue un éxito desde su inicio en 1973 y que la vacuna contra el sarampión forma parte del esquema básico. La cobertura desigual y la desinformación dificultaron el control del brote.' },
      { title: 'Las lecciones', text: 'El brote mostró que la eliminación de una enfermedad no es permanente si baja la cobertura vacunal. También evidenció la importancia de mantener la vigilancia, la información pública y el acceso oportuno a la vacuna. La respuesta exigió coordinar a las instituciones del sector salud y a las autoridades estatales.' },
    ],
    people: [], sourceIds: ['imss-sarampion'],
    evidence: [
      { sourceId: 'imss-sarampion', locator: 'Artículo del 16 de febrero de 2026', supports: 'El inicio del brote el 14 de febrero de 2025, los 9,351 casos del boletín del 12 de febrero de 2026 y los 2,805 casos registrados por el IMSS.' },
    ],
    editorialNotes: ['El directorio no incluye una ficha específica para el brote de sarampión de 2025. Se incorpora como historia adicional porque la fuente institucional permite sostenerla; no se le asigna un código del directorio.'],
  },
  {
    id: 'p6-sismos-2017', title: '2017: los sismos de septiembre', shortTitle: 'Los sismos de 2017', year: 2017, date: '7 y 19 de septiembre de 2017',
    location: 'Chiapas, Ciudad de México, Puebla, Morelos y Oaxaca', states: ['MX-CHP', 'MX-CMX', 'MX-PUE', 'MX-MOR', 'MX-OAX'], coordinates: [-99.13, 19.43], category: 'desastres', review: 'verificada',
    summary: 'El 7 de septiembre de 2017 un sismo afectó a 1,200,250 personas en el sureste. El 19 de septiembre, un sismo de magnitud 7.1 con epicentro a 120 kilómetros al sur de la Ciudad de México causó pérdidas estimadas en 6,000 millones de dólares.',
    chapters: [
      { title: 'El sismo del 7 de septiembre', text: 'El 7 de septiembre de 2017 se registró un sismo que afectó principalmente al sureste del país. La base EM-DAT, citada por Alcántara-Ayala, contabiliza 1,200,250 personas afectadas. El evento ocurrió semanas antes del sismo del 19 de septiembre y no debe confundirse con él.' },
      { title: 'El sismo del 19 de septiembre', text: 'El 19 de septiembre de 2017, un sismo intraplaca de magnitud 7.1 sacudió la Ciudad de México y la región central. Su epicentro se ubicó 120 kilómetros al sur de la metrópoli, a 57 kilómetros de profundidad. El desastre causó pérdidas estimadas en 6,000 millones de dólares, las mayores registradas por EM-DAT para un sismo en México después de 1985.' },
      { title: 'La respuesta', text: 'La sociedad volvió a organizarse en brigadas de rescate y acopio. El sismo evidenció los límites del Sistema Nacional de Protección Civil y la necesidad de pasar de una respuesta reactiva a una gestión integral del riesgo. La reconstrucción y la revisión de normas de construcción quedaron como tareas pendientes.' },
    ],
    people: [], sourceIds: ['unam-desastres'],
    evidence: [
      { sourceId: 'unam-desastres', locator: 'PDF p. 3', supports: 'La magnitud 7.1 del sismo del 19 de septiembre de 2017, su epicentro 120 km al sur de la Ciudad de México y su profundidad de 57 km.' },
      { sourceId: 'unam-desastres', locator: 'PDF p. 7, Tabla 1', supports: 'Las 1,200,250 personas afectadas por el sismo del 7 de septiembre de 2017 y las pérdidas de 6,000 millones de dólares del sismo del 19 de septiembre de 2017.' },
    ],
    documentCodes: ['P6-D08', 'P6-D09'],
  },
  {
    id: 'p6-otis-2023', title: '2023: el huracán Otis y la devastación de Acapulco', shortTitle: 'El huracán Otis', year: 2023, date: '25 de octubre de 2023',
    location: 'Acapulco, Guerrero', states: ['MX-GRO'], coordinates: [-99.88, 16.85], category: 'desastres', review: 'verificada',
    summary: 'Otis tocó tierra en Acapulco el 25 de octubre de 2023 a las 00:25 como huracán de categoría 5, con vientos sostenidos de 270 km/h y rachas de 330 km/h. El primer balance oficial reportó 27 muertos y 4 desaparecidos.',
    chapters: [
      { title: 'La intensificación', text: 'Otis se formó como una zona de inestabilidad a mediados de octubre de 2023 y se intensificó rápidamente frente a las costas de Guerrero. A las 21:00 del 24 de octubre alcanzó la categoría 5, con vientos sostenidos de 260 km/h y rachas de 315 km/h. Tres horas después, sus vientos llegaban a 270 km/h con rachas de 330 km/h.' },
      { title: 'El impacto', text: 'El centro de Otis tocó tierra como huracán de categoría 5 en Acapulco a las 00:25 del 25 de octubre, con vientos sostenidos de 270 km/h y rachas de 330 km/h. El sistema se debilitó al internarse en la Sierra Madre del Sur, pero los vientos intensos persistieron durante la mañana. El primer balance oficial reportó 27 muertos y 4 desaparecidos.' },
      { title: 'La respuesta', text: 'El gobierno federal desplegó un operativo de emergencia y el presidente se trasladó por tierra a Acapulco para evaluar los daños. La destrucción de viviendas, hoteles e infraestructura paralizó la economía del puerto. La reconstrucción planteó debates sobre prevención, alerta temprana y ordenamiento territorial.' },
    ],
    people: [], sourceIds: ['conagua-otis-2023', 'elpais-otis-2023'],
    evidence: [
      { sourceId: 'conagua-otis-2023', locator: 'PDF p. 8', supports: 'La categoría 5, el toque de tierra en Acapulco a las 00:25 del 25 de octubre de 2023 y los vientos sostenidos de 270 km/h con rachas de 330 km/h.' },
      { sourceId: 'elpais-otis-2023', locator: '26 de octubre de 2023', supports: 'El primer balance de 27 muertos y 4 desaparecidos y el desplazamiento del presidente por tierra a Acapulco.' },
    ],
    documentCodes: ['P6-D10'],
  },
  {
    id: 'p6-cartel-guadalajara', title: '1985–1997: el Cártel de Guadalajara y la violencia del narcotráfico', shortTitle: 'El Cártel de Guadalajara', year: 1985, endYear: 1997, date: '1985–1997',
    location: 'Guadalajara, Jalisco; Michoacán y Ciudad de México', states: ['MX-JAL', 'MX-MIC', 'MX-CMX'], coordinates: [-103.35, 20.67], category: 'seguridad', review: 'verificada',
    summary: 'Entre 1985 y 1997, las redes del narcotráfico en Guadalajara protagonizaron algunos de los episodios más graves de la historia reciente: el secuestro y asesinato del agente de la DEA Enrique Camarena, la detención de Miguel Ángel Félix Gallardo, el asesinato del cardenal Juan Jesús Posadas Ocampo y la muerte de Amado Carrillo Fuentes.',
    chapters: [
      { title: 'El caso Camarena', text: 'El 7 de febrero de 1985 fue secuestrado en Guadalajara Enrique Camarena Salazar, agente encubierto de la DEA. El 15 de marzo, su cuerpo fue encontrado junto con el del piloto mexicano Alfredo Zavala en el kilómetro 36 de la carretera Zamora-Vista Hermosa, Michoacán. El caso provocó una crisis entre México y Estados Unidos.' },
      { title: 'La detención de Félix Gallardo', text: 'El 8 de abril de 1989 fue detenido Miguel Ángel Félix Gallardo, a quien la cronología del INEHRM identifica como fundador del primer Cártel de Guadalajara. Su captura desarticuló una de las redes más importantes de la época y abrió un reacomodo entre grupos criminales.' },
      { title: 'Posadas y Amado Carrillo', text: 'El 24 de mayo de 1993 fue asesinado en Guadalajara el cardenal Juan Jesús Posadas Ocampo, en el estacionamiento del aeropuerto. El 4 de julio de 1997 murió en un hospital de la Ciudad de México Amado Carrillo Fuentes, “El Señor de los Cielos”, uno de los capos más importantes del país. Los episodios mostraron la penetración del crimen organizado en la vida política y económica.' },
    ],
    people: ['kiki', 'felix-gallardo', 'posadas', 'amado-carrillo'], sourceIds: ['inehrm-contemporaneo'],
    evidence: [
      { sourceId: 'inehrm-contemporaneo', locator: 'PDF p. 70', supports: 'El secuestro de Enrique Camarena el 7 de febrero de 1985 y el hallazgo de su cuerpo el 15 de marzo de 1985.' },
      { sourceId: 'inehrm-contemporaneo', locator: 'PDF p. 92', supports: 'La detención de Miguel Ángel Félix Gallardo el 8 de abril de 1989 y su identificación como fundador del primer Cártel de Guadalajara.' },
      { sourceId: 'inehrm-contemporaneo', locator: 'PDF p. 102', supports: 'El asesinato del cardenal Juan Jesús Posadas Ocampo el 24 de mayo de 1993 en Guadalajara.' },
      { sourceId: 'inehrm-contemporaneo', locator: 'PDF p. 131', supports: 'La muerte de Amado Carrillo Fuentes el 4 de julio de 1997.' },
    ],
    documentCodes: ['P6-C01', 'P6-C02', 'P6-C03', 'P6-C04'],
  },
  {
    id: 'p6-zambada-2024', title: '2024: la detención de Ismael Zambada y Joaquín Guzmán López', shortTitle: 'La detención de Zambada', year: 2024, date: '25–26 de julio de 2024',
    location: 'El Paso, Texas, Estados Unidos', states: ['MX-SIN'], coordinates: [-106.49, 31.76], category: 'seguridad', review: 'verificada',
    summary: 'El 25 de julio de 2024, Ismael Zambada García, “El Mayo”, y Joaquín Guzmán López fueron detenidos en El Paso, Texas. La embajada de Estados Unidos en México confirmó las detenciones al día siguiente. Las circunstancias del operativo son objeto de versiones encontradas.',
    chapters: [
      { title: 'La detención', text: 'El 25 de julio de 2024, Ismael Zambada García, conocido como “El Mayo”, y Joaquín Guzmán López fueron detenidos en El Paso, Texas. La embajada de Estados Unidos en México emitió una declaración el 26 de julio en la que confirmó las detenciones. Zambada era uno de los líderes históricos del narcotráfico mexicano.' },
      { title: 'Las versiones', text: 'Las circunstancias del operativo son objeto de versiones encontradas. La declaración oficial confirma las detenciones, pero no permite resolver cómo se produjeron ni quién organizó el traslado. La historia no adopta una versión única y distingue el hecho confirmado de las hipótesis.' },
      { title: 'Las consecuencias', text: 'La detención de Zambada conmocionó a Sinaloa y al crimen organizado. Su captura ocurrió en un contexto de disputas internas y de presión estadounidense sobre los grupos mexicanos. Las consecuencias locales y la recomposición de las redes criminales siguieron desarrollándose después de 2024.' },
    ],
    people: ['mayo-zambada', 'joaquin-guzman-lopez'], sourceIds: ['us-embassy-zambada'],
    evidence: [
      { sourceId: 'us-embassy-zambada', locator: 'Declaración del 26 de julio de 2024', supports: 'La confirmación de las detenciones de Ismael Zambada García y Joaquín Guzmán López en Estados Unidos el 25 de julio de 2024.' },
    ],
    editorialNotes: ['La fuente oficial confirma las detenciones, no las circunstancias. Se evita presentar como hecho probado una versión única sobre el operativo.'],
    documentCodes: ['P6-C10'],
  },
]
