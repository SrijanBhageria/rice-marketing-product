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
  title: "Shashwat & Ishana | A Wedding Gift from Molu",
  description:
    "A gift from Molu — celebrating Shashwat & Ishana's love and their Indian wedding. Save the date.",
  keywords: [
    "Indian wedding",
    "wedding gift",
    "celebration",
    "wedding",
  ],
  authors: [{ name: "Wedding Gift" }],
  openGraph: {
    title: "Shashwat & Ishana | A Wedding Gift from Molu",
    description: "A gift from Molu — celebrating Shashwat & Ishana's love and their Indian wedding.",
    type: "website",
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
        className={`${playfair.variable} ${inter.variable} antialiased bg-[#FAF8FC] text-[#3D3636]`}
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
