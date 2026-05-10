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