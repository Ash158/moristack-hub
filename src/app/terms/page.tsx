import type { Metadata } from "next";
import { content } from "@/lib/content";

export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Terms",
    description:
      "Terms of use for the MORISTACK marketing site (moristack.com).",
    alternates: {
      canonical: "/terms",
    },
    robots: { index: true, follow: true },
  };
}

export default function TermsPage() {
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
        Terms
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
        These terms cover your use of moristack.com. Each MORISTACK service
        has its own service-specific terms on its own site.
      </p>

      <div
        className="text-fg"
        style={{
          fontSize: 16,
          lineHeight: 1.75,
        }}
      >
        <Section title="1. What this site is">
          <p>
            moristack.com is a marketing site for MORISTACK. It introduces
            the services we offer (MORISTACK CALL for Japanese phone calls
            and MORISTACK PLAN for Japan trip guides) and links out to the
            service-specific sites where you can read full details, see
            pricing, and submit a request. No commercial transaction happens
            on this site.
          </p>
        </Section>

        <Section title="2. Content ownership">
          <p>
            The text, layout, and other original content on this site are
            © 2026 MORISTACK. You are welcome to link to or quote short
            passages for non-commercial use with attribution back to this
            site. For anything else, please ask first at{" "}
            <a href={`mailto:${c.contactEmail}`} className="underline">
              {c.contactEmail}
            </a>
            .
          </p>
        </Section>

        <Section title="3. No warranty">
          <p>
            The information on this site is provided as-is. We try to keep it
            accurate and up to date, but conditions in Japan (business hours,
            reservation rules, transit, payment methods) change. Always
            confirm with the official source before relying on anything
            here. Service-specific terms on each product site apply to
            anything you actually book or pay for.
          </p>
        </Section>

        <Section title="4. Prohibited use">
          <p>You agree not to:</p>
          <ul style={{ paddingLeft: 22, margin: "12px 0" }}>
            <li>
              Scrape, crawl, or otherwise automatically collect content from
              this site at a rate that would burden the hosting or interfere
              with normal use.
            </li>
            <li>
              Republish or mirror substantial portions of the content
              elsewhere without our written permission.
            </li>
            <li>
              Attempt to access the site by means other than the interface
              we provide (including probing, scanning for vulnerabilities, or
              bypassing rate limits).
            </li>
            <li>
              Use the site or any content on it for unlawful purposes or to
              misrepresent your relationship with MORISTACK.
            </li>
          </ul>
        </Section>

        <Section title="5. Links to other sites">
          <p>
            This site links out to the MORISTACK service sites
            (call.moristack.com, plan.moristack.com) and to third-party
            resources we reference in guides (official transport sites,
            government pages, brand pages, etc.). We are not responsible
            for the content or practices of those third-party sites.
          </p>
        </Section>

        <Section title="6. Changes to these terms">
          <p>
            We may update these terms from time to time. The &ldquo;Last
            updated&rdquo; date at the top of this page will reflect when
            changes were made. Material changes will be noted on the home
            page for at least 30 days.
          </p>
        </Section>

        <Section title="7. Governing law">
          <p>
            These terms are governed by the laws of Japan. Any dispute will
            be handled in a court of competent jurisdiction in Japan,
            unless applicable consumer law gives you the right to bring
            the action where you live.
          </p>
        </Section>

        <Section title="8. Contact">
          <p>
            Questions about these terms:{" "}
            <a href={`mailto:${c.contactEmail}`} className="underline">
              {c.contactEmail}
            </a>
            . Postal address is available on request for formal notices.
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
