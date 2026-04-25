import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@/components/analytics";
import { WebVitalsReporter } from "@/components/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  fallback: ["system-ui", "arial"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0f1a" },
  ],
  colorScheme: "dark",
};

export const metadata: Metadata = {
  title: {
    default: "Hail Lions Paintless Dent Repair | Houston's #1 PDR Service",
    template: "%s | Hail Lions PDR",
  },
  description: "Houston's premier paintless dent repair service. Mobile PDR for hail damage, door dings, and dents. Lifetime warranty, satisfaction guaranteed. Get a free estimate in 30 minutes.",
  keywords: [
    "paintless dent repair",
    "PDR",
    "hail damage repair",
    "dent removal",
    "auto dent repair",
    "mobile dent repair",
    "Houston",
    "Texas",
    "door ding repair",
    "hail damage",
    "car dent repair",
    "paintless dent removal",
    "dent repair near me",
    "mobile PDR",
    "auto hail repair",
    "paintless dent repair Houston",
    "hail damage repair Houston",
  ],
  authors: [{ name: "Hail Lions PDR" }],
  creator: "Hail Lions PDR",
  publisher: "Hail Lions PDR",
  metadataBase: new URL("https://haillions.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://haillions.com",
    siteName: "Hail Lions Paintless Dent Repair",
    title: "Hail Lions Paintless Dent Repair | Houston's #1 PDR Service",
    description: "Houston's premier paintless dent repair service. Mobile PDR for hail damage, door dings, and dents. Lifetime warranty, satisfaction guaranteed.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Hail Lions Paintless Dent Repair - Houston's #1 PDR Service",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hail Lions Paintless Dent Repair | Houston's #1 PDR Service",
    description: "Houston's premier paintless dent repair service. Mobile PDR for hail damage, door dings, and dents. Lifetime warranty, satisfaction guaranteed.",
    images: ["/og-image.jpg"],
    creator: "@haillions",
    site: "@haillions",
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
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION || "",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#60a5fa" },
    ],
  },
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Hail Lions PDR",
  },
  formatDetection: {
    telephone: true,
  },
  other: {
    "geo.region": "US-TX",
    "geo.placename": "Houston",
    "geo.position": "29.7604;-95.3698",
    ICBM: "29.7604, -95.3698",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        
        {/* Preload critical assets */}
        <link rel="preload" href="/images/hail-lions-logo.png" as="image" type="image/png" />
        
        {/* Google Analytics */}
        <GoogleAnalytics />
        
        {/* Web Vitals Reporter */}
        <WebVitalsReporter />
      </head>
      <body
        className="antialiased font-sans bg-[#0a0f1a] text-[#e8eaed]"
        suppressHydrationWarning
      >
        {/* Skip to main content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#60a5fa] focus:text-[#0a0f1a] focus:rounded-lg focus:font-medium"
        >
          Skip to main content
        </a>
        
        {children}
        
        {/* Mobile Sticky CTA */}
        <MobileStickyCTA />
      </body>
    </html>
  );
}

// Mobile Sticky Call-to-Action Component
function MobileStickyCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#0a0f1a]/95 backdrop-blur-md border-t border-[#1e3a5f] lg:hidden">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          <a
            href="tel:+12813525434"
            className="flex items-center justify-center gap-2 flex-1 bg-[#60a5fa] hover:bg-[#3b82f6] text-[#0a0f1a] font-semibold py-3 px-4 rounded-lg transition-colors min-h-[48px]"
            aria-label="Call Hail Lions PDR"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <span>Call Now</span>
          </a>
          <a
            href="/estimate"
            className="flex items-center justify-center gap-2 flex-1 bg-transparent border-2 border-[#60a5fa] text-[#60a5fa] hover:bg-[#60a5fa]/10 font-semibold py-3 px-4 rounded-lg transition-colors min-h-[48px]"
          >
            <span>Free Estimate</span>
          </a>
        </div>
      </div>
    </div>
  );
}
