import type { Metadata } from "next";
import Link from "next/link";

const PRACTICAL_GUIDES = [
  {
    slug: "cash-vs-ic-card-in-japan-2026",
    title: "Cash vs IC Card in Japan 2026: When You Still Need Yen",
    excerpt:
      "Where IC cards (Suica, Pasmo, ICOCA) work, where cash is still required, and how much yen to bring for a typical trip.",
  },
  {
    slug: "onsen-sento-tattoo-etiquette-japan",
    title: "Onsen and Sento With Tattoos: What's Actually Allowed",
    excerpt:
      "Whether tattoos are allowed at Japanese onsen and sento, how to find a tattoo-friendly bath, cover-up stickers, and basic bathing etiquette.",
  },
  {
    slug: "health-insurance-vs-travel-insurance-japan",
    title: "Health Insurance vs Travel Insurance in Japan: How Payment Actually Works",
    excerpt:
      "The difference between a Japanese hoken-sho and foreign travel insurance at a clinic: who pays what, when, and what paperwork each system needs.",
  },
];

const COMPANY_NOTES = [
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
];

export const metadata: Metadata = {
  title: "Guides",
  description:
    "Practical guides to Japan — onsen tattoo policy, health insurance vs travel insurance, cash vs IC card — plus short notes on how MORISTACK works.",
  alternates: { canonical: "/guides" },
};

function GuideList({ items }: { items: typeof PRACTICAL_GUIDES }) {
  return (
    <ul className="mt-8 grid gap-4">
      {items.map((g) => (
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
              Read guide <span aria-hidden="true">→</span>
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default function GuidesIndex() {
  return (
    <>
      <section className="px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-3xl">
          <p className="eyebrow text-accent">GUIDES</p>
          <h1 className="display-title mt-4 text-[36px] font-extrabold text-fg sm:text-[44px]">
            Japan, explained in plain terms.
          </h1>
          <p className="mt-5 text-[17px] leading-relaxed text-fg-soft">
            Practical write-ups on the parts of Japan that trip people up — for visitors and residents alike. Plus a few short notes on how MORISTACK itself works.
          </p>

          <h2 className="mt-14 text-2xl font-extrabold text-fg">Practical guides</h2>
          <GuideList items={PRACTICAL_GUIDES} />

          <h2 className="mt-16 text-2xl font-extrabold text-fg">Notes on how we work</h2>
          <GuideList items={COMPANY_NOTES} />
        </div>
      </section>
    </>
  );
}
