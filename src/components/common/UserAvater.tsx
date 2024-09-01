import { abbreviate, cn } from "@/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface UserAvatarProps {
   src?: string;
   name?: string;
   className?: string;
   fallbackCharactersLength?: number;
}

const UserAvatar = ({ src, name, className, fallbackCharactersLength = 2 }: UserAvatarProps) => {
   // Return null if neither src nor name is provided
   if (!src && !name) return null;

   return (
      <Avatar className={cn("border border-border font-semibold", className)}>
         <AvatarImage src={src} alt="profile picture" />
         <AvatarFallback>{abbreviate(name ?? "U", fallbackCharactersLength)}</AvatarFallback>
      </Avatar>
   );
};
export default UserAvatar;
