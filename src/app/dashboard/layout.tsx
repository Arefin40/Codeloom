"use client";
import { usePathname } from "next/navigation";
import { PanelRight } from "lucide-react";
import { Logo, Bell } from "@/icons";
import { Button } from "@/components/ui/button";
import { CommandPalette } from "@/components/CommandPalette";
import DashboardSidebar from "@/components/common/DashboardSidebar";
import UserAvatar from "@/components/common/UserAvater";

interface LayoutProps {
   children?: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
   const pathname = usePathname();

   return (
      <>
         <div>
            <div className="fixed inset-0 -z-50 h-screen bg-muted" />
         </div>

         <div>
            <header className="fixed inset-x-0 top-0 z-30 h-16 border-b border-border bg-background md:pl-64">
               <section className="flex h-full items-center justify-between px-6">
                  <div className="w-full">
                     <ul className="flex items-center gap-x-1 text-sm">
                        <li>Dashboard</li>
                        <li>/</li>
                        <li className="text-foreground">Courses</li>
                     </ul>
                  </div>

                  <div className="flex w-full items-center justify-end gap-x-3">
                     <CommandPalette className="w-full max-w-96 border-0 bg-muted hover:bg-muted" />

                     <div className="relative inline-block">
                        {/* <div className="jusitfy-center absolute right-1.5 top-1.5 z-10 inline-flex aspect-square items-center rounded-full bg-background p-0.5 text-xs text-background">
                        <span className="size-2 rounded-full bg-current text-primary" />
                     </div> */}

                        <Button variant="secondary" size="icon" className="size-10 rounded-full">
                           <Bell className="size-6 text-primary" />
                        </Button>
                     </div>

                     <UserAvatar src="https://avatars.githubusercontent.com/Arefin40" />
                  </div>
               </section>
            </header>
         </div>

         <div>
            <aside className="fixed inset-y-0 left-0 z-40 h-screen space-y-6 border-r border-border bg-background px-3 py-6 md:w-64">
               <header className="flex items-center justify-between">
                  <Logo logoClass="lg:h-5 text-foreground" />

                  <Button variant="ghost" className="h-auto rounded-full p-0">
                     <PanelRight strokeWidth={1.75} className="size-5" />
                  </Button>
               </header>

               <DashboardSidebar pathname={pathname} />
            </aside>
         </div>

         <main className="flex min-h-screen flex-col bg-background md:pl-64">{children}</main>
      </>
   );
}
