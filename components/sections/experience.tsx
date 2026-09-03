"use client";

import { Container } from "@/components/ui/container";
import { Chip } from "@/components/ui/chip";
import { education, experience } from "@/lib/content";
import { useLanguage } from "@/lib/language-context";

export function Experience() {
  const { t } = useLanguage();

  return (
    <section id="parcours" className="scroll-mt-24 py-7 sm:py-10">
      <Container>
        <h2 className="text-sm font-semibold uppercase tracking-wide text-foreground-muted">
          {t({ fr: "Parcours", en: "Experience" })}
        </h2>

        <div className="mt-8 space-y-8">
          {experience.map((entry) => (
            <div key={entry.company} className="border-l-2 border-border pl-6">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-base font-semibold text-foreground">
                  {t(entry.role)} · {entry.company}
                </h3>
                <span className="text-sm text-foreground-muted">{t(entry.period)}</span>
              </div>
              <p className="mt-1 text-sm text-foreground-muted">
                {t(entry.location)} · {t(entry.type)}
              </p>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-foreground-muted">{t(entry.description)}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {entry.stack.map((item) => (
                  <Chip key={item}>{item}</Chip>
                ))}
              </div>
            </div>
          ))}
        </div>

        <h3 className="mt-7 text-sm font-semibold uppercase tracking-wide text-foreground-muted">
          {t({ fr: "Formation", en: "Education" })}
        </h3>
        <div className="mt-6 space-y-6">
          {education.map((entry) => (
            <div key={entry.degree.en} className="border-l-2 border-border pl-6">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h4 className="text-sm font-semibold text-foreground">{t(entry.degree)}</h4>
                <span className="text-sm text-foreground-muted">{entry.period}</span>
              </div>
              <p className="mt-1 text-sm text-foreground-muted">
                {entry.school}
                {entry.detail ? ` · ${t(entry.detail)}` : ""}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
