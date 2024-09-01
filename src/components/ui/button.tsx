import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/utils/shadcnUtils";

const buttonVariants = cva(
   "inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 transition-transform active:scale-95",
   {
      variants: {
         variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
            outline:
               "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline"
         },
         size: {
            default: "h-10 px-4 py-2",
            sm: "h-9 rounded-md px-3",
            lg: "h-11 rounded-md px-8",
            icon: "h-10 w-10"
         }
      },
      defaultVariants: {
         variant: "default",
         size: "default"
      }
   }
);

export interface ButtonProps
   extends React.ButtonHTMLAttributes<HTMLButtonElement>,
      VariantProps<typeof buttonVariants> {
   asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
   ({ className, variant, size, asChild = false, ...props }, ref) => {
      const Comp = asChild ? Slot : "button";
      return (
         <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
      );
   }
);
Button.displayName = "Button";

export interface SlidingIconButtonProps extends ButtonProps {
   icon: React.ElementType;
   iconClass?: string;
   side?: "left" | "right";
}

const SlidingIconButton = React.forwardRef<HTMLButtonElement, SlidingIconButtonProps>(
   ({ icon: Icon, side = "left", className, iconClass, children, ...props }, ref) => {
      return (
         <Button ref={ref} {...props} className={cn("group gap-x-2", className)}>
            <Icon
               className={cn(
                  "size-5 opacity-100 transition-all duration-300 group-hover:-translate-x-3 group-hover:opacity-0",
                  iconClass
               )}
            />
            <span className="-mr-7 block font-semibold transition-all duration-300 group-hover:-translate-x-7">
               {children}
            </span>
            <Icon
               className={cn(
                  "relative size-5 translate-x-7 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100",
                  iconClass
               )}
            />
         </Button>
      );
   }
);

export interface SlidingTextButtonProps extends ButtonProps {
   icon?: React.ElementType;
}

const SlidingTextButton = React.forwardRef<HTMLButtonElement, SlidingTextButtonProps>(
   ({ icon: Icon, size, className, children, ...props }, ref) => {
      return (
         <Button
            ref={ref}
            size={size}
            {...props}
            className={cn("group gap-x-2 overflow-hidden", className)}
         >
            {Icon && <Icon className="size-5" />}
            <span
               data-before={children}
               className={cn(
                  "relative transition-transform duration-300 before:absolute before:left-0 before:top-10 before:translate-y-0 before:content-[attr(data-before)] group-hover:-translate-y-10"
               )}
            >
               {children}
            </span>
         </Button>
      );
   }
);

export { Button, SlidingIconButton, SlidingTextButton, buttonVariants };
