/*
Navbar Component
*/

"use client"

// Imports
import { FileText, Menu, Receipt, Shield, Smartphone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import * as React from "react"

// UI Components
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

// Policy Items Data
const policyItems = [
  {
    title: "Privacy Policy",
    href: "/privacy",
    description: "Learn how we protect, collect, and handle your data.",
    icon: Shield,
  },
  {
    title: "Terms & Conditions",
    href: "/terms",
    description: "Review our rules, policies, and service agreements.",
    icon: FileText,
  },
  {
    title: "Refund Policy",
    href: "/refund",
    description: "Understand our guidelines regarding payments and refunds.",
    icon: Receipt,
  },
]

export function Navbar() {
  // State
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Left: Logo */}
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2.5">
            <Image
              src="/orbbt-logo.png"
              alt="orbbt. logo"
              width={32}
              height={32}
              priority
              className="h-8 w-8 object-contain"
            />
            <span className="grid gap-0.5 leading-none">
              <span className="text-[18px] font-extrabold tracking-tight text-foreground">
                orbbt.
              </span>
              <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                by zyntro
              </span>
            </span>
          </Link>
        </div>

        {/* Center: Desktop Nav Links */}
        <nav className="hidden items-center gap-1 md:flex">
          <Link
            href="#features"
            className={cn(navigationMenuTriggerStyle(), "text-muted-foreground hover:text-foreground")}
          >
            Features
          </Link>
          
          <Link
            href="#pricing"
            className={cn(navigationMenuTriggerStyle(), "text-muted-foreground hover:text-foreground")}
          >
            Pricing
          </Link>

          <Link
            href="#contact"
            className={cn(navigationMenuTriggerStyle(), "text-muted-foreground hover:text-foreground")}
          >
            Contact
          </Link>

          <Link
            href="#waitlist"
            className={cn(
              navigationMenuTriggerStyle(),
              "inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground"
            )}
          >
            <span>Waitlist</span>
            <span className="inline-flex items-center rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-semibold text-primary">
              <Smartphone className="mr-0.5 h-3 w-3" />
              Mobile App
            </span>
          </Link>

          {/* Policies Navigation Menu */}
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-muted-foreground hover:text-foreground">
                  Policies
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[320px] gap-2 p-3 md:w-[380px]">
                    {policyItems.map((item) => {
                      const Icon = item.icon
                      return (
                        <li key={item.title}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={item.href}
                              className="group flex items-start gap-3 rounded-lg p-2.5 transition-colors hover:bg-muted/70 focus:bg-muted/70"
                            >
                              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                                <Icon className="h-4 w-4" />
                              </div>
                              <div className="space-y-1">
                                <p className="text-sm font-medium leading-none text-foreground group-hover:text-primary">
                                  {item.title}
                                </p>
                                <p className="line-clamp-2 text-xs text-muted-foreground">
                                  {item.description}
                                </p>
                              </div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      )
                    })}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        {/* Right: Auth Action Buttons */}
        <div className="hidden items-center gap-3 md:flex">
          <Button variant="ghost" className="font-medium hover:text-primary">
            Login
          </Button>
          <Button variant="default" className="font-medium bg-[#571FFF] hover:bg-[#571FFF]/90 shadow-sm shadow-[#571FFF]/20">
            Signup
          </Button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="h-9 w-9">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>

            {/* Mobile Sheet Drawer */}
            <SheetContent side="right" className="w-[300px] sm:w-[350px]">
              <SheetHeader>
                <SheetTitle>
                  <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center gap-2.5">
                    <Image
                      src="/orbbt-logo.png"
                      alt="orbbt. logo"
                      width={32}
                      height={32}
                      className="h-8 w-8 object-contain"
                    />
                    <span className="grid gap-0.5 leading-none text-left">
                      <span className="text-[18px] font-extrabold tracking-tight text-foreground">
                        orbbt.
                      </span>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                        by zyntro
                      </span>
                    </span>
                  </Link>
                </SheetTitle>
              </SheetHeader>

              <nav className="flex flex-col space-y-4 px-6 pt-2">
                <Link
                  href="#features"
                  onClick={() => setIsOpen(false)}
                  className="text-base font-medium text-foreground transition-colors hover:text-primary"
                >
                  Features
                </Link>

                <Link
                  href="#pricing"
                  onClick={() => setIsOpen(false)}
                  className="text-base font-medium text-foreground transition-colors hover:text-primary"
                >
                  Pricing
                </Link>

                <Link
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="text-base font-medium text-foreground transition-colors hover:text-primary"
                >
                  Contact
                </Link>

                <Link
                  href="#waitlist"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between text-base font-medium text-foreground transition-colors hover:text-primary"
                >
                  <span>Waitlist</span>
                  <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
                    Mobile App
                  </span>
                </Link>

                {/* Policies Section in Mobile */}
                <div className="space-y-3 pt-4 border-t border-border/50">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Policies
                  </p>
                  <div className="flex flex-col space-y-2.5 pl-2 border-l-2 border-primary/30">
                    {policyItems.map((item) => (
                      <Link
                        key={item.title}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="text-sm text-muted-foreground transition-colors hover:text-primary"
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </nav>

              {/* Mobile Auth Buttons */}
              <SheetFooter className="mt-auto">
                <Button variant="outline" className="w-full justify-center">
                  Login
                </Button>
                <Button variant="default" className="w-full justify-center bg-[#571FFF] hover:bg-[#571FFF]/90 text-white">
                  Signup
                </Button>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>

      </div>
    </header>
  )
}
