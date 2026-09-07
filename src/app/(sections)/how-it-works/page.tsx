/*
How It Works
*/

"use client"

// Imports
import { Bell, Bookmark, KanbanSquare, Users } from "lucide-react"

// UI Components
import AnimationContainer from "@/components/ui/animation-container"
import { AppBadge } from "@/components/ui/app-badge"
import { MagicCard } from "@/components/ui/magic-card"

// Constants
const STEPS = [
  {
    icon: Bookmark,
    step: "Capture",
    title: "Save any job in one click",
    description:
      "Use the browser extension on LinkedIn or Indeed. Company, title, salary, and location auto-filled. No copy-pasting into a spreadsheet.",
  },
  {
    icon: KanbanSquare,
    step: "Track",
    title: "See your whole pipeline at a glance",
    description:
      "Every application lands in your Jobs table or Kanban board. Drag a card from Applied to Interviewing to Offer.",
  },
  {
    icon: Users,
    step: "Connect",
    title: "Build your network around your targets",
    description:
      "Add the companies you're chasing and the people who can get you in. Recruiters, hiring managers, referrals, all linked to the roles they matter for.",
  },
  {
    icon: Bell,
    step: "Stay Ahead",
    title: "Never miss a deadline or a follow-up",
    description:
      "Every job has a status and a date. Your next move is always one glance away.",
  },
]

export default function HowItWorksPage() {
  return (
    <section id="how-it-works" className="py-20">
      <AnimationContainer
        delay={0.1}
        className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center w-full py-8">
          {/* Eyebrow Badge */}
          <AppBadge className="mb-6">How It Works</AppBadge>

          {/* Title */}
          <h2 className="text-center text-3xl md:text-5xl leading-[1.1]! font-bold font-heading text-foreground mt-6">
            Four steps,{" "}
            <span className="bg-linear-to-r from-[#571FFF] via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              start to offer
            </span>
          </h2>

          {/* Subtitle */}
          <p className="mt-4 text-center text-lg text-muted-foreground max-w-lg">
            From the first saved role to the signed offer letter — everything has a place.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
          {STEPS.map(({ icon: Icon, step, title, description }, i) => (
            <AnimationContainer delay={0.15 * i} key={i} className="h-full">
              <MagicCard
                mode="orb"
                glowFrom={"#E9D5FF"}
                glowTo={"#FBCFE8"}
                glowOpacity={0.3}
                glowSize={300}
                className="flex flex-col h-full rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-md"
              >
                {/* Header Row — icon + step number badge */}
                <div className="flex items-center justify-between">
                  <span className="flex size-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="size-4" />
                  </span>
                  <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-2.5 py-0.5 text-xs font-semibold text-primary">
                    Step #{i + 1}
                  </span>
                </div>

                {/* Step Tag */}
                <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-primary">
                  {step}
                </p>

                {/* Title */}
                <p className="mt-1 text-lg font-bold text-foreground">{title}</p>

                {/* Description */}
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {description}
                </p>
              </MagicCard>
            </AnimationContainer>
          ))}
        </div>
      </AnimationContainer>
    </section>
  )
}
