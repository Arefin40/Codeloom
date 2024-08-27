import {
   HomeIcon,
   LayoutDashboard,
   Presentation,
   ScrollText,
   SquareUserRound,
   Trophy,
   NotepadText,
   Radio,
   Settings,
   CircleHelp
} from "lucide-react";

export const mainNavigations = [
   { path: "/", name: "Home", icon: HomeIcon },
   { path: "/courses", name: "Courses", icon: Presentation },
   { path: "/blogs", name: "Blog", icon: ScrollText },
   { path: "/help-center", name: "Support", icon: CircleHelp },
   { path: "/contact", name: "Contact us", icon: SquareUserRound }
];

export const dashboardNavigations = [
   { label: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
   { label: "My Courses", path: "/courses", icon: Presentation },
   { label: "My Notes", path: "/notes", icon: NotepadText },
   { label: "Live sessions", path: "/sessions", icon: Radio },
   { label: "Challenges", path: "/challenges", icon: Trophy },
   { label: "Settings", path: "/settings", icon: Settings }
];

export const dropdownNavigations = [
   { name: "Dashboard", path: "/dashboard", icon: LayoutDashboard }
];
