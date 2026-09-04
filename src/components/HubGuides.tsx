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
      "Whether tattoos are allowed at Japanese onsen and sento, how to find a tattoo-friendly bath, and basic bathing etiquette.",
  },
  {
    slug: "health-insurance-vs-travel-insurance-japan",
    title: "Health Insurance vs Travel Insurance in Japan",
    excerpt:
      "The difference between a Japanese hoken-sho and foreign travel insurance at a clinic: who pays what, and when.",
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

function GuideCard({ slug, title, excerpt }: { slug: string; title: string; excerpt: string }) {
  return (
    <Link
      href={`/guides/${slug}`}
      className="group flex h-full flex-col rounded-[18px] border border-border bg-card p-6 no-underline transition hover:-translate-y-0.5 hover:border-accent-soft-line hover:shadow-[0_18px_50px_-30px_rgba(23,26,28,0.18)]"
    >
      <span className="text-base font-extrabold text-fg group-hover:text-accent">{title}</span>
      <span className="mt-3 block text-sm leading-relaxed text-fg-soft">{excerpt}</span>
      <span className="mt-5 inline-flex items-center gap-1 text-sm font-bold text-accent">
        Read guide <span aria-hidden="true">→</span>
      </span>
    </Link>
  );
}

export function HubGuides() {
  return (
    <section
      id="guides-hub"
      aria-labelledby="hub-guides-heading"
      className="border-t border-border bg-bg px-6 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex max-w-3xl flex-wrap items-baseline justify-between gap-4">
          <div>
            <p className="eyebrow text-accent">PRACTICAL GUIDES</p>
            <h2
              id="hub-guides-heading"
              className="display-title mt-4 text-[32px] font-extrabold text-fg sm:text-[40px]"
            >
              Japan, explained in plain terms.
            </h2>
            <p className="mt-4 max-w-2xl text-[17px] leading-relaxed text-fg-soft">
              Practical write-ups on the parts of Japan that trip people up — for visitors and residents alike, not tied to CALL or PLAN.
            </p>
          </div>
          <Link
            href="/guides"
            className="whitespace-nowrap text-sm font-bold text-accent no-underline hover:underline"
          >
            See all guides →
          </Link>
        </div>

        <ul className="mt-12 grid gap-5 lg:grid-cols-3">
          {PRACTICAL_GUIDES.map((g) => (
            <li key={g.slug}>
              <GuideCard {...g} />
            </li>
          ))}
        </ul>

        <div className="mt-16 max-w-3xl border-t border-border-soft pt-12">
          <p className="eyebrow text-fg-soft">FROM MORISTACK</p>
          <h3 className="mt-3 text-xl font-extrabold text-fg">Notes on how we work.</h3>
          <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-fg-soft">
            What to expect when you send a request, and how CALL and PLAN differ.
          </p>
        </div>
        <ul className="mt-6 grid gap-5 lg:grid-cols-3">
          {COMPANY_NOTES.map((g) => (
            <li key={g.slug}>
              <GuideCard {...g} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
