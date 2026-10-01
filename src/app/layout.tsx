import type { Metadata } from "next";
import { Libre_Baskerville, Source_Sans_3 } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const libreBaskerville = Libre_Baskerville({
  variable: "--font-libre-baskerville",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Wooden Spokes and Great Folks | Stagecoach Restoration · Poway, CA",
    template: "%s | Wooden Spokes and Great Folks",
  },
  description:
    "Premium restoration, conservation, and custom builds of stagecoaches and historic horse-drawn vehicles. Workshop in Poway, California.",
  keywords: [
    "stagecoach restoration",
    "horse-drawn vehicle restoration",
    "wagon wheel repair",
    "Poway CA",
    "historic carriage restoration",
  ],
  openGraph: {
    title: "Wooden Spokes and Great Folks",
    description:
      "Stagecoach and historic horse-drawn vehicle restoration in Poway, CA.",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${libreBaskerville.variable} ${sourceSans.variable} antialiased`}
      >
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-sm focus:bg-burgundy focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
