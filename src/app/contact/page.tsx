import type { Metadata } from "next";
import { content } from "@/lib/content";

export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
  const c = content;
  return {
    title: c.nav.contact,
    description: "Get in touch with MORISTACK.",
    alternates: {
      canonical: "/contact",
    },
  };
}

export default function ContactPage() {
  const c = content;

  return (
    <section
      className="mx-auto"
      style={{ maxWidth: 1200, padding: "90px 32px" }}
    >
      <div
        className="font-bold tracking-[0.08em] text-fg-soft"
        style={{ fontSize: 12, marginBottom: 14 }}
      >
        {c.founder.eyebrow}
      </div>
      <h1
        style={{
          fontSize: "clamp(32px, 4vw, 48px)",
          fontWeight: 900,
          letterSpacing: "-0.02em",
          margin: "0 0 18px",
        }}
      >
        Contact
      </h1>
      <p
        className="text-fg-soft"
        style={{
          fontSize: 18,
          lineHeight: 1.7,
          maxWidth: 640,
          margin: "0 0 40px",
        }}
      >
        Questions, quotes, or anything else — drop us an email.
      </p>

      <div
        className="rounded-3xl border border-border bg-bg"
        style={{ padding: 40 }}
      >
        <div
          className="font-bold tracking-[0.08em] text-fg-soft"
          style={{ fontSize: 12, marginBottom: 8 }}
        >
          Email
        </div>
        <a
          href={`mailto:${c.contactEmail}`}
          className="block font-extrabold underline-offset-4 hover:underline"
          style={{
            fontSize: 28,
            letterSpacing: "-0.01em",
            color: "var(--foreground)",
          }}
        >
          {c.contactEmail}
        </a>
      </div>

      <p
        className="text-fg-faint"
        style={{ fontSize: 14, marginTop: 24 }}
      >
        For service-specific questions, the contact form on each product site reaches the right person faster.
      </p>
    </section>
  );
}
