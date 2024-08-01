import Navbar from "@/components/ui/navbar";
import Sidebar from "@/components/ui/sidebar";
import { Toaster } from "@/components/ui/toaster";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex-row">
      <Navbar/>
      <div className="flex">
        <Sidebar />
        <div className="flex-1">{children}</div>
        <Toaster/>
      </div>
    </section>
  );
}
