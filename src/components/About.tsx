import type { Locale } from "@/lib/content";
import { getContent } from "@/lib/content";

export function About({ locale }: { locale: Locale }) {
  const c = getContent(locale);

  return (
    <section id="about" className="bg-card px-6 py-16 sm:py-20">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-start">
        <div>
          <p className="text-xs font-bold tracking-wider text-accent">{c.about.eyebrow}</p>
          <h2 className="display-title mt-4 text-3xl font-extrabold sm:text-4xl">{c.about.title}</h2>
          <p className="mt-4 max-w-md leading-relaxed text-fg-soft">{c.about.body}</p>
        </div>
        <div className="grid gap-4" aria-label="MORISTACK principles">
          {c.about.principles.map((p) => (
            <article key={p.num} className="flex items-start gap-4 rounded-[14px] border border-border bg-bg px-5 py-4">
              <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-bold text-white">
                {Number(p.num)}
              </span>
              <span>
                <h3 className="font-bold text-fg">{p.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-fg-soft">{p.desc}</p>
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
