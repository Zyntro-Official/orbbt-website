'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useRef } from 'react'
import { captureWebsitePageview } from './website-analytics'

export default function WebsiteAnalyticsBridge() {
  const pathname = usePathname()
  const lastNavigation = useRef<string | null>(null)

  useEffect(() => {
    if (!pathname || lastNavigation.current === pathname) return
    lastNavigation.current = pathname
    captureWebsitePageview(pathname)
  }, [pathname])

  return null
}
