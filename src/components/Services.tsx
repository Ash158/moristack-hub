import type { Locale } from "@/lib/content";
import { getContent } from "@/lib/content";

export function Services({ locale }: { locale: Locale }) {
  const c = getContent(locale);
  return (
    <section id="services" className="mx-auto max-w-[1000px] px-6 py-18 sm:py-20">
      <p className="text-[12.5px] font-bold tracking-[0.06em] text-fg-soft">{c.services.eyebrow}</p>
      <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-[-0.02em] sm:text-[40px]">
        {c.services.title}
      </h2>
      <div className="mt-8 overflow-hidden rounded-[18px] border border-border bg-border">
        {c.services.items.map((s) => (
          <a key={s.id} href={s.url} target="_blank" rel="noopener" className="flex items-start gap-[18px] bg-card px-6 py-7 transition hover:bg-bg sm:px-7">
            <span aria-hidden="true" className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full" style={{ backgroundColor: s.accent }} />
            <span className="min-w-0 flex-1">
              <span className="flex flex-wrap items-center gap-2.5">
                <span className="text-lg font-bold tracking-tight sm:text-xl">{s.title}</span>
                <span className="rounded-full px-[9px] py-[3px] text-[11.5px] font-bold" style={{ backgroundColor: s.accentBg, color: s.accent }}>{s.badge}</span>
              </span>
              <span className="mt-2 block max-w-[680px] text-[14.5px] leading-relaxed text-fg-soft">{s.desc}</span>
              <span className="mt-4 block text-[13px] font-bold" style={{ color: s.accent }}>{s.meta}</span>
            </span>
            <span aria-hidden="true" className="shrink-0 text-lg text-fg-faint">↗</span>
          </a>
        ))}
      </div>
    </section>
  );
}
