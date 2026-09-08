// ============ PORTFOLIO DATA (NJOH BLESS NDE) ============
import {
  Project,
  ExperienceItem,
  SkillCategory,
  Certification,
  Education,
} from "@/types/portfolio";

export const PERSONAL_INFO = {
  name: "Njoh Bless Nde",
  shortName: "Blessing",
  title: "Full-Stack Developer & GHL Certified Automation Specialist",
  roleTagline: "Bridging Full-Stack Engineering with High-Level CRM & Workflow Automation",
  location: "Yaoundé, Cameroon · Remote Worldwide",
  phone: "+237 677 653 097",
  email: "blessnde184@gmail.com",
  cvUrl: "/Njoh_Bless_CV.pdf",
  linkedin: "https://linkedin.com/in/njoh-bless-a7b31021a",
  github: "https://github.com",
  availabilityStatus: "Available for Engineering & VA Roles",
  bio: "Full-stack developer and GoHighLevel-certified automation specialist who builds and ships systems end-to-end. From client CRM and workflow automation to AI-driven WhatsApp sales agents and production web platforms.",
};

export const PROJECTS: Project[] = [
  // ============ DEVELOPER PROJECTS ============
  {
    id: "starterpay",
    track: "developer",
    title: "StarterPay",
    tagline: "Mobile-money payment API middleware for student and indie developers",
    category: "Full-Stack Web & FinTech",
    year: "2025",
    featured: true,
    tags: ["Next.js", "TypeScript", "REST APIs", "Mobile Money", "CamPay"],
    metrics: ["1 Unified API", "Sub-2s Webhook Acks", "Tested with CamPay"],
    liveUrl: "https://github.com/njoh-bless",
    githubUrl: "https://github.com/njoh-bless",
    caseStudy: {
      problem:
        "Student developers and indie builders in Cameroon faced steep friction integrating disparate mobile-money APIs, dealing with inconsistent error formatting and delayed callbacks.",
      solution:
        "Engineered an elegant middleware layer in Next.js that normalizes payment collection into a single predictable SDK with built-in webhook retry queues.",
      impact:
        "Submitted a formal partnership proposal to CamPay and accepted into the Mountain Hop PawaPay Builders Sprint to validate developer adoption.",
      rationale:
        "Built on Next.js Route Handlers for low-latency serverless edge execution, reducing API cold starts to near-zero while securing private API keys.",
    },
  },
  {
    id: "wacrm-nova",
    track: "developer",
    title: "WACRM / Nova — WhatsApp AI Sales Agent",
    tagline: "Self-hosted bilingual AI sales & inventory agent for retail and wholesale merchants",
    category: "AI & Distributed Systems",
    year: "2025",
    featured: true,
    tags: ["Node.js", "DeepSeek API", "Baileys", "WebSockets", "AI Prompting"],
    metrics: ["Bilingual FR/EN", "0 Missed Leads", "<3s AI Response Time"],
    liveUrl: "https://github.com/njoh-bless",
    githubUrl: "https://github.com/njoh-bless",
    caseStudy: {
      problem:
        "Wholesale and retail merchants in Cameroon lose significant revenue due to delayed responses to WhatsApp inquiries across French and English buyer segments.",
      solution:
        "Built an autonomous self-hosted WhatsApp agent using Node.js, Baileys socket integration, and DeepSeek API with a routing layer that strictly separates personal chats from business transactions.",
      impact:
        "Delivered 24/7 instant bilingual product catalog inquiries, order intake, and customer support with automated transaction logging.",
      rationale:
        "Selected Baileys socket connection over third-party hosted API providers to eliminate expensive per-message fees for local small merchants.",
    },
  },
  {
    id: "iniesat-platform",
    track: "developer",
    title: "INIESAT Institutional Web Platform",
    trackType: "developer",
    tagline: "Official institutional web platform with candidate enrollment processing tooling",
    category: "Full-Stack Web",
    year: "2024 — 2025",
    featured: true,
    tags: ["Next.js", "Supabase", "PostgreSQL", "Tailwind CSS", "Bootstrap"],
    metrics: ["12k+ Monthly Users", "65% Admin Time Saved", "99/100 Lighthouse"],
    liveUrl: "https://iniesat.edu.demo",
    githubUrl: "https://github.com/njoh-bless",
    caseStudy: {
      problem:
        "Manual paper admissions queues and unintegrated candidate records caused bottlenecks during annual university enrollment cycles.",
      solution:
        "Led the architecture of the institution's official web platform featuring secure authentication, dynamic department directories, and database-backed data export tooling.",
      impact:
        "Streamlined enrollment processing for thousands of prospective students and dramatically reduced administrative data entry errors.",
      rationale:
        "Paired Next.js Server Components with Supabase PostgreSQL Row Level Security (RLS) to ensure instantaneous page loads while safeguarding student personal data.",
    },
  } as unknown as Project,

  // ============ VIRTUAL ASSISTANT & GOHIGHLEVEL (GHL) PROJECTS ============
  {
    id: "ghl-workforce-dashboard",
    track: "va",
    title: "Multi-Cohort Workforce Reporting System",
    tagline: "Custom Objects & Custom Metrics architecture for tracking multi-entity student cohorts",
    category: "CRM Architecture & Analytics",
    year: "2025",
    featured: true,
    tags: ["GoHighLevel", "Custom Objects", "Custom Metrics", "Zapier", "Reporting SOPs"],
    metrics: ["100% Automated Tracking", "Praised by Instructors", "Multi-Cohort Visibility"],
    toolsUsed: ["GoHighLevel CRM", "Custom Objects", "Custom Metrics", "Zapier", "Google Sheets"],
    projectBrief:
      "A fast-growing workforce development institute was managing multiple student cohorts via fragmented spreadsheets, resulting in missing progress milestones and hours of manual reporting each week.",
    workflowHighlights: [
      "Engineered multi-entity data schema in GoHighLevel utilizing Custom Objects to model Programs, Cohorts, and Student Milestones.",
      "Built custom calculation metrics and KPI dashboards giving program directors real-time attendance and graduation progress.",
      "Authored end-to-end functional specifications and standard operating procedures (SOPs) formally praised by program instructors.",
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with user's specific Loom or YouTube walkthrough
  },
  {
    id: "ghl-shopify-pipeline",
    track: "va",
    title: "Shopify-to-GHL E-Commerce Purchase Pipeline",
    tagline: "Automated webhook synchronization and customer retention follow-up sequences",
    category: "E-Commerce & Marketing Automation",
    year: "2025",
    featured: true,
    tags: ["GoHighLevel", "Shopify Webhooks", "Make.com", "SMS Marketing", "Email Automation"],
    metrics: ["Instant Data Sync", "+24% Review Collection", "Zero Dropped Orders"],
    toolsUsed: ["GoHighLevel", "Shopify Webhooks", "Make.com", "GHL Smart Lists", "Email/SMS Sequences"],
    projectBrief:
      "An e-commerce brand needed immediate post-purchase order data sync between their Shopify store and GoHighLevel CRM to trigger automated review requests, VIP customer tagging, and abandoned checkout flows.",
    workflowHighlights: [
      "Constructed a resilient Make.com webhook pipeline mapping Shopify customer/order payload directly into GHL contact records.",
      "Configured segmented multi-step email & SMS follow-up nurture sequences conditioned on purchase value and SKU types.",
      "Eliminated manual customer data exports and accelerated customer review generation by 24% in the first 60 days.",
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "ghl-executive-coaching-hub",
    track: "va",
    title: "Executive Coaching CRM & AI Client Intelligence System",
    tagline: "End-to-end 10-stage client journey, automated PDF readiness scoring, and AI pre-call briefings",
    category: "CRM Architecture & AI Intelligence",
    year: "2025",
    featured: true,
    tags: ["GoHighLevel", "Typeform", "Zapier", "PDF.co", "Stripe", "DocuSign", "Zoom AI Intelligence"],
    metrics: ["10-Stage Pipeline", "100% Automated PDF Reports", "AI Pre-Call Briefings"],
    toolsUsed: ["GoHighLevel CRM", "Typeform", "Zapier + PDF.co", "Stripe Billing", "DocuSign", "Zoom AI Transcription"],
    projectBrief:
      "An ultra-premium executive coaching practice required an automated, end-to-end 10-stage client journey—from inbound assessment qualification and dynamic PDF readiness scoring to seamless onboarding and an AI-powered Client Intelligence Hub synthesizing session breakthroughs and notes across 6-month engagements.",
    workflowHighlights: [
      "Stages 1–3 (Discovery & Automated Scoring): Deployed a 15-question Typeform Executive Readiness Assessment integrated via Zapier + PDF.co to instantly calculate scores across Professional, Personal, and Relational dimensions and auto-deliver a custom branded PDF report.",
      "Stages 4–7 (Nurture, VSL & Contract Execution): Engineered a 7-day multi-channel Email/SMS nurture sequence, GHL discovery booking with prep questionnaires, live Stripe checkout, and automated DocuSign agreement dispatch.",
      "Stages 8–10 (Onboarding, Intelligence Hub & Renewal): Architected client portal onboarding, weekly Zoom call transcription ingestion, client journal logs, and automated AI pre-call briefings synthesizing breakthrough patterns for 5-month renewal retention.",
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "ghl-voice-ai-receptionist",
    track: "va",
    title: "Autonomous Voice AI Receptionist & Appointment Booking System",
    tagline: "Sub-second natural voice conversational agent for 24/7 lead qualification and calendar dispatch",
    category: "Voice AI & Telecom Automation",
    year: "2025",
    featured: true,
    tags: ["GoHighLevel", "Voice AI", "Twilio", "Natural Voice Agents", "Webhook Routing", "Calendar Scheduling"],
    metrics: ["24/7 Call Coverage", "<1.2s Voice Latency", "Zero Missed Leads"],
    toolsUsed: ["GHL Voice AI", "Twilio Telecom", "Conversation Engine", "GHL Calendar Engine", "SMS Triggers"],
    projectBrief:
      "Businesses and high-volume practices frequently miss high-intent phone inquiries during off-hours and peak call spikes, suffering from low lead-to-booking conversion rates due to delayed human callback times.",
    workflowHighlights: [
      "Trained and deployed a natural-sounding Voice AI agent configured with dynamic prompt guardrails, objection handling, and real-time knowledge base lookups.",
      "Connected real-time GHL calendar availability to qualify callers over the phone, resolve scheduling conflicts, and book confirmed appointments directly during the call.",
      "Configured automated failover protocols that trigger instant SMS confirmations to the caller, sync call recordings and AI transcripts to CRM contact cards, and alert staff to high-priority escalations.",
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "ghl-conversation-ai",
    track: "va",
    title: "Conversation AI Inbound Lead-Capture System",
    tagline: "Autonomous 24/7 lead qualification, booking, and CRM pipeline routing",
    category: "AI Chatbots & Inbound Lead Ops",
    year: "2025",
    featured: true,
    tags: ["GoHighLevel", "Conversation AI", "Calendar Booking", "Custom Objects", "SMS Automation"],
    metrics: ["Selected to Paid Phase", "24/7 Response Time", "23-Person Cohort Standout"],
    toolsUsed: ["GHL Conversation AI", "Appointment Scheduling", "SMS Triggers", "Custom Objects"],
    projectBrief:
      "A coaching business struggled with losing high-intent leads that reached out during off-hours, resulting in sluggish booking rates and delayed follow-ups.",
    workflowHighlights: [
      "Trained GHL Conversation AI with custom qualification prompts and FAQ objection-handling guardrails.",
      "Connected real-time calendar availability to automate appointment scheduling directly within the chat interface.",
      "Selected into the program's paid phase after delivering a standout Custom Objects build evaluated across a 23-person cohort.",
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    period: "2025 — Present",
    role: "GHL Certified Admin / Automation Developer",
    company: "Client Systems & Operations",
    location: "Remote",
    highlights: [
      "Earned GoHighLevel Certified Admin and Conversation AI certifications; built CRM and workflow-automation systems across multiple industries.",
      "Designed a multi-cohort reporting dashboard using Custom Objects & Custom Metrics for a workforce-development program, writing functional specs praised by instructors.",
      "Architected an end-to-end 10-stage Executive Coaching CRM with Zapier/PDF.co automated scoring and deployed autonomous Voice AI booking systems.",
      "Selected into the program's paid phase after a standout Custom Objects build among a 23-person cohort.",
    ],
    stack: ["GoHighLevel", "Voice AI", "Custom Objects", "Conversation AI", "Stripe", "Zapier", "Make.com"],
  },
  {
    period: "Sept 2024 — Present",
    role: "ICT Technical Assistant / Full-Stack Developer",
    company: "INIESAT",
    location: "Yaoundé, Cameroon",
    highlights: [
      "Led development of the institution's official web platform (Next.js, Supabase) with secure authentication and PostgreSQL backend.",
      "Built database-backed candidate and enrollment data export tooling, improving administrative efficiency for enrollment processing.",
      "Provided ongoing technical user support and built a responsive, mobile-first frontend improving enrollment visibility and engagement.",
    ],
    stack: ["Next.js", "Supabase", "PostgreSQL", "TypeScript", "Bootstrap", "Tailwind CSS"],
  },
];

export const CERTIFICATIONS: Certification[] = [
  {
    name: "GoHighLevel (GHL) Certified Admin",
    issuer: "GoHighLevel",
    year: "2025",
  },
  {
    name: "GoHighLevel Conversation AI Certification",
    issuer: "GoHighLevel",
    year: "2025",
  },
];

export const EDUCATION_LIST: Education[] = [
  {
    degree: "BTech in Software Engineering",
    institution: "INIESAT",
    status: "Completed 2025",
  },
  {
    degree: "HND in Software Engineering",
    institution: "Higher National Diploma",
    status: "Completed 2024",
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Full-Stack Development",
    description: "Production web applications, edge APIs, and scalable database architectures.",
    skills: ["Next.js (App Router)", "React", "TypeScript", "Node.js", "FastAPI", "PostgreSQL", "Supabase", "Tailwind CSS"],
  },
  {
    title: "GoHighLevel & CRM Operations",
    description: "Certified GHL architecture, multi-entity modeling, and client onboarding systems.",
    skills: ["GHL Certified Admin", "Custom Objects", "Custom Metrics", "Conversation AI", "Pipelines & Funnels", "Smart Lists"],
  },
  {
    title: "Workflow & AI Automation",
    description: "Connecting disparate business tools and embedding AI to eliminate manual tasks.",
    skills: ["Make.com", "Zapier", "DeepSeek API", "Stripe Webhooks", "Shopify Integrations", "WhatsApp Agents"],
  },
  {
    title: "Process & Engineering Leadership",
    description: "Clear communication, standard operating procedures, and delivery discipline.",
    skills: ["SOP Design", "Functional Specs", "API Documentation", "Git/GitHub", "Problem-Solving", "Client Communication"],
  },
];
