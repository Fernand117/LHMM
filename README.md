# LHMM · La Historia del México Moderno

**Cinco siglos de historias conectadas.** Un atlas interactivo de la historia de México, construido con **React, TypeScript y Vite**. El punto de partida de LHMM: explorar sucesos, lugares y personajes, y entender sus conexiones sin convertir las hipótesis en hechos.

## Ejecutar

Se recomienda **Node.js 22.12 o posterior (LTS)** y npm.

```sh
npm ci
npm run dev
```

Vite mostrará la dirección local, normalmente `http://localhost:5173`.

```sh
npm run build     # TypeScript y compilación de producción en dist/
npm run preview   # Servir la compilación localmente
npm test          # Integridad del corpus, evidencia, filtros y red
npm run test:e2e  # Interacción real en Chromium
```

Para instalar el navegador de pruebas la primera vez:

```sh
npx playwright install chromium
```

## Qué incluye

- Mapa SVG real de los **32 estados**, con selección por ratón o teclado, selector accesible, acercamiento y desplazamiento cuando se amplía.
- **118 historias investigadas**: 104 verificadas, 4 corregidas y 10 de contexto documentado. Cada una declara qué fuente apoya qué afirmación y, cuando existe, el localizador consultado.
- Seis épocas y seis temas, incluida una categoría específica de **salud y cuidados**. Filtros combinables por época, tema, estado, texto y periodo; las fechas se filtran por intersección.
- Cronología ordenable, con carga progresiva de 30 historias por bloque.
- Red de **236 vínculos**: 15 documentados, 19 de contexto y 202 menciones. Una mención permite navegar, pero no prueba causalidad, complicidad ni responsabilidad. La red muestra hasta ocho vecinos por vista.
- Relatos por secciones, personajes relacionados, evidencia localizada y análisis de versiones en disputa o sin evidencia.
- Directorio buscable de **128 personajes**, con **79 retratos, fotografías o representaciones publicados**, autoría/crédito declarado, licencia y enlaces al archivo de origen. Se distinguen las pinturas y esculturas de las fotografías del personaje. Cuando no se identifica un retrato con derechos claros, no se sustituye por otra persona.
- **Imágenes de época** (manuscritos, pinturas y fotografías históricas) como contexto cuando no existe una imagen específica del acontecimiento. Se etiquetan por tipo y fecha; nunca se presentan como registro del hecho narrado.
- Guardados en `localStorage`, enlaces compartibles, atajo `Ctrl/Cmd + K`, diálogos con cierre mediante Escape y diseño adaptable a móviles.
- Apariencia **Sistema / Claro / Oscuro**, con selección en la cabecera, preferencia persistente y sincronización entre pestañas.
- Metodología, **45 referencias leídas y citadas**, créditos y registro interno de cobertura consultables desde la interfaz.

## Estructura

```text
src/
  App.tsx                     Estado de navegación, filtros, guardados y URL
  styles.css                  Diseño editorial y adaptación a pantallas
  components/                 Mapa, cronología, red, fichas y diálogos
  data/
    types.ts                  Modelo de datos (revisión y evidencia)
    events.ts                 Corpus público y resolución de alias
    researched/
      period1.ts … period6.ts Historias investigadas por época
      aliases.ts              Códigos del directorio y enlaces antiguos
      index.ts                Ensamblado del corpus
    research-sources.ts       Publicaciones leídas y citadas
    sources.ts                Acceso a las fuentes investigadas
    review.ts                 Etiquetas y descripción de los estados de revisión
    eras.ts                   Las seis épocas del atlas
    catalog.ts                Temas, estados y personajes
    connections.ts            Vínculos documentados, de contexto y menciones
    period-media.json         Imágenes de época y sus créditos
    media-credits.json        Metadatos de imágenes de acontecimientos
    portraits.json            Metadatos adquiridos de imágenes de personajes
    portraits.ts              Colección de imágenes publicables
    portrait-policy.ts        Exclusiones y pies de imagen revisados
  lib/archive.ts              Búsqueda, filtros y serialización de URL
  lib/network.ts              Red local y paginación
  lib/theme.ts                Preferencias y resolución de apariencia
  hooks/useTheme.ts           Sistema, persistencia y sincronización del tema
  tests/                      Pruebas de datos y lógica
research/
  ledger.json                 Cobertura de las 360 entradas del directorio
  corpus-index.json           Índice interno de historias y códigos
public/
  mexico-states.geo.json      Cartografía local de DataMaps
  images/                     Imágenes originales y metadatos de procedencia
  licenses/datamaps.txt       Licencia MIT de la cartografía
e2e/                          Pruebas de navegación con Playwright
scripts/                      Importación, auditoría, descarga y extracción
```

### Incorporar una historia

1. Leer una publicación identificable y registrarla en `src/data/research-sources.ts`. Conservar fecha, autoría editorial y tipo de fuente; evitar enlazar solamente una búsqueda.
2. Añadir la ficha en `src/data/researched/periodN.ts`. Indicar año, geografía, capítulos, personas, `review` y `evidence`. Cada elemento de evidencia debe decir qué apoya y, si existe, el localizador consultado.
3. Registrar personajes nuevos en `src/data/catalog.ts` o `src/data/people-extra.ts`. Los alias conservadores evitan confundir homónimos.
4. Añadir conexiones en `src/data/connections.ts` **solo si se puede explicar y respaldar el vínculo**. Marcar `contexto` cuando corresponda; las menciones se generan aparte.
5. Verificar derechos de imagen y completar sus créditos. No usar una foto contemporánea como supuesto registro de un hecho histórico.
6. Ejecutar `npm test` y `npm run build`.

Ejemplo de enlace que conserva una vista y una ficha:

```text
/?estado=MX-JAL&vista=cronologia&evento=p6-cartel-guadalajara
/?epoca=p6&tema=politica&evento=p6-eleccion-1988
/?personaje=sor-juana
```

Las fotografías, metadatos y el mapa están incluidos en el repositorio: **no hace falta ejecutar `npm run assets` para usar el sitio**.

## Investigación, retiradas y trazabilidad

El documento `Historia_Mexico_360_eventos.docx` se usó **solo como directorio temático**. No es una fuente histórica y no se publica en `public/`. Sus 360 entradas se conservan como códigos internos de trazabilidad en `research/ledger.json`:

- **275 integradas** en una historia investigada.
- **3 relacionadas** con una historia que las cubre contextualmente.
- **1 duplicada**, repartida entre dos historias complementarias.
- **81 retiradas** por falta de evidencia específica. Cada retirada conserva el motivo concreto.

Los códigos del directorio no aparecen como procedencia pública. Los enlaces antiguos que apuntan a una historia con sucesora investigada se redirigen; los que apuntan a una historia retirada no abren una ficha sin respaldo.

Las publicaciones descargadas se leyeron antes de citarlas. Las lecturas completas se conservan **fuera del repositorio** por derechos de autor; la aplicación solo publica la referencia, el localizador y qué apoya. Una fuente institucional tampoco es infalible: la evidencia se registra por afirmación, no como respaldo global de todo el relato.

### Retratos e imágenes de época

Para adquirir imágenes opcionalmente (se pueden indicar identificadores concretos):

```sh
npm run assets:portraits
npm run assets:portraits -- sor-juana zaragoza
```

El script consulta imágenes de Wikipedia y metadatos compartidos de Commons, exige una licencia admitida (dominio público, CC0, CC BY o CC BY-SA), descarga recursos locales y registra su SHA-256. La adquisición no verifica la identidad: `portrait-policy.ts` excluye, entre otros, un paisaje del Paricutín, una portada de libro, una escena no individualizable y un recorte atribuido de forma dudosa a Colosio. Los archivos excluidos no se sirven como retratos.

Las imágenes de época se adquieren con `scripts/download-period-media.mjs` y se describen en `src/data/period-media.json`. Su tipo (`Manuscrito del siglo XVI`, `Pintura de época`, `Fotografía histórica`) se muestra en la ficha. Las licencias son las declaradas por el repositorio, no un dictamen jurídico propio.

### Apariencia y preferencias

El selector de cabecera permite seguir al dispositivo o fijar un tema claro u oscuro. La elección se guarda en `lhmm-theme-v1`. Los guardados utilizan `lhmm-saved-v1` y migran identificadores antiguos a la historia investigada que los sustituye. Ninguna preferencia requiere una cuenta o se envía a un servidor.

## Criterio editorial y límites

- **Una cita no es una verificación global.** Cada historia distingue lo que una fuente sostiene de lo que no pudo confirmarse. Cuando un episodio no se pudo sostener con evidencia leída, se retiró en lugar de presentarse como investigado.
- Los estados actuales son una referencia geográfica, no fronteras históricas válidas para todos los siglos ni mapas actuales de control criminal.
- Se corrigió la fecha del primer caso documentado de sida de **1983 a 1981**, según la cronología del INEHRM. La precisión se explica en las notas de revisión.
- Se distingue el sismo del **7/8 de septiembre de 2017** del sismo del **19 de septiembre de 2017**; no se suman sus cifras ni se atribuyen los mismos daños.
- Las hipótesis ministeriales del caso Colosio no se presentan como condenas. La falta de evidencia de una teoría conspirativa se señala explícitamente.
- No se muestra material gráfico explícito. Los vídeos enlazan al canal original. Las fuentes externas pueden cambiar, bloquear automatismos o requerir suscripción; sus titulares de primeras horas no equivalen a balances finales.
- Las historias son síntesis documentadas, no artículos académicos definitivos. La revisión especializada y los expedientes completos siguen siendo la siguiente etapa.

## Siguiente etapa sugerida

Esta versión es un **frontend con colección local**, sin servidor, CMS, cuentas ni recepción pública de aportaciones. Para crecer: revisión editorial del corpus, base de datos relacional o de grafos, administración con historial de cambios, gestión de derechos audiovisuales y un flujo de contribuciones moderadas.

## Créditos

Cartografía: [DataMaps](https://github.com/markmarkoh/datamaps), MIT; licencia incluida. Imágenes de contexto: créditos en `public/images/credits.json`. Imágenes de época: `src/data/period-media.json`. Personajes: `src/data/portraits.json` y `src/data/portrait-policy.ts`. Todos los créditos publicables están en la interfaz y en los perfiles, con enlaces al archivo original y a la licencia cuando corresponde. Se conservan los archivos descargados sin retoque; los recortes de presentación se hacen por CSS. Los vídeos y artículos no se descargan ni se republican: se enlaza a sus editores.
