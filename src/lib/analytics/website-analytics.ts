'use client'

import posthog from 'posthog-js'
import { createAnalyticsTracker, type AnalyticsProperties } from './analytics-tracker'
import { campaignBucket, isApprovedCampaignValue, safeWebsitePath } from './route-privacy'

const token = process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN
const host = process.env.NEXT_PUBLIC_POSTHOG_HOST
const enabled = Boolean(token?.startsWith('phc_') && (host === 'https://us.i.posthog.com' || host === 'https://eu.i.posthog.com'))

const requiredSdkProperties = new Set(['token', 'distinct_id', '$anon_distinct_id', '$insert_id'])
let initialized = false

export function initWebsiteAnalytics(): void {
  if (!enabled || initialized || typeof window === 'undefined') return
  initialized = true
  try {
    posthog.init(token!, {
      api_host: host!,
      defaults: '2026-05-30',
      persistence: 'cookie',
      cross_subdomain_cookie: window.location.hostname === 'orbbt.app' || window.location.hostname.endsWith('.orbbt.app'),
      secure_cookie: window.location.protocol === 'https:',
      autocapture: false,
      capture_pageview: false,
      capture_pageleave: false,
      rageclick: false,
      capture_performance: false,
      disable_session_recording: true,
      disable_surveys: true,
      disable_external_dependency_loading: true,
      advanced_disable_flags: true,
      save_referrer: false,
      store_google: false,
      ip: false,
      person_profiles: 'identified_only',
      before_send: event => {
        if (!event || (event.event !== '$pageview' && event.event !== 'marketing_cta_clicked')) return null
        const allowed = event.event === '$pageview'
          ? new Set([...requiredSdkProperties, '$current_url', '$utm_source', '$utm_medium', 'surface', 'schema_version'])
          : new Set([...requiredSdkProperties, 'surface', 'schema_version', 'destination', 'placement'])
        const properties = Object.fromEntries(Object.entries(event.properties ?? {}).filter(([key]) => allowed.has(key)))
        if (event.event === '$pageview') {
          // Never send query strings, fragments, arbitrary feature slugs, or URL-derived user data.
          properties.$current_url = window.location.origin + safeWebsitePath(window.location.pathname)
          if (!isApprovedCampaignValue('utm_source', properties.$utm_source)) delete properties.$utm_source
          if (!isApprovedCampaignValue('utm_medium', properties.$utm_medium)) delete properties.$utm_medium
        }
        return { ...event, properties }
      }
    })
  } catch {
    initialized = false
  }
}

const track = createAnalyticsTracker('website', (event, properties) => {
  if (!initialized || event !== 'marketing_cta_clicked') return
  posthog.capture(event, properties)
})

export function trackMarketingCta(properties: Pick<AnalyticsProperties, 'destination' | 'placement'>): void {
  if (!initialized) initWebsiteAnalytics()
  track('marketing_cta_clicked', properties)
}

export function captureWebsitePageview(pathname: string): void {
  if (!initialized) initWebsiteAnalytics()
  if (!initialized) return
  const source = campaignBucket(window.location.search, 'utm_source')
  const medium = campaignBucket(window.location.search, 'utm_medium')
  posthog.capture('$pageview', {
    $current_url: window.location.origin + safeWebsitePath(pathname),
    ...(source ? { $utm_source: source } : {}),
    ...(medium ? { $utm_medium: medium } : {}),
    surface: 'website',
    schema_version: 1
  })
}
