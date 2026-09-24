/*
Account Deletion
*/

// Imports
import AnimationContainer from "@/components/ui/animation-container"
import { AppBadge } from "@/components/ui/app-badge"
import type { Metadata } from "next"
import Link from "next/link"

// Metadata
export const metadata: Metadata = {
  title: "Delete Your Account — Orbbt",
  description: "How to delete your Orbbt account and request removal of associated data.",
}

export default function DeleteAccountPage() {
  return (
    <section className="relative pt-24 pb-20 lg:pb-28">
      <AnimationContainer
        delay={0.1}
        className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8"
      >
        {/* Header */}
        <div className="flex flex-col items-center justify-center w-full pb-12">
          <AppBadge className="mb-6">Account</AppBadge>
          <h1 className="text-center text-3xl md:text-5xl !leading-[1.1] font-bold font-heading text-foreground">
            Delete your Orbbt account
          </h1>
        </div>

        {/* Instructions */}
        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <p>
            To delete your account on the web, sign in to{" "}
            <a href="https://web.orbbt.app/profile" className="text-primary underline">
              your Orbbt profile
            </a>
            , select Delete account, and confirm the request. In the mobile app,
            open the Profile tab and select Delete account.
          </p>
          <p>
            Deleting your account removes access and associated job-search data
            from Orbbt&apos;s active systems, subject to the limited retention
            described in our{" "}
            <Link href="/privacy" className="text-primary underline">
              Privacy Policy
            </Link>
            . It cannot be undone.
          </p>
          <p>
            If you have a paid subscription, first cancel it through Settings →
            Billing in the web app. Account deletion does not itself cancel
            recurring charges from Lemon Squeezy.
          </p>
          <p>
            If you cannot access your account or need assistance, email{" "}
            <a href="mailto:support@orbbt.app?subject=Orbbt%20account%20deletion" className="text-primary underline">
              support@orbbt.app
            </a>{" "}
            from the address linked to your Orbbt account.
          </p>
        </div>
      </AnimationContainer>
    </section>
  )
}
