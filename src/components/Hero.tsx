import type { Locale } from "@/lib/content";
import { getContent } from "@/lib/content";

export function Hero({ locale }: { locale: Locale }) {
  const c = getContent(locale);
  const d = c.hero.diagram;

  return (
    <section className="mx-auto grid w-full max-w-[1000px] items-center gap-12 px-6 pb-20 pt-14 sm:pt-24 md:grid-cols-[1.05fr_0.95fr] md:pb-24">
      <div className="min-w-0">
        <p className="inline-block rounded-full bg-card-muted px-3.5 py-1.5 text-[12.5px] font-bold tracking-[0.06em] text-fg-soft">
          {c.hero.eyebrow}
        </p>
        <h1 className="mt-6 max-w-[720px] text-4xl font-extrabold leading-[1.15] tracking-[-0.035em] sm:text-[54px]">
          {c.hero.headline}
        </h1>
        <p className="mt-5 max-w-[590px] text-lg leading-relaxed text-fg-soft">
          {c.hero.subhead}
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <a href="#services" className="inline-flex min-h-11 items-center rounded-full bg-accent px-5 text-sm font-semibold text-white transition hover:bg-[var(--accent-hover)]">
            {c.hero.ctaPrimary}
          </a>
          <a href="#contact" className="inline-flex min-h-11 items-center rounded-full border border-border bg-card px-5 text-sm font-semibold text-fg transition hover:border-fg/30">
            {c.hero.ctaSecondary}
          </a>
        </div>
      </div>

      <div className="min-w-0 rounded-[22px] border border-border bg-card p-5 shadow-sm">
        <div className="rounded-[18px] border border-border bg-bg p-6">
          <div className="flex items-center justify-center gap-2.5">
            <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full bg-[var(--call-accent)]" />
            <span aria-hidden="true" className="h-px w-16 bg-border" />
            <span className="rounded-full bg-accent-soft px-3 py-1.5 text-[11px] font-bold tracking-[0.12em] text-accent">MORISTACK</span>
            <span aria-hidden="true" className="h-px w-16 bg-border" />
            <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full bg-[var(--plan-accent)]" />
          </div>
          <div className="mt-8 grid grid-cols-3 overflow-hidden rounded-[14px] border border-border bg-border text-center text-[13px] font-semibold">
            <div className="bg-card px-3 py-4 text-fg-soft">{d.from}</div>
            <div className="bg-card px-3 py-4 text-fg">{d.mid}</div>
            <div className="bg-card px-3 py-4 text-fg-soft">{d.to}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
