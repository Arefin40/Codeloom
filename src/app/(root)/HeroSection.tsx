import AnimatedCounter from "@/components/AnimatedCounter";
import { SlidingIconButton, SlidingTextButton } from "@/components/ui/button";
import HeroBackground from "@/icons/backgrounds/HeroBackground";
import { ThumbsUp, Video } from "lucide-react";

const HeroSection = () => {
   return (
      <section className="offset-header bg-alabaster flex min-h-screen flex-col">
         <div className="container grid flex-grow gap-16 py-14 lg:h-full lg:py-20 xl:grid-cols-2">
            <div className="order-2 grid content-center gap-y-6 text-center sm:order-1 xl:pl-20 xl:text-left">
               <h1 className="text-balance font-fancy text-5xl font-semibold tracking-tight text-foreground sm:text-6xl md:text-7xl xl:text-8xl">
                  Let's code_ your{" "}
                  <span className="relative isolate z-0 before:absolute before:inset-x-0 before:bottom-0 before:-z-10 before:h-1 before:-translate-y-2 before:bg-green/40 lg:before:h-2 lg:before:-translate-y-6">
                     career
                  </span>
                  .
               </h1>

               <p className="text-lg xl:max-w-sm">
                  Online courses from the world's leading experts. Join 17 million learners today.
               </p>

               <div className="flex flex-wrap items-center justify-center gap-x-2 xl:justify-start">
                  <SlidingTextButton icon={ThumbsUp} size="lg" className="h-14 rounded-full">
                     Get started
                  </SlidingTextButton>

                  <SlidingIconButton
                     icon={Video}
                     size="lg"
                     variant="ghost"
                     className="h-14 rounded-full bg-transparent text-foreground hover:bg-transparent"
                  >
                     How it works
                  </SlidingIconButton>
               </div>

               <div className="mx-auto mt-6 grid max-w-xl content-center justify-center gap-6 sm:mt-10 sm:flex sm:items-center xl:mt-12">
                  <div className="space-y-2 sm:space-y-3">
                     <p className="text-4xl font-bold text-foreground lg:text-5xl">
                        <AnimatedCounter to={250} />+
                     </p>
                     <p className="leading-tight">Expert tutors & mentors</p>
                  </div>
                  <span className="hidden h-4/5 w-px border-r border-border sm:block" />
                  <div className="space-y-2 sm:space-y-3">
                     <p className="text-4xl font-bold text-foreground lg:text-5xl">
                        <AnimatedCounter to={5000} />+
                     </p>
                     <p className="leading-tight">Job placement worldwide</p>
                  </div>
                  <span className="hidden h-4/5 w-px border-r border-border sm:block" />
                  <div className="space-y-2 sm:space-y-3">
                     <p className="text-4xl font-bold text-foreground lg:text-5xl">
                        <AnimatedCounter to={20} />+
                     </p>
                     <p className="leading-tight">Dedicated Job Placement Executives</p>
                  </div>
               </div>
            </div>

            <div className="flex-center order-1 sm:order-2 xl:pr-20">
               <HeroBackground className="h-auto w-full max-w-xl lg:max-w-2xl" />
            </div>
         </div>
      </section>
   );
};
export default HeroSection;
