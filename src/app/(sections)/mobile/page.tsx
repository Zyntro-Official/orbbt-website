/*
Mobile Waitlist
*/

"use client"

// Imports
import { ChevronDown } from "lucide-react"

// UI Components
import AnimationContainer from "@/components/ui/animation-container"
import { AppBadge } from "@/components/ui/app-badge"
import { Button } from "@/components/ui/button"
import { Iphone } from "@/components/ui/iphone"
import { MagicCard } from "@/components/ui/magic-card"

export default function MobileWaitlistPage() {
  return (
    <section
      id="mobile"
      className="relative py-20 overflow-hidden"
    >
      {/* Ambient Glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[400px] bg-[#571FFF]/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <AnimationContainer
        delay={0.1}
        className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center w-full py-8">
          {/* Eyebrow Badge */}
          <AppBadge className="mb-6">Mobile App</AppBadge>

          {/* Title */}
          <h2 className="text-center text-3xl md:text-5xl !leading-[1.1] font-bold font-heading text-foreground mt-6">
            Your job hunt{" "}
            <span className="bg-gradient-to-r from-[#571FFF] via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              in your pocket
            </span>
          </h2>

          {/* Subtitle */}
          <p className="mt-4 text-center text-lg text-muted-foreground max-w-lg">
            Log applications on the train, check prep before you walk in, and mark follow-ups done the moment you send them.
          </p>
        </div>

        {/* Content Grid */}
        <div className="mt-12 grid items-start gap-12 lg:grid-cols-2">
          {/* Left — Form */}
          <div className="w-full max-w-md mx-auto lg:mx-0 my-auto">
            {/* Form Card */}
            <MagicCard
              className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8 shadow-sm"
              gradientColor={"#D9D9D955"}
            >
              <h3 className="text-lg font-semibold text-foreground mb-6">
                Get early access to the orbbt mobile app.
              </h3>

              <form
                className="space-y-5"
                onSubmit={(e) => e.preventDefault()}
              >
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-foreground mb-1.5"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    className="w-full h-11 px-4 rounded-lg border border-border bg-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#571FFF]/50 focus:border-[#571FFF] transition-colors"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground mb-1.5"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="you@email.com"
                    className="w-full h-11 px-4 rounded-lg border border-border bg-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#571FFF]/50 focus:border-[#571FFF] transition-colors"
                  />
                </div>

                {/* Describes You */}
                <div>
                  <label
                    htmlFor="describes"
                    className="block text-sm font-medium text-foreground mb-1.5"
                  >
                    What describes you?
                  </label>
                  <div className="relative">
                    <select
                      id="describes"
                      defaultValue=""
                      className="w-full h-11 px-4 rounded-lg border border-border bg-background text-sm text-foreground appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#571FFF]/50 focus:border-[#571FFF] transition-colors"
                    >
                      <option value="" disabled>
                        Select an option
                      </option>
                      <option value="student">Student</option>
                      <option value="graduate">Recent graduate</option>
                      <option value="seeker">Active job seeker</option>
                      <option value="switcher">Career switcher</option>
                      <option value="other">Other</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
                  </div>
                </div>

                {/* Submit */}
                <Button
                  type="submit"
                  size="lg"
                  className="w-full h-12 bg-[#571FFF] hover:bg-[#571FFF]/90 font-semibold"
                >
                  Join mobile app waitlist
                </Button>
              </form>
            </MagicCard>
          </div>

          {/* Right — Static iPhone */}
          <div className="relative hidden lg:flex justify-center">
            <div className="w-full max-w-[320px]">
              <Iphone
                src="/image.png"
                className="w-full drop-shadow-[0_35px_70px_rgba(87,31,255,0.25)]"
              />
            </div>
          </div>
        </div>
      </AnimationContainer>
    </section>
  )
}
