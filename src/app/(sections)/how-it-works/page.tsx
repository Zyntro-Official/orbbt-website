/*
How It Works
*/

"use client"

// Imports
import { KanbanSquare, Search, Sparkles, Trophy } from "lucide-react"

// UI Components
import AnimationContainer from "@/components/ui/animation-container"
import { AppBadge } from "@/components/ui/app-badge"
import { MagicCard } from "@/components/ui/magic-card"

// Constants
const STEPS = [
  {
    icon: Search,
    title: "Find jobs",
    description:
      "Save roles from LinkedIn and company websites in one click, with the details intact.",
  },
  {
    icon: KanbanSquare,
    title: "Organize",
    description:
      "Track every application through a Kanban pipeline from saved to offer.",
  },
  {
    icon: Sparkles,
    title: "Improve",
    description:
      "AI helps optimize your resume, draft cover letters, and prepare for interviews.",
  },
  {
    icon: Trophy,
    title: "Get hired",
    description:
      "Stay on top of follow-ups and deadlines until you sign the offer.",
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
          <h2 className="text-center text-3xl md:text-5xl !leading-[1.1] font-bold font-heading text-foreground mt-6">
            Four steps,{" "}
            <span className="bg-gradient-to-r from-[#571FFF] via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              start to offer
            </span>
          </h2>

          {/* Subtitle */}
          <p className="mt-4 text-center text-lg text-muted-foreground max-w-lg">
            From the first saved role to the signed offer letter — everything has a place.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map(({ icon: Icon, title, description }, i) => (
            <AnimationContainer delay={0.15 * i} key={i}>
              <MagicCard mode="orb"
        glowFrom={"#E9D5FF"}
        glowTo={"#FBCFE8"} className="rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-md">
                {/* Header Row — icon + step number */}
                <div className="flex items-center justify-between">
                  <span className="flex size-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="size-4" />
                  </span>
                  <span className="font-mono text-sm font-semibold text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Title */}
                <p className="mt-4 text-lg font-bold text-foreground">{title}</p>

                {/* Description */}
                <p className="mt-2 text-sm text-muted-foreground">{description}</p>
              </MagicCard>
            </AnimationContainer>
          ))}
        </div>
      </AnimationContainer>
    </section>
  )
}
