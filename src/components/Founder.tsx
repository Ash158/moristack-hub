import type { Locale } from "@/lib/content";
import { getContent } from "@/lib/content";

export function Founder({ locale }: { locale: Locale }) {
  const c = getContent(locale);
  return (
    <section id="founder" className="border-y border-border bg-card">
      <div className="mx-auto max-w-[1000px] px-6 py-18 sm:py-20">
        <p className="text-[12.5px] font-bold tracking-[0.06em] text-fg-soft">{c.founder.eyebrow}</p>
        <h2 className="mt-5 max-w-[720px] text-3xl font-extrabold leading-tight tracking-[-0.02em] sm:text-[40px]">
          {c.founder.title}
        </h2>
        <p className="mt-5 max-w-[720px] text-[17px] leading-relaxed text-fg-soft">
          {c.founder.body}
        </p>
      </div>
    </section>
  );
}
