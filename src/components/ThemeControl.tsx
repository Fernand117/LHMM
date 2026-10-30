import { ChevronDown, Monitor, Moon, Sun } from 'lucide-react'
import { useTheme } from '../hooks/useTheme'
import { parseThemePreference } from '../lib/theme'

export default function ThemeControl() {
  const { preference, theme, choosePreference } = useTheme()
  const Icon = preference === 'system' ? Monitor : theme === 'dark' ? Moon : Sun

  return <label className="theme-control" title={`Apariencia actual: ${theme === 'dark' ? 'oscura' : 'clara'}`}>
    <Icon size={14} aria-hidden="true" />
    <select aria-label="Tema de apariencia" aria-describedby="theme-status" value={preference} onChange={(event) => choosePreference(parseThemePreference(event.target.value))}>
      <option value="system">Sistema</option>
      <option value="light">Claro</option>
      <option value="dark">Oscuro</option>
    </select>
    <ChevronDown size={11} aria-hidden="true" />
    <span className="sr-only" id="theme-status">Tema {theme === 'dark' ? 'oscuro' : 'claro'}{preference === 'system' ? ', según la preferencia del dispositivo' : ''}.</span>
  </label>
}
