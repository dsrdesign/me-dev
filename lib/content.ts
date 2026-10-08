import type { LocalizedString } from "./i18n";

/* Contenu du portfolio de Roland Djenwa — extrait de son CV et de ses
   fiches projet. Toute donnée factuelle (dates, entreprises, stack) doit
   rester fidèle à la source ; seule la mise en forme éditoriale change
   d'une langue à l'autre. */

export const profile = {
  name: "Roland Djenwa",
  role: { fr: "Ingénieur Logiciel", en: "Software Engineer" } satisfies LocalizedString,
  location: { fr: "Douala, Cameroun", en: "Douala, Cameroon" } satisfies LocalizedString,
  email: "djenwaroland@gmail.com",
  phone: "+237 652 628 933",
  linkedin: "https://www.linkedin.com/in/roland-djenwa-sandjo/",
  cvHref: "/DJENWA_SANDJO_ROLAND_CV.pdf",
  tagline: {
    fr: "Je conçois et développe des applications web et mobile, du prototype à la production.",
    en: "I design and build web and mobile applications, from prototype to production.",
  } satisfies LocalizedString,
  bio: {
    fr: "Je suis un ingénieur logiciel passionné par le développement de solutions qui répondent à de vrais problèmes, sur le web comme sur mobile, avec React, Next.js, Angular, React Native, Expo et NestJS. J'accorde une grande importance à des architectures propres, évolutives et maintenables, fondées sur la Clean Architecture et les principes SOLID.",
    en: "I'm a software engineer passionate about building solutions that solve real problems, across web and mobile, with React, Next.js, Angular, React Native, Expo and NestJS. I care deeply about clean, scalable, maintainable architecture, grounded in Clean Architecture and SOLID principles.",
  } satisfies LocalizedString,
};

export type SkillGroup = {
  title: LocalizedString;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: { fr: "Architecture & pratiques", en: "Architecture & practices" },
    items: [
      "Clean Architecture",
      "Architecture Hexagonale",
      "SOLID",
      "Domain-Driven Design",
      "Design Patterns",
      "Tests unitaires",
      "OpenAPI / Swagger",
    ],
  },
  {
    title: { fr: "Mobile", en: "Mobile" },
    items: ["React Native", "Expo"],
  },
  {
    title: { fr: "Web", en: "Web" },
    items: ["React", "Next.js", "Angular", "Tailwind CSS"],
  },
  {
    title: { fr: "Backend", en: "Backend" },
    items: ["Node.js", "NestJS", "Express.js", "REST API", "WebSockets"],
  },
  {
    title: { fr: "Données", en: "Data" },
    items: ["PostgreSQL", "MySQL", "MongoDB", "SQLite"],
  },
  {
    title: { fr: "Infra & DevOps", en: "Infra & DevOps" },
    items: ["Docker", "Azure DevOps", "CI/CD", "Firebase", "Git", "GitHub"],
  },
];

export type ExperienceEntry = {
  role: LocalizedString;
  company: string;
  location: LocalizedString;
  type: LocalizedString;
  period: LocalizedString;
  description: LocalizedString;
  stack: string[];
};

export const experience: ExperienceEntry[] = [
  {
    role: { fr: "Développeur Logiciel", en: "Software Developer" },
    company: "Kola Group",
    location: { fr: "Douala, Cameroun", en: "Douala, Cameroon" },
    type: { fr: "CDI", en: "Full-time" },
    period: { fr: "Depuis 06/2025", en: "Since 06/2025" },
    description: {
      fr: "Développement et évolution de solutions web, mobiles et backend. Refontes techniques pour améliorer performance, maintenabilité et scalabilité, nouvelles fonctionnalités, revues de code, collaboration Agile avec les équipes produit.",
      en: "Building and evolving web, mobile and backend solutions. Technical rewrites to improve performance, maintainability and scalability, new features, code reviews, Agile collaboration with product teams.",
    },
    stack: [
      "React",
      "React Native",
      "Expo",
      "Next.js",
      "NestJS",
      "TypeScript",
      "Redux Toolkit",
      "Firebase",
      "Git",
      "GitHub",
    ],
  },
  {
    role: { fr: "Développeur Frontend", en: "Frontend Developer" },
    company: "Universal Conseil",
    location: { fr: "Yaoundé, Cameroun", en: "Yaoundé, Cameroon" },
    type: { fr: "Freelance", en: "Freelance" },
    period: { fr: "04/2024 – 07/2025", en: "04/2024 – 07/2025" },
    description: {
      fr: "Développement et évolution de solutions web, refontes techniques, nouvelles fonctionnalités et correction d'anomalies, au sein d'une équipe Agile.",
      en: "Building and evolving web solutions, technical rewrites, new features and bug fixes, working within an Agile team.",
    },
    stack: ["Angular", "TypeScript", "RxJS", "WordPress", "Git", "GitHub", "Trello", "Slack"],
  },
  {
    role: { fr: "Développeur Frontend", en: "Frontend Developer" },
    company: "Go Africa",
    location: { fr: "Douala, Cameroun", en: "Douala, Cameroon" },
    type: { fr: "CDD", en: "Fixed-term" },
    period: { fr: "12/2022 – 04/2024", en: "12/2022 – 04/2024" },
    description: {
      fr: "Développement et évolution de solutions web, refontes techniques, nouvelles fonctionnalités et correction d'anomalies, au sein d'une équipe Agile.",
      en: "Building and evolving web solutions, technical rewrites, new features and bug fixes, working within an Agile team.",
    },
    stack: ["Angular", "TypeScript", "RxJS", "WordPress", "Git", "GitHub", "Trello", "Slack"],
  },
];

export type EducationEntry = {
  degree: LocalizedString;
  school: string;
  detail?: LocalizedString;
  period: string;
};

export const education: EducationEntry[] = [
  {
    degree: { fr: "Master Professionnel — Génie Logiciel", en: "Professional Master's — Software Engineering" },
    school: "École Nationale Supérieure Polytechnique, Douala",
    detail: { fr: "Mention Très Bien", en: "High Honors" },
    period: "2024 – 2026",
  },
  {
    degree: { fr: "Licence Technologique — Génie Logiciel", en: "Technological Bachelor's — Software Engineering" },
    school: "Institut Universitaire de Technologie, Douala",
    detail: { fr: "Mention Excellente", en: "Highest Honors" },
    period: "2021 – 2024",
  },
  {
    degree: { fr: "DUT — Génie Informatique", en: "University Diploma of Technology — Computer Engineering" },
    school: "Institut Universitaire de Technologie, Douala",
    period: "2022 – 2023",
  },
  {
    degree: { fr: "Baccalauréat D", en: "Baccalauréat, Science Track (D)" },
    school: "Lycée Bilingue de Nyalla, Douala",
    period: "2020 – 2021",
  },
];

export type ProjectLink = {
  label: LocalizedString;
  href: string;
};

export type ProjectStat = {
  value: string;
  label: LocalizedString;
};

export type Project = {
  slug: string;
  name: string;
  category: LocalizedString;
  status: LocalizedString;
  period: string;
  tagline: LocalizedString;
  description: LocalizedString;
  role: LocalizedString;
  tags: string[];
  stack: string[];
  stats?: ProjectStat[];
  links?: ProjectLink[];
  /* Défis techniques concrets que le produit devait résoudre — pas une
     liste de tâches personnelles, une description du problème. */
  challenges?: LocalizedString[];
  /* Une contrainte qui définit le produit, en une phrase. */
  insight?: LocalizedString;
};

export const projects: Project[] = [
  {
    slug: "bref-point",
    name: "Bref Point",
    category: { fr: "SaaS · Gestion commerciale", en: "SaaS · Business Tools" },
    status: { fr: "En ligne", en: "Live" },
    period: "2025 – Present",
    tagline: {
      fr: "Plateforme SaaS de gestion commerciale et d'analyse des ventes pour les TPE/PME, avec un assistant IA intégré.",
      en: "A SaaS platform for business management and sales analytics for small and mid-sized businesses, with a built-in AI assistant.",
    },
    description: {
      fr: "Bref Point est la solution de gestion commerciale des TPE/PME et des équipes de vente terrain : facturation, clients, produits, dépenses et pilotage, dans une application mobile pensée pour le contexte local. Un commerçant crée une facture en quelques secondes, avec la TVA calculée selon le pays, des paiements échelonnés et un PDF partageable par lien, sans que son client ait besoin de compte. Plusieurs boutiques, vendeurs et rôles cohabitent sous un même propriétaire, qui suit son chiffre d'affaires, ses impayés, ses dépenses et sa marge sur un tableau de bord. Un assistant IA répond en langage naturel aux questions sur les ventes réelles de l'entreprise, et l'offre évolue par abonnements (Free, Pro, Team, Business) réglables en Mobile Money.\n\nCôté architecture, l'application Expo / React Native parle à une API NestJS sur PostgreSQL, structurée en Clean Architecture et Architecture Hexagonale : un module par domaine (factures, boutiques, finances, droits et quotas, IA, campagnes, WhatsApp…). Le mobile fonctionne hors ligne : les créations et modifications sont mises en file, rejouées au retour du réseau, tandis qu'une synchronisation descendante réconcilie la base locale. L'authentification combine JWT et OTP par SMS, doublé d'un message WhatsApp. Chaque action soumise à un plan (facture, IA, SMS) passe par un module de droits qui gère les quotas. L'assistant IA fonctionne par appels d'outils : le modèle planifie des requêtes structurées, un générateur SQL sécurisé les exécute en lecture seule, puis le résultat lui revient pour formuler la réponse. Le paiement des abonnements passe par une passerelle Mobile Money abstraite, confirmée par webhook signé. Un back-office Next.js sert l'administration et les campagnes, et la livraison s'appuie sur Docker, la CI/CD et EAS.",
      en: "Bref Point is the business management solution for small and mid-sized businesses and field sales teams: invoicing, customers, products, expenses and performance tracking, in a mobile app built for the local context. A merchant creates an invoice in seconds, with VAT computed by country, instalment payments and a PDF shareable by link, with no account needed on the customer's side. Several shops, sellers and roles live under a single owner, who follows revenue, unpaid invoices, expenses and margin on a dashboard. An AI assistant answers natural-language questions about the company's real sales, and the offer grows through subscriptions (Free, Pro, Team, Business) payable via Mobile Money.\n\nOn the architecture side, the Expo / React Native app talks to a NestJS API on PostgreSQL, structured around Clean Architecture and Hexagonal Architecture: one module per domain (invoices, shops, finance, entitlements and quotas, AI, campaigns, WhatsApp…). The mobile app works offline: creations and edits are queued, replayed when the network returns, while a downstream sync reconciles the local database. Authentication combines JWT with SMS OTP, mirrored by a WhatsApp message. Every plan-limited action (invoice, AI, SMS) goes through an entitlement module that enforces quotas. The AI assistant works through tool calls: the model plans structured queries, a secured SQL builder runs them read-only, and the result goes back to the model to phrase the answer. Subscription payments go through an abstracted Mobile Money gateway, confirmed by a signed webhook. A Next.js back-office handles administration and campaigns, and delivery relies on Docker, CI/CD and EAS.",
    },
    role: { fr: "Créateur & Développeur — projet personnel", en: "Creator & Developer — personal project" },
    tags: ["Side Project", "SaaS", "Business Tools", "AI"],
    stack: ["React Native", "Expo", "React", "Next.js", "NestJS", "TypeScript", "PostgreSQL", "Firebase", "Docker", "Azure DevOps"],
    links: [
      { label: { fr: "Site", en: "Website" }, href: "https://brefpoint.app/" },
      {
        label: { fr: "Play Store", en: "Play Store" },
        href: "https://play.google.com/store/apps/details?id=com.brefpoint.app",
      },
      {
        label: { fr: "App Store", en: "App Store" },
        href: "https://apps.apple.com/us/app/bref-point-business-ai/id6778948969",
      },
    ],
  },
  {
    slug: "koli",
    name: "Koli",
    category: { fr: "Livraison · Dernier kilomètre", en: "Delivery · Last Mile" },
    status: { fr: "En ligne", en: "Live" },
    period: "2025 – Present",
    tagline: {
      fr: "Une application de livraison à Douala qui met en relation vendeurs et livreurs vérifiés pour le dernier kilomètre du e-commerce social.",
      en: "A delivery app in Douala connecting sellers with verified drivers for the last mile of social commerce.",
    },
    description: {
      fr: "Koli est une application de livraison à Douala pour les vendeurs qui travaillent sur WhatsApp, Instagram, TikTok ou Facebook et ont besoin de livreurs fiables sans les recruter. Le vendeur décrit son colis, fixe son prix à partir d'une fourchette suggérée selon la distance, et la demande est proposée aux livreurs vérifiés autour du point de collecte : le premier qui accepte prend la course. Le colis se suit en temps réel sur la carte, et la remise est prouvée par un code à quatre chiffres envoyé par SMS au destinataire. Le paiement se fait en espèces à la remise ou en Mobile Money, avec des fonds bloqués jusqu'à la validation. Côté livreur, chacun choisit librement ses courses, consulte son portefeuille et retire ses gains via Orange Money ou MTN MoMo.\n\nLe cœur du système est une machine à états de livraison : création, recherche, assignation, collecte, transit, livraison, règlement, avec des règles d'annulation propres à chaque étape. La recherche procède par diffusion en trois vagues de 45 secondes, sur des rayons de 2, 4 puis 6 km, orchestrées par des tâches asynchrones sur file d'attente (BullMQ et Redis). En Mobile Money, le livreur assigné déclenche une fenêtre de trois minutes pour confirmer le dépôt, faute de quoi la course repart en recherche. Les fonds sont alors bloqués, crédités au portefeuille du livreur à la validation du code, puis retenus une heure pour couvrir les litiges. Le suivi de position passe par WebSocket (Socket.IO) entre l'application Expo / React Native et l'API NestJS sur PostgreSQL. Les notifications combinent push Firebase, SMS et WhatsApp, et un module de portefeuille tient les soldes disponibles et en retenue.",
      en: "Koli is a delivery app in Douala for sellers who work on WhatsApp, Instagram, TikTok or Facebook and need reliable drivers without recruiting them. The seller describes the parcel, sets a price from a distance-based suggested range, and the request is offered to verified drivers around the pickup point: the first one to accept takes the job. The parcel is tracked live on the map, and handover is proven by a four-digit code sent by SMS to the recipient. Payment is cash on delivery or Mobile Money, with funds held until confirmation. On the driver side, each one picks jobs freely, checks a wallet, and withdraws earnings through Orange Money or MTN MoMo.\n\nThe core of the system is a delivery state machine: creation, search, assignment, pickup, transit, delivery, settlement, with cancellation rules specific to each stage. Search works by broadcasting in three 45-second waves over 2, 4 then 6 km radii, orchestrated by asynchronous jobs on a queue (BullMQ and Redis). With Mobile Money, the assigned driver triggers a three-minute window to confirm the deposit, otherwise the job goes back to search. Funds are then held, credited to the driver's wallet once the code is validated, and kept for one hour to cover disputes. Position tracking runs over WebSocket (Socket.IO) between the Expo / React Native app and the NestJS API on PostgreSQL. Notifications combine Firebase push, SMS and WhatsApp, and a wallet module tracks available and held balances.",
    },
    role: { fr: "Créateur & Développeur — projet personnel", en: "Creator & Developer — personal project" },
    tags: ["Side Project", "Delivery", "Mobile Money"],
    stack: [],
    links: [{ label: { fr: "Site", en: "Website" }, href: "https://koli.brefpoint.app/" }],
  },
  {
    slug: "doro",
    name: "Doro",
    category: { fr: "Application personnelle · Discipline", en: "Personal App · Discipline" },
    status: { fr: "En ligne", en: "Live" },
    period: "2025 – Present",
    tagline: {
      fr: "Une application personnelle de discipline qui aide à transformer les intentions en actions constantes, via un cycle quotidien engagement → action → bilan.",
      en: "A personal discipline app that turns intentions into consistent action through a daily commitment → action → review cycle.",
    },
    description: {
      fr: "Projet personnel né d'un constat simple : la plupart des gens ne manquent pas d'ambition, ils manquent de constance. Doro propose un cycle quotidien minimaliste — engagement le matin, bilan le soir — plutôt qu'une liste de tâches sans fin. Une IA discrète analyse les tendances pour aider l'utilisateur à mieux se comprendre, sans notation publique ni gamification artificielle : pas de points, de badges ou de séries. Conçu pour deux ouvertures par jour, pas pour capter l'attention en continu.",
      en: "A personal project born from a simple observation: most people don't lack ambition, they lack consistency. Doro offers a minimalist daily cycle — a morning commitment, an evening review — instead of an endless task list. A quiet AI layer analyzes patterns to help the user understand their own behavior, with no public ratings or artificial gamification: no points, badges or streaks. Built for two opens a day, not constant engagement.",
    },
    role: { fr: "Créateur & Développeur — projet personnel", en: "Creator & Developer — personal project" },
    tags: ["Side Project", "Productivity", "AI"],
    stack: [],
    links: [{ label: { fr: "Site", en: "Website" }, href: "https://getdoro.vercel.app/" }],
  },
  {
    slug: "mimo",
    name: "Mimo",
    category: { fr: "Cadeau · Expérience interactive", en: "Gifting · Interactive Experience" },
    status: { fr: "En cours", en: "In progress" },
    period: "2026 – Present",
    tagline: {
      fr: "Un cadeau qui se découvre : offrir une expérience interactive faite de messages, de photos, de vidéos et de récompenses débloquées étape par étape.",
      en: "A gift that unfolds: giving an interactive experience made of messages, photos, videos and rewards unlocked step by step.",
    },
    description: {
      fr: "Mimo permet d'offrir un cadeau sous forme d'expérience à découvrir. Le créateur choisit le destinataire, écrit un message d'ouverture, compose jusqu'à vingt étapes de textes, photos, vidéos et révélations, puis répartit une somme d'argent en récompenses, soit étape par étape, soit toutes d'un coup à la fin. Il envoie le cadeau tout de suite ou à une date programmée, par exemple pour un anniversaire à l'aube. Le destinataire n'installe rien et ne crée aucun compte : il reçoit un lien, par exemple sur WhatsApp, confirme son numéro avec un code SMS, puis avance dans l'ordre, chaque étape ouvrant la suivante et débloquant sa récompense. L'argent est une récompense dans le parcours, pas le cœur du produit : l'objectif est de donner l'impression de recevoir une surprise, pas d'utiliser un outil financier. Le produit vise le Cameroun d'abord.\n\nL'API NestJS suit une architecture hexagonale : un contexte par domaine (cadeau, parcours, récompenses, paiement, grand livre, messagerie, médias, accès destinataire), un domaine qui ignore le framework, et des ports explicites pour chaque service externe. Le flux commence par le paiement du créateur en Mobile Money. Le partenaire de paiement conserve les fonds, Mimo ne tenant aucun portefeuille. À la confirmation, l'API relit le statut chez le partenaire plutôt que de croire le callback, écrit une entrée de financement dans un grand livre immuable et idempotent, et fait passer le cadeau en attente d'envoi. Une tâche planifiée chaque minute envoie les liens dus et retente les échecs. Côté destinataire, une session limitée à un seul cadeau suit la vérification du code, la limite de codes protège le crédit SMS, et le serveur ne livre jamais les étapes à venir. Terminer une étape écrit d'abord le déblocage dans le grand livre, puis fait avancer la progression, sans jamais perdre ni doubler une récompense. L'application mobile du créateur est en Expo, la page du destinataire en Next.js.",
      en: "Mimo lets you give a gift as an experience to uncover. The creator picks the recipient, writes an opening message, composes up to twenty steps of text, photos, videos and reveals, then splits a sum of money into rewards, either step by step or all at once at the end. They send the gift right away or on a scheduled date, such as a birthday at dawn. The recipient installs nothing and creates no account: they receive a link, for instance on WhatsApp, confirm their number with an SMS code, then move forward in order, each step opening the next and unlocking its reward. Money is a reward within the journey, not the heart of the product: the goal is to feel like receiving a surprise, not like using a financial tool. The product targets Cameroon first.\n\nThe NestJS API follows a hexagonal architecture: one context per domain (gift, journey, rewards, payment, ledger, messaging, media, recipient access), a domain that knows nothing of the framework, and explicit ports for every external service. The flow starts with the creator's Mobile Money payment. The payment partner holds the funds, with Mimo keeping no wallet. On confirmation, the API re-reads the status from the partner instead of trusting the callback, writes a funding entry into an immutable, idempotent ledger, and moves the gift to awaiting dispatch. A job scheduled every minute sends due links and retries failures. On the recipient side, a session limited to a single gift follows code verification, a cap on codes protects the SMS credit, and the server never ships upcoming steps. Completing a step first writes the unlock into the ledger, then advances progress, so a reward is never lost or doubled. The creator's mobile app is built with Expo, the recipient's page with Next.js.",
    },
    role: { fr: "Créateur & Développeur — projet personnel", en: "Creator & Developer — personal project" },
    tags: ["Side Project", "Gifting", "Mobile Money"],
    stack: [],
  },
  {
    slug: "book-and-go",
    name: "Book and Go",
    category: { fr: "Mobilité · Covoiturage", en: "Mobility · Carpooling" },
    status: { fr: "En ligne", en: "Live" },
    period: "2024 – Present",
    tagline: {
      fr: "Plateforme mobile de covoiturage mettant en relation conducteurs et passagers.",
      en: "A mobile carpooling platform connecting drivers and passengers.",
    },
    description: {
      fr: "Book and Go est une plateforme de covoiturage qui met en relation conducteurs et passagers. Un conducteur publie un trajet avec ses places disponibles, un passager le trouve par recherche et carte interactive, réserve et règle sa place, puis échange avec le conducteur dans l'application. La confiance repose sur la vérification des conducteurs : permis, pièce d'identité, carte grise et assurance sont examinés par l'équipe avant qu'un compte puisse publier. Des notifications push prévenent des confirmations, des rappels de départ et des messages, avec des liens profonds vers le bon écran. J'ai contribué aux fonctionnalités de publication et de recherche de trajets, à la réservation, aux profils et aux notifications, au sein de l'équipe AD2S.\n\nLe backend NestJS adopte l'Architecture Hexagonale et le Domain-Driven Design, avec un principe fort : aucun import direct entre modules fonctionnels (authentification, utilisateurs, trajets, réservations, paiements, documents, notifications, conversations). Tout passe par des événements, ce qui permet à chaque module d'évoluer, voire de se déployer, séparément. Le flux de réservation en est l'illustration : le montant est calculé et un identifiant de réservation généré, puis une demande de paiement est émise. La réservation n'est créée qu'une fois l'initiation réussie, et les places ne sont réservées qu'à la confirmation du paiement, pour qu'une disponibilité reste exacte. Une annulation ne les libère que si elles avaient été réservées. L'authentification associe JWT court, jeton de rafraîchissement révocable et OTP, et les notifications basculent de la push au SMS puis à l'email. Les tâches de fond passent par Bull et Redis, et le client mobile Expo / React Native vit dans un monorepo Nx avec l'espace d'administration.",
      en: "Book and Go is a carpooling platform connecting drivers and passengers. A driver publishes a trip with their available seats, a passenger finds it through search and an interactive map, books and pays for a seat, then chats with the driver inside the app. Trust relies on driver verification: licence, ID, vehicle registration and insurance are reviewed by the team before an account can publish. Push notifications cover confirmations, departure reminders and messages, with deep links to the right screen. I contributed to trip publishing and search, booking, profiles and notifications, within the AD2S team.\n\nThe NestJS backend adopts Hexagonal Architecture and Domain-Driven Design, with one strong principle: no direct imports between functional modules (authentication, users, trips, bookings, payments, documents, notifications, conversations). Everything goes through events, so each module can evolve, even deploy, on its own. The booking flow illustrates this: the amount is computed and a booking ID generated, then a payment request is emitted. The booking is only created once initiation succeeds, and seats are only reserved when payment is confirmed, so availability stays accurate. A cancellation releases them only if they had been reserved. Authentication combines a short-lived JWT, a revocable refresh token and OTP, and notifications fall back from push to SMS to email. Background jobs run on Bull and Redis, and the Expo / React Native client lives in an Nx monorepo alongside the admin space.",
    },
    role: { fr: "Développeur Logiciel — AD2S", en: "Software Developer — AD2S" },
    tags: ["Mobility", "Carpooling"],
    stack: ["React Native", "Expo", "NestJS", "TypeScript", "Firebase Cloud Messaging", "Google Maps API", "PostgreSQL", "Azure DevOps"],
    links: [
      { label: { fr: "Site", en: "Website" }, href: "https://bookandgo.africa/" },
      {
        label: { fr: "Play Store", en: "Play Store" },
        href: "https://play.google.com/store/apps/details?id=com.ad2s.bookandgo.android",
      },
      {
        label: { fr: "App Store", en: "App Store" },
        href: "https://apps.apple.com/cm/app/book-and-go-covoiturage/id6760887012",
      },
    ],
  },
  {
    slug: "guestilog",
    name: "GuestiLog",
    category: { fr: "SaaS · Gestion hôtelière", en: "SaaS · Hotel Management" },
    status: { fr: "En ligne", en: "Live" },
    period: "2024 – Present",
    tagline: {
      fr: "Une plateforme de gestion hôtelière pensée pour l'Afrique, qui centralise réservations, chambres, clients et finances — même sans connexion internet.",
      en: "A hotel management platform built for Africa, centralizing reservations, rooms, clients and finances — even without an internet connection.",
    },
    description: {
      fr: "GuestiLog est une plateforme de gestion hôtelière pensée pour l'Afrique, où le réseau n'est pas toujours fiable. Elle réunit au même endroit les réservations, les chambres, les clients (dont les VIP), le check-in et le check-out, la facturation en PDF, le suivi du ménage par chambre et les indicateurs du jour, comme le taux d'occupation et les revenus. Elle reste utilisable sans connexion : une réception peut continuer à travailler, puis tout se synchronise au retour du réseau. L'application s'installe comme une application sur mobile, tablette et ordinateur. Elle se vend en trois forfaits (Starter, Pro, Premium) selon la taille de l'établissement, avec un essai gratuit, et la gestion multi-établissements est prévue sur les offres supérieures.\n\nLe frontend est une PWA React (Vite, TanStack Router et Query) en cinq couches : coque installable précachée par un service worker, cache réseau des lectures, persistance du cache dans IndexedDB, file d'écritures hors ligne, et session dégradée. Les actions éligibles sont mises en file, affichées de façon optimiste, marquées « à synchroniser », puis rejouées au retour du réseau. Rejouer ne doit jamais créer de doublon, d'où une clé d'idempotence côté API. Le jeton d'accès ne vit qu'en mémoire et rien de secret n'est persisté. L'API NestJS sur PostgreSQL est conçue pour servir plusieurs hôtels sur une même instance, chacun sur son sous-domaine, avec une colonne de tenant, un contexte propagé automatiquement et la sécurité au niveau des lignes en filet de sécurité. Le statut d'une chambre est séparé en axes indépendants : l'occupation se déduit des réservations, la propreté du ménage. Les forfaits désactivent sans jamais supprimer, l'abonnement se règle en Mobile Money par callback, et les écritures comptables sont synchronisées vers Dolibarr avec reprises programmées.",
      en: "GuestiLog is a hotel management platform built for Africa, where the network isn't always reliable. It brings reservations, rooms, guests (including VIPs), check-in and check-out, PDF invoicing, per-room housekeeping tracking and daily indicators such as occupancy rate and revenue into one place. It stays usable without a connection: a front desk can keep working, and everything syncs when the network returns. The app installs like a native one on mobile, tablet and desktop. It is sold in three plans (Starter, Pro, Premium) depending on property size, with a free trial, and multi-property management planned on higher tiers.\n\nThe frontend is a React PWA (Vite, TanStack Router and Query) built in five layers: an installable shell precached by a service worker, a network cache for reads, cache persistence in IndexedDB, an offline write queue, and a degraded session. Eligible actions are queued, shown optimistically, flagged \"to sync\", then replayed when the network returns. Replaying must never create duplicates, hence an idempotency key on the API side. The access token lives only in memory and nothing secret is persisted. The NestJS API on PostgreSQL is designed to serve several hotels on one instance, each on its own subdomain, with a tenant column, automatically propagated context and row-level security as a safety net. A room's status is split into independent axes: occupancy is derived from reservations, cleanliness from housekeeping. Plans deactivate without ever deleting, the subscription is paid through Mobile Money with a callback, and accounting entries are synced to Dolibarr with scheduled retries.",
    },
    role: { fr: "Développeur Logiciel — AD2S", en: "Software Developer — AD2S" },
    tags: ["SaaS", "Hospitality", "Offline-First"],
    stack: [],
    links: [{ label: { fr: "Site", en: "Website" }, href: "https://www.guestilog.com/" }],
  },
  {
    slug: "kola-pay",
    name: "Kola Pay",
    category: { fr: "Fintech · Paiements", en: "Fintech · Payments" },
    status: { fr: "En ligne", en: "Live" },
    period: "2025 – Present",
    tagline: {
      fr: "Un agrégateur de paiement qui unifie MTN Mobile Money, Orange Money, Stripe et Cinetpay sur un seul rail, pour les régions CEMAC et CEDEAO.",
      en: "A payment aggregator unifying MTN Mobile Money, Orange Money, Stripe and Cinetpay into a single rail for the CEMAC and ECOWAS regions.",
    },
    description: {
      fr: "Kola Pay réunit plusieurs fournisseurs de paiement — MTN Mobile Money, Orange Money, Stripe, Cinetpay — sous une API unique, pour que les entreprises de la zone CEMAC et CEDEAO acceptent les paiements sans intégrer chaque opérateur séparément. Contribution à la sécurisation des intégrations Mobile Money et des API REST de transaction, avec une attention particulière portée à la logique de retry et au routage de secours : si un fournisseur tombe, la plateforme continue de fonctionner via un autre.",
      en: "Kola Pay brings multiple payment providers — MTN Mobile Money, Orange Money, Stripe, Cinetpay — together under a single API, so businesses across the CEMAC and ECOWAS zones can accept payments without integrating each provider separately. Contributed to securing the mobile money integrations and the transaction REST APIs, with particular attention to retry logic and fallback routing: if one provider goes down, the platform keeps running through another.",
    },
    role: { fr: "Développeur Logiciel — Kola Group", en: "Software Developer — Kola Group" },
    tags: ["Fintech", "Mobile Money", "Payments"],
    stack: ["React", "Node.js", "PostgreSQL", "MTN MoMo API", "Orange Money API", "Stripe", "Cinetpay"],
    stats: [
      { value: "CEMAC + ECOWAS", label: { fr: "Régions couvertes", en: "Regions served" } },
      { value: "4+", label: { fr: "Fournisseurs unifiés", en: "Providers unified" } },
    ],
    challenges: [
      {
        fr: "Intégration multi-fournisseurs derrière une API unique, malgré des flux très différents d'un opérateur à l'autre.",
        en: "Multi-provider integration behind a single API, despite flows that differ significantly from one operator to the next.",
      },
      {
        fr: "Gestion transfrontalière des devises et des différences réglementaires entre pays de la zone CEMAC.",
        en: "Cross-border handling of currencies and regulatory differences across CEMAC member states.",
      },
      {
        fr: "Fiabilité : logique de retry et routage de secours pour qu'une panne fournisseur ne devienne pas une panne plateforme.",
        en: "Reliability: retry logic and fallback routing so that one provider's downtime doesn't become the platform's downtime.",
      },
      {
        fr: "Réconciliation automatisée des transactions sur l'ensemble des fournisseurs intégrés.",
        en: "Automated transaction reconciliation across every integrated provider.",
      },
    ],
    insight: {
      fr: "Sur ce marché, un fournisseur peut être hors service plusieurs heures : la redondance entre opérateurs n'est pas un confort, c'est le produit.",
      en: "In a market where any single provider can be down for hours, provider redundancy isn't hardening — it's the product.",
    },
  },
  {
    slug: "kola-payment-services",
    name: "Kola Payment Services",
    category: { fr: "Fintech · Transfert transfrontalier", en: "Fintech · Cross-Border" },
    status: { fr: "En ligne", en: "Live" },
    period: "2025 – Present",
    tagline: {
      fr: "Une plateforme de transfert transfrontalier qui fait circuler l'argent en toute sécurité du mobile money africain vers les infrastructures bancaires européennes.",
      en: "A cross-border transfer platform moving money securely from African mobile money into European banking infrastructure.",
    },
    description: {
      fr: "Kola Payment Services fait circuler l'argent entre la zone CEMAC et l'Europe, en connectant le mobile money africain aux infrastructures bancaires européennes pour rendre les transferts intercontinentaux plus rapides et plus abordables. Contribution au moteur de transfert central, avec les contrôles KYC/AML intégrés directement dans le pipeline plutôt qu'ajoutés après coup.",
      en: "Kola Payment Services moves money between the CEMAC region and Europe, connecting African mobile money to European banking infrastructure to make cross-border transfers faster and more affordable. Contributed to the core transfer engine, with KYC/AML checks built directly into the pipeline rather than bolted on afterward.",
    },
    role: { fr: "Développeur Logiciel — Kola Group", en: "Software Developer — Kola Group" },
    tags: ["Fintech", "Cross-Border", "Compliance", "KYC/AML"],
    stack: ["Node.js", "KYC / AML", "API bancaires européennes", "Opérateurs mobile money CEMAC"],
    challenges: [
      {
        fr: "Conformité réglementaire : exigences KYC/AML sur deux zones juridiques différentes, CEMAC et UE.",
        en: "Regulatory compliance: KYC/AML requirements spanning two different jurisdictions, CEMAC and the EU.",
      },
      {
        fr: "Conversion de devises en temps réel entre XAF et EUR, avec une structure de frais transparente.",
        en: "Real-time currency conversion between XAF and EUR, with a transparent fee structure.",
      },
      {
        fr: "Règlement : coordination des flux entre portefeuilles mobile money et comptes bancaires européens.",
        en: "Settlement: coordinating flows between mobile money wallets and European bank accounts.",
      },
      {
        fr: "Rapidité : réduire les délais de transfert de plusieurs jours à quelques heures par rapport aux canaux classiques.",
        en: "Speed: cutting transfer times from days to hours compared with traditional remittance channels.",
      },
    ],
    insight: {
      fr: "Un transfert transfrontalier échoue bien plus souvent sur le terrain réglementaire que sur le terrain technique — d'où une conformité pensée comme une étape du pipeline, pas comme une case à cocher avant le lancement.",
      en: "Cross-border money movement fails on regulatory ground far more often than on technical ground — which is why compliance was built in as a pipeline stage, not bolted on before launch.",
    },
    links: [{ label: { fr: "Site", en: "Website" }, href: "https://kolapaymentservices.com/" }],
  },
  {
    slug: "kola-collect",
    name: "Kola Collect",
    category: { fr: "Fintech · Microfinance", en: "Fintech · Microfinance" },
    status: { fr: "En ligne", en: "Live" },
    period: "2025 – Present",
    tagline: {
      fr: "Un outil mobile de collecte offline-first pour les institutions de microfinance, qui remplace le suivi des cotisations sur papier. Publié sur le Play Store et l'App Store.",
      en: "An offline-first mobile collection tool for microfinance institutions, replacing paper-based contribution tracking. Shipped on both the Play Store and the App Store.",
    },
    description: {
      fr: "Kola Collect numérise la collecte quotidienne de cotisations pour les institutions de microfinance. En Afrique centrale, les agents de terrain collectent souvent l'épargne journalière sur des carnets papier ; l'application les remplace par un outil mobile qui fonctionne avec ou sans réseau. Contribution à la maintenance évolutive et corrective de l'application, avec un accent sur la fiabilité de la synchronisation hors ligne.",
      en: "Kola Collect digitizes daily contribution collection for microfinance institutions. Across much of Central Africa, field agents record daily savings on paper ledgers; the app replaces that with a mobile tool that works with or without a signal. Contributed to the ongoing maintenance and evolution of the app, with a focus on the reliability of offline sync.",
    },
    role: { fr: "Développeur Logiciel — Kola Group", en: "Software Developer — Kola Group" },
    tags: ["Fintech", "Microfinance", "Offline-First"],
    stack: ["React Native", "Expo", "NestJS", "PostgreSQL"],
    stats: [
      { value: "iOS + Android", label: { fr: "Plateformes", en: "Platforms" } },
      { value: "Offline-first", label: { fr: "Connectivité", en: "Connectivity" } },
    ],
    challenges: [
      {
        fr: "Architecture offline-first : un agent enregistre une collecte sans connexion, les données se synchronisent au retour du signal.",
        en: "Offline-first architecture: an agent records a collection without connectivity; data syncs automatically when it returns.",
      },
      {
        fr: "Tableau de bord de gestion des agents : suivi de l'activité, des objectifs de collecte et des comptes clients.",
        en: "Agent management dashboard: tracking activity, collection targets and client accounts.",
      },
      {
        fr: "Prévention de la fraude via des reçus numériques et une piste d'audit, là où le papier était facile à falsifier.",
        en: "Fraud prevention through digital receipts and an audit trail, replacing paper records that were easy to falsify.",
      },
      {
        fr: "Onboarding client simplifié pour une clientèle rurale à faible littératie.",
        en: "Simplified client onboarding for a rural, low-literacy customer base.",
      },
    ],
    insight: {
      fr: "Le offline-first n'est pas une option ici : les agents collectent dans des zones sans réseau fiable, et une application qui a besoin de signal pour enregistrer un paiement est une application qu'on n'utilise pas.",
      en: "Offline-first isn't optional here: field agents collect in areas with no reliable connectivity, and an app that needs a signal to record a payment is an app that doesn't get used.",
    },
    links: [
      {
        label: { fr: "Play Store", en: "Play Store" },
        href: "https://play.google.com/store/apps/details?id=com.microfinancecollector&hl=fr",
      },
      {
        label: { fr: "App Store", en: "App Store" },
        href: "https://apps.apple.com/cm/app/kola-collect/id6751644692",
      },
    ],
  },
  {
    slug: "kola-till-manager",
    name: "Kola Till Manager",
    category: { fr: "Fintech · Mobile Money", en: "Fintech · Mobile Money" },
    status: { fr: "En ligne", en: "Live" },
    period: "2025 – Present",
    tagline: {
      fr: "Un outil de gestion de caisse offline-first pour les agents mobile money et petites entreprises, qui remplace le suivi papier des comptes et du float.",
      en: "An offline-first till management tool for mobile money agents and small businesses, replacing paper-based account tracking for cashiers and float.",
    },
    description: {
      fr: "Kola Till Manager donne aux agents mobile money et petites entreprises un moyen de gérer leurs caissiers et leurs transactions sans papier : float, affectation de caisse et réconciliation, avec un fonctionnement hors ligne. Chaque caisse et chaque caissier réconcilient indépendamment, ce qui donne à tout écart un responsable identifiable.",
      en: "Kola Till Manager gives mobile money agents and small businesses a paperless way to manage cashiers and transactions: float, till assignment and reconciliation, working offline. Each till and cashier reconciles independently, so any discrepancy has a clear owner.",
    },
    role: { fr: "Développeur Logiciel — Kola Group", en: "Software Developer — Kola Group" },
    tags: ["Fintech", "Mobile Money", "Offline-First"],
    stack: ["React Native", "Expo", "NestJS"],
    challenges: [
      {
        fr: "Responsabilité multi-caissiers : chaque caisse réconcilie séparément pour qu'un écart ait toujours un responsable.",
        en: "Multi-cashier accountability: each till reconciles independently, so a discrepancy always has an owner.",
      },
      {
        fr: "Fonctionnement hors ligne : les transactions s'enregistrent sans connexion et se réconcilient à la synchronisation.",
        en: "Offline operation: transactions record without connectivity and reconcile on sync.",
      },
      {
        fr: "Gestion du float : visibilité sur le capital de travail entre les caisses, la vraie contrainte des agents.",
        en: "Float management: visibility into working capital across tills, the constraint agents actually operate against.",
      },
    ],
    insight: {
      fr: "Construit autour du caissier comme unité de responsabilité plutôt que de la transaction : les agents perdent de l'argent sur des écarts de réconciliation entre collègues, pas sur des virements mal saisis.",
      en: "Built around the cashier as the unit of accountability rather than the transaction: agents lose money to reconciliation gaps between staff, not to individually mistyped transfers.",
    },
    links: [
      {
        label: { fr: "Play Store", en: "Play Store" },
        href: "https://play.google.com/store/apps/details?id=com.kola.kolatillmanager&hl=fr",
      },
    ],
  },
  {
    slug: "tchopme",
    name: "TchopMe",
    category: { fr: "Livraison de repas", en: "Food Delivery" },
    status: { fr: "En ligne", en: "Live" },
    period: "2025 – Present",
    tagline: {
      fr: "Un écosystème de livraison de repas à Douala — application client, application livreur et applications restaurant, web et mobile.",
      en: "A meal delivery ecosystem in Douala — customer app, delivery driver app, and restaurant apps, web and mobile.",
    },
    description: {
      fr: "TchopMe met en relation les habitants de Douala et des restaurants partenaires audités pour la commande et la livraison de repas, avec suivi GPS en temps réel du livreur et paiement en Mobile Money (Orange Money, MTN MoMo). Contribution à la maintenance évolutive et corrective de l'écosystème complet : l'application Client pour la commande de repas, l'application Livreur pour la gestion des livraisons, et les applications Restaurant (web et mobile) pour la gestion des commandes et des menus — correction d'anomalies, nouvelles fonctionnalités et optimisations techniques.",
      en: "TchopMe connects residents of Douala with audited partner restaurants for meal ordering and delivery, with real-time GPS tracking of the driver and Mobile Money payment (Orange Money, MTN MoMo). Contributed to the ongoing maintenance and evolution of the full ecosystem: the Client app for meal ordering, the Driver app for delivery management, and the Restaurant apps (web and mobile) for order and menu management — bug fixes, new features and technical optimizations.",
    },
    role: { fr: "Développeur Logiciel — Kola Group", en: "Software Developer — Kola Group" },
    tags: ["Food Delivery", "Marketplace", "Mobile Money"],
    stack: ["React Native", "Expo", "Next.js", "NestJS", "TypeScript"],
    challenges: [
      {
        fr: "Maintenir trois applications distinctes (Client, Livreur, Restaurant) qui doivent rester synchronisées sur le même cycle de commande.",
        en: "Maintaining three separate apps (Customer, Driver, Restaurant) that must stay in sync across the same order cycle.",
      },
      {
        fr: "Suivi GPS en temps réel du livreur, fiable malgré une couverture réseau inégale selon les quartiers.",
        en: "Real-time GPS tracking of the driver, reliable despite uneven network coverage across neighborhoods.",
      },
      {
        fr: "Paiement Mobile Money natif (Orange Money, MTN MoMo) intégré directement au tunnel de commande.",
        en: "Native Mobile Money payment (Orange Money, MTN MoMo) built directly into the checkout flow.",
      },
    ],
    insight: {
      fr: "Trois applications, un seul cycle de commande : la vraie difficulté n'est pas une fonctionnalité isolée, c'est de garder Client, Livreur et Restaurant d'accord sur l'état d'une commande à chaque instant.",
      en: "Three apps, one order cycle: the real difficulty isn't any single feature — it's keeping Customer, Driver and Restaurant in agreement on an order's state at every moment.",
    },
    links: [
      { label: { fr: "Site", en: "Website" }, href: "https://tchopme.com/" },
      {
        label: { fr: "Client · Play Store", en: "Customer · Play Store" },
        href: "https://play.google.com/store/apps/details?id=com.tchopmecustomers&hl=fr",
      },
      {
        label: { fr: "Client · App Store", en: "Customer · App Store" },
        href: "https://apps.apple.com/cm/app/tchop-me-livraison-de-repas/id6480291045",
      },
      {
        label: { fr: "Restaurant · App Store", en: "Restaurant · App Store" },
        href: "https://apps.apple.com/cm/app/tchop-me-restaurants/id6480291394",
      },
      {
        label: { fr: "Restaurant · Play Store", en: "Restaurant · Play Store" },
        href: "https://play.google.com/store/apps/details?id=com.tchopmeresto&hl=fr",
      },
      {
        label: { fr: "Livreur · Play Store", en: "Driver · Play Store" },
        href: "https://play.google.com/store/apps/details?id=com.tchopmelivreurs&hl=fr",
      },
    ],
  },
  {
    slug: "ntoh-library",
    name: "Ntoh Library",
    category: { fr: "EdTech", en: "EdTech" },
    status: { fr: "En ligne", en: "Live" },
    period: "2024 – 2025",
    tagline: {
      fr: "Une bibliothèque numérique qui apporte livres, cours et supports pédagogiques aux communautés sans infrastructure de bibliothèque physique.",
      en: "A digital library platform bringing books, courses and learning materials to communities without physical library infrastructure.",
    },
    description: {
      fr: "Ntoh Library rend un catalogue de livres, cours et supports pédagogiques accessible aux communautés qui n'ont pas d'infrastructure de bibliothèque physique, via une interface web pensée pour les connexions instables. Le contenu peut être téléchargé pour une lecture hors ligne — concevoir uniquement pour une connexion fiable aurait exclu exactement les communautés que la plateforme vise à servir.",
      en: "Ntoh Library makes a catalogue of books, courses and learning materials accessible to communities without physical library infrastructure, through a web interface built for unreliable connections. Content can be downloaded for offline reading — designing only for a reliable connection would have excluded exactly the communities the platform exists to serve.",
    },
    role: { fr: "Développeur Logiciel — Kola Group", en: "Software Developer — Kola Group" },
    tags: ["EdTech", "Education Access"],
    stack: ["React", "Node.js"],
    challenges: [
      {
        fr: "Accessibilité du contenu sur une large variété d'appareils et de vitesses de connexion.",
        en: "Content accessibility across a wide range of devices and connection speeds.",
      },
      {
        fr: "Pipeline de gestion de contenu pour l'ingestion, le catalogage et la diffusion de formats variés.",
        en: "A content management pipeline for ingesting, cataloguing and serving diverse formats.",
      },
      {
        fr: "Recherche et recommandation pour que les utilisateurs retrouvent le contenu pertinent.",
        en: "Search and recommendation so users can find relevant material.",
      },
      {
        fr: "Lecture hors ligne via le téléchargement, pour les zones à faible connectivité.",
        en: "Offline reading via download, for low-connectivity areas.",
      },
    ],
    links: [{ label: { fr: "Site", en: "Website" }, href: "https://ntoh-library.web.app/" }],
  },
  {
    slug: "bewilla",
    name: "Bewilla.de",
    category: { fr: "Emploi · Immigration", en: "Employment · Immigration" },
    status: { fr: "En ligne", en: "Live" },
    period: "2024 – 2025",
    tagline: {
      fr: "Une plateforme d'emploi et d'immigration qui met en relation des candidats en Afrique avec des employeurs allemands, avec le parcours visa et permis de travail intégré directement au flux de candidature.",
      en: "An immigration employment platform connecting job seekers in Africa with German employers, with the visa and work permit pathway built into the application flow.",
    },
    description: {
      fr: "Bewilla.de met en relation des candidats en Afrique avec des opportunités d'emploi en Allemagne, en les accompagnant à la fois dans le processus de recrutement et dans le parcours d'immigration qui va avec. L'éligibilité au visa fait partie des critères de mise en relation dès le départ, plutôt que d'être une mauvaise surprise découverte plus tard dans le processus.",
      en: "Bewilla.de connects job seekers in Africa with employment opportunities in Germany, supporting candidates through both the hiring process and the immigration pathway that runs alongside it. Visa eligibility is part of the matching criteria from the start, rather than a surprise discovered later in the process.",
    },
    role: { fr: "Développeur Logiciel — Kola Group", en: "Software Developer — Kola Group" },
    tags: ["Employment", "Immigration", "Matching"],
    stack: ["React", "Node.js", "PostgreSQL"],
    challenges: [
      {
        fr: "Mise en relation transfrontalière sur les compétences, les qualifications et l'éligibilité à l'immigration en même temps.",
        en: "Cross-border matching on skills, qualifications and immigration eligibility together.",
      },
      {
        fr: "Intégration du parcours visa et permis de travail directement dans le flux de candidature.",
        en: "Integrating the visa and work permit pathway directly into the application flow.",
      },
      {
        fr: "Expérience bilingue pour des utilisateurs germanophones et anglophones.",
        en: "A bilingual experience for German- and English-speaking users.",
      },
      {
        fr: "Outils employeur : tableau de bord pour publier des offres et suivre le pipeline de recrutement international.",
        en: "Employer tools: a dashboard for posting roles and tracking the international hiring pipeline.",
      },
    ],
    insight: {
      fr: "L'éligibilité au visa fait partie des critères de mise en relation, pas une surprise en aval : un match qui ne peut légalement aboutir à une embauche fait perdre des mois à un candidat.",
      en: "Immigration eligibility is part of the matching criteria, not a downstream surprise: a match that can't legally result in employment wastes months of a candidate's life.",
    },
    links: [{ label: { fr: "Site", en: "Website" }, href: "https://bewilla.de" }],
  },
];
