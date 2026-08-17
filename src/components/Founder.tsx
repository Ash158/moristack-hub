import type { Locale } from "@/lib/content";
import { getContent } from "@/lib/content";

export function Founder({ locale }: { locale: Locale }) {
  const c = getContent(locale);
  return (
    <section
      id="founder"
      style={{ background: "var(--card)" }}
    >
      <div
        className="mx-auto"
        style={{ maxWidth: 1200, padding: "90px 32px" }}
      >
        <div
          className="font-bold tracking-[0.08em] text-fg-soft"
          style={{ fontSize: 12, marginBottom: 14 }}
        >
          {c.founder.eyebrow}
        </div>
        <h2
          style={{
            fontSize: "clamp(26px, 3.2vw, 36px)",
            fontWeight: 800,
            letterSpacing: "-0.01em",
            margin: "0 0 18px",
            maxWidth: 680,
          }}
        >
          {c.founder.title}
        </h2>
        <p
          className="text-fg-soft"
          style={{
            fontSize: 17,
            lineHeight: 1.75,
            maxWidth: 640,
            margin: 0,
          }}
        >
          {c.founder.body}
        </p>
      </div>
    </section>
  );
}
