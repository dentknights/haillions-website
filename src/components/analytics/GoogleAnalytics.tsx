"use client";

import Script from "next/script";
import { Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

// Google Analytics Measurement ID
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || "";

// Check if GA is enabled
const isEnabled = GA_MEASUREMENT_ID && GA_MEASUREMENT_ID.startsWith("G-");

// Page view tracking function
export function pageview(path: string) {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("config", GA_MEASUREMENT_ID, {
      page_path: path,
    });
  }
}

// Event tracking function
export function event(
  action: string,
  params?: {
    category?: string;
    label?: string;
    value?: number;
    [key: string]: any;
  }
) {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", action, {
      event_category: params?.category,
      event_label: params?.label,
      value: params?.value,
      ...params,
    });
  }
}

// Google Analytics Script Component
export function GoogleAnalyticsScript() {
  if (!isEnabled) {
    console.warn("Google Analytics not configured. Set NEXT_PUBLIC_GA_ID");
    return null;
  }

  return (
    <>
      {/* Google Analytics Script */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            page_title: document.title,
            page_location: window.location.href,
            send_page_view: false, // We'll handle this manually for SPA navigation
            cookie_flags: 'SameSite=None;Secure',
            cookie_expires: 63072000, // 2 years
            cookie_update: true,
            allow_google_signals: true,
            allow_ad_personalization_signals: true,
            custom_map: {
              'custom_parameter_1': 'business_type',
              'custom_parameter_2': 'service_area'
            }
          });
        `}
      </Script>
    </>
  );
}

// Page View Tracker Component
function PageViewTrackerInner() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!isEnabled) return;

    const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : "");
    pageview(url);
  }, [pathname, searchParams]);

  return null;
}

// Page View Tracker with Suspense
export function PageViewTracker() {
  return (
    <Suspense fallback={null}>
      <PageViewTrackerInner />
    </Suspense>
  );
}

// Export the main component
export default function GoogleAnalytics() {
  return (
    <>
      <GoogleAnalyticsScript />
      <PageViewTracker />
    </>
  );
}
