/*
Resources
*/

// Imports
import { ArrowUpRight, BookOpen, FileText, HelpCircle } from "lucide-react"
import Link from "next/link"

// Constants
const RESOURCE_CATEGORIES = [
  {
    icon: BookOpen,
    title: "Guides",
    description: "Learn how to organize your job hunt from start to finish.",
    links: [
      { label: "Getting started with orbbt", href: "#" },
      { label: "How to research a company before applying", href: "#" },
      { label: "Building a follow-up cadence that works", href: "#" },
    ],
  },
  {
    icon: FileText,
    title: "Templates",
    description: "Ready-to-use templates for your job hunt workflow.",
    links: [
      { label: "Application tracker template", href: "#" },
      { label: "Interview preparation checklist", href: "#" },
      { label: "Networking follow-up email scripts", href: "#" },
    ],
  },
  {
    icon: HelpCircle,
    title: "Support",
    description: "Get help when you need it.",
    links: [
      { label: "FAQ", href: "#" },
      { label: "Contact support", href: "mailto:support@orbbt.co" },
      { label: "Feature requests", href: "mailto:hello@orbbt.co" },
    ],
  },
]

export default function ResourcesPage() {
  return (
    <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-28">
      {/* Ambient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#571FFF]/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Resources
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-lg mx-auto">
            Guides, templates, and support to make your job hunt feel lighter.
          </p>
        </div>

        {/* Resource Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {RESOURCE_CATEGORIES.map(({ icon: Icon, title, description, links }) => (
            <div
              key={title}
              className="rounded-2xl border border-border/50 bg-background/60 p-6 backdrop-blur-sm"
            >
              <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground mb-6">{description}</p>

              {/* Links */}
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors group"
                    >
                      {link.label}
                      <ArrowUpRight className="h-3.5 w-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
