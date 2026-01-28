import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/app/providers/theme-provider";
import { Navbar } from "@/app/components/layout/Navbar";
import { Footer } from "@/app/components/layout/Footer";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Tamaal | Pure Grains. Honest Taste.",
  description:
    "Tamaal brings you premium quality rice from Indian fields to your table. Experience heritage, purity, and everyday luxury with every grain.",
  keywords: [
    "Tamaal",
    "rice",
    "basmati",
    "premium rice",
    "Indian rice",
    "quality rice",
    "long grain rice",
  ],
  authors: [{ name: "Tamaal" }],
  openGraph: {
    title: "Tamaal | Pure Grains. Honest Taste.",
    description:
      "Premium quality rice from Indian fields to your table. Experience heritage, purity, and everyday luxury.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${playfair.variable} ${inter.variable} antialiased bg-[#FFFDF8] text-[#2E2E2E]`}
        style={{ fontFamily: "var(--font-inter)" }}
      >
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
