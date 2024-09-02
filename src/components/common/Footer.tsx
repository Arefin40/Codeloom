import Link from "next/link";
import { Logo, Facebook, Github, Instagram, Twitter } from "@/icons";
import { mainNavigations } from "@/utils";

const Footer = () => {
   const year = new Date().getFullYear();

   return (
      <footer className="py-8 sm:py-12 lg:py-16">
         <section className="container flex flex-col items-center justify-between gap-y-5 md:flex-row">
            <Logo className="text-foreground" />

            <nav className="">
               <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 font-semibold text-foreground sm:gap-x-10">
                  {mainNavigations.map(({ name, path }) => (
                     <li key={path} className="hover:text-foreground/80">
                        <Link href={path}>{name}</Link>
                     </li>
                  ))}
               </ul>
            </nav>
         </section>

         <div className="container py-4 sm:py-8 lg:py-10">
            <span className="block border-b border-border" />
         </div>

         <section className="container flex flex-col items-center justify-between gap-y-5 sm:flex-row">
            <small className="order-2 text-sm sm:order-1">
               © {year} Codeloom. All Rights Reserved
            </small>

            <div className="order-1 flex items-center gap-x-5 sm:order-2">
               <Link href="">
                  <Facebook className="hover:text-foreground" />
               </Link>
               <Link href="">
                  <Twitter className="p-0.5 hover:text-foreground" />
               </Link>
               <Link href="">
                  <Instagram className="hover:text-foreground" />
               </Link>
               <Link href="">
                  <Github className="hover:text-foreground" />
               </Link>
            </div>
         </section>
      </footer>
   );
};
export default Footer;
