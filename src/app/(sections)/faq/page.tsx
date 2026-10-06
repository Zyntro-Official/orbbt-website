/*
  FAQ
*/

"use client"

// Imports
import { ChevronDown } from "lucide-react"
import { motion } from "motion/react"
import { useState } from "react"

// UI Components
import AnimationContainer from "@/components/ui/animation-container"
import { AppBadge } from "@/components/ui/app-badge"
import { cn } from "@/lib/utils"

// Types
import type { FAQItem } from "@/lib/faqs"

export default function FaqPage({ faqs }: { faqs: readonly FAQItem[] }) {
  // States
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  // Handlers
  const toggleItem = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index))
  }

  return (
    <section id="faq" className="py-20" aria-labelledby="faq-heading">
      <AnimationContainer
        delay={0.1}
        className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center w-full py-8">
          {/* Eyebrow Badge */}
          <AppBadge className="mb-6">FAQ</AppBadge>

          {/* Title */}
          <h2
            id="faq-heading"
            className="text-center text-3xl md:text-5xl leading-[1.1]! font-bold font-heading text-foreground mt-6"
          >
            Questions,{" "}
            <span className="bg-linear-to-r from-[#571FFF] via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              answered.
            </span>
          </h2>

          {/* Subtitle */}
          <p className="mt-4 text-center text-lg text-muted-foreground max-w-lg">
            Quick answers to the most common questions about orbbt.
          </p>
        </div>

        {/* Accordion List */}
        <div className="mx-auto max-w-2xl mt-12 space-y-3">
          {faqs?.map((faq, i) => {
            const isOpen = openIndex === i

            return (
              <motion.div
                key={i}
                initial={false}
                animate={{
                  borderColor: isOpen
                    ? "rgba(87, 31, 255, 0.6)"
                    : "rgba(128, 128, 128, 0.2)",
                  backgroundColor: isOpen
                    ? "rgba(87, 31, 255, 0.02)"
                    : "rgba(87, 31, 255, 0)",
                }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className={cn(
                  "border rounded-xl px-5 transition-shadow",
                  isOpen && "shadow-sm shadow-[#571FFF]/10"
                )}
              >
                {/* Trigger Button */}
                <button
                  type="button"
                  id={`faq-question-${i}`}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${i}`}
                  onClick={() => toggleItem(i)}
                  className="w-full py-4 flex items-center justify-between text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg group cursor-pointer"
                >
                  <span className="text-sm font-medium text-foreground pr-4 group-hover:text-primary transition-colors">
                    {faq.q}
                  </span>
                  {/* Animated Arrow */}
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    className="flex items-center justify-center text-muted-foreground shrink-0 group-hover:text-foreground transition-colors"
                  >
                    <ChevronDown className="h-4 w-4" />
                  </motion.span>
                </button>

                {/* Animated Answer Region */}
                <motion.div
                  id={`faq-answer-${i}`}
                  role="region"
                  aria-labelledby={`faq-question-${i}`}
                  initial={false}
                  animate={{
                    height: isOpen ? "auto" : 0,
                    opacity: isOpen ? 1 : 0,
                  }}
                  transition={{
                    height: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
                    opacity: { duration: 0.25, ease: "easeInOut" },
                  }}
                  className="overflow-hidden"
                >
                  <motion.p
                    initial={false}
                    animate={{
                      y: isOpen ? 0 : -6,
                    }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="pb-4 text-sm text-muted-foreground leading-relaxed"
                  >
                    {faq.a}
                  </motion.p>
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </AnimationContainer>
    </section>
  )
}
