/*
Root Layout
*/

// Imports
import { TooltipProvider } from "@/components/ui/tooltip"
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
  title: "Orbbt — Your job hunt, organized.",
  description:
    "Track applications, manage companies, remember deadlines, and follow up from one calm place. Built by Zyntro.",
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
        <TooltipProvider>{children}</TooltipProvider>
      </body>
    </html>
  )
}
