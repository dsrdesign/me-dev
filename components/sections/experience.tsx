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

        <div className="mt-8 space-y-10 border-l border-border">
          {experience.map((entry) => {
            const current = entry.period.en.startsWith("Since");
            return (
              <div key={entry.company} className="relative pl-8">
                <span
                  aria-hidden
                  className={`absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full ring-4 ring-background ${
                    current ? "bg-primary-500" : "bg-secondary-300"
                  }`}
                />
                <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
                  <h3 className="text-base font-semibold text-foreground">{entry.company}</h3>
                  <span
                    className={`rounded-full border px-3 py-0.5 text-xs font-medium ${
                      current
                        ? "border-primary-500 text-foreground"
                        : "border-border text-foreground-muted"
                    }`}
                  >
                    {t(entry.period)}
                  </span>
                </div>
                <p className="mt-1 text-sm font-medium text-foreground">{t(entry.role)}</p>
                <p className="mt-0.5 text-sm text-foreground-muted">
                  {t(entry.location)} · {t(entry.type)}
                </p>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-foreground-muted">
                  {t(entry.description)}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {entry.stack.map((item) => (
                    <Chip key={item}>{item}</Chip>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <h3 className="mt-14 text-sm font-semibold uppercase tracking-wide text-foreground-muted">
          {t({ fr: "Formation", en: "Education" })}
        </h3>
        <div className="mt-6 space-y-8 border-l border-border">
          {education.map((entry) => (
            <div key={entry.degree.en} className="relative pl-8">
              <span
                aria-hidden
                className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-secondary-300 ring-4 ring-background"
              />
              <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
                <h4 className="text-base font-semibold text-foreground">{entry.school}</h4>
                <span className="rounded-full border border-border px-3 py-0.5 text-xs font-medium text-foreground-muted">
                  {entry.period}
                </span>
              </div>
              <p className="mt-1 text-sm font-medium text-foreground">{t(entry.degree)}</p>
              {entry.detail ? (
                <p className="mt-0.5 inline-flex items-center gap-1.5 text-sm text-foreground-muted">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary-500" aria-hidden />
                  {t(entry.detail)}
                </p>
              ) : null}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
