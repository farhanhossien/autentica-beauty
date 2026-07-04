import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { StoreProvider } from "@/context/StoreContext";
import Header from "@/components/Header";
import AnnouncementBar from "@/components/AnnouncementBar";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import SearchModal from "@/components/SearchModal";
import Reveal from "@/components/Reveal";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Autêntica — Authentic Beauty. Imported from Portugal.",
  description:
    "Autêntica imports 100% authentic skincare, makeup and luxury perfumes from Portugal and Europe to Bangladesh. Dior, Jean Paul Gaultier, KIKO Milano, CeraVe, The Ordinary & ZARA.",
  keywords: [
    "luxury beauty Bangladesh",
    "authentic perfume",
    "imported skincare",
    "Dior Sauvage",
    "KIKO Milano",
    "Portugal beauty",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body>
        <StoreProvider>
          <Reveal />
          <AnnouncementBar />
          <Header />
          <main>{children}</main>
          <Footer />
          <CartDrawer />
          <SearchModal />
        </StoreProvider>
      </body>
    </html>
  );
}
