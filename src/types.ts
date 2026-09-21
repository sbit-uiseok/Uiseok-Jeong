export type Language = 'en' | 'ko';
export type Theme = 'dark' | 'light';

export interface MetricItem {
  label: string;
  value: string;
  subtext?: string;
  highlight?: boolean;
}

export interface ProjectDetail {
  id: string;
  title: string;
  category: string;
  period: string;
  role: string;
  summary: string;
  tags: string[];
  metrics: { [key: string]: string };
  architecture: {
    title: string;
    description: string;
    points: string[];
  }[];
  pipelineSteps?: {
    step: string;
    title: string;
    desc: string;
  }[];
  word2vecTable?: {
    sentences: string;
    tokens: string;
    vocab: string;
    time: string;
  };
}

export interface ExperienceItem {
  id: string;
  title: string;
  role: string;
  organization: string;
  location: string;
  period: string;
  bullets: string[];
  tags: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  gpa?: string;
  honors?: string;
  coursework?: string[];
  description?: string;
}

export interface SkillCategory {
  category: string;
  iconName: string;
  skills: {
    name: string;
    desc?: string;
    featured?: boolean;
  }[];
}

export interface StackCard {
  name: string;
  category: string;
  description: string;
  iconName: string;
  badge?: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  year: string;
  linkText?: string;
  url?: string;
}

export interface ArticleItem {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  description: string;
  content: string[];
  tags: string[];
}

export interface TimelineItem {
  year: string;
  event: string;
  subtext?: string;
  highlight?: boolean;
}
