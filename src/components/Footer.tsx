import { Logo } from "@/components/Logo";
import { content } from "@/lib/content";
import { TrackedExternalLink } from "@/components/TrackedExternalLink";

export function Footer() {
  const c = content;
  const year = new Date().getFullYear();

  return (
    <footer
      id="contact"
      aria-labelledby="footer-heading"
      className="border-t border-border bg-card"
    >
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Logo size="md" badge="HUB" asLink={false} />
            <h2 id="footer-heading" className="sr-only">
              MORISTACK
            </h2>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-fg-soft">
              {c.footer.tagline}
            </p>
          </div>

          <div>
            <p className="eyebrow text-fg-soft">Services</p>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <TrackedExternalLink
                  href="https://call.moristack.com"
                  eventName="cross_sell_click"
                  eventData={{ from: "hub", to: "call", placement: "footer" }}
                  target="_blank"
                  rel="noopener"
                  className="group flex items-center gap-2 font-bold text-fg no-underline"
                >
                  <span
                    aria-hidden="true"
                    className="inline-block h-2 w-2 rounded-full"
                    style={{ background: "var(--call-accent)" }}
                  />
                  MORISTACK CALL
                  <span
                    aria-hidden="true"
                    className="text-fg-faint transition group-hover:translate-x-0.5 group-hover:text-call"
                  >
                    ↗
                  </span>
                </TrackedExternalLink>
                <p className="mt-1 pl-4 text-xs leading-relaxed text-fg-soft">
                  Japanese phone calls, made for you
                </p>
              </li>
              <li>
                <TrackedExternalLink
                  href="https://plan.moristack.com"
                  eventName="cross_sell_click"
                  eventData={{ from: "hub", to: "plan", placement: "footer" }}
                  target="_blank"
                  rel="noopener"
                  className="group flex items-center gap-2 font-bold text-fg no-underline"
                >
                  <span
                    aria-hidden="true"
                    className="inline-block h-2 w-2 rounded-full"
                    style={{ background: "var(--plan-accent)" }}
                  />
                  MORISTACK PLAN
                  <span
                    aria-hidden="true"
                    className="text-fg-faint transition group-hover:translate-x-0.5 group-hover:text-plan"
                  >
                    ↗
                  </span>
                </TrackedExternalLink>
                <p className="mt-1 pl-4 text-xs leading-relaxed text-fg-soft">
                  Custom Japan trip guides, researched end-to-end
                </p>
              </li>
              <li>
                <TrackedExternalLink
                  href="https://poko.moristack.com"
                  eventName="cross_sell_click"
                  eventData={{ from: "hub", to: "poko", placement: "footer" }}
                  target="_blank"
                  rel="noopener"
                  className="group flex items-center gap-2 font-bold text-fg no-underline"
                >
                  <span
                    aria-hidden="true"
                    className="inline-block h-2 w-2 rounded-full"
                    style={{ background: "var(--poko-accent)" }}
                  />
                  MORISTACK POKO
                  <span
                    aria-hidden="true"
                    className="text-fg-faint transition group-hover:translate-x-0.5 group-hover:text-poko"
                  >
                    ↗
                  </span>
                </TrackedExternalLink>
                <p className="mt-1 pl-4 text-xs leading-relaxed text-fg-soft">
                  An AI tutor for children in Japan (Japanese)
                </p>
              </li>
            </ul>
          </div>

          <div>
            <p className="eyebrow text-fg-soft">Contact</p>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={`mailto:${c.contactEmail}`}
                  className="font-bold text-fg no-underline transition hover:text-accent"
                >
                  {c.contactEmail}
                </a>
              </li>
              <li className="text-fg-soft">{c.founder.address}</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-border-soft pt-6 text-xs text-fg-soft sm:flex-row sm:items-center">
          <p>© {year} MORISTACK</p>
          <p>Moving Japan tasks forward, from abroad.</p>
        </div>
      </div>
    </footer>
  );
}
