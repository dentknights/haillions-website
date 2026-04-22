import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { z } from "zod";

const appointmentSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.string().email(),
  phone: z.string().min(10),
  address: z.string().min(1),
  city: z.string().min(1),
  serviceType: z.string().min(1),
  notes: z.string().optional(),
  scheduledDate: z.string(),
  startTime: z.string(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validatedData = appointmentSchema.parse(body);

    // Check if customer exists or create new
    let customer = await prisma.customer.findUnique({
      where: { email: validatedData.email },
    });

    if (!customer) {
      customer = await prisma.customer.create({
        data: {
          email: validatedData.email,
          phone: validatedData.phone,
          firstName: validatedData.firstName,
          lastName: validatedData.lastName,
          address: validatedData.address,
          city: validatedData.city,
        },
      });
    }

    // Parse date and time
    const scheduledDate = new Date(validatedData.scheduledDate);
    const [hours, minutes] = validatedData.startTime.split(":").map(Number);
    scheduledDate.setHours(hours, minutes, 0, 0);

    // Calculate end time (2 hours default)
    const endDate = new Date(scheduledDate);
    endDate.setHours(endDate.getHours() + 2);
    const endTime = `${endDate.getHours().toString().padStart(2, "0")}:${endDate
      .getMinutes()
      .toString()
      .padStart(2, "0")}`;

    // Create appointment
    const appointment = await prisma.appointment.create({
      data: {
        customerId: customer.id,
        status: "SCHEDULED",
        scheduledDate,
        startTime: validatedData.startTime,
        endTime,
        duration: 120, // 2 hours in minutes
        serviceType: validatedData.serviceType,
        notes: validatedData.notes,
        location: `${validatedData.address}, ${validatedData.city}`,
        isMobile: true,
      },
      include: {
        customer: true,
      },
    });

    return NextResponse.json({
      success: true,
      appointment: {
        id: appointment.id,
        scheduledDate: appointment.scheduledDate,
        startTime: appointment.startTime,
        endTime: appointment.endTime,
      },
      message: "Appointment scheduled successfully",
    });
  } catch (error) {
    console.error("Appointment scheduling error:", error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Invalid data", details: error.issues },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: "Failed to schedule appointment" },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const date = searchParams.get("date");
    const customerId = searchParams.get("customerId");

    const where: any = {};
    if (customerId) where.customerId = customerId;
    if (date) {
      const startOfDay = new Date(date);
      startOfDay.setHours(0, 0, 0, 0);
      const endOfDay = new Date(date);
      endOfDay.setHours(23, 59, 59, 999);
      where.scheduledDate = {
        gte: startOfDay,
        lte: endOfDay,
      };
    }

    const appointments = await prisma.appointment.findMany({
      where,
      include: {
        customer: true,
        estimate: {
          include: {
            vehicle: true,
          },
        },
      },
      orderBy: { scheduledDate: "asc" },
    });

    return NextResponse.json({ appointments });
  } catch (error) {
    console.error("Error fetching appointments:", error);
    return NextResponse.json(
      { error: "Failed to fetch appointments" },
      { status: 500 }
    );
  }
}
