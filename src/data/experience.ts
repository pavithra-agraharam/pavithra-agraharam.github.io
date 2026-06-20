export interface Experience {
  company: string
  role: string
  period: string
  location?: string
  highlights: string[]
  tech: string[]
}

export const experiences: Experience[] = [
  {
    company: 'KnowVia Tech Inc.',
    role: 'AI/ML Engineer',
    period: 'Mar 2026 - Present',
    highlights: [
      'Engineered a demand-forecasting engine on 2M+ records with IQR outlier capping and 15 engineered features across 50 retail categories - cutting dead stock by 10,000+ units and expanding margins.',
      'Built end-to-end ML architecture (PyTorch + MLflow) reaching 92% precision via k=5 cross-validation, and launched a FastAPI proof-of-concept while guiding 3 intern cohorts.',
    ],
    tech: ['Python', 'PyTorch', 'Scikit-Learn', 'MLflow', 'Docker', 'FastAPI', 'Pandas'],
  },
  {
    company: 'Progress Solutions',
    role: 'Software Developer',
    period: 'Aug 2025 - Mar 2026',
    highlights: [
      'Designed a FinTech credit-risk model (Scikit-Learn / XGBoost) with a custom cost matrix penalizing false positives 5×, deployed to production on Docker + AWS for real-time inference.',
      'Orchestrated a telemetry aggregation platform (Airflow on Amazon MWAA) unifying 4 isolated systems and 25,000+ records - saving 40+ monthly audit hours into an AWS-to-Snowflake architecture.',
    ],
    tech: ['Python', 'PostgreSQL', 'dbt', 'Airflow', 'AWS', 'Docker', 'Snowflake'],
  },
  {
    company: 'UAB Libraries',
    role: 'Digital Services Engineer (AI/ML)',
    period: 'Dec 2023 - May 2025',
    highlights: [
      'Architected a fault-tolerant Python/Bash digital-preservation pipeline (SHA-256, automated BagIt, Google Cloud Vision) processing 50,000+ artifacts with 100% data integrity - eliminating 65 engineering hours per batch for a 65% workload reduction while meeting strict FADGI compliance.',
      'Built a Python/OpenCV + Tesseract OCR/HTR pipeline to modernize faded 19th-century ledgers, validated against a 500-page ground truth with automated PyTest suites - turning thousands of unreadable pages into a searchable historical asset.',
    ],
    tech: ['Python', 'OpenCV', 'Tesseract', 'Google Cloud Vision', 'Bash', 'PyTest'],
  },
  {
    company: 'Tata Consultancy Services',
    role: 'Software Engineer',
    period: 'Oct 2021 - Jul 2023',
    highlights: [
      'Built a fault-tolerant AI ticket-routing engine (spaCy, SVM, TF-IDF) over 50,000+ records, automating 500+ daily tickets and eliminating $40,000 in annual operational costs.',
      'Engineered a data-harmonization pipeline (dbt, Snowflake, Airflow) scrubbing 1.5M+ legacy SAP records and reducing data-related supply errors by 33%.',
    ],
    tech: ['Python', 'spaCy', 'SVM', 'TF-IDF', 'FastAPI', 'dbt', 'Snowflake', 'Tableau'],
  },
  {
    company: 'User Genome - CodeXile',
    role: 'Software Developer',
    period: 'Sep 2020 - Aug 2021',
    highlights: [
      'Engineered a highly available AWS EC2 + Flask backend with a React frontend, using MongoDB 2dsphere indexing and OAuth 2.0 to cut driver-matching latency from 45s to 5s and scale to 5,000+ sessions.',
    ],
    tech: ['AWS EC2', 'Flask', 'React', 'MongoDB', 'OAuth 2.0', 'JWT'],
  },
]
