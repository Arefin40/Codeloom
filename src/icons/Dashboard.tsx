import React from "react";
import { cn } from "@/utils";

interface DashboardIconProps extends React.SVGAttributes<SVGSVGElement> {
   className?: string;
   active?: boolean;
}

const Dashboard: React.FC<DashboardIconProps> = ({ className, active = false }) => {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 24 24"
         className={cn("size-5 flex-shrink-0 fill-current", className)}
      >
         {active && (
            <path d="m3.7857 1.5a2.2857 2.2857 0 0 0-2.2857 2.2857v3.4286a2.2857 2.2857 0 0 0 2.2857 2.2857h3.4286a2.2857 2.2857 0 0 0 2.2857-2.2857v-3.4286a2.2857 2.2857 0 0 0-2.2857-2.2857zm13 0a2.2857 2.2857 0 0 0-2.2857 2.2857v3.4286a2.2857 2.2857 0 0 0 2.2857 2.2857h3.4286a2.2857 2.2857 0 0 0 2.2857-2.2857v-3.4286a2.2857 2.2857 0 0 0-2.2857-2.2857zm-13 13a2.2857 2.2857 0 0 0-2.2857 2.2857v3.4286a2.2857 2.2857 0 0 0 2.2857 2.2857h3.4286a2.2857 2.2857 0 0 0 2.2857-2.2857v-3.4286a2.2857 2.2857 0 0 0-2.2857-2.2857zm13 0a2.2857 2.2857 0 0 0-2.2857 2.2857v3.4286a2.2857 2.2857 0 0 0 2.2857 2.2857h3.4286a2.2857 2.2857 0 0 0 2.2857-2.2857v-3.4286a2.2857 2.2857 0 0 0-2.2857-2.2857z" />
         )}

         <path d="m20 13h-3a4 4 0 0 0-4 4v3a4 4 0 0 0 4 4h3a4 4 0 0 0 4-4v-3a4 4 0 0 0-4-4zm2 7a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2zm-15-7h-3a4 4 0 0 0-4 4v3a4 4 0 0 0 4 4h3a4 4 0 0 0 4-4v-3a4 4 0 0 0-4-4zm2 7a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2zm11-20h-3a4 4 0 0 0-4 4v3a4 4 0 0 0 4 4h3a4 4 0 0 0 4-4v-3a4 4 0 0 0-4-4zm2 7a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2zm-15-7h-3a4 4 0 0 0-4 4v3a4 4 0 0 0 4 4h3a4 4 0 0 0 4-4v-3a4 4 0 0 0-4-4zm2 7a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2z" />
      </svg>
   );
};
export default Dashboard;
