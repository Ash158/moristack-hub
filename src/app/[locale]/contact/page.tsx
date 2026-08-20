import type { Metadata } from "next";
import { isLocale, getContent } from "@/lib/content";

export const revalidate = 3600;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const c = getContent(locale);
  return {
    title: c.nav.contact,
    description:
      locale === "ja"
        ? "MORISTACK へのお問い合わせはこちらから。"
        : "Get in touch with MORISTACK.",
    alternates: {
      canonical: `/${locale}/contact`,
      languages: {
        ja: "/ja/contact",
        en: "/en/contact",
        "x-default": "/en/contact",
      },
    },
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) return null;
  const c = getContent(locale);

  const heading = locale === "ja" ? "お問い合わせ" : "Contact";
  const lede =
    locale === "ja"
      ? "ご質問・お見積り・その他なんでも、メールにてご連絡ください。"
      : "Questions, quotes, or anything else — drop us an email.";
  const emailLabel = locale === "ja" ? "メール" : "Email";
  const note =
    locale === "ja"
      ? "サービス別にお問い合わせの場合は、各サービスサイト内のフォームが早く届きます。"
      : "For service-specific questions, the contact form on each product site reaches the right person faster.";

  return (
    <section
      className="mx-auto"
      style={{ maxWidth: 1200, padding: "90px 32px" }}
    >
      <div
        className="font-bold tracking-[0.08em] text-fg-soft"
        style={{ fontSize: 12, marginBottom: 14 }}
      >
        {c.founder.eyebrow}
      </div>
      <h1
        style={{
          fontSize: "clamp(32px, 4vw, 48px)",
          fontWeight: 900,
          letterSpacing: "-0.02em",
          margin: "0 0 18px",
        }}
      >
        {heading}
      </h1>
      <p
        className="text-fg-soft"
        style={{
          fontSize: 18,
          lineHeight: 1.7,
          maxWidth: 640,
          margin: "0 0 40px",
        }}
      >
        {lede}
      </p>

      <div
        className="rounded-3xl border border-border bg-bg"
        style={{ padding: 40 }}
      >
        <div
          className="font-bold tracking-[0.08em] text-fg-soft"
          style={{ fontSize: 12, marginBottom: 8 }}
        >
          {emailLabel}
        </div>
        <a
          href={`mailto:${c.contactEmail}`}
          className="block font-extrabold underline-offset-4 hover:underline"
          style={{
            fontSize: 28,
            letterSpacing: "-0.01em",
            color: "var(--foreground)",
          }}
        >
          {c.contactEmail}
        </a>
      </div>

      <p
        className="text-fg-faint"
        style={{ fontSize: 14, marginTop: 24 }}
      >
        {note}
      </p>
    </section>
  );
}
