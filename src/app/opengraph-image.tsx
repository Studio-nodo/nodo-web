import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Studio Nodo — Tecnología y Diseño en Unión";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #07080c 0%, #0a0b0f 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: "bold",
            color: "#ffffff",
            marginBottom: 24,
            letterSpacing: "-1px",
          }}
        >
          Studio Nodo
        </div>
        <div
          style={{
            fontSize: 36,
            color: "#c8c5c5",
            marginBottom: 80,
          }}
        >
          Tecnología y Diseño en Unión
        </div>
        <div
          style={{
            fontSize: 28,
            color: "#808080",
          }}
        >
          studio-nodo.com
        </div>
      </div>
    ),
    { ...size }
  );
}
