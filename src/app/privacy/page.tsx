import type { Metadata } from "next";
import { content } from "@/lib/content";

export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Privacy",
    description:
      "How MORISTACK handles personal information collected through this site.",
    alternates: {
      canonical: "/privacy",
    },
    robots: { index: true, follow: true },
  };
}

export default function PrivacyPage() {
  const c = content;

  return (
    <section
      className="mx-auto"
      style={{ maxWidth: 760, padding: "90px 32px 120px" }}
    >
      <div
        className="font-bold tracking-[0.08em] text-fg-soft"
        style={{ fontSize: 12, marginBottom: 14 }}
      >
        LEGAL
      </div>
      <h1
        style={{
          fontSize: "clamp(32px, 4vw, 48px)",
          fontWeight: 900,
          letterSpacing: "-0.02em",
          margin: "0 0 18px",
        }}
      >
        Privacy
      </h1>
      <p
        className="text-fg-soft"
        style={{
          fontSize: 14,
          margin: "0 0 8px",
        }}
      >
        Last updated: 2026-09-01
      </p>
      <p
        className="text-fg-soft"
        style={{
          fontSize: 18,
          lineHeight: 1.7,
          margin: "0 0 40px",
        }}
      >
        This page explains what information MORISTACK collects when you use
        moristack.com, what we do with it, and how to reach us about it.
      </p>

      <div
        className="text-fg"
        style={{
          fontSize: 16,
          lineHeight: 1.75,
        }}
      >
        <Section title="1. What this site collects">
          <p>
            This marketing site is intentionally minimal. The only personal
            information collected directly here is what you submit through the{" "}
            <a href="/request" className="underline">
              request form
            </a>{" "}
            (your email address and the message body) and the email you write
            to{" "}
            <a href={`mailto:${c.contactEmail}`} className="underline">
              {c.contactEmail}
            </a>
            .
          </p>
          <p>
            We also run{" "}
            <a
              href="https://vercel.com/docs/speed-insights"
              target="_blank"
              rel="noopener"
              className="underline"
            >
              Vercel Speed Insights
            </a>{" "}
            for anonymous performance monitoring. Speed Insights does not use
            cookies and does not identify individual visitors. The site does
            not run advertising, ad-tech tracking, or third-party analytics
            beyond this.
          </p>
          <p>
            Service-specific forms and payment flows live on the product
            sites (<a href="https://call.moristack.com/privacy" target="_blank" rel="noopener" className="underline">call.moristack.com</a>, <a href="https://plan.moristack.com/legal/privacy" target="_blank" rel="noopener" className="underline">plan.moristack.com</a>) and are governed by their own privacy pages.
          </p>
        </Section>

        <Section title="2. How we use the information">
          <p>
            Form submissions and direct emails are read by a person to handle
            your inquiry. We use the information only to respond, follow up
            on the same request, and keep a short internal record of what was
            discussed. We do not add you to a marketing list, and we do not
            sell or rent your information.
          </p>
        </Section>

        <Section title="3. Retention">
          <p>
            Inquiry records are kept while the request is in progress and for
            up to six months afterward for reference. After that, identifying
            details are deleted; only an anonymized note of the request type
            may be retained.
          </p>
        </Section>

        <Section title="4. Third parties we work with">
          <ul style={{ paddingLeft: 22, margin: "12px 0" }}>
            <li>
              <strong>Vercel</strong> — hosts this site. Their privacy
              practices are described in the{" "}
              <a
                href="https://vercel.com/legal/privacy-policy"
                target="_blank"
                rel="noopener"
                className="underline"
              >
                Vercel privacy policy
              </a>
              .
            </li>
            <li>
              <strong>Resend</strong> — delivers transactional email when you
              submit the request form. Email content and address are passed to
              Resend solely to send that one message.
            </li>
          </ul>
          <p>
            We do not use third-party advertising, retargeting, or social
            media tracking pixels on this site.
          </p>
        </Section>

        <Section title="5. Your rights">
          <p>
            You can ask us at any time to confirm what we hold about you,
            correct it, or delete it. Email{" "}
            <a href={`mailto:${c.contactEmail}`} className="underline">
              {c.contactEmail}
            </a>{" "}
            and we will action the request within 30 days. Postal address is
            available on request for formal notices.
          </p>
        </Section>

        <Section title="6. Changes to this page">
          <p>
            If we change what we collect or how we handle it, we will update
            the &ldquo;Last updated&rdquo; date at the top of this page.
            Material changes will also be mentioned on the home page for at
            least 30 days.
          </p>
        </Section>

        <Section title="7. Contact">
          <p>
            Questions about this privacy policy:{" "}
            <a href={`mailto:${c.contactEmail}`} className="underline">
              {c.contactEmail}
            </a>
            .
          </p>
        </Section>
      </div>
    </section>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div style={{ marginTop: 36 }}>
      <h2
        style={{
          fontSize: 22,
          fontWeight: 800,
          letterSpacing: "-0.01em",
          margin: "0 0 12px",
        }}
      >
        {title}
      </h2>
      <div
        style={{
          fontSize: 16,
          lineHeight: 1.75,
        }}
      >
        {children}
      </div>
    </div>
  );
}
