import type { Locale } from "@/lib/content";
import { getContent } from "@/lib/content";

export function About({ locale }: { locale: Locale }) {
  const c = getContent(locale);

  return (
    <section
      id="about"
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
          {c.about.eyebrow}
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
          {c.about.title}
        </h2>
        <p
          className="text-fg-soft"
          style={{
            fontSize: 17,
            lineHeight: 1.75,
            maxWidth: 640,
            margin: "0 0 56px",
          }}
        >
          {c.about.body}
        </p>
        <div
          className="grid"
          style={{ gridTemplateColumns: "repeat(3, 1fr)", gap: 36 }}
        >
          {c.about.principles.map((p) => (
            <div key={p.num}>
              <div
                className="font-extrabold"
                style={{
                  fontSize: 13,
                  color: "var(--muted-faint)",
                  marginBottom: 10,
                }}
              >
                {p.num}
              </div>
              <div
                className="font-bold"
                style={{ fontSize: 17, marginBottom: 8 }}
              >
                {p.title}
              </div>
              <div
                className="text-fg-soft"
                style={{ fontSize: 15, lineHeight: 1.6 }}
              >
                {p.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
