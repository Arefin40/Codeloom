import type { FieldError } from "react-hook-form";
import React from "react";
import { cn } from "@/utils";
import { Eye, EyeOff } from "lucide-react";
import { Label } from "./label";

export interface InputBaseProps extends React.InputHTMLAttributes<HTMLInputElement> {
   startIcon?: React.ReactNode;
   endIcon?: React.ReactNode;
}

const InputBase = React.forwardRef<HTMLInputElement, InputBaseProps>(
   ({ className, type = "text", startIcon, endIcon, ...props }, ref) => {
      return (
         <div className="relative w-full">
            {startIcon && (
               <div className="absolute left-3 top-1/2 flex h-5 w-5 -translate-y-1/2 items-center justify-center">
                  {startIcon}
               </div>
            )}

            <input
               type={type}
               id={props.name}
               className={cn(
                  { "pl-10": startIcon, "pl-3": !startIcon, "pr-10": endIcon, "pr-3": !endIcon },
                  "flex h-11 w-full rounded-md border border-input bg-background py-2 text-sm ring-offset-2 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/80 disabled:cursor-not-allowed disabled:opacity-50",
                  className
               )}
               ref={ref}
               {...props}
            />

            {endIcon && (
               <div className="absolute right-3 top-1/2 flex h-5 w-5 -translate-y-1/2 items-center justify-center">
                  {endIcon}
               </div>
            )}
         </div>
      );
   }
);

InputBase.displayName = "InputBase";

export interface InputProps extends InputBaseProps {
   label?: string;
   labelClass?: string;
   description?: React.ReactNode;
   descriptionClass?: string;
   error?: FieldError;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
   ({ name, label, labelClass, description, descriptionClass, error, ...props }, ref) => {
      return (
         <div className="flex-grow space-y-2">
            {label && (
               <Label htmlFor={name} className={labelClass}>
                  {label}
               </Label>
            )}

            <InputBase ref={ref} name={name} {...props} />

            {description && (
               <div className={cn("text-sm text-foreground", descriptionClass)}>{description}</div>
            )}

            {error && <span className="text-sm text-destructive">{error.message}</span>}
         </div>
      );
   }
);

Input.displayName = "Input";

const InputPassword = React.forwardRef<HTMLInputElement, InputProps>(
   ({ name, label, labelClass, description, descriptionClass, error, ...props }, ref) => {
      const [showPassword, setShowPassword] = React.useState(false);

      return (
         <div className="group space-y-2">
            {label && (
               <Label htmlFor={name} className={labelClass}>
                  {label}
               </Label>
            )}

            <InputBase
               {...props}
               type={showPassword ? "text" : "password"}
               ref={ref}
               name={name}
               endIcon={
                  <button
                     type="button"
                     onClick={() => setShowPassword((prev) => !prev)}
                     className="absolute right-3 top-1/2 flex h-5 w-5 -translate-y-1/2 items-center justify-center"
                  >
                     {showPassword ? (
                        <Eye className="size-4 text-gray-500" />
                     ) : (
                        <EyeOff className="size-4 -scale-x-100 text-gray-500" />
                     )}
                  </button>
               }
            />

            {description && (
               <div className={cn("text-sm text-muted-foreground", descriptionClass)}>
                  {description}
               </div>
            )}

            {error && <span className="text-sm text-destructive">{error.message}</span>}
         </div>
      );
   }
);

InputPassword.displayName = "InputPassword";

export { InputBase, Input, InputPassword };
