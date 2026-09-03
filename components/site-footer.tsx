"use client";

import { Container } from "@/components/ui/container";
import { profile } from "@/lib/content";
import { useLanguage } from "@/lib/language-context";

export function SiteFooter() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <Container className="flex flex-col gap-4 py-10 text-sm text-foreground-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {year} {profile.name}
        </p>
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          <a href={`mailto:${profile.email}`} className="hover:text-foreground">
            {profile.email}
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
            LinkedIn
          </a>
          <a href="/" className="hover:text-foreground">
            {t({ fr: "Retour en haut", en: "Back to top" })}
          </a>
        </div>
      </Container>
    </footer>
  );
}
