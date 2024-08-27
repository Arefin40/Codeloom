import React from "react";
import Link from "next/link";
import { LogOut } from "lucide-react";
import { cn, dashboardNavigations } from "@/utils";
import {
   Sheet,
   SheetContent,
   SheetFooter,
   SheetHeader,
   SheetTitle,
   SheetTrigger
} from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface UserAvatarProps {
   src: string;
   children: React.ReactNode;
   className?: string;
}

const UserAvatar = ({ src, children, className }: UserAvatarProps) => {
   return (
      <Avatar className={cn("border border-border font-semibold", className)}>
         <AvatarImage src={src} alt="profile picture" />
         <AvatarFallback>{children}</AvatarFallback>
      </Avatar>
   );
};

const MobileDashboardNavigation = () => {
   return (
      <Sheet>
         <SheetTrigger className="outline-none">
            <UserAvatar src="https://github.com/Arefin40.png" className="size-9">
               SA
            </UserAvatar>
         </SheetTrigger>

         <SheetContent
            aria-describedby={undefined}
            className="flex w-60 flex-col gap-0 rounded-l-xl p-0 pb-8 pt-12 text-sm font-semibold text-foreground outline-none"
         >
            <SheetHeader className="mt-2 border-b border-border/60 px-4 pb-4">
               <SheetTitle className="sr-only">Navigation Menu</SheetTitle>

               <div className="flex items-center gap-x-3">
                  <UserAvatar src="https://github.com/Arefin40.png">SA</UserAvatar>
                  <p>Shahriar Arefin</p>
               </div>
            </SheetHeader>

            <nav className="p-3">
               <ul>
                  {dashboardNavigations.map(({ label, path, icon }) => {
                     const Icon = icon;
                     return (
                        <li key={path}>
                           <Link href={path} className="flex items-center gap-x-3 px-4 py-3">
                              <Icon
                                 className="size-[1.125rem] text-foreground/80"
                                 strokeWidth={1.5}
                              />
                              <span>{label}</span>
                           </Link>
                        </li>
                     );
                  })}
               </ul>
            </nav>

            <SheetFooter className="flex-grow px-3">
               <button className="flex items-end gap-x-3 px-4 outline-none">
                  <LogOut
                     strokeWidth={1.5}
                     className="size-[1.125rem] -scale-x-100 text-foreground/80"
                  />
                  <span>Sign Out</span>
               </button>
            </SheetFooter>
         </SheetContent>
      </Sheet>
   );
};
export default MobileDashboardNavigation;
