import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  fr: {
    translation: {
      nav: {
        expertise: "Expertise",
        experience: "Parcours",
        stack: "Stack",
        projects: "Réalisations",
        contact: "Contact",
        contact_me: "Me Contacter"
      },
      hero: {
        badge: "Développeur FullStack, Mobile & Jeux",
        title_1: "Dév FullStack et d'applications mobiles",
        title_2: "et de jeux.",
        description: "Je suis spécialisé dans le web et les bases de données. De la conception architecturale à l'implémentation d'interfaces modernes avec <1>React</1>, <2>Python</2> et <3>Node.js</3>.",
        btn_projects: "Découvrir mes travaux",
        btn_github: "Profil GitHub",
        btn_roblox: "Profil Roblox"
      },
      services: {
        badge: "Domaines d'Expertise",
        title: "Des solutions techniques adaptées à vos défis complexes.",
        desc: "Mon approche combine rigueur architecturale et maîtrise des technologies modernes pour délivrer des logiciels performants, sécurisés et évolutifs.",
        items: [
          {
            title: "Ingénierie Logicielle",
            desc: "Architecture et développement d'applications robustes, de l'API backend à l'interface utilisateur frontend.",
            tech: "React, Node.js, TypeScript"
          },
          {
            title: "Automatisation & Backend",
            desc: "Conception de systèmes backend scalables, scripts d'automatisation et traitement de données complexes.",
            tech: "Python, MySQL, API REST"
          },
          {
            title: "Développement Roblox",
            desc: "Création d'expériences interactives performantes sur Roblox avec des mécaniques de jeu avancées.",
            tech: "Luau, Roblox Studio"
          },
          {
            title: "Architecture Système",
            desc: "Modélisation de bases de données et conception d'architectures logicielles maintenables et évolutives.",
            tech: "System Design, CI/CD"
          }
        ]
      },
      experience: {
        badge: "Expérience",
        title: "Mon parcours professionnel.",
        desc: "Une évolution guidée par la passion de la résolution de problèmes et la création d'expériences numériques de qualité.",
        items: [
          {
            year: "2025 - Présent",
            role: "Créateur de Jeux & Développeur Luau",
            company: "Roblox",
            desc: "Développement de systèmes de jeu complexes, d'interfaces utilisateur immersives et de mécaniques multijoueurs poussées sur la plateforme Roblox. Contribution majeure au jeu French Donations (plus de 2,5 millions de visites)."
          },
          {
            year: "2023 - Présent",
            role: "Développeur Fullstack Indépendant",
            company: "Freelance",
            desc: "Création d'applications web modernes avec React, Node.js et MySQL. Conception d'interfaces utilisateur fluides, sécurisées et optimisées pour la performance."
          },
          {
            year: "2020 - 2022",
            role: "Développeur Python",
            company: "Projets Personnels",
            desc: "Création de bots Discord performants, de scripts d'automatisation et d'outils d'analyse de données divers en utilisant Python."
          }
        ]
      },
      techstack: {
        badge: "Stack Technique",
        title: "Les technologies que j'utilise au quotidien.",
        desc: "Une sélection d'outils et de langages maîtrisés pour concevoir, développer et déployer des applications complètes.",
        categories: [
          {
            title: "Backend & Data",
            skills: [
              { name: "Python", desc: "Création de bots Discord, scripts d'automatisation et outils d'analyse de données divers." },
              { name: "Node.js", desc: "Architecture d'APIs performantes et services backend." },
              { name: "MySQL", desc: "Conception, gestion et optimisation de bases de données relationnelles." }
            ]
          },
          {
            title: "Frontend & Web",
            skills: [
              { name: "React", desc: "Développement d'interfaces utilisateur interactives, fluides et modernes." },
              { name: "TypeScript", desc: "Développement web robuste, maintenable et fortement typé." },
              { name: "JavaScript", desc: "Logique applicative complexe et dynamisme web." },
              { name: "HTML5/CSS3", desc: "Structure sémantique avancée, design responsive et animations." }
            ]
          },
          {
            title: "Game Dev & Mobile",
            skills: [
              { name: "Luau", desc: "Développement de systèmes de jeu complexes et mécaniques avancées sur Roblox." },
              { name: "Lua", desc: "Développement système, scripting et intégrations pour jeux vidéo." },
              { name: "Dart", desc: "Création d'applications mobiles performantes multi-plateformes." }
            ]
          },
          {
            title: "Outils",
            skills: [
              { name: "Git", desc: "Versionning, collaboration efficace et gestion de code source." }
            ]
          },
          {
            title: "Langues",
            skills: [
              { name: "Français", desc: "Langue maternelle" },
              { name: "Anglais", desc: "Bilingue - Lu, écrit, parlé couramment" },
              { name: "Allemand", desc: "Intermédiaire" }
            ]
          }
        ]
      },
      projects: {
        badge: "Réalisations",
        title: "Projets sélectionnés.",
        desc: "Aperçu de mes travaux récents, démontrant ma capacité à concevoir et livrer des solutions logicielles de bout en bout.",
        btn_visit: "Visiter le projet",
        btn_code: "Code source"
      },
      projects_data: {
        "school-rp-fr": {
          title: "The School RP FR",
          category: "Développement Roblox",
          description: "Jeu de Roleplay scolaire francophone sur Roblox. Développement des systèmes de gameplay et d'interactions.",
          longDescription: "The School RP FR est une expérience immersive sur Roblox qui simule la vie scolaire. En tant que développeur principal, j'ai conçu l'architecture globale du jeu pour supporter des centaines de joueurs simultanés. J'ai travaillé sur l'intégration de systèmes complexes comme la gestion des emplois du temps, les interactions entre joueurs, et un système d'économie complet.",
          features: [
            "Système de cours interactifs avec mini-jeux éducatifs",
            "Gestion dynamique des rôles (Élève, Professeur, Proviseur)",
            "Augmentation de la performance de la base de données",
            "Optimisation des scripts pour réduire le lag serveur"
          ]
        },
        "french-donations": {
          title: "French Donations",
          category: "Systèmes Roblox",
          description: "Création d'évent, Système de sanction et Système d'inventaire.",
          longDescription: "Sur French Donations, j'ai agi en tant que Lead System Developer. J'ai conçu un écosystème complet pour automatiser la gestion des joueurs et enrichir l'expérience utilisateur. Cela inclut un moteur de sanction autonome, un système d'inventaire optimisé pour la persistance des données et des modules événementiels interactifs.",
          features: [
            "Calendrier de l'Avent interactif pour un Event de Noël avec récompenses quotidiennes",
            "Système d'inventaire compatible avec les différents mini-jeux du jeu",
            "Logs de sanctions automatique via Webhooks Discord pour le staff"
          ]
        },
        "portfolio-moderne": {
          title: "Portfolio Moderne",
          category: "Développement Web",
          description: "Ce site portfolio interactif construit avec React, TypeScript et Framer Motion pour des animations fluides.",
          longDescription: "Ce projet avait pour but de créer une vitrine professionnelle, rapide et esthétique. J'ai choisi une stack moderne (React + Vite) pour la performance, couplée à Framer Motion pour apporter une touche de vie à travers des animations soignées. L'accent a été mis sur l'expérience utilisateur et le responsive design.",
          features: [
            "Animations fluides au scroll avec Framer Motion",
            "Design System cohérent basé sur Tailwind CSS",
            "Mode sombre immersif avec effets de verre (Glassmorphism)",
            "Architecture de composants réutilisables",
            "Performance optimale (Lighthouse score > 90)"
          ]
        }
      },
      project_detail: {
        back: "Retour aux projets",
        features: "Fonctionnalités Clés",
        links: "Liens du projet",
        view_project: "Voir le projet",
        view_code: "Voir le code"
      },
      contact: {
        badge: "Contact",
        title: "Démarrons un projet ensemble.",
        desc: "Que ce soit pour une opportunité de collaboration, une question technique ou simplement pour échanger, n'hésitez pas à me contacter.",
        location: "Localisation",
        city: "Lille, France",
        status: "Disponible pour de nouveaux défis",
        form: {
          name: "Nom complet",
          name_placeholder: "Votre nom",
          email: "Email",
          email_placeholder: "votre@email.com",
          subject: "Sujet",
          subject_placeholder: "Objet de votre message",
          message: "Message",
          message_placeholder: "Décrivez votre projet ou votre besoin...",
          submit: "Envoyer le message",
          error_title: "Erreur",
          error_desc: "Veuillez remplir tous les champs obligatoires.",
          success_title: "Message envoyé !",
          success_desc: "Je vous répondrai dans les plus brefs délais."
        },
        footer: "Tous droits réservés.",
        legal: "Mentions Légales"
      },
      gdpr: {
        title: "Respect de votre vie privée",
        desc: "Nous utilisons des cookies essentiels pour assurer le bon fonctionnement du site. Aucune donnée personnelle n'est revendue.",
        link: "Politique de confidentialité",
        accept: "J'accepte",
        decline: "Je refuse"
      },
      legal: {
        title: "Mentions Légales",
        back: "Retour à l'accueil",
        sections: [
          {
            title: "1. Éditeur du site",
            content: "Ce site est un portfolio personnel édité par un particulier à des fins non commerciales."
          },
          {
            title: "2. Hébergement",
            content: "Ce site est hébergé par la société Vercel Inc."
          },
          {
            title: "3. Propriété intellectuelle",
            content: "L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques. La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est formellement interdite sauf autorisation expresse du directeur de la publication."
          },
          {
            title: "4. Protection des données personnelles",
            content: "Ce site ne collecte aucune donnée personnelle à l'insu de l'utilisateur. Les informations recueillies via le formulaire de contact (Nom, Email) ne sont utilisées que pour répondre à votre demande et ne sont jamais cédées à des tiers. Conformément à la loi « Informatique et Libertés », vous disposez d'un droit d'accès, de modification et de suppression des données vous concernant."
          }
        ]
      }
    }
  },
  en: {
    translation: {
      nav: {
        expertise: "Expertise",
        experience: "Experience",
        stack: "Stack",
        projects: "Projects",
        contact: "Contact",
        contact_me: "Contact Me"
      },
      hero: {
        badge: "FullStack, Mobile & Game Developer",
        title_1: "FullStack and mobile app dev",
        title_2: "and games.",
        description: "I specialize in web and databases. From architectural design to the implementation of modern interfaces with <1>React</1>, <2>Python</2> and <3>Node.js</3>.",
        btn_projects: "Discover my work",
        btn_github: "GitHub Profile",
        btn_roblox: "Roblox Profile"
      },
      services: {
        badge: "Areas of Expertise",
        title: "Technical solutions tailored to your complex challenges.",
        desc: "My approach combines architectural rigor and mastery of modern technologies to deliver high-performance, secure, and scalable software.",
        items: [
          {
            title: "Software Engineering",
            desc: "Architecture and development of robust applications, from backend APIs to frontend user interfaces.",
            tech: "React, Node.js, TypeScript"
          },
          {
            title: "Automation & Backend",
            desc: "Design of scalable backend systems, automation scripts, and complex data processing.",
            tech: "Python, MySQL, REST API"
          },
          {
            title: "Roblox Development",
            desc: "Creation of high-performance interactive experiences on Roblox with advanced game mechanics.",
            tech: "Luau, Roblox Studio"
          },
          {
            title: "System Architecture",
            desc: "Database modeling and design of maintainable and scalable software architectures.",
            tech: "System Design, CI/CD"
          }
        ]
      },
      experience: {
        badge: "Experience",
        title: "My professional journey.",
        desc: "An evolution guided by a passion for problem-solving and creating high-quality digital experiences.",
        items: [
          {
            year: "2025 - Present",
            role: "Game Creator & Luau Developer",
            company: "Roblox",
            desc: "Development of complex game systems, immersive user interfaces, and advanced multiplayer mechanics on the Roblox platform. Major contribution to the game French Donations (over 2.5 million visits)."
          },
          {
            year: "2023 - Present",
            role: "Independent Fullstack Developer",
            company: "Freelance",
            desc: "Creation of modern web applications with React, Node.js, and MySQL. Design of fluid, secure, and performance-optimized user interfaces."
          },
          {
            year: "2020 - 2022",
            role: "Python Developer",
            company: "Personal Projects",
            desc: "Creation of high-performance Discord bots, automation scripts, and various data analysis tools using Python."
          }
        ]
      },
      techstack: {
        badge: "Technical Stack",
        title: "The technologies I use daily.",
        desc: "A selection of tools and languages mastered to design, develop, and deploy complete applications.",
        categories: [
          {
            title: "Backend & Data",
            skills: [
              { name: "Python", desc: "Creation of Discord bots, automation scripts, and various data analysis tools." },
              { name: "Node.js", desc: "Architecture of high-performance APIs and backend services." },
              { name: "MySQL", desc: "Design, management, and optimization of relational databases." }
            ]
          },
          {
            title: "Frontend & Web",
            skills: [
              { name: "React", desc: "Development of interactive, fluid, and modern user interfaces." },
              { name: "TypeScript", desc: "Robust, maintainable, and strongly typed web development." },
              { name: "JavaScript", desc: "Complex application logic and web dynamism." },
              { name: "HTML5/CSS3", desc: "Advanced semantic structure, responsive design, and animations." }
            ]
          },
          {
            title: "Game Dev & Mobile",
            skills: [
              { name: "Luau", desc: "Development of complex game systems and advanced mechanics on Roblox." },
              { name: "Lua", desc: "System development, scripting, and integrations for video games." },
              { name: "Dart", desc: "Creation of high-performance cross-platform mobile applications." }
            ]
          },
          {
            title: "Tools",
            skills: [
              { name: "Git", desc: "Versioning, effective collaboration, and source code management." }
            ]
          },
          {
            title: "Languages",
            skills: [
              { name: "French", desc: "Native" },
              { name: "English", desc: "Fluent - Read, written, spoken fluently" },
              { name: "German", desc: "Intermediate" }
            ]
          }
        ]
      },
      projects: {
        badge: "Portfolio",
        title: "Selected projects.",
        desc: "Overview of my recent work, demonstrating my ability to design and deliver end-to-end software solutions.",
        btn_visit: "Visit project",
        btn_code: "Source code"
      },
      projects_data: {
        "school-rp-fr": {
          title: "The School RP FR",
          category: "Roblox Development",
          description: "French-speaking school roleplay game on Roblox. Development of gameplay and interaction systems.",
          longDescription: "The School RP FR is an immersive Roblox experience that simulates school life. As the lead developer, I designed the overall game architecture to support hundreds of concurrent players. I worked on integrating complex systems such as schedule management, player interactions, and a complete economy system.",
          features: [
            "Interactive class system with educational mini-games",
            "Dynamic role management (Student, Teacher, Principal)",
            "Database performance improvements",
            "Script optimization to reduce server lag"
          ]
        },
        "french-donations": {
          title: "French Donations",
          category: "Roblox Systems",
          description: "Creation of event, sanction system and inventory system.",
          longDescription: "On French Donations, I acted as Lead System Developer. I designed a complete ecosystem to automate player management and enrich the user experience. This includes an autonomous sanction engine, an optimized inventory system for data persistence, and interactive event modules.",
          features: [
            "Interactive Advent Calendar for a Christmas Event with daily rewards",
            "Inventory system compatible with the different mini-games",
            "Automatic sanction logs via Discord Webhooks for staff"
          ]
        },
        "portfolio-moderne": {
          title: "Modern Portfolio",
          category: "Web Development",
          description: "This interactive portfolio website built with React, TypeScript and Framer Motion for fluid animations.",
          longDescription: "The goal of this project was to create a professional, fast, and aesthetic showcase. I chose a modern stack (React + Vite) for performance, coupled with Framer Motion to bring it to life through polished animations. The focus was on user experience and responsive design.",
          features: [
            "Smooth scroll animations with Framer Motion",
            "Consistent Design System based on Tailwind CSS",
            "Immersive dark mode with glass effects (Glassmorphism)",
            "Reusable component architecture",
            "Optimal performance (Lighthouse score > 90)"
          ]
        }
      },
      project_detail: {
        back: "Back to projects",
        features: "Key Features",
        links: "Project Links",
        view_project: "View project",
        view_code: "View code"
      },
      contact: {
        badge: "Contact",
        title: "Let's start a project together.",
        desc: "Whether it's for a collaboration opportunity, a technical question, or just to chat, feel free to contact me.",
        location: "Location",
        city: "Lille, France",
        status: "Available for new challenges",
        form: {
          name: "Full Name",
          name_placeholder: "Your name",
          email: "Email",
          email_placeholder: "your@email.com",
          subject: "Subject",
          subject_placeholder: "Subject of your message",
          message: "Message",
          message_placeholder: "Describe your project or your needs...",
          submit: "Send message",
          error_title: "Error",
          error_desc: "Please fill in all required fields.",
          success_title: "Message sent!",
          success_desc: "I will get back to you as soon as possible."
        },
        footer: "All rights reserved.",
        legal: "Legal Notice"
      },
      gdpr: {
        title: "Privacy and Cookie Consent",
        desc: "We use essential cookies to ensure our site works properly. No personal data is sold.",
        link: "Privacy Policy",
        accept: "Accept",
        decline: "Decline"
      },
      legal: {
        title: "Legal Notice",
        back: "Back to home",
        sections: [
          {
            title: "1. Site Publisher",
            content: "This site is a personal portfolio published by an individual for non-commercial purposes."
          },
          {
            title: "2. Hosting",
            content: "This site is hosted by Vercel Inc."
          },
          {
            title: "3. Intellectual Property",
            content: "This entire site is subject to French and international legislation on copyright and intellectual property. All reproduction rights are reserved, including for downloadable documents and iconographic and photographic representations. The reproduction of all or part of this site on any electronic medium is strictly prohibited without the express permission of the publishing director."
          },
          {
            title: "4. Personal Data Protection",
            content: "This site does not collect any personal data without the user's knowledge. The information collected via the contact form (Name, Email) is only used to respond to your request and is never passed on to third parties. In accordance with the 'Informatique et Libertés' law, you have the right to access, modify, and delete your data."
          }
        ]
      }
    }
  },
  de: {
    translation: {
      nav: {
        expertise: "Fachwissen",
        experience: "Erfahrung",
        stack: "Technologien",
        projects: "Projekte",
        contact: "Kontakt",
        contact_me: "Kontaktieren Sie mich"
      },
      hero: {
        badge: "FullStack, Mobile & Spieleentwickler",
        title_1: "FullStack und Mobile App Entw.",
        title_2: "und Spiele.",
        description: "Ich bin auf Web und Datenbanken spezialisiert. Von der architektonischen Gestaltung bis zur Implementierung moderner Schnittstellen mit <1>React</1>, <2>Python</2> und <3>Node.js</3>.",
        btn_projects: "Meine Arbeit entdecken",
        btn_github: "GitHub Profil",
        btn_roblox: "Roblox Profil"
      },
      services: {
        badge: "Fachgebiete",
        title: "Technische Lösungen für Ihre komplexen Herausforderungen.",
        desc: "Mein Ansatz kombiniert architektonische Genauigkeit und Beherrschung moderner Technologien, um leistungsstarke, sichere und skalierbare Software zu liefern.",
        items: [
          {
            title: "Softwareentwicklung",
            desc: "Architektur und Entwicklung robuster Anwendungen, von Backend-APIs bis zu Frontend-Benutzeroberflächen.",
            tech: "React, Node.js, TypeScript"
          },
          {
            title: "Automatisierung & Backend",
            desc: "Entwurf skalierbarer Backend-Systeme, Automatisierungsskripte und komplexe Datenverarbeitung.",
            tech: "Python, MySQL, REST API"
          },
          {
            title: "Roblox Entwicklung",
            desc: "Erstellung leistungsstarker interaktiver Erlebnisse auf Roblox mit fortschrittlichen Spielmechaniken.",
            tech: "Luau, Roblox Studio"
          },
          {
            title: "Systemarchitektur",
            desc: "Datenbankmodellierung und Entwurf wartbarer und skalierbarer Softwarearchitekturen.",
            tech: "System Design, CI/CD"
          }
        ]
      },
      experience: {
        badge: "Erfahrung",
        title: "Mein beruflicher Werdegang.",
        desc: "Eine Entwicklung, die von der Leidenschaft für Problemlösungen und die Schaffung hochwertiger digitaler Erlebnisse geleitet wird.",
        items: [
          {
            year: "2025 - Heute",
            role: "Spieleentwickler & Luau-Entwickler",
            company: "Roblox",
            desc: "Entwicklung komplexer Spielsysteme, immersiver Benutzeroberflächen und fortschrittlicher Multiplayer-Mechaniken auf der Roblox-Plattform. Wichtiger Beitrag zum Spiel French Donations (über 2,5 Millionen Besuche)."
          },
          {
            year: "2023 - Heute",
            role: "Unabhängiger Fullstack-Entwickler",
            company: "Freiberuflich",
            desc: "Erstellung moderner Webanwendungen mit React, Node.js und MySQL. Entwurf flüssiger, sicherer und leistungsoptimierter Benutzeroberflächen."
          },
          {
            year: "2020 - 2022",
            role: "Python Entwickler",
            company: "Persönliche Projekte",
            desc: "Erstellung leistungsstarker Discord-Bots, Automatisierungsskripte und verschiedener Datenanalysetools mit Python."
          }
        ]
      },
      techstack: {
        badge: "Technologie-Stack",
        title: "Die Technologien, die ich täglich nutze.",
        desc: "Eine Auswahl von Werkzeugen und Sprachen, die ich beherrsche, um vollständige Anwendungen zu entwerfen, zu entwickeln und bereitzustellen.",
        categories: [
          {
            title: "Backend & Daten",
            skills: [
              { name: "Python", desc: "Erstellung von Discord-Bots, Automatisierungsskripten und verschiedenen Datenanalysetools." },
              { name: "Node.js", desc: "Architektur von Hochleistungs-APIs und Backend-Diensten." },
              { name: "MySQL", desc: "Entwurf, Verwaltung und Optimierung relationaler Datenbanken." }
            ]
          },
          {
            title: "Frontend & Web",
            skills: [
              { name: "React", desc: "Entwicklung interaktiver, flüssiger und moderner Benutzeroberflächen." },
              { name: "TypeScript", desc: "Robuste, wartbare und stark typisierte Webentwicklung." },
              { name: "JavaScript", desc: "Komplexe Anwendungslogik und Webdynamik." },
              { name: "HTML5/CSS3", desc: "Fortgeschrittene semantische Struktur, responsives Design und Animationen." }
            ]
          },
          {
            title: "Spieleentwicklung & Mobile",
            skills: [
              { name: "Luau", desc: "Entwicklung komplexer Spielsysteme und fortschrittlicher Mechaniken auf Roblox." },
              { name: "Lua", desc: "Systementwicklung, Skripterstellung und Integrationen für Videospiele." },
              { name: "Dart", desc: "Erstellung leistungsstarker plattformübergreifender mobiler Anwendungen." }
            ]
          },
          {
            title: "Werkzeuge",
            skills: [
              { name: "Git", desc: "Versionierung, effektive Zusammenarbeit und Quellcodeverwaltung." }
            ]
          },
          {
            title: "Sprachen",
            skills: [
              { name: "Französisch", desc: "Muttersprache" },
              { name: "Englisch", desc: "Fließend" },
              { name: "Deutsch", desc: "Mittelstufe" }
            ]
          }
        ]
      },
      projects: {
        badge: "Portfolio",
        title: "Ausgewählte Projekte.",
        desc: "Ein Überblick über meine jüngsten Arbeiten, der meine Fähigkeit zeigt, Softwarelösungen durchgängig zu entwerfen und bereitzustellen.",
        btn_visit: "Projekt besuchen",
        btn_code: "Quellcode"
      },
      projects_data: {
        "school-rp-fr": {
          title: "The School RP FR",
          category: "Roblox Entwicklung",
          description: "Französischsprachiges Schul-Rollenspiel auf Roblox. Entwicklung von Gameplay- und Interaktionssystemen.",
          longDescription: "The School RP FR ist ein immersives Roblox-Erlebnis, das das Schulleben simuliert. Als leitender Entwickler entwarf ich die gesamte Spielarchitektur, um Hunderte von gleichzeitigen Spielern zu unterstützen. Ich arbeitete an der Integration komplexer Systeme wie Zeitplanverwaltung, Spielerinteraktionen und einem vollständigen Wirtschaftssystem.",
          features: [
            "Interaktives Klassensystem mit pädagogischen Minispielen",
            "Dynamisches Rollenmanagement (Schüler, Lehrer, Direktor)",
            "Verbesserungen der Datenbankleistung",
            "Skriptoptimierung zur Reduzierung von Serververzögerungen"
          ]
        },
        "french-donations": {
          title: "French Donations",
          category: "Roblox Systeme",
          description: "Erstellung von Event-, Sanktions- und Inventarsystemen.",
          longDescription: "Bei French Donations fungierte ich als Lead System Developer. Ich entwarf ein komplettes Ökosystem zur Automatisierung der Spielerverwaltung und zur Bereicherung der Benutzererfahrung. Dies umfasst eine autonome Sanktions-Engine, ein optimiertes Inventarsystem für die Datenpersistenz und interaktive Eventmodule.",
          features: [
            "Interaktiver Adventskalender für ein Weihnachtsevent mit täglichen Belohnungen",
            "Inventarsystem kompatibel mit den verschiedenen Minispielen",
            "Automatische Sanktionsprotokolle über Discord-Webhooks für das Personal"
          ]
        },
        "portfolio-moderne": {
          title: "Modernes Portfolio",
          category: "Webentwicklung",
          description: "Diese interaktive Portfolio-Website wurde mit React, TypeScript und Framer Motion für flüssige Animationen erstellt.",
          longDescription: "Ziel dieses Projekts war es, ein professionelles, schnelles und ästhetisches Schaufenster zu schaffen. Ich entschied mich für einen modernen Stack (React + Vite) für die Leistung, gepaart mit Framer Motion, um es durch ausgefeilte Animationen zum Leben zu erwecken. Der Schwerpunkt lag auf der Benutzererfahrung und dem responsiven Design.",
          features: [
            "Flüssige Scroll-Animationen mit Framer Motion",
            "Konsistentes Design-System basierend auf Tailwind CSS",
            "Immersiver Dunkelmodus mit Glaseffekten (Glassmorphismus)",
            "Wiederverwendbare Komponentenarchitektur",
            "Optimale Leistung (Lighthouse-Ergebnis > 90)"
          ]
        }
      },
      project_detail: {
        back: "Zurück zu Projekten",
        features: "Hauptmerkmale",
        links: "Projekt-Links",
        view_project: "Projekt ansehen",
        view_code: "Code ansehen"
      },
      contact: {
        badge: "Kontakt",
        title: "Lassen Sie uns ein Projekt starten.",
        desc: "Ob für eine Zusammenarbeit, eine technische Frage oder einfach zum Plaudern, kontaktieren Sie mich gerne.",
        location: "Standort",
        city: "Lille, Frankreich",
        status: "Verfügbar für neue Herausforderungen",
        form: {
          name: "Vollständiger Name",
          name_placeholder: "Ihr Name",
          email: "E-Mail",
          email_placeholder: "ihre@email.com",
          subject: "Betreff",
          subject_placeholder: "Betreff Ihrer Nachricht",
          message: "Nachricht",
          message_placeholder: "Beschreiben Sie Ihr Projekt oder Ihre Bedürfnisse...",
          submit: "Nachricht senden",
          error_title: "Fehler",
          error_desc: "Bitte füllen Sie alle erforderlichen Felder aus.",
          success_title: "Nachricht gesendet!",
          success_desc: "Ich werde mich so schnell wie möglich bei Ihnen melden."
        },
        footer: "Alle Rechte vorbehalten.",
        legal: "Impressum"
      },
      gdpr: {
        title: "Datenschutz und Cookie-Zustimmung",
        desc: "Wir verwenden wesentliche Cookies, um sicherzustellen, dass unsere Website ordnungsgemäß funktioniert. Es werden keine personenbezogenen Daten verkauft.",
        link: "Datenschutzerklärung",
        accept: "Akzeptieren",
        decline: "Ablehnen"
      },
      legal: {
        title: "Impressum",
        back: "Zurück zur Startseite",
        sections: [
          {
            title: "1. Herausgeber der Website",
            content: "Diese Website ist ein persönliches Portfolio, das von einer Einzelperson für nichtkommerzielle Zwecke veröffentlicht wird."
          },
          {
            title: "2. Hosting",
            content: "Diese Website wird von Vercel Inc. gehostet."
          },
          {
            title: "3. Geistiges Eigentum",
            content: "Diese gesamte Website unterliegt der französischen und internationalen Gesetzgebung zum Urheberrecht und zum geistigen Eigentum. Alle Vervielfältigungsrechte sind vorbehalten, auch für herunterladbare Dokumente sowie ikonografische und fotografische Darstellungen. Die Vervielfältigung dieser Website oder Teilen davon auf einem elektronischen Medium ist ohne ausdrückliche Genehmigung des Veröffentlichungsdirektors strengstens untersagt."
          },
          {
            title: "4. Schutz personenbezogener Daten",
            content: "Diese Website sammelt ohne das Wissen des Benutzers keine personenbezogenen Daten. Die über das Kontaktformular erfassten Informationen (Name, E-Mail) werden nur zur Beantwortung Ihrer Anfrage verwendet und niemals an Dritte weitergegeben. Gemäß dem Gesetz 'Informatique et Libertés' haben Sie das Recht auf Zugang, Änderung und Löschung Ihrer Daten."
          }
        ]
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "fr", // default language
    fallbackLng: "fr",
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;