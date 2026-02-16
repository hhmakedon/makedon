export type Project = {
  title: string;
  description: string;
  tags: string[];
  liveUrl: string;
  secondaryUrl?: string;
  secondaryLabel?: string;
};

export type ExperienceItem = {
  period: string;
  title: string;
  detail: string;
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export type NavItem = {
  id: string;
  label: string;
};
