"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Types for Web Vitals metrics
type MetricName = "CLS" | "FCP" | "FID" | "INP" | "LCP" | "TTFB";

interface Metric {
  id: string;
  name: MetricName;
  value: number;
  delta: number;
  entries: PerformanceEntry[];
}

// Web Vitals thresholds based on Google's Core Web Vitals
const THRESHOLDS: Record<MetricName, { good: number; needsImprovement: number }> = {
  CLS: { good: 0.1, needsImprovement: 0.25 },
  FCP: { good: 1800, needsImprovement: 3000 },
  FID: { good: 100, needsImprovement: 300 },
  INP: { good: 200, needsImprovement: 500 },
  LCP: { good: 2500, needsImprovement: 4000 },
  TTFB: { good: 800, needsImprovement: 1800 },
};

function getRating(name: MetricName, value: number): "good" | "needs-improvement" | "poor" {
  const threshold = THRESHOLDS[name];
  if (value <= threshold.good) return "good";
  if (value <= threshold.needsImprovement) return "needs-improvement";
  return "poor";
}

// Send metrics to analytics (Google Analytics 4)
function sendToAnalytics(metric: Metric) {
  const rating = getRating(metric.name, metric.value);
  
  // Send to GA4 if gtag is available
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", metric.name, {
      event_category: "Web Vitals",
      value: Math.round(metric.name === "CLS" ? metric.value * 1000 : metric.value),
      event_label: metric.id,
      custom_parameter_1: rating,
    });
  }

  // Log to console in development
  if (process.env.NODE_ENV === "development") {
    console.log(`[Web Vitals] ${metric.name}:`, {
      value: metric.value,
      rating,
      delta: metric.delta,
    });
  }

  // Send to your own analytics endpoint
  if (process.env.NEXT_PUBLIC_WEB_VITALS_ENDPOINT) {
    const body = JSON.stringify({
      name: metric.name,
      value: metric.value,
      rating,
      delta: metric.delta,
      id: metric.id,
      page: window.location.pathname,
      timestamp: new Date().toISOString(),
    });

    // Use sendBeacon for reliability
    if (navigator.sendBeacon) {
      navigator.sendBeacon(process.env.NEXT_PUBLIC_WEB_VITALS_ENDPOINT, body);
    } else {
      fetch(process.env.NEXT_PUBLIC_WEB_VITALS_ENDPOINT, {
        body,
        method: "POST",
        keepalive: true,
        headers: { "Content-Type": "application/json" },
      }).catch(console.error);
    }
  }
}

// Dynamically import web-vitals to reduce initial bundle size
async function getWebVitals() {
  const { onCLS, onFCP, onINP, onLCP, onTTFB } = await import("web-vitals");
  return { onCLS, onFCP, onINP, onLCP, onTTFB };
}

export function WebVitalsReporter() {
  const pathname = usePathname();

  useEffect(() => {
    // Only run in browser
    if (typeof window === "undefined") return;

    // Initialize web vitals tracking
    getWebVitals().then(({ onCLS, onFCP, onINP, onLCP, onTTFB }) => {
      // INP is the new metric replacing FID (as of 2024)
      onINP(sendToAnalytics, { reportAllChanges: false });
      onCLS(sendToAnalytics, { reportAllChanges: false });
      onLCP(sendToAnalytics, { reportAllChanges: false });
      onFCP(sendToAnalytics);
      onTTFB(sendToAnalytics);
    });
  }, [pathname]);

  return null;
}

// Hook to track custom performance marks
export function usePerformanceMark(markName: string) {
  useEffect(() => {
    if (typeof window === "undefined" || !window.performance) return;

    performance.mark(`${markName}-start`);

    return () => {
      performance.mark(`${markName}-end`);
      performance.measure(markName, `${markName}-start`, `${markName}-end`);
    };
  }, [markName]);
}

// Component to preload critical resources
export function PreloadResources() {
  return (
    <>
      {/* Preconnect to critical domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* DNS prefetch for analytics */}
      <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      
      {/* Preload critical images */}
      <link rel="preload" href="/images/hail-lions-logo.png" as="image" type="image/png" />
    </>
  );
}
