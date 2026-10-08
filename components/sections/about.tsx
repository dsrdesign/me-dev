"use client";

import { Container } from "@/components/ui/container";
import { profile } from "@/lib/content";
import { useLanguage } from "@/lib/language-context";
import { ButtonLink } from "@/components/ui/button-link";

export function About() {
  const { t } = useLanguage();

  return (
    <section id="a-propos" className="scroll-mt-24 py-7 sm:py-10">
      <Container>
        <p className="max-w-2xl text-2xl font-medium leading-snug text-foreground sm:text-3xl">
          {t(profile.tagline)}
        </p>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-foreground-muted">{t(profile.bio)}</p>
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
