import React from "react";
import { cn } from "@/utils";

const Instagram: React.FC<React.SVGProps<SVGSVGElement>> = ({ className }) => {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 24 24"
         className={cn("size-5 fill-current", className)}
      >
         <path d="M12.198 2.162c3.22 0 3.6.012 4.872.07.765.01 1.522.149 2.24.413a3.995 3.995 0 0 1 2.288 2.278 6.63 6.63 0 0 1 .415 2.228c.057 1.266.07 1.645.07 4.849s-.012 3.583-.07 4.849a6.631 6.631 0 0 1-.415 2.228 3.973 3.973 0 0 1-2.289 2.278 6.716 6.716 0 0 1-2.239.413c-1.27.057-1.652.07-4.872.07-3.22 0-3.6-.012-4.872-.07a6.716 6.716 0 0 1-2.24-.413 3.994 3.994 0 0 1-2.288-2.278 6.629 6.629 0 0 1-.415-2.228c-.057-1.266-.07-1.645-.07-4.849s.012-3.583.07-4.849c.01-.76.15-1.515.415-2.228a3.972 3.972 0 0 1 2.289-2.278 6.717 6.717 0 0 1 2.239-.413c1.272-.057 1.653-.07 4.872-.07Zm0-2.162c-3.273 0-3.685.014-4.97.072C6.225.092 5.235.28 4.298.63a5.909 5.909 0 0 0-2.134 1.384A5.875 5.875 0 0 0 .773 4.14a8.773 8.773 0 0 0-.56 2.914C.154 8.333.14 8.743.14 12c0 3.257.014 3.668.072 4.948.02.995.21 1.98.56 2.914.304.8.778 1.526 1.392 2.125A5.907 5.907 0 0 0 4.3 23.37a8.89 8.89 0 0 0 2.928.558c1.286.057 1.697.072 4.971.072 3.275 0 3.685-.014 4.971-.072 1-.02 1.991-.208 2.928-.558.801-.309 1.528-.78 2.135-1.385a6.138 6.138 0 0 0 1.39-2.125c.351-.933.541-1.919.56-2.915.058-1.278.072-1.689.072-4.946 0-3.257-.014-3.667-.072-4.947a8.772 8.772 0 0 0-.56-2.914 5.875 5.875 0 0 0-1.392-2.125A5.909 5.909 0 0 0 20.096.629 8.89 8.89 0 0 0 17.168.07C15.883.014 15.47 0 12.198 0Z" />
         <path d="M12.196 5.838a6.213 6.213 0 0 0-3.44 1.038 6.168 6.168 0 0 0-2.28 2.766 6.135 6.135 0 0 0 1.342 6.715 6.22 6.22 0 0 0 6.747 1.336 6.185 6.185 0 0 0 2.779-2.27 6.141 6.141 0 0 0-.77-7.78 6.207 6.207 0 0 0-4.378-1.805Zm0 10.162a4.033 4.033 0 0 1-2.233-.674 4.004 4.004 0 0 1-1.48-1.796 3.982 3.982 0 0 1 .871-4.358 4.037 4.037 0 0 1 4.38-.867 4.015 4.015 0 0 1 1.804 1.473 3.986 3.986 0 0 1-.5 5.05A4.029 4.029 0 0 1 12.196 16ZM18.633 7.034c.799 0 1.447-.645 1.447-1.44 0-.795-.648-1.44-1.447-1.44-.8 0-1.447.645-1.447 1.44 0 .795.648 1.44 1.447 1.44Z" />
      </svg>
   );
};
export default Instagram;
