"use client";

import { Container } from "@/components/ui/container";
import { Chip } from "@/components/ui/chip";
import { skillGroups } from "@/lib/content";
import { useLanguage } from "@/lib/language-context";

export function Skills() {
  const { t } = useLanguage();

  return (
    <section id="competences" className="scroll-mt-24 py-7 sm:py-10">
      <Container>
        <h2 className="text-sm font-semibold uppercase tracking-wide text-foreground-muted">
          {t({ fr: "Compétences", en: "Skills" })}
        </h2>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div key={group.title.en} className="card-soft p-6">
              <h3 className="text-sm font-semibold text-foreground">{t(group.title)}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Chip key={item}>{item}</Chip>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
