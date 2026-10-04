import type { NavItem, Project, SkillGroup, Stat } from '../types';

export type InternshipItem = {
  title: string;
  detail: string;
};

export type SchoolRole = {
  period: string;
  title: string;
  organization: string;
  location: string;
  bullets: string[];
};

export type Degree = {
  period: string;
  degree: string;
  school: string;
};

export const schoolNavItems: NavItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'internship', label: 'Internship' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'credentials', label: 'Credentials' },
  { id: 'focus', label: 'Focus Areas' },
  { id: 'contact', label: 'Contact' }
];

export const schoolRoles = ['Educational Leadership', 'Instructional Practice', 'School Improvement'];

export const schoolStats: Stat[] = [
  { value: '5', accent: 'yrs', label: 'Classroom teaching', countTo: 5 },
  { value: '3', label: 'Master’s degrees', countTo: 3 },
  { value: 'PEL', label: 'Administrative endorsement' }
];

export const schoolMarqueeItems: string[] = [
  'Danielson Framework',
  'Teacher Evaluation',
  'School Improvement',
  'Social-Emotional Learning',
  'IEP Collaboration',
  'Hiring Committees',
  'Data-Driven Instruction',
  'Student Supervision',
  'Family Communication',
  'Multilingual Learners',
  'Project-Based Learning',
  'Professional Development',
  'Student Council',
  'Digital Citizenship'
];

export const internship = {
  role: 'Educational Leadership Intern',
  school: 'Glen Crest Middle School',
  district: 'Community Consolidated School District 89',
  location: 'Glen Ellyn, IL',
  period: '2025 – 2026',
  items: [
    {
      title: 'Teacher Evaluation',
      detail:
        'Worked alongside the building principal through the full teacher evaluation cycle using the Danielson Framework for Teaching — formal and informal observations, Student Learning Objectives, evidence collection, feedback conversations, and summative evaluations. Tracked how specific, evidence-based feedback led to measurable improvement in instructional practice and classroom management.'
    },
    {
      title: 'School Improvement Initiative',
      detail:
        'Worked with the Exploratory Department on an initiative aligned with Glen Crest’s School Improvement Plan, building social-emotional learning and student reflection into existing courses to strengthen belonging, student voice, perseverance, and collaboration. Set up a process for implementing and evaluating the initiative.'
    },
    {
      title: 'Special Education Planning',
      detail:
        'Reviewed IEPs, assessment data, accommodations, student performance, and placement options with the assistant principal, special education leadership, and instructional staff. Helped develop a Student Education Plan focused on academic growth, independence, social communication, and access to less restrictive learning environments.'
    },
    {
      title: 'Hiring Committee',
      detail:
        'Served on the hiring committee for a Family and Consumer Sciences teacher alongside the principal, assistant principal, and department staff — screening applicants, writing interview questions, evaluating candidates, and reaching a final selection as a team.'
    },
    {
      title: 'Digital Hall Pass System',
      detail:
        'Identified a schoolwide need for better student supervision and accountability and led the design of a Digital Hall Pass System. Piloted it with staff and administration, refined it based on their feedback, and expanded it for multiple teachers, leading to its adoption across the school.'
    }
  ] satisfies InternshipItem[]
};

export const schoolProjects: Project[] = [
  {
    title: 'Digital Hall Pass System',
    description:
      'A digital pass system that shows teachers in real time which students are out of the classroom. Expanded from a single-classroom tool into a building-wide system with automatic time limits, record keeping, and shared staff access.',
    tags: ['Student Supervision', 'Schoolwide Adoption', 'Accountability'],
    liveUrl: 'https://bathroom-pass-timer.web.app/',
    featured: true
  },
  {
    title: 'Teacher Rewards Store',
    description:
      'A rewards platform that supports student motivation, recognition, and positive behavior. Led from planning through launch, and continue to run it — monitoring usage and making improvements based on user feedback.',
    tags: ['Positive Behavior', 'Student Motivation', 'Recognition'],
    liveUrl: 'https://haveerewards.web.app/'
  },
  {
    title: 'Teacher Book Reviews Platform',
    description:
      'A book review platform that encourages students to read, discuss books, and share recommendations with classmates. Maintained as an ongoing classroom resource where students browse ranked recommendations and discover books through peer reviews.',
    tags: ['Literacy', 'Student Voice', 'Peer Learning'],
    liveUrl: 'https://hhmakedon.github.io/bookreviews/'
  }
];

export const schoolExperience: SchoolRole[] = [
  {
    period: 'Aug 2025 – Present',
    title: 'Computer Science & Technology Teacher',
    organization: 'Glen Crest Middle School, CCSD 89',
    location: 'Glen Ellyn, IL',
    bullets: [
      'Presented professional development on Google Apps Script and Gemini AI tools at Illinois CS + AI Week in Springfield (June 2026), showing educators practical ways to save time and strengthen classroom practice.',
      'Design and teach Python, Web/App Development, and block-based programming courses (Scratch and Microsoft MakeCode), aligning curriculum and assessment with district goals and student learning needs.',
      'Use formative assessment, student performance data, and classroom observation to adjust instruction and differentiate support for students with varied academic and language needs.',
      'Work with colleagues to identify instructional and operational problems and build practical systems that reach beyond a single classroom — improving daily operations, student accountability, and communication between staff and students.',
      'Lead the school’s LEGO Robotics program, giving students chances to collaborate, solve complex problems, compete, and take on leadership roles.',
      'Build a structured, inclusive classroom culture centered on student responsibility, persistence, respectful collaboration, and ownership of learning.',
      'Teach responsible technology use, digital citizenship, academic integrity, and ethical decision making as part of preparing students for high school and beyond.'
    ]
  },
  {
    period: 'Jun 2025 – Aug 2025',
    title: 'Summer Intern',
    organization: 'Google Cloud',
    location: 'Chicago, IL',
    bullets: [
      'Worked on cloud architecture and technology solutions for public sector and education organizations, gaining experience planning and implementing technology across large organizations.',
      'Explored practical uses of cloud technology in schools, with a focus on how digital tools can support teachers, student engagement, and daily operations.',
      'Completed the Teacher Rewards Store as a capstone project, taking it from initial design through launch while planning for usability, sustainability, and monitoring.'
    ]
  },
  {
    period: 'Aug 2023 – Jun 2025',
    title: 'Computer Science & Technology Teacher',
    organization: 'Chicago Public Schools',
    location: 'Chicago, IL',
    bullets: [
      'Designed and taught interdisciplinary computer science, engineering, business, and technology curriculum built around project-based learning and the engineering design process.',
      'Led the school’s LEGO Robotics program, giving students chances to collaborate, solve complex problems, compete, and take on leadership roles.',
      'Guided students through extended projects in product development, entrepreneurship, marketing, robotics, programming, and engineering — from planning and prototyping through testing, revision, presentation, and reflection.',
      'Differentiated instruction for a culturally and academically diverse student population through multimodal, hands-on learning, using formative assessment, student reflection, and project assessments to monitor progress.'
    ]
  },
  {
    period: 'Aug 2021 – Jun 2023',
    title: 'Grade Center Teacher',
    organization: 'Springman Middle School, District 34',
    location: 'Glenview, IL',
    bullets: [
      'Provided individualized academic support across subject areas and used student data and targeted interventions to raise assignment completion among remote learners to approximately 90 percent.',
      'Communicated regularly with students, families, teachers, and support staff to address academic concerns and coordinate student support.',
      'Supported multilingual students and families so that students could fully access instructional resources.',
      'Helped revitalize and run Student Council, giving students a voice in school leadership, decision making, and school events.',
      'Co-led the STEM Club and directed the Yearbook Club, coordinating student roles, deadlines, event coverage, and production of the annual yearbook.'
    ]
  },
  {
    period: 'Jan 2021 – May 2021',
    title: 'Student Teacher',
    organization: 'Prosser Career Academy, Chicago Public Schools',
    location: 'Chicago, IL',
    bullets: [
      'Planned and taught IB World Studies and Psychology, using differentiated strategies to meet varied student learning needs.',
      'Collaborated with special education and English Learner teachers to develop instructional strategies and accommodations for a diverse student population.'
    ]
  },
  {
    period: 'Oct 2018 – Jan 2021',
    title: 'Operations & Data Analyst',
    organization: 'Yusen Logistics Inc.',
    location: 'Elk Grove Village, IL',
    bullets: [
      'Analyzed operational data using SQL, Excel, and reporting tools to identify problems, evaluate performance, and support decisions grounded in data.',
      'Built automated reports and dashboards that gave managers timely information on operational performance and key performance indicators.'
    ]
  }
];

export const certification = {
  issuer: 'Illinois State Board of Education',
  title: 'Professional Educator License with Administrative Endorsement',
  issued: 'Issued June 2021'
};

export const degrees: Degree[] = [
  {
    period: '2025 – 2026',
    degree: 'Master of Educational Leadership',
    school: 'Aurora University'
  },
  {
    period: '2019 – 2021',
    degree: 'Master of Arts in Teaching: Secondary Education',
    school: 'Northeastern Illinois University'
  },
  {
    period: '2016 – 2018',
    degree: 'Master of Arts in Logic and Philosophy',
    school: 'Ludwig Maximilian University of Munich'
  },
  {
    period: '2014 – 2016',
    degree: 'Bachelor of Arts in History and Philosophy',
    school: 'Elmhurst University'
  }
];

export const focusAreas: SkillGroup[] = [
  {
    title: 'Instructional Leadership',
    items: [
      'Danielson Framework',
      'Observation & Feedback',
      'Student Learning Objectives',
      'Summative Evaluation',
      'Professional Development',
      'Curriculum Alignment'
    ]
  },
  {
    title: 'Student Support',
    items: [
      'IEP Review',
      'Accommodations',
      'Multilingual Learners',
      'Differentiated Instruction',
      'Targeted Interventions',
      'Family Communication'
    ]
  },
  {
    title: 'Culture & Climate',
    items: [
      'Social-Emotional Learning',
      'Student Voice',
      'Student Council',
      'Inclusive Classroom Culture',
      'Digital Citizenship',
      'Extracurricular Leadership'
    ]
  },
  {
    title: 'Operations & Data',
    items: [
      'Student Supervision Systems',
      'Data-Driven Decisions',
      'Dashboards & Reporting',
      'Hiring & Interviewing',
      'Program Evaluation',
      'Google Workspace & Apps Script'
    ]
  }
];
