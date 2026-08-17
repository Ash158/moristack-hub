import type { Metadata } from "next";
import Link from "next/link";
import { getServices } from "@/lib/services";

export const metadata: Metadata = {
  title: "MORISTACK — Choose your language",
  description:
    "MORISTACK builds focused digital tools, services, and experiments from Japan. Pick a language to continue.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "MORISTACK — Choose your language",
    description:
      "MORISTACK builds focused digital tools, services, and experiments from Japan. Pick a language to continue.",
    url: "https://moristack.com",
  },
};

export const revalidate = 3600;

export default function LanguageGate() {
  const services = getServices("en");

  return (
    <main className="flex min-h-screen flex-1 flex-col items-center justify-center bg-bg px-6 py-16 text-fg">
      <div className="w-full max-w-3xl text-center">
        <p className="text-sm font-semibold tracking-[0.22em] text-fg-soft">
          MORISTACK
        </p>
        <h1 className="mt-7 text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">
          Choose your language
        </h1>
        <p className="mt-3 text-lg text-muted">言語を選択してください</p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <Link
            lang="ja"
            href="/ja"
            className="rounded-2xl border border-border bg-card px-6 py-7 text-lg font-semibold transition hover:border-fg hover:shadow-sm"
          >
            日本語
          </Link>
          <Link
            lang="en"
            href="/en"
            className="rounded-2xl border border-border bg-card px-6 py-7 text-lg font-semibold transition hover:border-fg hover:shadow-sm"
          >
            English
          </Link>
        </div>

        <div className="mt-16 text-left">
          <h2 className="text-sm font-semibold tracking-[0.22em] text-fg-soft">
            SERVICES
          </h2>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {services.map((service) => (
              <li key={service.id}>
                <a
                  href={service.url}
                  className="group block rounded-2xl border border-border bg-card p-5 transition hover:border-fg"
                >
                  <p className="text-xs font-semibold tracking-[0.18em] text-muted">
                    {service.tagline}
                  </p>
                  <p className="mt-2 text-lg font-semibold text-fg">
                    {service.name}
                  </p>
                  <p className="mt-1 text-sm text-fg-soft">
                    {service.oneLiner} →
                  </p>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
