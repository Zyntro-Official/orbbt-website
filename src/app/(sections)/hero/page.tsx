/*
Hero
*/

"use client"

// Imports
import { ArrowRight, Bell, Briefcase, Building2, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// UI Components
import AnimationContainer from "@/components/ui/animation-container"
import { BorderBeam } from "@/components/ui/border-beam"
import { Button } from "@/components/ui/button"

export default function HeroPage() {
  return (
    <section className="relative overflow-hidden pt-16 pb-20 lg:pt-20 lg:pb-28">
      {/* Ambient Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-112.5 bg-[#571FFF]/15 blur-[150px] rounded-full pointer-events-none -z-10" />

      <AnimationContainer delay={0.1} className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">

        {/* Eyebrow Badge */}
        {/* <AppBadge icon={<Sparkles className="h-3.5 w-3.5" />} className="mb-8">
          Job application tracker &amp; job hunt organizer
        </AppBadge> */}

        {/* Main Headline */}
        <h1 className="mx-auto max-w-4xl text-4xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
          Your job hunt,
          <br />
          <span className="bg-linear-to-r from-[#571FFF] via-indigo-600 to-purple-600 bg-clip-text text-transparent">
            organized.
          </span>
        </h1>

        {/* Lead Subtitle */}
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl leading-relaxed">
          Track applications, research companies, remember deadlines, and follow up from one calm place.
        </p>

        {/* Core Product Benefits Row */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-medium text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <Briefcase className="h-3.5 w-3.5 text-[#571FFF]" /> Application tracker
          </span>
          <span className="hidden sm:inline text-border">•</span>
          <span className="flex items-center gap-1.5">
            <Building2 className="h-3.5 w-3.5 text-[#571FFF]" /> Company Management
          </span>
          <span className="hidden sm:inline text-border">•</span>
          <span className="flex items-center gap-1.5">
            <Bell className="h-3.5 w-3.5 text-[#571FFF]" /> Deadline reminders
          </span>
          <span className="hidden sm:inline text-border">•</span>
          <span className="flex items-center gap-1.5">
            <Users className="h-3.5 w-3.5 text-[#571FFF]" /> Contact management
          </span>
        </div>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            asChild
            className="w-full sm:w-auto h-12 px-8 text-base bg-[#571FFF] hover:bg-[#571FFF]/90 shadow-lg shadow-[#571FFF]/25"
          >
            <a href="https://web.orbbt.app" target="_blank">
              Try free on web <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button
            variant="outline"
            size="lg"
            asChild
            className="w-full sm:w-auto h-12 px-8 text-base"
          >
            <Link href="#waitlist">
              Join mobile app waitlist
            </Link>
          </Button>
        </div>

        {/* Product Note */}
        <p className="mt-4 text-xs text-gray-800">
          Built by Zyntro for students, graduates, active job seekers, and career switchers.
        </p>

        {/* Large Product Screenshot */}
        <div className="relative pt-14 pb-16 md:py-20 px-2 bg-transparent w-full">
          {/* Ambient Glow behind image */}
          <div className="absolute md:top-[10%] left-1/2 w-3/4 -translate-x-1/2 h-1/4 md:h-1/3 inset-0 blur-[5rem] bg-linear-to-r from-[#571FFF]/40 via-indigo-500/25 to-[#571FFF]/40" />

          {/* Screenshot Container */}
          <div className="relative -m-2 rounded-xl p-2 ring-1 ring-inset ring-foreground/20 lg:-m-4 lg:rounded-2xl bg-opacity-50 backdrop-blur-3xl">
            {/* Animated Border Beam */}
            <BorderBeam
              size={250}
              duration={12}
              delay={9}
              colorFrom="#571FFF"
              colorTo="#9c40ff"
              borderWidth={4}
            />
            <Image
              src="/image.svg"
              alt="orbbt job application tracker dashboard preview"
              width={1600}
              height={847}
              priority
              className="rounded-md lg:rounded-xl bg-foreground/10 ring-1 ring-border w-full h-auto"
            />

            {/* Bottom Gradient Fades */}
            <div className="absolute -bottom-4 inset-x-0 w-full h-1/2 bg-linear-to-t from-background z-40" />
            <div className="absolute bottom-0 md:-bottom-8 inset-x-0 w-full h-1/4 bg-linear-to-t from-background z-50" />
          </div>
        </div>

      </AnimationContainer>
    </section>
  )
}
