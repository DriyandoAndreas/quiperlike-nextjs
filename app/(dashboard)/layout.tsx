import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/ui/theme-provider";
import "../globals.css";
import SideBar from "@/components/ui/sidebar";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SoICC",
  description:
    "Solution of Information Career College yang dikembangan untuk guru bimbingan dan konseling guna memudahkan guru bimbingan dan konseling dalam memberikan layanan bidang karir untuk peserta didik dalam hal ini perencanaan karir guna memberikan Pemahaman dan informasi terkait program studi di perguruan tinggi.",
};

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
