import { content } from "@/lib/content";

// llms.txt convention (https://llmstxt.org/): a plain-text index for AI
// crawlers and assistants, generated from the same copy source (content.ts)
// used to render the homepage, so it can never drift out of sync.
export const dynamic = "force-static";
export const revalidate = 3600;

export function GET() {
  const base = "https://moristack.com";
  const lines: string[] = [
    "# MORISTACK",
    "",
    `> ${content.hero.subhead}`,
    "",
    "moristack.com is the umbrella site for two independent Japan-focused services:",
    "",
  ];
  for (const item of content.services.items) {
    lines.push(`- [${item.productName}](${item.url}): ${item.desc}`);
  }
  lines.push(
    "",
    "## Guides",
    "",
    `- [Cash vs IC Card in Japan 2026](${base}/guides/cash-vs-ic-card-in-japan-2026): Where IC cards (Suica, Pasmo, ICOCA) work in Japan, where cash is still required, and how much yen to bring for a typical trip.`,
    `- [Onsen and Sento With Tattoos](${base}/guides/onsen-sento-tattoo-etiquette-japan): Whether tattoos are allowed at Japanese onsen and sento, how to find a tattoo-friendly bath, cover-up stickers, and basic bathing etiquette.`,
    `- [Health Insurance vs Travel Insurance in Japan](${base}/guides/health-insurance-vs-travel-insurance-japan): The difference between a Japanese hoken-sho and foreign travel insurance at a clinic: who pays what, when, and what paperwork each system needs.`,
    "",
    "## More",
    "",
    `- [About](${base}/about): who runs MORISTACK and how requests are handled`,
    `- [All guides](${base}/guides)`,
    `- [Contact](${base}/contact)`
  );

  return new Response(lines.join("\n") + "\n", {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
