/*
  Extension How It Works Section
*/

// Imports
import { Bookmark, Download, Rocket } from "lucide-react"

// UI Components
import AnimationContainer from "@/components/ui/animation-container"

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

export default function ExtensionHowItWorks() {
  return (
    <section id="how-it-works" className="py-20 lg:py-28 border-t border-border/50 bg-muted/20">
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
  )
}

