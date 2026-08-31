import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "CALL vs PLAN — which one fits your request",
  description:
    "Two services, two jobs. A short guide to picking the right one before you send the form.",
  alternates: { canonical: "/guides/call-vs-plan" },
};

export default function Guide() {
  return (
    <>
      <article className="px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-3xl">
          <p className="eyebrow text-accent">NOTES</p>
          <h1 className="display-title mt-4 text-[36px] font-extrabold text-fg sm:text-[44px]">
            CALL vs PLAN — which one fits your request
          </h1>
          <p className="mt-6 text-[15px] uppercase tracking-[0.18em] text-fg-soft">
            ~3 min read
          </p>
          <div className="prose mt-8 space-y-6 text-[17px] leading-relaxed text-fg">
            <p>
              MORISTACK has services, each designed for a different job. Use this short guide to pick the right one.
            </p>
            <h2 className="mt-10 text-2xl font-extrabold text-fg">
              CALL — for Japanese phone-based work
            </h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>Restaurant, ryokan, salon, or clinic reservations</li>
              <li>Confirming an existing booking by phone</li>
              <li>Asking a city office or utility a practical question</li>
              <li>A single short call, billed only when the call is made</li>
            </ul>
            <h2 className="mt-10 text-2xl font-extrabold text-fg">
              PLAN — for trip-shape research
            </h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>&ldquo;We&apos;re going to Hokkaido for 5 days in October — what should we actually look at?&rdquo;</li>
              <li>&ldquo;I want a quieter alternative to the Golden Route, with onsen and easy rail.&rdquo;</li>
              <li>A custom map and a written guide, researched end-to-end</li>
              <li>Trips up to 4 nights / 5 days are free during launch; longer trips are scoped before any charge</li>
            </ul>
            <p>
              If the work is a phone call, use CALL. If the work is shaping a trip on paper, use PLAN. If you need both, they&apos;re booked separately — trip details are never copied between the two services.
            </p>
            <p>
              Not sure? Send the form and tell us a little about the situation. We&apos;ll point you to the right one.
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
