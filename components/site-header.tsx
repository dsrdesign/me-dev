"use client";

import Link from "next/link";

import { Container } from "@/components/ui/container";
import { ThemeToggle } from "@/components/theme-toggle";
import { profile } from "@/lib/content";
import { useLanguage } from "@/lib/language-context";
import type { LocalizedString } from "@/lib/i18n";

const NAV_ITEMS: { id: string; label: LocalizedString }[] = [
  { id: "a-propos", label: { fr: "À propos", en: "About" } },
  { id: "competences", label: { fr: "Compétences", en: "Skills" } },
  { id: "projets", label: { fr: "Projets", en: "Projects" } },
  { id: "parcours", label: { fr: "Parcours", en: "Experience" } },
  { id: "contact", label: { fr: "Contact", en: "Contact" } },
];

export function SiteHeader() {
  const { locale, setLocale, t } = useLanguage();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur">
      <Container className="flex h-16 items-center justify-between gap-6">
        <Link href="/" className="shrink-0 text-sm font-semibold tracking-tight text-foreground">
          {profile.name}
        </Link>

        <nav className="flex min-w-0 items-center gap-5 overflow-x-auto whitespace-nowrap">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.id}
              href={`/#${item.id}`}
              className="text-sm text-foreground-muted transition-colors hover:text-foreground"
            >
              {t(item.label)}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-3">
          <div className="flex items-center gap-1 rounded-full border border-border p-1 text-xs font-medium">
            {(["fr", "en"] as const).map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setLocale(option)}
                aria-pressed={locale === option}
                className={`rounded-full px-2.5 py-1 transition-colors ${
                  locale === option ? "bg-secondary-800 text-secondary-25" : "text-foreground-muted hover:text-foreground"
                }`}
              >
                {option.toUpperCase()}
              </button>
            ))}
          </div>
          <ThemeToggle />
        </div>
      </Container>
    </header>
  );
}
