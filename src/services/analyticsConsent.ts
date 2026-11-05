const GOOGLE_ANALYTICS_ID = 'G-XVSYT8PB6V'
const CONSENT_STORAGE_KEY = 'fd_analytics_consent_v1'
const CONSENT_MAX_AGE_MS = 180 * 24 * 60 * 60 * 1000

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

let googleTagConfigured = false

export function getStoredAnalyticsConsent(): boolean | null {
  try {
    const storedConsent = localStorage.getItem(CONSENT_STORAGE_KEY)
    if (!storedConsent) return null

    const [choice, timestampValue] = storedConsent.split(':')
    const timestamp = Number(timestampValue)
    const age = Date.now() - timestamp

    if (Number.isFinite(timestamp) && age >= 0 && age < CONSENT_MAX_AGE_MS) {
      if (choice === 'accepted') return true
      if (choice === 'rejected') return false
    }

    localStorage.removeItem(CONSENT_STORAGE_KEY)
  } catch {
    // If storage is unavailable, ask again on the next visit.
  }

  return null
}

export function storeAnalyticsConsent(accepted: boolean): void {
  try {
    localStorage.setItem(
      CONSENT_STORAGE_KEY,
      `${accepted ? 'accepted' : 'rejected'}:${Date.now()}`,
    )
  } catch {
    // The current choice still applies for this page even without persistence.
  }
}

function clearGoogleAnalyticsCookies(): void {
  const analyticsCookies = document.cookie
    .split(';')
    .map((cookie) => cookie.trim().split('=')[0])
    .filter((name) => name === '_ga' || name.startsWith('_ga_'))

  for (const name of analyticsCookies) {
    document.cookie = `${name}=; Max-Age=0; path=/; SameSite=Lax`
    document.cookie = `${name}=; Max-Age=0; path=/; domain=.${window.location.hostname}; SameSite=Lax`
  }
}

export function applyAnalyticsConsent(accepted: boolean): void {
  if (!accepted && !googleTagConfigured) {
    clearGoogleAnalyticsCookies()
    return
  }

  if (!window.gtag) {
    window.dataLayer = window.dataLayer ?? []
    window.gtag = function gtag() {
      window.dataLayer?.push(arguments)
    }
  }

  if (!googleTagConfigured) {
    window.gtag('consent', 'default', {
      analytics_storage: 'denied',
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
    })

    if (accepted) {
      window.gtag('consent', 'update', {
        analytics_storage: 'granted',
        ad_storage: 'denied',
        ad_user_data: 'denied',
        ad_personalization: 'denied',
      })
      window.gtag('js', new Date())
      window.gtag('config', GOOGLE_ANALYTICS_ID)

      const script = document.createElement('script')
      script.async = true
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS_ID}`
      document.head.appendChild(script)
      googleTagConfigured = true
    }

    return
  }

  window.gtag('consent', 'update', {
    analytics_storage: accepted ? 'granted' : 'denied',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
  })

  if (accepted) {
    window.gtag('event', 'page_view', {
      page_title: document.title,
      page_location: window.location.href,
      page_path: `${window.location.pathname}${window.location.search}`,
    })
  } else {
    clearGoogleAnalyticsCookies()
  }
}
