import { test, expect } from '@playwright/test'

test('filtra por época y salud sin estados editoriales heredados', async ({ page }) => {
  await page.goto('/')
  await page.getByRole('button', { name: 'Salud', exact: true }).click()
  await page.getByRole('combobox', { name: 'Filtrar por época' }).selectOption('p6')
  await expect(page.locator('.results-total')).toHaveText('06')
  await expect(page).toHaveURL(/epoca=p6/)
  await expect(page.getByRole('combobox', { name: 'Estado editorial' })).toHaveCount(0)
  await page.getByRole('textbox', { name: 'Buscar acontecimientos, personas o lugares' }).fill('COVID')
  await page.getByRole('button', { name: /Explorar: La COVID-19/ }).click()
  const dialog = page.getByRole('dialog')
  await expect(dialog.getByRole('heading', { level: 2 })).toContainText('2020')
  await dialog.getByRole('tab', { name: /Evidencia/ }).click()
  await expect(dialog.locator('.evidence-supports').first()).toContainText('primer caso importado de COVID-19')
  await page.reload()
  await page.getByRole('button', { name: 'Cerrar ficha' }).click()
  await expect(page.getByRole('combobox', { name: 'Filtrar por época' })).toHaveValue('p6')
})

test('una corrección explica qué cambió y conserva su evidencia', async ({ page }) => {
  await page.goto('/?evento=p6-sida-1981')
  const dialog = page.getByRole('dialog')
  await expect(dialog.locator('.documentation-note')).toContainText('Historia corregida')
  await expect(dialog.locator('.review-notes')).toContainText('1981')
  await dialog.getByRole('tab', { name: /Evidencia/ }).click()
  await expect(dialog.getByRole('link', { name: /México contemporáneo/ }).first()).toBeVisible()
  await expect(dialog.getByText('PDF p. 52')).toBeVisible()
})

test('los códigos del directorio abren la historia investigada y normalizan la URL', async ({ page }) => {
  await page.goto('/?evento=P5-S08')
  const dialog = page.getByRole('dialog')
  await expect(dialog.getByRole('heading', { level: 2 })).toContainText('1968')
  await expect(page).toHaveURL(/evento=p5-tlatelolco/)
  await expect(dialog.getByText(/Procedencia del documento/)).toHaveCount(0)
  await expect(dialog.getByText(/Importar no equivale a verificar/)).toHaveCount(0)
})

test('una historia retirada no abre una ficha vacía', async ({ page }) => {
  const errors: string[] = []
  page.on('pageerror', (error) => errors.push(error.message))
  await page.goto('/?evento=P6-C05')
  await expect(page.getByRole('dialog')).toHaveCount(0)
  await expect(page).not.toHaveURL(/evento=P6-C05/)
  expect(errors).toEqual([])
})

test('la cronología carga progresivamente y reinicia la página al cambiar filtros', async ({ page }) => {
  await page.goto('/?vista=cronologia')
  await expect(page.locator('.timeline-entry')).toHaveCount(30)
  await expect(page.locator('.chronology-pagination')).toContainText('Mostrando 30 de 118 historias')
  await page.getByRole('button', { name: 'Cargar 30 historias más' }).click()
  await expect(page.locator('.timeline-entry')).toHaveCount(60)
  await page.getByRole('textbox', { name: 'Buscar acontecimientos, personas o lugares' }).fill('Tlatelolco')
  await expect(page.locator('.timeline-entry')).toHaveCount(4)
  await page.getByRole('button', { name: 'Limpiar búsqueda' }).click()
  await expect(page.locator('.timeline-entry')).toHaveCount(30)
})

test('muestra un retrato pictórico con autor, procedencia y condiciones de uso', async ({ page }) => {
  await page.goto('/?personaje=sor-juana')
  const dialog = page.getByRole('dialog')
  await expect(dialog.getByRole('heading', { level: 2 })).toHaveText('Sor Juana Inés de la Cruz')
  const image = dialog.locator('.person-portrait > img')
  await expect(image).toBeVisible()
  expect(await image.evaluate((element) => (element as HTMLImageElement).naturalWidth)).toBeGreaterThan(0)
  await expect(dialog.locator('.portrait-credit')).toContainText('Miguel Cabrera')
  await expect(dialog.locator('.portrait-credit')).toContainText('no una fotografía')
  await expect(dialog.getByRole('link', { name: 'Archivo y atribución completa', exact: true })).toHaveAttribute('href', /commons\.wikimedia\.org\/wiki\/File:/)
})

test('las personas sin retrato fiable no se ilustran con otro personaje', async ({ page }) => {
  await page.goto('/?personaje=colosio-persona')
  const dialog = page.getByRole('dialog')
  await expect(dialog.locator('.person-portrait')).toHaveCount(0)
  await expect(dialog.locator('.person-no-portrait')).toContainText('No se sustituye por la imagen de otra persona')
})

test('las imágenes de época se etiquetan como contexto, no como el acontecimiento', async ({ page }) => {
  await page.goto('/?evento=p1-volcanes')
  const dialog = page.getByRole('dialog')
  await expect(dialog.locator('.detail-photo figcaption')).toContainText('Manuscrito del siglo XVI')
  await expect(dialog.locator('.photo-credit')).toContainText('no ilustra cada episodio')
})

test('todos los archivos gráficos publicados en créditos se pueden decodificar', async ({ page }) => {
  await page.goto('/')
  await page.getByRole('button', { name: 'Créditos y licencias' }).click()
  await expect(page.locator('.media-credit-list img')).toHaveCount(90)
  const broken = await page.locator('.media-credit-list img').evaluateAll(async (elements) => {
    const images = elements as HTMLImageElement[]
    return (await Promise.all(images.map(async (image) => {
      image.loading = 'eager'
      try { await image.decode(); return image.naturalWidth > 0 ? null : image.src } catch { return image.src }
    }))).filter(Boolean)
  })
  expect(broken).toEqual([])
})

test('ignora identificadores desconocidos y migra los guardados anteriores', async ({ page }) => {
  const errors: string[] = []
  page.on('pageerror', (error) => errors.push(error.message))
  await page.addInitScript(() => localStorage.setItem('lhmm-saved-v1', '["constructor","sismo-1985","sismo-1985"]'))
  await page.goto('/?evento=constructor&personaje=__proto__&estado=__proto__')
  await expect(page.getByRole('dialog')).toHaveCount(0)
  await expect(page.getByRole('combobox', { name: 'Seleccionar estado' })).toHaveValue('')
  await expect(page.getByRole('button', { name: 'Mis guardados, 1 historias' })).toBeVisible()
  await page.getByRole('button', { name: 'Mis guardados, 1 historias' }).click()
  await expect(page.getByRole('dialog').getByRole('button', { name: 'Explorar: Los sismos de 1985', exact: true })).toBeVisible()
  expect(errors).toEqual([])
})

test('el directorio busca personajes y abre un perfil con créditos', async ({ page }) => {
  await page.goto('/')
  await page.getByRole('button', { name: 'Personajes', exact: true }).click()
  const dialog = page.getByRole('dialog')
  await dialog.getByRole('textbox', { name: 'Buscar personaje' }).fill('Zaragoza')
  await expect(dialog.locator('.people-directory > button')).toHaveCount(1)
  await dialog.getByRole('button', { name: /Ignacio Zaragoza/ }).click()
  await expect(dialog.getByRole('heading', { level: 2 })).toHaveText('Ignacio Zaragoza')
  await expect(dialog.locator('.person-portrait')).toBeVisible()
  await expect(dialog.getByRole('link', { name: 'Archivo y atribución completa', exact: true })).toBeVisible()
})

test('la red mantiene pocos nodos y ya no ofrece paralelos sin verificar', async ({ page }) => {
  await page.goto('/?vista=conexiones&foco=p1-toxcatl')
  const count = await page.locator('.graph-node').count()
  expect(count).toBeGreaterThan(1)
  expect(count).toBeLessThanOrEqual(9)
  await expect(page.getByRole('checkbox')).toHaveCount(0)
  await expect(page.locator('.graph-options')).not.toContainText('paralelos')
  await expect(page.locator('.graph-disclaimer')).toContainText('Hasta 8 vecinos por vista')
})

test('la red móvil permite desplazarse sin superponer sus controles ni desbordar la página', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 })
  await page.goto('/?vista=conexiones&foco=p1-toxcatl')
  expect(await page.locator('.graph-node').count()).toBeGreaterThan(1)
  const select = await page.locator('.graph-select').boundingBox()
  const options = await page.locator('.graph-options').boundingBox()
  expect(options!.y).toBeGreaterThan(select!.y + select!.height)
  const canvas = page.locator('.graph-canvas')
  expect(await canvas.evaluate((element) => element.scrollWidth > element.clientWidth)).toBeTruthy()
  await canvas.evaluate((element) => { element.scrollLeft = element.scrollWidth })
  expect(await canvas.evaluate((element) => element.scrollLeft)).toBeGreaterThan(0)
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBeTruthy()
})

for (const theme of ['light', 'dark'] as const) {
  test(`las fichas investigadas y sus imágenes se adaptan a móvil, tema ${theme}`, async ({ page }) => {
    await page.setViewportSize({ width: 360, height: 800 })
    await page.emulateMedia({ colorScheme: theme })
    await page.goto('/?evento=p4-puebla-1862')
    await expect(page.getByRole('dialog').getByRole('heading', { level: 2 })).toContainText('1862')
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBeTruthy()
    await page.getByRole('button', { name: 'Cerrar ficha' }).click()
    await page.getByRole('button', { name: 'Personajes', exact: true }).click()
    await expect(page.getByRole('dialog').locator('.people-directory > button')).toHaveCount(24)
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBeTruthy()
  })
}
