import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Japanese Health Insurance vs Travel Insurance: How a Clinic Visit Actually Works",
  description:
    "The difference between a Japanese hoken-sho (health insurance card) and foreign travel insurance at a Japanese clinic or hospital: who pays what, when, and what paperwork each system needs.",
  alternates: { canonical: "/guides/health-insurance-vs-travel-insurance-japan" },
};

export default function Guide() {
  return (
    <>
      <article className="px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-3xl">
          <p className="eyebrow text-accent">LIVING IN JAPAN</p>
          <h1 className="display-title mt-4 text-[36px] font-extrabold text-fg sm:text-[44px]">
            Health Insurance vs Travel Insurance in Japan: How Payment Actually Works
          </h1>
          <p className="mt-6 text-[15px] uppercase tracking-[0.18em] text-fg-soft">
            ~5 min read
          </p>
          <div className="prose mt-8 space-y-6 text-[17px] leading-relaxed text-fg">
            <p>
              A Japanese hoken-sho (保険証, health insurance card) and a foreign travel insurance policy solve the same underlying problem — the cost of a clinic or hospital visit — but they work through completely different mechanics. A hoken-sho reduces what you pay <em>at the counter, on the spot</em>. Travel insurance almost always requires you to <em>pay in full first</em>, then claim the money back afterward. Confusing the two is the most common reason a visitor is surprised by a bill in Japan.
            </p>

            <h2 className="mt-10 text-2xl font-extrabold text-fg">Who has a hoken-sho, and who doesn&apos;t</h2>
            <p>
              Japan&apos;s public health insurance system — either Employees&apos; Health Insurance (through an employer) or National Health Insurance (through the local municipality) — is tied to residency. If you are living in Japan on a visa of 3 months or longer, enrollment is mandatory, and you are issued a hoken-sho. Short-term visitors on a tourist visa are not part of this system and have no access to it, regardless of nationality or how long they intend to stay unofficially.
            </p>
            <p>
              This single fact is the reason the two situations need to be understood separately: a resident with a hoken-sho and a tourist without one experience the same clinic visit completely differently, even at the same front desk.
            </p>

            <h2 className="mt-10 text-2xl font-extrabold text-fg">How it works with a hoken-sho</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>You show the physical card at check-in, before you see a doctor.</li>
              <li>Public insurance covers 70% of the standard treatment cost; you pay the remaining 30% at the counter when you leave, in cash or by card depending on the clinic.</li>
              <li>There is no separate claim to file — the clinic bills the insurer directly for its 70% share, and your 30% payment is the end of the transaction for you.</li>
              <li>The 30% share is calculated against Japan&apos;s fixed national fee schedule, not a negotiated or market rate, so costs are predictable and generally low compared to countries without a similar system.</li>
            </ul>

            <h2 className="mt-10 text-2xl font-extrabold text-fg">How it works with travel insurance</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>You are billed the full, non-discounted cost</strong> at the counter, because you are not part of the public insurance pool the discounted rate is calculated against. There is no card to show that reduces the bill on the spot.
              </li>
              <li>
                <strong>A small number of larger hospitals have direct-billing agreements</strong> with specific international travel insurance and assistance companies — mainly for hospitalization and emergency cases, arranged through the insurer&apos;s assistance hotline before or during treatment. This is the exception, not the default, and it is rarely available at a routine neighborhood clinic.
              </li>
              <li>
                <strong>For everything else, you pay first and claim afterward.</strong> This means having a payment method that can absorb the full cost at the time of treatment — a credit card with adequate headroom is the practical answer, since cash-in-hand for a hospital bill is not realistic for most travelers.
              </li>
              <li>
                <strong>Keep every document</strong>: the itemized receipt, and — critically — a doctor&apos;s report or diagnosis certificate (診断書, shindansho), which most insurers require and which most clinics only issue if you ask for one before you leave. Clinics do not automatically prepare this paperwork; it is a specific request.
              </li>
            </ul>

            <h2 className="mt-10 text-2xl font-extrabold text-fg">What to do before you need either one</h2>
            <ol className="list-decimal space-y-2 pl-6">
              <li>
                <strong>Residents:</strong> confirm your hoken-sho has arrived and carry it, or a photo of it, whenever you might need a clinic — enrollment can take a few weeks after you register your address, so there is a gap period worth planning around.
              </li>
              <li>
                <strong>Visitors:</strong> confirm your travel insurance policy&apos;s claims process before you fly — specifically, whether it requires pre-authorization for hospitalization, what documents it needs for a reimbursement claim, and whether it has a 24-hour assistance line that can speak to a Japanese hospital directly.
              </li>
              <li>
                <strong>Everyone:</strong> save the number for your insurer&apos;s assistance line and your embassy&apos;s local contact before you need either — looking them up while you are unwell or worried is the wrong moment to start.
              </li>
            </ol>

            <h2 className="mt-10 text-2xl font-extrabold text-fg">Common questions</h2>
            <p>
              <strong>Can a tourist use the public 70%-discount rate by paying out of pocket?</strong> No. The discounted rate only applies to enrolled members of the public insurance system; a non-member is billed the undiscounted rate regardless of how they intend to pay.
            </p>
            <p>
              <strong>Does travel insurance ever pay the clinic directly?</strong> Occasionally, at larger hospitals with an existing agreement with your specific insurer — call your insurer&apos;s assistance line as early as possible to check, since it is arranged case by case rather than universal.
            </p>
            <p>
              <strong>What if I need to describe symptoms and don&apos;t speak Japanese?</strong> Many hospitals in major cities have some English capability, and some clinics use phone or video interpretation services. For clinics that don&apos;t, a Japanese-speaking phone call ahead of the visit — to confirm the clinic can see you and to describe the situation in advance — makes the in-person visit considerably smoother.
            </p>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            <div className="rounded-[16px] border border-border bg-card p-6">
              <p className="text-sm font-bold text-fg">Need to book a clinic appointment by phone?</p>
              <p className="mt-2 text-sm text-fg-soft">
                A Japanese speaker calls the clinic, describes the situation, and confirms the appointment on your behalf.
              </p>
              <Link
                href="https://call.moristack.com"
                className="mt-3 inline-flex items-center gap-1 text-base font-bold text-accent no-underline hover:underline"
              >
                See CALL <span aria-hidden="true">→</span>
              </Link>
            </div>
            <div className="rounded-[16px] border border-border bg-card p-6">
              <p className="text-sm font-bold text-fg">Planning a Japan trip?</p>
              <p className="mt-2 text-sm text-fg-soft">
                A custom Japan trip guide, researched end-to-end for your dates and travel style.
              </p>
              <Link
                href="/services"
                className="mt-3 inline-flex items-center gap-1 text-base font-bold text-accent no-underline hover:underline"
              >
                See PLAN <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
