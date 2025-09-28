import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const portfolioButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium ring-offset-background transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        hero: "bg-hero-gradient text-primary-foreground shadow-elegant hover:shadow-lg hover:scale-105",
        secondary: "bg-accent-gradient text-accent-foreground border border-border hover:shadow-soft hover:scale-105",
        outline: "border-2 border-primary text-primary bg-background/70 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground",
        ghost: "text-foreground hover:bg-accent hover:text-accent-foreground",
      },
      size: {
        default: "h-10 px-6 py-2",
        sm: "h-9 rounded-lg px-4",
        lg: "h-12 rounded-xl px-8 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "hero",
      size: "default",
    },
  }
)

export interface PortfolioButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof portfolioButtonVariants> {
  asChild?: boolean
}

const PortfolioButton = React.forwardRef<HTMLButtonElement, PortfolioButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(portfolioButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
PortfolioButton.displayName = "PortfolioButton"

export { PortfolioButton, portfolioButtonVariants }