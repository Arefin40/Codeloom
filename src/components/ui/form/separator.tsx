import React from "react";
import { cn } from "@/utils";

const FormSeparator: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, children }) => {
   return (
      <div className="flex-center relative">
         <span className="absolute inset-x-0 top-1/2 -translate-y-1/2 border-t border-input" />
         <span
            className={cn(
               "relative bg-background px-2 text-xs uppercase text-muted-foreground",
               className
            )}
         >
            {children}
         </span>
      </div>
   );
};

FormSeparator.displayName = "FormSeparator";

export { FormSeparator };
