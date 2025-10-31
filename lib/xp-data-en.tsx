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

export const experiencesEn: Experience[] = [
  {
    jobTitle: "fullstack software developer",
    company: "impacti",
    companyLogo: "/logos/impacti_logo.jpg",
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
        "act as a liaison between the product team and a ux design agency to ",
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
        "and its component library (storybook) to ensure visual consistency of the application and make development faster and more scalable",
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
  {
    jobTitle: "web communication officer",
    company: "médecins du monde",
    companyLogo: "/logos/medecins_du_monde_logo.jpg",
    dateRange: "2020 - 2021",
    companyDescription:
      "médecins du monde is an international non-governmental organization for medical solidarity that works with vulnerable populations, in france and internationally, to guarantee the fundamental right to health",
    missionDescription:
      "my missions were to manage the organization's digital communication, ensure website maintenance and evolution, and increase online visibility:",
    achievements: [
      React.createElement(
        React.Fragment,
        null,
        "ensure ",
        React.createElement(
          "span",
          { className: "text-accent font-semibold" },
          "technical management, updating and animation",
        ),
        " of the organization's website and social networks on a daily basis",
      ),
      React.createElement(
        React.Fragment,
        null,
        "lead the ",
        React.createElement(
          "span",
          { className: "text-accent font-semibold" },
          "complete redesign of the website",
        ),
        " under wordpress, in collaboration with service provider agencies, to improve user experience and modernize the interface",
      ),
      React.createElement(
        React.Fragment,
        null,
        "monitor and analyze ",
        React.createElement(
          "span",
          { className: "text-accent font-semibold" },
          "website traffic",
        ),
        " and optimize content referencing (",
        React.createElement(
          "span",
          { className: "text-accent font-semibold" },
          "seo",
        ),
        ") to increase online visibility",
      ),
      React.createElement(
        React.Fragment,
        null,
        "write and send the ",
        React.createElement(
          "span",
          { className: "text-accent font-semibold" },
          "monthly newsletter",
        ),
        " and create ",
        React.createElement(
          "span",
          { className: "text-accent font-semibold" },
          "emailing campaigns",
        ),
        " to maintain community engagement and promote the organization's actions",
      ),
    ],
  },
  {
    jobTitle: "web communication officer",
    company: "surfrider foundation europe",
    companyLogo: "/logos/surfrider_foundation_europe_logo.jpg",
    dateRange: "2019 - 2020",
    companyDescription:
      "surfrider foundation europe is a non-governmental organization dedicated to the protection and enhancement of the ocean, waves and coastline through a network of passionate activists",
    missionDescription:
      "my missions were to manage the launch of the new website and develop an editorial strategy to improve the organization's online visibility:",
    achievements: [
      React.createElement(
        React.Fragment,
        null,
        "launch and animate the new website with ",
        React.createElement(
          "span",
          { className: "text-accent font-semibold" },
          "production of popular science articles",
        ),
        " optimized for seo for online communication to raise public awareness of environmental issues",
      ),
      React.createElement(
        React.Fragment,
        null,
        "define the ",
        React.createElement(
          "span",
          { className: "text-accent font-semibold" },
          "web editorial strategy",
        ),
        " based on the organization's overall communication strategy",
      ),
      React.createElement(
        React.Fragment,
        null,
        "contribute to the redesign of the institutional website under ",
        React.createElement(
          "span",
          { className: "text-accent font-semibold" },
          "wordpress",
        ),
        ", in collaboration with a web agency, to improve user experience and information clarity",
      ),
    ],
  },
  {
    jobTitle: "communication, outreach and partnerships officer",
    company: "unesco",
    companyLogo: "/logos/unesco_logo.jpg",
    dateRange: "2018 - 2019",
    companyDescription:
      "unesco is a specialized agency of the united nations that aims to promote peace and security in the world through international cooperation in the fields of education, science, culture and communication",
    missionDescription:
      "my missions were to plan and execute scientific communication projects, as well as create communication materials to promote the organization's programs:",
    achievements: [
      React.createElement(
        React.Fragment,
        null,
        "plan and execute ",
        React.createElement(
          "span",
          { className: "text-accent font-semibold" },
          "scientific communication projects and events",
        ),
        " to raise public awareness of global issues and promote the organization's actions",
      ),
      React.createElement(
        React.Fragment,
        null,
        "create, write and develop ",
        React.createElement(
          "span",
          { className: "text-accent font-semibold" },
          "web and print communication materials",
        ),
        " to promote the organization's programs and initiatives",
      ),
      React.createElement(
        React.Fragment,
        null,
        "develop and maintain ",
        React.createElement(
          "span",
          { className: "text-accent font-semibold" },
          "partnerships",
        ),
        " with organizations and key stakeholders to support the organization's programs",
      ),
    ],
  },
];
