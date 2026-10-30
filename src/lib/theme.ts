export type ThemePreference = 'system' | 'light' | 'dark'
export type Theme = Exclude<ThemePreference, 'system'>

export const THEME_STORAGE_KEY = 'lhmm-theme-v1'
export const THEME_COLORS: Record<Theme, string> = { light: '#f7f8f3', dark: '#151c18' }

export function parseThemePreference(value: unknown): ThemePreference {
  return value === 'light' || value === 'dark' ? value : 'system'
}

export function resolveTheme(preference: ThemePreference, systemDark: boolean): Theme {
  return preference === 'system' ? systemDark ? 'dark' : 'light' : preference
}
