import { test, expect } from '@playwright/test'

test('el atlas carga 32 estados y permite seleccionar Jalisco', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Todo está conectado')
  await expect(page.locator('.state-path')).toHaveCount(32)
  await page.getByRole('button', { name: 'Explorar Jalisco, 3 historias', exact: true }).click()
  await expect(page.getByRole('combobox', { name: 'Seleccionar estado' })).toHaveValue('MX-JAL')
  await expect(page.locator('.results-total')).toHaveText('03')
  await expect(page).toHaveURL(/estado=MX-JAL/)
})

test('busca personajes sin acentos y abre una ficha con fuentes', async ({ page }) => {
  await page.goto('/')
  await page.getByRole('textbox', { name: 'Buscar acontecimientos, personas o lugares' }).fill('Toribio')
  await page.getByRole('button', { name: 'Explorar: El cacicazgo de Toribio Gargallo', exact: true }).click()
  const dialog = page.getByRole('dialog')
  await expect(dialog.getByRole('heading', { level: 2 })).toContainText('Toribio Gargallo')
  await dialog.getByRole('tab', { name: /Fuentes/ }).click()
  await expect(dialog.getByRole('link', { name: /Los Angeles Times/ })).toHaveAttribute('href', 'https://www.latimes.com/archives/la-xpm-1991-11-09-mn-1077-story.html')
  await page.keyboard.press('Escape')
  await expect(dialog).toHaveCount(0)
})

test('combina tema, estado y fechas, y permite restablecerlos', async ({ page }) => {
  await page.goto('/')
  await page.getByRole('button', { name: 'Política', exact: true }).click()
  await page.getByRole('combobox', { name: 'Seleccionar estado' }).selectOption('MX-JAL')
  await expect(page.getByText('Aún quedan historias por contar aquí.')).toBeVisible()
  await page.getByRole('button', { name: 'Quitar todos los filtros' }).click()
  await page.getByRole('button', { name: '1985', exact: true }).click()
  await expect(page.locator('.results-total')).toHaveText('03')
  await page.getByRole('button', { name: 'Mostrar todos los años' }).click()
  await expect(page.locator('.results-total')).toHaveText('20')
})

test('las versiones distinguen controversia y falta de evidencia', async ({ page }) => {
  await page.goto('/?evento=sismo-2017')
  const dialog = page.getByRole('dialog')
  await dialog.getByRole('tab', { name: 'Versiones y mitos' }).click()
  await expect(dialog.getByText('Sin evidencia', { exact: true })).toBeVisible()
  await expect(dialog.getByText(/No hay evidencia científica/)).toBeVisible()
  await expect(dialog.getByRole('link', { name: /Animal Político/ })).toBeVisible()
})

test('navega cronología, red, una relación y personajes', async ({ page }) => {
  await page.goto('/')
  await page.getByRole('button', { name: 'Línea del tiempo', exact: true }).click()
  await expect(page.locator('.timeline-entry')).toHaveCount(20)
  await page.getByRole('button', { name: 'Más antiguos primero' }).click()
  await expect(page.locator('.timeline-year').first()).toHaveText('2026')
  await page.getByRole('button', { name: 'Conexiones', exact: true }).click()
  await expect(page.locator('.graph-node')).not.toHaveCount(0)
  await page.locator('.graph-edge').first().click({ force: true })
  await expect(page.locator('.graph-link-detail')).toBeVisible()
  await page.getByRole('button', { name: 'Cerrar relación' }).click()
  await page.getByRole('button', { name: 'Explorar personaje', exact: true }).click()
  const dialog = page.getByRole('dialog')
  await expect(dialog.getByRole('heading', { level: 2 })).toHaveText('Carlos Salinas de Gortari')
  await dialog.getByRole('button', { name: 'Explorar: La caída del sistema', exact: true }).click()
  await expect(dialog.getByRole('heading', { level: 2 })).toContainText('1988')
})

test('guarda una ficha y conserva la colección después de recargar', async ({ page }) => {
  await page.goto('/?evento=sismo-1985')
  await page.getByRole('button', { name: 'Guardar acontecimiento' }).click()
  await page.getByRole('button', { name: 'Cerrar ficha' }).click()
  await page.reload()
  await page.getByRole('button', { name: /Mis guardados/ }).click()
  await expect(page.getByRole('dialog').getByRole('button', { name: 'Explorar: El terremoto de 1985', exact: true })).toBeVisible()
})

test('un enlace directo conserva estado, vista y ficha', async ({ page }) => {
  await page.goto('/?estado=MX-JAL&vista=cronologia&evento=mencho')
  await expect(page.getByRole('dialog').getByRole('heading', { level: 2 })).toContainText('Tapalpa')
  await page.getByRole('button', { name: 'Cerrar ficha' }).click()
  await expect(page.getByRole('combobox', { name: 'Seleccionar estado' })).toHaveValue('MX-JAL')
  await expect(page.locator('.timeline-entry')).toHaveCount(3)
})

test('método, referencias y licencias están disponibles', async ({ page }) => {
  await page.goto('/')
  await page.getByRole('button', { name: 'Nuestra forma de documentar' }).click()
  await expect(page.getByRole('dialog').getByRole('heading', { name: 'Los hechos tienen respaldo.' })).toBeVisible()
  await page.keyboard.press('Escape')
  await page.getByRole('button', { name: 'Créditos y licencias' }).click()
  await expect(page.getByRole('dialog').getByRole('heading', { name: 'Cartografía' })).toBeVisible()
  await expect(page.getByRole('link', { name: 'Licencia del mapa' })).toHaveAttribute('href', '/licenses/datamaps.txt')
})

test('el atajo de búsqueda funciona y no hay errores de ejecución', async ({ page }) => {
  const errors: string[] = []
  page.on('pageerror', (error) => errors.push(error.message))
  await page.goto('/')
  await expect(page.locator('.state-path')).toHaveCount(32)
  await page.keyboard.press('Control+k')
  await expect(page.getByRole('textbox', { name: 'Buscar acontecimientos, personas o lugares' })).toBeFocused()
  await expect(page.locator('.state-path')).toHaveCount(32)
  expect(errors).toEqual([])
})

test('es utilizable en móvil sin desbordamiento horizontal', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 })
  await page.goto('/')
  await expect(page.locator('.state-path')).toHaveCount(32)
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBeTruthy()
  await page.getByRole('combobox', { name: 'Seleccionar estado' }).selectOption('MX-VER')
  await page.getByRole('button', { name: 'Explorar: El cacicazgo de Toribio Gargallo', exact: true }).click()
  await expect(page.getByRole('dialog').getByRole('heading', { level: 2 })).toContainText('Toribio')
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBeTruthy()
})

test('comparte una ficha con confirmación visible sobre el diálogo', async ({ page, context }) => {
  await context.grantPermissions(['clipboard-read', 'clipboard-write'])
  await page.goto('/?evento=sismo-1985')
  await page.getByRole('button', { name: 'Compartir ficha' }).click()
  await expect(page.getByRole('status')).toContainText('Enlace copiado')
  expect(await page.evaluate(() => navigator.clipboard.readText())).toContain('evento=sismo-1985')
  await page.getByRole('button', { name: 'Guardar acontecimiento' }).click()
  await expect(page.getByRole('status')).toContainText('Historia guardada')
})

test('los estados se pueden seleccionar por teclado y el zoom se restablece', async ({ page }) => {
  await page.goto('/')
  const state = page.getByRole('button', { name: 'Veracruz, 3 acontecimientos', exact: true })
  await state.focus()
  await page.keyboard.press('Enter')
  await expect(page.getByRole('combobox', { name: 'Seleccionar estado' })).toHaveValue('MX-VER')
  await page.getByRole('button', { name: 'Acercar mapa' }).click()
  await expect(page.locator('.mexico-map')).toHaveClass(/is-zoomed/)
  await page.getByRole('button', { name: 'Restablecer mapa' }).click()
  await expect(page.locator('.mexico-map')).not.toHaveClass(/is-zoomed/)
})
