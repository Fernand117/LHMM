import { writeFileSync } from 'node:fs'
import { documentEntries } from '../src/data/document'
import { period1 } from '../src/data/researched/period1'
import { period2 } from '../src/data/researched/period2'
import { period3 } from '../src/data/researched/period3'
import { period4 } from '../src/data/researched/period4'
import { period5 } from '../src/data/researched/period5'
import { period6 } from '../src/data/researched/period6'

const corpus = [...period1, ...period2, ...period3, ...period4, ...period5, ...period6]

// Codes that are covered by a published story but are not part of its canonical
// documentCodes list. They keep a searchable trace without pretending to be the
// story's main entry.
const related: Record<string, { story: string; note: string }> = {
  'P1-H01': { story: 'p1-alianzas', note: 'La historia narra la expedición y la alianza tlaxcalteca; no reconstruye por separado el desembarco ni la fundación de la Villa Rica.' },
  'P1-P03': { story: 'p1-virreinato', note: 'El gobierno posterior a 1521 se aborda dentro de la historia del virreinato; los repartimientos no se detallan.' },
  'P5-M10': { story: 'p6-sida-1981', note: 'Los primeros antecedentes del VIH/sida se remiten a la historia del primer caso documentado en 1981 y la vigilancia de 1987.' },
}

// Codes without a published story. The reason is deliberately concrete: it
// records what is missing, not a judgment about whether the episode existed.
const specificWithdrawn: Record<string, string> = {
  'P2-H04': 'La descarga de la fuente sobre piratería no se completó; el asalto de Lorencillo a Veracruz en 1683 no quedó verificado.',
  'P2-C06': 'El saqueo de Veracruz de 1683 depende de la misma fuente no completada; no se publica como hecho verificado.',
  'P2-D04': 'El directorio proponía F48, una lectura sobre la conquista; no se leyó evidencia del sismo de 1711.',
  'P4-C06': 'F48 no corresponde al tema y la referencia sobre prensa y ficción no prueba por sí sola los hechos atribuidos a Chucho el Roto.',
  'P5-M05': 'Las fuentes leídas documentan la tuberculosis y las campañas sanitarias, pero no permiten fijar con precisión el inicio de la campaña en 1934.',
  'P6-H06': 'No se leyó evidencia específica del despliegue federal de 2006 y la escalada de violencia; la cronología del INEHRM termina en 2000.',
  'P6-C05': 'No se leyó evidencia específica sobre la escalada de operativos y disputas criminales de 2006; no se traza una continuidad no documentada.',
  'P6-P08': 'No se leyó la reforma de 2014 que transformó el IFE en INE; las páginas institucionales consultadas no devolvieron contenido utilizable.',
  'P6-C08': 'No se leyó el expediente ni una investigación específica sobre la desaparición de los 43 normalistas; se retira en lugar de resumirla sin respaldo.',
  'P6-C09': 'No se leyó evidencia específica del operativo de 2019 en Culiacán.',
  'P6-D05': 'El estudio de desastres registra el huracán Wilma en una tabla agregada, pero no se redactó una historia específica con detalle suficiente.',
  'P6-D06': 'El estudio de desastres registra las inundaciones de Tabasco de 2007 en una tabla agregada, pero no se redactó una historia específica con detalle suficiente.',
}

const themeReason: Record<string, string> = {
  H: 'No se leyó una fuente específica que sostenga el episodio con la precisión necesaria; se retira de la narración pública.',
  P: 'No se leyó una fuente específica sobre el episodio; no se presenta como historia investigada.',
  S: 'No se leyó una fuente específica sobre el episodio; se retira en lugar de resumirlo sin respaldo.',
  C: 'El directorio agrupa fenómenos ilícitos de épocas distintas; no se leyó evidencia específica y no se traza una genealogía criminal no demostrada.',
  D: 'El estudio de desastres consultado ofrece agregados o no cubre el episodio; no se redactó una historia específica.',
  M: 'No se leyó una fuente específica sobre el episodio; se retira la ficha en lugar de presentar una cronología aproximada.',
}

const codeToStories = new Map<string, string[]>()
for (const event of corpus) for (const code of event.documentCodes ?? []) {
  const list = codeToStories.get(code) ?? []
  list.push(event.id)
  codeToStories.set(code, list)
}

const codes: Record<string, unknown> = {}
const counts = { integrada: 0, relacionada: 0, duplicada: 0, retirada: 0 }

for (const entry of documentEntries) {
  const stories = codeToStories.get(entry.code) ?? []
  const base = {
    title: entry.title,
    year: entry.yearLabel,
    theme: entry.theme,
    guideSourceCodes: entry.sourceCodes,
  }
  if (stories.length > 1) {
    counts.duplicada++
    codes[entry.code] = {
      ...base,
      status: 'duplicada',
      stories,
      note: 'El mismo código del directorio se reparte entre dos historias complementarias; el enlace antiguo abre la primera.',
    }
  } else if (stories.length === 1) {
    const event = corpus.find((item) => item.id === stories[0])!
    counts.integrada++
    codes[entry.code] = {
      ...base,
      status: 'integrada',
      stories,
      review: event.review,
      evidence: event.evidence ?? [],
    }
  } else if (related[entry.code]) {
    counts.relacionada++
    codes[entry.code] = {
      ...base,
      status: 'relacionada',
      stories: [related[entry.code].story],
      note: related[entry.code].note,
    }
  } else {
    counts.retirada++
    codes[entry.code] = {
      ...base,
      status: 'retirada',
      stories: [],
      reason: specificWithdrawn[entry.code] ?? themeReason[entry.theme],
    }
  }
}

const ledger = {
  schema: 1,
  generated: '2026-10-30',
  guide: {
    file: 'Historia_Mexico_360_eventos.docx',
    note: 'El documento se usa como directorio temático. No es una fuente histórica y sus códigos no se muestran como procedencia pública.',
  },
  summary: {
    totalCodes: documentEntries.length,
    ...counts,
    publishedStories: corpus.length,
  },
  codes,
}

writeFileSync('research/ledger.json', JSON.stringify(ledger, null, 2))
console.log(ledger.summary)
