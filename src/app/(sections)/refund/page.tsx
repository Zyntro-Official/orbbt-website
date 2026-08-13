/*
Refund Policy
*/

// Imports
import AnimationContainer from "@/components/ui/animation-container"
import { AppBadge } from "@/components/ui/app-badge"

export default function RefundPage() {
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
            Refund Policy
          </h1>
        </div>

        {/* Content */}
        <div className="space-y-6">
          <p className="text-muted-foreground leading-relaxed">
            If orbbt. introduces paid plans, refund eligibility will depend on the plan, billing period, and usage.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8">
            Billing issues
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            For billing issues, contact{" "}
            <a href="mailto:support@orbbt.co" className="text-primary underline">
              support@orbbt.co
            </a>{" "}
            within 14 days of the charge.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8">
            Free trial
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            The free plan or trial access can be used before upgrading, so users can evaluate whether orbbt. fits their job hunt.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8">
            Exceptions
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Refunds may not apply to abuse, policy violations, or completed custom campus or team services.
          </p>
        </div>
      </AnimationContainer>
    </section>
  )
}
