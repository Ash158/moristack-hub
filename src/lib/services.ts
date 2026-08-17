export type Service = {
  id: string;
  name: string;
  tagline: string;
  oneLiner: { en: string; ja: string };
  url: string;
  status: "live" | "wip" | "planned";
  category: "travel" | "communication" | "education" | "other";
};

export const SERVICES: Service[] = [
  {
    id: "japan-trip-plan",
    name: "Japan Trip Plan",
    tagline: "travel",
    oneLiner: {
      en: "Build a Japan itinerary that fits the way you actually travel.",
      ja: "あなたの旅のスタイルに合わせた、日本旅行のプランを。",
    },
    url: "https://plan.moristack.com/",
    status: "live",
    category: "travel",
  },
  {
    id: "japan-phone-call",
    name: "Japan Phone Call",
    tagline: "communication",
    oneLiner: {
      en: "We make the call for you in Japanese — restaurants, hotels, clinics.",
      ja: "日本語の電話を代わりに。レストラン・ホテル・クリニックへ。",
    },
    url: "https://call.moristack.com/",
    status: "live",
    category: "communication",
  },
];

export function getServices(locale: "en" | "ja"): Array<
  Omit<Service, "oneLiner"> & { oneLiner: string }
> {
  return SERVICES.map((service) => ({
    id: service.id,
    name: service.name,
    tagline: service.tagline,
    oneLiner: service.oneLiner[locale],
    url: service.url,
    status: service.status,
    category: service.category,
  }));
}
