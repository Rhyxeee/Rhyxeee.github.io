export const projects = [
  {
    slug: 'tmdb-data-engineering-master-documentation',
    title: 'TMDb Data Engineering Master Documentation',
    category: 'Data Engineering',
    accent: 'blue',
    description:
      'Designed a documentation-driven movie analytics workflow with cleaned entities, structured relationships, and dashboard-ready outputs.',
    imageSrc: '/images/tmdb-architecture.png',
    imageAlt: 'TMDb data engineering workflow architecture preview',
    tags: ['Excel', 'ETL', 'JSON Parsing', 'Documentation'],
    summary:
      'A full data workflow project built to make messy movie metadata usable for downstream reporting and structured analysis.',
    problem:
      'Raw movie data often arrives as inconsistent nested fields that are difficult to query, report, and dashboard cleanly.',
    approach: [
      'Mapped raw sources into a clearer relational structure.',
      'Documented transformation logic for repeatability and auditability.',
      'Prepared outputs that were cleaner for dashboard and analysis use.'
    ],
    outcome:
      'The result is a cleaner analytics system that supports reporting, entity-level analysis, and easier handoff for future work.',
    links: [
      { label: 'View documentation PDF', href: 'https://github.com/Rhyxeee/Rhyxeee.github.io/blob/main/docs/TMDb%20Data%20Engineering%20Master%20Documentation.pdf' },
      { label: 'Executive summary', href: 'https://github.com/Rhyxeee/Rhyxeee.github.io/blob/main/docs/EXECUTIVE%20SUMMARY%20TMDb.pdf' }
    ]
  },
  {
    slug: '360-sales-performance-hub',
    title: '360° Sales Performance Hub',
    category: 'Dashboard Analytics',
    accent: 'amber',
    description:
      'Built a high-level sales performance dashboard for a multi-million-dollar dataset to surface inefficiencies and trends.',
    imageSrc: '/images/360_dashboard.png',
    imageAlt: '360 sales performance dashboard preview',
    tags: ['Dashboard', 'Sales', 'Insights', 'Excel'],
    summary:
      'A dashboard-style project aimed at translating large sales data into practical visibility for performance review.',
    problem:
      'Large sales data can hide discount inefficiencies, uneven category contribution, and weak signal visibility for decision makers.',
    approach: [
      'Structured the dataset for cleaner KPI analysis.',
      'Designed dashboard views around trend visibility and executive readability.',
      'Focused on making patterns obvious rather than technically cluttered.'
    ],
    outcome:
      'The dashboard turns raw sales numbers into a clearer decision-support view for performance monitoring and business insight.',
    links: [
      { label: 'View PDF', href: 'https://github.com/Rhyxeee/Rhyxeee.github.io/blob/main/docs/360%C2%B0%20Sales%20Performance%20Hub.pdf' }
    ]
  },
  {
    slug: 'mysql-retail-analytics-project',
    title: 'MySQL Retail Analytics Project',
    category: 'SQL Analytics',
    accent: 'green',
    description:
      'Used SQL to answer business questions around customers, revenue, and performance patterns using a structured retail dataset.',
    imageSrc: '/images/mysql_project.png',
    imageAlt: 'MySQL retail analytics workflow preview',
    tags: ['SQL', 'CTEs', 'Window Functions', 'Analytics'],
    summary:
      'A business-focused SQL project built to surface meaningful answers from transactional retail data.',
    problem:
      'Decision makers need direct answers from transaction data, but raw tables rarely communicate trends clearly on their own.',
    approach: [
      'Used joins, CTEs, and window functions to structure analysis queries.',
      'Focused on customer, revenue, and performance questions with practical business framing.',
      'Kept outputs readable and tied to clear analytical objectives.'
    ],
    outcome:
      'The project shows how SQL can move beyond raw extraction and into decision-ready analysis with cleaner narrative value.',
    links: [
      { label: 'View PDF', href: 'https://github.com/Rhyxeee/Rhyxeee.github.io/blob/main/docs/mysql_project.pdf' }
    ]
  },
  {
    slug: 'pima-diabetes-data-audit-and-repair',
    title: 'Pima Diabetes Data Audit and Repair',
    category: 'Statistical Cleaning',
    accent: 'purple',
    description:
      'Recovered a highly incomplete healthcare dataset using a documented audit and repair workflow that preserved analytical usability.',
    imageSrc: '/images/PIMA_INDIANS.png',
    imageAlt: 'Pima diabetes data audit and repair preview',
    tags: ['Data Cleaning', 'Outliers', 'Imputation', 'JASP'],
    summary:
      'A statistical cleaning project focused on preserving usability while repairing a noisy and incomplete dataset.',
    problem:
      'Highly incomplete data can distort results and make later analysis weak, especially in healthcare-related datasets.',
    approach: [
      'Audited missingness, outliers, and weak-value patterns.',
      'Documented the repair process so the logic stayed clear and reproducible.',
      'Balanced cleanup decisions with analytical usability.'
    ],
    outcome:
      'The repaired dataset became more usable for later statistical analysis while keeping the cleaning logic transparent.',
    links: [
      { label: 'Methodology PDF', href: 'https://github.com/Rhyxeee/Rhyxeee.github.io/blob/main/docs/Pima%20Diabetes%20Data%20Optimization.pdf' }
    ]
  }
];
