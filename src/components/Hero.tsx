import type { Locale } from "@/lib/content";
import { getContent } from "@/lib/content";

export function Hero({ locale }: { locale: Locale }) {
  const c = getContent(locale);
  const d = c.hero.diagram;

  return (
    <section
      className="mx-auto grid items-center"
      style={{
        maxWidth: 1200,
        padding: "36px 32px 110px",
        gridTemplateColumns: "1.05fr 0.95fr",
        gap: 64,
      }}
    >
      <div>
        <div
          className="inline-block rounded-full font-bold tracking-[0.08em]"
          style={{
            padding: "6px 14px",
            background: "var(--card)",
            color: "var(--muted)",
            fontSize: 12,
            marginBottom: 22,
          }}
        >
          {c.hero.eyebrow}
        </div>
        <h1
          style={{
            fontSize: "clamp(34px, 4.6vw, 54px)",
            fontWeight: 900,
            lineHeight: 1.14,
            letterSpacing: "-0.02em",
            margin: "0 0 24px",
            textWrap: "pretty",
          }}
        >
          {c.hero.headline}
        </h1>
        <p
          className="text-fg-soft"
          style={{
            fontSize: 18,
            lineHeight: 1.7,
            maxWidth: 520,
            margin: "0 0 34px",
          }}
        >
          {c.hero.subhead}
        </p>
        <div className="flex flex-wrap gap-3.5">
          <a
            href="#services"
            className="inline-block rounded-full font-bold transition hover:opacity-90"
            style={{
              background: "var(--accent)",
              color: "var(--background)",
              padding: "15px 26px",
              fontSize: 15,
            }}
          >
            {c.hero.ctaPrimary}
          </a>
          <a
            href="#contact"
            className="inline-block rounded-full font-bold transition hover:bg-card"
            style={{
              border: "1px solid var(--border)",
              color: "var(--foreground)",
              padding: "15px 26px",
              fontSize: 15,
            }}
          >
            {c.hero.ctaSecondary}
          </a>
        </div>
      </div>

      <div
        className="rounded-3xl"
        style={{
          background: "var(--card)",
          padding: "52px 36px",
        }}
      >
        <div
          className="flex items-center justify-center"
          style={{ marginBottom: 16 }}
        >
          <span
            aria-hidden="true"
            style={{
              width: 20,
              height: 20,
              borderRadius: "50%",
              border: "2px solid var(--accent)",
              background: "var(--background)",
              flexShrink: 0,
            }}
          />
          <span
            aria-hidden="true"
            style={{
              flex: 1,
              maxWidth: 56,
              borderTop: "2px dashed #c1beb2",
              margin: "0 2px",
            }}
          />
          <span
            aria-hidden="true"
            style={{
              width: 30,
              height: 30,
              borderRadius: "50%",
              background: "var(--accent)",
              flexShrink: 0,
            }}
          />
          <span
            aria-hidden="true"
            style={{
              flex: 1,
              maxWidth: 56,
              borderTop: "2px dashed #c1beb2",
              margin: "0 2px",
            }}
          />
          <span
            aria-hidden="true"
            style={{
              width: 20,
              height: 20,
              borderRadius: "50%",
              border: "2px solid var(--accent)",
              background: "var(--background)",
              flexShrink: 0,
            }}
          />
        </div>
        <div className="flex justify-between text-center">
          <div
            className="font-semibold text-fg-soft"
            style={{ fontSize: 13, maxWidth: 80 }}
          >
            {d.from}
          </div>
          <div className="font-extrabold" style={{ fontSize: 13, maxWidth: 100 }}>
            {d.mid}
          </div>
          <div
            className="font-semibold text-fg-soft"
            style={{ fontSize: 13, maxWidth: 100 }}
          >
            {d.to}
          </div>
        </div>
      </div>
    </section>
  );
}
