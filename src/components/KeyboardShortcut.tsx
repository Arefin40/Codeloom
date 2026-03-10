import { cn } from "@/utils";

export interface KeyboardShortcutProps {
   keys: string[];
   containerClass?: string;
   className?: string;
}

export const KeyboardShortcut: React.FC<KeyboardShortcutProps> = ({
   keys,
   className,
   containerClass
}) => (
   <p className={cn("inline-flex gap-x-1", containerClass)}>
      {keys.map((key) => (
         <kbd
            key={key}
            className={cn(
               "pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded px-1.5 font-mono text-[10px] text-sm font-medium uppercase tracking-widest opacity-100",
               className
            )}
         >
            {key}
         </kbd>
      ))}
   </p>
);
