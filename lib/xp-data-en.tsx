// lib/xp-data-en.tsx
import React, { ReactNode } from "react";

export type Experience = {
  jobTitle: string;
  company: string;
  dateRange: string;
  companyDescription: string;
  missionDescription: string;
  achievements: ReactNode[];
};

export const experiencesEn: Experience[] = [
  {
    jobTitle: "fullstack software developer",
    company: "impacti",
    dateRange: "2021 - 2025",
    companyDescription:
      'impacti is a start-up that develops the "carbon" saas platform, which allows institutions, ngos and companies to track the evolution of their CO2 emissions data, set reduction targets and achieve them with the support of an in-house team of experts',
    missionDescription:
      "my missions were to contribute to the interface development and improve the user experience, while ensuring the reliability and graphic modernity of the tool:",
    achievements: [
      React.createElement(
        React.Fragment,
        null,
        "develop and optimize the application management interface for complex, high-volume scientific carbon data, using ",
        React.createElement(
          "span",
          { className: "text-accent font-semibold" },
          "react, node, redux and materialui",
        ),
      ),
      React.createElement(
        React.Fragment,
        null,
        "build features ",
        React.createElement(
          "span",
          { className: "text-accent font-semibold" },
          "from backend to frontend",
        ),
        ', such as a notification center, a role and permission management system via a "macOs finder-like" system, and dynamic dashboards for data visualization',
      ),
      React.createElement(
        React.Fragment,
        null,
        "act as a liaison between the product team and a ux design agency ",
        React.createElement(
          "span",
          { className: "text-accent font-semibold" },
          "lead the redesign ",
        ),
        "of the interface and user journey, in order to make the product easier to use and more intuitive",
      ),
      React.createElement(
        React.Fragment,
        null,
        "contribute to the ",
        React.createElement(
          "span",
          { className: "text-accent font-semibold" },
          "design system ",
        ),
        "and its component library (Storybook) to ensure visual consistency of the application and make development faster and more scalable.",
      ),
      React.createElement(
        React.Fragment,
        null,
        "participate in the maintenance and evolution of the platform through a technical environment based on node, mongodb, docker, with project management according to the principles of the ",
        React.createElement(
          "span",
          { className: "text-accent font-semibold" },
          "agile scrum",
        ),
        " method, via jira and bitbucket",
      ),
    ],
  },
];