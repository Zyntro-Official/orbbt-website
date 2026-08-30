/*
Privacy Policy
*/

// Imports
import AnimationContainer from "@/components/ui/animation-container"
import { AppBadge } from "@/components/ui/app-badge"
import type { Metadata } from "next"

// Metadata
export const metadata: Metadata = {
  title: "Privacy Policy — Orbbt",
  description:
    "How Orbbt collects, uses, stores, and protects your information, and the control you have over your data.",
}

export default function PrivacyPage() {
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
            Privacy Policy
          </h1>

          {/* Last Updated */}
          <p className="mt-4 text-center text-sm text-muted-foreground">
            Last Updated: August 24, 2026
          </p>
        </div>

        {/* Content */}
        <div className="space-y-6">
          <p className="text-muted-foreground leading-relaxed">
            This Privacy Policy explains how Orbbt (“Orbbt,” “we,” “us,” or “our”) collects, uses, stores, and protects your information when you use our website, web application, Chrome extension, and mobile applications (collectively, the “Services”).
          </p>
          <p className="text-muted-foreground leading-relaxed">
            By using the Services, you agree to the collection and use of information as described in this policy.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8">
            Information We Collect
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            When you sign in with Google, we receive basic profile information from your Google account, including your name, email address, and profile picture. This is used only to create and authenticate your Orbbt Account. We do not access, read, request, or store the content of your Gmail messages or any other Google data beyond this basic profile information.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            We collect and store the information you actively provide through the Services, such as job listings saved via the Chrome Extension, application statuses and notes you add, and any other content you create or upload within Orbbt.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            We may automatically collect limited technical information, such as browser type, device type, operating system, general usage patterns, and log data, to help us operate, secure, and improve the Services.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            If you subscribe to Premium, payment is handled by Paddle, our third-party payment processor. Orbbt does not directly collect or store your full card number or payment credentials.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8">
            How We Use Your Information
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            We use the information we collect to create, authenticate, and maintain your Account; sync your Job Data across the web app, Chrome extension, and mobile app; provide, operate, and improve the Services; process Premium subscriptions and payments; communicate with you about your Account, updates, or support requests; detect, prevent, and address technical issues, fraud, or misuse; and comply with legal obligations.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            We do not use your Job Data to train third-party AI models, and we do not sell your personal information.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8">
            How We Store and Protect Your Data
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Your Account and Job Data are stored securely using Supabase, our database infrastructure provider. We use industry-standard security measures, including encryption in transit and at rest, to protect your information. While we take reasonable steps to secure your data, no method of transmission or storage is 100% secure, and we cannot guarantee absolute security.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8">
            Data Sharing
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            We do not sell, rent, or trade your personal information. We may share information only with service providers who help us operate the Services, such as Supabase, Paddle, and Google — each bound by their own privacy and security obligations; legal authorities, where required by law; or a successor entity in the event of a merger, acquisition, or sale of assets.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8">
            Data Syncing Across Devices
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Because Orbbt is designed to sync your Job Data across the web app, Chrome extension, and mobile app, your data is transmitted between your devices and our servers whenever you save, update, or view a job. This sync relies on the same secure Supabase infrastructure described above.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8">
            Your Rights and Choices
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Depending on your location, you may have rights to access, correct, or delete your personal information and Job Data; export your Job Data; withdraw consent or object to certain processing; and delete your Account entirely, which will remove your Job Data from our active systems.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            To exercise any of these rights, contact us at{" "}
            <a href="mailto:support@orbbt.app" className="text-primary underline">
              support@orbbt.app
            </a>
            .
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8">
            Data Retention
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            We retain your Account and Job Data for as long as your Account is active, or as needed to provide the Services. If you delete your Account, we will delete or anonymize your personal data within a reasonable period, except where retention is required for legal or legitimate business purposes.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8">
            Children’s Privacy
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            The Services are not directed to individuals under the age of 16, and we do not knowingly collect personal information from children. If we become aware that we have inadvertently collected such information, we will take steps to delete it.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8">
            International Data Transfers
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Your information may be stored and processed in countries other than your own through our infrastructure providers. Where required, we take steps to ensure appropriate safeguards are in place for such transfers.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8">
            Changes to This Policy
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            We may update this Privacy Policy from time to time. We will revise the “Last Updated” date above and, for material changes, notify you through the Services or by email. Continued use of the Services after changes take effect constitutes acceptance of the revised Policy.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8">
            Contact Us
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            If you have questions about this Privacy Policy or how we handle your data, contact us at{" "}
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
