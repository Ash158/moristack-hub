export type Locale = "ja" | "en";
export const LOCALES: Locale[] = ["ja", "en"];

export type NavCopy = {
  services: string;
  about: string;
  contact: string;
};

export type HeroCopy = {
  eyebrow: string;
  headline: string;
  subhead: string;
  ctaPrimary: string;
  ctaSecondary: string;
  diagram: { from: string; mid: string; to: string };
};

export type PrincipleCopy = {
  num: string;
  title: string;
  desc: string;
};

export type AboutCopy = {
  eyebrow: string;
  title: string;
  body: string;
  principles: PrincipleCopy[];
};

export type ServiceItemCopy = {
  id: "call" | "plan";
  badge: string;
  accent: string;
  accentBg: string;
  title: string;
  desc: string;
  meta: string;
  url: string;
  cta: string;
};

export type ServicesCopy = {
  eyebrow: string;
  title: string;
  items: ServiceItemCopy[];
};

export type FounderCopy = {
  eyebrow: string;
  title: string;
  body: string;
};

export type FooterCopy = {
  tagline: string;
  callLabel: string;
  planLabel: string;
  contactLabel: string;
  copyright: string;
};

export type PageContent = {
  nav: NavCopy;
  hero: HeroCopy;
  about: AboutCopy;
  services: ServicesCopy;
  founder: FounderCopy;
  footer: FooterCopy;
  contactEmail: string;
};

export const CONTACT_EMAIL = "support@moristack.com";

const JA: PageContent = {
  nav: { services: "Services", about: "About", contact: "Contact" },
  hero: {
    eyebrow: "INDEPENDENT JAPAN SERVICE HUB",
    headline: "日本での用事を、必要なぶんだけ。",
    subhead:
      "MORISTACKは、日本語での電話代行や旅行プラン作成など、海外からでは進めにくい日本の用事を扱う小さなサービスハブです。必要なサービスを選び、人が内容を確認してから進めます。",
    ctaPrimary: "サービスを見る",
    ctaSecondary: "相談する",
    diagram: { from: "相談", mid: "確認", to: "対応" },
  },
  about: {
    eyebrow: "ABOUT",
    title: "一件ずつ、内容を見てから進めます。",
    body: "予約、確認、問い合わせ、旅行計画。日本語と現地感覚が必要なタスクを、無理に急がず、必要な確認を挟みながら扱います。便利屋ではなく、海外から日本の用事を進めるための静かな実務パートナーです。",
    principles: [
      { num: "01", title: "人が確認してから対応", desc: "依頼内容を読み、不明点があれば着手前に確認します。" },
      { num: "02", title: "料金と範囲を先に明確に", desc: "何をどこまで行うか、費用はいくらかを事前にお知らせします。" },
      { num: "03", title: "必要なサービスだけを選べる", desc: "電話代行、旅行プラン作成など、目的に合わせて個別に利用できます。" },
    ],
  },
  services: {
    eyebrow: "SERVICES",
    title: "必要なサービスだけを選べます。",
    items: [
      {
        id: "call",
        badge: "CALL",
        accent: "#3a6ea5",
        accentBg: "#eaf1f7",
        title: "日本語の電話を、あなたの代わりに。",
        desc: "レストラン、美容室、役所、公共サービスなど、電話でしか進まない予約・確認・問い合わせを代行します。日本語での細かなやり取りが必要な場面も、人が内容を確認しながら対応します。",
        meta: "1件 $6〜 / 通話完了時のみ課金",
        url: "https://call.moristack.com",
        cta: "MORISTACK CALLを見る",
      },
      {
        id: "plan",
        badge: "PLAN",
        accent: "#9a6a24",
        accentBg: "#f6efe3",
        title: "旅先で迷わない、日本旅行ガイド。",
        desc: "行きたい場所、興味、滞在日数に合わせて、人が調べてカスタムマップと旅行ガイドを作成します。予約代行ではなく、自分のペースで旅を進めたい人のためのプランニングです。",
        meta: "先着3件限定 / 7日以内の旅程は無料",
        url: "https://plan.moristack.com",
        cta: "MORISTACK PLANを見る",
      },
    ],
  },
  founder: {
    eyebrow: "QUALITY",
    title: "無理に進めず、確認してから。",
    body: "対応できること・できないことを事前に確認します。料金や作業範囲を曖昧にしたまま進めず、必要に応じて確認を重ねてから着手します。小さな用事でも、任せる側が安心できる進め方を大切にしています。",
  },
  footer: {
    tagline: "日本での用事を、必要なぶんだけ前へ。",
    callLabel: "CALL",
    planLabel: "PLAN",
    contactLabel: "Contact",
    copyright: "© 2026 MORISTACK",
  },
  contactEmail: CONTACT_EMAIL,
};

const EN: PageContent = {
  nav: { services: "Services", about: "About", contact: "Contact" },
  hero: {
    eyebrow: "INDEPENDENT JAPAN SERVICE HUB",
    headline: "Japan tasks, only as much as you need.",
    subhead:
      "MORISTACK is a small service hub for Japan tasks that are hard to move forward from abroad, including Japanese phone calls and custom trip planning. Choose the service you need; a person reviews the details before anything starts.",
    ctaPrimary: "See services",
    ctaSecondary: "Contact us",
    diagram: { from: "Ask", mid: "Review", to: "Act" },
  },
  about: {
    eyebrow: "ABOUT",
    title: "Reviewed by a person, one request at a time.",
    body: "Reservations, confirmations, questions, and travel planning often need Japanese language and local context. MORISTACK handles those tasks carefully, with clarification where needed — a quiet operations partner for getting things done in Japan.",
    principles: [
      { num: "01", title: "Reviewed before action", desc: "Every request is read first, and unclear details are confirmed before work begins." },
      { num: "02", title: "Scope and price up front", desc: "You know what we will do, how far we can go, and what it costs before we start." },
      { num: "03", title: "Use only what you need", desc: "Phone support and travel planning are separate services, each designed for a specific job." },
    ],
  },
  services: {
    eyebrow: "SERVICES",
    title: "Choose only the service you need.",
    items: [
      {
        id: "call",
        badge: "CALL",
        accent: "#3a6ea5",
        accentBg: "#eaf1f7",
        title: "Japanese phone calls, made for you.",
        desc: "For restaurants, salons, city offices, utilities, and other phone-only situations, a Japanese speaker makes the call on your behalf. We handle reservations, confirmations, changes, and simple questions.",
        meta: "From $6 / charged only when the call is completed",
        url: "https://call.moristack.com",
        cta: "Visit MORISTACK CALL",
      },
      {
        id: "plan",
        badge: "PLAN",
        accent: "#9a6a24",
        accentBg: "#f6efe3",
        title: "A Japan guide you can actually use.",
        desc: "Based on your interests, dates, and travel style, we create a custom map and written guide researched by a person. You stay in control of booking and paying, with a clearer plan in hand.",
        meta: "First 3 requests free / trips up to 7 days",
        url: "https://plan.moristack.com",
        cta: "Visit MORISTACK PLAN",
      },
    ],
  },
  founder: {
    eyebrow: "QUALITY",
    title: "We confirm before we proceed.",
    body: "MORISTACK checks what can and cannot be handled before starting. Scope and pricing are not left vague, and we clarify details when needed so small tasks can move forward with less uncertainty.",
  },
  footer: {
    tagline: "Japan tasks, only as much as you need.",
    callLabel: "CALL",
    planLabel: "PLAN",
    contactLabel: "Contact",
    copyright: "© 2026 MORISTACK",
  },
  contactEmail: CONTACT_EMAIL,
};

const CONTENT: Record<Locale, PageContent> = { ja: JA, en: EN };

export function getContent(locale: Locale): PageContent {
  return CONTENT[locale];
}

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}
