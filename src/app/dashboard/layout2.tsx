"use client";
import DashboardSidebar from "@/components/common/DashboardSidebar";
import UserAvatar from "@/components/common/UserAvater";
import { Button } from "@/components/ui/button";
import { MotionDiv } from "@/components/ui/motion";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useUser } from "@/hooks/convex";
import { Logo } from "@/icons";
import { Bell } from "lucide-react";
import { usePathname } from "next/navigation";

interface DashboardLayoutProps {
   children: React.ReactNode;
}

const extractNameFromPathname = (pathname: string) => {
   const name = pathname.split("/").pop()?.toLowerCase().replace("-", " ");
   if (!name) return "Dashboard";
   return name.charAt(0).toUpperCase() + name.slice(1);
};

export default function DashboardLayout({ children }: DashboardLayoutProps) {
   const pathname = usePathname();
   const { user } = useUser();

   return (
      <>
         <div className="fixed inset-x-0 top-0 z-50 h-3 bg-colourful-gradient" />

         <aside className="fixed inset-y-0 left-0 z-40 flex w-56 flex-col overflow-hidden bg-alabaster pt-3 text-foreground md:h-screen">
            <header className="flex h-14 flex-shrink-0 items-center px-6 md:h-16">
               <Logo className="h-4" />
            </header>

            <ScrollArea className="relative flex-grow px-3">
               <div className="pointer-events-none absolute inset-x-0 top-0 h-6 bg-gradient-to-t from-transparent to-alabaster" />
               <DashboardSidebar pathname={pathname} />
            </ScrollArea>
         </aside>

         <div className="isolate -z-10 pl-56 pt-3 md:min-h-screen">
            <div>
               <header className="flex h-14 flex-shrink-0 items-center justify-between px-6 md:h-16">
                  <h2 className="text-xl font-bold text-foreground">
                     {extractNameFromPathname(pathname)}
                  </h2>
                  <div className="flex items-center gap-x-3">
                     <Button variant="link" className="size-10 rounded-full bg-accent/80 p-0">
                        <Bell className="size-6" strokeWidth={1.5} />
                     </Button>
                     {user && (
                        <MotionDiv initial={{ scale: 0 }} animate={user ? { scale: 1 } : {}}>
                           <UserAvatar src={user?.image} name={user?.name} className="size-10" />
                        </MotionDiv>
                     )}
                  </div>
               </header>

               <div className="flex-grow bg-background p-4 text-foreground lg:p-6">
                  <>{children}</>
               </div>
            </div>
         </div>
      </>
   );
}
