import { ImageResponse } from "next/og";

import { projects } from "@/lib/content";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function OpengraphImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((entry) => entry.slug === slug);

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
        <div style={{ display: "flex", fontSize: 28, fontWeight: 600, color: "#FFBD18" }}>
          {project ? project.category.fr : "Projet"}
        </div>
        <div style={{ display: "flex", fontSize: 68, fontWeight: 700, color: "#FAFAFA", marginTop: 20 }}>
          {project ? project.name : "Projet"}
        </div>
        {project ? (
          <div style={{ display: "flex", fontSize: 30, color: "#B4B4B4", marginTop: 24, maxWidth: 900 }}>
            {project.tagline.fr}
          </div>
        ) : null}
      </div>
    ),
    size,
  );
}
