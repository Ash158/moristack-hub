import Link from "next/link";

type LogoSize = "sm" | "md" | "lg";

const SIZES: Record<
  LogoSize,
  { fontSize: number; dotSize: number; gap: number; markWidth: number; barHeight: number; markGap: number }
> = {
  sm: { fontSize: 17, dotSize: 5, gap: 6, markWidth: 23, barHeight: 3, markGap: 5 },
  md: { fontSize: 20, dotSize: 6, gap: 7, markWidth: 28, barHeight: 3, markGap: 5 },
  lg: { fontSize: 24, dotSize: 7, gap: 8, markWidth: 34, barHeight: 4, markGap: 6 },
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
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: s.gap + 2,
        color: "inherit",
        lineHeight: 1,
      }}
    >
      <span
        aria-hidden="true"
        style={{
          display: "inline-flex",
          width: s.markWidth,
          flexDirection: "column",
          alignItems: "flex-start",
          gap: s.markGap,
        }}
      >
        <span style={{ width: "69%", height: s.barHeight, background: "currentColor" }} />
        <span style={{ width: "100%", height: s.barHeight, background: "currentColor" }} />
        <span style={{ width: "50%", height: s.barHeight, background: "currentColor" }} />
      </span>
      <span
        style={{
          display: "inline-flex",
          alignItems: "center",
          fontSize: s.fontSize,
          letterSpacing: "-0.025em",
          lineHeight: 1,
        }}
      >
        <span style={{ fontWeight: 900 }}>MORI</span>
        <span
          aria-hidden="true"
          style={{
            width: s.dotSize,
            height: s.dotSize,
            background: "currentColor",
            display: "inline-block",
            borderRadius: "50%",
            margin: `0 ${Math.round(s.dotSize * 0.4)}px`,
          }}
        />
        <span style={{ fontWeight: 300 }}>STACK</span>
      </span>
    </span>
  );

  if (!asLink) return inner;
  return (
    <Link href="/" aria-label="MORISTACK home" style={{ color: "inherit", textDecoration: "none" }}>
      {inner}
    </Link>
  );
}
