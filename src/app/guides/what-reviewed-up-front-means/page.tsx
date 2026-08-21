import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "What 'reviewed up front' actually means",
  description:
    "One of our three working principles, broken down into what it does in practice.",
  alternates: { canonical: "/guides/what-reviewed-up-front-means" },
};

export default function Guide() {
  return (
    <main className="bg-bg">
      <article className="px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-3xl">
          <p className="eyebrow text-accent">NOTES</p>
          <h1 className="display-title mt-4 text-[36px] font-extrabold text-fg sm:text-[44px]">
            What &ldquo;reviewed up front&rdquo; actually means
          </h1>
          <p className="mt-6 text-[15px] uppercase tracking-[0.18em] text-fg-soft">
            ~2 min read
          </p>
          <div className="prose mt-8 space-y-6 text-[17px] leading-relaxed text-fg">
            <p>
              You&apos;ll see &ldquo;reviewed up front&rdquo; in several places on this site. It&apos;s one of three principles we work by, and it has a specific meaning.
            </p>
            <p>
              <strong>Reviewed up front</strong> means:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>A person reads your request before any work begins</li>
              <li>We don&apos;t auto-reply, we don&apos;t quote on a template, and we don&apos;t bill for a guess</li>
              <li>If something is unclear, we ask one short list of questions instead of starting work</li>
              <li>If we can&apos;t take the request on, we tell you the same day — there is no charge for &ldquo;trying&rdquo;</li>
            </ul>
            <p>It&apos;s paired with two other principles:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>Scope and price up front</strong> — you see what&apos;s included, what isn&apos;t, and the cost before we start. No vague billing later.
              </li>
              <li>
                <strong>Use only what you need</strong> — CALL and PLAN are separate services, each designed for a specific job. Nothing is bundled, nothing is upsold.
              </li>
            </ul>
            <p>
              &ldquo;Reviewed up front&rdquo; is the part that takes the most time on our side. It&apos;s also the part that makes the rest of the work reliable.
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
    </main>
  );
}
