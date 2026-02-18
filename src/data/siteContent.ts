import type { ExperienceItem, NavItem, Project, SkillGroup } from '../types';

export const navItems: NavItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'projects', label: 'Projects' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' }
];

export const projects: Project[] = [
  {
    title: 'Havee Rewards',
    description:
      'A full-stack classroom rewards application serving daily student engagement with role-based experiences, analytics tracking, and Firebase-backed workflows.',
    tags: ['Web App', 'Firebase', 'GCP', 'Analytics'],
    liveUrl: 'https://haveerewards.web.app/'
  },
  {
    title: 'Auto Fury LLC',
    description:
      'Business website and customer-facing portal with lead-focused page architecture, dynamic modules, and practical marketing integrations.',
    tags: ['Business Site', 'JavaScript', 'PHP', 'Marketing'],
    liveUrl: 'https://www.autofuryllc.com/'
  },
  {
    title: 'Shopping List App',
    description:
      'A full-stack Angular shopping workflow app with structured components, practical data handling, and an interface designed for everyday utility.',
    tags: ['Full-Stack', 'Angular', 'JavaScript', 'Productivity'],
    liveUrl: 'https://hhmakedon.github.io/ShoppingListApp/'
  },
  {
    title: 'Website Basics Demo',
    description:
      'A classroom teaching demo that helps students understand what websites are, how pages are structured, and how content is organized online.',
    tags: ['Education Demo', 'HTML/CSS', 'Teaching'],
    liveUrl: 'https://hhmakedon.github.io/websitedemo/'
  },
  {
    title: 'Phishing Awareness Demo',
    description:
      'A teaching-focused demo introducing phishing risk signals and practical habits for recognizing suspicious messages and links.',
    tags: ['Education Demo', 'Cyber Safety', 'Teaching'],
    liveUrl: 'https://hhmakedon.github.io/phishdemo/'
  }
];

export const experience: ExperienceItem[] = [
  {
    period: 'Jun 2025 – Aug 2025',
    title: 'Google Cloud Summer Intern',
    detail:
      'Collaborated with engineers and PMs on AI-first cloud prototypes, building proof-of-concept tools and reporting workflows with Cloud Run, BigQuery, and Firebase.'
  },
  {
    period: 'Aug 2021 – Present',
    title: 'Computer Science & Technology Teacher',
    detail:
      'Built and deployed classroom web apps, integrated cloud tooling for analytics and automation, and taught programming, robotics, and applied product development.'
  },
  {
    period: 'Oct 2018 – Jan 2021',
    title: 'Operations & Data Analyst, Yusen Logistics',
    detail:
      'Automated reporting with SQL and Python, built internal tools and dashboards, and improved workflow efficiency through data-driven process modernization.'
  }
];

export const skillGroups: SkillGroup[] = [
  {
    title: 'Web Dev',
    items: ['HTML', 'CSS', 'JavaScript', 'AngularJS', 'PHP', 'REST APIs', 'JSON', 'AJAX']
  },
  {
    title: 'Cloud',
    items: ['Cloud Run', 'Cloud SQL', 'BigQuery', 'Firebase', 'Cloud Storage', 'Cloud Build']
  },
  {
    title: 'Data/AI',
    items: ['Python', 'SQL', 'Pandas', 'NumPy', 'Prompt Engineering', 'Analytics Dashboards']
  },
  {
    title: 'Languages/Tools',
    items: ['C++', 'Java', 'GitHub', 'Docker', 'Swift', 'MS Office', 'Google Workspace', 'Canva']
  }
];
