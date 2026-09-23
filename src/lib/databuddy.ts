import { createServerFn } from '@tanstack/react-start'
import { LAUNCH_DATE } from '@/lib/site'

const QUERY_URL = 'https://api.databuddy.cc/v1/query'
const SUMMARY = 'summary_metrics'
const CACHE_MS = 60 * 60 * 1000

export type Pageviews = {
  lastMonth: number | null
  sinceLaunch: number | null
}

type RangeId = keyof Pageviews
type QueryResult = {
  queryId?: string
  data?: { parameter: string, data?: { pageviews?: number }[] }[]
}

const EMPTY: Pageviews = { lastMonth: null, sinceLaunch: null }
let cached: { value: Pageviews, expiresAt: number } | undefined

function batch(today: string) {
  return [
    { id: 'lastMonth' satisfies RangeId, parameters: [SUMMARY], preset: 'last_30d' },
    {
      id: 'sinceLaunch' satisfies RangeId,
      parameters: [SUMMARY],
      startDate: LAUNCH_DATE,
      endDate: today,
    },
  ]
}

function readPageviews(results: QueryResult[], id: RangeId) {
  const row = results
    .find(result => result.queryId === id)
    ?.data?.find(entry => entry.parameter === SUMMARY)?.data?.[0]
  return typeof row?.pageviews === 'number' ? row.pageviews : null
}

export const fetchPageviews = createServerFn({ method: 'GET' }).handler(async (): Promise<Pageviews> => {
  const apiKey = process.env.DATABUDDY_API_KEY
  const websiteId = import.meta.env.VITE_DATABUDDY_CLIENT_ID
  if (!apiKey || !websiteId) return EMPTY
  if (cached && cached.expiresAt > Date.now()) return cached.value

  try {
    const response = await fetch(`${QUERY_URL}?website_id=${websiteId}`, {
      method: 'POST',
      headers: { 'content-type': 'application/json', 'x-api-key': apiKey },
      body: JSON.stringify(batch(new Date().toISOString().slice(0, 10))),
    })
    if (!response.ok) return EMPTY

    const body = (await response.json()) as { success?: boolean, results?: QueryResult[] }
    if (!body.success) return EMPTY

    const results = body.results ?? []
    const value = {
      lastMonth: readPageviews(results, 'lastMonth'),
      sinceLaunch: readPageviews(results, 'sinceLaunch'),
    }
    cached = { value, expiresAt: Date.now() + CACHE_MS }
    return value
  }
  catch {
    return EMPTY
  }
})
