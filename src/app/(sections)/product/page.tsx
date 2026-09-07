/*
Product(Replaced with Feature)
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
    subtitle: "Every company, one place",
    image: "/features/companies.png",
    copy: "Link every job to the company behind it and keep a running list of who you've applied to, saved, or reached out to. No more losing track of which companies you're actually in the running with.",
  },
  {
    title: "Contacts",
    subtitle: "Never lose a recruiter's contact again",
    image: "/features/contacts.png",
    copy: "Keep every recruiter, hiring manager, and referral in one searchable contact list, linked to the companies and roles they matter for. Turn cold applications into warm introductions with a job search CRM built for networking.",
  },
  {
    title: "Job Kanban",
    subtitle: "Visualize your job search pipeline",
    image: "/features/job-kanban.png",
    copy: "Drag applications from Saved to Applied to Interviewing to Offer on a kanban board built for job hunting. Every note and deadline travels with the card, so your pipeline never gets buried in a spreadsheet.",
  },
  {
    title: "Jobs Table",
    subtitle: "Built for a hundred applications, not ten",
    image: "/features/jobs-table.png",
    copy: "Sort, filter, and search every job application in a dense, keyboard-friendly table. Compare company, role, status, salary, and location side by side, the way a spreadsheet works, minus the spreadsheet.",
  },
  {
    title: "Job Tracking",
    subtitle: "Know what needs your attention today",
    image: "/features/jobtracking.png",
    copy: "Every application shows its status and its deadline in one place. Get an email and push notification before a deadline hits, so nothing expires while you're not looking. Sort by date to see what's due next and what needs a follow-up.",
  },
]

export default function ProductPage() {
  return (
    <section id="product" className="py-20 bg-muted/40 border-y border-border/50">
      <AnimationContainer delay={0.1} className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center w-full py-8">
          {/* Eyebrow Badge */}
          <AppBadge className="mb-6">Product Features</AppBadge>

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
