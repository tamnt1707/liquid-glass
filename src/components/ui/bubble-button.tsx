"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const bubbleButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 relative overflow-hidden",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

interface BubbleButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof bubbleButtonVariants> {
  asChild?: boolean
}

const BubbleButton = React.forwardRef<HTMLButtonElement, BubbleButtonProps>(
  ({ className, variant, size, asChild = false, onMouseEnter, onMouseLeave, ...props }, ref) => {
    const [bubbles, setBubbles] = React.useState<Array<{ id: number; x: number; y: number; delay: number }>>([])
    const buttonRef = React.useRef<HTMLButtonElement>(null)
    
    React.useImperativeHandle(ref, () => buttonRef.current!, [])

    const createBubbles = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (!buttonRef.current) return
      
      const rect = buttonRef.current.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      
      // Tạo nhiều bọt nước xung quanh vị trí hover
      const newBubbles = Array.from({ length: 8 }, (_, i) => ({
        id: Date.now() + i,
        x: x + (Math.random() - 0.5) * 60, // Phân tán xung quanh vị trí mouse
        y: y + (Math.random() - 0.5) * 60,
        delay: Math.random() * 200, // Độ trễ ngẫu nhiên
      }))
      
      setBubbles(newBubbles)
      
      // Xóa bubbles sau khi animation hoàn thành
      setTimeout(() => {
        setBubbles([])
      }, 1000)
    }

    const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
      createBubbles(e)
      onMouseEnter?.(e)
    }

    const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
      // Bubbles sẽ tự động biến mất
      onMouseLeave?.(e)
    }

    const Comp = asChild ? Slot : "button"
    
    return (
      <Comp
        className={cn(bubbleButtonVariants({ variant, size, className }))}
        ref={buttonRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...props}
      >
        {props.children}
        
        {/* Bubble Effects */}
        {bubbles.map((bubble) => (
          <div
            key={bubble.id}
            className="absolute pointer-events-none"
            style={{
              left: bubble.x,
              top: bubble.y,
              animationDelay: `${bubble.delay}ms`
            }}
          >
            <div className="bubble-effect" />
          </div>
        ))}
      </Comp>
    )
  }
)
BubbleButton.displayName = "BubbleButton"

export { BubbleButton, bubbleButtonVariants } 