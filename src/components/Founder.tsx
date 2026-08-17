import type { Locale } from "@/lib/content";
import { getContent } from "@/lib/content";

function CompanyMark() {
  return (
    <svg
      viewBox="0 0 120 120"
      className="h-full w-full"
      role="img"
      aria-label="MORISTACK"
    >
      <defs>
        <linearGradient id="companyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.95" />
          <stop offset="100%" stopColor="var(--accent-deep)" stopOpacity="0.95" />
        </linearGradient>
      </defs>
      <rect x="6" y="6" width="108" height="108" rx="22" fill="url(#companyGrad)" />
      <rect
        x="6"
        y="6"
        width="108"
        height="108"
        rx="22"
        fill="none"
        stroke="white"
        strokeOpacity="0.18"
        strokeWidth="1"
      />
      <text
        x="60"
        y="58"
        textAnchor="middle"
        fontSize="32"
        fontWeight="800"
        fill="white"
        style={{ letterSpacing: "-0.04em" }}
      >
        M
      </text>
      <rect x="52" y="68" width="16" height="3" fill="white" fillOpacity="0.9" />
      <text
        x="60"
        y="92"
        textAnchor="middle"
        fontSize="8"
        fontWeight="700"
        fill="white"
        fillOpacity="0.85"
        style={{ letterSpacing: "0.28em" }}
      >
        MORISTACK
      </text>
    </svg>
  );
}

export function Founder({ locale }: { locale: Locale }) {
  const c = getContent(locale);
  const contactLabel = locale === "ja" ? "メールで相談" : "Email us";

  return (
    <section
      id="founder"
      aria-labelledby="founder-heading"
      className="px-6 py-20 sm:py-24"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[260px_1fr]">
        <div aria-hidden="true" className="relative mx-auto h-60 w-60 lg:mx-0">
          <div
            className="absolute -inset-3 rounded-[28px] bg-accent-soft blur-xl"
            aria-hidden="true"
          />
          <div className="relative h-full w-full overflow-hidden rounded-[28px] shadow-[0_20px_60px_-30px_rgba(15,29,58,0.6)]">
            <CompanyMark />
          </div>
        </div>

        <div className="max-w-2xl">
          <p className="eyebrow text-accent">{c.founder.eyebrow}</p>
          <h2
            id="founder-heading"
            className="display-title mt-4 text-[32px] font-extrabold text-fg sm:text-[40px]"
          >
            {c.founder.title}
          </h2>
          <p className="mt-5 text-[17px] leading-relaxed text-fg-soft">
            {c.founder.body}
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
            <span className="font-extrabold tracking-wide text-fg">
              {c.founder.address}
            </span>
            <a
              href={`mailto:${c.contactEmail}`}
              className="ml-auto inline-flex items-center gap-2 rounded-full border border-fg/15 bg-card px-5 py-2.5 font-bold text-fg no-underline transition hover:border-fg hover:bg-fg hover:text-card"
            >
              {contactLabel}
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
