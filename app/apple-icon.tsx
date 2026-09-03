import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/**
 * Icône d'écran d'accueil iOS.
 *
 * Safari ignore les icônes SVG et, faute de PNG, colle une capture de la page
 * sur l'écran d'accueil. `ImageResponse` rastérise la marque sans dépendance
 * ni binaire supplémentaire dans le dépôt.
 */
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#1E1E1E",
          fontSize: 72,
          fontWeight: 700,
        }}
      >
        <span style={{ color: "#FAFAFA" }}>RD</span>
        <span style={{ color: "#FFBD18" }}>.</span>
      </div>
    ),
    size,
  );
}
