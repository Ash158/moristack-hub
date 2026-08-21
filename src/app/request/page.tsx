import type { Metadata } from "next";
import { RequestForm } from "@/components/RequestForm";

export const metadata: Metadata = {
  title: "Send a request",
  description:
    "Send MORISTACK a request — a Japanese phone call, a Japan trip guide, or something else. A person reads every request and replies with scope and price.",
  alternates: {
    canonical: "/request",
  },
  openGraph: {
    title: "Send a request · MORISTACK",
    description:
      "Send MORISTACK a request. A person reads every request and replies with scope and price.",
    url: "https://moristack.com/request",
    type: "website",
  },
};

export default function RequestPage() {
  return (
    <main className="bg-bg">
      <section className="px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-3xl">
          <p className="eyebrow text-accent">REQUEST</p>
          <h1 className="display-title mt-4 text-[36px] font-extrabold text-fg sm:text-[44px]">
            Tell us what you need.
          </h1>
          <p className="mt-5 max-w-2xl text-[17px] leading-relaxed text-fg-soft">
            A few sentences is enough. We read every request ourselves and reply with scope and price within 2-3 business days.
          </p>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-fg-soft">
            For a single Japanese phone call, you can also use{" "}
            <a
              href="https://call.moristack.com"
              target="_blank"
              rel="noopener"
              className="font-bold text-call no-underline hover:underline"
            >
              MORISTACK CALL
            </a>
            . For trip-shape research,{" "}
            <a
              href="https://plan.moristack.com"
              target="_blank"
              rel="noopener"
              className="font-bold text-plan no-underline hover:underline"
            >
              MORISTACK PLAN
            </a>{" "}
            has its own form.
          </p>
          <RequestForm />
        </div>
      </section>
    </main>
  );
}
