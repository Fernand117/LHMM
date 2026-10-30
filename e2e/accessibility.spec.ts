import { test, expect } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'

for (const theme of ['light', 'dark'] as const) {
  for (const [name, path] of [
    ['mapa', '/'],
    ['cronología', '/?vista=cronologia'],
    ['conexiones', '/?vista=conexiones'],
    ['ficha documental', '/?evento=sismo-1985'],
    ['ficha con versiones', '/?evento=sismo-2017'],
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

  for (const button of ['Nuestra forma de documentar', 'Fuentes del archivo', 'Créditos y licencias', 'Mis guardados, 0 historias']) {
    test(`accesibilidad de ${button}, tema ${theme}`, async ({ page }) => {
      await page.emulateMedia({ reducedMotion: 'reduce', colorScheme: theme })
      await page.goto('/')
      await page.getByRole('button', { name: button, exact: true }).click()
      const results = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze()
      expect(results.violations).toEqual([])
    })
  }

  for (const id of ['colosio', 'sismo-2017']) {
    test(`accesibilidad del análisis de evidencia de ${id}, tema ${theme}`, async ({ page }) => {
      await page.emulateMedia({ reducedMotion: 'reduce', colorScheme: theme })
      await page.goto(`/?evento=${id}`)
      await page.getByRole('tab', { name: 'Versiones y mitos' }).click()
      const results = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze()
      expect(results.violations).toEqual([])
    })
  }
}
