import { supabase } from '@/plugins/supabase'

export interface VisitRecord {
  id?: string
  created_at?: string
  ip: string
  country: string
  city: string
  user_agent: string
  browser: string
  browser_version: string
  os: string
  device_type: string
  referrer: string
  page: string
  language: string
  screen_resolution: string
  timezone: string
}

// --- Browser / OS detection ---

function detectBrowser(ua: string): { browser: string; version: string } {
  if (/Edg\//i.test(ua)) {
    const v = ua.match(/Edg\/([\d.]+)/)?.[1] ?? ''
    return { browser: 'Edge', version: v }
  }
  if (/OPR\//i.test(ua) || /Opera\//i.test(ua)) {
    const v = ua.match(/OPR\/([\d.]+)/)?.[1] ?? ''
    return { browser: 'Opera', version: v }
  }
  if (/Firefox\//i.test(ua)) {
    const v = ua.match(/Firefox\/([\d.]+)/)?.[1] ?? ''
    return { browser: 'Firefox', version: v }
  }
  if (/Chrome\//i.test(ua)) {
    const v = ua.match(/Chrome\/([\d.]+)/)?.[1] ?? ''
    return { browser: 'Chrome', version: v }
  }
  if (/Safari\//i.test(ua)) {
    const v = ua.match(/Version\/([\d.]+)/)?.[1] ?? ''
    return { browser: 'Safari', version: v }
  }
  return { browser: 'Unknown', version: '' }
}

function detectOS(ua: string): string {
  if (/Windows NT 10/i.test(ua)) return 'Windows 10/11'
  if (/Windows NT 6\.3/i.test(ua)) return 'Windows 8.1'
  if (/Windows NT 6\.1/i.test(ua)) return 'Windows 7'
  if (/Windows/i.test(ua)) return 'Windows'
  if (/iPhone/i.test(ua)) return 'iOS (iPhone)'
  if (/iPad/i.test(ua)) return 'iOS (iPad)'
  if (/Mac OS X/i.test(ua)) return 'macOS'
  if (/Android/i.test(ua)) {
    const v = ua.match(/Android ([\d.]+)/)?.[1] ?? ''
    return `Android ${v}`
  }
  if (/Linux/i.test(ua)) return 'Linux'
  return 'Unknown'
}

function detectDeviceType(ua: string): string {
  if (/Tablet|iPad/i.test(ua)) return 'Tablet'
  if (/Mobile|iPhone|Android.*Mobile/i.test(ua)) return 'Mobile'
  return 'Desktop'
}

// --- IP geolocation (free, no API key needed) ---

async function fetchIpInfo(): Promise<{ ip: string; country: string; city: string }> {
  try {
    const res = await fetch('https://ipapi.co/json/', { signal: AbortSignal.timeout(4000) })
    if (!res.ok) throw new Error('ipapi failed')
    const data = await res.json()
    return {
      ip: data.ip ?? 'Unknown',
      country: data.country_name ?? data.country ?? 'Unknown',
      city: data.city ?? 'Unknown',
    }
  } catch {
    // Fallback: just get the IP
    try {
      const res = await fetch('https://api.ipify.org?format=json', { signal: AbortSignal.timeout(3000) })
      const data = await res.json()
      return { ip: data.ip ?? 'Unknown', country: 'Unknown', city: 'Unknown' }
    } catch {
      return { ip: 'Unknown', country: 'Unknown', city: 'Unknown' }
    }
  }
}

// --- Session dedup: track only one visit per session ---

const SESSION_KEY = 'fd_visit_tracked'

export async function trackVisit(): Promise<void> {
  if (sessionStorage.getItem(SESSION_KEY)) return
  sessionStorage.setItem(SESSION_KEY, '1')

  const ua = navigator.userAgent
  const { browser, version: browser_version } = detectBrowser(ua)
  const { ip, country, city } = await fetchIpInfo()

  const visit: VisitRecord = {
    ip,
    country,
    city,
    user_agent: ua,
    browser,
    browser_version,
    os: detectOS(ua),
    device_type: detectDeviceType(ua),
    referrer: document.referrer || 'Direct',
    page: window.location.pathname,
    language: navigator.language,
    screen_resolution: `${window.screen.width}x${window.screen.height}`,
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
  }

  await supabase.from('visits').insert([visit])
}

export async function getTotalVisitCount(): Promise<number> {
  const { count } = await supabase
    .from('visits')
    .select('*', { count: 'exact', head: true })
  return count ?? 0
}

export async function getAllVisits(): Promise<VisitRecord[]> {
  const { data } = await supabase
    .from('visits')
    .select('*')
    .order('created_at', { ascending: false })
  return (data as VisitRecord[]) ?? []
}
