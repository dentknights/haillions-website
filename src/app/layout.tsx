import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { generateLocalBusinessSchema } from "@/lib/utils";
import { GoogleAnalytics } from "@/components/analytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

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
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schema = generateLocalBusinessSchema();

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <GoogleAnalytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans`}
      >
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
