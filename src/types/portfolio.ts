// ============ TYPES & INTERFACES ============

export interface QuadPillarCaseStudy {
  problem: string;
  solution: string;
  impact: string;
  rationale: string;
}

export type ProjectTrack = "developer" | "va";

export interface Project {
  id: string;
  title: string;
  tagline: string;
  track: ProjectTrack;
  category: string;
  year: string;
  featured: boolean;
  tags: string[];
  metrics: string[];
  // Developer track details
  caseStudy?: QuadPillarCaseStudy;
  liveUrl?: string;
  githubUrl?: string;
  // VA / Automation track details
  projectBrief?: string;
  videoUrl?: string; // Loom, YouTube, or direct MP4 walkthrough
  toolsUsed?: string[];
  workflowHighlights?: string[];
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  location: string;
  highlights: string[];
  stack: string[];
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
  badge?: string;
}

export interface Education {
  degree: string;
  institution: string;
  status: string;
}
