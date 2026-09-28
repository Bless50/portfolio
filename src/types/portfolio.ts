// ============ TYPES & INTERFACES ============

// ============ PROJECT DETAIL DATA ============
export interface CaseStudy {
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
  thumbnail: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  // Developer track detail
  caseStudy?: CaseStudy;
  // VA track detail
  projectBrief?: string;
  workflowHighlights?: string[];
  toolsUsed?: string[];
  videoUrl?: string;
}

// ============ EXPERIENCE & EDUCATION ============
export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  location: string;
}

export interface Education {
  degree: string;
  institution: string;
  status: string;
}
