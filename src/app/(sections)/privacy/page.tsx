/*
Privacy Policy
*/

// Imports
import AnimationContainer from "@/components/ui/animation-container"
import { AppBadge } from "@/components/ui/app-badge"

export default function PrivacyPage() {
  return (
    <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-28">
      <AnimationContainer
        delay={0.1}
        className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8"
      >
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center w-full pb-12">
          {/* Eyebrow Badge */}
          <AppBadge className="mb-6">Policy</AppBadge>

          {/* Title */}
          <h1 className="text-center text-3xl md:text-5xl !leading-[1.1] font-bold font-heading text-foreground">
            Privacy Policy
          </h1>
        </div>

        {/* Content */}
        <div className="space-y-6">
          <p className="text-muted-foreground leading-relaxed">
            orbbt. uses information you provide, including account details, job entries, contacts, notes, and messages sent through forms, to operate and improve the product.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8">
            How we use data
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            We use your data for job tracking, company research, reminders, account access, support, analytics, and security.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8">
            What we do not do
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            We do not sell your personal job hunt data.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8">
            Your control
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            You may request account deletion, data correction, or support by contacting{" "}
            <a href="mailto:support@orbbt.co" className="text-primary underline">
              support@orbbt.co
            </a>
            .
          </p>
        </div>
      </AnimationContainer>
    </section>
  )
}
