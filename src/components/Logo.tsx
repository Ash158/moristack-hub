import Link from "next/link";

type LogoSize = "sm" | "md" | "lg";

const SIZES: Record<LogoSize, { fontSize: number; dotSize: number; gap: number; badgeFont: number }> = {
  sm: { fontSize: 17, dotSize: 6, gap: 6, badgeFont: 10.5 },
  md: { fontSize: 19, dotSize: 7, gap: 6, badgeFont: 11 },
  lg: { fontSize: 24, dotSize: 8, gap: 7, badgeFont: 12 },
};

export function Logo({
  size = "md",
  asLink = true,
}: {
  size?: LogoSize;
  asLink?: boolean;
}) {
  const s = SIZES[size];
  const inner = (
    <span className="inline-flex items-center gap-3 text-fg">
      <span
        className="inline-flex items-center tracking-tight"
        style={{ gap: s.gap, fontSize: s.fontSize, lineHeight: 1 }}
      >
        <span style={{ fontWeight: 400 }}>MORI</span>
        <span
          aria-hidden="true"
          style={{
            width: s.dotSize,
            height: s.dotSize,
            background: "var(--accent)",
            display: "inline-block",
          }}
        />
        <span style={{ fontWeight: 800 }}>STACK</span>
      </span>
      <span
        className="rounded-full bg-accent-soft px-2 py-[3px] font-bold tracking-wider text-accent"
        style={{ fontSize: s.badgeFont, lineHeight: 1 }}
      >
        HUB
      </span>
    </span>
  );

  if (!asLink) return inner;
  return (
    <Link href="/" aria-label="MORISTACK home" className="no-underline">
      {inner}
    </Link>
  );
}
