/*
Magic Badge
*/

// Imports
import { cn } from "@/lib/utils"

// Props
interface MagicBadgeProps {
  title: string
  className?: string
}

// Component
const MagicBadge = ({ title, className }: MagicBadgeProps) => {
  return (
    <div
      className={cn(
        "relative inline-flex h-8 overflow-hidden rounded-full p-[1.5px] focus:outline-none select-none",
        className,
      )}
    >
      {/* Spinning gradient ring */}
      <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#6d28d9_0%,#d8b4fe_50%,#6d28d9_100%)]" />
      {/* Label */}
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-white dark:bg-slate-950 px-4 py-1 text-sm font-medium text-neutral-900 dark:text-white backdrop-blur-3xl">
        {title}
      </span>
    </div>
  )
}

export default MagicBadge
