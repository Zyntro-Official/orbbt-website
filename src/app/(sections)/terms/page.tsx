/*
Terms and Conditions
*/

// Imports
import AnimationContainer from "@/components/ui/animation-container"
import { AppBadge } from "@/components/ui/app-badge"

export default function TermsPage() {
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
            Terms and Conditions
          </h1>
        </div>

        {/* Content */}
        <div className="space-y-6">
          <p className="text-muted-foreground leading-relaxed">
            By using orbbt., you agree to use the product responsibly and provide accurate account information.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8">
            Product scope
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            orbbt. helps organize your job hunt, but it does not guarantee interviews, offers, hiring outcomes, or employer responses.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8">
            Acceptable use
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            You may not misuse the service, attempt unauthorized access, scrape restricted systems, or upload content you do not have permission to use.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8">
            Service changes
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Features, plans, and availability may change as orbbt. evolves. We will aim to communicate meaningful changes clearly.
          </p>
        </div>
      </AnimationContainer>
    </section>
  )
}
