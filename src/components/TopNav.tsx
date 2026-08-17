import { Logo } from "@/components/Logo";
import { LanguageToggle } from "@/components/LanguageToggle";
import type { Locale } from "@/lib/content";

export function TopNav({ locale }: { locale: Locale }) {
  return (
    <header className="border-b border-border bg-bg/95 backdrop-blur supports-[backdrop-filter]:bg-bg/70 sticky top-0 z-30">
      <div
        className="mx-auto flex items-center justify-between"
        style={{ maxWidth: 1200, padding: "30px 32px" }}
      >
        <Logo size="md" />
        <nav aria-label="Main" className="flex items-center gap-9">
          <a
            href="#services"
            className="hidden text-[15px] font-medium text-fg-soft transition hover:text-fg sm:inline"
          >
            {locale === "ja" ? "サービス" : "Services"}
          </a>
          <a
            href="#about"
            className="hidden text-[15px] font-medium text-fg-soft transition hover:text-fg sm:inline"
          >
            {locale === "ja" ? "MORISTACKについて" : "About"}
          </a>
          <a
            href="#contact"
            className="hidden text-[15px] font-medium text-fg-soft transition hover:text-fg sm:inline"
          >
            {locale === "ja" ? "お問い合わせ" : "Contact"}
          </a>
          <LanguageToggle locale={locale} />
        </nav>
      </div>
    </header>
  );
}
