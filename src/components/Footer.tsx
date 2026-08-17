import Link from "next/link";
import type { Locale } from "@/lib/i18n";

export function Footer({ locale }: { locale: Locale }) {
  const year = new Date().getFullYear();
  const navLabels = {
    services: locale === "ja" ? "サービス" : "Services",
    about: locale === "ja" ? "私たちについて" : "About",
    contact: locale === "ja" ? "お問い合わせ" : "Contact",
  };

  return (
    <footer className="mt-24 border-t border-border bg-card/40">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-6 py-8 text-sm text-fg-soft sm:flex-row sm:items-center sm:justify-between">
        <p>© {year} MORISTACK</p>
        <ul className="flex flex-wrap items-center gap-x-5 gap-y-2">
          <li>
            <Link
              href={`/${locale}/services`}
              className="transition hover:text-fg"
            >
              {navLabels.services}
            </Link>
          </li>
          <li>
            <Link
              href={`/${locale}/about`}
              className="transition hover:text-fg"
            >
              {navLabels.about}
            </Link>
          </li>
          <li>
            <Link
              href={`/${locale}/contact`}
              className="transition hover:text-fg"
            >
              {navLabels.contact}
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
