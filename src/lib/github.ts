import { createServerFn } from '@tanstack/react-start'

const REPOSITORY = 'liaoyio/oooyi-ui'
const CACHE_MS = 60 * 60 * 1000

let cached: { value: number | null; expiresAt: number } | undefined

export const fetchStarCount = createServerFn({ method: 'GET' }).handler(async () => {
  if (cached && cached.expiresAt > Date.now()) return cached.value

  try {
    const response = await fetch(`https://api.github.com/repos/${REPOSITORY}`, {
      headers: { Accept: 'application/vnd.github+json' },
    })
    if (!response.ok) return null

    const body = (await response.json()) as { stargazers_count?: unknown }
    const value = typeof body.stargazers_count === 'number' ? body.stargazers_count : null
    cached = { value, expiresAt: Date.now() + CACHE_MS }
    return value
  }
  catch {
    return null
  }
})
