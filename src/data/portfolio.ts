export const projects = [
  {
    slug: 'subnational-economic-resilience',
    title: 'Subnational Economic Resilience',
    category: 'Statistical Modeling',
    accent: 'purple',
    description:
      'Classified 117 Philippine provinces and cities into two resilience typologies using seven years of official economic accounts — validating the structure with MANOVA before clustering.',
    imageSrc: '/images/subnational-resilience.svg',
    imageAlt: 'PCA scatter of two subnational economic resilience clusters (93 vs 24 units)',
    tags: ['R', 'MANOVA', 'PCA', 'Hierarchical Clustering'],
    summary:
      'A validation-first multivariate study of Philippine subnational economies: prove that sectoral growth structure shifted over time, then classify 117 provinces and cities into two resilience pathways.',
    problem:
      'Regional GDP averages away what matters locally — two provinces can post identical growth while one runs on diversified services and another on a single volatile sector. There was no structural way to group economies by how they actually grow and how stable that growth is.',
    approach: [
      'Computed year-on-year real growth (constant 2018 prices) for six consolidated sectors across six intervals — 702 unit-by-interval observations from PSA Provincial Product Accounts.',
      'Validated with a one-way MANOVA (Pillai\u2019s Trace, chosen because Mardia\u2019s test showed non-normality) that the six-sector growth structure genuinely differs across time before attempting any classification.',
      'Reduced 12 correlated indicators to 6 components (81% of variance) with PCA, then applied Ward\u2019s hierarchical clustering; chose k by silhouette and stress-tested against k-means and three internal validity indices.'
    ],
    outcome:
      'Two exploratory resilience typologies emerged: a diversified, growth-responsive group of 93 units and a lower-growth, more volatile group of 24 — cutting across the usual province-versus-city lines. The clustering separation is modest (silhouette 0.29), so the typologies are framed as a way to prioritize where to look closer, not as hard verdicts.',
    links: [
      {
        label: 'View the R analysis on GitHub',
        href: 'https://github.com/Rhyxeee/subnational-economic-resilience'
      },
      {
        label: 'Read the full thesis (PDF)',
        href: '/docs/subnational-economic-resilience-thesis.pdf'
      }
    ]
  },
  {
    slug: 'revops-real-estate-lead-analytics',
    title: 'Real Estate Lead Analytics',
    category: 'RevOps Analytics',
    accent: 'green',
    description:
      'An end-to-end Python pipeline that cleans a messy real-estate lead export, measures marketing ROI by source, and ranks leads into a data-driven call-first list — built on synthetic data to protect private records.',
    imageSrc: '/images/revops-lead-analytics.svg',
    imageAlt: 'Lead funnel and ROI-by-source visualization for a real estate pipeline',
    tags: ['Python', 'Pandas', 'Data Cleaning', 'Funnel & ROI'],
    summary:
      'From a messy CRM-style lead export to marketing ROI and a prioritized call list — a full data-engineering-to-analysis pipeline, built on privacy-safe synthetic data.',
    problem:
      'Real-estate acquisition pipelines produce large, messy lead files — inconsistent statuses, hundreds of campaign-coded list names, dollar values stored as text, duplicates, and heavy missingness. The data has to be engineered into shape before it can guide where marketing dollars go.',
    approach: [
      'Generated a fully synthetic dataset mirroring the statistical shape of a real pipeline (county mix, value quartiles, phone quality) so no private or personal data is ever exposed.',
      'Built a reproducible cleaning stage: de-duplication, parsing dollar/percent strings, collapsing 28 status spellings into a canonical funnel, and recovering 1,400+ list names into six source families — every fix logged.',
      'Analyzed funnel drop-off, marketing ROI and cost-per-deal by lead source, conversion by county, and contact-data quality — then tiered leads into a call-first dial list.'
    ],
    outcome:
      'A documented pipeline showing where the funnel leaks (earliest at contact), which sources return the most per dollar (cheaper High-Equity and Absentee lists beat pricier distress lists), and which leads to dial first. All results are illustrative of the method on synthetic data, not real business figures.',
    links: [
      {
        label: 'View the code on GitHub',
        href: 'https://github.com/Rhyxeee/revops-lead-analytics'
      }
    ]
  },
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
