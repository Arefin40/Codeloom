import { cn } from "@/utils";

interface DashboardWrapperProps {
   children?: React.ReactNode;
   className?: string;
}

const DashboardWrapper = ({ children, className }: DashboardWrapperProps) => {
   return <div className={cn("flex-grow p-4 md:pt-20", className)}>{children}</div>;
};
export default DashboardWrapper;
