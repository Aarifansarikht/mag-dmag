import React from "react";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Providers } from "./providers";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

/* Heading Font */
const centuryGothic = localFont({
  src: [
    { path: "./fonts/centurygothic.ttf", weight: "400", style: "normal" },
    { path: "./fonts/centurygothic_bold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-heading",
  display: "swap",
});

/* Body Font */
const calibri = localFont({
  src: [
    { path: "./fonts/calibri.ttf", weight: "400", style: "normal" },
    { path: "./fonts/calibri_bold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.maggroup.com"),

  title: {
    default: "MAG & DMAG | Drainage Accessories & Steel Fabrication Manufacturer in Qatar & UAE",
    template: "%s | MAG & DMAG Industrial Manufacturing Group",
  },

  description:
    "MAG General Trading (Qatar) and DMAG Trading (UAE) are leading manufacturers of drainage accessories, manhole covers, and custom steel fabrication systems serving major GCC infrastructure projects.",

  keywords: [
    "drainage accessories manufacturer",
    "steel fabrication company",
    "structural steel manufacturer",
    "manhole covers supplier",
    "floor drain manufacturer",
    "industrial drainage systems",
    "steel mezzanine fabrication",
    "custom steel structures",
    "prefabricated steel buildings",
    "Qatar steel fabrication",
    "UAE steel manufacturer",
    "GCC industrial manufacturer",
    "MAG General Trading",
    "DMAG Trading",
  ],

  alternates: {
    canonical: "https://www.maggroup.com",
  },

  openGraph: {
    title: "MAG & DMAG | Drainage Accessories & Steel Fabrication Manufacturer",
    description:
      "Manufacturer of drainage accessories, manhole covers, and custom steel fabrication systems in Qatar & UAE serving GCC infrastructure projects.",
    url: "https://www.maggroup.com",
    siteName: "MAG & DMAG Industrial Group",
    images: [
      {
        url: "/favicon-32x32.png",
        width: 512,
        height: 512,
        alt: "MAG & DMAG Industrial Manufacturing",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "MAG & DMAG | Drainage & Steel Fabrication Manufacturer",
    description: "Leading GCC manufacturer of drainage accessories and custom steel fabrication systems.",
    images: ["/favicon-32x32.png"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  robots: {
    index: true,
    follow: true,
  },

  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body
        suppressHydrationWarning
        className={`
          ${centuryGothic.variable}
          ${calibri.variable}
          antialiased
          bg-paper
          text-ink
          selection:bg-cobalt/20
          selection:text-cobalt-900
        `}
      >
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
