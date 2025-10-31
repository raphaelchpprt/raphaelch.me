import React, { ReactNode } from "react";

export type Experience = {
  jobTitle: string;
  company: string;
  companyLogo: string;
  dateRange: string;
  companyDescription: string;
  missionDescription: string;
  achievements: ReactNode[];
};

export const experiencesFr: Experience[] = [
  {
    jobTitle: "développeur software fullstack",
    company: "impacti",
    dateRange: "2021 - 2025",
    companyLogo: "/logos/impacti_logo.jpg",
    companyDescription:
      'impacti est une start-up qui développe le saas "carbon", plateforme qui permet aux institutions, ong et entreprises de suivre l’évolution de leurs données d’émissions de CO2, de se fixer des objectifs de réduction et de les atteindre grâce à l’accompagnement d’une équipe interne d’experts',
    missionDescription:
      "mes missions étaient de contribuer au développement de l’interface et d’améliorer l’expérience utilisateur, tout en garantissant la fiabilité et la modernité graphique de l’outil :",
    achievements: [
      React.createElement(
        React.Fragment,
        null,
        "développer et optimiser l’interface de gestion applicative de données carbones complexes à caractère scientifique et à forte volumétrie, en utilisant ",
        React.createElement(
          "span",
          { className: "text-accent font-semibold" },
          "react, node, redux et materialui",
        ),
      ),
      React.createElement(
        React.Fragment,
        null,
        "construire des fonctionnalités ",
        React.createElement(
          "span",
          { className: "text-accent font-semibold" },
          "du backend au frontend",
        ),
        ', comme un centre de notifications, un système de gestion des rôles et permissions via un système "macOs finder-like", et des tableaux de bord dynamiques pour la visualisation des données',
      ),
      React.createElement(
        React.Fragment,
        null,
        "faire le lien entre l’équipe produit et une agence de design ux ",
        React.createElement(
          "span",
          { className: "text-accent font-semibold" },
          "mener la refonte ",
        ),
        "de l’interface et du parcours utilisateur, afin de rendre le produit plus simple à la prise en main et naturel à l'utilisation",
      ),
      React.createElement(
        React.Fragment,
        null,
        "contribuer au ",
        React.createElement(
          "span",
          { className: "text-accent font-semibold" },
          "design system ",
        ),
        "et à sa bibliothèque de composants (Storybook) pour assurer la cohérence visuelle de l'application et rendre le développement plus rapide et scalable.",
      ),
      React.createElement(
        React.Fragment,
        null,
        "participer à la maintenance et à l’évolution de la plateforme grâce à un environnement technique basé sur node, mongodb, docker, avec une gestion de projet selon les principes de la méthode ",
        React.createElement(
          "span",
          { className: "text-accent font-semibold" },
          "agile scrum",
        ),
        ", via jira et bitbucket",
      ),
    ],
  },
  {
    jobTitle: "chargé de communication web",
    company: "médecins du monde",
    companyLogo: "/logos/medecins_du_monde_logo.jpg",
    dateRange: "2020 - 2021",
    companyDescription:
      "médecins du monde est une organisation non gouvernementale internationale de solidarité médicale qui intervient auprès des populations vulnérables, en france et à l'international, pour garantir le droit fondamental à la santé",
    missionDescription:
      "mes missions étaient de gérer la communication digitale de l'organisation, d'assurer la maintenance et l'évolution du site web, et d'accroître la visibilité en ligne :",
    achievements: [
      React.createElement(
        React.Fragment,
        null,
        "assurer la ",
        React.createElement(
          "span",
          { className: "text-accent font-semibold" },
          "gestion technique, l'actualisation et l'animation",
        ),
        " du site internet et des réseaux sociaux de l'organisation au quotidien",
      ),
      React.createElement(
        React.Fragment,
        null,
        "conduire la ",
        React.createElement(
          "span",
          { className: "text-accent font-semibold" },
          "refonte complète du site internet",
        ),
        " sous wordpress, en collaboration avec les agences prestataires, pour améliorer l'expérience utilisateur et moderniser l'interface",
      ),
      React.createElement(
        React.Fragment,
        null,
        "suivre et analyser le ",
        React.createElement(
          "span",
          { className: "text-accent font-semibold" },
          "trafic du site internet",
        ),
        " et optimiser le référencement des contenus (",
        React.createElement(
          "span",
          { className: "text-accent font-semibold" },
          "seo",
        ),
        ") pour accroître la visibilité en ligne",
      ),
      React.createElement(
        React.Fragment,
        null,
        "rédiger et envoyer la ",
        React.createElement(
          "span",
          { className: "text-accent font-semibold" },
          "newsletter mensuelle",
        ),
        " et créer des campagnes d'",
        React.createElement(
          "span",
          { className: "text-accent font-semibold" },
          "emailing",
        ),
        " pour maintenir l'engagement de la communauté et promouvoir les actions de l'organisation",
      ),
    ],
  },
  {
    jobTitle: "chargé de communication web",
    company: "surfrider foundation europe",
    companyLogo: "/logos/surfrider_foundation_europe_logo.jpg",
    dateRange: "2019 - 2020",
    companyDescription:
      "surfrider foundation europe est une organisation non gouvernementale dédiée à la protection et à la mise en valeur de l'océan, des vagues et du littoral par un réseau de militants passionnés",
    missionDescription:
      "mes missions étaient de gérer le lancement du nouveau site web et de développer une stratégie éditoriale pour améliorer la visibilité en ligne de l'organisation :",
    achievements: [
      React.createElement(
        React.Fragment,
        null,
        "lancer et animer le nouveau site web avec ",
        React.createElement(
          "span",
          { className: "text-accent font-semibold" },
          "production et mise en ligne d'articles de vulgarisation scientifique",
        ),
        " optimisés seo pour la communication en ligne afin de sensibiliser le public aux enjeux environnementaux",
      ),
      React.createElement(
        React.Fragment,
        null,
        "définir la ",
        React.createElement(
          "span",
          { className: "text-accent font-semibold" },
          "stratégie éditoriale web",
        ),
        " à partir de la stratégie de communication globale de l'organisation",
      ),
      React.createElement(
        React.Fragment,
        null,
        "contribuer à la refonte du site web institutionnel sous ",
        React.createElement(
          "span",
          { className: "text-accent font-semibold" },
          "wordpress",
        ),
        ", en collaboration avec une agence web, afin d'améliorer l'expérience utilisateur et la clarté de l'information",
      ),
    ],
  },
  {
    jobTitle: "chargé de communication, événementiel et partenariats",
    company: "unesco",
    companyLogo: "/logos/unesco_logo.jpg",
    dateRange: "2018 - 2019",
    companyDescription:
      "l'unesco est une agence spécialisée des nations unies qui vise à promouvoir la paix et la sécurité dans le monde par la coopération internationale dans les domaines de l'éducation, des sciences, de la culture et de la communication",
    missionDescription:
      "mes missions étaient de planifier et réaliser des projets de communication scientifique, ainsi que de créer des supports de communication pour promouvoir les programmes de l'organisation :",
    achievements: [
      React.createElement(
        React.Fragment,
        null,
        "planifier et réaliser des ",
        React.createElement(
          "span",
          { className: "text-accent font-semibold" },
          "projets et événements de communication scientifique",
        ),
        " pour sensibiliser le public aux enjeux mondiaux et promouvoir les actions de l'organisation",
      ),
      React.createElement(
        React.Fragment,
        null,
        "créer, rédiger et développer des ",
        React.createElement(
          "span",
          { className: "text-accent font-semibold" },
          "supports de communication web et print",
        ),
        " pour promouvoir les programmes et initiatives de l'organisation",
      ),
      React.createElement(
        React.Fragment,
        null,
        "développer et entretenir des ",
        React.createElement(
          "span",
          { className: "text-accent font-semibold" },
          "partenariats",
        ),
        " avec des organisations et des acteurs clés pour soutenir les programmes de l'organisation",
      ),
    ],
  },
];
