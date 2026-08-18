import type { Locale } from "@/lib/content";
import { getContent } from "@/lib/content";

function FlowDiagram({ from, mid, to }: { from: string; mid: string; to: string }) {
  return (
    <div className="relative w-full">
      <svg
        viewBox="0 0 360 200"
        className="w-full"
        role="img"
        aria-label={`${from} ${mid} ${to}`}
      >
        <defs>
          <marker
            id="arrow"
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--accent)" />
          </marker>
        </defs>

        {/* connecting lines with arrowheads */}
        <line
          x1="84"
          y1="100"
          x2="158"
          y2="100"
          stroke="var(--accent)"
          strokeWidth="1.5"
          strokeDasharray="5 6"
          markerEnd="url(#arrow)"
          opacity="0.5"
        />
        <line
          x1="202"
          y1="100"
          x2="276"
          y2="100"
          stroke="var(--accent)"
          strokeWidth="1.5"
          strokeDasharray="5 6"
          markerEnd="url(#arrow)"
          opacity="0.5"
        />

        {/* left node — You */}
        <circle cx="55" cy="100" r="27" fill="white" stroke="var(--accent)" strokeWidth="2" />
        <text
          x="55"
          y="105"
          textAnchor="middle"
          fontSize="9.5"
          fontWeight="700"
          fill="var(--foreground)"
          style={{ letterSpacing: "0.01em" }}
        >
          {from}
        </text>

        {/* center node — MORISTACK */}
        <circle cx="180" cy="100" r="34" fill="var(--accent)" />
        <text
          x="180"
          y="96"
          textAnchor="middle"
          fontSize="9"
          fontWeight="800"
          fill="white"
          style={{ letterSpacing: "0.18em" }}
        >
          MORI
        </text>
        <text
          x="180"
          y="110"
          textAnchor="middle"
          fontSize="9"
          fontWeight="800"
          fill="white"
          style={{ letterSpacing: "0.18em" }}
        >
          STACK
        </text>
        <text
          x="180"
          y="148"
          textAnchor="middle"
          fontSize="10"
          fontWeight="700"
          fill="var(--accent-deep)"
          style={{ letterSpacing: "0.06em" }}
        >
          {mid}
        </text>

        {/* right node — Destination */}
        <circle cx="305" cy="100" r="27" fill="white" stroke="var(--accent)" strokeWidth="2" />
        <text
          x="305"
          y="105"
          textAnchor="middle"
          fontSize="9.5"
          fontWeight="700"
          fill="var(--foreground)"
          style={{ letterSpacing: "0.01em" }}
        >
          {to}
        </text>
      </svg>
    </div>
  );
}

function TrustStrip({ locale }: { locale: Locale }) {
  const items =
    locale === "ja"
      ? [
          { label: "人が確認", note: "人が依頼内容を読んで着手" },
          { label: "明朗会計", note: "範囲と料金を先に提示" },
          { label: "MORISTACK", note: "日本のお客様向けに運営" },
          { label: "完了時のみ課金", note: "CALLは通話を完了して初めて請求" },
        ]
      : [
          { label: "Human-reviewed", note: "A person reads your request first" },
          { label: "Up-front pricing", note: "Scope and cost confirmed before work" },
          { label: "MORISTACK", note: "Operated as MORISTACK" },
          { label: "Pay on completion", note: "CALL only bills when the call is made" },
        ];
  return (
    <ul
      className="mt-14 grid grid-cols-2 gap-x-6 gap-y-4 border-y border-border py-6 sm:grid-cols-4"
      aria-label={locale === "ja" ? "MORISTACKの約束" : "MORISTACK guarantees"}
    >
      {items.map((item) => (
        <li key={item.label} className="flex items-start gap-3">
          <span
            aria-hidden="true"
            className="mt-1.5 inline-block h-2 w-2 shrink-0 rounded-full bg-accent"
          />
          <span className="min-w-0">
            <span className="block text-sm font-bold text-fg">{item.label}</span>
            <span className="mt-0.5 block text-xs leading-relaxed text-fg-soft">
              {item.note}
            </span>
          </span>
        </li>
      ))}
    </ul>
  );
}

export function Hero({ locale }: { locale: Locale }) {
  const c = getContent(locale);

  return (
    <section className="hero-wash">
      <div className="mx-auto max-w-7xl px-6 pb-16 pt-20 sm:pb-20 sm:pt-24 lg:pt-32">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
          <div>
            <p className="eyebrow inline-flex items-center gap-2 rounded-full border border-accent-soft-line bg-accent-soft px-3.5 py-1.5 text-accent">
              <span
                aria-hidden="true"
                className="inline-block h-1.5 w-1.5 rounded-full bg-accent"
              />
              {c.hero.eyebrow}
            </p>
            <p className="mt-6 text-base font-bold text-accent-deep">
              {c.hero.kicker}
            </p>
            <h1 className="display-title mt-3 max-w-2xl text-[44px] font-extrabold text-fg sm:text-5xl lg:text-[58px]">
              {c.hero.headline}
            </h1>
            <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-fg-soft">
              {c.hero.subhead}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-center text-base font-bold no-underline shadow-[0_1px_0_rgba(0,0,0,0.05)] transition hover:bg-accent-hover"
                style={{ color: "#ffffff" }}
              >
                {c.hero.ctaPrimary}
                <span aria-hidden="true" className="text-lg leading-none">
                  →
                </span>
              </a>
              <a
                href={`mailto:${c.contactEmail}`}
                className="font-bold text-accent no-underline transition hover:text-accent-deep"
              >
                {c.hero.ctaSecondary}
              </a>
            </div>
          </div>

          <aside
            aria-hidden="true"
            className="relative flex min-h-[360px] flex-col items-center justify-center gap-5 overflow-hidden rounded-[28px] border border-accent-soft-line bg-accent-soft/60 p-8"
          >
            <div
              className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-accent/10 blur-2xl"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-accent/8 blur-3xl"
              aria-hidden="true"
            />
            <p className="relative eyebrow text-accent-deep">
              {c.hero.diagram.caption}
            </p>
            <FlowDiagram
              from={c.hero.diagram.from}
              mid={c.hero.diagram.mid}
              to={c.hero.diagram.to}
            />
            <p className="relative max-w-[320px] text-center text-xs leading-relaxed text-fg-soft">
              {c.hero.diagram.note}
            </p>
          </aside>
        </div>

        <TrustStrip locale={locale} />
      </div>
    </section>
  );
}
