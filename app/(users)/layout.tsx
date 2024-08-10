
import { ThemeProvider } from "@/components/ui/theme-provider";
import NavBar from "@/components/ui/navbar";
import "../globals.css";
export default function User({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NavBar />
          <main className="">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
