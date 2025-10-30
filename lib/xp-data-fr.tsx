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
      'médecins du monde est une organisation non gouvernementale internationale de solidarité médicale qui intervient auprès des populations vulnérables, en france et à l’international, pour garantir le droit fondamental à la santé',
    missionDescription:
      "mes missions étaient de contribuer à la refonte du site web institutionnel et d’améliorer la visibilité en ligne de l’organisation :",
    achievements: [
      React.createElement(
        React.Fragment,
        null,
        "participer à la refonte du site web institutionnel sous ",
        React.createElement(
          "span",
          { className: "text-accent font-semibold" },
          "wordpress",
        ),
        ", en collaboration avec une agence web, afin d’améliorer l’expérience utilisateur et la clarté de l’information",
      ),
      React.createElement(
        React.Fragment,
        null,
        "optimiser le référencement naturel (",
        React.createElement(
          "span",
          { className: "text-accent font-semibold" },
          "seo",
        ),
        ") du site web via des actions sur le contenu éditorial, la structure du site et les performances techniques",
      ),
      React.createElement(
        React.Fragment,
        null,
        "gérer et animer les réseaux sociaux (",
        React.createElement(
          "span",
          { className: "text-accent font-semibold" },
          "community management",
        ),
        ") de l’organisation pour accroître l’engagement et la visibilité en ligne",
      ),
      React.createElement(
        React.Fragment,
        null,
        "concevoir des supports de communication digitaux (bannières, infographies, newsletters) pour promouvoir les actions de l’organisation et sensibiliser le public aux enjeux de santé mondiale",
      ),
    ]
  },
  {
    jobTitle: "chargé de communication web",
    company: "surfrider foundation europe",
    companyLogo: "/logos/surfrider_foundation_europe_logo.jpg",
    dateRange: "2019 - 2020",
    companyDescription:
      "surfrider foundation europe est une organisation non gouvernementale dédiée à la protection et à la mise en valeur de l’océan, des vagues et du littoral par un réseau de militants passionnés",
    missionDescription:
      "mes missions étaient de gérer la communication digitale et d’améliorer la visibilité en ligne de l’organisation :",
    achievements: [
      React.createElement(
        React.Fragment,
        null,
        "gérer et animer les réseaux sociaux (",
        React.createElement(
          "span",
          { className: "text-accent font-semibold" },
          "community management",
        ),
        ") de l’organisation pour accroître l’engagement et la visibilité en ligne",
      ),
      React.createElement(
        React.Fragment,
        null,
        "concevoir des supports de communication digitaux (bannières, infographies, newsletters) pour promouvoir les actions de l’organisation et sensibiliser le public aux enjeux environnementaux",
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
        ", en collaboration avec une agence web, afin d’améliorer l’expérience utilisateur et la clarté de l’information",
      ),
      React.createElement(
        React.Fragment,
        null,
        "optimiser le référencement naturel (",
        React.createElement(
          "span",
          { className: "text-accent font-semibold" },
          "seo",
        ),
        ") du site web via des actions sur le contenu éditorial, la structure du site et les performances techniques",
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
      "mes missions étaient de gérer la communication, l’événementiel et les partenariats pour les programmes de l’organisation :",
    achievements: [
      React.createElement(
        React.Fragment,
        null,
        "concevoir et mettre en œuvre des stratégies de communication pour promouvoir les programmes et les initiatives de l’organisation, en utilisant divers canaux (médias sociaux, communiqués de presse, newsletters, etc.)",
      ),
      React.createElement(
        React.Fragment,
        null,
        "organiser des événements (conférences, ateliers, séminaires) pour sensibiliser le public aux enjeux mondiaux et promouvoir les actions de l’organisation",
      ),
      React.createElement(        
        React.Fragment,
        null,
        "développer et entretenir des partenariats avec des organisations et des acteurs clés pour soutenir les programmes de l’organisation",
      ),
    ]
  }
];
