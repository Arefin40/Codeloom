import React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Unauthenticated } from "convex/react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { mainNavigations } from "@/utils/navigations";

interface MobileSidebarProps {
   user: User | null;
}

const MobileSidebar: React.FC<MobileSidebarProps> = ({}) => {
   const navigations = [...mainNavigations];

   return (
      <Sheet>
         <SheetTrigger className="flex-center order-2 size-9 rounded-full outline-none lg:order-1 lg:hidden">
            <Menu strokeWidth={1.5} />
         </SheetTrigger>
         <SheetContent
            side="left"
            aria-describedby={undefined}
            className="flex h-full w-60 flex-col gap-0 overflow-hidden rounded-r-lg p-0 pt-12 text-sm font-semibold text-foreground"
         >
            <SheetHeader className="sr-only">
               <SheetTitle>Navigation Menu</SheetTitle>
            </SheetHeader>

            <nav className="space-y-1 px-4 py-3">
               <ul>
                  {navigations.map(({ name, path, icon }) => {
                     const Icon = icon;
                     return (
                        <li key={path}>
                           <Link href={path} className="flex items-center gap-x-3 px-4 py-3">
                              <Icon
                                 className="size-[1.125rem] text-foreground/80"
                                 strokeWidth={1.5}
                              />
                              <span>{name}</span>
                           </Link>
                        </li>
                     );
                  })}
               </ul>
            </nav>

            <div className="flex flex-grow flex-col px-4 pb-4">
               <Unauthenticated>
                  <div className="mt-auto grid grid-cols-2 items-center gap-x-2">
                     <Button size="sm" className="rounded-full" asChild>
                        <Link href="/login">Sign In</Link>
                     </Button>
                     <Button size="sm" variant="ghost" className="rounded-full" asChild>
                        <Link href="/register">Sign Up</Link>
                     </Button>
                  </div>
               </Unauthenticated>
            </div>
         </SheetContent>
      </Sheet>
   );
};
export default MobileSidebar;
