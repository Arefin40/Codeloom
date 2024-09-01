"use client";
import React from "react";
import toast from "react-hot-toast";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { registrationSchema } from "@/validation/authSchema";
import { useAuthActions } from "@convex-dev/auth/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input, InputPassword } from "@/components/ui/form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

type SignUpFormFields = z.infer<typeof registrationSchema>;

interface SignUpCardProps {
   setSignInFlow: (state: "signIn" | "signUp") => void;
}

export default function SignUpCard({ setSignInFlow }: SignUpCardProps) {
   const { signIn } = useAuthActions();

   //prettier-ignore
   const { register, handleSubmit, formState: { errors }} = useForm<SignUpFormFields>({
      resolver: zodResolver(registrationSchema)
   });

   const onSubmit: SubmitHandler<SignUpFormFields> = ({ fname, lname, email, password }) => {
      void signIn("password", {
         email,
         password,
         name: fname + " " + lname,
         flow: "signUp"
      }).catch(() => toast.error("Something went wrong"));
   };

   return (
      <div className="mx-auto w-full max-w-lg">
         <Card className="space-y-6 border-0 p-0 shadow-none lg:space-y-0">
            <CardHeader className="justify-items-center gap-y-3 p-0 lg:p-6">
               <CardTitle className="text-2xl font-bold text-foreground">
                  Create an account
               </CardTitle>
               <CardDescription>
                  Welcome! Please fill in the details to get started.
               </CardDescription>
            </CardHeader>

            <CardContent className="grid gap-y-6 p-0 lg:p-6">
               <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="mb-8 grid w-full items-center gap-5">
                     <div className="flex flex-wrap gap-5">
                        <Input
                           {...register("fname")}
                           label="First name"
                           placeholder="Enter first name"
                           error={errors.fname}
                        />
                        <Input
                           {...register("lname")}
                           label="Last name"
                           placeholder="Enter last name"
                           error={errors.lname}
                        />
                     </div>

                     <Input
                        {...register("email")}
                        type="email"
                        label="Email"
                        autoComplete="email"
                        placeholder="Enter email"
                        error={errors.email}
                     />

                     <InputPassword
                        {...register("password")}
                        label="Password"
                        placeholder="Enter password"
                        error={errors.password}
                        descriptionClass="hidden group-focus-within:block"
                        description="Password must be at least 8 characters long."
                     />

                     <InputPassword
                        {...register("confirmPassword")}
                        label="Confirm Password"
                        placeholder="Enter password again"
                        error={errors.confirmPassword}
                     />
                  </div>

                  <Button className="w-full">Create account</Button>
               </form>
            </CardContent>
         </Card>

         <div className="flex-center gap-x-2 px-3 py-5 text-sm">
            <span>Already have an account?</span>
            <button
               onClick={() => setSignInFlow("signIn")}
               className="text-foreground outline-none"
            >
               Sign in
            </button>
         </div>
      </div>
   );
}
