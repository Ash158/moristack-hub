import { Logo } from "@/components/Logo";
import { content } from "@/lib/content";

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
                <a
                  href="https://call.moristack.com"
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
                </a>
                <p className="mt-1 pl-4 text-xs leading-relaxed text-fg-soft">
                  Japanese phone calls, made for you
                </p>
              </li>
              <li>
                <a
                  href="https://plan.moristack.com"
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
                </a>
                <p className="mt-1 pl-4 text-xs leading-relaxed text-fg-soft">
                  Custom Japan trip guides, researched end-to-end
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
