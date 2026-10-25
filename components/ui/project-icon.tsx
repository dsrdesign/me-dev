/* Icône d'un projet : l'icône de l'app quand elle existe, sinon l'initiale
   du nom sur un fond neutre. */
export function ProjectIcon({
  name,
  icon,
  size = 40,
}: {
  name: string;
  icon?: string;
  size?: number;
}) {
  const style = { width: size, height: size };

  if (icon) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={icon}
        alt=""
        width={size}
        height={size}
        style={style}
        className="shrink-0 rounded-[22%] border border-border object-cover"
      />
    );
  }

  return (
    <span
      aria-hidden
      style={style}
      className="inline-flex shrink-0 items-center justify-center rounded-[22%] border border-border bg-surface text-sm font-semibold text-foreground-muted"
    >
      {name.charAt(0)}
    </span>
  );
}
