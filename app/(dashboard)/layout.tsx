import { ThemeProvider } from "@/components/ui/theme-provider";
import "../globals.css";
import SideBar from "@/components/ui/sidebar";
import { Toaster } from "@/components/ui/toaster";
export default function User({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="md:flex">
            <SideBar />
            <div className="md:flex-1 p-5">{children}</div>
            <Toaster />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
