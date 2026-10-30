import type { HistoricalEvent } from '../types'

// Period 5: Revolución, posrevolución y Estado autoritario (1910–1982).
// The backbone is the INEHRM chronology series (Revolución 1906–1917 and
// Posrevolución 1917–1967) plus the health history published by the
// Secretaría de Salud. Entries that the read sources do not sustain are sent
// to research/ledger.json instead of being turned into narrative.
export const period5: HistoricalEvent[] = [
  {
    id: 'p5-plan-san-luis', title: '1910: el Plan de San Luis y el levantamiento maderista', shortTitle: 'El Plan de San Luis', year: 1910, date: '5 de octubre – 20 de noviembre de 1910',
    location: 'San Luis Potosí, San Antonio y el norte de México', states: ['MX-SLP', 'MX-CHH', 'MX-COA', 'MX-SON'], coordinates: [-100.98, 22.15], category: 'politica', review: 'verificada',
    summary: 'Francisco I. Madero publicó el Plan de San Luis el 5 de octubre de 1910, aunque lo fechó el 20 de noviembre para convocar ese día al levantamiento. El documento desconoció la reelección de Porfirio Díaz y llamó a las armas sin ofrecer todavía un programa social.',
    chapters: [
      { title: 'Un llamado fechado para el futuro', text: 'El Plan de San Luis se publicó el 5 de octubre de 1910, pero llevaba la fecha del 20 de noviembre. Madero y sus colaboradores lo redactaron en San Antonio, Texas, después de que él escapara de San Luis Potosí. Se imprimieron cinco mil copias y Madero firmó cada una de su puño y letra.' },
      { title: 'Qué pedía el plan', text: 'El documento desconocía a Porfirio Díaz como presidente y convocaba a tomar las armas a las seis de la tarde del domingo 20 de noviembre de 1910. No era un programa social ni económico: planteaba que las reformas se discutirían después en el Congreso. También se dirigía al Ejército Federal para recordarle que su deber era defender las instituciones y no sostener una tiranía.' },
      { title: 'El levantamiento', text: 'El 20 de noviembre se produjeron trece acciones armadas en distintos puntos del país. El movimiento no derribó de inmediato al régimen, pero abrió una guerra irregular que se extendió por Chihuahua, Coahuila, Sonora y otras regiones. La represión y la falta de acuerdo político llevarían a la renuncia de Díaz en mayo de 1911.' },
    ],
    people: ['madero', 'porfirio-diaz'], sourceIds: ['inehrm-revolucion'],
    evidence: [
      { sourceId: 'inehrm-revolucion', locator: 'PDF pp. 37–38', supports: 'La publicación del Plan de San Luis el 5 de octubre de 1910, su fecha del 20 de noviembre, las cinco mil copias firmadas, la convocatoria a las 18:00 y las trece acciones armadas de ese día.' },
    ],
    editorialNotes: ['La ficha original fechaba el plan el 20 de noviembre. La fuente distingue entre la publicación (5 de octubre) y la fecha simbólica del levantamiento (20 de noviembre).'],
    documentCodes: ['P5-H01', 'P5-S01'],
  },
  {
    id: 'p5-renuncia-diaz', title: '1911: los Tratados de Ciudad Juárez y la renuncia de Díaz', shortTitle: 'La renuncia de Díaz', year: 1911, date: '21–25 de mayo de 1911',
    location: 'Ciudad Juárez, Chihuahua y Ciudad de México', states: ['MX-CHH', 'MX-CMX'], coordinates: [-106.48, 31.69], category: 'politica', review: 'verificada',
    summary: 'Los Tratados de Ciudad Juárez obligaron a Porfirio Díaz y a Ramón Corral a renunciar. Díaz dejó la presidencia el 25 de mayo de 1911 y Madero renunció a la presidencia provisional para no aparecer como el vencedor que tomaba el poder por la fuerza.',
    chapters: [
      { title: 'La salida negociada', text: 'El 21 de mayo de 1911 se firmaron los Tratados de Ciudad Juárez. El acuerdo obligaba a Porfirio Díaz y al vicepresidente Ramón Corral a renunciar. La revolución no entraba triunfante a la capital: se abría un gobierno de transición y se convocaban elecciones.' },
      { title: 'La renuncia', text: 'Díaz presentó su renuncia el 25 de mayo de 1911. Madero, por su parte, renunció a la presidencia provisional el 26 de mayo. La decisión evitó que el caudillo revolucionario asumiera el poder sin elección, pero dejó intactas buena parte de las estructuras del régimen porfirista.' },
      { title: 'Un triunfo incompleto', text: 'Francisco León de la Barra quedó al frente del gobierno interino y organizó las elecciones de octubre, en las que Madero ganó la presidencia. El aparato administrativo, el ejército y las élites locales sobrevivieron al cambio. La revolución política había derribado a Díaz, pero no había resuelto la cuestión agraria ni la desigualdad.' },
    ],
    people: ['porfirio-diaz', 'madero'], sourceIds: ['inehrm-revolucion'],
    evidence: [
      { sourceId: 'inehrm-revolucion', locator: 'PDF p. 60', supports: 'La firma de los Tratados de Ciudad Juárez el 21 de mayo, la renuncia de Díaz y Corral y la renuncia de Madero a la presidencia provisional el 26 de mayo.' },
    ],
    documentCodes: ['P5-P01'],
  },
  {
    id: 'p5-decena-tragica', title: '1913: la Decena Trágica y el asesinato de Madero', shortTitle: 'La Decena Trágica', year: 1913, date: '9–22 de febrero de 1913',
    location: 'Ciudad de México', states: ['MX-CMX'], coordinates: [-99.13, 19.43], category: 'politica', review: 'verificada',
    summary: 'Entre el 9 y el 19 de febrero de 1913 se combatió en la Ciudad de México. El Pacto de la Embajada selló la caída de Madero; él y el vicepresidente Pino Suárez renunciaron y fueron asesinados el 22 de febrero. Victoriano Huerta quedó al frente del gobierno.',
    chapters: [
      { title: 'El levantamiento', text: 'El 9 de febrero de 1913 comenzó la sublevación de Félix Díaz y Bernardo Reyes contra Madero. Reyes murió en el primer día de combates. La lucha se concentró en el centro de la capital y dejó cientos de muertos entre militares y civiles.' },
      { title: 'El Pacto de la Embajada', text: 'El 18 de febrero se firmó el Pacto de la Embajada, con la mediación del embajador estadounidense Henry Lane Wilson. El acuerdo reconocía a Huerta como jefe del Ejecutivo y a Félix Díaz como responsable de la pacificación. Madero y Pino Suárez fueron detenidos y obligados a renunciar el 19 de febrero.' },
      { title: 'Los asesinatos', text: 'El 22 de febrero, Madero y Pino Suárez fueron asesinados cuando eran trasladados a la Penitenciaría de Lecumberri. El gobierno de Huerta presentó los hechos como un enfrentamiento entre escoltas. La versión oficial fue rechazada por amplios sectores y el episodio se convirtió en un símbolo de la violencia política del periodo.' },
    ],
    people: ['madero', 'huerta', 'felix-diaz', 'pino-suarez', 'reyes-heroles'], sourceIds: ['inehrm-revolucion'],
    evidence: [
      { sourceId: 'inehrm-revolucion', locator: 'PDF pp. 77–79', supports: 'El inicio de la Decena Trágica el 9 de febrero, la muerte de Reyes, el Pacto de la Embajada del 18 de febrero, las renuncias del 19 y los asesinatos del 22 de febrero.' },
    ],
    documentCodes: ['P5-H02', 'P5-P02'],
  },
  {
    id: 'p5-veracruz-1914', title: '1914: la ocupación estadounidense de Veracruz', shortTitle: 'Veracruz, 1914', year: 1914, date: '21 de abril de 1914',
    location: 'Veracruz, Veracruz', states: ['MX-VER'], coordinates: [-96.13, 19.20], category: 'politica', review: 'verificada',
    summary: 'Estados Unidos ocupó el puerto de Veracruz el 21 de abril de 1914. La resistencia incluyó a cadetes de la Escuela Naval; Virgilio Uribe murió y el comandante Azueta resultó herido. El episodio agravó el aislamiento de Huerta y dejó una herida nacionalista.',
    chapters: [
      { title: 'El pretexto del Tampico', text: 'El incidente del Tampico y la negativa a rendir honores a la bandera estadounidense sirvieron de pretexto. El presidente Woodrow Wilson ordenó ocupar Veracruz para impedir la llegada de un cargamento de armas destinado a Huerta. Las tropas desembarcaron el 21 de abril de 1914.' },
      { title: 'La defensa del puerto', text: 'La resistencia fue organizada por autoridades locales, militares y civiles. Los cadetes de la Escuela Naval participaron en la defensa; Virgilio Uribe murió y el comandante Vicente Azueta fue herido. La ciudad fue bombardeada y ocupada, y la lucha dejó muertos y heridos entre la población.' },
      { title: 'Consecuencias', text: 'La ocupación aisló aún más a Huerta y fortaleció el discurso nacionalista contra la intervención extranjera. Las fuerzas constitucionalistas aprovecharon el desgaste del gobierno federal. Estados Unidos mantuvo el puerto hasta noviembre de 1914, cuando las facciones revolucionarias ya se disputaban el país.' },
    ],
    people: ['huerta', 'woodrow-wilson'], sourceIds: ['inehrm-revolucion'],
    evidence: [
      { sourceId: 'inehrm-revolucion', locator: 'PDF pp. 100–101', supports: 'El desembarco estadounidense del 21 de abril de 1914, la defensa del puerto, la muerte de Virgilio Uribe y la herida de Azueta.' },
    ],
    documentCodes: ['P5-H03'],
  },
  {
    id: 'p5-aguascalientes', title: '1914: la Convención de Aguascalientes y la ruptura revolucionaria', shortTitle: 'La Convención de Aguascalientes', year: 1914, date: '30 de octubre – 1 de noviembre de 1914',
    location: 'Aguascalientes, Aguascalientes', states: ['MX-AGU'], coordinates: [-102.30, 21.88], category: 'politica', review: 'verificada',
    summary: 'La Convención de Aguascalientes intentó unir a villistas, zapatistas y carrancistas. El 30 de octubre acordó el cese de Carranza y el 31 votó por 98 a 20 retirarle el mando; el 1 de noviembre nombró a Eulalio Gutiérrez. La ruptura abrió la guerra entre facciones.',
    chapters: [
      { title: 'Una asamblea de jefes revolucionarios', text: 'La Convención se reunió en Aguascalientes en octubre de 1914 para resolver la disputa entre Carranza, Villa y Zapata. Los delegados representaban a los distintos ejércitos y a las fuerzas políticas del movimiento. El objetivo era formar un gobierno provisional y evitar una nueva guerra civil.' },
      { title: 'El cese de Carranza', text: 'El 30 de octubre la asamblea acordó el cese de Venustiano Carranza como primer jefe y encargado del Poder Ejecutivo. Al día siguiente, la votación fue de 98 votos a favor y 20 en contra. Carranza desconoció la decisión y se retiró a Veracruz, donde mantuvo su propio gobierno.' },
      { title: 'Gutiérrez y la guerra de facciones', text: 'El 1 de noviembre la Convención nombró presidente provisional a Eulalio Gutiérrez. El gobierno convencionista no logró imponerse: Villa y Zapata lo apoyaron desde sus territorios, mientras Carranza conservó el ejército más organizado y los recursos del puerto. La lucha entre facciones se prolongó hasta 1915–1916.' },
    ],
    people: ['carranza', 'villa', 'zapata'], sourceIds: ['inehrm-revolucion'],
    evidence: [
      { sourceId: 'inehrm-revolucion', locator: 'PDF pp. 110–111', supports: 'El cese de Carranza acordado el 30 de octubre, la votación de 98 a 20 del 31 de octubre y el nombramiento de Eulalio Gutiérrez el 1 de noviembre.' },
    ],
    documentCodes: ['P5-P03'],
  },
  {
    id: 'p5-plan-ayala', title: '1911: el Plan de Ayala y el programa zapatista', shortTitle: 'El Plan de Ayala', year: 1911, date: '28 de noviembre de 1911',
    location: 'Ayoxuxtla, Puebla', states: ['MX-PUE', 'MX-MOR'], coordinates: [-98.75, 18.55], category: 'sociedad', review: 'verificada',
    summary: 'El Plan de Ayala desconoció a Madero y exigió la restitución de tierras, montes y aguas a los pueblos. Redactado por Otilio Montaño y Emiliano Zapata, dio un programa agrario al movimiento del sur y rompió con el maderismo.',
    chapters: [
      { title: 'La ruptura con Madero', text: 'Zapata había apoyado a Madero en 1910, pero pronto consideró que el nuevo gobierno no devolvía las tierras ni atendía a los pueblos. El 28 de noviembre de 1911 se firmó en Ayoxuxtla, Puebla, el Plan de Ayala. El documento desconoció a Madero como presidente de la República.' },
      { title: 'Tierra, montes y aguas', text: 'El plan ordenaba restituir tierras, montes y aguas a los pueblos que tuvieran títulos de propiedad y también a quienes no tuvieran medios de subsistencia. Los hacendados que se opusieran perderían sus propiedades, que pasarían a los pueblos y a los combatientes. Era un programa agrario radical, no solo una disputa por el poder.' },
      { title: 'Un documento que sobrevivió a sus autores', text: 'El Plan de Ayala se publicó en El Diario del Hogar el 15 de diciembre de 1911. En abril de 1913, Zapata ordenó el primer reparto de tierras conforme al plan en Ixcamilpa, Puebla. El zapatismo mantuvo su autonomía frente a Carranza y Villa, y el documento se convirtió en referencia del agrarismo mexicano.' },
    ],
    people: ['zapata', 'madero'], sourceIds: ['inehrm-revolucion'],
    evidence: [
      { sourceId: 'inehrm-revolucion', locator: 'PDF pp. 69–70, 73', supports: 'La firma del Plan de Ayala el 28 de noviembre de 1911, su autoría, el desconocimiento de Madero, la restitución de tierras y su publicación el 15 de diciembre de 1911.' },
    ],
    documentCodes: ['P5-S02'],
  },
  {
    id: 'p5-constitucion-1917', title: '1917: la Constitución de Querétaro y el Estado social', shortTitle: 'La Constitución de 1917', year: 1917, date: '5 de febrero de 1917',
    location: 'Santiago de Querétaro, Querétaro', states: ['MX-QUE'], coordinates: [-100.39, 20.59], category: 'politica', review: 'verificada',
    summary: 'La Constitución de 1917 recogió las demandas agrarias y laborales de la Revolución en los artículos 27 y 123. Estableció un Estado federal con derechos sociales, pero su aplicación dependió de gobiernos que durante décadas limitaron su alcance.',
    chapters: [
      { title: 'El Congreso de Querétaro', text: 'El Congreso Constituyente se reunió en Querétaro en 1916 y promulgó la nueva Constitución el 5 de febrero de 1917, en el Teatro de la República. El texto sustituyó la Constitución de 1857 y recogió buena parte de las demandas planteadas durante la revolución.' },
      { title: 'Los artículos sociales', text: 'El artículo 27 declaró que la propiedad de tierras y aguas correspondía originalmente a la Nación y estableció la posibilidad de expropiar y de repartir tierras. El artículo 123 reconoció derechos laborales como la jornada, el salario, la seguridad social y la organización sindical. Fue una ruptura con el liberalismo individualista del siglo XIX.' },
      { title: 'Una Constitución y su aplicación', text: 'La Constitución no se aplicó de inmediato: el reparto agrario, la legislación laboral y el control de la Iglesia quedaron sujetos a la correlación de fuerzas. Carranza y sus sucesores utilizaron el texto como fuente de legitimidad, pero también lo limitaron cuando amenazaba sus intereses. La tensión entre el texto y su cumplimiento marcaría el siglo XX mexicano.' },
    ],
    people: ['carranza'], sourceIds: ['inehrm-posrevolucion', 'salud-constitucion'],
    evidence: [
      { sourceId: 'inehrm-posrevolucion', locator: 'PDF pp. 5–7', supports: 'La promulgación de la Constitución el 5 de febrero de 1917 en el Teatro de la República de Querétaro.' },
      { sourceId: 'salud-constitucion', locator: 'PDF pp. 100–103', supports: 'Los artículos 27 y 123 y el reconocimiento constitucional de derechos sociales y laborales.' },
    ],
    documentCodes: ['P5-H04', 'P5-P04'],
  },
  {
    id: 'p5-agua-prieta', title: '1920: el Plan de Agua Prieta y el fin del carrancismo', shortTitle: 'Agua Prieta, 1920', year: 1920, date: '23 de abril – 21 de mayo de 1920',
    location: 'Agua Prieta, Sonora; Ciudad de México y Tlaxcalaltongo, Puebla', states: ['MX-SON', 'MX-CMX', 'MX-PUE'], coordinates: [-109.55, 31.33], category: 'politica', review: 'verificada',
    summary: 'El Plan de Agua Prieta desconoció a Carranza y abrió una rebelión encabezada por Obregón, Calles y De la Huerta. Carranza abandonó la capital, fue asesinado en Tlaxcalaltongo y el Congreso nombró presidente a Adolfo de la Huerta.',
    chapters: [
      { title: 'La rebelión sonorense', text: 'El 23 de abril de 1920 se proclamó en Agua Prieta, Sonora, un plan que desconocía al gobierno de Venustiano Carranza. La rebelión reunió a Álvaro Obregón, Plutarco Elías Calles y Adolfo de la Huerta, quienes controlaban fuerzas importantes en el norte. El conflicto se originó en la sucesión presidencial y en la ruptura entre Carranza y los militares sonorenses.' },
      { title: 'La caída de Carranza', text: 'Carranza abandonó la Ciudad de México el 7 de mayo y pretendió instalar su gobierno en Veracruz. El general Pablo González se unió a los rebeldes el 12 de mayo. El 21 de mayo, Carranza fue asesinado en el pueblo de Tlaxcalaltongo, Puebla.' },
      { title: 'La transición', text: 'El 24 de mayo, el Congreso de la Unión designó a Adolfo de la Huerta presidente para concluir el periodo constitucional. Su gobierno pacificó a los grupos rebeldes, negoció con Villa y convocó elecciones. Obregón ganó la presidencia y tomó posesión el 1 de diciembre de 1920.' },
    ],
    people: ['carranza', 'obregon', 'calles'], sourceIds: ['inehrm-posrevolucion'],
    evidence: [
      { sourceId: 'inehrm-posrevolucion', locator: 'PDF pp. 24–25', supports: 'La proclamación del Plan de Agua Prieta el 23 de abril de 1920, la salida de Carranza, su asesinato el 21 de mayo y el nombramiento de Adolfo de la Huerta el 24 de mayo.' },
    ],
    documentCodes: ['P5-H05'],
  },
  {
    id: 'p5-cristera', title: '1926–1929: la Guerra Cristera', shortTitle: 'La Guerra Cristera', year: 1926, endYear: 1929, date: '1926–1929',
    location: 'Occidente y centro de México', states: ['MX-JAL', 'MX-MIC', 'MX-GRO', 'MX-ZAC', 'MX-DUR', 'MX-OAX'], coordinates: [-103.35, 20.67], category: 'sociedad', review: 'verificada',
    summary: 'La aplicación de las leyes anticlericales de Calles desató una rebelión armada católica en el occidente y el centro del país. La Guerra Cristera dejó miles de muertos y terminó con los Acuerdos Iglesia-Estado de junio de 1929, que no resolvieron el conflicto de fondo.',
    chapters: [
      { title: 'Las leyes y la resistencia', text: 'La Constitución de 1917 había impuesto límites al culto y a la Iglesia, pero su aplicación se intensificó durante el gobierno de Plutarco Elías Calles. En 1926 se expulsaron sacerdotes extranjeros, se clausuraron templos y se prohibió la enseñanza religiosa. La Liga Nacional Defensora de la Libertad Religiosa organizó la resistencia y el boicot.' },
      { title: 'La rebelión armada', text: 'El conflicto armado se extendió por Jalisco, Michoacán, Zacatecas, Durango, Guerrero y otras regiones. Los cristeros combatieron con fuerzas irregulares y apoyo de comunidades rurales. El gobierno movilizó al ejército y aplicó la ley con dureza; ambos bandos cometieron atrocidades y la población civil sufrió desplazamientos y represalias.' },
      { title: 'Los acuerdos de 1929', text: 'El 21 de junio de 1929, el presidente Emilio Portes Gil y representantes de la Iglesia firmaron los Acuerdos Iglesia-Estado, con la mediación del embajador estadounidense Dwight Morrow. El culto se reanudó y la rebelión principal terminó, pero grupos cristeros continuaron combatiendo. La tensión entre el Estado y la Iglesia reapareció en las décadas siguientes.' },
    ],
    people: ['calles'], sourceIds: ['inehrm-posrevolucion'],
    evidence: [
      { sourceId: 'inehrm-posrevolucion', locator: 'PDF pp. 33–34', supports: 'La expulsión de sacerdotes en febrero de 1926, las leyes anticlericales y los combates cristeros en Michoacán, Jalisco, Zacatecas, Guerrero, Oaxaca y Durango.' },
      { sourceId: 'inehrm-posrevolucion', locator: 'PDF p. 39', supports: 'La firma de los Acuerdos Iglesia-Estado el 21 de junio de 1929.' },
    ],
    documentCodes: ['P5-H06', 'P5-S04'],
  },
  {
    id: 'p5-sep-1921', title: '1921: la creación de la Secretaría de Educación Pública', shortTitle: 'La SEP y Vasconcelos', year: 1921, date: '29 de septiembre – 12 de octubre de 1921',
    location: 'Ciudad de México', states: ['MX-CMX'], coordinates: [-99.13, 19.43], category: 'sociedad', review: 'verificada',
    summary: 'El decreto del 29 de septiembre de 1921 creó la Secretaría de Educación Pública. José Vasconcelos tomó posesión el 12 de octubre y puso en marcha misiones culturales, bibliotecas y campañas de alfabetización con un proyecto nacionalista y popular.',
    chapters: [
      { title: 'Una secretaría nueva', text: 'El 29 de septiembre de 1921 se publicó el decreto de creación de la Secretaría de Educación Pública. La nueva dependencia separó la educación del ámbito municipal y de la Secretaría de Instrucción Pública, y dio al Estado federal un instrumento para intervenir en todo el país.' },
      { title: 'Vasconcelos al frente', text: 'José Vasconcelos tomó posesión como secretario el 12 de octubre de 1921. Impulsó las misiones culturales, las bibliotecas populares, la edición masiva de clásicos y la alfabetización. Su proyecto combinaba nacionalismo, educación popular y una idea mestiza de la identidad mexicana.' },
      { title: 'Alcances y límites', text: 'La SEP amplió la presencia federal en la educación, pero no resolvió la falta de escuelas, maestros y recursos. La alfabetización avanzó lentamente y la desigualdad entre el campo y la ciudad persistió. El proyecto vasconcelista dejó instituciones y símbolos que sobrevivieron a su salida en 1924.' },
    ],
    people: ['vasconcelos', 'obregon'], sourceIds: ['inehrm-posrevolucion'],
    evidence: [
      { sourceId: 'inehrm-posrevolucion', locator: 'PDF p. 27', supports: 'La publicación del decreto de creación de la SEP el 29 de septiembre de 1921 y la toma de posesión de Vasconcelos el 12 de octubre.' },
    ],
    documentCodes: ['P5-S03'],
  },
  {
    id: 'p5-pnr', title: '1929–1930: la fundación del Partido Nacional Revolucionario', shortTitle: 'El PNR', year: 1929, endYear: 1930, date: '1 de diciembre de 1929 – 4 de marzo de 1930',
    location: 'Ciudad de México y Querétaro', states: ['MX-CMX', 'MX-QUE'], coordinates: [-99.13, 19.43], category: 'politica', review: 'verificada',
    summary: 'El PNR se creó para institucionalizar el poder revolucionario tras el asesinato de Obregón. Su primer manifiesto apareció el 1 de diciembre de 1929, su programa en enero de 1930 y su existencia legal se declaró el 4 de marzo de 1930.',
    chapters: [
      { title: 'La crisis de los caudillos', text: 'El asesinato de Álvaro Obregón en 1928 dejó al grupo revolucionario sin un sucesor claro. Plutarco Elías Calles anunció el paso de un país de caudillos a uno de instituciones. La creación de un partido oficial buscaba canalizar la competencia entre facciones y asegurar la continuidad del régimen.' },
      { title: 'El manifiesto y el programa', text: 'El 1 de diciembre de 1929 se publicó el primer manifiesto del Comité Organizador del PNR. El 20 de enero de 1930 se dio a conocer su programa. El partido se presentaba como heredero de la Revolución y como instrumento de unidad nacional, aunque su funcionamiento dependía de la negociación entre líderes y organizaciones.' },
      { title: 'La convención de Querétaro', text: 'La primera convención del PNR se inauguró en Querétaro el 1 de marzo de 1930. El 4 de marzo se declaró su existencia legal y se nombró candidato presidencial a Pascual Ortiz Rubio. El partido ganó las elecciones de 1929 y se convirtió en la estructura política dominante hasta su transformación en 1938.' },
    ],
    people: ['calles', 'obregon'], sourceIds: ['inehrm-posrevolucion'],
    evidence: [
      { sourceId: 'inehrm-posrevolucion', locator: 'PDF pp. 38–39', supports: 'El primer manifiesto del PNR el 1 de diciembre de 1929, su programa del 20 de enero de 1930, la convención del 1 de marzo y la declaración de existencia legal del 4 de marzo de 1930.' },
    ],
    documentCodes: ['P5-P05'],
  },
  {
    id: 'p5-cardenas-reparto', title: '1934–1940: el cardenismo y el reparto agrario', shortTitle: 'Cárdenas y la tierra', year: 1934, endYear: 1940, date: '1934–1940',
    location: 'La Laguna, Lombardía, Nueva Italia y el territorio nacional', states: ['MX-COA', 'MX-DUR', 'MX-MIC'], coordinates: [-103.40, 25.50], category: 'sociedad', review: 'verificada',
    summary: 'El gobierno de Lázaro Cárdenas repartió tierras a ejidos y comunidades, organizó a campesinos y trabajadores y nacionalizó el petróleo. El reparto agrario alcanzó cifras sin precedentes, aunque no eliminó la desigualdad ni la dependencia del campo.',
    chapters: [
      { title: 'La reforma agraria', text: 'Cárdenas impulsó el reparto de tierras y la organización de los ejidatarios. En octubre de 1937 ordenó el reparto en La Laguna, uno de los distritos algodoneros más importantes del país. En noviembre de 1939 hizo lo mismo en Lombardía y Nueva Italia, en Michoacán. El gobierno calculó el reparto total en más de dieciocho millones de hectáreas.' },
      { title: 'Trabajadores y corporaciones', text: 'El cardenismo fortaleció a los sindicatos y a las organizaciones campesinas, que se integraron al partido oficial. La reforma agraria y la organización corporativa ampliaron la base social del Estado, pero también crearon dependencia política. Los empresarios y los hacendados resistieron el reparto y la intervención estatal.' },
      { title: 'El legado', text: 'El reparto cardenista transformó el campo y dio tierra a miles de familias, pero muchos ejidos carecieron de agua, crédito y mercados. La producción agrícola no siempre aumentó y la desigualdad persistió. El cardenismo dejó un Estado más interventor y una relación estrecha entre el poder político y las organizaciones sociales.' },
    ],
    people: ['lazaro-cardenas'], sourceIds: ['inehrm-posrevolucion'],
    evidence: [
      { sourceId: 'inehrm-posrevolucion', locator: 'PDF pp. 56–57, 63', supports: 'El reparto ejidal en La Laguna el 6 de octubre de 1937, el de Lombardía y Nueva Italia el 17 de noviembre de 1939 y la cifra total de hectáreas repartidas.' },
    ],
    documentCodes: ['P5-P06', 'P5-S05'],
  },
  {
    id: 'p5-pri', title: '1938–1946: del PRM al Partido Revolucionario Institucional', shortTitle: 'Del PRM al PRI', year: 1938, endYear: 1946, date: '30 de marzo de 1938 – 30 de marzo de 1946',
    location: 'Ciudad de México', states: ['MX-CMX'], coordinates: [-99.13, 19.43], category: 'politica', review: 'verificada',
    summary: 'El PNR se transformó en Partido de la Revolución Mexicana en 1938 y en Partido Revolucionario Institucional en 1946. El cambio acompañó la consolidación de un partido de masas y la transición hacia los gobiernos civiles.',
    chapters: [
      { title: 'El PRM', text: 'El 30 de marzo de 1938 se constituyó el Partido de la Revolución Mexicana, que sustituyó al PNR. El nuevo partido agrupó a obreros, campesinos, militares y sectores populares en cuatro sectores. Su creación formó parte de la reorganización política impulsada por Cárdenas.' },
      { title: 'La transición de 1946', text: 'El PRM se disolvió el 18 de enero de 1946. El 30 de marzo de 1946 se registró el Partido Revolucionario Institucional, que eliminó el sector militar y adoptó una estructura civil. Miguel Alemán se convirtió en su primer candidato presidencial y ganó las elecciones de ese año.' },
      { title: 'Un partido de Estado', text: 'El PRI heredó la organización corporativa y la capacidad de movilizar a amplios sectores. Durante décadas combinó elecciones, clientelismo y control del aparato estatal. Su hegemonía no fue absoluta, pero definió el sistema político mexicano hasta finales del siglo XX.' },
    ],
    people: ['lazaro-cardenas', 'miguel-aleman'], sourceIds: ['inehrm-posrevolucion'],
    evidence: [
      { sourceId: 'inehrm-posrevolucion', locator: 'PDF pp. 57, 98–99', supports: 'La constitución del PRM el 30 de marzo de 1938, su disolución el 18 de enero de 1946 y el registro del PRI el 30 de marzo de 1946.' },
    ],
    documentCodes: ['P5-P07'],
  },
  {
    id: 'p5-petroleo-1938', title: '1938: la expropiación petrolera', shortTitle: 'La expropiación petrolera', year: 1938, date: '18–19 de marzo de 1938',
    location: 'Ciudad de México', states: ['MX-CMX', 'MX-VER', 'MX-TAB'], coordinates: [-99.13, 19.43], category: 'politica', review: 'verificada',
    summary: 'El 18 de marzo de 1938 Cárdenas anunció por radio la expropiación de los bienes de las compañías petroleras que desafiaban la ley. El decreto se firmó al día siguiente y el Estado asumió el control de una industria estratégica.',
    chapters: [
      { title: 'El conflicto laboral', text: 'Las compañías petroleras extranjeras se negaron a acatar un laudo laboral que ordenaba aumentos salariales y mejores condiciones. El conflicto se prolongó y las empresas desconocieron las resoluciones de las autoridades mexicanas. Cárdenas decidió entonces expropiar sus bienes.' },
      { title: 'El anuncio del 18 de marzo', text: 'En la noche del 18 de marzo de 1938, el presidente comunicó por radio las razones de la expropiación. Al día siguiente firmó el decreto que declaraba la expropiación de los bienes de las compañías petroleras. La medida fue presentada como un acto de soberanía y de defensa de los trabajadores.' },
      { title: 'La respuesta', text: 'La expropiación provocó protestas diplomáticas y boicots de las empresas afectadas. El gobierno organizó la industria con apoyo de trabajadores y técnicos, y creó una empresa pública para administrarla. La medida se convirtió en uno de los símbolos más fuertes del nacionalismo económico mexicano.' },
    ],
    people: ['lazaro-cardenas'], sourceIds: ['inehrm-posrevolucion'],
    evidence: [
      { sourceId: 'inehrm-posrevolucion', locator: 'PDF p. 61', supports: 'El anuncio radiofónico del 18 de marzo de 1938 y la firma del decreto de expropiación el 19 de marzo.' },
    ],
    documentCodes: ['P5-H07'],
  },
  {
    id: 'p5-segunda-guerra', title: '1942: México en la Segunda Guerra Mundial y el Programa Bracero', shortTitle: 'Guerra y braceros', year: 1942, date: '13 de mayo – 4 de agosto de 1942',
    location: 'Golfo de México, Ciudad de México y la frontera norte', states: ['MX-CMX', 'MX-TAM', 'MX-VER'], coordinates: [-99.13, 19.43], category: 'politica', review: 'verificada',
    summary: 'El hundimiento de los petroleros Potrero del Llano y Faja de Oro llevó a México a declarar la guerra al Eje en mayo de 1942. Ese mismo año se firmó el Programa Bracero, que envió trabajadores mexicanos a Estados Unidos.',
    chapters: [
      { title: 'Los petroleros hundidos', text: 'El 13 de mayo de 1942 el barco Potrero del Llano fue torpedeado por un submarino alemán en el Golfo de México; murieron cinco marinos mexicanos. El 20 de mayo se hundió el Faja de Oro. El gobierno de Manuel Ávila Camacho declaró la guerra a los países del Eje el 28 de mayo.' },
      { title: 'La movilización', text: 'México participó en la guerra con el Escuadrón 201 y con el envío de trabajadores a Estados Unidos. La cooperación militar y económica fortaleció la relación con Washington y consolidó el papel del Estado en la economía. La guerra también aceleró la industrialización y la migración interna.' },
      { title: 'El Programa Bracero', text: 'El 4 de agosto de 1942 se firmó el acuerdo que creó el Programa Bracero. Miles de trabajadores mexicanos fueron contratados temporalmente en la agricultura y los ferrocarriles estadounidenses. El programa alivió la escasez de mano de obra en Estados Unidos, pero expuso a los migrantes a condiciones precarias y a discriminación.' },
    ],
    people: ['avila-camacho'], sourceIds: ['inehrm-posrevolucion'],
    evidence: [
      { sourceId: 'inehrm-posrevolucion', locator: 'PDF pp. 83–85', supports: 'El hundimiento del Potrero del Llano el 13 de mayo, el del Faja de Oro, la declaración de guerra del 28 de mayo y el acuerdo bracero del 4 de agosto de 1942.' },
    ],
    documentCodes: ['P5-H08', 'P5-S06'],
  },
  {
    id: 'p5-ferrocarrilero', title: '1958–1959: el movimiento ferrocarrilero', shortTitle: 'El movimiento ferrocarrilero', year: 1958, endYear: 1959, date: '1958 – 13 de abril de 1959',
    location: 'Ciudad de México, Veracruz y Guadalajara', states: ['MX-CMX', 'MX-VER', 'MX-JAL'], coordinates: [-99.13, 19.43], category: 'sociedad', review: 'verificada',
    summary: 'Los ferrocarrileros encabezados por Demetrio Vallejo y Valentín Campa exigieron aumentos salariales y democracia sindical. El gobierno respondió con la ocupación de locales y la detención de la dirigencia; Vallejo recibió formal prisión el 13 de abril de 1959.',
    chapters: [
      { title: 'Las demandas', text: 'En 1958, grupos de ferrocarrileros liderados por Valentín Campa y Demetrio Vallejo iniciaron paros parciales y escalonados en la Ciudad de México, Veracruz y Guadalajara. Demandaban mejores salarios y protestaban contra la dirigencia sindical. El movimiento combinó demandas económicas con la exigencia de democracia interna.' },
      { title: 'La huelga general', text: 'El 28 de marzo de 1959 estalló la huelga general de Ferrocarriles Nacionales. Las fuerzas gubernamentales tomaron por asalto los locales sindicales y las instalaciones ferroviarias. La dirigencia fue detenida, entre ellos Demetrio Vallejo, y el gobierno decretó la formal prisión el 13 de abril.' },
      { title: 'El costo de la disidencia', text: 'La represión desarticuló al movimiento, pero no borró sus demandas. Vallejo y Campa permanecieron presos durante años y se convirtieron en símbolos de la lucha sindical independiente. El episodio mostró los límites del sistema político y la tolerancia selectiva del Estado hacia la protesta.' },
    ],
    people: ['vallejo', 'campa'], sourceIds: ['inehrm-posrevolucion'],
    evidence: [
      { sourceId: 'inehrm-posrevolucion', locator: 'PDF pp. 125–126', supports: 'Los paros de 1958, la huelga general del 28 de marzo de 1959, la toma de locales y la formal prisión de Demetrio Vallejo el 13 de abril de 1959.' },
    ],
    documentCodes: ['P5-S07'],
  },
  {
    id: 'p5-tlatelolco', title: '1968: el movimiento estudiantil y Tlatelolco', shortTitle: 'Tlatelolco, 1968', year: 1968, date: 'julio – 2 de octubre de 1968',
    location: 'Ciudad de México', states: ['MX-CMX'], coordinates: [-99.13, 19.43], category: 'politica', review: 'verificada',
    summary: 'El movimiento estudiantil de 1968 exigió libertades democráticas y el fin de la represión. El Consejo Nacional de Huelga articuló las demandas y el 2 de octubre el ejército reprimió la concentración de Tlatelolco, en una masacre que el Estado intentó ocultar.',
    chapters: [
      { title: 'El pliego petitorio', text: 'El movimiento estudiantil surgió en julio de 1968 tras la represión de una pelea entre estudiantes. El pliego petitorio exigía libertad a los presos políticos, destitución de jefes policiacos, desaparición del cuerpo de granaderos y derogación del delito de disolución social. El 4 de agosto se publicó el pliego y al día siguiente se constituyó formalmente el Consejo Nacional de Huelga.' },
      { title: 'La movilización', text: 'El CNH organizó marchas multitudinarias y logró apoyo de profesores, intelectuales y sectores populares. El gobierno de Gustavo Díaz Ordaz combinó la represión con intentos de diálogo. La ocupación militar de escuelas y la detención de estudiantes radicalizaron el conflicto.' },
      { title: 'La masacre', text: 'El 2 de octubre se convocó una concentración en la Plaza de las Tres Culturas, en Tlatelolco. La intervención del ejército terminó en una masacre contra los asistentes. El secretario de Defensa, Marcelino García Barragán, declaró: “El comandante responsable soy yo”. El número exacto de muertos nunca se estableció con claridad y la impunidad marcó el episodio.' },
    ],
    people: ['diaz-ordaz', 'echeverria'], sourceIds: ['inehrm-contemporaneo'],
    evidence: [
      { sourceId: 'inehrm-contemporaneo', locator: 'PDF pp. 9–12', supports: 'El pliego petitorio, la constitución del CNH el 5 de agosto, las marchas y la masacre del 2 de octubre de 1968 en Tlatelolco.' },
    ],
    documentCodes: ['P5-H09', 'P5-P08', 'P5-S08'],
  },
  {
    id: 'p5-halconazo', title: '1971: el Halconazo del Jueves de Corpus', shortTitle: 'El Halconazo', year: 1971, date: '10 de junio de 1971',
    location: 'Ciudad de México', states: ['MX-CMX'], coordinates: [-99.13, 19.43], category: 'politica', review: 'verificada',
    summary: 'El 10 de junio de 1971, un grupo paramilitar conocido como los Halcones atacó una marcha estudiantil en la Ciudad de México. La represión dejó muertos y heridos y mostró la continuidad de la violencia estatal después de 1968.',
    chapters: [
      { title: 'La marcha', text: 'El 10 de junio de 1971, estudiantes de varias escuelas marcharon en la Ciudad de México en el contexto del conflicto por la Ley Orgánica de la Universidad de Nuevo León. La manifestación fue coartada por un grupo paramilitar denominado los Halcones.' },
      { title: 'La represión', text: 'Los Halcones atacaron a los manifestantes con armas y palos. La policía y el ejército no impidieron la agresión y en algunos momentos facilitaron el ataque. El saldo de muertos y heridos no fue establecido con precisión; las cifras oficiales fueron menores que las denunciadas por organizaciones y testigos.' },
      { title: 'La memoria', text: 'El episodio se conoce como la matanza de Jueves de Corpus o Halconazo. Ocurrió durante el gobierno de Luis Echeverría, quien había prometido una apertura democrática. La impunidad y la falta de una investigación completa lo convirtieron en uno de los casos emblemáticos de la violencia estatal del siglo XX.' },
    ],
    people: ['echeverria'], sourceIds: ['inehrm-contemporaneo'],
    evidence: [
      { sourceId: 'inehrm-contemporaneo', locator: 'PDF p. 21', supports: 'La marcha del 10 de junio de 1971, la actuación del grupo paramilitar Halcones y la denominación de matanza de Jueves de Corpus.' },
    ],
    documentCodes: ['P5-S09'],
  },
  {
    id: 'p5-reforma-1977', title: '1977: la reforma política y la apertura electoral', shortTitle: 'La reforma de 1977', year: 1977, date: '1 de abril – 20 de diciembre de 1977',
    location: 'Ciudad de México', states: ['MX-CMX'], coordinates: [-99.13, 19.43], category: 'politica', review: 'verificada',
    summary: 'La reforma política de 1977 creó la representación proporcional y abrió el sistema a partidos de oposición. La Ley Federal de Organizaciones Políticas y Procesos Electorales amplió la Cámara de Diputados y estableció un umbral de 1.5% para el registro.',
    chapters: [
      { title: 'La crisis de representación', text: 'Después de 1968 y del Halconazo, el sistema político enfrentaba una crisis de legitimidad. La oposición de izquierda y de derecha tenía dificultades para acceder al Congreso. El gobierno de José López Portillo impulsó una reforma para ampliar la participación y canalizar el descontento.' },
      { title: 'La representación proporcional', text: 'El 1 de abril de 1977 se aprobó la reforma política impulsada por Jesús Reyes Heroles. La Cámara de Diputados se amplió a 400 miembros: 300 de mayoría relativa y 100 de representación proporcional. Los partidos minoritarios podían acceder a curules si obtenían al menos 1.5% de la votación.' },
      { title: 'La LFOOPE', text: 'El 20 de diciembre de 1977 se promulgó la Ley Federal de Organizaciones Políticas y Procesos Electorales, que sustituyó la ley electoral de 1973. La reforma legalizó nuevos partidos y amplió los espacios de oposición, aunque el PRI conservó el control del gobierno y de la mayoría legislativa. Fue el inicio de un largo proceso de apertura que llegaría a la alternancia en 2000.' },
    ],
    people: ['lopez-portillo'], sourceIds: ['inehrm-contemporaneo'],
    evidence: [
      { sourceId: 'inehrm-contemporaneo', locator: 'PDF pp. 40–42', supports: 'La aprobación de la reforma política el 1 de abril de 1977, la creación de 300 diputados de mayoría y 100 de representación proporcional, el umbral de 1.5% y la promulgación de la LFOOPE el 20 de diciembre.' },
    ],
    documentCodes: ['P5-P09'],
  },
  {
    id: 'p5-crisis-1982', title: '1982: la crisis de la deuda y la nacionalización de la banca', shortTitle: 'La crisis de 1982', year: 1982, date: '1 de septiembre – 10 de noviembre de 1982',
    location: 'Ciudad de México', states: ['MX-CMX'], coordinates: [-99.13, 19.43], category: 'politica', review: 'verificada',
    summary: 'En 1982 México enfrentó una crisis de deuda, fuga de capitales e inflación. El 1 de septiembre, López Portillo anunció la nacionalización de la banca y el control de cambios; en noviembre el gobierno firmó una carta de intención con el FMI.',
    chapters: [
      { title: 'El endeudamiento', text: 'Durante los años setenta, México financió su crecimiento con petróleo y deuda externa. La caída de los precios del petróleo y el aumento de las tasas de interés internacionales en 1981–1982 hicieron insostenible el servicio de la deuda. La fuga de capitales y la inflación agravaron la crisis.' },
      { title: 'La nacionalización', text: 'El 1 de septiembre de 1982, en su último informe de gobierno, José López Portillo anunció la nacionalización de la banca y el establecimiento del control de cambios. La medida pretendía frenar la fuga de divisas y recuperar el control del sistema financiero. Fue recibida con apoyos populares y con fuerte oposición empresarial.' },
      { title: 'El ajuste', text: 'La crisis llevó a la devaluación del peso, a la caída del producto y a un programa de austeridad. El 10 de noviembre de 1982 el gobierno firmó una carta de intención con el Fondo Monetario Internacional. La nacionalización bancaria fue revertida parcialmente en los años siguientes, pero la crisis marcó el fin del modelo de crecimiento por sustitución de importaciones.' },
    ],
    people: ['lopez-portillo', 'de-la-madrid'], sourceIds: ['inehrm-contemporaneo'],
    evidence: [
      { sourceId: 'inehrm-contemporaneo', locator: 'PDF pp. 55–56', supports: 'El anuncio del 1 de septiembre de 1982 sobre la nacionalización de la banca y el control de cambios, y la carta de intención con el FMI del 10 de noviembre.' },
    ],
    documentCodes: ['P5-H10', 'P5-P10', 'P5-S10'],
  },
  {
    id: 'p5-influenza-1918', title: '1918: la pandemia de influenza en México', shortTitle: 'La influenza de 1918', year: 1918, date: 'verano de 1918 – 1919',
    location: 'Territorio nacional', states: ['MX-CMX', 'MX-VER', 'MX-JAL', 'MX-NLE'], coordinates: [-99.13, 19.43], category: 'salud', review: 'verificada',
    summary: 'La influenza de 1918 llegó a México por la frontera estadounidense y se extendió por todo el país en dos meses. Las autoridades cerraron escuelas, prohibieron reuniones y aislaron enfermos; la epidemia mostró la fragilidad del sistema sanitario.',
    chapters: [
      { title: 'La llegada', text: 'La llamada gripe española llegó en el verano de 1918 por la frontera con Estados Unidos. En los dos meses siguientes había atacado a toda la República. La desnutrición y las condiciones de la guerra agravaron sus efectos, y la enfermedad afectó a todas las clases sociales.' },
      { title: 'La respuesta sanitaria', text: 'Las autoridades aplicaron medidas de aislamiento, prohibieron reuniones y cerraron escuelas y lugares públicos. En octubre de 1918 se cerraron minerales en Ciudad Juárez, Torreón y Saltillo ante los brotes. La profilaxis se concentró en evitar el contagio, pues no existían vacunas ni tratamientos eficaces.' },
      { title: 'El impacto', text: 'La epidemia duró en promedio seis semanas en cada región y dejó una mortalidad elevada, sobre todo entre adultos jóvenes. Debilitó aún más a una población golpeada por la guerra civil y la escasez. La experiencia influyó en la creación de instituciones sanitarias en la década siguiente.' },
    ],
    people: ['carranza'], sourceIds: ['salud-constitucion', 'inehrm-posrevolucion'],
    evidence: [
      { sourceId: 'salud-constitucion', locator: 'PDF pp. 100–101', supports: 'La llegada de la influenza en el verano de 1918 por la frontera estadounidense, su extensión a toda la República en dos meses, la duración promedio de seis semanas y las medidas de aislamiento.' },
      { sourceId: 'inehrm-posrevolucion', locator: 'PDF p. 19', supports: 'El cierre de minerales en Ciudad Juárez, Torreón y Saltillo en octubre de 1918 por los brotes de influenza.' },
    ],
    documentCodes: ['P5-D02', 'P5-M01'],
  },
  {
    id: 'p5-salud-instituciones', title: '1921–1943: la construcción de las instituciones sanitarias', shortTitle: 'Instituciones de salud', year: 1921, endYear: 1943, date: '1921–1943',
    location: 'Ciudad de México', states: ['MX-CMX'], coordinates: [-99.13, 19.43], category: 'salud', review: 'verificada',
    summary: 'Entre 1921 y 1943 México creó el Instituto de Higiene, la Escuela de Salubridad, el IMSS y la Secretaría de Salubridad y Asistencia. El Estado amplió su capacidad de investigación, formación y atención, aunque la cobertura siguió siendo desigual.',
    chapters: [
      { title: 'Higiene y formación', text: 'En 1921 se estableció el Instituto de Higiene, heredero del Instituto Bacteriológico Nacional. En 1922 se inauguró la Escuela de Salubridad, que formó a los primeros cuadros de salud pública. En 1923 se registró el último caso de fiebre amarilla en México, un hito en el control de la enfermedad.' },
      { title: 'La salud pública', text: 'En 1926 se publicó el reglamento interior del Consejo de Salubridad General, que ratificó las atribuciones constitucionales del organismo. Las campañas contra el tifo, la viruela y la tuberculosis se multiplicaron. La medicina preventiva y la educación higiénica se volvieron parte de la acción estatal.' },
      { title: 'El IMSS y la SSA', text: 'El 15 de mayo de 1943, Manuel Ávila Camacho expidió el decreto fundador del Instituto Mexicano del Seguro Social. Ese mismo año se creó la Secretaría de Salubridad y Asistencia, que sustituyó al Departamento de Salubridad. El IMSS atendió a trabajadores asalariados y la SSA asumió la salud pública y la asistencia social.' },
    ],
    people: ['obregon', 'calles', 'avila-camacho'], sourceIds: ['salud-constitucion', 'inehrm-posrevolucion'],
    evidence: [
      { sourceId: 'salud-constitucion', locator: 'PDF pp. 96, 244', supports: 'El Instituto de Higiene de 1921, la Escuela de Salubridad de 1922, el último caso de fiebre amarilla en 1923 y la creación de la SSA en 1943.' },
      { sourceId: 'inehrm-posrevolucion', locator: 'PDF p. 90', supports: 'El decreto fundador del IMSS del 15 de mayo de 1943.' },
    ],
    editorialNotes: ['La ficha original fechaba el inicio de la campaña antituberculosa en 1934. Las fuentes leídas documentan el problema de la tuberculosis y las campañas sanitarias, pero no permiten fijar con precisión esa fecha; el código P5-M05 queda en el ledger.'],
    documentCodes: ['P5-M02', 'P5-M03', 'P5-M04', 'P5-M06', 'P5-M07'],
  },
  {
    id: 'p5-vacunacion', title: '1956–1973: la vacunación masiva y el Programa Nacional de Inmunizaciones', shortTitle: 'La vacunación masiva', year: 1956, endYear: 1973, date: '1956–1973',
    location: 'Territorio nacional', states: ['MX-CMX'], coordinates: [-99.13, 19.43], category: 'salud', review: 'verificada',
    summary: 'México introdujo la vacuna Salk contra la poliomielitis en 1956 y creó el Programa Nacional de Inmunizaciones en 1973. La vacunación masiva redujo enfermedades que habían causado epidemias recurrentes.',
    chapters: [
      { title: 'La poliomielitis', text: 'La poliomielitis fue una de las enfermedades infantiles más temidas del siglo XX. México introdujo la vacuna Salk en 1956 y organizó campañas de vacunación en escuelas y centros de salud. La vacuna Sabin, oral, llegó en 1962 y facilitó la aplicación masiva.' },
      { title: 'El programa de 1973', text: 'En 1973 se creó el Programa Nacional de Inmunizaciones, que sistematizó la aplicación de vacunas y amplió la cobertura. El programa incluyó la BCG, la DPT, la antipoliomielítica y la antisarampionosa. Las campañas se apoyaron en el personal de salud y en la organización comunitaria.' },
      { title: 'Los resultados', text: 'La vacunación masiva redujo la incidencia de la poliomielitis, la difteria, el tétanos y el sarampión. El último caso de poliomielitis en México se registró en 1990, en Tomatlán, Jalisco. La erradicación y el control exigieron mantener la vigilancia y la cobertura, no solo una campaña puntual.' },
    ],
    people: [], sourceIds: ['salud-vacunas'],
    evidence: [
      { sourceId: 'salud-vacunas', locator: 'PDF pp. 20–23', supports: 'La introducción de la vacuna Salk en 1956, la creación del Programa Nacional de Inmunizaciones en 1973 y el último caso de poliomielitis en Tomatlán, Jalisco, en 1990.' },
    ],
    documentCodes: ['P5-M08', 'P5-M09'],
  },
  {
    id: 'p5-sinaloa-drogas', title: '1910–1950: los primeros circuitos de opio y amapola en Sinaloa', shortTitle: 'Opio y amapola en Sinaloa', year: 1910, endYear: 1950, date: '1910–1950',
    location: 'Mazatlán, Culiacán y Badiraguato, Sinaloa', states: ['MX-SIN'], coordinates: [-106.42, 23.25], category: 'seguridad', review: 'contextual',
    summary: 'La migración china, el comercio marítimo y la crisis minera del noroeste articularon los primeros circuitos de opio y amapola en Sinaloa. Las redes familiares de los años cuarenta fueron un antecedente de estructuras posteriores, no un cártel único ni una historia continua.',
    chapters: [
      { title: 'Migración china y opio', text: 'La presencia de migrantes chinos en Mazatlán, Los Mochis y Culiacán se asoció al comercio y al consumo de opio desde finales del siglo XIX y principios del XX. Las campañas antichinas de las décadas de 1910 a 1930 estigmatizaron a esa comunidad y vincularon la droga con la migración. Esa relación fue construida en parte por el prejuicio y no explica por sí sola el desarrollo del mercado.' },
      { title: 'La amapola en la sierra', text: 'A finales de los años treinta y principios de los cuarenta, la amapola comenzó a sembrarse cerca de Santiago los Caballeros, en Badiraguato, en la Sierra Madre Occidental. El cultivo ofreció una salida al desempleo de los mineros de la región. La ubicación serrana dificultaba la vigilancia y favorecía la producción clandestina.' },
      { title: 'Redes familiares', text: 'En las décadas siguientes se articularon redes familiares dedicadas a la “goma” de opio, entre ellas las encabezadas por Manuela Caro, Gil Caro y Rafael Fonseca, y más tarde por Ernesto Fonseca Carrillo, “Don Neto”. Esas redes fueron locales y cambiantes; no deben confundirse con el Cártel de Guadalajara, que se formó después y con otros actores.' },
    ],
    people: ['fonseca'], sourceIds: ['unam-sinaloa-drogas'],
    evidence: [
      { sourceId: 'unam-sinaloa-drogas', locator: 'pp. 2–6', supports: 'La relación entre migración china, comercio de opio y campañas antichinas; el inicio del cultivo de amapola en Badiraguato a finales de los años treinta y principios de los cuarenta; y las redes familiares de “goma” de opio.' },
    ],
    editorialNotes: ['La historia se marca como contextual porque describe un proceso social y económico, no un acontecimiento puntual. No se reproduce la afirmación de la fuente sobre una promoción estadounidense del cultivo en 1940, que no pudo verificarse de forma independiente.'],
    documentCodes: ['P5-C01', 'P5-C02', 'P5-C03', 'P5-C04', 'P5-C05'],
  },
]
