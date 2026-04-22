import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { openai } from "@ai-sdk/openai";
import { generateText } from "ai";
import { z } from "zod";

const estimateSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.string().email(),
  phone: z.string().min(10),
  year: z.string(),
  make: z.string(),
  model: z.string(),
  damageType: z.string(),
  damageLocation: z.string(),
  notes: z.string().optional(),
  photos: z.array(z.string()),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validatedData = estimateSchema.parse(body);

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
        },
      });
    } else {
      // Update customer info if changed
      customer = await prisma.customer.update({
        where: { id: customer.id },
        data: {
          phone: validatedData.phone,
          firstName: validatedData.firstName,
          lastName: validatedData.lastName,
        },
      });
    }

    // Create or find vehicle
    let vehicle = await prisma.vehicle.findFirst({
      where: {
        customerId: customer.id,
        make: validatedData.make,
        model: validatedData.model,
        year: parseInt(validatedData.year),
      },
    });

    if (!vehicle) {
      vehicle = await prisma.vehicle.create({
        data: {
          customerId: customer.id,
          make: validatedData.make,
          model: validatedData.model,
          year: parseInt(validatedData.year),
        },
      });
    }

    // AI Analysis (if OpenAI API key is available)
    let aiAnalysis = null;
    let estimatedCost = null;
    let severity = null;

    if (process.env.OPENAI_API_KEY && validatedData.photos.length > 0) {
      try {
        const { text } = await generateText({
          model: openai("gpt-4o-mini"),
          messages: [
            {
              role: "system",
              content: `You are an expert paintless dent repair estimator. Analyze vehicle damage photos and provide:
1. Severity assessment (MINOR, MODERATE, SEVERE, or EXTREME)
2. Estimated dent count
3. Preliminary cost estimate range in USD
4. Brief assessment of repair complexity
5. Recommended approach

Respond in JSON format with these exact keys: severity, dentCount, estimatedCostMin, estimatedCostMax, complexity, recommendation`,
            },
            {
              role: "user",
              content: `Analyze this ${validatedData.year} ${validatedData.make} ${validatedData.model} with ${validatedData.damageType} damage on the ${validatedData.damageLocation}. Photo URLs: ${validatedData.photos.join(", ")}`,
            },
          ],
        });

        aiAnalysis = JSON.parse(text);
        
        // Map severity to enum
        const severityMap: Record<string, string> = {
          MINOR: "MINOR",
          MODERATE: "MODERATE",
          SEVERE: "SEVERE",
          EXTREME: "EXTREME",
        };
        severity = severityMap[aiAnalysis.severity?.toUpperCase()] || null;
        
        // Calculate average cost
        if (aiAnalysis.estimatedCostMin && aiAnalysis.estimatedCostMax) {
          estimatedCost = (aiAnalysis.estimatedCostMin + aiAnalysis.estimatedCostMax) / 2;
        }
      } catch (aiError) {
        console.error("AI analysis error:", aiError);
        // Continue without AI analysis
      }
    }

    // Create estimate
    const estimate = await prisma.estimate.create({
      data: {
        customerId: customer.id,
        vehicleId: vehicle.id,
        status: aiAnalysis ? "ANALYZING" : "PENDING",
        severity: severity as any,
        estimatedCost: estimatedCost ? estimatedCost.toFixed(2) : null,
        aiAnalysis: aiAnalysis,
        damageType: [validatedData.damageType],
        notes: validatedData.notes,
        photos: {
          create: validatedData.photos.map((url, index) => ({
            url,
            filename: url.split("/").pop() || "unknown",
            size: 0,
            mimeType: "image/jpeg",
            isPrimary: index === 0,
          })),
        },
      },
      include: {
        photos: true,
        customer: true,
        vehicle: true,
      },
    });

    return NextResponse.json({
      success: true,
      estimate: {
        id: estimate.id,
        status: estimate.status,
        severity: estimate.severity,
        estimatedCost: estimate.estimatedCost,
        aiAnalysis: estimate.aiAnalysis,
      },
      message: "Estimate submitted successfully. We'll review and confirm within 30 minutes.",
    });
  } catch (error) {
    console.error("Estimate submission error:", error);
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Invalid data", details: error.issues },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: "Failed to submit estimate" },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const status = searchParams.get("status");
    const customerId = searchParams.get("customerId");

    const where: any = {};
    if (status) where.status = status;
    if (customerId) where.customerId = customerId;

    const estimates = await prisma.estimate.findMany({
      where,
      include: {
        customer: true,
        vehicle: true,
        photos: true,
        appointment: true,
      },
      orderBy: { submittedAt: "desc" },
    });

    return NextResponse.json({ estimates });
  } catch (error) {
    console.error("Error fetching estimates:", error);
    return NextResponse.json(
      { error: "Failed to fetch estimates" },
      { status: 500 }
    );
  }
}
