/*
  FAQ
*/

"use client"

// Imports
import { useState } from "react"

// UI Components
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import AnimationContainer from "@/components/ui/animation-container"
import { AppBadge } from "@/components/ui/app-badge"

// Types
type FAQItem = {
  q: string
  a: string
}

export default function FaqPage({ faqs }: { faqs: FAQItem[] }) {
  // States
  const [open, setOpen] = useState<string>("0")

  return (
    <section id="faq" className="py-20">
      <AnimationContainer
        delay={0.1}
        className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center w-full py-8">
          {/* Eyebrow Badge */}
          <AppBadge className="mb-6">FAQ</AppBadge>

          {/* Title */}
          <h2 className="text-center text-3xl md:text-5xl leading-[1.1]! font-bold font-heading text-foreground mt-6">
            Questions,{" "}
            <span className="bg-gradient-to-r from-[#571FFF] via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              answered.
            </span>
          </h2>

          {/* Subtitle */}
          <p className="mt-4 text-center text-lg text-muted-foreground max-w-lg">
            Quick answers to the most common questions about orbbt.
          </p>
        </div>

        {/* Accordion */}
        <div className="mx-auto max-w-2xl mt-12">
          <Accordion
            type="single"
            collapsible
            value={open}
            onValueChange={setOpen}
            className="space-y-2 border-0 py-2"
          >
            {faqs?.map((faq, i) => (
              <AccordionItem
                key={i}
                value={String(i)}
                className="border border-border/60 rounded-xl px-5 data-[state=open]:border-[#571FFF]/60 [state=open]:border-4 transition-colors"
              >
                <AccordionTrigger className="py-3 hover:no-underline">
                  <span className="text-left text-sm font-medium text-foreground">
                    {faq.q}
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="pb-3 text-sm text-muted-foreground leading-relaxed">
                    {faq.a}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </AnimationContainer>
    </section>
  )
}
