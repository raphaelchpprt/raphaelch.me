export type AchievementHighlight = { highlight: string };
export type AchievementPart = string | AchievementHighlight;

export type AchievementLine = AchievementPart[];

export type Experience = {
  jobTitle: string;
  company: string;
  companyLogo: string;
  dateRange: string;
  companyDescription: string;
  missionDescription: string;
  achievements: AchievementLine[];
  video?: string;
};
