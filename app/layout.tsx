import "./globals.css";
import { Inter } from "next/font/google";
import { Header } from "./components/layout/Header";
import { MobileHeader } from "./components/layout/MobileHeader";
import Footer from "./components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={inter.className}>
      <body className="min-h-screen bg-background text-foreground flex flex-col">
        <Header />
        <MobileHeader />
        <main className="w-full flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
