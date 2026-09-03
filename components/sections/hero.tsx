"use client";

import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button-link";
import { profile } from "@/lib/content";
import { useLanguage } from "@/lib/language-context";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="pt-10 pb-7 sm:pt-14 sm:pb-10">
      <Container>
        <div className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-xs font-medium text-foreground-muted">
          <span className="h-1.5 w-1.5 rounded-full bg-primary-500" aria-hidden />
          {t({ fr: "Disponible pour de nouvelles opportunités", en: "Open to new opportunities" })}
        </div>

        <h1 className="mt-6 max-w-2xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          {profile.name}
        </h1>
        <p className="mt-2 text-lg text-foreground-muted">
          {t(profile.role)} · {t(profile.location)}
        </p>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-foreground-muted">{t(profile.tagline)}</p>

        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href="/#projets" variant="solid">
            {t({ fr: "Voir mes projets", en: "See my projects" })}
          </ButtonLink>
          <ButtonLink href="/#contact" variant="outline">
            {t({ fr: "Me contacter", en: "Get in touch" })}
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
