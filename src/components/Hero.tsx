import type { Locale } from "@/lib/content";
import { getContent } from "@/lib/content";

export function Hero({ locale }: { locale: Locale }) {
  const c = getContent(locale);
  const d = c.hero.diagram;

  return (
    <section className="mx-auto grid max-w-7xl gap-14 px-6 py-16 sm:py-20 lg:grid-cols-2 lg:items-center lg:py-24">
      <div>
        <p className="mb-5 inline-block rounded-full border border-accent-soft bg-accent-soft px-3.5 py-1.5 text-xs font-semibold tracking-wide text-accent">
          {c.hero.eyebrow}
        </p>
        <p className="mb-2.5 text-sm font-bold text-accent">MORISTACK, made workable</p>
        <h1 className="display-title max-w-3xl text-4xl font-extrabold sm:text-5xl lg:text-[50px]">
          {c.hero.headline}
        </h1>
        <p className="mt-5 max-w-2xl text-[17px] leading-relaxed text-fg-soft">
          {c.hero.subhead}
        </p>
        <div className="mt-7 flex flex-wrap items-center gap-4">
          <a href="#services" className="rounded-full bg-accent px-7 py-4 text-center text-base font-bold text-white no-underline hover:bg-[var(--accent-hover)]">
            {c.hero.ctaPrimary}
          </a>
          <a href="#contact" className="font-bold text-accent no-underline hover:text-[var(--accent-hover)]">
            {c.hero.ctaSecondary}
          </a>
        </div>
      </div>

      <aside aria-hidden="true" className="flex min-h-60 flex-col items-center justify-center gap-[18px] rounded-[28px] border border-accent-soft bg-accent-soft p-8">
        <svg viewBox="0 0 320 100" className="w-full max-w-[320px]">
          <line x1="50" y1="52" x2="140" y2="44" stroke="var(--accent)" strokeWidth="2" strokeDasharray="6 8" />
          <line x1="182" y1="44" x2="270" y2="52" stroke="var(--accent)" strokeWidth="2" strokeDasharray="6 8" />
          <circle cx="30" cy="52" r="18" fill="white" stroke="var(--accent)" strokeWidth="2.5" />
          <circle cx="160" cy="40" r="27" fill="var(--accent)" />
          <circle cx="290" cy="52" r="18" fill="white" stroke="var(--accent)" strokeWidth="2.5" />
        </svg>
        <div className="flex w-full max-w-[320px] justify-between text-[12.5px] font-bold text-fg">
          <span className="w-20 text-center">{d.from}</span>
          <span className="w-[110px] text-center text-accent">MORISTACK</span>
          <span className="w-20 text-center">{d.to}</span>
        </div>
      </aside>
    </section>
  );
}
