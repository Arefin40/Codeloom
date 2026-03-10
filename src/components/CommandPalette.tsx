"use client";
import React from "react";
import Link from "next/link";
import { Search } from "lucide-react";
import { cn } from "@/utils";
import { DashboardNavigations } from "@/utils/dashboard-navigations";
import {
   CommandDialog,
   CommandEmpty,
   CommandGroup,
   CommandInput,
   CommandItem,
   CommandList
} from "@/components/ui/command";
import { Button, ButtonProps } from "./ui/button";
import { KeyboardShortcut } from "./KeyboardShortcut";

export interface CommandPaletteProps extends ButtonProps {
   key?: string;
   keyClass?: string;
   className?: string;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
   key = "k",
   className,
   keyClass,
   ...props
}) => {
   const [open, setOpen] = React.useState(false);

   React.useEffect(() => {
      const handleKeydown = (e: KeyboardEvent) => {
         if (e.key === key && (e.metaKey || e.ctrlKey)) {
            e.preventDefault();
            setOpen((open) => !open);
         }
      };
      document.addEventListener("keydown", handleKeydown);
      return () => document.removeEventListener("keydown", handleKeydown);
   }, []);

   return (
      <>
         <Button
            variant="outline"
            onClick={() => setOpen((open) => !open)}
            aria-label="Open command palette"
            className={cn(
               "w-full justify-between px-2 py-1.5 text-sm hover:bg-background hover:text-muted-foreground active:scale-100",
               className
            )}
            {...props}
         >
            <div className="flex items-center gap-x-1.5">
               <Search strokeWidth={1.5} className="size-5 text-muted-foreground" />
               <span>Search</span>
            </div>
            <KeyboardShortcut keys={[`⌘${key}`]} className={cn("px-0.5", keyClass)} />
         </Button>

         <CommandDialog open={open} onOpenChange={setOpen}>
            <CommandInput placeholder="Type a command or search..." />
            <CommandList>
               <CommandEmpty>No results found.</CommandEmpty>

               <CommandGroup heading="Navigations">
                  {DashboardNavigations.common.map(({ label, path, icon: Icon }) => (
                     <CommandItem key={path} asChild>
                        <Link href={path}>
                           <Icon className="mr-2 !size-4" />
                           <span>{label}</span>
                        </Link>
                     </CommandItem>
                  ))}
               </CommandGroup>
            </CommandList>
         </CommandDialog>
      </>
   );
};
