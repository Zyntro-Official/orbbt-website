/*
Before & After
*/

"use client"

// Imports
import { Check, ThumbsDown, ThumbsUp, X } from "lucide-react"

// UI Components
import AnimationContainer from "@/components/ui/animation-container"
import { AppBadge } from "@/components/ui/app-badge"
import { MagicCard } from "@/components/ui/magic-card"

// Constants — Old Way
const OLD_WAY = [
  {
    title: "Jobs are scattered",
    description:
      "Applications sit across tabs, emails, notes, job boards, and spreadsheets.",
  },
  {
    title: "Company details get lost",
    description:
      "You lose track of which companies you've already applied to or reached out to, and end up duplicating effort.",
  },
  {
    title: "Deadlines rely on memory",
    description:
      "Assessments, follow-ups, and interviews can slip when your calendar is not connected to your tracker.",
  },
  {
    title: "Contacts disappear",
    description:
      "Recruiters, referrals, alumni, and hiring managers get buried inside messages.",
  },
]

// Constants — Orbbt Way
const ORBBT_WAY = [
  {
    title: "Every application has a home",
    description:
      "Track jobs, statuses, links, notes, salaries, deadlines, and next steps in one place.",
  },
  {
    title: "Every company in one place",
    description:
      "See every company you've applied to, saved, or reached out to, without digging through old emails and tabs.",
  },
  {
    title: "Follow-ups stay visible",
    description:
      "Deadline reminders help you know what needs attention before momentum fades.",
  },
  {
    title: "Your network is your net worth",
    description:
      "Keep contacts linked to the companies and roles you're chasing. Applications open doors, but the right connection is what gets you through them.",
  },
]

export default function ComparisonPage() {
  return (
    <section id="comparison" className="py-20">
      <AnimationContainer
        delay={0.1}
        className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center w-full py-8">
          {/* Eyebrow Badge */}
          <AppBadge className="mb-6">Before &amp; After</AppBadge>

          {/* Title */}
          <h2 className="text-center text-3xl md:text-5xl !leading-[1.1] font-bold font-heading text-foreground mt-6">
            Spreadsheets track data.{" "}
            <span className="bg-gradient-to-r from-[#571FFF] via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              orbbt tracks momentum.
            </span>
          </h2>

          {/* Subtitle */}
          <p className="mt-4 text-center text-lg text-muted-foreground max-w-lg">
            A job hunt gets messy when every next step lives somewhere else. orbbt turns scattered effort into one organized job search tracker.
          </p>
        </div>

        {/* Comparison Table */}
        <div
          className="mt-12 grid gap-8 lg:grid-cols-2"
          aria-label="Before and after orbbt comparison"
        >
          {/* The Old Way */}
          <AnimationContainer delay={0.2}>
            <MagicCard gradientColor="#D9D9D955" className="rounded-2xl border">
                <div className="rounded-2xl border border-red-200/60 bg-red-50/40 dark:bg-red-950/10 dark:border-red-800/30 p-6 sm:p-8">
              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="flex size-9 items-center justify-center rounded-xl bg-red-100 dark:bg-red-900/30">
                  <ThumbsDown className="size-4 text-red-500 dark:text-red-400" />
                </div>
                <h3 className="text-lg font-bold text-foreground">
                  The old way
                </h3>
              </div>

              {/* List */}
              <ul className="space-y-5">
                {OLD_WAY.map((item) => (
                  <li key={item.title} className="flex items-start gap-3">
                    <X className="mt-0.5 size-4 shrink-0 text-red-400 dark:text-red-500" />
                    <div>
                      <strong className="block text-sm font-semibold text-foreground">
                        {item.title}
                      </strong>
                      <span className="block mt-0.5 text-sm text-muted-foreground">
                        {item.description}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            </MagicCard>
          </AnimationContainer>

          {/* The Orbbt Way */}
          <AnimationContainer delay={0.3}>
           <MagicCard gradientColor="#D9D9D955" className="rounded-2xl border"> <div className="rounded-2xl border border-green-200/60 bg-green-50/40 dark:bg-green-950/10 dark:border-green-800/30 p-6 sm:p-8">
              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="flex size-9 items-center justify-center rounded-xl bg-green-100 dark:bg-green-900/30">
                  <ThumbsUp className="size-4 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-lg font-bold text-foreground">
                  The orbbt way
                </h3>
              </div>

              {/* List */}
              <ul className="space-y-5">
                {ORBBT_WAY.map((item) => (
                  <li key={item.title} className="flex items-start gap-3">
                    <Check className="mt-0.5 size-4 shrink-0 text-green-500 dark:text-green-400" />
                    <div>
                      <strong className="block text-sm font-semibold text-foreground">
                        {item.title}
                      </strong>
                      <span className="block mt-0.5 text-sm text-muted-foreground">
                        {item.description}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div></MagicCard>
          </AnimationContainer>
        </div>
      </AnimationContainer>
    </section>
  )
}
