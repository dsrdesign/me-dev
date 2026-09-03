"use client";

import Link from "next/link";

import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button-link";
import { Chip } from "@/components/ui/chip";
import type { Project } from "@/lib/content";
import { useLanguage } from "@/lib/language-context";

export function ProjectDetail({ project }: { project: Project }) {
  const { t } = useLanguage();

  return (
    <article className="py-16 sm:py-20">
      <Container>
        <Link
          href="/#projets"
          className="text-sm text-foreground-muted transition-colors hover:text-foreground"
        >
          ← {t({ fr: "Retour aux projets", en: "Back to projects" })}
        </Link>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <span className="text-sm font-medium text-foreground-muted">{t(project.category)}</span>
          <span className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-primary-500" aria-hidden />
            {t(project.status)} · {project.period}
          </span>
        </div>

        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          {project.name}
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-foreground-muted">{t(project.tagline)}</p>

        {project.links && project.links.length > 0 ? (
          <div className="mt-6 flex flex-wrap gap-3">
            {project.links.map((link) => (
              <ButtonLink key={link.href} href={link.href} variant="outline">
                {t(link.label)}
              </ButtonLink>
            ))}
          </div>
        ) : null}

        {project.stats && project.stats.length > 0 ? (
          <div className="mt-10 grid grid-cols-2 gap-6 sm:max-w-md">
            {project.stats.map((stat) => (
              <div key={stat.value}>
                <p className="text-2xl font-semibold text-foreground">{stat.value}</p>
                <p className="mt-1 text-sm text-foreground-muted">{t(stat.label)}</p>
              </div>
            ))}
          </div>
        ) : null}

        <p className="mt-10 max-w-2xl text-base leading-relaxed text-foreground-muted">
          {t(project.description)}
        </p>

        {project.insight ? (
          <div className="mt-8 max-w-2xl border-l-2 border-primary-500 py-1 pl-5">
            <p className="text-base italic leading-relaxed text-foreground">{t(project.insight)}</p>
          </div>
        ) : null}

        {project.challenges && project.challenges.length > 0 ? (
          <div className="mt-10 max-w-2xl">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-foreground-muted">
              {t({ fr: "Défis techniques", en: "Technical challenges" })}
            </h2>
            <ul className="mt-4 space-y-3">
              {project.challenges.map((challenge) => (
                <li key={t(challenge)} className="flex gap-3 text-sm leading-relaxed text-foreground-muted">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-foreground-muted" aria-hidden />
                  {t(challenge)}
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        <div className="mt-10 grid gap-8 sm:grid-cols-2">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-foreground-muted">
              {t({ fr: "Rôle", en: "Role" })}
            </h2>
            <p className="mt-3 text-sm text-foreground">{t(project.role)}</p>
          </div>

          {project.stack.length > 0 ? (
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wide text-foreground-muted">
                {t({ fr: "Stack", en: "Stack" })}
              </h2>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <Chip key={item}>{item}</Chip>
                ))}
              </div>
            </div>
          ) : null}
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Chip key={tag}>{tag}</Chip>
          ))}
        </div>
      </Container>
    </article>
  );
}
