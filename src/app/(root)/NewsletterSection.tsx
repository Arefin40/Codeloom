import { SlidingIconButton } from "@/components/ui/button";
import PaperPlane from "@/icons/backgrounds/PaperPlane";
import { Mail } from "lucide-react";

const NewsletterSection = () => {
   return (
      <section className="container pt-4 md:pt-8">
         <main className="relative rounded-lg bg-primary">
            <div className="relative z-50 overflow-hidden rounded-lg p-6 sm:p-8 md:p-12 lg:p-16">
               <div className="content relative grid gap-x-5 gap-y-6 md:grid-cols-2">
                  <div className="space-y-1 text-center md:space-y-3 md:text-left">
                     <h3 className="text-3xl font-bold text-muted lg:text-4xl">
                        Notify me for new courses
                     </h3>
                     <p className="text-primary-foreground/50 sm:text-lg">
                        Get everything you need succeed!
                     </p>
                  </div>

                  <div className="flex items-center justify-center md:justify-end">
                     <div className="flex w-full max-w-md items-center gap-x-2 overflow-hidden rounded-md bg-white px-6 py-4">
                        <input
                           type="text"
                           autoComplete="email"
                           id="subscription-email"
                           name="subscription-email"
                           placeholder="Enter you email"
                           className="w-full text-foreground placeholder-gray-800 outline-none"
                        />

                        <SlidingIconButton
                           icon={Mail}
                           iconClass="size-[1.125rem]"
                           size="lg"
                           variant="ghost"
                           className="h-auto rounded-full bg-transparent px-0 text-sm font-semibold text-foreground hover:bg-transparent"
                        >
                           SUBSCRIBE
                        </SlidingIconButton>
                     </div>
                  </div>
               </div>

               <div className="bg-colourful-gradient absolute inset-x-0 bottom-0 h-2" />
            </div>

            <div className="absolute inset-0 -top-4 overflow-hidden md:-top-8">
               <PaperPlane className="motion-safe:animate-float -ml-[60%] w-[160%] sm:ml-0 sm:w-auto" />
            </div>
         </main>
      </section>
   );
};
export default NewsletterSection;
