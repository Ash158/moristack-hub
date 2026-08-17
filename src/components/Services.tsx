import type { Locale } from "@/lib/content";
import { getContent } from "@/lib/content";

export function Services({ locale }: { locale: Locale }) {
  const c = getContent(locale);
  return (
    <section id="services" className="mx-auto max-w-[1200px] px-6 py-20 md:px-8 md:py-24">
      <div className="text-[12px] font-bold uppercase tracking-[0.16em] text-fg-softer">
        {c.services.eyebrow}
      </div>
      <h2 className="mt-5 max-w-[720px] text-[clamp(28px,3.5vw,44px)] font-black leading-[1.12] tracking-[-0.035em] text-balance">
        {c.services.title}
      </h2>
      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {c.services.items.map((s) => (
          <a
            key={s.id}
            href={s.url}
            target="_blank"
            rel="noopener"
            className="group relative flex min-h-[360px] flex-col overflow-hidden rounded-[2rem] border border-border bg-card p-7 shadow-[0_20px_70px_rgba(31,35,40,0.06)] transition hover:-translate-y-1 hover:border-fg/25 hover:shadow-[0_28px_90px_rgba(31,35,40,0.11)] md:p-9"
          >
            <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full opacity-80 blur-2xl transition group-hover:scale-110" style={{ background: s.accentBg }} />
            <div className="relative">
              <span
                className="inline-flex rounded-full px-3 py-1.5 text-[12px] font-black tracking-[0.12em]"
                style={{ background: s.accentBg, color: s.accent }}
              >
                {s.badge}
              </span>
              <h3 className="mt-8 max-w-[430px] text-[clamp(24px,2.5vw,34px)] font-black leading-[1.12] tracking-[-0.03em]">
                {s.title}
              </h3>
              <p className="mt-5 max-w-[520px] flex-grow text-[15px] leading-[1.85] text-fg-soft">
                {s.desc}
              </p>
            </div>
            <div className="relative mt-auto pt-9">
              <div className="mb-4 text-[13px] font-bold" style={{ color: s.accent }}>
                {s.meta}
              </div>
              <span
                className="inline-flex rounded-full border px-5 py-3 text-[14px] font-bold transition group-hover:text-bg"
                style={{ borderColor: s.accent, color: s.accent }}
              >
                {s.cta} →
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
