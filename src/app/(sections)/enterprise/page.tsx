/*
Enterprise
*/

// Imports
import { ArrowRight, Building2, Check, Shield, Users } from "lucide-react"
import Link from "next/link"

// UI Components
import { Button } from "@/components/ui/button"

// Constants
const ENTERPRISE_FEATURES = [
  {
    icon: Shield,
    title: "SSO & SAML",
    description: "Secure access with Okta, Azure AD, and more.",
  },
  {
    icon: Users,
    title: "Team Workspaces",
    description: "Shared views for campus career centers and recruiting teams.",
  },
  {
    icon: Building2,
    title: "Dedicated Support",
    description: "Priority onboarding, training sessions, and a named account manager.",
  },
]

export default function EnterprisePage() {
  return (
    <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-28">
      {/* Ambient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#571FFF]/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold text-primary mb-6">
            <Building2 className="h-3.5 w-3.5" />
            <span>For teams &amp; campuses</span>
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            orbbt. for{" "}
            <span className="bg-gradient-to-r from-[#571FFF] via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Enterprise
            </span>
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Equip your career center, recruiting agency, or outplacement team with a centralized job-hunt platform.
          </p>
          <div className="mt-8">
            <Button size="lg" asChild className="bg-[#571FFF] hover:bg-[#571FFF]/90">
              <Link href="mailto:hello@orbbt.co">
                Contact sales <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {ENTERPRISE_FEATURES.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="rounded-2xl border border-border/50 bg-background/60 p-6 backdrop-blur-sm"
            >
              <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground">{description}</p>
            </div>
          ))}
        </div>

        {/* Benefit Row */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-medium text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <Check className="h-3.5 w-3.5 text-[#571FFF]" /> Custom pricing
          </span>
          <span className="hidden sm:inline text-border">•</span>
          <span className="flex items-center gap-1.5">
            <Check className="h-3.5 w-3.5 text-[#571FFF]" /> Volume discounts
          </span>
          <span className="hidden sm:inline text-border">•</span>
          <span className="flex items-center gap-1.5">
            <Check className="h-3.5 w-3.5 text-[#571FFF]" /> SLA guarantees
          </span>
        </div>
      </div>
    </section>
  )
}
