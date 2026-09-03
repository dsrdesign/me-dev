"use client";

import { Container } from "@/components/ui/container";
import { profile } from "@/lib/content";
import { useLanguage } from "@/lib/language-context";

export function About() {
  const { t } = useLanguage();

  return (
    <section id="a-propos" className="scroll-mt-24 py-7 sm:py-10">
      <Container>
        <h2 className="text-sm font-semibold uppercase tracking-wide text-foreground-muted">
          {t({ fr: "À propos", en: "About" })}
        </h2>
        <p className="mt-4 max-w-2xl text-2xl font-medium leading-snug text-foreground sm:text-3xl">
          {t(profile.tagline)}
        </p>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-foreground-muted">{t(profile.bio)}</p>
      </Container>
    </section>
  );
}
