import Sidebar from "@/components/ui/sidebar";
import { Toaster } from "@/components/ui/toaster";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="md:flex">
        <Sidebar />
        <div className="md:flex-1 p-5">{children}</div>
        <Toaster />
      </div>
    </>
  );
}
