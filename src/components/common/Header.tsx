"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn, mainNavigations } from "@/utils";
import { Logo } from "@/icons/Logo";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import MobileSidebar from "./MobileSidebar";
import MobileDashboardNavigation from "./MobileDashboardNavigation";

const Header = () => {
   const user = false;
   const pathname = usePathname();

   return (
      <header className="fixed inset-x-0 top-0 z-40 flex h-14 items-center bg-white/50 text-foreground backdrop-blur-xl lg:h-20">
         <section className="container flex items-center justify-between">
            <div className="flex items-center gap-x-16">
               {user && (
                  <div className="flex items-center gap-x-2 font-semibold text-foreground lg:hidden">
                     <MobileDashboardNavigation />
                     <p>Hi, Shahriar</p>
                  </div>
               )}

               <Link href="/" className={cn(user && "hidden lg:block")}>
                  <Logo />
               </Link>

               <nav className="hidden lg:block">
                  <ul className="flex items-center justify-center gap-x-10 text-lg font-semibold text-foreground">
                     {mainNavigations.map(({ name, path }) => (
                        <li
                           key={path}
                           className={cn(
                              path === pathname
                                 ? "text-muted-foreground"
                                 : "hover:text-foreground/80"
                           )}
                        >
                           <Link href={path}>{name}</Link>
                        </li>
                     ))}
                  </ul>
               </nav>
            </div>

            <div className="flex items-center gap-x-2">
               <MobileSidebar />

               {user ? (
                  <div className="flex items-center gap-x-2">
                     <Avatar className="hidden size-8 border border-border font-semibold lg:flex">
                        <AvatarImage src="https://github.com/Arefin40.png" alt="@shadcn" />
                        <AvatarFallback>SA</AvatarFallback>
                     </Avatar>

                     <Link href="/dashboard" className="hidden lg:block lg:text-lg">
                        My Account
                     </Link>
                  </div>
               ) : (
                  <Button className="hidden rounded-full font-semibold lg:flex" size="lg" asChild>
                     <Link href="/signin">Sign In</Link>
                  </Button>
               )}
            </div>
         </section>
      </header>
   );
};
export default Header;
