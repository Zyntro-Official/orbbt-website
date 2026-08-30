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
    title: "Companies",
    subtitle: "Target the right teams",
    image: "/features/companies.png",
    copy: "Track target companies, their hiring signals, and where you stand with each team.Track target companies, their hiring signals, and where you stand with each team.",
  },
  {
    title: "Contacts",
    subtitle: "Never lose a connection",
    image: "/features/contacts.png",
    copy: "Keep recruiters, hiring managers, and referrals in one searchable rolodex.",
  },
  {
    title: "Job kanban",
    subtitle: "See your pipeline at a glance",
    image: "/features/job-kanban.png",
    copy: "Drag roles from saved to applied to interview. Every note and deadline travels with the card.",
  },
  {
    title: "Jobs table",
    subtitle: "Scan everything in one view",
    image: "/features/jobs-table.png",
    copy: "Sort and filter every application in a dense, keyboard-friendly table view.",
  },
  {
    title: "Job tracking",
    subtitle: "Every opportunity, one timeline",
    image: "/features/jobtracking.png",
    copy: "See where applications stall so you can fix the step that is actually costing you offers.",
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
          <h2 className="text-center text-3xl md:text-5xl leading-[1.1]! font-bold font-heading text-foreground mt-6">
            Built to hold{" "}
            <span className="bg-linear-to-r from-[#571FFF] via-indigo-600 to-purple-600 bg-clip-text text-transparent">
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
                <h3 className="text-2xl font-bold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground/70">
                  {item.subtitle}
                </p>
                <p className="mt-3 text-sm text-muted-foreground">
                  {item.copy}
                </p>
              </div>

              {/* Screenshot Placeholder */}
              <div className="relative lg:col-span-8 rounded-xl border border-border/60 bg-card p-2 shadow-sm">
                <div className="relative overflow-hidden rounded-lg bg-muted">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={1200}
                    height={675}
                    className="border-2 w-full object-cover rounded-lg"
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
