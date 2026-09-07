/*
Problem
*/

"use client"

// Imports
import { X } from "lucide-react"

// UI Components
import AnimationContainer from "@/components/ui/animation-container"
import { AppBadge } from "@/components/ui/app-badge"

// Constants — Pain Points
const PAIN_POINTS = [
  {
    title: "Scattered trackers",
    description:
      "Excel sheets you update once a week and forget to reopen.",
  },
  {
    title: "Forgotten contacts",
    description:
      "Recruiter emails and LinkedIn DMs buried in threads you'll never find again.",
  },
  {
    title: "Lost applications",
    description:
      "Saved jobs and bookmarks that expire before you revisit them.",
  },
  {
    title: "Missed deadlines",
    description:
      "Interview dates and follow-ups you only remember after they've passed.",
  },
]

export default function ProblemPage() {
  return (
    <section
      id="problem"
      className="py-20 bg-muted/40 border-y border-border/50"
    >
      <AnimationContainer
        delay={0.1}
        className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center w-full py-8">
          {/* Eyebrow Badge */}
          <AppBadge className="mb-6">The Problem</AppBadge>

          {/* Title */}
          <h2 className="text-center text-3xl md:text-5xl leading-[1.1]! font-bold font-heading text-foreground mt-6">
            Your job search is spread{" "}
            <span className="bg-linear-to-r from-[#571FFF] via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              across six different tools
            </span>
          </h2>

          {/* Subtitle */}
          <p className="mt-4 text-center text-lg text-muted-foreground max-w-lg">
            Every application leaves a trail somewhere else. After fifty of them, nobody can tell what you applied to.
          </p>
        </div>

        {/* Pain Points Grid */}
        <div className="mx-auto mt-4 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-2">
          {PAIN_POINTS.map((point, idx) => (
            <AnimationContainer
              key={point.title}
              delay={0.1 + idx * 0.08}
            >
              <div className="flex h-full items-start gap-4 rounded-xl border border-border/60 bg-background/60 p-5">
                {/* Problem Indicator */}
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-destructive/10 text-destructive">
                  <X className="h-4 w-4" strokeWidth={2.5} />
                </span>

                {/* Title + Description */}
                <div className="flex-1">
                  <h3 className="text-base font-bold text-foreground">
                    {point.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {point.description}
                  </p>
                </div>
              </div>
            </AnimationContainer>
          ))}
        </div>

      </AnimationContainer>
    </section>
  )
}
