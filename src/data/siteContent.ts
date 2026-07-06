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
  { id: 'initiatives', label: 'Initiatives' },
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' }
];

export const heroStats: Stat[] = [
  { value: '5', accent: '+', label: 'Years teaching CS & technology', countTo: 5 },
  { value: "'26", label: 'M.Ed. Educational Leadership' },
  { value: '4', accent: '+', label: 'Student programs led', countTo: 4 }
];

export const heroRoles = ['Educator', 'Instructional Leader', 'Technologist'];

export const marqueeItems: string[] = [
  'Curriculum Design',
  'AP CS Principles',
  'CTE Standards',
  'Instructional Coaching',
  'Data-Driven Instruction',
  'EdTech Integration',
  'LEGO Robotics',
  'STEM Programs',
  'Digital Citizenship',
  'Cybersecurity Education',
  'Design Thinking',
  'Program Evaluation',
  'Family Engagement',
  'Cloud Modernization'
];

export const projects: Project[] = [
  {
    title: 'Grade-Level CS Curriculum',
    description:
      'Designed and delivered a computer science curriculum aligned to district, state CTE, and AP Computer Science Principles standards — a pathway spanning Scratch, physical computing with micro:bit, Python, web technologies, and introductory Swift, all anchored in the engineering design process.',
    tags: ['Curriculum', 'Standards Alignment', 'CS Education'],
    featured: true
  },
  {
    title: 'LEGO Robotics Program',
    description:
      'Built and coached a competition robotics program, guiding student teams through collaborative design, programming, testing, and competition-based problem solving.',
    tags: ['Robotics', 'Coaching', 'Competition']
  },
  {
    title: 'STEM Club & Yearbook',
    description:
      'Co-led a STEM club introducing students to Swift Playgrounds, Scratch, and VEX Robotics, and directed the yearbook program — overseeing digital layout, content management, and publication workflows.',
    tags: ['Clubs', 'Program Leadership', 'Publications']
  },
  {
    title: 'Teacher Rewards Store',
    description:
      'Led implementation of a full-stack classroom rewards platform supporting 20+ daily student users, with cloud infrastructure, monitoring, and reporting dashboards — built as a Google Cloud internship capstone.',
    tags: ['Student Engagement', 'EdTech', 'Google Cloud'],
    liveUrl: 'https://haveerewards.web.app/'
  },
  {
    title: 'Book Reviews Platform',
    description:
      'Engineered a school book review platform to promote student reading engagement, with admin-only publishing enforced through Firebase Authentication and reviews organized to highlight strong recommendations.',
    tags: ['Literacy', 'EdTech', 'Firebase'],
    liveUrl: 'https://hhmakedon.github.io/bookreviews/'
  },
  {
    title: 'Public-Sector Cloud Modernization',
    description:
      'Contributed to education and public-sector cloud modernization work at Google — building prototype environments, evaluating architectures, and translating technical designs into stakeholder-facing recommendations.',
    tags: ['Google Cloud', 'Public Sector', 'Documentation']
  }
];

export const highlights: Highlight[] = [
  {
    icon: 'teaching',
    title: 'Instructional Leadership',
    detail:
      'Standards-aligned curriculum design, project-based learning, and inclusive classroom practice across two districts.'
  },
  {
    icon: 'web',
    title: 'Programs & Community',
    detail:
      'Robotics, STEM clubs, and publications — building programs that connect students, families, and real-world skills.'
  },
  {
    icon: 'cloud',
    title: 'Data & Technology',
    detail:
      'Analytics, dashboards, and cloud tooling that turn school data into clear, actionable decisions.'
  }
];

export const education: EducationItem[] = [
  {
    period: 'Mar 2025 – Dec 2026',
    degree: 'Master of Educational Leadership',
    school: 'Aurora University',
    note: 'In progress'
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
    period: 'Aug 2023 – Present',
    title: 'Computer Science & Technology Teacher — Chicago Public Schools & CCSD 89',
    detail:
      'Design and deliver grade-level CS curriculum aligned to district, state CTE, and AP CS Principles standards; teach programming, physical computing, cybersecurity, and digital citizenship; lead LEGO Robotics and project-based learning anchored in the engineering design process.'
  },
  {
    period: 'Jun 2025 – Aug 2025',
    title: 'Summer Intern, Google Cloud',
    detail:
      'Selected for a competitive internship focused on public-sector and education cloud modernization — built and evaluated secure cloud architectures, developed prototype environments and documentation, and translated technical designs into stakeholder recommendations.'
  },
  {
    period: 'Aug 2021 – Jun 2023',
    title: 'Grade Center Teacher — Glenview District 34',
    detail:
      'Supported remote learning operations and instructional continuity through the pandemic, provided technology support to students and families, co-led the STEM club, and directed the yearbook program.'
  },
  {
    period: 'Oct 2018 – Jan 2021',
    title: 'Operations & Data Analyst — Yusen Logistics',
    detail:
      'Analyzed operational data with SQL and advanced Excel, built automated reporting systems and KPI dashboards, and delivered data-driven recommendations to management.'
  }
];

export const skillGroups: SkillGroup[] = [
  {
    title: 'Instruction',
    items: [
      'Curriculum Design',
      'AP CS Principles',
      'CTE Standards',
      'Project-Based Learning',
      'Engineering Design Process',
      'Inclusive Practice'
    ]
  },
  {
    title: 'Leadership & Programs',
    items: [
      'Program Development',
      'Coaching & Mentoring',
      'Family Engagement',
      'Stakeholder Communication',
      'Documentation',
      'Club & Competition Leadership'
    ]
  },
  {
    title: 'Data & Assessment',
    items: ['SQL', 'Advanced Excel', 'Dashboards', 'KPI Tracking', 'Program Evaluation', 'Reporting Automation']
  },
  {
    title: 'Technology',
    items: [
      'Google Workspace',
      'Google Cloud',
      'Firebase',
      'Python',
      'Web Development',
      'micro:bit / MakeCode',
      'VEX & LEGO Robotics'
    ]
  }
];
