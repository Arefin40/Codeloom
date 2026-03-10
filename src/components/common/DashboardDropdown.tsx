import Link from "next/link";
import { LogOut, User } from "lucide-react";
import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuGroup,
   DropdownMenuItem,
   DropdownMenuLabel,
   DropdownMenuSeparator,
   DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import UserAvatar from "./UserAvater";

const DashboardDropdown = () => {
   return (
      <DropdownMenu>
         <DropdownMenuTrigger asChild>
            <UserAvatar
               src="https://avatars.githubusercontent.com/Arefin40"
               name="Shahriar Arefin"
            />
         </DropdownMenuTrigger>

         <DropdownMenuContent align="end" className="min-w-56 text-sm">
            <DropdownMenuLabel className="sr-only">My Account</DropdownMenuLabel>

            <DropdownMenuGroup className="flex items-center gap-x-3 px-4 py-2">
               <UserAvatar
                  src="https://avatars.githubusercontent.com/Arefin40"
                  name="Shahriar Arefin"
               />
               <div>
                  <h4 className="text-foreground">Shahriar Arefin</h4>
                  <p className="text-sm text-muted-foreground">arfin17310@gmail.com</p>
               </div>
            </DropdownMenuGroup>

            <DropdownMenuSeparator />

            <DropdownMenuGroup>
               <DropdownMenuItem asChild>
                  <Link href="/profile">
                     <User className="mr-2 h-4 w-4" />
                     <span>Profile</span>
                  </Link>
               </DropdownMenuItem>
            </DropdownMenuGroup>

            <DropdownMenuSeparator />

            <DropdownMenuItem asChild>
               <button className="w-full">
                  <LogOut className="mr-2 size-4" />
                  <span>Log out</span>
               </button>
            </DropdownMenuItem>
         </DropdownMenuContent>
      </DropdownMenu>
   );
};
export default DashboardDropdown;
