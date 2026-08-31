import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How MORISTACK handles your request",
  description:
    "What happens between sending a request and the work starting — step by step.",
  alternates: { canonical: "/guides/how-moristack-handles-your-request" },
};

export default function Guide() {
  return (
    <>
      <article className="px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-3xl">
          <p className="eyebrow text-accent">NOTES</p>
          <h1 className="display-title mt-4 text-[36px] font-extrabold text-fg sm:text-[44px]">
            How MORISTACK handles your request
          </h1>
          <p className="mt-6 text-[15px] uppercase tracking-[0.18em] text-fg-soft">
            ~3 min read
          </p>
          <div className="prose mt-8 space-y-6 text-[17px] leading-relaxed text-fg">
            <p>
              When you send a request through the form on this site, it lands with a person — not a chatbot. We read it, check it against what we can actually do, and reply with scope and price before any work starts.
            </p>
            <p>
              The same flow applies whether you&apos;re asking for a single Japanese phone call (CALL) or a custom Japan trip guide (PLAN). The practical steps:
            </p>
            <ol className="list-decimal space-y-2 pl-6">
              <li>
                <strong>You tell us about the task.</strong> A few sentences is fine. Include dates, names, phone numbers, or links if you have them.
              </li>
              <li>
                <strong>We read it and ask for what&apos;s missing.</strong> If anything is unclear, we send one short list of questions instead of guessing.
              </li>
              <li>
                <strong>We confirm scope and price in writing.</strong> You see what&apos;s included, what isn&apos;t, and what it costs before anything starts.
              </li>
              <li>
                <strong>The work happens — or we tell you it&apos;s not a fit.</strong> If we can&apos;t take it on, we say so up front rather than billing you for an attempt.
              </li>
            </ol>
            <p>
              There is no auto-reply and no subscription. Every request is read by a person, and the only time we charge is when the work is actually done.
            </p>
          </div>
          <div className="mt-12 rounded-[16px] border border-border bg-card p-6">
            <p className="text-sm font-bold text-fg">Ready to send a request?</p>
            <Link
              href="/request"
              className="mt-3 inline-flex items-center gap-1 text-base font-bold text-accent no-underline hover:underline"
            >
              Open the request form <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
