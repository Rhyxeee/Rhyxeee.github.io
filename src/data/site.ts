export const site = {
  name: 'Mark Anthony Nene',
  title: 'Analytics Systems Portfolio',
  role: 'Data Manager · Data Quality & Reporting Systems',
  tagline: 'Cleaner data. Clearer reporting. Workflows teams can trust.',
  description:
    'Portfolio of Mark Anthony Nene, focused on data quality, reporting workflows, analytics support, and audit-ready documentation.',
  url: 'https://rhyxeee.github.io',
  email: 'markanthonynene@gmail.com',
  // Used for Open Graph / Twitter share previews and JSON-LD structured data.
  location: 'Philippines',
  jobTitle: 'Data Manager',
  // 1200x630 social share image. Falls back to the profile image if absent.
  ogImage: '/images/profile.png',
  githubUrl: 'https://github.com/Rhyxeee',
  // TODO: replace with your real LinkedIn profile URL (the old link pointed to the generic homepage).
  linkedinUrl: 'https://www.linkedin.com/in/markanthonynene',
  resumeUrl: 'https://drive.google.com/uc?export=download&id=1ACO5c7FdHgKfljXX8RD0ES_2o2T1r2Wi',
  profileImage: '/images/profile.png',
  socialLinks: [
    { label: 'GitHub', href: 'https://github.com/Rhyxeee' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/markanthonynene' },
    { label: 'Email', href: 'mailto:markanthonynene@gmail.com' }
  ],
  nav: [
    { label: 'Home', href: '/' },
    { label: 'Projects', href: '/projects' },
    { label: 'Results', href: '/proof' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' }
  ]
};

export const stats = [
  { value: '4,400+', label: 'Records cleaned and documented', accent: 'blue' },
  { value: '₱2M+', label: 'Budget reviewed for audit and reconciliation', accent: 'amber' },
  { value: '$5M+', label: 'Sales dataset analyzed', accent: 'green' },
  { value: 'QA', label: 'Focused workflows', accent: 'purple' }
];

export const achievements = [
  'Identified a 230,000x output gap between urban and island economies and documented the pattern for clearer economic analysis.',
  'Built a dashboard for a $5M+ sales dataset to review discount behavior, category performance, and revenue trends.',
  'Created a Python cleaning workflow for 4,400+ records with documented checks and audit-friendly outputs.',
  'Supported audit and reconciliation work for a ₱2M+ budget with organized documentation and compliance checks.'
];

export const marqueeRows = [
  ['Power BI', 'Excel', 'Google Sheets', 'SQL', 'Python', 'Data Cleaning', 'Reporting', 'Audit Workflow'],
  ['Dashboards', 'KPI Design', 'JSON Parsing', 'ETL', 'Documentation', 'Automation', 'QA', 'Business Analysis'],
  ['Window Functions', 'Forecasting', 'Data Validation', 'Process Design', 'Operational Accuracy', 'Skip Tracing', 'Structured Systems', 'Decision Support']
];

export const experienceRows = [
  {
    role: 'Data Manager · Real Estate Data Specialist',
    company: 'GSH Investments',
    meta: 'Remote · Feb 2026 to Present',
    summary:
      'Manage daily public-record data workflows for real estate prospecting, including extraction, cleaning, skip tracing, verification, and QA.',
    bullets: [
      'Pull foreclosure, probate, tax, and property records from public county sources for downstream use.',
      'Clean, deduplicate, standardize, and audit records in Google Sheets-based workflows.',
      'Use research tools and manual verification to enrich owner information and improve lead quality.',
      'Track data-quality issues, spot-check outputs, and improve repeatable operating processes.'
    ],
    stack: ['Google Sheets', 'Data QA', 'Skip Tracing', 'Process Design'],
    link: {
      label: 'Work sample PDF',
      href: 'https://github.com/Rhyxeee/Rhyxeee.github.io/blob/main/docs/GSH_Work_Sample.pdf'
    }
  },
  {
    role: 'Administrative Support and Data Associate',
    company: 'Lifewood Data Technology',
    meta: 'Sep 2023 to Jan 2026',
    summary:
      'Supported data operations, document checking, validation, reporting, and process accuracy in a structured business environment.',
    bullets: [
      'Maintained operational records and checked documents for completeness and consistency.',
      'Prepared organized data outputs for review, monitoring, and reporting.',
      'Improved routine data-handling tasks through structured templates and review steps.'
    ],
    stack: ['Documentation', 'Quality Checks', 'Reporting', 'Operations'],
    link: {
      label: 'Experience showcase',
      href: 'https://github.com/Rhyxeee/Rhyxeee.github.io/blob/main/docs/Work_Experience_Showcase_LifeWood.pdf'
    }
  }
];

export const proofCards = [
  {
    title: 'Applied Mathematics Background',
    meta: 'Quantitative training',
    body: 'Quantitative training that supports careful data review, statistical thinking, and structured analysis.',
    accent: 'blue'
  },
  {
    title: 'Real Estate Data Operations',
    meta: 'Current role',
    body: 'Hands-on experience in public-record extraction, data cleaning, skip tracing, QA, and workflow improvement.',
    accent: 'amber'
  },
  {
    title: 'Analytics & Reporting Tools',
    meta: 'Power BI · SQL · Python · Excel',
    body: 'Practical use of Power BI, SQL, Python, Excel, and Google Sheets for reporting and analysis workflows.',
    accent: 'green'
  },
  {
    title: 'Documentation + QA Discipline',
    meta: 'Review-friendly outputs',
    body: 'Clean methods, documented logic, and outputs that can be reviewed with confidence.',
    accent: 'purple'
  }
];
