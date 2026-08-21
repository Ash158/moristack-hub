import type { CSSProperties } from "react";
import { content, type ServiceItemCopy } from "@/lib/content";
import { TrackedExternalLink } from "@/components/TrackedExternalLink";

function ServiceCard({ s }: { s: ServiceItemCopy }) {
  const accentStyle: CSSProperties = { color: `var(${s.accentVar})` };
  const accentSoftStyle: CSSProperties = {
    background: `var(${s.accentSoftVar})`,
    color: `var(${s.accentVar})`,
  };

  return (
    <article
      aria-label={s.title}
      className="group relative flex flex-col overflow-hidden rounded-[22px] border border-border bg-card p-7 transition hover:-translate-y-0.5 hover:border-accent-soft-line hover:shadow-[0_18px_50px_-30px_rgba(23,26,28,0.18)]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full opacity-50 blur-2xl transition group-hover:opacity-80"
        style={{ background: `var(${s.accentSoftVar})` }}
      />

      <header className="relative flex items-center justify-between gap-4">
        <span
          className="inline-flex items-center gap-2.5 rounded-full px-3 py-1.5 text-[11px] font-extrabold tracking-[0.16em]"
          style={accentSoftStyle}
        >
          <span
            aria-hidden="true"
            className="inline-block h-1.5 w-1.5 rounded-full"
            style={accentStyle}
          />
          {s.productName}
        </span>
      </header>

      <h3 className="display-title relative mt-5 text-[26px] font-extrabold leading-tight text-fg sm:text-[28px]">
        {s.title}
      </h3>
      <p className="relative mt-3 text-[15px] leading-relaxed text-fg-soft">
        {s.desc}
      </p>

      <ul className="relative mt-5 space-y-2.5">
        {s.bullets.map((b) => (
          <li key={b} className="flex items-start gap-2.5 text-sm text-fg">
            <span
              aria-hidden="true"
              className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full"
              style={accentStyle}
            />
            <span className="leading-relaxed">{b}</span>
          </li>
        ))}
      </ul>

      <div className="relative mt-6 flex items-center justify-between gap-3 border-t border-border-soft pt-5">
        <span className="text-sm font-bold" style={accentStyle}>
          {s.meta}
        </span>
        <TrackedExternalLink
          href={s.url}
          eventName="cross_sell_click"
          eventData={{ from: "hub", to: s.id, placement: "services_section" }}
          target="_blank"
          rel="noopener"
          className="inline-flex items-center gap-1.5 text-sm font-bold no-underline"
          style={accentStyle}
        >
          {s.cta}
          <span aria-hidden="true" className="text-base leading-none">
            →
          </span>
        </TrackedExternalLink>
      </div>
    </article>
  );
}

export function Services() {
  const c = content;

  return (
    <section id="services" className="bg-bg px-6 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="eyebrow text-accent">{c.services.eyebrow}</p>
          <h2 className="display-title mt-4 text-[32px] font-extrabold text-fg sm:text-[40px]">
            {c.services.title}
          </h2>
          <p className="mt-4 max-w-2xl text-[17px] leading-relaxed text-fg-soft">
            {c.services.body}
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {c.services.items.map((s) => (
            <ServiceCard key={s.id} s={s} />
          ))}
        </div>
      </div>
    </section>
  );
}
