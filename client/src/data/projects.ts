export interface Project {
  slug: string;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  features: string[];
  tags: string[];
  links: {
    demo: string;
    github: string;
  };
  color: string;
  images?: string[];
}

export const projects: Project[] = [
  {
    slug: "school-rp-fr",
    title: "The School RP FR",
    category: "Roblox Development",
    description:
      "Jeu de Roleplay scolaire francophone immersif sur Roblox. Développement des systèmes de gameplay et d'interactions.",
    longDescription:
      "The School RP FR est une expérience immersive sur Roblox qui simule la vie scolaire. En tant que développeur principal, j'ai conçu l'architecture globale du jeu pour supporter des centaines de joueurs simultanés. J'ai travaillé sur l'intégration de systèmes complexes comme la gestion des emplois du temps, les interactions entre joueurs, et un système d'économie complet.",
    features: [
      "Système de cours interactifs avec mini-jeux éducatifs",
      "Gestion dynamique des rôles (Élève, Professeur, Proviseur)",
      "Augmentation de la performance de la base de données",
      "Optimisation des scripts pour réduire le lag serveur",
    ],
    tags: ["Lua", "Roblox Studio", "RP", "Game Design", "GUI Development"],
    links: {
      demo: "https://www.roblox.com/games/88123962653564/The-School-RP-FR",
      github: "",
    },
    images: ["/TheSchool.png"],
    color: "from-red-500/20 to-orange-500/20",
  },
  {
    slug: "french-donations",
    title: "French Donations",
    category: "Roblox Systems",
    description:
      "Architecture de systèmes complexes incluant modération automatisée, gestion d'événements saisonniers et inventaire dynamique.",
    longDescription:
      "Sur French Donations, j'ai agi en tant que Lead System Developer. J'ai conçu un écosystème complet pour automatiser la gestion des joueurs et enrichir l'expérience utilisateur. Cela inclut un moteur de sanction autonome, un système d'inventaire optimisé pour la persistance des données et des modules événementiels interactifs.",
    features: [
      "Calendrier de l'Avent interactif pour un Event de Noël avec récompenses quotidiennes",
      "Système d'inventaire compatible avec les différents mini-jeux du jeu",
      "Logs de sanctions automatique via Webhooks Discord pour le staff",
    ],
    tags: ["Luau", "DataStore Service", "Automation", "UI/UX", "API Integration"],
    links: {
      demo: "https://www.roblox.com/games/88744853552411/French-Donations",
      github: "",
    },
    images: ["/FrenchDonations.png"],
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    slug: "portfolio-moderne",
    title: "Portfolio Moderne",
    category: "Web Development",
    description:
      "Ce site portfolio interactif construit avec React, TypeScript et Framer Motion pour des animations fluides.",
    longDescription:
      "Ce projet avait pour but de créer une vitrine professionnelle, rapide et esthétique. J'ai choisi une stack moderne (React + Vite) pour la performance, couplée à Framer Motion pour apporter une touche de vie à travers des animations soignées. L'accent a été mis sur l'expérience utilisateur et le responsive design.",
    features: [
      "Animations fluides au scroll avec Framer Motion",
      "Design System cohérent basé sur Tailwind CSS",
      "Mode sombre immersif avec effets de verre (Glassmorphism)",
      "Architecture de composants réutilisables",
      "Performance optimale (Lighthouse score > 90)",
    ],
    tags: ["React", "TypeScript", "Tailwind", "Framer Motion", "Vite"],
    links: { demo: "#", github: "https://github.com/ItsLuckt" },
    color: "from-green-500/20 to-emerald-500/20",
  },
];
