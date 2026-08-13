/*
Product Showcase
*/

"use client"

// UI Components
import AnimationContainer from "@/components/ui/animation-container"
import { AppBadge } from "@/components/ui/app-badge"
import { MacbookScroll } from "@/components/ui/macbook-scroll"

export default function ProductShowcasePage() {
  return (
    <section id="showcase" className="relative py-20 overflow-hidden border-y border-border/50">
      <AnimationContainer delay={0.1} className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center w-full pb-8">
          {/* Eyebrow Badge */}
          <AppBadge className="mb-6">
            Product Showcase
          </AppBadge>

          {/* Title */}
          <h2 className="text-center text-3xl md:text-5xl !leading-[1.1] font-bold font-heading text-foreground mt-6">
            See orbbt.{" "}
            <span className="bg-gradient-to-r from-[#571FFF] via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              in action
            </span>
          </h2>

          {/* Subtitle */}
          <p className="mt-4 text-center text-lg text-muted-foreground max-w-lg">
            A calm, focused dashboard that keeps your entire job hunt organized — from first application to final offer.
          </p>
        </div>
      </AnimationContainer>

      {/* Macbook Scroll */}
      <MacbookScroll
        src="/image.png"
        showGradient={false}
        title="Web App"
      />
    </section>
  )
}
