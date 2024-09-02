import HeroSection from "./HeroSection";
import NewsletterSection from "./NewsletterSection";

export default function Home() {
   return (
      <main className="space-y-8 sm:space-y-12 lg:space-y-16">
         <HeroSection />
         <NewsletterSection />
      </main>
   );
}
