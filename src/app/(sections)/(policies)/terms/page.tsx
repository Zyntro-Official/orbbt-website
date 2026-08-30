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
            Last Updated: August 24, 2026
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
            Orbbt is a job-search productivity platform that helps you save, organize, and track job opportunities and application statuses across three connected surfaces: a web application, a Chrome extension, and a mobile application. All three are linked to a single Account, and your Job Data is synced across them in near real time.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8">
            User Accounts
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Orbbt accounts are created and accessed using Google Sign-In. By signing in, you authorize us to access your basic Google profile information (such as name, email, and profile picture) solely to create and authenticate your Account. Orbbt does not access, read, or store the content of your Gmail messages.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            You are responsible for maintaining the security of the Google account used to sign in to Orbbt and for all activity that occurs under your Orbbt Account. Notify us immediately at{" "}
            <a href="mailto:support@orbbt.app" className="text-primary underline">
              support@orbbt.app
            </a>{" "}
            if you suspect unauthorized use of your Account.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8">
            Payments and Billing
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Premium subscriptions are billed on a recurring basis (monthly or annually) and are processed securely through Paddle, our third-party payment processor; Orbbt does not directly store your full payment card details. Subscriptions automatically renew unless canceled before the next renewal date.
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
            Job Data you create in Orbbt (saved jobs, statuses, notes, and similar content) belongs to you. You grant Orbbt a limited license to host, store, sync, and process this data solely to operate and improve the Services, as described in our{" "}
            <Link href="/privacy" className="text-primary underline">
              Privacy Policy
            </Link>
            . You are responsible for the accuracy and legality of any Job Data you submit.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8">
            Intellectual Property
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            All content, features, and functionality of the Services — including the Orbbt name, logo, software, design, and user interface — are the exclusive property of Orbbt and are protected by applicable copyright, trademark, and other intellectual property laws.
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
            The Services rely on certain third-party providers, including but not limited to Google (for sign-in), Supabase (for data storage), and Paddle (for payment processing). Your use of these integrations is also subject to the respective third party’s own terms and privacy practices.
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
            We may suspend or terminate your access to the Services at any time, with or without cause or notice, including for violation of these Terms. You may terminate your Account at any time by discontinuing use of the Services and, if applicable, canceling your Premium subscription.
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
            These Terms are governed by the laws of the jurisdiction in which Orbbt operates, without regard to conflict-of-law principles, except where local consumer protection law requires otherwise.
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
