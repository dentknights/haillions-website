import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: NextRequest) {
  try {
    const customers = await prisma.customer.findMany({
      include: {
        vehicles: true,
        estimates: {
          orderBy: { submittedAt: "desc" },
          take: 5,
        },
        appointments: {
          orderBy: { scheduledDate: "desc" },
          take: 5,
        },
        _count: {
          select: {
            estimates: true,
            appointments: true,
            vehicles: true,
          },
        },
      },
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json({ customers });
  } catch (error) {
    console.error("Error fetching customers:", error);
    return NextResponse.json(
      { error: "Failed to fetch customers" },
      { status: 500 }
    );
  }
}
