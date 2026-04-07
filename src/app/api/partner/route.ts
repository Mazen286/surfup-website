import { NextResponse } from "next/server"
import { Resend } from "resend"
import { COMPANY_EMAIL } from "@/lib/constants"

function getResend() {
  return new Resend(process.env.RESEND_API_KEY)
}

interface PartnerInquiry {
  name: string
  company: string
  email: string
  locationType: string
  message: string
  website?: string // honeypot
}

export async function POST(request: Request) {
  try {
    const body: PartnerInquiry = await request.json()

    // Honeypot: if the hidden "website" field is filled, it's a bot
    if (body.website) {
      // Return success to not tip off the bot
      return NextResponse.json({ success: true })
    }

    if (!body.name || !body.company || !body.email || !body.locationType) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      )
    }

    await getResend().emails.send({
      from: "SurfUp Partner Inquiry <onboarding@resend.dev>",
      to: COMPANY_EMAIL,
      replyTo: body.email,
      subject: `Partner Inquiry: ${body.company}`,
      text: [
        `Name: ${body.name}`,
        `Company: ${body.company}`,
        `Email: ${body.email}`,
        `Location Type: ${body.locationType}`,
        ``,
        `Message:`,
        body.message || "(no message)",
      ].join("\n"),
    })

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json(
      { error: "Failed to send inquiry" },
      { status: 500 },
    )
  }
}
