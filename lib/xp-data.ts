import React, { ReactNode } from "react";

export const experiences: {
  jobTitle: string;
  company: string;
  dateRange: string;
  companyDescription: string;
  missionDescription: string;
  achievements: ReactNode[];
}[] = [
  {
    jobTitle: "développeur saas fullstack/frontend",
    company: "impacti",
    dateRange: "novembre 2021 - mai 2025 (3 ans et 6 mois)",
    companyDescription:
      "impacti est une start-up qui développe le saas carbon, plateforme qui permet aux institutions, ong et entreprises de suivre l’évolution de leurs données d’émissions, de se fixer des objectifs de réduction et de les atteindre grâce à l’accompagnement d’une équipe interne d’experts",
    missionDescription:
      "mes missions étaient de contribuer au développement de l’interface saas de carbon et d’améliorer l’expérience utilisateur, tout en garantissant la fiabilité et l'identité de l’outil :",
    achievements: [
      React.createElement(
        React.Fragment,
        null,
        "développer et optimiser l’interface de gestion applicative de données carbones complexes à forte volumétrie, en utilisant ",
        React.createElement(
          "span",
          { className: "text-accent" },
          "react, node, redux et materialui",
        ),
      ),
      React.createElement(
        React.Fragment,
        null,
        "construire des fonctionnalités ",
        React.createElement(
          "span",
          { className: "text-accent" },
          "du backend au frontend",
        ),
        ", comme un centre de notifications, un système de gestion des rôles et permissions, et des tableaux de bord interactifs pour la visualisation des données",
      ),
      React.createElement(
        React.Fragment,
        null,
        "faire le lien entre l’équipe produit et une agence de design ux ",
        React.createElement(
          "span",
          { className: "text-accent" },
          "mener la refonte ",
        ),
        "de l’interface et du parcours utilisateur, afin de rendre le produit plus simple à la prise en main et naturel à l'utilisation",
      ),
      React.createElement(
        React.Fragment,
        null,
        "participer à la maintenance et à l’évolution de la plateforme grâce à un environnement technique basé sur node, mongodb, docker, avec une gestion de projet selon les principes de la méthode ",
        React.createElement(
          "span",
          { className: "text-accent" },
          "agile scrum",
        ),
        ", via jira et bitbucket",
      ),
    ],
  },
];
