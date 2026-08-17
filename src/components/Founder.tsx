import type { Locale } from "@/lib/content";
import { getContent } from "@/lib/content";

export function Founder({ locale }: { locale: Locale }) {
  const c = getContent(locale);
  return (
    <section id="founder" className="bg-[#1f2f2a] text-bg">
      <div className="mx-auto max-w-[1200px] px-6 py-20 md:px-8 md:py-24">
        <div className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#d8c69c]">
          {c.founder.eyebrow}
        </div>
        <h2 className="mt-5 max-w-[720px] text-[clamp(28px,3.5vw,44px)] font-black leading-[1.12] tracking-[-0.035em] text-balance">
          {c.founder.title}
        </h2>
        <p className="mt-6 max-w-[720px] text-[17px] leading-[1.9] text-[#e6dfd1]">
          {c.founder.body}
        </p>
      </div>
    </section>
  );
}
