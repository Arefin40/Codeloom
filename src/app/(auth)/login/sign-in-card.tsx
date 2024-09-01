"use client";
import React from "react";
import toast from "react-hot-toast";
import { Lock, User } from "lucide-react";
import { useAuthActions } from "@convex-dev/auth/react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "@/validation/authSchema";
import { Github, Google } from "@/icons";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { FormSeparator, Input, InputPassword } from "@/components/ui/form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

type SignInFormFields = z.infer<typeof loginSchema>;

interface SignUpCardProps {
   setSignInFlow: (state: "signIn" | "signUp") => void;
}

export default function SignInCard({ setSignInFlow }: SignUpCardProps) {
   const { signIn } = useAuthActions();

   //prettier-ignore
   const { register, handleSubmit, formState: { errors }} = useForm<SignInFormFields>({
      resolver: zodResolver(loginSchema)
   });

   const onSubmit: SubmitHandler<SignInFormFields> = (data) => {
      void signIn("password", { ...data, flow: "signIn" }).catch(() =>
         toast.error("Invalid email or password")
      );
   };

   const signInWithProvider = (provider: "github" | "google") => {
      void signIn(provider).catch(() => toast.error("Failed to sign in"));
   };

   return (
      <div className="mx-auto w-full max-w-lg">
         <Card className="border-0 p-0 shadow-none">
            <CardHeader className="justify-items-center gap-y-3 p-0 pb-8 lg:p-6">
               <CardTitle className="text-2xl font-bold text-foreground">Login</CardTitle>
               <CardDescription>
                  Welcome! Please fill in the details to get started.
               </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-y-6 p-0 lg:p-6">
               <div className="grid gap-x-4 gap-y-2 sm:grid-cols-2">
                  <Button
                     variant="outline"
                     onClick={() => signInWithProvider("google")}
                     className="h-11 w-full gap-x-3 text-sm text-secondary-foreground"
                  >
                     <Google />
                     <span>Login in with google</span>
                  </Button>

                  <Button
                     variant="outline"
                     onClick={() => signInWithProvider("github")}
                     className="h-11 w-full gap-x-3 text-sm text-secondary-foreground"
                  >
                     <Github />
                     <span>Login in with github</span>
                  </Button>
               </div>

               <FormSeparator>Or continue with</FormSeparator>

               <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="mb-8 grid w-full items-center gap-y-3">
                     <Input
                        {...register("email")}
                        placeholder="Enter email"
                        error={errors.email}
                        autoComplete="email"
                        startIcon={<User className="size-4 text-muted-foreground" />}
                     />

                     <InputPassword
                        {...register("password")}
                        placeholder="Enter password"
                        error={errors.password}
                        startIcon={<Lock className="size-4 text-muted-foreground" />}
                        descriptionClass="hidden group-focus-within:block"
                        description="Password must be at least 8 characters long."
                     />

                     <div className="mt-3 flex flex-wrap items-center justify-between gap-x-6 text-sm">
                        <Checkbox label="Remember me" name="remember" />

                        <Button
                           type="button"
                           variant="link"
                           className="hover:no-underline active:scale-100"
                        >
                           Forgot password?
                        </Button>
                     </div>
                  </div>

                  <Button type="submit" className="w-full gap-x-3">
                     Login
                  </Button>
               </form>
            </CardContent>
         </Card>

         <div className="flex-center gap-x-2 px-3 py-5 text-sm">
            <span>Don't have an account?</span>
            <button
               onClick={() => setSignInFlow("signUp")}
               className="text-foreground outline-none"
            >
               Create one
            </button>
         </div>
      </div>
   );
}
