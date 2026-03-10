"use client";

import React from "react";
import { Button } from "./button";

interface SelectProps {
   children: React.ReactNode;
}

{
   /* 
  
   aria-controls="radix-:r9k:"
   
   dir="ltr"
   aria-describedby=":r9j:-form-item-description"
   aria-invalid="false"
*/
}

export const Select: React.FC<SelectProps> = ({ children }) => {
   const [open, setOpen] = React.useState(false);

   return (
      <div className="relative w-full">
         <Button
            type="button"
            role="combobox"
            data-state={open ? "open" : "closed"}
            data-placeholder=""
            aria-expanded={open}
            aria-autocomplete="none"
            onClick={() => setOpen(true)}
            className="h-11 w-full justify-between border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground hover:bg-background active:scale-100"
         >
            <span className="pointer-events-none line-clamp-1">Select an option</span>
            <svg
               xmlns="http://www.w3.org/2000/svg"
               viewBox="0 0 24 24"
               fill="none"
               stroke="currentColor"
               strokeWidth="2"
               strokeLinecap="round"
               strokeLinejoin="round"
               className="lucide lucide-chevron-down h-4 w-4 opacity-50"
               aria-hidden="true"
            >
               <path d="m6 9 6 6 6-6"></path>
            </svg>
         </Button>

         <input
            type="text"
            aria-hidden="true"
            tabIndex={-1}
            style={{ clip: "rect(0px, 0px, 0px, 0px)", overflowWrap: "normal" }}
            className="clip absolute -m-px size-px overflow-hidden whitespace-nowrap border-0 bg-red-500 p-0"
         />
      </div>
   );
};

export default Select;
