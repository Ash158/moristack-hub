import type { Metadata } from "next";
import Link from "next/link";

const GUIDES = [
  {
    slug: "how-moristack-handles-your-request",
    title: "How MORISTACK handles your request",
    excerpt:
      "What happens between sending a request and the work starting — step by step.",
  },
  {
    slug: "call-vs-plan",
    title: "CALL vs PLAN — which one fits your request",
    excerpt:
      "Different services, different jobs. A short guide to picking the right one before you send the form.",
  },
  {
    slug: "what-reviewed-up-front-means",
    title: "What 'reviewed up front' actually means",
    excerpt:
      "A working principle, broken down into what it does in practice.",
  },
  {
    slug: "cash-vs-ic-card-in-japan-2026",
    title: "Cash vs IC Card in Japan 2026: When You Still Need Yen",
    excerpt:
      "Where IC cards (Suica, Pasmo, ICOCA) work, where cash is still required, and how much yen to bring for a typical trip.",
  },
];

export const metadata: Metadata = {
  title: "Notes from MORISTACK",
  description:
    "Short, practical notes from MORISTACK on how requests are handled and how CALL and PLAN differ.",
  alternates: { canonical: "/guides" },
};

export default function GuidesIndex() {
  return (
    <>
      <section className="px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-3xl">
          <p className="eyebrow text-accent">NOTES</p>
          <h1 className="display-title mt-4 text-[36px] font-extrabold text-fg sm:text-[44px]">
            Notes from MORISTACK.
          </h1>
          <p className="mt-5 text-[17px] leading-relaxed text-fg-soft">
            Practical notes on how we work, what to expect when you send a request, and how CALL and PLAN differ. Each one is short.
          </p>
          <ul className="mt-10 grid gap-4">
            {GUIDES.map((g) => (
              <li key={g.slug}>
                <Link
                  href={`/guides/${g.slug}`}
                  className="group flex flex-col rounded-[16px] border border-border bg-card p-6 no-underline transition hover:-translate-y-0.5 hover:border-accent-soft-line"
                >
                  <span className="text-base font-extrabold text-fg group-hover:text-accent">
                    {g.title}
                  </span>
                  <span className="mt-2 text-sm leading-relaxed text-fg-soft">
                    {g.excerpt}
                  </span>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-accent">
                    Read note <span aria-hidden="true">→</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
