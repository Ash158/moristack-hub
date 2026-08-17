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
  nav: { services: "サービス", about: "MORISTACKについて", contact: "お問い合わせ" },
  hero: {
    eyebrow: "MORISTACK",
    headline: "日本の「現地でしか進まないこと」を、静かに引き受ける。",
    subhead:
      "MORISTACKは、日本での実務まわりを専門に扱うプラクティスです。電話でのやり取りを代行する「MORISTACK CALL」、旅の計画を支える「MORISTACK PLAN」など、独立したサービスを提供しています。",
    ctaPrimary: "サービスを見る",
    ctaSecondary: "お問い合わせ",
    diagram: { from: "あなた", mid: "MORISTACK", to: "CALL / PLAN" },
  },
  about: {
    eyebrow: "MORISTACKについて",
    title: "自動応答でも、量産型のサービスでもなく。",
    body: "MORISTACKは、依頼のひとつひとつに目を通し、必要であれば確認を重ねてから対応します。定型文の自動返信や、効率だけを優先した大量処理とは違う進め方です。",
    principles: [
      { num: "01", title: "内容を確認してから動く", desc: "依頼を受けたら、まず内容を読み、不明点があれば先に確認します。" },
      { num: "02", title: "範囲と料金を先に明確化", desc: "何をするか、いくらかかるかを、着手前にはっきりさせます。" },
      { num: "03", title: "独立したサービス設計", desc: "CALLとPLANは別サービスです。依頼内容が自動で共有されることはありません。" },
    ],
  },
  services: {
    eyebrow: "サービス",
    title: "提供中のサービス",
    items: [
      {
        id: "call",
        badge: "CALL",
        accent: "#3b63c9",
        accentBg: "#eef2fc",
        title: "MORISTACK CALL — 電話代行サービス",
        desc: "飲食店、美容室、市役所、公共サービスなど、電話でしか対応してもらえない場面で、日本語ネイティブが代わりに電話をかけます。新規予約、変更・確認、簡単な問い合わせに対応します。",
        meta: "1件 $6〜・通話が完了した場合のみ課金",
        url: "https://call.moristack.com",
        cta: "call.moristack.comを見る",
      },
      {
        id: "plan",
        badge: "PLAN",
        accent: "#3d6b52",
        accentBg: "#eaf2ec",
        title: "MORISTACK PLAN — 旅行プランニングガイド",
        desc: "興味や旅程をもとに、人が実際に調べて作るカスタムマップと旅行ガイドを提供します。予約や手配はご自身で行っていただく、自由度の高いプランニングです。",
        meta: "先着3件は7日以内の旅程が無料",
        url: "https://plan.moristack.com",
        cta: "plan.moristack.comを見る",
      },
    ],
  },
  founder: {
    eyebrow: "品質管理",
    title: "依頼内容を確認したうえで対応します",
    body: "MORISTACKでは、依頼を受けた時点で内容を確認し、不明点があれば事前にすり合わせます。着手前に範囲と料金を明示し、双方の認識を揃えてから進めます。",
  },
  footer: {
    tagline: "日本の実務まわりをサポートするプラクティス。",
    callLabel: "CALL",
    planLabel: "PLAN",
    contactLabel: "お問い合わせ",
    copyright: "© 2026 MORISTACK",
  },
  contactEmail: CONTACT_EMAIL,
};

const EN: PageContent = {
  nav: { services: "Services", about: "About", contact: "Contact" },
  hero: {
    eyebrow: "MORISTACK",
    headline: "The parts of Japan that only work in person — we take on, quietly.",
    subhead:
      "MORISTACK is a practice for the practical side of Japan, running independent services including MORISTACK CALL, for phone-based arrangements, and MORISTACK PLAN, a trip-planning guide.",
    ctaPrimary: "See our services",
    ctaSecondary: "Contact us",
    diagram: { from: "You", mid: "MORISTACK", to: "CALL / PLAN" },
  },
  about: {
    eyebrow: "About MORISTACK",
    title: "Not a script. Not a queue.",
    body: "Every request at MORISTACK is read closely, and clarified where needed, before anything happens — a deliberate alternative to automated replies and high-volume processing.",
    principles: [
      { num: "01", title: "Read before we act", desc: "Every request is reviewed, and any unclear detail confirmed, before we proceed." },
      { num: "02", title: "Scope and price up front", desc: "You know what we'll do and what it costs before anything starts." },
      { num: "03", title: "Independently designed services", desc: "CALL and PLAN are independent. Details aren't shared between them automatically." },
      ],
  },
  services: {
    eyebrow: "Services",
    title: "Services",
    items: [
      {
        id: "call",
        badge: "CALL",
        accent: "#3b63c9",
        accentBg: "#eef2fc",
        title: "MORISTACK CALL — Phone Call Service",
        desc: "Restaurants, salons, city offices, utilities — for the things in Japan that are phone-only and Japanese-only, a native speaker calls on your behalf. New reservations, confirmations, changes, and routine questions.",
        meta: "From $6 — charged only if the call is completed",
        url: "https://call.moristack.com",
        cta: "Visit call.moristack.com",
      },
      {
        id: "plan",
        badge: "PLAN",
        accent: "#3d6b52",
        accentBg: "#eaf2ec",
        title: "MORISTACK PLAN — Digital Guide",
        desc: "A custom map and written guide, researched and reviewed by a person, for a trip you plan and book yourself.",
        meta: "Free for the first 3 requests, trips up to 7 days",
        url: "https://plan.moristack.com",
        cta: "Visit plan.moristack.com",
      },
    ],
  },
  founder: {
    eyebrow: "Quality control",
    title: "Every request is confirmed before we proceed",
    body: "MORISTACK reviews each request on intake and confirms any unclear details in advance. Scope and price are set out before work begins, so both sides start from the same understanding.",
  },
  footer: {
    tagline: "A practice for the practical side of Japan.",
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
