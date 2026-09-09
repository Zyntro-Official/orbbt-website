/*
Refund Policy
*/

// Imports
import AnimationContainer from "@/components/ui/animation-container"
import { AppBadge } from "@/components/ui/app-badge"
import type { Metadata } from "next"
import Link from "next/link"

// Metadata
export const metadata: Metadata = {
  title: "Refund Policy — Orbbt",
  description:
    "How refunds work for Orbbt Pro subscriptions, including the 7-day window, cancellations, and exceptions.",
}

export default function RefundPage() {
  return (
    <section className="relative pt-24 pb-20 lg:pb-28">
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

          {/* Last Updated */}
          <p className="mt-4 text-center text-sm text-muted-foreground">
            Last Updated: August 24, 2026
          </p>
        </div>

        {/* Content */}
        <div className="space-y-6">
          <p className="text-muted-foreground leading-relaxed">
            This Refund Policy applies to Premium subscriptions purchased through Orbbt (“Orbbt,” “we,” “us,” or “our”). It should be read together with our{" "}
            <Link href="/terms" className="text-primary underline">
              Terms and Conditions
            </Link>
            .
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8">
            General Policy
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Premium subscriptions are billed on a recurring basis (monthly or annually) through our payment processor, Paddle. Subscription fees are generally non-refundable, except as described below or where required by applicable law.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8">
            7-Day Window
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            If you are unsatisfied with Premium, or experience technical issues that prevent you from using core features, you may request a refund within 7 days of your initial purchase or of a renewal charge. We review such requests on a case-by-case basis.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            To request a refund, email{" "}
            <a href="mailto:support@orbbt.app" className="text-primary underline">
              support@orbbt.app
            </a>{" "}
            with the email address associated with your Orbbt Account, the approximate date of purchase or renewal, and a brief description of the reason for your request.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8">
            How Refunds Are Processed
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Approved refunds are issued to the original payment method via Paddle. Processing times may vary depending on your bank or card provider, but typically take 5–10 business days to appear once approved.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8">
            Cancellations
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            You may cancel your Premium subscription at any time from your Account settings. Cancellation stops future billing but does not automatically trigger a refund for the current billing period — you will retain Premium access until the end of the period you’ve already paid for, unless you separately qualify for a refund under the 7-Day Window section.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8">
            Non-Refundable Situations
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Refunds are generally not available for requests made more than 7 days after the relevant charge; partial-period cancellations after the 7-day window; accounts terminated for violation of our Terms and Conditions; or charges where the Services were used substantially throughout the billing period, absent a genuine technical issue.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8">
            Changes to This Policy
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            We may update this Refund Policy from time to time. We will revise the “Last Updated” date above and, for material changes, notify users through the Services or by email.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8">
            Contact Us
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            For refund requests or questions about this policy, contact us at{" "}
            <a href="mailto:support@orbbt.app" className="text-primary underline">
              support@orbbt.app
            </a>
            .
          </p>
        </div>
      </AnimationContainer>
    </section>
  )
}
