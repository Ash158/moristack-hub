import type { Metadata } from "next";
import Link from "next/link";
import { getServices } from "@/lib/services";
import { ServiceCard } from "@/components/ServiceCard";

export const metadata: Metadata = {
  title: "MORISTACK — Independent apps, built in Japan",
  description:
    "MORISTACK builds focused digital tools, services, and experiments. One problem at a time.",
  alternates: {
    canonical: "/",
    languages: {
      ja: "/ja",
      en: "/en",
      "x-default": "/en",
    },
  },
  openGraph: {
    title: "MORISTACK — Independent apps, built in Japan",
    description:
      "MORISTACK builds focused digital tools, services, and experiments. One problem at a time.",
    url: "https://moristack.com",
    locale: "en_US",
    type: "website",
  },
};

export const revalidate = 3600;

export default function ApexHome() {
  const services = getServices("en");
  const year = new Date().getFullYear();

  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b border-border">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-6 py-4">
          <Link
            href="/"
            className="text-sm font-semibold tracking-[0.22em] text-fg"
            aria-label="MORISTACK home"
          >
            MORISTACK
          </Link>
          <div className="flex items-center gap-2">
            <Link
              href="/en"
              className="rounded-full border border-fg bg-fg px-3 py-1.5 text-xs font-semibold tracking-wide text-bg"
              aria-current="page"
            >
              English
            </Link>
            <Link
              href="/ja"
              lang="ja"
              className="rounded-full border border-border bg-card px-3 py-1.5 text-xs font-semibold tracking-wide text-fg-soft transition hover:border-fg hover:text-fg"
            >
              日本語
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="mx-auto w-full max-w-6xl px-6 pt-20 pb-16 sm:pt-28 sm:pb-20">
          <p className="text-sm font-semibold tracking-[0.22em] text-fg-soft">
            MORISTACK
          </p>
          <h1 className="mt-6 max-w-3xl text-4xl font-semibold tracking-[-0.045em] text-fg sm:text-6xl">
            Independent apps, built in Japan.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-fg-soft">
            Focused digital tools, services, and experiments — one problem at a time.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/en/services"
              className="rounded-full border border-fg bg-fg px-5 py-2.5 text-sm font-semibold text-bg transition hover:bg-fg/90"
            >
              See our services
            </Link>
            <Link
              href="/en/about"
              className="rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold text-fg transition hover:border-fg"
            >
              About MORISTACK
            </Link>
          </div>
        </section>

        <section className="border-t border-border">
          <div className="mx-auto w-full max-w-6xl px-6 pt-16 pb-12">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <h2 className="text-2xl font-semibold tracking-[-0.02em] text-fg">
                What we&apos;re shipping
              </h2>
              <Link
                href="/en/services"
                className="text-sm font-medium text-fg-soft transition hover:text-fg"
              >
                See all →
              </Link>
            </div>
            <ul className="mt-10 grid gap-6 sm:grid-cols-2">
              {services.map((service) => (
                <li key={service.id}>
                  <ServiceCard service={service} />
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <footer className="mt-24 border-t border-border bg-card/40">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-6 py-8 text-sm text-fg-soft sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} MORISTACK</p>
          <ul className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <li>
              <Link
                href="/en/services"
                className="transition hover:text-fg"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/en/about"
                className="transition hover:text-fg"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/en/contact"
                className="transition hover:text-fg"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
