"use client";
import React from "react";
import { cn } from "@/utils";
import { Logo } from "@/icons";
import { MotionDiv } from "@/components/ui/motion";
import { AuthBackground } from "@/icons/backgrounds";
import SignInCard from "./sign-in-card";
import SignUpCard from "./sign-up-card";

export default function LogIn() {
   const [signInFlow, setSignInFlow] = React.useState<"signIn" | "signUp">("signIn");

   return (
      <main className="grid min-h-screen md:gap-y-6 lg:grid-cols-2">
         {/* Left side */}
         <div className="flex flex-col gap-y-8 p-4 sm:p-6">
            <Logo className="text-foreground" />

            <MotionDiv
               key={signInFlow}
               initial={{ opacity: 0, x: 40 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ type: "tween" }}
               className={cn("flex flex-grow justify-center rounded-lg")}
            >
               {signInFlow === "signIn" ? (
                  <SignInCard setSignInFlow={setSignInFlow} />
               ) : (
                  <SignUpCard setSignInFlow={setSignInFlow} />
               )}
            </MotionDiv>
         </div>

         {/* Right side */}
         <div className="flex-center bg-alabaster p-4 sm:p-6 lg:sticky lg:top-0 lg:h-screen">
            <div className="grid content-center justify-items-center lg:gap-y-24">
               <div className="grid max-w-lg justify-items-center gap-y-6 text-center lg:justify-items-start lg:text-left">
                  <h2 className="max-w-96 text-balance text-3xl font-bold tracking-tight text-foreground lg:text-5xl">
                     Start your mission with us
                  </h2>

                  <h4 className="sm:max-w-lg sm:text-balance sm:text-lg">
                     Build your career with our guided environment and land on your dream job
                  </h4>
               </div>

               <div className="grid w-full max-w-lg gap-y-8">
                  <AuthBackground />
               </div>
            </div>
         </div>
      </main>
   );
}
