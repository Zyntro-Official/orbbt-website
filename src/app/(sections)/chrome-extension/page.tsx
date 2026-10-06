/*
  Chrome Extension
*/

// Icons
import Link from "next/link"

// UI Components
import AnimationContainer from "@/components/ui/animation-container"
import { AppBadge } from "@/components/ui/app-badge"
import { Button } from "@/components/ui/button"

// Config
import { CHROME_STORE_URL } from "@/lib/config"

// Constants — How It Works Steps
const STEPS = [
  {
    step: "1",
    title: "Open a job on LinkedIn or Indeed",
    description:
      "Browse jobs as you normally do. The extension works on job detail pages.",
  },
  {
    step: "2",
    title: "Click the Orbbt icon to save",
    description:
      "Save the job, the company or a contact. Title, company, salary and location are auto-filled.",
  },
  {
    step: "3",
    title: "Follow it from Saved to Offer",
    description:
      "Track every application on your Kanban board or table. Drag cards from Applied to Interviewing to Offer.",
  },
]

// Constants — Free Features
const FREE_FEATURES = [
  "Unlimited job tracking",
  "Kanban board and jobs table",
  "Contacts linked to specific jobs",
  "Company directory",
  "Mobile app with push deadline reminders",
  "3 AI Resume Job Matches",
]

// Constants — Pro Features
const PRO_FEATURES = [
  "30 AI Resume Job Matches every month",
  "Email deadline reminders you configure by date, time and number of reminders",
]

export default function ChromeExtensionPage() {
  // Install URL — Chrome Web Store or fallback to waitlist
  const installHref = CHROME_STORE_URL ?? "/#waitlist"
  const installLabel = CHROME_STORE_URL ? "Add to Chrome — Free" : "Join the waitlist"

  return (
    <section id="chrome-extension" className="py-20 bg-muted/40 border-y border-border/50">
      <AnimationContainer
        delay={0.1}
        className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center w-full py-8">
          {/* Eyebrow Badge */}
          <AppBadge className="mb-6">
            Chrome Extension
          </AppBadge>

          {/* Title */}
          <h2 className="text-center text-3xl md:text-5xl leading-[1.1]! font-bold font-heading text-foreground mt-6">
            Save jobs from LinkedIn & Indeed{" "}
            <span className="bg-linear-to-r from-[#571FFF] via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              in one click
            </span>
          </h2>

          {/* Intro Paragraph */}
          <p className="mt-4 text-center text-lg text-muted-foreground max-w-2xl">
            The Orbbt Chrome extension is a job application tracker that saves jobs,
            companies and contacts to your Orbbt account without copy-pasting into a
            spreadsheet. Built for students, recent graduates, career switchers and
            anyone comparing offers.
          </p>

          {/* Primary CTA */}
          <div className="mt-8">
            <Button
              size="lg"
              asChild
              className="h-12 px-8 text-base bg-[#571FFF] hover:bg-[#571FFF]/90 shadow-lg shadow-[#571FFF]/25"
            >
              {CHROME_STORE_URL ? (
                <a href={installHref} target="_blank" rel="noopener noreferrer">
                  {/* <ChromeIcon className="mr-2 h-4 w-4" /> */}
                  {installLabel}
                </a>
              ) : (
                <Link href={installHref}>
                  {/* <ChromeIcon className="mr-2 h-4 w-4" /> */}
                  {installLabel}
                </Link>
              )}
            </Button>
          </div>
        </div>
      </AnimationContainer>
    </section>
  )
}
