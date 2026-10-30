import { test, expect } from '@playwright/test'

test('la marca visible y el título se actualizan a LHMM', async ({ page }) => {
  await page.goto('/')
  await expect(page).toHaveTitle('LHMM — La Historia del México Moderno')
  await expect(page.getByRole('link', { name: 'LHMM — La Historia del México Moderno, inicio' })).toBeVisible()
  await expect(page.getByText('Cinco siglos de historias conectadas.', { exact: true })).toBeVisible()
  await expect(page.getByText('entrelíneas', { exact: false })).toHaveCount(0)
})

test('sin elección manual sigue al sistema y sus cambios en vivo', async ({ page }) => {
  await page.emulateMedia({ colorScheme: 'dark' })
  await page.goto('/')
  await expect(page.getByRole('combobox', { name: 'Tema de apariencia' })).toHaveValue('system')
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark')
  await expect(page.locator('meta[name="theme-color"]')).toHaveAttribute('content', '#151c18')
  await page.emulateMedia({ colorScheme: 'light' })
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'light')
  expect(await page.evaluate(() => localStorage.getItem('lhmm-theme-v1'))).toBeNull()
})

test('la elección manual se conserva y prevalece sobre el sistema', async ({ page }) => {
  await page.emulateMedia({ colorScheme: 'light' })
  await page.goto('/')
  await page.getByRole('combobox', { name: 'Tema de apariencia' }).selectOption('dark')
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark')
  await page.reload()
  await expect(page.getByRole('combobox', { name: 'Tema de apariencia' })).toHaveValue('dark')
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark')
  expect(await page.locator('html').evaluate((element) => element.style.colorScheme)).toBe('dark')
  await page.emulateMedia({ colorScheme: 'dark' })
  await page.getByRole('combobox', { name: 'Tema de apariencia' }).selectOption('light')
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'light')
  await page.getByRole('combobox', { name: 'Tema de apariencia' }).selectOption('system')
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark')
  await page.emulateMedia({ colorScheme: 'light' })
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'light')
})

test('aplica el tema antes de cargar React', async ({ page }) => {
  await page.emulateMedia({ colorScheme: 'light' })
  await page.addInitScript(() => localStorage.setItem('lhmm-theme-v1', 'dark'))
  await page.route('**/src/main.tsx', (route) => route.abort())
  await page.goto('/')
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark')
  await expect(page.locator('meta[name="theme-color"]')).toHaveAttribute('content', '#151c18')
  await expect(page.locator('#root')).toBeEmpty()
})

test('sigue funcionando si el navegador bloquea el almacenamiento', async ({ page }) => {
  const errors: string[] = []
  page.on('pageerror', (error) => errors.push(error.message))
  await page.emulateMedia({ colorScheme: 'light' })
  await page.addInitScript(() => {
    Object.defineProperty(window, 'localStorage', { get() { throw new DOMException('Storage blocked', 'SecurityError') } })
  })
  await page.goto('/')
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'light')
  await page.getByRole('combobox', { name: 'Tema de apariencia' }).selectOption('dark')
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark')
  expect(errors).toEqual([])
})

test('sincroniza la preferencia entre pestañas', async ({ page, context }) => {
  await page.goto('/')
  const other = await context.newPage()
  await other.goto('/')
  await expect(other.getByRole('combobox', { name: 'Tema de apariencia' })).toHaveValue('system')
  await page.getByRole('combobox', { name: 'Tema de apariencia' }).selectOption('dark')
  await expect(other.locator('html')).toHaveAttribute('data-theme', 'dark')
  await expect(other.getByRole('combobox', { name: 'Tema de apariencia' })).toHaveValue('dark')
  await other.close()
})

test('conserva los guardados de la marca provisional anterior', async ({ page }) => {
  await page.addInitScript(() => localStorage.setItem('entrelineas-saved-v1', JSON.stringify(['sismo-1985'])))
  await page.goto('/')
  await page.getByRole('button', { name: /Mis guardados/ }).click()
  await expect(page.getByRole('dialog').getByRole('button', { name: 'Explorar: El terremoto de 1985' })).toBeVisible()
})

test('el selector y las fichas oscuras funcionan en una pantalla pequeña', async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 740 })
  await page.goto('/')
  await page.getByRole('combobox', { name: 'Tema de apariencia' }).selectOption('dark')
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark')
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBeTruthy()
  await page.getByRole('button', { name: 'Explorar: El terremoto de 1985', exact: true }).click()
  await expect(page.getByRole('dialog').getByRole('heading', { level: 2 })).toContainText('1985')
  await expect(page.getByRole('dialog')).toHaveCSS('background-color', 'rgb(21, 28, 24)')
  await page.keyboard.press('Escape')
  await expect(page.getByRole('combobox', { name: 'Tema de apariencia' })).toHaveValue('dark')
})
