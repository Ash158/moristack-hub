import { content } from "@/lib/content";
import { TrackedExternalLink } from "@/components/TrackedExternalLink";

function GuideBadge({ label, color }: { label: string; color: string }) {
  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10.5px] font-extrabold tracking-[0.16em]"
      style={{
        background: `${color}1a`,
        color,
      }}
    >
      <span
        aria-hidden="true"
        className="inline-block h-1.5 w-1.5 rounded-full"
        style={{ background: color }}
      />
      {label}
    </span>
  );
}

export function FeaturedGuides() {
  const c = content;
  const callColor = "var(--call-accent)";
  const planColor = "var(--plan-accent)";

  return (
    <section
      id="guides"
      aria-labelledby="guides-heading"
      className="border-t border-border bg-card-muted px-6 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="eyebrow text-accent">{c.guides.eyebrow}</p>
          <h2
            id="guides-heading"
            className="display-title mt-4 text-[32px] font-extrabold text-fg sm:text-[40px]"
          >
            {c.guides.title}
          </h2>
          <p className="mt-4 max-w-2xl text-[17px] leading-relaxed text-fg-soft">
            {c.guides.body}
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div>
            <div className="mb-5 flex items-center justify-between gap-3">
              <h3 className="flex items-center gap-2 text-sm font-extrabold uppercase tracking-[0.16em] text-call">
                <span
                  aria-hidden="true"
                  className="inline-block h-2 w-2 rounded-full"
                  style={{ background: callColor }}
                />
                From CALL
              </h3>
              <TrackedExternalLink
                href="https://call.moristack.com/guides"
                eventName="cross_sell_click"
                eventData={{ from: "hub", to: "call", placement: "guides_section" }}
                target="_blank"
                rel="noopener"
                className="text-xs font-bold text-call no-underline hover:underline"
              >
                See all →
              </TrackedExternalLink>
            </div>
            <ul className="grid gap-3">
              {c.guides.callGuides.map((g) => (
                <li key={g.title}>
                  <TrackedExternalLink
                    href={g.href}
                    eventName="cross_sell_click"
                    eventData={{ from: "hub", to: "call", placement: "guides_section", title: g.title }}
                    target="_blank"
                    rel="noopener"
                    className="group flex items-start gap-3 rounded-[16px] border border-border bg-card p-4 no-underline transition hover:-translate-y-0.5 hover:border-call/40 hover:shadow-[0_10px_30px_-20px_rgba(58,110,165,0.4)]"
                  >
                    <GuideBadge label={g.badge} color={callColor} />
                    <span className="min-w-0 flex-1 text-sm font-bold leading-snug text-fg group-hover:text-call">
                      {g.title}
                    </span>
                    <span aria-hidden="true" className="text-fg-faint transition group-hover:text-call">
                      ↗
                    </span>
                  </TrackedExternalLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="mb-5 flex items-center justify-between gap-3">
              <h3 className="flex items-center gap-2 text-sm font-extrabold uppercase tracking-[0.16em] text-plan">
                <span
                  aria-hidden="true"
                  className="inline-block h-2 w-2 rounded-full"
                  style={{ background: planColor }}
                />
                From PLAN
              </h3>
              <TrackedExternalLink
                href="https://plan.moristack.com/guides"
                eventName="cross_sell_click"
                eventData={{ from: "hub", to: "plan", placement: "guides_section" }}
                target="_blank"
                rel="noopener"
                className="text-xs font-bold text-plan no-underline hover:underline"
              >
                See all →
              </TrackedExternalLink>
            </div>
            <ul className="grid gap-3">
              {c.guides.planGuides.map((g) => (
                <li key={g.title}>
                  <TrackedExternalLink
                    href={g.href}
                    eventName="cross_sell_click"
                    eventData={{ from: "hub", to: "plan", placement: "guides_section", title: g.title }}
                    target="_blank"
                    rel="noopener"
                    className="group flex items-start gap-3 rounded-[16px] border border-border bg-card p-4 no-underline transition hover:-translate-y-0.5 hover:border-plan/40 hover:shadow-[0_10px_30px_-20px_rgba(154,106,36,0.4)]"
                  >
                    <GuideBadge label={g.badge} color={planColor} />
                    <span className="min-w-0 flex-1 text-sm font-bold leading-snug text-fg group-hover:text-plan">
                      {g.title}
                    </span>
                    <span aria-hidden="true" className="text-fg-faint transition group-hover:text-plan">
                      ↗
                    </span>
                  </TrackedExternalLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
