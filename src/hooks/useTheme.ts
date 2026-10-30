import { useCallback, useEffect, useLayoutEffect, useState } from 'react'
import { parseThemePreference, resolveTheme, THEME_COLORS, THEME_STORAGE_KEY } from '../lib/theme'
import type { ThemePreference } from '../lib/theme'

function readPreference(): ThemePreference {
  try { return parseThemePreference(localStorage.getItem(THEME_STORAGE_KEY)) } catch { return 'system' }
}

export function useTheme() {
  const [preference, setPreference] = useState<ThemePreference>(readPreference)
  const [systemDark, setSystemDark] = useState(() => window.matchMedia('(prefers-color-scheme: dark)').matches)
  const theme = resolveTheme(preference, systemDark)

  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)')
    const onChange = (event: MediaQueryListEvent) => setSystemDark(event.matches)
    setSystemDark(media.matches)
    media.addEventListener('change', onChange)
    return () => media.removeEventListener('change', onChange)
  }, [])

  useEffect(() => {
    const onStorage = (event: StorageEvent) => {
      if (event.key === THEME_STORAGE_KEY || event.key === null) setPreference(readPreference())
    }
    window.addEventListener('storage', onStorage)
    return () => window.removeEventListener('storage', onStorage)
  }, [])

  useLayoutEffect(() => {
    document.documentElement.dataset.theme = theme
    document.documentElement.style.colorScheme = theme
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', THEME_COLORS[theme])
  }, [theme])

  const choosePreference = useCallback((next: ThemePreference) => {
    setPreference(next)
    try { localStorage.setItem(THEME_STORAGE_KEY, next) } catch { /* Still works for this visit when storage is unavailable. */ }
  }, [])

  return { preference, theme, choosePreference }
}
