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
            Last Updated: September 24, 2026
          </p>
        </div>

        {/* Content */}
        <div className="space-y-6">
          <p className="text-muted-foreground leading-relaxed">
            This Refund Policy applies to Orbbt Pro subscriptions purchased
            through Lemon Squeezy. It should be read together with our{" "}
            <Link href="/terms" className="text-primary underline">
              Terms and Conditions
            </Link>
            .
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8">
            General Policy
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Orbbt Pro is billed monthly or annually through Lemon Squeezy,
            the merchant of record. Refunds are available under the policy
            below and where required by applicable law.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8">
            7-Day Window
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            You may request a refund within seven calendar days of an
            initial purchase or renewal charge. We review requests
            individually, considering the reason for the request, usage of
            the paid features, and any technical problems. A request within
            seven days is not an automatic refund guarantee. This does not
            limit any refund or withdrawal rights required by law.
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
            Approved refunds are issued to the original payment method by
            Lemon Squeezy. Your bank or payment method determines when the
            credit appears; it may take up to ten business days. Pro access
            associated with a refunded charge may end when the refund is
            processed.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8">
            Cancellations
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            You may cancel a Pro subscription through Settings → Billing in
            the web app, which opens the Lemon Squeezy customer portal.
            Cancellation stops future renewal charges. Unless the charge is
            refunded, Pro access remains available through the end of the
            paid billing period. Deleting your Orbbt account does not itself
            cancel billing, so cancel your subscription before deletion.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8">
            Non-Refundable Situations
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            After the seven-day window, partial-period cancellations do not
            ordinarily qualify for a refund. We will review duplicate or
            unauthorized charges, service failures, and other exceptional
            circumstances individually. This policy does not limit statutory
            rights, including any applicable right of withdrawal.
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
