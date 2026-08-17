import type { Locale } from "@/lib/content";
import { getContent } from "@/lib/content";

export function About({ locale }: { locale: Locale }) {
  const c = getContent(locale);

  return (
    <section id="about" className="border-y border-border bg-card/55">
      <div className="mx-auto max-w-[1200px] px-6 py-20 md:px-8 md:py-24">
        <div className="text-[12px] font-bold uppercase tracking-[0.16em] text-fg-softer">
          {c.about.eyebrow}
        </div>
        <div className="mt-5 grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
          <h2 className="max-w-[560px] text-[clamp(28px,3.5vw,44px)] font-black leading-[1.12] tracking-[-0.035em] text-balance">
            {c.about.title}
          </h2>
          <div>
            <p className="max-w-[680px] text-[17px] leading-[1.9] text-fg-soft">
              {c.about.body}
            </p>
            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              {c.about.principles.map((p) => (
                <div key={p.num} className="rounded-[1.35rem] border border-border bg-bg/70 p-5">
                  <div className="mb-4 text-[12px] font-black text-fg-faint">{p.num}</div>
                  <div className="text-[16px] font-extrabold leading-snug">{p.title}</div>
                  <div className="mt-3 text-[14px] leading-[1.7] text-fg-soft">{p.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
