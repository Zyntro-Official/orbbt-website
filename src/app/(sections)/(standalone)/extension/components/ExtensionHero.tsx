/*
  Extension Hero Section
*/

// Imports
import Image from "next/image"
import { ArrowRight, Layers, ShieldCheck, Zap } from "lucide-react"

// UI Components
import MarketingLink from "@/components/analytics/MarketingLink"
import { ChromeIcon } from "@/components/icons/chrome"
import AnimationContainer from "@/components/ui/animation-container"
import { Button } from "@/components/ui/button"

// Config
import { CHROME_STORE_URL } from "@/lib/config"

// Key Features Checklist
const EXTENSION_HIGHLIGHTS = [
  {
    icon: Zap,
    title: "1-Click Auto-Extraction",
    description: "Extracts role title, company, salary band, and deadline in seconds.",
  },
  {
    icon: Layers,
    title: "Recruiter & Company Capture",
    description: "Saves hiring managers and company details linked directly to the role.",
  },
  {
    icon: ShieldCheck,
    title: "Direct Pipeline Sync",
    description: "Saved roles appear instantly on your Kanban board without messy spreadsheets.",
  },
]

interface ExtensionHeroProps {
  storeUrl?: string
}

export default function ExtensionHero({ storeUrl: customStoreUrl }: ExtensionHeroProps) {
  const storeUrl =
    customStoreUrl ??
    CHROME_STORE_URL ??
    "https://chromewebstore.google.com/detail/orbbt-linkedin-indeed-job/gglibakbhgepkmoeekclgnfoikjhngkg?utm_source=official_website&utm_medium=referral&utm_campaign=web_to_store"

  return (
    <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-28">
      {/* Directional Atmospheric Glow (positioned top-right behind mockup) */}
      <div className="absolute top-10 right-0 w-[550px] lg:w-[750px] h-[400px] lg:h-[550px] bg-linear-to-br from-[#571FFF]/20 via-indigo-600/15 to-transparent blur-[140px] rounded-full pointer-events-none -z-10" />

      {/* Ambient Subtle Grid Background */}
      <div className="absolute inset-0 bg-[radial-gradient(#571FFF_1px,transparent_1px)] bg-size-[32px_32px] opacity-15 pointer-events-none -z-10" />

      <AnimationContainer
        delay={0.1}
        className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        {/* Centered Extension Badge */}
        {/* <div className="flex items-center justify-center w-full mb-2">
          <AppBadge>
            Chrome Extension
          </AppBadge>
        </div> */}

        {/* Flex Hero Container */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
          
          {/* Left Content — Value Proposition & Action Hub */}
          <div className="w-full lg:w-5/12 flex flex-col items-start text-left z-10 shrink-0">

            {/* Differentiated Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground leading-[1.15]">
              Never copy-paste a job listing again.
              <span className="block mt-2 bg-linear-to-r from-[#571FFF] via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Save in seconds.
              </span>
            </h1>

            {/* Feature Checklist micro-cards */}
            <div className="mt-6 space-y-3 w-full">
              {EXTENSION_HIGHLIGHTS.map((item, index) => {
                const Icon = item.icon
                return (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-2.5 rounded-xl border border-border/60 bg-card/40 backdrop-blur-xs transition-colors hover:bg-card/70"
                  >
                    <div className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-[#571FFF]/10 text-[#571FFF] mt-0.5">
                      <Icon className="size-4" />
                    </div>
                    <div className="text-left">
                      <p className="text-xs font-semibold text-foreground">
                        {item.title}
                      </p>
                      <p className="text-[11px] text-muted-foreground leading-snug">
                        {item.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* CTA Action Buttons */}
            <div className="mt-7 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full">
              <Button
                size="lg"
                asChild
                className="h-12 px-6 text-sm sm:text-base font-semibold bg-[#571FFF] hover:bg-[#571FFF]/90 shadow-lg shadow-[#571FFF]/25 cursor-pointer"
              >
                <MarketingLink
                  href={storeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  destination="extension"
                  placement="hero"
                >
                  <ChromeIcon className="mr-2 size-4" />
                  Add to Chrome — Free
                </MarketingLink>
              </Button>

              <Button
                size="lg"
                variant="outline"
                asChild
                className="h-12 px-5 text-sm sm:text-base font-semibold cursor-pointer"
              >
                <MarketingLink
                  href="https://web.orbbt.app/signup"
                  target="_blank"
                  rel="noopener noreferrer"
                  destination="signup"
                  placement="hero"
                >
                  Try Web App <ArrowRight className="ml-1.5 size-4" />
                </MarketingLink>
              </Button>
            </div>

            {/* Compatibility Strip */}
            <p className="mt-3 text-[11px] text-muted-foreground">
              Supported on Chrome, Edge, Brave, Arc & Opera.
            </p>
          </div>

          {/* Right Content — Elevated 1.svg Product Showcase */}
          <div className="w-full lg:w-7/12 flex items-center justify-center lg:justify-end">
            <Image
              src="/extension/1.svg"
              alt="Orbbt Chrome Extension auto-extracting job details on LinkedIn in one click"
              width={1060}
              height={581}
              priority
              quality={95}
              className="w-full h-auto object-contain rounded-xl"
            />
          </div>

        </div>
      </AnimationContainer>
    </section>
  )
}

