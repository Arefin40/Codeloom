import Header from "@/components/common/Header";

interface LayoutProps {
   children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
   return (
      <>
         <Header />
         {children}
      </>
   );
}
