import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

interface LayoutProps {
   children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
   return (
      <>
         <Header />
         {children}
         <Footer />
      </>
   );
}
