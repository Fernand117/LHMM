// Acquisition is not identity review. These lead images are deliberately not
// published as portraits, even if the repository's license passes the filter.
export const portraitExclusions: Record<string, string> = {
  'dionisio-pulido': 'La imagen encontrada muestra el volcán Paricutín, no a Dionisio Pulido.',
  'francisco-hernandez': 'La imagen encontrada es una portada de libro, no un retrato de Francisco Hernández.',
  'jeronimo-aguilar': 'La imagen es una escena de varios personajes; no se recorta como supuesto retrato identificado.',
  'colosio-persona': 'El recorte de una fotografía de campaña no permite atribuir con seguridad la identidad de la persona mostrada.',
  'felix-gallardo': 'La atribución a una agencia estadounidense no está sustentada por la fuente de prensa indicada; derechos pendientes de revisión.',
}

export const representationPortraits = new Set([
  'cortes', 'malintzin', 'cuauhtemoc', 'hidalgo', 'moctezuma', 'cuitlahuac', 'alvarado', 'antonio-mendoza',
  'carlos-v', 'moya-contreras', 'vasco-quiroga', 'andres-urdaneta', 'john-hawkins', 'francis-drake', 'sahagun', 'yanga', 'rodrigo-pacheco',
  'lorencillo', 'van-hoorn', 'carlos-iii', 'iturrigaray', 'felipe-iii', 'virrey-gelves', 'palafox',
  'conde-paredes', 'felipe-v', 'galvez', 'primo-verdad', 'sor-juana', 'revillagigedo', 'balmis',
  'allende', 'josefa-ortiz', 'riano', 'morelos', 'calleja', 'iturbide', 'guerrero', 'victoria',
  'santa-anna', 'mariano-otero', 'juarez', 'lorencez', 'miguel-lerdo', 'napoleon-iii', 'barreda', 'reyes-heroles', 'vallejo',
])

export const portraitCaptionOverrides: Record<string, string> = {
  lorencillo: 'Representación idealizada de Laurens de Graaf en una cromolitografía comercial del siglo XIX. No es un retrato del natural ni una fotografía del personaje.',
  'van-hoorn': 'Representación idealizada de Nicolás van Hoorn en una cromolitografía comercial del siglo XIX. No es un retrato del natural ni una fotografía del personaje.',
  balmis: 'Fotografía de una escultura dedicada a Francisco Javier Balmis en Alicante; es una representación posterior, no una fotografía del médico.',
  'mariano-otero': 'Fotografía de la estatua de Mariano Otero en Guadalajara. Es una representación posterior, no una fotografía del jurista.',
  vallejo: 'Fotografía de un busto dedicado a Demetrio Vallejo. Es una representación escultórica, no una fotografía del dirigente.',
  campa: 'Imagen fotográfica de Valentín Campa reproducida en una placa conmemorativa; consulta autoría y contexto en el archivo original.',
  'sor-juana': 'Retrato pictórico de sor Juana Inés de la Cruz, por Miguel Cabrera, hacia 1750. Es una representación posterior a su muerte, no una fotografía.',
  'reyes-heroles': 'Fotografía de un retrato pintado de Jesús Reyes Heroles en la Facultad de Derecho de la UNAM. Es una representación pictórica, no una fotografía directa del personaje.',
  'mencho-persona': 'Fotografía de identificación atribuida por el archivo al Departamento de Policía de San Francisco, en 1989. No es una imagen del operativo de Tapalpa de 2026.',
}
