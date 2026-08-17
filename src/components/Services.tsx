import type { Locale } from "@/lib/content";
import { getContent } from "@/lib/content";

export function Services({ locale }: { locale: Locale }) {
  const c = getContent(locale);
  return (
    <section
      id="services"
      className="mx-auto"
      style={{ maxWidth: 1200, padding: "100px 32px" }}
    >
      <div
        className="font-bold tracking-[0.08em] text-fg-soft"
        style={{ fontSize: 12, marginBottom: 14 }}
      >
        {c.services.eyebrow}
      </div>
      <h2
        style={{
          fontSize: "clamp(26px, 3.2vw, 36px)",
          fontWeight: 800,
          letterSpacing: "-0.01em",
          margin: "0 0 48px",
        }}
      >
        {c.services.title}
      </h2>
      <div
        className="grid"
        style={{ gridTemplateColumns: "1fr 1fr", gap: 28 }}
      >
        {c.services.items.map((s) => (
          <a
            key={s.id}
            href={s.url}
            target="_blank"
            rel="noopener"
            className="flex flex-col gap-4 rounded-3xl border border-border bg-bg transition hover:border-fg"
            style={{ padding: 40 }}
          >
            <span
              className="self-start rounded-full font-extrabold tracking-[0.04em]"
              style={{
                display: "inline-block",
                padding: "5px 12px",
                fontSize: 12,
                background: s.accentBg,
                color: s.accent,
              }}
            >
              {s.badge}
            </span>
            <div
              className="font-extrabold"
              style={{ fontSize: 21, letterSpacing: "-0.01em" }}
            >
              {s.title}
            </div>
            <div
              className="flex-grow text-fg-soft"
              style={{ fontSize: 15, lineHeight: 1.7 }}
            >
              {s.desc}
            </div>
            <div
              className="font-bold"
              style={{ fontSize: 13, color: s.accent }}
            >
              {s.meta}
            </div>
            <span
              className="mt-2 rounded-full text-center font-bold"
              style={{
                border: `1px solid ${s.accent}`,
                color: s.accent,
                padding: "12px 20px",
                fontSize: 14,
              }}
            >
              {s.cta} →
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
