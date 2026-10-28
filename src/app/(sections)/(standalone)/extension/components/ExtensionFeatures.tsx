/*
  Extension Features Section
  Showcases extension capabilities using 1.svg, 4.svg, 3.svg, 2.svg
*/

// Imports
import { CheckCircle2 } from "lucide-react"
import Image from "next/image"

// UI Components
import AnimationContainer from "@/components/ui/animation-container"
import { AppBadge } from "@/components/ui/app-badge"

// Features Data
const EXTENSION_FEATURES = [
  {
    id: "job-save",
    title: "Save Jobs in Seconds",
    subtitle: "Say goodbye to manual copy-pasting",
    description:
      "Open any job on LinkedIn or Indeed. Orbbt automatically detects and auto-fills the role title, company name, location, salary range, and application deadlines. Save everything straight into your pipeline with zero spreadsheet fatigue.",
    highlights: [
      "Auto-detects salary, workplace mode (Remote/On-site) & location",
      "Deadline tracking with quick 1-click reminders (+3 Days, +1 Week)",
      "Preserves direct job post URL and full job description",
    ],
    image: "/extension/1.svg",
    alt: "Orbbt Chrome Extension 1-click job save interface on LinkedIn",
  },
  {
    id: "pipeline-sync",
    title: "Instant Kanban & Table Sync",
    subtitle: "From extension click to organized pipeline in real-time",
    description:
      "Everything you capture through the extension syncs in real-time across your Orbbt web dashboard and mobile app. Effortlessly organize your pipeline using visual drag-and-drop Kanban boards or keyboard-friendly tables.",
    highlights: [
      "Instant cloud sync across web dashboard, extension, and mobile app",
      "Dual views: Visual Kanban board and high-density spreadsheet-like table",
      "Automated deadline notifications and stage progression tracking",
    ],
    image: "/extension/2.png",
    alt: "Orbbt Dashboard showing live synchronized Kanban and Table pipeline",
  },
  {
    id: "contact-save",
    title: "Capture Recruiters & Hiring Managers",
    subtitle: "Turn cold applications into warm connections",
    description:
      "Found the recruiter or hiring manager behind the role? Save their details directly from their LinkedIn profile. Link contacts directly to specific jobs and companies so you always follow up with the right person on time.",
    highlights: [
      "1-click recruiter profile extraction from LinkedIn",
      "Links contacts directly to target companies and job applications",
      "Custom private notes for outreach history and interview stages",
    ],
    image: "/extension/4.svg",
    alt: "Orbbt Chrome Extension recruiter contact capture interface",
  },
  {
    id: "company-save",
    title: "Build Your Target Company Database",
    subtitle: "Centralized employer intelligence at your fingertips",
    description:
      "Researching prospective companies on LinkedIn? Save their company page in one click. Gather employee size, industry classification, website URLs, and private notes in a single centralized hub.",
    highlights: [
      "Auto-extracts company domain, industry, and employee headcount",
      "Consolidates all applications and recruiter contacts under one company",
      "Add private notes on company culture, tech stack, and salary tier",
    ],
    image: "/extension/3.svg",
    alt: "Orbbt Chrome Extension company review interface",
  },
  
]

export default function ExtensionFeatures() {
  return (
    <section id="extension-features" className="py-20 lg:py-28 bg-muted/30 border-t border-border/50 relative overflow-hidden">
      {/* Subtle Ambient Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#571FFF]/10 blur-[180px] rounded-full pointer-events-none -z-10" />

      <AnimationContainer
        delay={0.1}
        className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center w-full pb-16 lg:pb-24 text-center">
          <AppBadge className="mb-6">
            Extension Capabilities
          </AppBadge>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground max-w-3xl leading-[1.15]">
            Everything you need to capture{" "}
            <span className="bg-linear-to-r from-[#571FFF] via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              without friction
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed">
            The complete job search toolkit directly in your browser. Extract roles, link recruiter contacts, and populate your company directory in seconds.
          </p>
        </div>

        {/* Alternating Feature Showcases */}
        <div className="space-y-20 lg:space-y-28">
          {EXTENSION_FEATURES.map((feature, i) => {
            const isReversed = i % 2 === 1

            return (
              <AnimationContainer
                key={feature.id}
                delay={0.15}
                className="grid items-center gap-10 lg:gap-14 lg:grid-cols-12"
              >
                {/* Text Content Column */}
                <div
                  className={`lg:col-span-5 flex flex-col items-start text-left ${
                    isReversed ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  {/* Title & Subtitle */}
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight leading-snug">
                    {feature.title}
                  </h3>

                  <p className="mt-1 text-sm font-medium text-muted-foreground/80">
                    {feature.subtitle}
                  </p>

                  {/* Body Copy */}
                  <p className="mt-3.5 text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <ul className="mt-6 space-y-2.5 w-full">
                    {feature.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground">
                        <CheckCircle2 className="size-4 text-[#571FFF] shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">
                          <strong className="font-semibold text-foreground">
                            {highlight.split(" ")[0]}
                          </strong>{" "}
                          {highlight.split(" ").slice(1).join(" ")}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Screenshot Visual Column */}
                <div
                  className={`lg:col-span-7 w-full flex items-center justify-center ${
                    isReversed ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="relative w-full overflow-hidden">
                    <Image
                      src={feature.image}
                      alt={feature.alt}
                      width={1100}
                      height={600}
                      loading="lazy"
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </div>
              </AnimationContainer>
            )
          })}
        </div>
      </AnimationContainer>
    </section>
  )
}

