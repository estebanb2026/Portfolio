import type { Metadata } from "next";
import localFont from "next/font/local";
import { DM_Mono, DM_Sans } from "next/font/google";
import "../styles/globals.css";
import { site } from "@/lib/site";
import { ThemeProvider } from "@/components/ThemeProvider";
import { CursorSpotlight } from "@/components/CursorSpotlight";

/** Clash Display — self-hosted from Fontshare (WOFF2). */
const clashDisplay = localFont({
  src: [
    {
      path: "./fonts/clash-display/ClashDisplay-Extralight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "./fonts/clash-display/ClashDisplay-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/clash-display/ClashDisplay-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/clash-display/ClashDisplay-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/clash-display/ClashDisplay-Semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/clash-display/ClashDisplay-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-clash-display",
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

const FALLBACK_SITE = "https://barreraesteban.com";

function metadataBaseUrl(): URL {
  try {
    return new URL(site.canonical);
  } catch {
    return new URL(FALLBACK_SITE);
  }
}

const FALLBACK_METADATA: Metadata = {
  metadataBase: new URL(FALLBACK_SITE),
  title: "Esteban Barrera — Senior Product Designer",
  description:
    "Designed for humans. Built with AI. Senior Product Designer with 6+ years across AI, fintech, consumer, and enterprise products.",
  openGraph: {
    title: "Esteban Barrera — Senior Product Designer",
    description: "Designed for humans. Built with AI.",
    url: FALLBACK_SITE,
    siteName: "Esteban Barrera Portfolio",
  },
  twitter: {
    card: "summary",
    title: "Esteban Barrera — Senior Product Designer",
    description: "Designed for humans. Built with AI.",
  },
};

export function generateMetadata(): Metadata {
  try {
    return {
      metadataBase: metadataBaseUrl(),
      title: "Esteban Barrera — Senior Product Designer",
      description:
        "Designed for humans. Built with AI. Senior Product Designer with 6+ years across AI, fintech, consumer, and enterprise products.",
      openGraph: {
        title: "Esteban Barrera — Senior Product Designer",
        description: "Designed for humans. Built with AI.",
        url: site.canonical,
        siteName: "Esteban Barrera Portfolio",
      },
      twitter: {
        card: "summary",
        title: "Esteban Barrera — Senior Product Designer",
        description: "Designed for humans. Built with AI.",
      },
    };
  } catch {
    return FALLBACK_METADATA;
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark" suppressHydrationWarning>
      <body
        className={`${dmSans.className} ${clashDisplay.variable} ${dmSans.variable} ${dmMono.variable} bg-app-bg text-app-muted`}
      >
        <CursorSpotlight />
        <ThemeProvider>
          <div className="relative z-[1]">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
