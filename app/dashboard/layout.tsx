import Sidebar from "@/components/ui/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex">
      <Sidebar />
      <div className="flex-1 bg-slate-100 ">{children}</div>
    </section>
  );
}
