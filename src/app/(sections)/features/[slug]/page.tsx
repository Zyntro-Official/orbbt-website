/*
Feature Detail
*/

// Imports
import type { Metadata } from "next"
import Image from "next/image"
import { notFound } from "next/navigation"

// Data
import AnimationContainer from "@/components/ui/animation-container"
import { FEATURES } from "../features-data"

// Metadata
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const feature = FEATURES.find((f) => f.slug === slug)

  if (!feature) {
    return { title: "Not Found — Orbbt" }
  }

  return {
    title: `${feature.name} — Orbbt`,
    description: feature.description,
  }
}

export default async function FeatureDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const feature = FEATURES.find((f) => f.slug === slug)

  // Guard — Unknown slugs
  if (!feature) {
    notFound()
  }

  return (
    <section className="relative pt-24 pb-20 lg:pb-28">
      <AnimationContainer className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center justify-center w-full pb-12 text-center">
          <h1 className="text-3xl md:text-5xl leading-[1.1] font-bold font-heading text-foreground">
            {feature.name}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            {feature.description}
          </p>
        </div>

        {/* Screenshot */}
        <div className="overflow-hidden rounded-xl border border-border/50 bg-muted/40">
          <Image
            src={feature.imageSrc}
            alt={feature.imageAlt}
            width={1200}
            height={675}
            className="h-auto w-full object-cover"
          />
        </div>
      </AnimationContainer>
    </section>
  )
}
