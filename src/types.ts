export type Project = {
  title: string;
  description: string;
  tags: string[];
  liveUrl: string;
  secondaryUrl?: string;
  secondaryLabel?: string;
  featured?: boolean;
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

export type Stat = {
  value: string;
  accent?: string;
  label: string;
  /** When set, the value counts up from 0 to this number on load. */
  countTo?: number;
};

export type Highlight = {
  icon: 'teaching' | 'web' | 'cloud';
  title: string;
  detail: string;
};
