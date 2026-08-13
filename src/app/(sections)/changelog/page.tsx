/*
Changelog
*/

// Imports
import { Sparkles } from "lucide-react"

// Constants
const CHANGELOG_ENTRIES = [
  {
    version: "v1.0.0",
    date: "August 2026",
    changes: [
      "Initial public release of orbbt.",
      "Job application tracker with status pipeline.",
      "Company research notes and contact management.",
      "Deadline reminders and follow-up scheduling.",
      "Web, mobile app waitlist, and Chrome extension support.",
    ],
  },
]

export default function ChangelogPage() {
  return (
    <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-28">
      <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold text-primary mb-6">
            <Sparkles className="h-3.5 w-3.5" />
            <span>What&apos;s new</span>
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Changelog
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Stay up to date with every improvement to orbbt.
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-16">
          {CHANGELOG_ENTRIES.map((entry) => (
            <div key={entry.version} className="relative pl-8 border-l-2 border-border">
              {/* Dot */}
              <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-primary ring-4 ring-background" />

              {/* Version Header */}
              <div className="flex items-baseline gap-3 mb-4">
                <h2 className="text-xl font-semibold text-foreground">
                  {entry.version}
                </h2>
                <span className="text-sm text-muted-foreground">
                  {entry.date}
                </span>
              </div>

              {/* Changes */}
              <ul className="space-y-2">
                {entry.changes.map((change) => (
                  <li
                    key={change}
                    className="text-muted-foreground flex items-start gap-2"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                    {change}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
