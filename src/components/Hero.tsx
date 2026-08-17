import type { Locale } from "@/lib/content";
import { getContent } from "@/lib/content";

export function Hero({ locale }: { locale: Locale }) {
  const c = getContent(locale);
  const d = c.hero.diagram;

  return (
    <section className="relative mx-auto grid max-w-[1200px] items-center gap-12 px-6 pb-24 pt-12 md:grid-cols-[1.04fr_0.96fr] md:px-8 md:pb-28 md:pt-16 lg:gap-16">
      <div className="relative z-10">
        <div className="mb-6 inline-flex rounded-full border border-border bg-card/75 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-fg-softer shadow-sm">
          {c.hero.eyebrow}
        </div>
        <h1 className="max-w-[680px] text-[clamp(38px,5.2vw,68px)] font-black leading-[1.04] tracking-[-0.045em] text-fg text-balance">
          {c.hero.headline}
        </h1>
        <p className="mt-7 max-w-[590px] text-[17px] leading-[1.9] text-fg-soft md:text-[18px]">
          {c.hero.subhead}
        </p>
        <div className="mt-10 flex flex-wrap gap-3.5">
          <a
            href="#services"
            className="inline-flex rounded-full bg-accent px-7 py-4 text-[15px] font-bold text-bg shadow-[0_18px_45px_rgba(35,68,58,0.22)] transition hover:-translate-y-0.5 hover:opacity-95"
          >
            {c.hero.ctaPrimary}
          </a>
          <a
            href="#contact"
            className="inline-flex rounded-full border border-border bg-card/70 px-7 py-4 text-[15px] font-bold text-fg transition hover:-translate-y-0.5 hover:border-accent"
          >
            {c.hero.ctaSecondary}
          </a>
        </div>
      </div>

      <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card/80 p-7 shadow-[0_24px_80px_rgba(31,35,40,0.10)] backdrop-blur md:p-9">
        <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-[rgba(184,155,94,0.22)] blur-2xl" />
        <div className="absolute -bottom-20 -left-20 h-52 w-52 rounded-full bg-[rgba(35,68,58,0.12)] blur-2xl" />
        <div className="relative rounded-[1.5rem] border border-border bg-[#fbf8f1] p-6 md:p-8">
          <div className="mb-10 flex items-center justify-center">
            <span aria-hidden="true" className="h-5 w-5 shrink-0 rounded-full border-2 border-accent bg-card" />
            <span aria-hidden="true" className="mx-2 h-px max-w-20 flex-1 border-t border-dashed border-[#bdb4a4]" />
            <span aria-hidden="true" className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-accent text-xs font-black tracking-[0.14em] text-bg shadow-[0_16px_40px_rgba(35,68,58,0.25)]">
              MS
            </span>
            <span aria-hidden="true" className="mx-2 h-px max-w-20 flex-1 border-t border-dashed border-[#bdb4a4]" />
            <span aria-hidden="true" className="h-5 w-5 shrink-0 rounded-full border-2 border-accent bg-card" />
          </div>
          <div className="grid grid-cols-3 gap-3 text-center">
            <div className="rounded-2xl bg-card px-3 py-4 text-[13px] font-semibold text-fg-soft">{d.from}</div>
            <div className="rounded-2xl bg-accent px-3 py-4 text-[13px] font-extrabold text-bg">{d.mid}</div>
            <div className="rounded-2xl bg-card px-3 py-4 text-[13px] font-semibold text-fg-soft">{d.to}</div>
          </div>
        </div>
        <p className="relative mt-5 text-center text-[12px] font-semibold uppercase tracking-[0.18em] text-fg-faint">
          Human-reviewed support for Japan
        </p>
      </div>
    </section>
  );
}
