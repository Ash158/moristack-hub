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
    "## More",
    "",
    `- [About](${base}/about): who runs MORISTACK and how requests are handled`,
    `- [Guides](${base}/guides): featured how-to guides from both services`,
    `- [Contact](${base}/contact)`
  );

  return new Response(lines.join("\n") + "\n", {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
