import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    // Forward to FormSubmit to deliver to revathibaskar2003@gmail.com
    const res = await fetch("https://formsubmit.co/ajax/revathibaskar2003@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        _subject: subject || `New Portfolio Message from ${name}`,
        message,
        _template: "table",
        _captcha: "false",
      }),
    });

    if (!res.ok) {
      throw new Error("Failed to send message via provider");
    }

    return NextResponse.json({ success: true, message: "Email sent successfully" });
  } catch (error: any) {
    return NextResponse.json(
      { error: error?.message || "Internal server error" },
      { status: 500 }
    );
  }
}

