/*
  Pricing
*/

"use client"

// Imports
import { CheckCircleIcon } from "lucide-react"
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
    info: "Essential tools for your job hunt.",
    price: { monthly: 0, yearly: 0 },
    features: [
      { text: "Unlimited job tracking" },
      {
        text: "Table & Kanban board views",
        tooltip: "Switch between spreadsheet table and visual pipeline.",
      },
      { text: "Company directory & profiles" },
      {
        text: "Contacts linked to jobs",
        tooltip: "Store recruiters and hiring managers with each role.",
      },
      {
        text: "Browser extension",
        tooltip: "1-click save from LinkedIn & Indeed.",
      },
      { text: "Mobile app (iOS & Android)" },
    ] as Feature[],
    btn: { text: "Get started", href: "#waitlist" },
    featured: false,
  },
  {
    name: "Pro",
    info: "AI-powered tools for a smarter job hunt.",
    price: { monthly: 12, yearly: 126 },
    features: [
      { text: "Everything in Free, plus:" },
      {
        text: "Unlimited AI Job Match",
        tooltip:
          "Instant fit scoring and skill gap analysis for any job listing.",
      },
      { text: "Deadline reminders (Email & Push)" },
      { text: "Priority feature updates" },
      { text: "Priority support" },
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
            <AppBadge className="mb-6">Pricing</AppBadge>

            {/* Title */}
            <h2 className="text-center text-3xl md:text-5xl !leading-[1.1] font-bold font-heading text-foreground mt-6">
              Choose a plan that{" "}
              <span className="bg-gradient-to-r from-[#571FFF] via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                works for you
              </span>
            </h2>

            {/* Subtitle */}
            <p className="mt-4 text-center text-lg text-muted-foreground max-w-lg">
              Get started with orbbt today and enjoy more features with our pro
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
            <TabsList className="rounded-full">
              <MotionTabTrigger
                value="monthly"
                onClick={() => setActiveTab("monthly")}
                className="relative rounded-full data-[state=active]:bg-transparent data-[state=active]:shadow-none"
              >
                {activeTab === "monthly" && (
                  <motion.div
                    layoutId="pricing-tab-indicator"
                    transition={{ type: "spring", bounce: 0.5 }}
                    className="absolute inset-0 bg-background shadow-sm rounded-full z-10"
                  />
                )}
                <span className="z-20">Monthly</span>
              </MotionTabTrigger>
              <MotionTabTrigger
                value="yearly"
                onClick={() => setActiveTab("yearly")}
                className="relative rounded-full data-[state=active]:bg-transparent data-[state=active]:shadow-none"
              >
                {activeTab === "yearly" && (
                  <motion.div
                    layoutId="pricing-tab-indicator"
                    transition={{ type: "spring", bounce: 0.5 }}
                    className="absolute inset-0 bg-background shadow-sm rounded-full z-10"
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
                      <div className="absolute -top-2 left-1/2 -translate-x-1/2 rounded-full bg-[#571FFF] px-3 py-0.5 text-xs font-semibold text-white z-10">
                        Most popular
                      </div>
                    )}

                    <Card
                      className={cn(
                        "flex flex-col w-full border-border rounded-2xl h-full pt-0",
                        plan.featured && "border-2 border-[#571FFF]",
                      )}
                    >
                      <CardHeader
                        className={cn(
                          "relative overflow-hidden border-b border-border pt-8",
                          plan.featured
                            ? "bg-cover bg-center"
                            : "bg-foreground/3",
                        )}
                        style={
                          plan.featured
                            ? { backgroundImage: "url('/pro-bg.jpg')" }
                            : undefined
                        }
                      >
                        {plan.featured && (
                          <div className="absolute inset-0 bg-black/40 pointer-events-none" />
                        )}
                        <CardTitle
                          className={cn(
                            "relative z-10 text-lg font-medium",
                            plan.featured
                              ? "text-white"
                              : "text-muted-foreground",
                          )}
                        >
                          {plan.name}
                        </CardTitle>
                        <CardDescription
                          className={cn(
                            "relative z-10",
                            plan.featured ? "text-white/80" : "",
                          )}
                        >
                          {plan.info}
                        </CardDescription>
                        <h5
                          className={cn(
                            "relative z-10 text-3xl font-semibold flex items-end",
                            plan.featured && "text-white",
                          )}
                        >
                          ${plan.price[period]}
                          <div
                            className={cn(
                              "text-base font-normal ml-1",
                              plan.featured
                                ? "text-white/70"
                                : "text-muted-foreground",
                            )}
                          >
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
      </div>
    </section>
  )
}
