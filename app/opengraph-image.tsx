import { ImageResponse } from "next/og";

import { profile } from "@/lib/content";

export const alt = `${profile.name} — ${profile.role.fr}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#1E1E1E",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 96,
            height: 96,
            borderRadius: 21,
            background: "#121212",
            fontSize: 34,
            fontWeight: 700,
          }}
        >
          <span style={{ color: "#FAFAFA" }}>RD</span>
          <span style={{ color: "#FFBD18" }}>.</span>
        </div>

        <div style={{ display: "flex", fontSize: 68, fontWeight: 700, color: "#FAFAFA", marginTop: 40 }}>
          {profile.name}
        </div>
        <div style={{ display: "flex", fontSize: 32, color: "#B4B4B4", marginTop: 16 }}>
          {profile.role.fr} · {profile.location.fr}
        </div>
      </div>
    ),
    size,
  );
}
