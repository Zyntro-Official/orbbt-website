/*
Features
*/

"use client"

// Imports
import Image from "next/image"

// UI Components
import AnimationContainer from "@/components/ui/animation-container"
import { AppBadge } from "@/components/ui/app-badge"
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid"

// Data
import { FEATURES } from "./features-data"

export default function FeaturesPage() {
  return (
    <section
      id="features"
      className="py-20 bg-muted/40 border-y border-border/50"
    >
      <AnimationContainer delay={0.1} className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center w-full py-8">
          {/* Eyebrow Badge */}
          <AppBadge className="mb-4">Features</AppBadge>
          <h2 className="text-center text-3xl md:text-5xl !leading-[1.1] font-bold font-heading text-foreground mt-6">
            Your job hunt, {" "}
            <span className="bg-gradient-to-r from-[#571FFF] via-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Supercharged.
          </span>
          </h2>
          <p className="mt-4 text-center text-lg text-muted-foreground max-w-lg">
            orbbt gives you the tools to organize, research, and follow up —
            all from one calm place.
          </p>
        </div>

        {/* Bento Grid */}
        <BentoGrid className="py-8">
          {FEATURES.map((feature) => (
            <BentoCard
              key={feature.slug}
              name={feature.name}
              description={feature.description}
              href={`/features/${feature.slug}`}
              cta={feature.cta}
              className={feature.className}
              background={
                <Image
                  src={feature.imageSrc}
                  alt={feature.imageAlt}
                  width={800}
                  height={450}
                  className={feature.imageClassName}
                />
              }
            />
          ))}
        </BentoGrid>
      </AnimationContainer>
    </section>
  )
}
