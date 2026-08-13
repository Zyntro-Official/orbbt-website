/*
Final CTA
*/

"use client"

// Imports
import { ArrowRight } from "lucide-react"

// UI Components
import AnimationContainer from "@/components/ui/animation-container"
import { Button } from "@/components/ui/button"

export default function FinalCtaPage() {
  return (
    <section id="final-cta" className="py-20 bg-muted/40 border-t border-border/50">
      <AnimationContainer
        delay={0.1}
        className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-2xl text-center">
          {/* Title */}
          <h2 className="text-3xl font-bold text-balance sm:text-5xl">
            Ready to organize your job search?
          </h2>

          {/* Subtitle */}
          <p className="mt-4 text-muted-foreground">
            Join the waitlist and get early access when your spot opens.
          </p>

          {/* Email Form */}
          <form
            className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              required
              placeholder="you@email.com"
              aria-label="Email address"
              className="w-full h-11 rounded-xl border border-border bg-card px-4 text-sm outline-none focus:border-[#571FFF] focus:ring-2 focus:ring-[#571FFF]/50 transition-colors"
            />
            <Button
              type="submit"
              size="lg"
              className="h-11 bg-[#571FFF] hover:bg-[#571FFF]/90 font-semibold whitespace-nowrap"
            >
              Join waitlist
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </form>
        </div>
      </AnimationContainer>
    </section>
  )
}
