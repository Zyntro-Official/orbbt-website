/*
App Badge
*/

// Imports
import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

// Props
interface AppBadgeProps {
  icon?: ReactNode
  children: ReactNode
  className?: string
}

// Component
export const AppBadge = ({ icon, children, className }: AppBadgeProps) => {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold text-primary transition-all hover:bg-primary/10",
        className,
      )}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      {children}
    </div>
  )
}
