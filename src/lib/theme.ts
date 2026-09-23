const THEME_STORAGE_KEY = 'theme'

// ScriptOnce runs this before hydration so the saved theme is applied before the page paints.
export const themeInitScript = `(() => {
  const key = ${JSON.stringify(THEME_STORAGE_KEY)}
  const root = document.documentElement
  const media = window.matchMedia('(prefers-color-scheme: dark)')
  const apply = () => {
    let preference = 'dark'
    try {
      const saved = localStorage.getItem(key)
      if (saved === 'light' || saved === 'dark' || saved === 'system') preference = saved
    } catch {}
    const resolved = preference === 'system' ? (media.matches ? 'dark' : 'light') : preference
    root.classList.toggle('dark', resolved === 'dark')
    root.classList.toggle('light', resolved === 'light')
    root.style.colorScheme = resolved
  }
  apply()
  media.addEventListener('change', apply)
  window.addEventListener('storage', (event) => {
    if (event.key === key) apply()
  })
})()`

export function toggleTheme() {
  const root = document.documentElement
  const next = root.classList.contains('dark') ? 'light' : 'dark'

  try {
    localStorage.setItem(THEME_STORAGE_KEY, next)
  } catch {
    // The toggle still works when storage is unavailable.
  }

  root.classList.toggle('dark', next === 'dark')
  root.classList.toggle('light', next === 'light')
  root.style.colorScheme = next
}
