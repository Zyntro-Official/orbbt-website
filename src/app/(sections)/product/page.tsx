/*
Product
*/

"use client"

// Imports
import Image from "next/image"

// UI Components
import AnimationContainer from "@/components/ui/animation-container"
import { AppBadge } from "@/components/ui/app-badge"

// Constants
const SHOWCASE = [
  {
    title: "Dashboard",
    copy: "One view of everything in flight — activity, upcoming interviews, and what needs a nudge.",
  },
  {
    title: "Analytics",
    copy: "See where applications stall so you can fix the step that is actually costing you offers.",
  },
  {
    title: "Job pipeline",
    copy: "Drag roles from saved to applied to interview. Every note and deadline travels with the card.",
  },
  {
    title: "Resume manager",
    copy: "Keep versions per role, compare match scores, and always know which file you sent.",
  },
]

export default function ProductPage() {
  return (
    <section id="product" className="py-20 bg-muted/40 border-y border-border/50">
      <AnimationContainer delay={0.1} className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center w-full py-8">
          {/* Eyebrow Badge */}
          <AppBadge className="mb-6">Product</AppBadge>

          {/* Title */}
          <h2 className="text-center text-3xl md:text-5xl !leading-[1.1] font-bold font-heading text-foreground mt-6">
            Built to hold{" "}
            <span className="bg-gradient-to-r from-[#571FFF] via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              hundreds of applications
            </span>
          </h2>

          {/* Subtitle */}
          <p className="mt-4 text-center text-lg text-muted-foreground max-w-lg">
            Every view is built for the job search — from dashboard overviews to granular application tracking.
          </p>
        </div>

        {/* Alternating Rows */}
        <div className="mt-12 space-y-16">
          {SHOWCASE.map((item, i) => (
            <div key={item.title} className="grid items-center gap-8 lg:grid-cols-12">
              {/* Copy — alternates left/right */}
              <div className={`lg:col-span-4 ${i % 2 ? "lg:order-2" : ""}`}>
                <h3 className="text-xl font-bold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground">
                  {item.copy}
                </p>
              </div>

              {/* Screenshot Placeholder */}
              <div className="relative lg:col-span-8 rounded-xl border border-border/60 bg-card p-2 shadow-sm">
                <div className="relative overflow-hidden rounded-lg bg-muted">
                  <Image
                    src="/image.png"
                    alt={item.title}
                    width={1200}
                    height={675}
                    className="w-full h-auto object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </AnimationContainer>
    </section>
  )
}
