"use client";

import { useState } from "react";
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

function MenuIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

export function SiteHeader() {
  const { locale, setLocale, t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link href="/" className="shrink-0 text-sm font-semibold tracking-tight text-foreground">
          {profile.name}
        </Link>

        <nav className="hidden items-center gap-5 md:flex">
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
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? t({ fr: "Fermer le menu", en: "Close menu" }) : t({ fr: "Ouvrir le menu", en: "Open menu" })}
            aria-expanded={menuOpen}
            className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-border text-foreground-muted transition-colors hover:text-foreground md:hidden"
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </Container>

      {menuOpen ? (
        <div className="border-t border-border bg-background md:hidden">
          <Container>
            <nav className="flex flex-col py-2">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.id}
                  href={`/#${item.id}`}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-[var(--radius-sm)] px-2 py-2.5 text-sm text-foreground-muted transition-colors hover:bg-surface-secondary hover:text-foreground"
                >
                  {t(item.label)}
                </Link>
              ))}
            </nav>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
