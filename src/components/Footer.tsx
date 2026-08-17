import { Logo } from "@/components/Logo";
import type { Locale } from "@/lib/content";
import { getContent } from "@/lib/content";

export function Footer({ locale }: { locale: Locale }) {
  const c = getContent(locale);
  return (
    <footer
      className="mx-auto"
      style={{
        maxWidth: 1200,
        padding: "56px 32px",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        alignItems: "flex-start",
        gap: 24,
      }}
    >
      <div>
        <Logo size="sm" asLink={false} />
        <div
          className="text-fg-softer"
          style={{ fontSize: 14, maxWidth: 340, lineHeight: 1.6, marginTop: 10 }}
        >
          {c.footer.tagline}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 10,
          alignItems: "flex-end",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: 24,
            fontSize: 14,
            fontWeight: 600,
          }}
        >
          <a
            href="https://call.moristack.com"
            target="_blank"
            rel="noopener"
            style={{ color: "var(--call-accent)" }}
          >
            {c.footer.callLabel}
          </a>
          <a
            href="https://plan.moristack.com"
            target="_blank"
            rel="noopener"
            style={{ color: "var(--plan-accent)" }}
          >
            {c.footer.planLabel}
          </a>
          <a
            href={`mailto:${c.contactEmail}`}
            style={{ color: "var(--muted)" }}
          >
            {c.footer.contactLabel}
          </a>
        </div>
        <div className="text-fg-faint" style={{ fontSize: 13 }}>
          {c.footer.copyright}
        </div>
      </div>
    </footer>
  );
}
