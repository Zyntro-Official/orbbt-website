/*
  Extension CTA Banner Section
*/

// Imports
import { ArrowRight } from "lucide-react"

// UI Components
import MarketingLink from "@/components/analytics/MarketingLink"
import { ChromeIcon } from "@/components/icons/chrome"
import AnimationContainer from "@/components/ui/animation-container"
import { Button } from "@/components/ui/button"

// Config
import { CHROME_STORE_URL } from "@/lib/config"

interface ExtensionCtaProps {
  storeUrl?: string
}

export default function ExtensionCta({ storeUrl: customStoreUrl }: ExtensionCtaProps) {
  const storeUrl =
    customStoreUrl ??
    CHROME_STORE_URL ??
    "https://chromewebstore.google.com/detail/orbbt-linkedin-indeed-job/gglibakbhgepkmoeekclgnfoikjhngkg?utm_source=official_website&utm_medium=referral&utm_campaign=web_to_store"

  return (
    <section className="w-full py-20 lg:py-24 bg-linear-to-r from-[#571FFF] via-indigo-600 to-[#7A3FFF] text-white relative overflow-hidden">
      {/* Subtle Ambient Radial Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)] pointer-events-none" />

      <AnimationContainer
        delay={0.1}
        className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center relative z-10"
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          Ready to Transform Your Job Hunt?
        </h2>
        <p className="mt-4 text-base sm:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
          Join thousands of active job seekers who have already supercharged their productivity with Orbbt. Get started today—it&apos;s free!
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            asChild
            className="h-12 px-7 rounded-xl bg-white text-gray-950 hover:bg-white/90 font-semibold shadow-lg shadow-black/15 cursor-pointer"
          >
            <MarketingLink
              href={storeUrl}
              target="_blank"
              rel="noopener noreferrer"
              destination="extension"
              placement="content"
            >
              <ChromeIcon className="mr-2 size-4 text-[#571FFF]" />
              Install Now - It&apos;s Free
            </MarketingLink>
          </Button>

          <Button
            size="lg"
            variant="outline"
            asChild
            className="h-12 px-7 rounded-xl border-white/40 bg-white/10 text-white hover:bg-white/20 hover:text-white font-semibold backdrop-blur-xs cursor-pointer"
          >
            <MarketingLink
              href="https://web.orbbt.app/signup"
              target="_blank"
              rel="noopener noreferrer"
              destination="signup"
              placement="content"
            >
              Learn More <ArrowRight className="ml-2 size-4" />
            </MarketingLink>
          </Button>
        </div>
      </AnimationContainer>
    </section>
  )
}

