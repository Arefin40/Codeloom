import React from "react";
import Link from "next/link";
import { useAuthActions } from "@convex-dev/auth/react";
import { LayoutDashboard, LogOut, User } from "lucide-react";
import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuItem,
   DropdownMenuLabel,
   DropdownMenuSeparator,
   DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import UserAvatar from "./UserAvater";

interface UserDropdownProps {
   user: User | null;
}

const UserDropdown: React.FC<UserDropdownProps> = ({ user }) => {
   const { signOut } = useAuthActions();

   if (!user) return null;

   return (
      <DropdownMenu>
         <DropdownMenuTrigger className="outline-none">
            <UserAvatar src={user?.image} name={user?.name} className="hidden lg:flex" />
         </DropdownMenuTrigger>

         <DropdownMenuContent align="end" className="min-w-[14rem] text-foreground">
            <DropdownMenuLabel className="flex items-center gap-x-2">
               <UserAvatar src={user?.image} name={user?.name} />
               <p>{user?.name}</p>
            </DropdownMenuLabel>

            <DropdownMenuSeparator />

            <DropdownMenuItem asChild>
               <Link href="/profile" className="flex w-full items-center gap-x-3">
                  <User className="size-4 text-foreground/80" />
                  <span>Profile</span>
               </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
               <Link href="/dashboard" className="flex w-full items-center gap-x-3">
                  <LayoutDashboard className="size-4 text-foreground/80" />
                  <span>Dashboard</span>
               </Link>
            </DropdownMenuItem>

            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
               <button onClick={signOut} className="flex w-full items-center gap-x-3">
                  <LogOut className="size-4 -scale-x-100 text-foreground/80" />
                  <span>Log Out</span>
               </button>
            </DropdownMenuItem>
         </DropdownMenuContent>
      </DropdownMenu>
   );
};
export default UserDropdown;
