/*
Terms and Conditions
*/

// Imports
import AnimationContainer from "@/components/ui/animation-container"
import { AppBadge } from "@/components/ui/app-badge"
import type { Metadata } from "next"
import Link from "next/link"

// Metadata
export const metadata: Metadata = {
  title: "Terms and Conditions — Orbbt",
  description:
    "The terms governing your use of Orbbt, including accounts, billing, your data, and acceptable use.",
}

export default function TermsPage() {
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
            Terms and Conditions
          </h1>

          {/* Last Updated */}
          <p className="mt-4 text-center text-sm text-muted-foreground">
            Last Updated: September 24, 2026
          </p>
        </div>

        {/* Content */}
        <div className="space-y-6">
          <p className="text-muted-foreground leading-relaxed">
            Welcome to Orbbt by Zyntro (“Orbbt,” “we,” “us,” or “our”). These Terms and Conditions (“Terms”) govern your access to and use of Orbbt’s website, web application, Chrome extension, mobile applications, and related services (collectively, the “Services”).
          </p>
          <p className="text-muted-foreground leading-relaxed">
            By creating an account or otherwise accessing or using our Services, you agree to be bound by these Terms. If you do not agree to these Terms, you may not access or use our Services.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8">
            Description of Services
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Orbbt is a job-search productivity platform for saving, organizing,
            and tracking opportunities through a web application, browser
            extension, and supported mobile applications. Account data can
            synchronize across the products you use. Features and availability
            may vary by platform and plan.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8">
            User Accounts
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            You can create an account with email and password or an available
            third-party sign-in option such as Google. If you choose Google,
            we receive basic profile information to create and authenticate
            your account. We do not access your Gmail messages.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            You are responsible for protecting your account credentials and for activity under your Orbbt account. Notify us immediately at{" "}
            <a href="mailto:support@orbbt.app" className="text-primary underline">
              support@orbbt.app
            </a>{" "}
            if you suspect unauthorized use of your Account.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8">
            Payments and Billing
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            If you subscribe to Orbbt Pro, the monthly or annual price and
            billing interval shown at checkout apply. Lemon Squeezy is the
            merchant of record and handles payment, tax, and billing. A
            subscription renews automatically unless canceled before its next
            renewal date. Orbbt does not store your full payment card number.
            You can manage or cancel your subscription through Settings →
            Billing and the Lemon Squeezy customer portal.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Refunds are handled as described in our separate{" "}
            <Link href="/refund" className="text-primary underline">
              Refund Policy
            </Link>
            .
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8">
            Your Data
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Job Data you create in Orbbt (saved jobs, statuses, notes, and similar content) belongs to you. You grant us a limited license to host, store, synchronize, and process this data to deliver the features you request and keep the Services secure, as described in our{" "}
            <Link href="/privacy" className="text-primary underline">
              Privacy Policy
            </Link>
            . You are responsible for the accuracy and legality of any Job Data you submit.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8">
            Intellectual Property
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            The Orbbt name, logo, software, design, and user interface are owned by Zyntro or its licensors and protected by applicable intellectual property laws. Your use of the Services does not transfer ownership of them to you.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8">
            Acceptable Use
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            You agree not to attempt unauthorized access to Orbbt’s systems or other users’ Accounts, interfere with or disrupt the Services, upload malicious code or harmful software, scrape or misuse other users’ information, or circumvent free-tier or Premium usage limits. We may suspend or terminate accounts that violate this section.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8">
            Third-Party Services
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            The Services use third-party providers, including Google for
            optional sign-in, Supabase for authentication and data storage,
            and Lemon Squeezy for paid subscriptions. Third-party websites
            and services may have separate terms and privacy practices.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8">
            AI Features
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Resume match scores and recommendations are generated automatically
            for informational use. They can contain mistakes or omissions and
            do not guarantee an interview, offer, or employment decision. You
            should review them before relying on them.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8">
            Disclaimers and Limitation of Liability
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            The Services are provided “as is” and “as available,” without warranties of any kind, express or implied. We do not warrant that the Services will be uninterrupted or error-free, or that job listings, statuses, or synced data will always be accurate or complete. To the fullest extent permitted by law, Orbbt shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or for any loss of profits, data, goodwill, or job opportunities.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8">
            Termination
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            We may restrict access where reasonably necessary to address
            security threats, unlawful use, or violations of these Terms. For
            other terminations, we will give notice where reasonably possible.
            You may delete your account in Profile settings on the web or in
            the Profile tab on mobile. Stopping use alone does not delete
            your account. Before account deletion, cancel any paid
            subscription through Settings → Billing; account deletion does
            not itself request cancellation from Lemon Squeezy. Refunds and
            mandatory consumer rights remain governed by the Refund Policy.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8">
            Changes to These Terms
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            We may update these Terms from time to time. When we do, we will revise the “Last Updated” date above and, for material changes, notify you through the Services or by email. Continued use of the Services after changes take effect constitutes acceptance of the revised Terms.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8">
            Governing Law
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            These Terms are governed by the laws of Pakistan, except where
            mandatory consumer protection laws in your place of residence
            apply.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8">
            Contact Us
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            If you have questions about these Terms, please contact us at{" "}
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
