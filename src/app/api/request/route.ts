import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const name = String(data.name ?? "").trim();
    const email = String(data.email ?? "").trim();
    const service = String(data.service ?? "").trim();
    const message = String(data.message ?? "").trim();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const subject = `[hub] ${service || "general"} — ${name}`;
    const text = `Name: ${name}\nEmail: ${email}\nService: ${service || "(unspecified)"}\n\n${message}`;

    if (process.env.RESEND_API_KEY) {
      const resend = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "support@moristack.com",
          to: "support@moristack.com",
          subject,
          text,
          reply_to: email,
        }),
      });
      if (!resend.ok) {
        const detail = await resend.text();
        return NextResponse.json(
          { error: "send failed", detail },
          { status: 502 }
        );
      }
      return NextResponse.json({ ok: true });
    }

    const mailto = `mailto:support@moristack.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(text)}`;
    return NextResponse.json({ ok: true, fallback: true, mailto });
  } catch {
    return NextResponse.json({ error: "internal" }, { status: 500 });
  }
}
