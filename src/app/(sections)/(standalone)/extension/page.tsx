/*
Extension Page
*/

// Imports
import type { Metadata } from "next"

// Extension Components
import {
  ExtensionCta,
  ExtensionFaq,
  ExtensionFeatures,
  ExtensionHero,
  ExtensionHowItWorks,
} from "./components"

// Metadata
export const metadata: Metadata = {
  title: "Orbbt Chrome Extension — 1-Click Job Application Tracker",
  description:
    "Save jobs from LinkedIn & Indeed straight into your organized pipeline without spreadsheets. Free for Chrome and Chromium browsers.",
  alternates: { canonical: "/extension" },
}

export default function ExtensionLandingPage() {
  return (
    <div className="relative overflow-hidden">
      <ExtensionHero />
      <ExtensionHowItWorks />
      <ExtensionFeatures />
      <ExtensionFaq />
      <ExtensionCta />
    </div>
  )
}
