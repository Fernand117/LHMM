import { test, expect } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'

for (const theme of ['light', 'dark'] as const) {
  for (const [name, path] of [
    ['mapa', '/'],
    ['cronología', '/?vista=cronologia'],
    ['conexiones', '/?vista=conexiones'],
    ['ficha verificada', '/?evento=p6-terremoto-1985'],
    ['ficha contextual', '/?evento=p1-volcanes'],
    ['ficha corregida', '/?evento=p6-sida-1981'],
    ['ficha con imagen de época', '/?evento=p4-puebla-1862'],
    ['perfil con retrato', '/?personaje=sor-juana'],
  ]) {
    test(`accesibilidad automática: ${name}, tema ${theme}`, async ({ page }) => {
      await page.emulateMedia({ reducedMotion: 'reduce', colorScheme: theme })
      await page.goto(path)
      await expect(page.getByRole('heading', { level: 1 })).toBeAttached()
      await expect(page.locator('html')).toHaveAttribute('data-theme', theme)
      if (path === '/') await expect(page.locator('.state-path')).toHaveCount(32)
      const results = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze()
      expect(results.violations).toEqual([])
    })
  }

  for (const button of ['Nuestra forma de documentar', 'Fuentes del archivo', 'Créditos y licencias', 'Mis guardados, 0 historias', 'Personajes']) {
    test(`accesibilidad de ${button}, tema ${theme}`, async ({ page }) => {
      await page.emulateMedia({ reducedMotion: 'reduce', colorScheme: theme })
      await page.goto('/')
      await page.getByRole('button', { name: button, exact: true }).click()
      const results = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze()
      expect(results.violations).toEqual([])
    })
  }

  for (const id of ['p6-sida-1981', 'p6-sarampion-2025']) {

    test(`accesibilidad de las notas de revisión de ${id}, tema ${theme}`, async ({ page }) => {
      await page.emulateMedia({ reducedMotion: 'reduce', colorScheme: theme })
      await page.goto(`/?evento=${id}`)
      await expect(page.getByRole('dialog').locator('.review-notes')).toBeVisible()
      const results = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze()
      expect(results.violations).toEqual([])
    })
  }
}
