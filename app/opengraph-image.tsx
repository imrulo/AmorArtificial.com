import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "AmorArtificial.com — Premium Domain for Artificial Love";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0A0A0A 0%, #1a0a20 50%, #0A0A0A 100%)",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: 600,
            height: 600,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(255,45,149,0.35), transparent 70%)",
            top: -100,
          }}
        />
        <p
          style={{
            fontSize: 28,
            color: "#00E5FF",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            marginBottom: 16,
          }}
        >
          Premium Domain — Available for Acquisition
        </p>
        <h1
          style={{
            fontSize: 72,
            fontWeight: 800,
            background: "linear-gradient(135deg, #FF2D95, #00E5FF, #7B2CBF)",
            backgroundClip: "text",
            color: "transparent",
            margin: 0,
          }}
        >
          AmorArtificial.com
        </h1>
        <p
          style={{
            fontSize: 28,
            color: "#F8F1FF",
            marginTop: 24,
            opacity: 0.85,
            maxWidth: 800,
            textAlign: "center",
          }}
        >
          The Ultimate Domain for Artificial Love &amp; Emotional AI
        </p>
      </div>
    ),
    { ...size }
  );
}
