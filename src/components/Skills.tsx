import type { ComponentType } from 'react'
import { motion } from 'framer-motion'
import {
  SiPython,
  SiCplusplus,
  SiJavascript,
  SiReact,
  SiDocker,
  SiPytorch,
  SiTensorflow,
  SiKeras,
  SiScikitlearn,
  SiOpencv,
  SiApacheairflow,
  SiSnowflake,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiRedis,
  SiFastapi,
  SiGit,
  SiGithub,
  SiJira,
  SiLinux,
} from 'react-icons/si'
import {
  Coffee,
  Database,
  Cloud,
  Cpu,
  Brain,
  Network,
  Boxes,
  Workflow,
  GitBranch,
  Layers,
  Gauge,
} from 'lucide-react'
import { SectionHeading } from './ui/SectionHeading'
import { skillGroups } from '../data/skills'

type Icon = ComponentType<{ size?: number | string; className?: string }>

const iconMap: Record<string, Icon> = {
  // Languages
  Python: SiPython,
  'C/C++': SiCplusplus,
  JavaScript: SiJavascript,
  Java: Coffee,
  SQL: Database,
  // ML / DL
  PyTorch: SiPytorch,
  TensorFlow: SiTensorflow,
  Keras: SiKeras,
  'Scikit-Learn': SiScikitlearn,
  XGBoost: Cpu,
  OpenCV: SiOpencv,
  spaCy: Brain,
  Dlib: Cpu,
  CNNs: Network,
  'Deep Learning': Brain,
  // MLOps & Data
  MLflow: Workflow,
  Docker: SiDocker,
  'Apache Airflow': SiApacheairflow,
  dbt: Layers,
  Snowflake: SiSnowflake,
  PostgreSQL: SiPostgresql,
  MySQL: SiMysql,
  MongoDB: SiMongodb,
  Redis: SiRedis,
  'CI/CD': GitBranch,
  // Cloud (AWS) - use a unified cloud glyph
  EC2: Cloud,
  S3: Cloud,
  Lambda: Cloud,
  SageMaker: Cloud,
  ECS: Cloud,
  CloudFront: Cloud,
  CDK: Cloud,
  // Backend & Web
  FastAPI: SiFastapi,
  React: SiReact,
  'REST APIs': Network,
  Microservices: Boxes,
  'System Design': Workflow,
  // Specialties
  'Biometric Tracking': Brain,
  'Latency Optimization': Gauge,
  'Multi-threading': Cpu,
  'Memory Management': Cpu,
  // Tools
  Git: SiGit,
  GitHub: SiGithub,
  Jira: SiJira,
  Linux: SiLinux,
}

const groupIcon: Record<string, Icon> = {
  'Cloud (AWS)': Cloud,
}

export function Skills() {
  return (
    <section id="skills" className="section">
      <SectionHeading
        eyebrow="04 - Skills"
        title="The toolbox"
        subtitle="Languages, frameworks and platforms I reach for to build and ship AI systems."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="glass p-6"
          >
            <h3 className="mb-4 font-mono text-xs uppercase tracking-wider text-accent-cyan">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((s) => {
                const Ico = iconMap[s] ?? groupIcon[group.category] ?? Cpu
                return (
                  <span
                    key={s}
                    className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-slate-300 transition-colors hover:border-accent-cyan/40 hover:text-white"
                  >
                    <Ico size={15} className="text-accent-cyan" />
                    {s}
                  </span>
                )
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
