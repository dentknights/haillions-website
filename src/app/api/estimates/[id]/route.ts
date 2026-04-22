import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();
    const { status, notes, estimatedCost } = body;

    const estimate = await prisma.estimate.update({
      where: { id },
      data: {
        status,
        notes,
        estimatedCost: estimatedCost ? parseFloat(estimatedCost) : undefined,
        reviewedAt: new Date(),
      },
    });

    return NextResponse.json({ estimate });
  } catch (error) {
    console.error("Error updating estimate:", error);
    return NextResponse.json(
      { error: "Failed to update estimate" },
      { status: 500 }
    );
  }
}
