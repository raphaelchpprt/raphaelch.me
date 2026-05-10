export type AchievementHighlight = { highlight: string };
export type AchievementPart = string | AchievementHighlight;

export type AchievementLine = AchievementPart[];

export type Experience = {
  type:
    | "software engineering"
    | "développement web"
    | "communication web"
    | "web communication";
  jobTitle: string;
  company: string;
  companyLogo: string;
  dateRange: string;
  companyDescription: string;
  missionDescription: string;
  achievements: AchievementLine[];
  video?: string;
};
