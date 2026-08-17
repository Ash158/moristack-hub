import { Logo } from "@/components/Logo";
import { LanguageToggle } from "@/components/LanguageToggle";
import type { Locale } from "@/lib/content";
import { getContent } from "@/lib/content";

export function TopNav({ locale }: { locale: Locale }) {
  const c = getContent(locale);
  const contactLabel = locale === "ja" ? "相談する" : "Contact";

  return (
    <header className="sticky top-0 z-30 border-b border-border bg-bg/90 backdrop-blur supports-[backdrop-filter]:bg-bg/75">
      <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-x-6 gap-y-3 px-6 py-4">
        <Logo size="md" badge="HUB" href={`/${locale}`} />
        <nav
          aria-label="Main"
          className="order-3 flex w-full items-center gap-5 text-sm font-semibold text-fg-soft sm:order-2 sm:w-auto sm:gap-7"
        >
          <a href="#services" className="transition hover:text-fg">
            {c.nav.services}
          </a>
          <a href="#about" className="transition hover:text-fg">
            {c.nav.about}
          </a>
          <a href="#guides" className="transition hover:text-fg">
            {locale === "ja" ? "ガイド" : "Guides"}
          </a>
          <LanguageToggle locale={locale} />
        </nav>
        <a
          href={`mailto:${c.contactEmail}`}
          className="order-2 inline-flex items-center whitespace-nowrap rounded-full border border-fg/15 bg-card px-5 py-2.5 text-sm font-bold text-fg no-underline transition hover:border-fg hover:bg-fg hover:text-card"
        >
          {contactLabel}
        </a>
      </div>
    </header>
  );
}
