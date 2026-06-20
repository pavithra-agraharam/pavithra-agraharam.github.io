export interface SkillGroup {
  category: string
  skills: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    category: 'Languages',
    skills: ['Python', 'C/C++', 'JavaScript', 'Java', 'SQL'],
  },
  {
    category: 'ML / Deep Learning',
    skills: [
      'PyTorch',
      'TensorFlow',
      'Keras',
      'Scikit-Learn',
      'XGBoost',
      'OpenCV',
      'spaCy',
      'Dlib',
      'CNNs',
      'Deep Learning',
    ],
  },
  {
    category: 'MLOps & Data',
    skills: [
      'MLflow',
      'Docker',
      'Apache Airflow',
      'dbt',
      'Snowflake',
      'PostgreSQL',
      'MySQL',
      'MongoDB',
      'Redis',
      'CI/CD',
    ],
  },
  {
    category: 'Cloud (AWS)',
    skills: ['EC2', 'S3', 'Lambda', 'SageMaker', 'ECS', 'CloudFront', 'CDK'],
  },
  {
    category: 'Backend & Web',
    skills: ['FastAPI', 'React', 'REST APIs', 'Microservices', 'System Design'],
  },
  {
    category: 'Specialties',
    skills: [
      'Biometric Tracking',
      'Latency Optimization',
      'Multi-threading',
      'Memory Management',
    ],
  },
]
