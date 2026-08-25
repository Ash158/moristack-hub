import Link from "next/link";

const HUB_GUIDES = [
  {
    slug: "how-moristack-handles-your-request",
    title: "How MORISTACK handles your request",
    excerpt:
      "What happens between sending a request and the work starting — in four short steps.",
  },
  {
    slug: "call-vs-plan",
    title: "CALL vs PLAN — which one fits your request",
    excerpt:
      "Two services, two jobs. A short guide to picking the right one before you send the form.",
  },
  {
    slug: "what-reviewed-up-front-means",
    title: "What 'reviewed up front' actually means",
    excerpt:
      "One of our three working principles, broken down into what it does in practice.",
  },
  {
    slug: "cash-vs-ic-card-in-japan-2026",
    title: "Cash vs IC Card in Japan 2026: When You Still Need Yen",
    excerpt:
      "Where IC cards (Suica, Pasmo, ICOCA) work, where cash is still required, and how much yen to bring for a typical trip.",
  },
];

export function HubGuides() {
  return (
    <section
      id="guides-hub"
      aria-labelledby="hub-guides-heading"
      className="border-t border-border bg-bg px-6 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="eyebrow text-accent">FROM MORISTACK</p>
          <h2
            id="hub-guides-heading"
            className="display-title mt-4 text-[32px] font-extrabold text-fg sm:text-[40px]"
          >
            Notes on how we work.
          </h2>
          <p className="mt-4 max-w-2xl text-[17px] leading-relaxed text-fg-soft">
            Short, practical notes from MORISTACK — what to expect when you send a request, and how the two services differ.
          </p>
        </div>

        <ul className="mt-12 grid gap-5 lg:grid-cols-3">
          {HUB_GUIDES.map((g) => (
            <li key={g.slug}>
              <Link
                href={`/guides/${g.slug}`}
                className="group flex h-full flex-col rounded-[18px] border border-border bg-card p-6 no-underline transition hover:-translate-y-0.5 hover:border-accent-soft-line hover:shadow-[0_18px_50px_-30px_rgba(23,26,28,0.18)]"
              >
                <span className="text-base font-extrabold text-fg group-hover:text-accent">
                  {g.title}
                </span>
                <span className="mt-3 block text-sm leading-relaxed text-fg-soft">
                  {g.excerpt}
                </span>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-bold text-accent">
                  Read note <span aria-hidden="true">→</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
