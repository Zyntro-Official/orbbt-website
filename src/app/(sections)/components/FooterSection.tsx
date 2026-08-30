/*
Footer Section
*/

// Imports
import BrandLogo from "@/components/navigation/BrandLogo"
import Link from "next/link"

export function FooterSection() {
  return (
    <footer className="border-t border-border bg-background px-5 py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        {/* Brand */}
        <BrandLogo />

        {/* Nav */}
        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
          <Link href="/#features" className="hover:text-foreground transition-colors">
            Features
          </Link>
          <Link href="/#pricing" className="hover:text-foreground transition-colors">
            Pricing
          </Link>
          <Link href="/#faq" className="hover:text-foreground transition-colors">
            FAQ
          </Link>
          <Link href="/privacy" className="hover:text-foreground transition-colors">
            Privacy
          </Link>
          <Link href="/terms" className="hover:text-foreground transition-colors">
            Terms
          </Link>
          <Link href="/refund" className="hover:text-foreground transition-colors">
            Refunds
          </Link>
          <a href="https://instagram.com/orbbt" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
            Instagram
          </a>
          <a href="https://linkedin.com/company/orbbt" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
            LinkedIn
          </a>
        </nav>

        {/* Copyright */}
        <p className="text-xs text-muted-foreground whitespace-nowrap">
          &copy; {new Date().getFullYear()} orbbt All rights reserved.
        </p>
      </div>
    </footer>
  )
}
