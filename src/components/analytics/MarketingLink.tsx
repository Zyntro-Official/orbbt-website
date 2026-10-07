'use client'

import { trackMarketingCta } from '@/lib/analytics/website-analytics'
import Link from 'next/link'
import type { ComponentProps } from 'react'

type Destination = 'signup' | 'pricing' | 'extension' | 'mobile'
type Placement = 'hero' | 'nav' | 'footer' | 'content'

type Props = Omit<ComponentProps<typeof Link>, 'href'> & {
  href: string
  destination: Destination
  placement: Placement
}

export default function MarketingLink({ destination, placement, onClick, ...props }: Props) {
  return (
    <Link
      {...props}
      onClick={event => {
        trackMarketingCta({ destination, placement })
        onClick?.(event)
      }}
    />
  )
}
