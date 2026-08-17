import type { Locale } from "@/lib/content";
import { getContent } from "@/lib/content";

export function Services({ locale }: { locale: Locale }) {
  const c = getContent(locale);
  return (
    <section id="services" className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
      <p className="mb-4 text-xs font-bold tracking-wider text-accent">{c.services.eyebrow}</p>
      <h2 className="display-title max-w-3xl text-3xl font-extrabold sm:text-4xl">{c.services.title}</h2>
      <div className="mt-8 overflow-hidden rounded-[18px] border border-border bg-border">
        {c.services.items.map((s) => (
          <a key={s.id} href={s.url} target="_blank" rel="noopener" className="flex items-start gap-[18px] bg-card px-7 py-[26px] transition hover:bg-bg">
            <span aria-hidden="true" className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full" style={{ backgroundColor: s.accent }} />
            <span className="min-w-0 flex-1">
              <span className="flex flex-wrap items-center gap-2.5">
                <span className="text-lg font-bold tracking-tight">{s.title}</span>
                <span className="rounded-full px-[9px] py-[3px] text-[11.5px] font-bold" style={{ backgroundColor: s.accentBg, color: s.accent }}>{s.badge}</span>
              </span>
              <span className="mt-1.5 block max-w-[760px] text-[14.5px] leading-relaxed text-fg-soft">{s.desc}</span>
              <span className="mt-3 block text-[13px] font-bold" style={{ color: s.accent }}>{s.meta}</span>
            </span>
            <span aria-hidden="true" className="shrink-0 text-lg text-fg-faint">↗</span>
          </a>
        ))}
      </div>
    </section>
  );
}
