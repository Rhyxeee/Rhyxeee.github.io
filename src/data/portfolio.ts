export const projects = [
  {
    slug: 'tmdb-data-engineering-master-documentation',
    title: 'TMDb Data Engineering Workflow',
    category: 'Data Engineering',
    accent: 'blue',
    description:
      'Structured a movie analytics dataset by cleaning nested metadata, organizing entities, and documenting the workflow for reporting use.',
    imageSrc: '/images/tmdb-architecture.png',
    imageAlt: 'TMDb data engineering workflow architecture preview',
    tags: ['Excel', 'ETL', 'JSON Parsing', 'Documentation'],
    summary:
      'Structured a TMDb movie dataset into cleaner entities, documented transformation logic, and prepared outputs for reporting and analysis.',
    problem:
      'Raw movie data often includes nested and inconsistent fields that are difficult to query, report, and dashboard cleanly.',
    approach: [
      'Mapped raw sources into a clearer relational structure.',
      'Documented transformation logic for repeatability and auditability.',
      'Prepared outputs for dashboard and analysis use.'
    ],
    outcome:
      'The project produces cleaner reporting-ready outputs with documented logic for analysis and future handoff.',
    links: [
      {
        label: 'View documentation PDF',
        href: 'https://github.com/Rhyxeee/Rhyxeee.github.io/blob/main/docs/TMDb%20Data%20Engineering%20Master%20Documentation.pdf'
      },
      {
        label: 'Executive summary',
        href: 'https://github.com/Rhyxeee/Rhyxeee.github.io/blob/main/docs/EXECUTIVE%20SUMMARY%20TMDb.pdf'
      }
    ]
  },
  {
    slug: '360-sales-performance-hub',
    title: 'Sales Performance Dashboard',
    category: 'Dashboard Analytics',
    accent: 'amber',
    description:
      'Built a sales performance dashboard for a $5M+ dataset to review revenue trends, discount behavior, and category performance.',
    imageSrc: '/images/360_dashboard.png',
    imageAlt: '360 sales performance dashboard preview',
    tags: ['Dashboard', 'Sales', 'Insights', 'Excel'],
    summary:
      'Built a sales dashboard that turns a $5M+ dataset into clearer views of revenue, discounts, category performance, and trends.',
    problem:
      'Large sales data can hide discount inefficiencies, uneven category contribution, and weak signal visibility for decision makers.',
    approach: [
      'Structured the dataset for clearer KPI analysis.',
      'Designed dashboard views around revenue trends, discount behavior, and category performance.',
      'Focused on making business patterns easier to review.'
    ],
    outcome:
      'The dashboard turns raw sales numbers into a clearer performance view for monitoring and business analysis.',
    links: [
      {
        label: 'View PDF',
        href: 'https://github.com/Rhyxeee/Rhyxeee.github.io/blob/main/docs/360%C2%B0%20Sales%20Performance%20Hub.pdf'
      }
    ]
  },
  {
    slug: 'mysql-retail-analytics-project',
    title: 'MySQL Retail Analytics Project',
    category: 'SQL Analytics',
    accent: 'green',
    description:
      'Used MySQL, CTEs, and window functions to analyze customer behavior, revenue patterns, and retail performance.',
    imageSrc: '/images/mysql_project.png',
    imageAlt: 'MySQL retail analytics workflow preview',
    tags: ['SQL', 'CTEs', 'Window Functions', 'Analytics'],
    summary:
      'Analyzed retail transaction data with MySQL to answer customer, revenue, and performance questions.',
    problem:
      'Decision makers need direct answers from transaction data, but raw tables rarely communicate trends clearly on their own.',
    approach: [
      'Used joins, CTEs, and window functions to structure analysis queries.',
      'Focused on customer, revenue, and performance questions with practical business framing.',
      'Kept outputs readable and tied to clear analytical objectives.'
    ],
    outcome:
      'The project shows how SQL can convert raw transaction tables into clearer business analysis.',
    links: [
      {
        label: 'View PDF',
        href: 'https://github.com/Rhyxeee/Rhyxeee.github.io/blob/main/docs/mysql_project.pdf'
      }
    ]
  },
  {
    slug: 'pima-diabetes-data-audit-and-repair',
    title: 'Pima Diabetes Data Audit and Repair',
    category: 'Statistical Data Cleaning',
    accent: 'purple',
    description:
      'Audited and repaired missing, invalid, and outlier values in a healthcare dataset while keeping the cleaning process documented.',
    imageSrc: '/images/PIMA_INDIANS.png',
    imageAlt: 'Pima diabetes data audit and repair preview',
    tags: ['Data Cleaning', 'Outliers', 'Imputation', 'JASP'],
    summary:
      'Audited and repaired a healthcare dataset with missing, invalid, and outlier values while keeping the cleaning logic documented.',
    problem:
      'Missing, invalid, and outlier values can distort analysis, especially in healthcare-related datasets.',
    approach: [
      'Audited missingness, outliers, and weak-value patterns.',
      'Documented the repair process so the logic stayed clear and reproducible.',
      'Balanced cleanup decisions with analytical usability.'
    ],
    outcome:
      'The repaired dataset became more usable for later statistical analysis while keeping the cleaning logic transparent.',
    links: [
      {
        label: 'Methodology PDF',
        href: 'https://github.com/Rhyxeee/Rhyxeee.github.io/blob/main/docs/Pima%20Diabetes%20Data%20Optimization.pdf'
      }
    ]
  }
];
