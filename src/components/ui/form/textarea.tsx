import * as React from "react";
import { FieldError } from "react-hook-form";
import { Label } from "./label";
import { cn } from "@/utils";

export interface TextareaBaseProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const TextareaBase = React.forwardRef<HTMLTextAreaElement, TextareaBaseProps>(
   ({ className, name, ...props }, ref) => {
      return (
         <textarea
            id={name}
            name={name}
            className={cn(
               "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
               className
            )}
            ref={ref}
            {...props}
         />
      );
   }
);
TextareaBase.displayName = "Textarea";

export interface TextareaProps extends TextareaBaseProps {
   label?: string;
   labelClass?: string;
   description?: React.ReactNode;
   descriptionClass?: string;
   error?: FieldError;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
   ({ name, label, labelClass, description, descriptionClass, error, ...props }, ref) => {
      return (
         <div className="flex-grow space-y-2">
            {label && (
               <Label htmlFor={name} className={labelClass}>
                  {label}
               </Label>
            )}

            <TextareaBase ref={ref} name={name} {...props} />

            {description && (
               <div className={cn("text-sm text-foreground", descriptionClass)}>{description}</div>
            )}

            {error && <span className="text-sm text-destructive">{error.message}</span>}
         </div>
      );
   }
);
