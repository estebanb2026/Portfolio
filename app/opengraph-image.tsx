import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Esteban Barrera — Senior Product Designer";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          background: "#0a0a0a",
          padding: 72,
          gap: 8,
        }}
      >
        <div
          style={{
            fontSize: 56,
            fontStyle: "italic",
            lineHeight: 1.05,
            color: "#f0f0f0",
            fontFamily: "Georgia, 'Times New Roman', serif",
          }}
        >
          Designed for humans.
        </div>
        <div
          style={{
            fontSize: 56,
            fontStyle: "italic",
            lineHeight: 1.05,
            color: "#f0f0f0",
            fontFamily: "Georgia, 'Times New Roman', serif",
          }}
        >
          Built with AI.
        </div>
        <div
          style={{
            fontSize: 26,
            fontWeight: 500,
            color: "#c8b89a",
            marginTop: 28,
            fontFamily:
              "ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif",
          }}
        >
          Esteban Barrera
        </div>
        <div
          style={{
            fontSize: 20,
            color: "#888888",
            fontFamily:
              "ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif",
          }}
        >
          Senior Product Designer
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
