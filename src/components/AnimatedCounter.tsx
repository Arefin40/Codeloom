"use client";
import { useRef, FC } from "react";
import {
   animate,
   useInView,
   useIsomorphicLayoutEffect,
   KeyframeOptions,
   useReducedMotion
} from "framer-motion";
import { cn } from "@/utils";

interface AnimatedCounterProps {
   from?: number;
   to: number;
   animationOptions?: KeyframeOptions;
   className?: string;
}

const AnimatedCounter: FC<AnimatedCounterProps> = ({
   from = 0,
   to,
   animationOptions,
   className
}) => {
   const ref = useRef<HTMLSpanElement>(null);
   const reducedMotion = useReducedMotion();
   const isInView = useInView(ref, { once: true });

   useIsomorphicLayoutEffect(() => {
      const element = ref.current;
      if (!element) return;

      // If reduced motion is enabled or the element is not in view, skip the animation
      if (reducedMotion || !isInView) {
         ref.current.textContent = String(to); // Set the text directly to the target value
         return;
      }

      // Initialize the text with the starting value
      element.textContent = String(from);

      // Start the animation from `from` to `to` using the provided animation options
      const controls = animate(from, to, {
         duration: 1.5,
         ease: "easeOut",
         ...animationOptions,
         onUpdate: (value) => (element.textContent = value.toFixed(0))
      });

      // Cleanup function to stop the animation if the component unmounts
      return () => controls.stop();
   }, [ref, from, to, isInView, reducedMotion]);

   return <span ref={ref} className={cn("tabular-nums", className)} />;
};

export default AnimatedCounter;
