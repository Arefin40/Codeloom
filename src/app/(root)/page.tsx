import HeroSection from "./HeroSection";
import NewsletterSection from "./NewsletterSection";

export default function Home() {
   return (
      <main className="space-y-8 pb-8 sm:space-y-12 sm:pb-12 lg:space-y-16 lg:pb-16">
         <HeroSection />
         <NewsletterSection />
      </main>
   );
}
