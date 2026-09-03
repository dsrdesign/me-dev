import Link from "next/link";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "outline";
  download?: boolean;
};

/* `download` force un <a> natif (fichier statique, ex. le CV) plutôt que le
   routeur client de Next, qui ne sait pas gérer un téléchargement. */
export function ButtonLink({ href, children, variant = "solid", download }: ButtonLinkProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-[var(--radius-md)] px-5 py-2.5 text-sm font-medium transition-colors duration-200";
  const styles =
    variant === "solid"
      ? "bg-secondary-800 text-secondary-25 hover:bg-secondary-700"
      : "border border-border text-foreground hover:border-foreground-muted";
  const className = `${base} ${styles}`;

  if (!download && href.startsWith("/")) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }

  const isHttp = href.startsWith("http");

  return (
    <a
      href={href}
      className={className}
      download={download}
      target={!download && isHttp ? "_blank" : undefined}
      rel={!download && isHttp ? "noopener noreferrer" : undefined}
    >
      {children}
    </a>
  );
}
