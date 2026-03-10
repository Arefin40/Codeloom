"use client";

import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { FieldError } from "react-hook-form";
import { cn } from "@/utils";
import { Label } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

export interface DatePickerProps {
   name?: string;
   label?: string;
   labelClass?: string;
   description?: React.ReactNode;
   descriptionClass?: string;
   error?: FieldError;
}

export const DatePicker: React.FC<DatePickerProps> = ({
   name,
   label,
   labelClass,
   description,
   descriptionClass,
   error
}) => {
   const [date, setDate] = React.useState<Date>();

   return (
      <div className="w-full flex-grow space-y-2">
         {label && (
            <Label htmlFor={name} className={cn(labelClass)}>
               {label}
            </Label>
         )}

         <Popover>
            <PopoverTrigger asChild>
               <Button
                  id={name}
                  variant={"outline"}
                  className={cn(
                     "h-11 w-full justify-start text-left text-sm font-normal active:scale-100",
                     date ? "text-foreground" : "text-muted-foreground"
                  )}
               >
                  <CalendarIcon className="mr-2 size-4" />
                  {date ? format(date, "PPP") : <span>Select date</span>}
               </Button>
            </PopoverTrigger>

            <PopoverContent className="w-auto p-0">
               <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
            </PopoverContent>
         </Popover>

         {description && (
            <div className={cn("text-sm text-foreground", descriptionClass)}>{description}</div>
         )}

         {error && <span className="text-sm text-destructive">{error.message}</span>}
      </div>
   );
};
