"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Authenticated, Unauthenticated } from "convex/react";
import { useUser } from "@/hooks/convex";
import { cn, mainNavigations } from "@/utils";
import { Logo } from "@/icons";
import { Button } from "@/components/ui/button";
import UserMenu from "./UserMenu";
import MobileSidebar from "./MobileSidebar";
import MobileDashboardNavigation from "./MobileDashboardNavigation";

const DesktopNavigationLinks = () => {
   const pathname = usePathname();

   return (
      <nav className="hidden lg:block">
         <ul className="flex items-center justify-center gap-x-10 text-lg font-semibold text-foreground">
            {mainNavigations.map(({ name, path }) => (
               <li
                  key={path}
                  className={cn(
                     path === pathname ? "text-muted-foreground" : "hover:text-foreground/80"
                  )}
               >
                  <Link href={path}>{name}</Link>
               </li>
            ))}
         </ul>
      </nav>
   );
};

const Header = () => {
   const { user, isLoading } = useUser();

   return (
      <header className="fixed inset-x-0 top-0 z-40 flex h-14 items-center bg-white/50 text-foreground shadow-sm backdrop-blur-xl lg:h-20 lg:shadow-none">
         <section className="container flex items-center justify-between">
            <div className="flex items-center gap-x-16">
               {isLoading ? (
                  <Logo />
               ) : (
                  <>
                     <Authenticated>
                        <div className="flex items-center gap-x-2 font-semibold text-foreground lg:hidden">
                           <MobileDashboardNavigation user={user} />
                           <p>Hi, {user?.name?.split(" ")[0]}</p>
                        </div>
                        <Logo className="hidden lg:block" />
                     </Authenticated>

                     <Unauthenticated>
                        <Logo />
                     </Unauthenticated>
                  </>
               )}

               <DesktopNavigationLinks />
            </div>

            <div className="flex items-center gap-x-2">
               <MobileSidebar user={user} />

               <Authenticated>
                  <UserMenu user={user} />
               </Authenticated>
               <Unauthenticated>
                  <Button className="hidden rounded-full font-semibold lg:flex" size="lg" asChild>
                     <Link href="/login">Sign In</Link>
                  </Button>
               </Unauthenticated>
            </div>
         </section>
      </header>
   );
};
export default Header;
