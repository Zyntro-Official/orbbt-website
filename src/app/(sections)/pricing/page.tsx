/*
Pricing
*/

"use client"

// Imports
import { CheckCircleIcon, CreditCard } from "lucide-react"
import { motion } from "motion/react"
import Link from "next/link"
import { useState } from "react"

// UI Components
import AnimationContainer from "@/components/ui/animation-container"
import { AppBadge } from "@/components/ui/app-badge"
import { buttonVariants } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

// Utils
import { cn } from "@/lib/utils"

// Types
type Tab = "monthly" | "yearly"

interface Feature {
  text: string
  tooltip?: string
}

// Constants
const PLANS = [
  {
    name: "Free",
    info: "For getting organized.",
    price: { monthly: 0, yearly: 0 },
    features: [
      { text: "Up to 25 tracked applications" },
      { text: "Kanban pipeline" },
      { text: "Browser extension" },
      { text: "1 resume version" },
    ] as Feature[],
    btn: { text: "Get started", href: "#waitlist" },
    featured: false,
  },
  {
    name: "Pro",
    info: "For an active search.",
    price: { monthly: 12, yearly: 126 },
    features: [
      { text: "Unlimited applications" },
      {
        text: "AI resume tailoring & cover letters",
        tooltip:
          "Rewrite bullets and generate first drafts based on your experience.",
      },
      {
        text: "Interview prep & follow-up drafts",
        tooltip:
          "Role-specific questions and polite nudges after each stage.",
      },
      { text: "Analytics and funnel insights" },
      { text: "Unlimited resume versions" },
    ] as Feature[],
    btn: { text: "Join waitlist", href: "#waitlist" },
    featured: true,
  },
]

export default function PricingPage() {
  const MotionTabTrigger = motion(TabsTrigger)
  const [activeTab, setActiveTab] = useState<Tab>("monthly")

  return (
    <section
      id="pricing"
      className="py-20 bg-muted/40 border-t border-border/50"
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimationContainer delay={0.1}>
          <div className="flex flex-col items-center justify-center w-full py-8">
            {/* Eyebrow Badge */}
            <AppBadge className="mb-6">Simple Pricing</AppBadge>

            {/* Title */}
            <h2 className="text-center text-3xl md:text-5xl !leading-[1.1] font-bold font-heading text-foreground mt-6">
              Choose a plan that{" "}
              <span className="bg-gradient-to-r from-[#571FFF] via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                works for you
              </span>
            </h2>

            {/* Subtitle */}
            <p className="mt-4 text-center text-lg text-muted-foreground max-w-lg">
              Get started with orbbt. today and enjoy more features with our pro
              plans.
            </p>
          </div>
        </AnimationContainer>

        {/* Pricing Cards */}
        <AnimationContainer delay={0.2}>
          <Tabs
            defaultValue="monthly"
            className="w-full flex flex-col items-center justify-center"
          >
            {/* Monthly / Yearly Toggle */}
            <TabsList>
              <MotionTabTrigger
                value="monthly"
                onClick={() => setActiveTab("monthly")}
                className="relative"
              >
                {activeTab === "monthly" && (
                  <motion.div
                    layoutId="pricing-tab-indicator"
                    transition={{ type: "spring", bounce: 0.5 }}
                    className="absolute top-0 left-0 w-full h-full bg-background shadow-sm rounded-md z-10"
                  />
                )}
                <span className="z-20">Monthly</span>
              </MotionTabTrigger>
              <MotionTabTrigger
                value="yearly"
                onClick={() => setActiveTab("yearly")}
                className="relative"
              >
                {activeTab === "yearly" && (
                  <motion.div
                    layoutId="pricing-tab-indicator"
                    transition={{ type: "spring", bounce: 0.5 }}
                    className="absolute top-0 left-0 w-full h-full bg-background shadow-sm rounded-md z-10"
                  />
                )}
                <span className="z-20">Yearly</span>
              </MotionTabTrigger>
            </TabsList>

            {/* Plan Cards */}
            {(["monthly", "yearly"] as Tab[]).map((period) => (
              <TabsContent
                key={period}
                value={period}
                className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full max-w-2xl mx-auto pt-6"
              >
                {PLANS.map((plan) => (
                  <div key={plan.name} className="relative flex flex-col">
                    {/* Most Popular Badge */}
                    {plan.featured && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#571FFF] px-3 py-0.5 text-xs font-semibold text-white z-10">
                        Most popular
                      </div>
                    )}

                    <Card
                      className={cn(
                        "flex flex-col w-full border-border rounded-xl h-full",
                        plan.featured && "border-2 border-[#571FFF]",
                      )}
                    >
                      <CardHeader
                        className={cn(
                          "border-b border-border",
                          plan.featured
                            ? "bg-[#571FFF]/[0.07]"
                            : "bg-foreground/[0.03]",
                          plan.featured ? "pt-8" : "",
                        )}
                      >
                        <CardTitle
                          className={cn(
                            plan.featured
                              ? "text-foreground"
                              : "text-muted-foreground",
                            "text-lg font-medium",
                          )}
                        >
                          {plan.name}
                        </CardTitle>
                        <CardDescription>{plan.info}</CardDescription>
                        <h5 className="text-3xl font-semibold flex items-end">
                          ${plan.price[period]}
                          <div className="text-base text-muted-foreground font-normal ml-1">
                            {plan.name !== "Free"
                              ? `/${period === "monthly" ? "month" : "year"}`
                              : ""}
                          </div>
                          {plan.name !== "Free" && period === "yearly" && (
                            <motion.span
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{
                                duration: 0.3,
                                type: "spring",
                                bounce: 0.25,
                              }}
                              className="px-2 py-0.5 ml-2 rounded-md bg-[#571FFF] text-white text-sm font-medium"
                            >
                              -12%
                            </motion.span>
                          )}
                        </h5>
                      </CardHeader>

                      <CardContent className="pt-6 space-y-4 flex-1">
                        {plan.features.map((feature, index) => (
                          <div
                            key={index}
                            className="flex items-start gap-2"
                          >
                            <CheckCircleIcon className="text-[#571FFF] w-4 h-4 shrink-0 mt-0.5" />
                            <TooltipProvider delayDuration={0}>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <p
                                    className={cn(
                                      "text-sm",
                                      feature.tooltip &&
                                        "border-b border-dashed border-border cursor-pointer",
                                    )}
                                  >
                                    {feature.text}
                                  </p>
                                </TooltipTrigger>
                                {feature.tooltip && (
                                  <TooltipContent>
                                    <p>{feature.tooltip}</p>
                                  </TooltipContent>
                                )}
                              </Tooltip>
                            </TooltipProvider>
                          </div>
                        ))}
                      </CardContent>

                      <CardFooter className="w-full pt-0">
                        <Link
                          href={plan.btn.href}
                          className={buttonVariants({
                            className: cn(
                              "w-full",
                              plan.featured &&
                                "bg-[#571FFF] hover:bg-[#571FFF]/80 text-white",
                            ),
                          })}
                        >
                          {plan.btn.text}
                        </Link>
                      </CardFooter>
                    </Card>
                  </div>
                ))}
              </TabsContent>
            ))}
          </Tabs>
        </AnimationContainer>

        {/* No Credit Card Note */}
        <AnimationContainer delay={0.3}>
          <div className="flex flex-wrap items-center justify-center gap-6 mt-12 max-w-5xl mx-auto w-full">
            <div className="flex items-center gap-2">
              <CreditCard className="w-5 h-5 text-foreground" />
              <span className="text-muted-foreground text-sm">
                No credit card required
              </span>
            </div>
          </div>
        </AnimationContainer>
      </div>
    </section>
  )
}
