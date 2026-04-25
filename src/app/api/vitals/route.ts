import { NextRequest, NextResponse } from "next/server";

interface VitalsPayload {
  metric: string;
  value: number;
  rating: "good" | "needs-improvement" | "poor";
  id: string;
  url: string;
  userAgent: string;
  timestamp: string;
}

export async function POST(request: NextRequest) {
  try {
    const payload: VitalsPayload = await request.json();

    // Validate required fields
    if (!payload.metric || typeof payload.value !== "number") {
      return NextResponse.json(
        { error: "Invalid payload" },
        { status: 400 }
      );
    }

    // Log vitals for monitoring (in production, send to analytics service)
    if (process.env.NODE_ENV === "production") {
      // Here you could send to:
      // - Google Analytics 4
      // - DataDog
      // - New Relic
      // - Custom logging service
      // - Vercel Analytics

      console.log("[Web Vitals]", {
        metric: payload.metric,
        value: payload.value,
        rating: payload.rating,
        url: payload.url,
        timestamp: payload.timestamp,
      });

      // Example: Send to external analytics service
      // await fetch('https://analytics.example.com/vitals', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(payload),
      // });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[Vitals API Error]", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
