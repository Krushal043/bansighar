import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingInquire from "@/components/FloatingInquire";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bansidhar Aluminium & Furniture | Premium Handcrafted Luxury Solutions",
  description: "Experience premium, handcrafted solid wood furniture and custom aluminium solutions designed for modern spaces by Bansidhar.",
  keywords: ["furniture", "luxury furniture", "handcrafted wood furniture", "bespoke furniture", "Bansidhar", "Bansidhar Aluminium", "custom furniture Gujarat", "solid wood", "modern dining table", "luxury sofa"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${jakarta.variable} h-full antialiased scroll-smooth`}
      data-scroll-behavior="smooth"
    >
      <body className="min-h-full flex flex-col bg-luxury-black text-luxury-text font-sans selection:bg-luxury-gold selection:text-luxury-black">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <FloatingInquire />
      </body>
    </html>
  );
}
