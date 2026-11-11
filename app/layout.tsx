import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/data/site";
import MobileTabBar from "@/components/MobileTabBar";
import CustomCursor from "@/components/CustomCursor";

const serifFont = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const sansFont = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const monoFont = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://reelancer.vercel.app";

export const viewport: Viewport = {
  themeColor: "#0A0A0A",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteConfig.brandName} • ${siteConfig.role}`,
    template: `%s | ${siteConfig.brandName}`,
  },
  description: `${siteConfig.name} (${siteConfig.handle}) — ${siteConfig.tagline}`,
  keywords: [
    "Performance Creative",
    "Digital Marketing Freelancer",
    "Short Form Video Production",
    "Meta Ads Growth",
    "TikTok Video Director",
    "Direct Response Reels",
  ],
  authors: [{ name: siteConfig.name, url: siteUrl }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: `${siteConfig.brandName} • ${siteConfig.role}`,
    description: siteConfig.tagline,
    siteName: siteConfig.brandName,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.brandName} • ${siteConfig.role}`,
    description: siteConfig.tagline,
    creator: "@reelancer",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${serifFont.variable} ${sansFont.variable} ${monoFont.variable} dark`}
    >
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className="bg-background text-offwhite font-sans antialiased selection:bg-lime selection:text-black pb-24 md:pb-0">
        {/* Subtle camera film grain overlay */}
        <div className="film-grain" aria-hidden="true" />
        
        {/* Vignette */}
        <div className="vignette" aria-hidden="true" />

        {/* Custom Viewfinder Cursor on Desktop */}
        <CustomCursor />

        {/* Main Content */}
        {children}

        {/* Camera Control Bar (Mobile Bottom Tab Bar) */}
        <MobileTabBar />
      </body>
    </html>
  );
}
