import type { Locale } from "@/lib/content";
import { getContent } from "@/lib/content";

export function Founder({ locale }: { locale: Locale }) {
  const c = getContent(locale);
  return (
    <section id="founder" className="bg-card-muted px-6 py-16 sm:py-20">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-10">
        <div>
          <p className="text-xs font-bold tracking-wider text-accent">{c.founder.eyebrow}</p>
          <h2 className="mt-3 text-2xl font-extrabold sm:text-3xl">{c.founder.title}</h2>
          <p className="mt-3 max-w-3xl leading-relaxed text-fg-soft">{c.founder.body}</p>
        </div>
        <a href="#contact" className="whitespace-nowrap rounded-full border border-border bg-card px-6 py-3.5 text-center font-bold text-fg no-underline hover:border-accent">
          Contact MORISTACK
        </a>
      </div>
    </section>
  );
}
