/**
 * Orbbt Phase 1 event contract. Copy this file to the four client repositories.
 * No SDK or network activity occurs until a later phase supplies a capture sink.
 * Keep event names/properties synchronized with orbbt-web/docs/analytics/EVENTS.md.
 */

export type AnalyticsSurface = 'website' | 'web' | 'mobile' | 'extension'

const propertyValues = {
  source: ['manual', 'share_sheet', 'extension', 'quick_add', 'notification', 'unknown'],
  method: ['password', 'google', 'linkedin', 'other'],
  destination: ['signup', 'pricing', 'extension', 'mobile'],
  placement: ['hero', 'nav', 'footer', 'content'],
  view: ['table', 'board'],
  filter_kind: ['status', 'mode', 'date', 'other'],
  format: ['csv', 'other'],
  field_type: ['text', 'number', 'select', 'multiselect', 'description', 'url', 'date'],
  initial_status: ['saved', 'applied', 'assessment', 'interviewed', 'selected', 'rejected', 'ghosted', 'custom'],
  from_status: ['saved', 'applied', 'assessment', 'interviewed', 'selected', 'rejected', 'ghosted', 'custom'],
  to_status: ['saved', 'applied', 'assessment', 'interviewed', 'selected', 'rejected', 'ghosted', 'custom'],
  step_group: ['jobs', 'customize', 'settings', 'unknown'],
  notification_kind: ['deadline', 'other'],
  entrypoint: ['popup', 'side_panel'],
  entity_type: ['job', 'company', 'person'],
  site: ['linkedin', 'indeed', 'other'],
  error_category: [
    'validation', 'unauthorized', 'quota_exhausted', 'unsupported_page',
    'missing_required_fields', 'low_confidence', 'network', 'provider',
    'timeout', 'internal', 'unknown',
  ],
  plan_tier: ['free', 'pro', 'unknown'],
  duration_bucket: ['under_30s', '30_120s', 'over_120s', 'unknown'],
  billing_interval: ['month', 'year'],
  billing_mode: ['test', 'live'],
  channel: ['push', 'email'],
} as const

const eventProperties = {
  marketing_cta_clicked: ['destination', 'placement'],
  signup_request_accepted: ['method'],
  signup_completed: ['method'],
  onboarding_completed: [],
  onboarding_skipped: [],
  quick_tour_started: [],
  quick_tour_completed: [],
  quick_tour_skipped: ['step_group'],
  job_create_requested: ['source'],
  job_created: ['source', 'initial_status'],
  job_status_change_requested: ['from_status', 'to_status'],
  job_status_changed: ['from_status', 'to_status'],
  job_deleted: [],
  jobs_view_changed: ['view'],
  jobs_filter_applied: ['filter_kind'],
  jobs_exported: ['format'],
  custom_field_created: ['field_type'],
  custom_status_created: [],
  company_created: ['source'],
  contact_created: ['source'],
  notification_opened: ['notification_kind'],
  extension_opened: ['entrypoint'],
  extension_extraction_started: ['entity_type', 'site'],
  extension_extraction_succeeded: ['entity_type', 'site'],
  extension_extraction_failed: ['entity_type', 'site', 'error_category'],
  resume_match_requested: ['plan_tier'],
  resume_match_completed: ['plan_tier', 'duration_bucket'],
  resume_match_failed: ['plan_tier', 'error_category'],
  checkout_created: ['billing_interval'],
  subscription_activated: ['billing_interval', 'billing_mode'],
  subscription_cancelled: ['billing_mode'],
  payment_failed: ['billing_mode'],
  reminder_settings_updated: [],
  reminder_sent: ['channel', 'days_before'],
} as const satisfies Record<string, readonly (keyof typeof propertyValues | 'days_before')[]>

export type AnalyticsEventName = keyof typeof eventProperties
export type AnalyticsProperties = Partial<{
  [K in keyof typeof propertyValues]: (typeof propertyValues)[K][number]
} & { days_before: number }>

export type CaptureSink = (
  event: AnalyticsEventName,
  properties: Record<string, string | number>,
) => void | Promise<void>

/** Best effort; invalid properties are discarded instead of sending user data. */
export function createAnalyticsTracker(surface: AnalyticsSurface, capture?: CaptureSink) {
  return function track(event: AnalyticsEventName, input: AnalyticsProperties = {}): void {
    if (!capture || !Object.prototype.hasOwnProperty.call(eventProperties, event)) return

    const approved = eventProperties[event] as readonly string[]
    const properties: Record<string, string | number> = { surface, schema_version: 1 }

    for (const key of approved) {
      const value = input[key as keyof AnalyticsProperties]
      if (key === 'days_before') {
        if (typeof value === 'number' && Number.isInteger(value) && value >= 0 && value <= 30) {
          properties[key] = value
        }
      } else if (
        typeof value === 'string' &&
        (propertyValues[key as keyof typeof propertyValues] as readonly string[]).includes(value)
      ) {
        properties[key] = value
      }
    }

    try {
      void Promise.resolve(capture(event, properties)).catch(() => {})
    } catch {
      // Analytics cannot fail a product action.
    }
  }
}
