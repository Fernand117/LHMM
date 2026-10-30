import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { parseThemePreference, resolveTheme, THEME_COLORS, THEME_STORAGE_KEY } from '../lib/theme'

describe('Preferencias de apariencia', () => {
  it('por defecto sigue el sistema y descarta valores inválidos', () => {
    for (const value of [null, undefined, '', 'system', 'purple', 'DARK', {}, 1]) assert.equal(parseThemePreference(value), 'system')
  })

  it('recupera las elecciones manuales válidas', () => {
    assert.equal(parseThemePreference('light'), 'light')
    assert.equal(parseThemePreference('dark'), 'dark')
  })

  it('resuelve el tema siguiendo la preferencia del dispositivo', () => {
    assert.equal(resolveTheme('system', false), 'light')
    assert.equal(resolveTheme('system', true), 'dark')
  })

  it('la elección manual tiene prioridad sobre el sistema', () => {
    assert.equal(resolveTheme('light', true), 'light')
    assert.equal(resolveTheme('dark', false), 'dark')
  })

  it('usa la nueva marca y colores válidos para la interfaz del navegador', () => {
    assert.equal(THEME_STORAGE_KEY, 'lhmm-theme-v1')
    assert.match(THEME_COLORS.light, /^#[a-f\d]{6}$/i)
    assert.match(THEME_COLORS.dark, /^#[a-f\d]{6}$/i)
    assert.notEqual(THEME_COLORS.dark, THEME_COLORS.light)
  })
})
