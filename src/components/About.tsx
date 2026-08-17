import type { Locale } from "@/lib/content";
import { getContent } from "@/lib/content";

export function About({ locale }: { locale: Locale }) {
  const c = getContent(locale);

  return (
    <section id="about" className="border-y border-border bg-card">
      <div className="mx-auto grid max-w-[1000px] gap-10 px-6 py-18 sm:py-20 md:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-[12.5px] font-bold tracking-[0.06em] text-fg-soft">{c.about.eyebrow}</p>
          <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-[-0.02em] sm:text-[40px]">
            {c.about.title}
          </h2>
        </div>
        <div>
          <p className="text-[17px] leading-relaxed text-fg-soft">{c.about.body}</p>
          <div className="mt-9 grid gap-0 overflow-hidden rounded-[18px] border border-border bg-border sm:grid-cols-3">
            {c.about.principles.map((p) => (
              <div key={p.num} className="bg-card px-5 py-6">
                <div className="text-[12px] font-bold text-fg-faint">{p.num}</div>
                <div className="mt-4 text-[16px] font-bold tracking-tight">{p.title}</div>
                <div className="mt-2 text-[14px] leading-relaxed text-fg-soft">{p.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
