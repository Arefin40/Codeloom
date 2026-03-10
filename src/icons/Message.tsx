import React from "react";
import { cn } from "@/utils";

interface MessageIconProps extends React.SVGAttributes<SVGSVGElement> {
   active?: boolean;
}

const Message: React.FC<MessageIconProps> = ({ className, active = false }) => {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 24 24"
         className={cn("size-5 flex-shrink-0 fill-current", className)}
      >
         {active && (
            <path d="M12.023 1.54a11.062 11.062 0 0 0-1.361.086A10.517 10.517 0 0 0 1.597 10.8a10.385 10.385 0 0 0 2.593 8.183 10.515 10.515 0 0 0 7.829 3.5h7.312a3.142 3.142 0 0 0 3.142-3.14v-8.02a10.515 10.515 0 0 0-3.77-7.374 10.389 10.389 0 0 0-6.68-2.409z" />
         )}

         <path d="M24.001 11.259a12.012 12.012 0 1 0-11.983 12.753h6.983a5.005 5.005 0 0 0 5-5zm-2 7.753a3 3 0 0 1-3 3h-6.983a10.041 10.041 0 0 1-7.476-3.343 9.917 9.917 0 0 1-2.476-7.814 10.043 10.043 0 0 1 8.656-8.761 10.564 10.564 0 0 1 1.3-.082 9.921 9.921 0 0 1 6.379 2.3 10.041 10.041 0 0 1 3.6 7.042z" />

         <path
            className={cn({ "text-white": active })}
            d="M16.001 15.012h-8a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2zm0-4h-8a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2zm-8-2h4a1 1 0 0 0 0-2h-4a1 1 0 0 0 0 2z"
         />
      </svg>
   );
};
export default Message;
