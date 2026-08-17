import Link from "next/link";
import type { Locale } from "@/lib/i18n";

export function Footer({ locale }: { locale: Locale }) {
  const year = new Date().getFullYear();
  const copy =
    locale === "ja"
      ? "© MORISTACK. 大阪より独立して運営。"
      : "© MORISTACK. Built independently in Osaka, Japan.";

  return (
    <footer className="mt-24 border-t border-border bg-card/40">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-6 py-8 text-sm text-fg-soft sm:flex-row sm:items-center sm:justify-between">
        <p>{copy}</p>
        <ul className="flex flex-wrap items-center gap-x-5 gap-y-2">
          <li>
            <Link
              href={`/${locale}/services`}
              className="transition hover:text-fg"
            >
              {locale === "ja" ? "サービス" : "Services"}
            </Link>
          </li>
          <li>
            <Link
              href={`/${locale}/about`}
              className="transition hover:text-fg"
            >
              {locale === "ja" ? "私たちについて" : "About"}
            </Link>
          </li>
          <li>
            <Link
              href={`/${locale}/contact`}
              className="transition hover:text-fg"
            >
              {locale === "ja" ? "お問い合わせ" : "Contact"}
            </Link>
          </li>
        </ul>
      </div>
      <p className="mx-auto w-full max-w-6xl px-6 pb-8 text-xs text-muted">
        © {year} MORISTACK
      </p>
    </footer>
  );
}
