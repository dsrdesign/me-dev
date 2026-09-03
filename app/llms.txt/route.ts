import { education, experience, profile, projects, skillGroups } from "@/lib/content";
import { SITE_URL } from "@/lib/site";

/* /llms.txt — un résumé texte brut du site, pensé pour les assistants IA et
   agents qui lisent le contenu sans exécuter de JavaScript (convention
   communautaire llms.txt, cf. llmstxt.org). Généré depuis lib/content.ts :
   ne peut pas partir en désaccord avec ce que montre la page. */

function buildLlmsTxt(): string {
  const lines: string[] = [];

  lines.push(`# ${profile.name}`);
  lines.push("");
  lines.push(`> ${profile.role.fr} — ${profile.location.fr}`);
  lines.push("");
  lines.push(profile.bio.fr);
  lines.push("");
  lines.push(`Site : ${SITE_URL}`);
  lines.push(`Email : ${profile.email}`);
  lines.push(`LinkedIn : ${profile.linkedin}`);
  lines.push(`CV : ${SITE_URL}${profile.cvHref}`);

  lines.push("");
  lines.push("## Compétences");
  for (const group of skillGroups) {
    lines.push(`- ${group.title.fr} : ${group.items.join(", ")}`);
  }

  lines.push("");
  lines.push("## Expérience");
  for (const entry of experience) {
    lines.push(`- ${entry.role.fr} · ${entry.company} (${entry.location.fr}, ${entry.type.fr}, ${entry.period.fr})`);
    lines.push(`  ${entry.description.fr}`);
  }

  lines.push("");
  lines.push("## Formation");
  for (const entry of education) {
    const detail = entry.detail ? ` — ${entry.detail.fr}` : "";
    lines.push(`- ${entry.degree.fr}, ${entry.school} (${entry.period})${detail}`);
  }

  lines.push("");
  lines.push("## Projets");
  for (const project of projects) {
    lines.push(`### ${project.name}`);
    lines.push(`${project.category.fr} · ${project.status.fr} · ${project.period}`);
    lines.push(`Rôle : ${project.role.fr}`);
    lines.push(project.tagline.fr);
    lines.push(project.description.fr);
    if (project.stack.length > 0) {
      lines.push(`Stack : ${project.stack.join(", ")}`);
    }
    lines.push(`Fiche : ${SITE_URL}/projets/${project.slug}`);
    for (const link of project.links ?? []) {
      lines.push(`${link.label.fr} : ${link.href}`);
    }
    lines.push("");
  }

  return lines.join("\n").trim() + "\n";
}

export function GET() {
  return new Response(buildLlmsTxt(), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
