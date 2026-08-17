import { Logo } from "@/components/Logo";
import type { Locale } from "@/lib/content";
import { getContent } from "@/lib/content";

export function Footer({ locale }: { locale: Locale }) {
  const c = getContent(locale);
  return (
    <footer className="border-t border-border bg-card px-6 py-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 text-sm">
        <div>
          <Logo size="sm" asLink={false} />
          <p className="mt-3 max-w-3xl leading-6 text-fg-faint">{c.footer.tagline}</p>
        </div>
        <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-5 gap-y-2 text-fg-soft">
          <a href="https://call.moristack.com" target="_blank" rel="noopener" className="hover:text-fg">{c.footer.callLabel}</a>
          <a href="https://plan.moristack.com" target="_blank" rel="noopener" className="hover:text-fg">{c.footer.planLabel}</a>
          <a href={`mailto:${c.contactEmail}`} className="hover:text-fg">{c.footer.contactLabel}</a>
        </nav>
        <p className="text-fg-faint">{c.footer.copyright}</p>
      </div>
    </footer>
  );
}
