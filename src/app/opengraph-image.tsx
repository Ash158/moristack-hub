import { ImageResponse } from "next/og";

// Next.js will automatically serve this at /opengraph-image (1200x630) and
// wire it into the metadata-base openGraph.images entry. This gives every
// share preview a proper card and gives search engines an image asset to
// consider for SERP features.
export const alt = "MORISTACK — Operations for the practical side of Japan";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          background: "#ffffff",
          padding: "96px",
          color: "#171717",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            fontSize: 36,
            fontWeight: 700,
            letterSpacing: "-0.02em",
          }}
        >
          <span style={{ fontWeight: 500 }}>MORI</span>
          <span
            style={{
              width: 14,
              height: 14,
              background: "#b1502f",
              transform: "rotate(45deg)",
              borderRadius: 2,
            }}
          />
          <span style={{ fontWeight: 800 }}>STACK</span>
        </div>
        <div
          style={{
            marginTop: 32,
            fontSize: 68,
            fontWeight: 700,
            lineHeight: 1.15,
            letterSpacing: "-0.02em",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <span>Operations for the</span>
          <span>practical side of Japan.</span>
        </div>
        <div
          style={{
            marginTop: 48,
            display: "flex",
            gap: 16,
            fontSize: 24,
            color: "#525252",
            fontWeight: 500,
          }}
        >
          <span>Japanese phone calls</span>
          <span style={{ color: "#a3a3a3" }}>·</span>
          <span>Custom Japan trip guides</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
