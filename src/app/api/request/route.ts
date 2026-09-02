import { NextRequest, NextResponse } from "next/server";

// Email header-injection defense (security audit 2026-09-02):
// 1. Strip CR/LF so injected "Bcc:" / "Cc:" lines can't be smuggled into
//    Resend's `subject` or `reply_to` headers.
// 2. Enforce RFC 5322-ish shape + 254-char length cap.
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const EMAIL_MAX = 254;
const stripNewlines = (s: string) => s.replace(/[\r\n]/g, "");
const sanitizeShort = (s: string, max = 200) =>
  stripNewlines(s).trim().slice(0, max);

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const name = sanitizeShort(String(data.name ?? ""), 100);
    const emailRaw = stripNewlines(String(data.email ?? "")).trim();
    const email = emailRaw.slice(0, EMAIL_MAX);
    const service = sanitizeShort(String(data.service ?? ""), 50);
    const message = sanitizeShort(String(data.message ?? ""), 5000);

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    if (!EMAIL_RE.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address." },
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
