"use client";
import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import type { FieldError } from "react-hook-form";
import { Check } from "lucide-react";
import { cn } from "@/utils/shadcnUtils";
import { Label } from "./form";

type CheckboxBaseProps = React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>;

const CheckboxBase = React.forwardRef<
   React.ElementRef<typeof CheckboxPrimitive.Root>,
   CheckboxBaseProps
>(({ className, ...props }, ref) => {
   return (
      <CheckboxPrimitive.Root
         ref={ref}
         className={cn(
            "focus-visible:ring-ring peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
            className
         )}
         {...props}
      >
         <CheckboxPrimitive.Indicator
            className={cn("flex items-center justify-center text-current")}
         >
            <Check className="h-4 w-4" />
         </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
   );
});
CheckboxBase.displayName = CheckboxPrimitive.Root.displayName;

type CheckboxPropsWithLabel = {
   label: string;
   children?: React.ReactNode;
};

type CheckboxPropsWithChildren = {
   label?: never;
   children: React.ReactNode;
};

export type CheckboxProps = (CheckboxPropsWithLabel | CheckboxPropsWithChildren) &
   CheckboxBaseProps & {
      labelClass?: string;
      description?: string;
      descriptionClass?: string;
      error?: FieldError;
   };

const Checkbox = React.forwardRef<React.ElementRef<typeof CheckboxBase>, CheckboxProps>(
   ({ children, name, label, labelClass, description, descriptionClass, error, ...props }, ref) => {
      return (
         <div className="space-y-2">
            <Label htmlFor={name} className={cn("flex items-center gap-x-2", labelClass)}>
               <CheckboxBase ref={ref} id={name} name={name} {...props} />
               {label || children}
            </Label>

            {description && <p className={cn("text-sm text-muted-foreground", descriptionClass)} />}

            {error && <span className="text-sm text-destructive">{error.message}</span>}
         </div>
      );
   }
);

export { CheckboxBase, Checkbox };
