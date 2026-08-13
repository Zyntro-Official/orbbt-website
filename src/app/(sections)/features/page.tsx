/*
Features
*/

"use client"

// Imports
import {
    BarChart3,
    Building2,
    CalendarCheck,
    Users,
} from "lucide-react"
import Image from "next/image"

// UI Components
import AnimationContainer from "@/components/ui/animation-container"
import { AppBadge } from "@/components/ui/app-badge"
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid"

// Constants — Bento Card Data
const FEATURES = [
  {
    Icon: BarChart3,
    name: "Track every role",
    description:
      "See your entire pipeline at a glance — applied, interviewing, offer, and everything in between.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
    background: (
      <Image
        src="/image.png"
        alt="App screenshot"
        width={800}
        height={450}
        className="absolute top-0 right-0 w-3/4 h-1/2 object-cover object-left-top rounded-bl-xl transition-all duration-300 ease-out group-hover:scale-105 [mask-image:linear-gradient(to_bottom,#000_60%,transparent_100%)]"
      />
    ),
  },
  {
    Icon: Building2,
    name: "Research companies",
    description:
      "AI-powered company insights — culture, news, funding, and key people — before you hit apply.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: (
      <Image
        src="/image.png"
        alt="App screenshot"
        width={800}
        height={450}
        className="absolute top-0 right-0 w-3/4 h-1/2 object-cover object-right-top rounded-bl-xl transition-all duration-300 ease-out group-hover:scale-105 [mask-image:linear-gradient(to_bottom,#000_60%,transparent_100%)]"
      />
    ),
  },
  {
    Icon: CalendarCheck,
    name: "Never miss a deadline",
    description:
      "Set follow-up reminders and get notified before opportunities slip away.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: (
      <Image
        src="/image.png"
        alt="App screenshot"
        width={800}
        height={450}
        className="absolute top-0 right-0 w-3/4 h-1/2 object-cover object-center rounded-bl-xl transition-all duration-300 ease-out group-hover:scale-105 [mask-image:linear-gradient(to_bottom,#000_60%,transparent_100%)]"
      />
    ),
  },
  {
    Icon: Users,
    name: "Manage contacts",
    description:
      "Keep recruiters, hiring managers, and referrals organized in one place.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
    background: (
      <Image
        src="/image.png"
        alt="App screenshot"
        width={800}
        height={450}
        className="absolute top-0 right-0 w-3/4 h-1/2 object-cover object-right-bottom rounded-bl-xl transition-all duration-300 ease-out group-hover:scale-105 [mask-image:linear-gradient(to_bottom,#000_60%,transparent_100%)]"
      />
    ),
  },
]

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
            orbbt. gives you the tools to organize, research, and follow up —
            all from one calm place.
          </p>
        </div>

        {/* Bento Grid */}
        <BentoGrid className="py-8">
          {FEATURES.map((feature, idx) => (
            <BentoCard key={idx} {...feature} />
          ))}
        </BentoGrid>
      </AnimationContainer>
    </section>
  )
}
