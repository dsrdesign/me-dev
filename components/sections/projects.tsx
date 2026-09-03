"use client";

import Link from "next/link";

import { Container } from "@/components/ui/container";
import { Chip } from "@/components/ui/chip";
import { projects } from "@/lib/content";
import { useLanguage } from "@/lib/language-context";

export function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projets" className="scroll-mt-24 py-7 sm:py-10">
      <Container>
        <h2 className="text-sm font-semibold uppercase tracking-wide text-foreground-muted">
          {t({ fr: "Projets", en: "Projects" })}
        </h2>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projets/${project.slug}`}
              className="card-soft card-soft-hover flex flex-col p-6"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="text-xs font-medium text-foreground-muted">{t(project.category)}</span>
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-foreground-muted">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary-500" aria-hidden />
                  {t(project.status)}
                </span>
              </div>

              <h3 className="mt-4 text-lg font-semibold text-foreground">{project.name}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-foreground-muted">{t(project.tagline)}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Chip key={tag}>{tag}</Chip>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
