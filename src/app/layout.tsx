import type { Metadata, Viewport } from "next";
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
  metadataBase: new URL("https://banshighar.com"),
  title: "Banshidhar Enterprise | Premium Handcrafted Luxury Solutions",
  description:
    "Experience premium, handcrafted solid wood furniture and custom aluminium solutions designed for modern spaces by Banshidhar Enterprise.",
  keywords: [
    "furniture",
    "luxury furniture",
    "handcrafted wood furniture",
    "bespoke furniture",
    "Banshidhar",
    "Banshidhar Enterprise",
    "Banshidhar Enterprise furniture",
    "Banshidhar furniture",
    "Banshidhar aluminium",
    "Banshidhar wood",
    "Banshidhar Enterprise Gujarat",
    "Banshidhar custom furniture",
    "Bansighar",
    "Bansighar Enterprise",
    "custom furniture Gujarat",
    "solid wood",
    "modern dining table",
    "luxury sofa",
    "premium aluminium windows",
    "aluminium window systems",
    "office partitions",
    "modular kitchen Gujarat",
    "Italian marble flooring",
    "luxury home renovation",
    "interior contracting services",
    "solid teak wood furniture",
    "custom wardrobes",
    "designer ceiling solutions",
  ],
  icons: {
    icon: "/images/logo.png",
    shortcut: "/favicon.ico",
    apple: "/images/logo.png",
  },
  openGraph: {
    title: "Banshidhar Enterprise | Premium Handcrafted Luxury Solutions",
    description:
      "Experience premium, handcrafted solid wood furniture and custom aluminium solutions designed for modern spaces by Banshidhar Enterprise.",
    url: "https://banshidharenterprise.com",
    siteName: "Banshidhar Enterprise",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/logo.png",
        width: 512,
        height: 512,
        alt: "Banshidhar Enterprise Logo",
      },
      {
        url: "/images/hero_furniture.png",
        width: 1200,
        height: 630,
        alt: "Banshidhar Enterprise Luxury Furniture Showcase",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Banshidhar Enterprise | Premium Handcrafted Luxury Solutions",
    description:
      "Experience premium, handcrafted solid wood furniture and custom aluminium solutions designed for modern spaces by Banshidhar Enterprise.",
    images: ["/images/hero_furniture.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://banshighar.com",
  },
};

export const viewport: Viewport = {
  themeColor: "#080808",
  width: "device-width",
  initialScale: 1,
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
