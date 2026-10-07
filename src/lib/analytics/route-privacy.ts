// Marketing pageviews expose only known routes. Query strings and hashes are never forwarded.
const staticRoutes = new Set([
  '/', '/hero', '/product', '/problem', '/how-it-works', '/chrome-extension',
  '/comparison', '/pricing', '/mobile', '/faq', '/final-cta', '/showcase',
  '/features', '/resources', '/privacy', '/terms', '/refund', '/delete-account'
])

const sourceValues = new Set(['google', 'linkedin', 'reddit', 'newsletter', 'x', 'instagram', 'other'])
const mediumValues = new Set(['cpc', 'social', 'email', 'referral', 'organic', 'other'])

export function safeWebsitePath(pathname: string): string {
  if (staticRoutes.has(pathname)) return pathname
  if (/^\/features\/[^/]+\/?$/.test(pathname)) return '/features/[slug]'
  return '/_other'
}

export function campaignBucket(search: string, key: 'utm_source' | 'utm_medium'): string | undefined {
  const raw = new URLSearchParams(search).get(key)?.trim().toLowerCase()
  if (!raw) return undefined
  const values = key === 'utm_source' ? sourceValues : mediumValues
  return values.has(raw) ? raw : 'other'
}

export function isApprovedCampaignValue(key: 'utm_source' | 'utm_medium', value: unknown): boolean {
  if (typeof value !== 'string') return false
  return (key === 'utm_source' ? sourceValues : mediumValues).has(value)
}
