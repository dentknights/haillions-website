import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: NextRequest) {
  try {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
    const endOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);

    // Get counts
    const [
      totalCustomers,
      pendingEstimates,
      todayAppointments,
      monthlyRevenue,
      recentEstimates,
      upcomingAppointments,
    ] = await Promise.all([
      prisma.customer.count(),
      prisma.estimate.count({
        where: {
          status: { in: ["PENDING", "ANALYZING", "REVIEWING"] },
        },
      }),
      prisma.appointment.count({
        where: {
          scheduledDate: {
            gte: today,
            lt: tomorrow,
          },
          status: { not: "CANCELLED" },
        },
      }),
      prisma.estimate.aggregate({
        where: {
          approvedAt: {
            gte: startOfMonth,
            lte: endOfMonth,
          },
          estimatedCost: { not: null },
        },
        _sum: {
          estimatedCost: true,
        },
      }),
      prisma.estimate.findMany({
        take: 5,
        orderBy: { submittedAt: "desc" },
        include: {
          customer: true,
          vehicle: true,
        },
      }),
      prisma.appointment.findMany({
        take: 5,
        where: {
          scheduledDate: {
            gte: today,
          },
          status: { not: "CANCELLED" },
        },
        orderBy: { scheduledDate: "asc" },
        include: {
          customer: true,
        },
      }),
    ]);

    return NextResponse.json({
      totalCustomers,
      pendingEstimates,
      todayAppointments,
      monthlyRevenue: monthlyRevenue._sum.estimatedCost || 0,
      recentEstimates,
      upcomingAppointments,
    });
  } catch (error) {
    console.error("Dashboard data error:", error);
    return NextResponse.json(
      { error: "Failed to fetch dashboard data" },
      { status: 500 }
    );
  }
}
