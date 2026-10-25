/* Icône d'un lien de projet, choisie d'après son adresse : boutique Android,
   boutique iOS, ou site web par défaut. */
export function LinkIcon({ href }: { href: string }) {
  const common = { viewBox: "0 0 24 24", width: 16, height: 16, "aria-hidden": true } as const;

  if (href.includes("play.google.com")) {
    return (
      <svg {...common} fill="currentColor">
        <path d="M4.2 2.6a1.5 1.5 0 0 0-.7 1.3v16.2c0 .5.3 1 .7 1.3l9.1-9.4-9.1-9.4Zm10.5 10.1 2.7 2.8-10.9 6.2 8.2-9Zm0-1.4-8.2-9L17.4 8.5l-2.7 2.8Zm3.9-1.7 2.2 1.2a1.2 1.2 0 0 1 0 2.4l-2.2 1.2-3-3.1 3-1.7Z" />
      </svg>
    );
  }

  if (href.includes("apps.apple.com")) {
    return (
      <svg {...common} fill="currentColor">
        <path d="M16.4 12.6c0-2.3 1.9-3.4 2-3.5-1.1-1.6-2.8-1.8-3.4-1.8-1.4-.1-2.8.9-3.5.9-.7 0-1.8-.8-3-.8-1.5 0-3 .9-3.8 2.3-1.6 2.8-.4 7 1.2 9.3.8 1.1 1.7 2.4 2.9 2.3 1.2 0 1.600-.7 3-.7s1.800.7 3 .7c1.300 0 2.100-1.100 2.900-2.200.9-1.300 1.300-2.500 1.300-2.600-.1 0-2.600-1-2.600-3.900ZM14.100 5.800c.6-.8 1.100-1.900.9-3-.9 0-2.100.6-2.700 1.400-.6.700-1.100 1.800-.9 2.900 1 .1 2.100-.5 2.700-1.300Z" />
      </svg>
    );
  }

  return (
    <svg {...common} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.600 2.500 3.900 5.500 3.900 9s-1.300 6.500-3.900 9c-2.600-2.500-3.900-5.500-3.900-9S9.400 5.500 12 3Z" />
    </svg>
  );
}
