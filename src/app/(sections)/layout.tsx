/*
Sections Layout
*/

// Imports
import { Navbar } from "@/components/navigation/navbar"
import { FooterSection } from "./components"

export default function SectionsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen flex flex-col bg-background font-sans text-foreground selection:bg-[#571FFF]/20 selection:text-[#571FFF]">
      {/* Header Navigation */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1">{children}</main>

      {/* Footer Section */}
      <FooterSection />
    </div>
  )
}
