import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const startTime = Date.now();

  try {
    // Check database connection
    await prisma.$queryRaw`SELECT 1`;

    const healthCheck = {
      status: "healthy",
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      responseTime: Date.now() - startTime,
      services: {
        database: "connected",
        api: "operational",
      },
      version: process.env.VERCEL_GIT_COMMIT_SHA?.slice(0, 7) || "dev",
    };

    return NextResponse.json(healthCheck, {
      status: 200,
      headers: {
        "Cache-Control": "no-store, max-age=0",
      },
    });
  } catch (error) {
    const healthCheck = {
      status: "unhealthy",
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      responseTime: Date.now() - startTime,
      services: {
        database: "disconnected",
        api: "operational",
      },
      error: error instanceof Error ? error.message : "Unknown error",
    };

    return NextResponse.json(healthCheck, {
      status: 503,
      headers: {
        "Cache-Control": "no-store, max-age=0",
      },
    });
  }
}
