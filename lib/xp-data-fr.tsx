import React, { ReactNode } from "react";

export type Experience = {
  jobTitle: string;
  company: string;
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
];
