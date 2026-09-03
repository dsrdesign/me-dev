import type { Metadata, Viewport } from "next";
import { Outfit } from "next/font/google";
import Script from "next/script";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { profile, skillGroups } from "@/lib/content";
import { LanguageProvider } from "@/lib/language-context";
import { SITE_LOCALE, SITE_NAME, SITE_URL } from "@/lib/site";
import { ThemeProvider } from "@/lib/theme-context";
import "./globals.css";

/* Pose data-theme sur <html> avant la première peinture, à partir du choix
   mémorisé — sans ça, un visiteur qui a choisi "sombre" verrait un éclair de
   thème clair le temps que React s'hydrate. */
const THEME_INIT_SCRIPT = `(function(){try{var t=localStorage.getItem('portfolio-theme');if(t==='light'||t==='dark'){document.documentElement.setAttribute('data-theme',t);}}catch(e){}})();`;

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const title = `${profile.name} — ${profile.role.fr}`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: title,
    template: `%s · ${profile.name}`,
  },
  description: profile.bio.fr,
  keywords: skillGroups.flatMap((group) => group.items),
  authors: [{ name: profile.name, url: SITE_URL }],
  creator: profile.name,

  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    title,
    description: profile.bio.fr,
    url: SITE_URL,
    locale: SITE_LOCALE,
  },

  twitter: {
    card: "summary_large_image",
    title,
    description: profile.bio.fr,
  },

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FAFAFA" },
    { media: "(prefers-color-scheme: dark)", color: "#121212" },
  ],
  colorScheme: "light dark",
};

/* Décrit Roland comme personne pour les moteurs de recherche et les
   assistants IA qui lisent les données structurées (JSON-LD) plutôt que le
   HTML seul — plus fiable qu'un simple <title> pour répondre à « qui est
   Roland Djenwa ». */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.role.fr,
  description: profile.bio.fr,
  url: SITE_URL,
  email: `mailto:${profile.email}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Douala",
    addressCountry: "CM",
  },
  sameAs: [profile.linkedin],
  knowsAbout: skillGroups.flatMap((group) => group.items),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" className={`${outfit.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="flex min-h-full flex-col">
        <Script id="theme-init" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
        <ThemeProvider>
          <LanguageProvider>
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </LanguageProvider>
        </ThemeProvider>

        <script
          type="application/ld+json"
          // Contenu figé, écrit ici même : aucune donnée extérieure n'entre
          // dans cette chaîne, donc rien à assainir.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
