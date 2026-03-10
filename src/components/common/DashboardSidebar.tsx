import Link from "next/link";
import { cn } from "@/utils";
import { DashboardNavigations } from "@/utils/dashboard-navigations";

interface DashboardSidebarProps {
   pathname: string;
   className?: string;
   expanded?: boolean;
}

const DashboardSidebar = ({ pathname, className }: DashboardSidebarProps) => {
   return (
      <nav className={cn("space-y-2 text-foreground", className)}>
         {DashboardNavigations.common.map(({ path, label, icon: Icon }) => {
            const isActive = pathname === `/dashboard${path}`;

            return (
               <Link
                  key={path}
                  href={`/dashboard${path}`}
                  className={cn(
                     "flex items-center gap-x-3 rounded-md px-3 py-2 font-semibold leading-none",
                     { "bg-accent text-accent-foreground": isActive }
                  )}
               >
                  <Icon
                     strokeWidth={1.5}
                     className={cn("size-5 flex-shrink-0 text-gray-700")}
                     active={isActive}
                  />
                  {label}
               </Link>
            );
         })}
      </nav>
   );
};
export default DashboardSidebar;
