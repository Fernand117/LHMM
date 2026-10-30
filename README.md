# LHMM · La Historia del México Moderno

**Cinco siglos de historias conectadas.** Un atlas interactivo de la historia de México, construido con **React, TypeScript y Vite**. El punto de partida de LHMM: explorar sucesos, lugares y personajes, y entender sus conexiones sin convertir las hipótesis en hechos.

## Ejecutar

Se recomienda **Node.js 22.12 o posterior (LTS)** y npm. Node 21 no está soportado oficialmente por las herramientas, aunque la compilación se ha comprobado en el entorno inicial del proyecto.

```sh
npm ci
npm run dev
```

Vite mostrará la dirección local, normalmente `http://localhost:5173`.

```sh
npm run build     # TypeScript y compilación de producción en dist/
npm run preview   # Servir la compilación localmente
npm test          # Integridad de datos, búsquedas, filtros y enlaces
npm run test:e2e  # Interacción real en Chromium
```

Para instalar el navegador de pruebas la primera vez:

```sh
npx playwright install chromium
```

## Qué incluye esta primera versión

- Mapa SVG real de los **32 estados**, con selección por ratón o teclado, selector accesible, acercamiento y desplazamiento cuando se amplía.
- **20 fichas iniciales**, desde 1519 hasta el operativo de Tapalpa de febrero de 2026. No pretende ser todavía un registro de toda la historia de México.
- Cronología ordenable y filtros combinables por tema, estado, texto y periodo. Los periodos se filtran por intersección.
- Red navegable de **22 conexiones**, con acontecimientos y personajes. Cada línea explica su respaldo y distingue vínculos documentados de relaciones de contexto.
- Relatos por secciones, personajes relacionados, fuentes externas y análisis de versiones en disputa o sin evidencia.
- Fotografías locales con autoría, licencias y advertencias cuando son imágenes de contexto. Un enlace audiovisual inicial al canal de EL PAÍS.
- Guardados en `localStorage`, enlaces compartibles, atajo `Ctrl/Cmd + K`, diálogos con cierre mediante Escape y diseño adaptable a móviles.
- Apariencia **Sistema / Claro / Oscuro**, con selección en la cabecera, preferencia persistente y sincronización entre pestañas. El modo Sistema sigue los cambios del dispositivo; el tema se aplica antes de cargar React para evitar un destello claro al abrir en oscuro.
- Página de metodología, directorio de **25 referencias** y créditos consultables desde la interfaz.

## Estructura

```text
src/
  App.tsx                     Estado de navegación, filtros, guardados y URL
  styles.css                  Diseño editorial y adaptación a pantallas
  components/                 Mapa, cronología, red, fichas y diálogos
  data/
    types.ts                  Modelo de datos
    events.ts                 Fichas y análisis de versiones
    catalog.ts                Temas, estados y personajes
    connections.ts            Relaciones, explicación y referencias
    sources.ts                Directorio de fuentes
    media-credits.json        Metadatos de las imágenes
  lib/archive.ts              Búsqueda, filtros y serialización de URL
  lib/theme.ts                Preferencias y resolución de apariencia
  hooks/useTheme.ts           Sistema, persistencia y sincronización del tema
  tests/                      Pruebas de datos y lógica
public/
  mexico-states.geo.json      Cartografía local de DataMaps
  images/                     Imágenes originales y metadatos de procedencia
  licenses/datamaps.txt        Licencia MIT de la cartografía
e2e/                          Pruebas de navegación con Playwright
scripts/download-assets.mjs   Descarga reproducible de recursos y licencias
```

### Incorporar un acontecimiento

1. Registrar referencias identificables en `src/data/sources.ts`. Conservar fecha, autoría editorial y tipo de fuente; evitar enlazar solamente una búsqueda.
2. Añadir una ficha en `src/data/events.ts`, con fecha precisa o periodo declarado, estados actuales de referencia, coordenadas, capítulos e identificadores de fuentes.
3. Registrar personajes nuevos en `src/data/catalog.ts`.
4. Añadir conexiones en `src/data/connections.ts` **solo si se puede explicar y respaldar el vínculo**. Marcar `contexto` cuando no existe una relación causal probada.
5. Verificar derechos de imagen y completar sus créditos. No usar una foto contemporánea como supuesto registro de un hecho histórico.
6. Ejecutar `npm test` y `npm run build`.

Ejemplo de enlace que conserva una vista y una ficha:

```text
/?estado=MX-JAL&vista=cronologia&evento=mencho
```

Las fotografías, metadatos y el mapa están incluidos en el repositorio: **no hace falta ejecutar `npm run assets` para usar el sitio**. Ese comando solo regenera los recursos desde sus orígenes y requiere conexión a internet. Las tipografías se solicitan a Google Fonts, con fuentes de sistema como alternativa.

### Apariencia y preferencias

El selector de cabecera permite seguir al dispositivo o fijar un tema claro u oscuro. La elección se guarda en `lhmm-theme-v1`. Si el navegador bloquea el almacenamiento, el cambio sigue funcionando durante la visita. Los colores de superficies, controles, fichas y diálogos utilizan variables de tema en `src/styles.css`; las fotografías y el mapa no se invierten.

Los guardados utilizan `lhmm-saved-v1` y conservan compatibilidad de lectura con la colección de la marca provisional anterior. Ninguna preferencia requiere una cuenta o se envía a un servidor.

## Criterio editorial y límites

- La muerte de Nemesio Oseguera Cervantes se sitúa en **Tapalpa, Jalisco, el 22 de febrero de 2026**, según la cobertura enlazada; no en Guadalajara.
- Los Zetas se presentan como un proceso de **ruptura y fragmentación**, no como un exterminio total.
- La ficha de Toribio Gargallo parte del reportaje de Marjorie Miller en *Los Angeles Times* del 9 de noviembre de 1991. El alcance específico en Tezonapa y Cosolapa debe ampliarse con hemerotecas y documentación local; **no se asigna todavía a Oaxaca ni se inventan conexiones criminales**.
- Las hipótesis ministeriales del caso Colosio no se presentan como condenas. La falta de evidencia de una teoría conspirativa se señala explícitamente.
- Los estados actuales son una referencia geográfica, no fronteras históricas válidas para todos los siglos ni mapas actuales de control criminal.
- Las fichas son síntesis iniciales: necesitan revisión especializada y expedientes más completos antes de una publicación editorial definitiva. No todas tienen todavía fotografías documentales o vídeos específicos.
- Las fuentes externas pueden cambiar, bloquear automatismos o requerir suscripción. Sus titulares de primeras horas no equivalen a balances finales.

## Siguiente etapa sugerida

Esta versión es un **frontend con colección local**, sin servidor, CMS, cuentas ni recepción pública de aportaciones. Para crecer: revisión editorial del corpus, base de datos relacional o de grafos, administración con historial de cambios, gestión de derechos audiovisuales y un flujo de contribuciones moderadas. No se requieren claves de API para ejecutar el prototipo.

## Créditos

Cartografía: [DataMaps](https://github.com/markmarkoh/datamaps), MIT; licencia incluida. Fotografías: Wikimedia Commons, con licencias por archivo en `public/images/credits.json` y en el diálogo de créditos. Se conservan los originales; los recortes visuales y el tratamiento tonal se aplican mediante CSS. Los vídeos y artículos no se descargan ni se republican: se enlaza a sus editores.
