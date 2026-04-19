import type { Metadata } from "next";
import { DM_Mono, DM_Sans, Instrument_Serif } from "next/font/google";
import "../styles/globals.css";
import { site } from "@/lib/site";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["italic", "normal"],
  variable: "--font-instrument-serif",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-sans",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-dm-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.canonical),
  title: "Esteban Barrera — Senior Product Designer",
  description:
    "Designed for humans. Built with AI. Senior Product Designer with 6+ years across AI, fintech, consumer, and enterprise products.",
  openGraph: {
    title: "Esteban Barrera — Senior Product Designer",
    description: "Designed for humans. Built with AI.",
    url: site.canonical,
    siteName: "Esteban Barrera Portfolio",
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
        className={`${dmSans.className} ${instrumentSerif.variable} ${dmSans.variable} ${dmMono.variable} bg-app-bg text-app-muted`}
      >
        {children}
      </body>
    </html>
  );
}
