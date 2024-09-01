import type { Metadata } from "next";
import { Mulish as FontSans, Space_Grotesk as FontFancy } from "next/font/google";
import { ConvexAuthNextjsServerProvider } from "@convex-dev/auth/nextjs/server";
import { ConvexClientProvider } from "@/providers/ConvexClientProvider";
import { cn } from "@/utils";
import "./globals.css";

const fontSans = FontSans({ subsets: ["latin"], variable: "--font-mulish" });
const fontFancy = FontFancy({ subsets: ["latin"], variable: "--font-fancy" });

export const metadata: Metadata = {
   title: "Codeloom",
   description: "Edu-tech platform"
};

interface LayoutProps {
   children: React.ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
   return (
      <ConvexAuthNextjsServerProvider>
      <html lang="en">
         <body
            className={cn(
               "relative min-h-screen bg-background font-sans font-medium text-muted-foreground antialiased",
               fontSans.variable,
               fontFancy.variable
            )}
         >
                  <ConvexClientProvider>{children}</ConvexClientProvider>
         </body>
      </html>
      </ConvexAuthNextjsServerProvider>
   );
}
