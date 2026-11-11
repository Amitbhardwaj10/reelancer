import { NextResponse } from "next/server";

interface ContactPayload {
  name?: string;
  email?: string;
  service?: string;
  budget?: string;
  message?: string;
}

export async function POST(request: Request) {
  try {
    const body: ContactPayload = await request.json();
    const { name, email, service, budget, message } = body;

    // Validation
    const errors: Record<string, string> = {};

    if (!name || name.trim().length < 2) {
      errors.name = "Please provide your name or company (at least 2 characters).";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email.trim())) {
      errors.email = "Please provide a valid business email.";
    }

    if (!service || service.trim().length === 0) {
      errors.service = "Please select a service or general inquiry.";
    }

    if (!message || message.trim().length < 10) {
      errors.message = "Please include a project description (at least 10 characters).";
    }

    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        {
          success: false,
          message: "Validation failed. Please correct the highlighted fields.",
          errors,
        },
        { status: 400 }
      );
    }

    const cleanData = {
      name: name!.trim(),
      email: email!.trim().toLowerCase(),
      service: service!.trim(),
      budget: (budget || "Not Specified").trim(),
      message: message!.trim(),
      receivedAt: new Date().toISOString(),
      userAgent: request.headers.get("user-agent") || "unknown",
    };

    // Log the contact inquiry cleanly
    console.log("=========================================");
    console.log("🎥 NEW REELANCER INBOUND SPRINT LEAD:");
    console.log(JSON.stringify(cleanData, null, 2));
    console.log("=========================================");

    /*
     * -------------------------------------------------------------
     * TODO: Connect an Email Service Provider
     * -------------------------------------------------------------
     * Example: Resend (https://resend.com)
     * const resend = new Resend(process.env.RESEND_API_KEY);
     * await resend.emails.send({
     *   from: 'inquiries@reelancer.co',
     *   to: process.env.CONTACT_EMAIL || 'nikhil@reelancer.co',
     *   subject: `Sprint Lead: ${cleanData.name} (${cleanData.budget})`,
     *   text: `Name: ${cleanData.name}\nEmail: ${cleanData.email}\nService: ${cleanData.service}\nBudget: ${cleanData.budget}\nMessage:\n${cleanData.message}`,
     * });
     * -------------------------------------------------------------
     */

    return NextResponse.json(
      {
        success: true,
        message: "Your inquiry has been received! I'll reply within 24 hours.",
        data: {
          name: cleanData.name,
          service: cleanData.service,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing contact submission:", error);
    return NextResponse.json(
      {
        success: false,
        message: "An unexpected error occurred while transmitting your inquiry. Please chat via WhatsApp.",
      },
      { status: 500 }
    );
  }
}
