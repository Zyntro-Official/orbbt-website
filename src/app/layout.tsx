/*
Root Layout
*/

// Imports
import { TooltipProvider } from "@/components/ui/tooltip"
import WebsiteAnalyticsBridge from "@/lib/analytics/WebsiteAnalyticsBridge"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

// Fonts Configuration
const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
})

// Metadata
export const metadata: Metadata = {
  metadataBase: new URL("https://orbbt.app"),
  title: {
    default: "Orbbt: Job Application Tracker for Students & Job Seekers",
    template: "%s | Orbbt",
  },
  description:
    "Track job applications on a Kanban board or table, manage companies and contacts, and get deadline reminders. Free Chrome extension for LinkedIn & Indeed.",
  applicationName: "Orbbt",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "https://orbbt.app",
    siteName: "Orbbt",
    title: "Orbbt: Job Application Tracker for Students & Job Seekers",
    description:
      "Save jobs from LinkedIn & Indeed in one click. Track applications on a Kanban board or table, with deadline reminders.",
    images: [
      {
        url: "/image.svg",
        width: 1662,
        height: 865,
        alt: "Orbbt job application tracker",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Orbbt: Job Application Tracker",
    description:
      "Your job hunt, organized. Kanban board, table and deadline reminders.",
    images: ["/image.svg"],
  },
  icons: {
    icon: "/orbbt-logo.png",
  },
}

// Layout Component
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <TooltipProvider>
          <WebsiteAnalyticsBridge />
          {children}
        </TooltipProvider>
      </body>
    </html>
  )
}
