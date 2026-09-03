"use client";

import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button-link";
import { profile } from "@/lib/content";
import { useLanguage } from "@/lib/language-context";

export function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="scroll-mt-24 py-7 sm:py-11">
      <Container>
        <div className="card-soft flex flex-col items-start gap-6 p-8 sm:p-12">
          <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">
            {t({ fr: "Discutons de votre projet", en: "Let's talk about your project" })}
          </h2>
          <p className="max-w-xl text-base leading-relaxed text-foreground-muted">
            {t({
              fr: "Ouvert aux opportunités et collaborations. Le plus simple pour me joindre : l'email ou LinkedIn.",
              en: "Open to opportunities and collaborations. The easiest way to reach me is by email or LinkedIn.",
            })}
          </p>
          <div className="flex flex-wrap gap-3">
            <ButtonLink href={`mailto:${profile.email}`} variant="solid">
              {profile.email}
            </ButtonLink>
            <ButtonLink href={profile.linkedin} variant="outline">
              LinkedIn
            </ButtonLink>
            <ButtonLink href={profile.cvHref} variant="outline" download>
              {t({ fr: "Télécharger le CV", en: "Download CV" })}
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
