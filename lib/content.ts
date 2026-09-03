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
      fr: "Conception et développement d'une application mobile et d'une plateforme web de gestion commerciale : facturation, gestion des clients, produits, ventes, dépenses et tableau de bord analytique. Un assistant IA aide les utilisateurs à analyser leurs performances commerciales et à prendre de meilleures décisions. Architecture pensée pour durer — Clean Architecture et Architecture Hexagonale — avec déploiements Android/iOS via Expo (EAS Build) et pipelines CI/CD, et API REST sécurisées avec gestion de l'authentification.",
      en: "Designed and built a mobile app and web platform for business management: invoicing, customer/product/sales/expense tracking and an analytics dashboard. A built-in AI assistant helps users read their commercial performance and make better decisions. Built on Clean Architecture and Hexagonal Architecture for long-term maintainability, with Android/iOS deployments via Expo (EAS Build), CI/CD pipelines and secured REST APIs with authentication.",
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
      fr: "Projet personnel pensé pour les vendeurs actifs sur WhatsApp, Instagram, TikTok ou Facebook, qui ont besoin d'une livraison fiable sans recruter leurs propres livreurs. Suivi GPS en temps réel du colis, prix fixé par le vendeur à la commande, code de livraison à quatre chiffres envoyé par SMS pour preuve de réception, et paiement à la livraison ou en Mobile Money avec fonds bloqués jusqu'à validation par le destinataire. Côté livreur, chacun choisit librement ses courses et retire ses gains via Orange Money ou MTN MoMo.",
      en: "A personal project built for sellers active on WhatsApp, Instagram, TikTok or Facebook who need reliable delivery without recruiting their own drivers. Real-time GPS tracking of the parcel, a price fixed by the seller at order creation, a four-digit SMS delivery code as proof of receipt, and payment on delivery or via Mobile Money with funds held until the recipient confirms. On the driver side, each one picks jobs freely and withdraws earnings through Orange Money or MTN MoMo.",
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
      fr: "Contribution au développement des fonctionnalités de publication et de recherche de trajets, réservation, gestion des profils et notifications. Intégration de la géolocalisation, de cartes interactives et des notifications push, au sein d'une équipe Agile gérant le code source via Git et Azure DevOps.",
      en: "Contributed trip publishing and search, booking, profile management and notifications. Integrated geolocation, interactive maps and push notifications, working within an Agile team managing source control through Git and Azure DevOps.",
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
      fr: "GuestiLog simplifie la gestion quotidienne des hôtels : check-in et check-out, facturation automatique, suivi du ménage par chambre, et indicateurs de performance en temps réel (taux d'occupation, revenus). L'application fonctionne hors ligne et synchronise les données dès que la connexion revient — une contrainte essentielle pour des établissements où le réseau n'est pas toujours fiable. Accessible sur mobile, tablette et ordinateur, avec une gestion multi-établissements sur les offres supérieures.",
      en: "GuestiLog simplifies day-to-day hotel operations: check-in and check-out, automatic invoicing, per-room housekeeping tracking, and real-time performance indicators (occupancy rate, revenue). The app works offline and syncs data as soon as connectivity returns — an essential constraint for properties where the network isn't always reliable. Accessible on mobile, tablet and desktop, with multi-property management on higher-tier plans.",
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
