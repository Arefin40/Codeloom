import React from "react";
import Link from "next/link";
import { LogOut } from "lucide-react";
import { dashboardNavigations } from "@/utils";
import {
   Sheet,
   SheetContent,
   SheetFooter,
   SheetHeader,
   SheetTitle,
   SheetTrigger
} from "@/components/ui/sheet";
import UserAvatar from "./UserAvater";
import { useAuthActions } from "@convex-dev/auth/react";

interface MobileDashboardNavigationProps {
   user: User | null;
}

const MobileDashboardNavigation: React.FC<MobileDashboardNavigationProps> = ({ user }) => {
   const { signOut } = useAuthActions();

   return (
      <Sheet>
         <SheetTrigger className="outline-none">
            <UserAvatar src={user?.image} name={user?.name} className="size-9" />
         </SheetTrigger>

         <SheetContent
            aria-describedby={undefined}
            className="flex w-60 flex-col gap-0 rounded-l-xl p-0 pb-8 pt-12 text-sm font-semibold text-foreground outline-none"
         >
            <SheetHeader className="mt-2 border-b border-border/60 px-4 pb-4">
               <SheetTitle className="sr-only">Navigation Menu</SheetTitle>

               <div className="flex items-center gap-x-3">
                  <UserAvatar src={user?.image} name={user?.name} />
                  <p>{user?.name}</p>
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
               <button onClick={signOut} className="flex items-end gap-x-3 px-4 outline-none">
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
