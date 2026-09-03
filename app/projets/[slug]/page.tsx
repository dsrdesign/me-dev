import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ProjectDetail } from "@/components/project-detail";
import { projects } from "@/lib/content";
import { SITE_LOCALE, SITE_NAME } from "@/lib/site";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps<"/projets/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((entry) => entry.slug === slug);

  if (!project) {
    return {};
  }

  const title = project.name;
  const description = project.tagline.fr;
  const url = `/projets/${project.slug}`;

  return {
    title,
    description,
    keywords: [...project.tags, ...project.stack],
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      siteName: SITE_NAME,
      title,
      description,
      url,
      locale: SITE_LOCALE,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function ProjectPage({ params }: PageProps<"/projets/[slug]">) {
  const { slug } = await params;
  const project = projects.find((entry) => entry.slug === slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetail project={project} />;
}
