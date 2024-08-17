import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import NavBar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SoICC",
  description:
    "Solution of Information Career College yang dikembangan untuk guru bimbingan dan konseling guna memudahkan guru bimbingan dan konseling dalam memberikan layanan bidang karir untuk peserta didik dalam hal ini perencanaan karir guna memberikan Pemahaman dan informasi terkait program studi di perguruan tinggi.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NavBar/>
          <main className="m-8">{children}</main>
          <Footer/>
        </ThemeProvider>
      </body>
    </html>
  );
}
