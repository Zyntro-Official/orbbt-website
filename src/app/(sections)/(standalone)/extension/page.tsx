/*
Extension Page
*/

// Imports
import type { Metadata } from "next"
import Image from "next/image"
import { ArrowRight, Bookmark, Download, Rocket } from "lucide-react"

// UI Components
import FaqPage from "@/app/(sections)/faq/page"
import MarketingLink from "@/components/analytics/MarketingLink"
import { ChromeIcon } from "@/components/icons/chrome"
import AnimationContainer from "@/components/ui/animation-container"
import { AppBadge } from "@/components/ui/app-badge"
import { BorderBeam } from "@/components/ui/border-beam"
import { Button } from "@/components/ui/button"

// Config
import { CHROME_STORE_URL } from "@/lib/config"

// Metadata
export const metadata: Metadata = {
  title: "Orbbt Chrome Extension — 1-Click Job Application Tracker",
  description:
    "Save jobs from LinkedIn & Indeed straight into your organized pipeline without spreadsheets. Free for Chrome and Chromium browsers.",
  alternates: { canonical: "/extension" },
}

// Constants — How It Works Steps
const HOW_IT_WORKS_STEPS = [
  {
    step: 1,
    icon: Download,
    title: "Install Extension",
    description:
      "Add Orbbt from the Chrome Web Store with one click. Setup takes seconds and requires no complicated configuration.",
  },
  {
    step: 2,
    icon: Bookmark,
    title: "Browse & Save Jobs",
    description:
      "Open any job on LinkedIn or Indeed. Click the Orbbt icon to automatically extract the role, salary, and recruiter contacts.",
  },
  {
    step: 3,
    icon: Rocket,
    title: "Track & Go",
    description:
      "Applications sync directly to your Orbbt Kanban and table. Set reminders, follow up on time, and move towards an offer.",
  },
]

// Constants — FAQs
const EXTENSION_FAQS = [
  {
    q: "Is the Orbbt Chrome Extension free to use?",
    a: "Yes! The Orbbt Chrome Extension is 100% free with unlimited job saves, recruiter contact capturing, and instant syncing across your devices.",
  },
  {
    q: "Which browsers and job sites are supported?",
    a: "Orbbt works on Google Chrome and all Chromium-based browsers including Brave, Microsoft Edge, Arc, and Opera. It is fully optimized for LinkedIn and Indeed job detail pages.",
  },
  {
    q: "Does the extension track or read my personal browsing history?",
    a: "No. We respect your privacy. Orbbt only activates when you open a job listing and interact with the extension. We never track your search history or sell your data.",
  },
  {
    q: "Do I need an account to use the extension?",
    a: "Yes, you just need a free Orbbt account so that every role and contact you save can sync in real-time to your Kanban board, table view, and mobile app.",
  },
  {
    q: "Can I edit details after saving a job?",
    a: "Absolutely. You can edit salary notes, stage (Saved, Applied, Interviewing, Offer), application deadlines, and custom tags at any time from your dashboard or extension.",
  },
]

export default function ExtensionLandingPage() {
  const storeUrl =
    CHROME_STORE_URL ??
    "https://chromewebstore.google.com/detail/orbbt-linkedin-indeed-job/gglibakbhgepkmoeekclgnfoikjhngkg?utm_source=official_website&utm_medium=referral&utm_campaign=web_to_store"

  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-4rem)] flex items-center py-16 lg:py-24">
        {/* Ambient Background Glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#571FFF]/15 blur-[140px] rounded-full pointer-events-none -z-10" />

        <AnimationContainer
          delay={0.1}
          className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          {/* Centered Simple Badge with Icon */}
          <div className="flex justify-center mb-6">
            <AppBadge icon={<ChromeIcon className="h-3.5 w-3.5" />}>
              Chrome Extension
            </AppBadge>
          </div>

          {/* 2-Column Hero Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Grid — Title, Subtitle, Install Button */}
            <div className="flex flex-col items-start text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.15]">
                Save jobs from LinkedIn & Indeed{" "}
                <span className="bg-linear-to-r from-[#571FFF] via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  in one click
                </span>
              </h1>

              <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl">
                The Orbbt Chrome extension is a job application tracker that saves jobs, companies, and contacts directly to your Orbbt account without messy spreadsheets.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                <Button
                  size="lg"
                  asChild
                  className="w-full sm:w-auto h-12 px-8 text-base font-semibold bg-[#571FFF] hover:bg-[#571FFF]/90 shadow-lg shadow-[#571FFF]/25 cursor-pointer"
                >
                  <MarketingLink
                    href={storeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    destination="extension"
                    placement="content"
                  >
                    <ChromeIcon className="mr-2 h-4 w-4" />
                    Install from Chrome Store
                  </MarketingLink>
                </Button>
              </div>
            </div>

            {/* Right Grid — Extension Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-sm">
                <div className="relative rounded-2xl border border-border/70 bg-card/60 p-2 sm:p-3 shadow-xl backdrop-blur-xl">
                  {/* Border Beam Glow */}
                  <BorderBeam
                    size={200}
                    duration={12}
                    delay={4}
                    colorFrom="#571FFF"
                    colorTo="#a855f7"
                    borderWidth={2}
                  />

                  <div className="overflow-hidden rounded-xl border border-border/50 bg-muted/30">
                    <Image
                      src="/features/image.png"
                      alt="Orbbt Chrome Extension Preview"
                      width={800}
                      height={600}
                      priority
                      className="w-full h-auto object-cover rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimationContainer>
      </section>

      {/* How It Works Section */}
      <section className="py-20 lg:py-28 border-t border-border/50 bg-muted/20">
        <AnimationContainer
          delay={0.1}
          className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          {/* Section Header */}
          <div className="flex flex-col items-center justify-center w-full pb-16 text-center">
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground">
              How It{" "}
              <span className="bg-linear-to-r from-[#571FFF] via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Works
              </span>
            </h2>
            <p className="mt-3 text-base sm:text-lg text-muted-foreground max-w-lg">
              Get started in three simple steps
            </p>
          </div>

          {/* 3-Column Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14 max-w-5xl mx-auto text-center">
            {HOW_IT_WORKS_STEPS.map((stepItem, i) => {
              const Icon = stepItem.icon
              return (
                <AnimationContainer
                  delay={0.1 * (i + 1)}
                  key={stepItem.step}
                  className="group flex flex-col items-center"
                >
                  {/* Circular Icon with Top-Right Number Badge */}
                  <div className="relative mb-6 flex size-20 items-center justify-center rounded-full bg-[#571FFF]/10 border border-[#571FFF]/20 text-[#571FFF] transition-all duration-300 group-hover:scale-105 group-hover:bg-[#571FFF]/15 group-hover:border-[#571FFF]/40">
                    <Icon className="size-8 stroke-[1.8]" />
                    <span className="absolute -top-1 -right-1 flex size-6 items-center justify-center rounded-full bg-[#571FFF] text-xs font-bold text-white shadow-md shadow-[#571FFF]/35">
                      {stepItem.step}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {stepItem.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
                    {stepItem.description}
                  </p>
                </AnimationContainer>
              )
            })}
          </div>
        </AnimationContainer>
      </section>

      {/* FAQ Section */}
      <FaqPage
        faqs={EXTENSION_FAQS}
        subtitle="Quick answers to the most common questions about the extension."
      />

      {/* Conclusion CTA Banner (Referenced from image) */}
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
                <ChromeIcon className="mr-2 h-4 w-4 text-[#571FFF]" />
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
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </MarketingLink>
            </Button>
          </div>
        </AnimationContainer>
      </section>
    </div>
  )
}
