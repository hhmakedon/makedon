import type {
  EducationItem,
  ExperienceItem,
  Highlight,
  NavItem,
  Project,
  SkillGroup,
  Stat
} from '../types';

export const navItems: NavItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'projects', label: 'Projects' },
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' }
];

export const heroStats: Stat[] = [
  { value: '12', accent: '+', label: 'Apps & projects shipped', countTo: 12 },
  { value: "'25", label: 'Google Cloud intern' },
  { value: '4', accent: 'yrs', label: 'Teaching & building CS', countTo: 4 }
];

export const heroRoles = ['Software Engineer', 'Cloud Practitioner', 'Educator'];

export const marqueeItems: string[] = [
  'JavaScript',
  'TypeScript',
  'React',
  'AngularJS',
  'PHP',
  'Python',
  'SQL',
  'Firebase',
  'Cloud Run',
  'BigQuery',
  'Cloud SQL',
  'Docker',
  'C++',
  'Java',
  'REST APIs'
];

export const projects: Project[] = [
  {
    title: 'Book Reviews App',
    description:
      'A full-stack personal book review web app built for tracking books, writing reviews, and organizing reading activity in one place.',
    tags: ['Full-Stack', 'Web App', 'Books', 'Reviews'],
    liveUrl: 'https://hhmakedon.github.io/bookreviews/',
    featured: true
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
    title: 'Havee Rewards',
    description:
      'A full-stack classroom rewards platform serving daily student engagement with role-based experiences, analytics tracking, and Firebase-backed workflows.',
    tags: ['Web App', 'Firebase', 'GCP', 'Analytics'],
    liveUrl: 'https://haveerewards.web.app/'
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
  },
  {
    title: 'DOM Manipulation Demo',
    description:
      'A live demo site for practicing DOM manipulation from the browser console — selecting elements, changing content and styles, and seeing the page respond in real time.',
    tags: ['Education Demo', 'JavaScript', 'DOM', 'Teaching'],
    liveUrl: 'https://hhmakedon.github.io/DOM-Manipulation-Demo/'
  },
  {
    title: 'WordGarden',
    description:
      'A word-guessing game for iOS — guess the phrase letter by letter before the flower wilts, with round tracking and win/loss feedback.',
    tags: ['iOS App', 'Swift', 'Game'],
    liveUrl: 'https://github.com/hhmakedon/WordGarden'
  },
  {
    title: 'War Card Game',
    description:
      'The classic War card game as an iOS app — tap to deal, compare cards, and track both players’ scores round over round.',
    tags: ['iOS App', 'Swift', 'Game'],
    liveUrl: 'https://github.com/hhmakedon/War-Card-Game'
  },
  {
    title: 'DungeonDice',
    description:
      'A tabletop companion app for iOS that rolls the full set of polyhedral dice (d4 through d100) with a clean, tap-friendly interface.',
    tags: ['iOS App', 'Swift', 'Utility'],
    liveUrl: 'https://github.com/hhmakedon/DungeonDice'
  },
  {
    title: "What's For Dinner",
    description:
      'A random dinner selector for iOS — one tap serves up a meal suggestion for anyone who can never decide what to eat.',
    tags: ['iOS App', 'Swift', 'Utility'],
    liveUrl: 'https://github.com/hhmakedon/WhatsForDinner'
  },
  {
    title: 'Predict 8-Ball',
    description:
      'A Magic 8-Ball app for iOS — ask a question, shake or tap, and receive your fortune with playful animations.',
    tags: ['iOS App', 'Swift', 'Game'],
    liveUrl: 'https://github.com/hhmakedon/Predict-8Ball'
  }
];

export const highlights: Highlight[] = [
  {
    icon: 'web',
    title: 'Full-Stack Engineering',
    detail: 'Maintainable builds with JavaScript, AngularJS, PHP, and REST APIs — from data layer to interface.'
  },
  {
    icon: 'cloud',
    title: 'Cloud Delivery',
    detail: 'Google Cloud and Firebase for scalable apps, analytics pipelines, and workflow automation.'
  },
  {
    icon: 'teaching',
    title: 'Technical Leadership',
    detail: 'Project-based CS instruction, mentoring, and turning ideas into shipped, real-world tools.'
  }
];

export const education: EducationItem[] = [
  {
    period: '2025 – 2026',
    degree: 'Master of Educational Leadership',
    school: 'Aurora University',
    note: 'In progress — 3rd master’s'
  },
  {
    period: '2019 – 2021',
    degree: 'Master of Secondary Education',
    school: 'Northeastern Illinois University'
  },
  {
    period: '2016 – 2018',
    degree: 'Master of Logic and the Philosophy of Science',
    school: 'Ludwig Maximilian University of Munich'
  },
  {
    period: '2014 – 2016',
    degree: 'Bachelor of Arts in History and Philosophy',
    school: 'Elmhurst University'
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
    title: 'Data / AI',
    items: ['Python', 'SQL', 'Pandas', 'NumPy', 'Prompt Engineering', 'Analytics Dashboards']
  },
  {
    title: 'Languages / Tools',
    items: ['C++', 'Java', 'GitHub', 'Docker', 'Swift', 'MS Office', 'Google Workspace', 'Canva']
  }
];
