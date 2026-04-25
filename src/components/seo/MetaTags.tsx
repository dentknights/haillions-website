import { Metadata } from "next";

interface MetaTagsProps {
  title: string;
  description: string;
  keywords?: string[];
  path?: string;
  image?: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  noIndex?: boolean;
  canonical?: string;
  alternateLanguages?: Record<string, string>;
}

export function generateSEOMetadata({
  title,
  description,
  keywords = [],
  path = "",
  image = "/og-image.jpg",
  type = "website",
  publishedTime,
  modifiedTime,
  author = "Hail Lions PDR",
  noIndex = false,
  canonical,
  alternateLanguages,
}: MetaTagsProps): Metadata {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://haillions.com";
  const url = canonical || `${baseUrl}${path}`;
  const fullImageUrl = image.startsWith("http") ? image : `${baseUrl}${image}`;

  const defaultKeywords = [
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
  ];

  return {
    title: `${title} | Hail Lions PDR`,
    description,
    keywords: [...defaultKeywords, ...keywords],
    authors: [{ name: author }],
    creator: "Hail Lions PDR",
    publisher: "Hail Lions PDR",
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: url,
      languages: alternateLanguages,
    },
    openGraph: {
      type,
      locale: "en_US",
      url,
      siteName: "Hail Lions Paintless Dent Repair",
      title: `${title} | Hail Lions PDR`,
      description,
      images: [
        {
          url: fullImageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Hail Lions PDR`,
      description,
      images: [fullImageUrl],
      creator: "@haillions",
      site: "@haillions",
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION || "",
    },
    other: {
      "geo.region": "US-TX",
      "geo.placename": "Houston",
      "geo.position": "29.7604;-95.3698",
      ICBM: "29.7604, -95.3698",
    },
  };
}

// Component for additional meta tags that need to be in the head
export function MetaTags({
  title,
  description,
  path = "",
  image = "/og-image.jpg",
}: Omit<MetaTagsProps, "keywords" | "type">) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://haillions.com";
  const url = `${baseUrl}${path}`;
  const fullImageUrl = image.startsWith("http") ? image : `${baseUrl}${image}`;

  return (
    <>
      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://www.google-analytics.com" />
      <link rel="preconnect" href="https://connect.facebook.net" />
      
      {/* DNS Prefetch */}
      <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      
      {/* Favicon and App Icons */}
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/manifest.json" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#60a5fa" />
      <meta name="msapplication-TileColor" content="#0a0f1a" />
      <meta name="theme-color" content="#0a0f1a" />
      
      {/* Open Graph */}
      <meta property="og:title" content={`${title} | Hail Lions PDR`} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      
      {/* Twitter */}
      <meta name="twitter:title" content={`${title} | Hail Lions PDR`} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />
      
      {/* Geo Tags */}
      <meta name="geo.region" content="US-TX" />
      <meta name="geo.placename" content="Houston" />
      <meta name="geo.position" content="29.7604;-95.3698" />
      <meta name="ICBM" content="29.7604, -95.3698" />
      
      {/* Mobile Optimization */}
      <meta name="format-detection" content="telephone=yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="Hail Lions PDR" />
      
      {/* PWA */}
      <meta name="application-name" content="Hail Lions PDR" />
      <meta name="mobile-web-app-capable" content="yes" />
    </>
  );
}
