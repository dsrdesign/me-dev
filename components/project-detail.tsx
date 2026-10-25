"use client";

import Link from "next/link";

import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button-link";
import { Chip } from "@/components/ui/chip";
import { LinkIcon } from "@/components/ui/link-icon";
import type { Project } from "@/lib/content";
import { useLanguage } from "@/lib/language-context";

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="text-sm font-semibold uppercase tracking-wide text-foreground-muted">{children}</h2>;
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-sm leading-relaxed text-foreground-muted">
          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-foreground-muted" aria-hidden />
          {item}
        </li>
      ))}
    </ul>
  );
}

export function ProjectDetail({ project }: { project: Project }) {
  const { t } = useLanguage();

  const infos = [
    { label: { fr: "Statut", en: "Status" }, value: t(project.status) },
    { label: { fr: "Période", en: "Period" }, value: project.period },
    ...(project.platform ? [{ label: { fr: "Plateforme", en: "Platform" }, value: t(project.platform) }] : []),
    { label: { fr: "Rôle", en: "Role" }, value: t(project.role) },
  ];

  return (
    <article className="py-16 sm:py-20">
      <Container>
        <Link
          href="/#projets"
          className="text-sm text-foreground-muted transition-colors hover:text-foreground"
        >
          ← {t({ fr: "Retour aux projets", en: "Back to projects" })}
        </Link>

        <p className="mt-6 text-sm font-medium text-foreground-muted">{t(project.category)}</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          {project.name}
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-foreground-muted">{t(project.tagline)}</p>

        {project.links && project.links.length > 0 ? (
          <div className="mt-6 flex flex-wrap gap-3">
            {project.links.map((link) => (
              <ButtonLink
                key={link.href}
                href={link.href}
                variant="outline"
                className="hover:border-primary-500 hover:text-primary-500"
              >
                <LinkIcon href={link.href} />
                {t(link.label)}
              </ButtonLink>
            ))}
          </div>
        ) : null}

        {project.stats && project.stats.length > 0 ? (
          <div className="mt-10 grid grid-cols-2 gap-6 sm:max-w-xl sm:grid-cols-4">
            {project.stats.map((stat) => (
              <div key={stat.value}>
                <p className="text-2xl font-semibold text-foreground">{stat.value}</p>
                <p className="mt-1 text-sm text-foreground-muted">{t(stat.label)}</p>
              </div>
            ))}
          </div>
        ) : null}

        <div className="mt-12 grid gap-12 lg:grid-cols-[minmax(0,1fr)_16rem]">
          <div className="space-y-10">
            <section>
              <SectionTitle>{t({ fr: "À propos", en: "About" })}</SectionTitle>
              <div className="mt-4 max-w-2xl space-y-5 text-base leading-relaxed text-foreground-muted">
                {t(project.description)
                  .split("\n\n")
                  .map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
              </div>
              {project.insight ? (
                <div className="mt-8 max-w-2xl border-l-2 border-primary-500 py-1 pl-5">
                  <p className="text-base italic leading-relaxed text-foreground">{t(project.insight)}</p>
                </div>
              ) : null}
            </section>

            {project.features && project.features.length > 0 ? (
              <section className="max-w-2xl">
                <SectionTitle>{t({ fr: "Fonctionnalités", en: "Features" })}</SectionTitle>
                <BulletList items={project.features.map((feature) => t(feature))} />
              </section>
            ) : null}

            {project.challenges && project.challenges.length > 0 ? (
              <section className="max-w-2xl">
                <SectionTitle>{t({ fr: "Défis techniques", en: "Technical challenges" })}</SectionTitle>
                <BulletList items={project.challenges.map((challenge) => t(challenge))} />
              </section>
            ) : null}
          </div>

          <aside className="space-y-10">
            {project.stack.length > 0 ? (
              <section>
                <SectionTitle>{t({ fr: "Stack", en: "Stack" })}</SectionTitle>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <Chip key={item}>{item}</Chip>
                  ))}
                </div>
              </section>
            ) : null}

            <section>
              <SectionTitle>{t({ fr: "Infos", en: "Info" })}</SectionTitle>
              <dl className="mt-4 space-y-4">
                {infos.map((info) => (
                  <div key={info.label.en}>
                    <dt className="text-xs text-foreground-muted">{t(info.label)}</dt>
                    <dd className="mt-1 text-sm text-foreground">{info.value}</dd>
                  </div>
                ))}
              </dl>
            </section>

            <section className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Chip key={tag}>{tag}</Chip>
              ))}
            </section>
          </aside>
        </div>
      </Container>
    </article>
  );
}
