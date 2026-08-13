/*
Problem
*/

"use client"

// Imports
import {
    Bookmark,
    FileSpreadsheet,
    FileText,
    FolderOpen,
    Globe,
    Table2,
} from "lucide-react"
import Image from "next/image"

// UI Components
import AnimationContainer from "@/components/ui/animation-container"
import { AppBadge } from "@/components/ui/app-badge"
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid"

// Constants — Pain Points
const PAIN_POINTS = [
  {
    Icon: FileSpreadsheet,
    name: "Excel",
    description:
      "A tracker you update once a week and forget to reopen.",
    href: "#",
    cta: "",
    className: "col-span-3 lg:col-span-1",
    background: (
      <Image
        src="/image.png"
        alt=""
        width={400}
        height={300}
        className="absolute -top-10 -right-10 w-40 h-28 object-cover rounded-lg opacity-40 transition-all duration-300 group-hover:opacity-60 group-hover:scale-105"
      />
    ),
  },
  {
    Icon: FileText,
    name: "Notion",
    description:
      "Notes scattered across pages you can never find again.",
    href: "#",
    cta: "",
    className: "col-span-3 lg:col-span-1",
    background: (
      <Image
        src="/image.png"
        alt=""
        width={400}
        height={300}
        className="absolute -top-10 -right-10 w-40 h-28 object-cover rounded-lg opacity-40 transition-all duration-300 group-hover:opacity-60 group-hover:scale-105"
      />
    ),
  },
  {
    Icon: Bookmark,
    name: "Bookmarks",
    description:
      "Links to postings that expired three weeks ago.",
    href: "#",
    cta: "",
    className: "col-span-3 lg:col-span-1",
    background: (
      <Image
        src="/image.png"
        alt=""
        width={400}
        height={300}
        className="absolute -top-10 -right-10 w-40 h-28 object-cover rounded-lg opacity-40 transition-all duration-300 group-hover:opacity-60 group-hover:scale-105"
      />
    ),
  },
  {
    Icon: Globe,
    name: "LinkedIn Saved",
    description:
      "Dozens of saved jobs you never revisit.",
    href: "#",
    cta: "",
    className: "col-span-3 lg:col-span-1",
    background: (
      <Image
        src="/image.png"
        alt=""
        width={400}
        height={300}
        className="absolute -top-10 -right-10 w-40 h-28 object-cover rounded-lg opacity-40 transition-all duration-300 group-hover:opacity-60 group-hover:scale-105"
      />
    ),
  },
  {
    Icon: FolderOpen,
    name: "Resume folders",
    description:
      "resume_final_v7_REAL_v2.pdf and nineteen others.",
    href: "#",
    cta: "",
    className: "col-span-3 lg:col-span-1",
    background: (
      <Image
        src="/image.png"
        alt=""
        width={400}
        height={300}
        className="absolute -top-10 -right-10 w-40 h-28 object-cover rounded-lg opacity-40 transition-all duration-300 group-hover:opacity-60 group-hover:scale-105"
      />
    ),
  },
  {
    Icon: Table2,
    name: "Indeed",
    description:
      "Another tab. Another login. Another forgotten password.",
    href: "#",
    cta: "",
    className: "col-span-3 lg:col-span-1",
    background: (
      <Image
        src="/image.png"
        alt=""
        width={400}
        height={300}
        className="absolute -top-10 -right-10 w-40 h-28 object-cover rounded-lg opacity-40 transition-all duration-300 group-hover:opacity-60 group-hover:scale-105"
      />
    ),
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
          <h2 className="text-center text-3xl md:text-5xl !leading-[1.1] font-bold font-heading text-foreground mt-6">
            Your job search is spread{" "}
            <span className="bg-gradient-to-r from-[#571FFF] via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              across six different tools
            </span>
          </h2>

          {/* Subtitle */}
          <p className="mt-4 text-center text-lg text-muted-foreground max-w-lg">
            Every application leaves a trail somewhere else. After fifty of them, nobody can tell what you applied to.
          </p>
        </div>

        {/* Pain Points Bento Grid */}
        <BentoGrid className="py-8">
          {PAIN_POINTS.map((point, idx) => (
            <BentoCard key={idx} {...point} />
          ))}
        </BentoGrid>

        {/* Solution Card — Full Width */}
        <div className="mt-8 rounded-2xl border border-primary/20 bg-card p-8 sm:p-10 shadow-sm text-center">
          <p className="text-2xl sm:text-3xl font-bold text-foreground">
            Everything belongs in one workspace.
          </p>
          <p className="mt-3 text-lg text-muted-foreground">
            Meet{" "}
            <span className="font-extrabold text-[#571FFF]">orbbt.</span>
          </p>
        </div>
      </AnimationContainer>
    </section>
  )
}
