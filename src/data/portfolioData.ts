// ============ PORTFOLIO DATA (NJOH BLESS NDE) ============
import { Project, ExperienceItem, Education } from "@/types/portfolio";

export const PERSONAL_INFO = {
  name: "Bless Nde",
  title: "Developer & automation specialist",
  location: "Yaoundé, Cameroon",
  phone: "+237 677 653 097",
  email: "blessnde184@gmail.com",
  cvUrl: "/Njoh_Bless_CV.pdf",
  linkedin: "https://linkedin.com/in/njoh-bless-a7b31021a",
  github: "https://github.com/njoh-bless",
  bio: "I build production web platforms and design CRM automation systems that help businesses operate faster. From payment API middleware and AI-powered WhatsApp agents to multi-stage coaching pipelines and voice AI receptionists — I work across the full stack, combining Next.js, Supabase, and GoHighLevel to deliver end-to-end solutions.",
};

// ============ PROJECTS ============
export const PROJECTS: Project[] = [
  {
    id: "starterpay",
    track: "developer",
    title: "StarterPay",
    tagline: "Mobile-money payment API middleware for student and indie developers",
    category: "FinTech",
    year: "2025",
    thumbnail: "/projects/starterpay.jpg",
    tags: ["Next.js", "TypeScript", "REST APIs", "Mobile Money", "CamPay"],
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
    title: "WACRM / Nova",
    tagline: "Self-hosted bilingual AI sales agent for retail merchants on WhatsApp",
    category: "AI Systems",
    year: "2025",
    thumbnail: "/projects/wacrm.jpg",
    tags: ["Node.js", "DeepSeek API", "Baileys", "WebSockets", "AI Prompting"],
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
    title: "INIESAT Platform",
    tagline: "Official institutional web platform with candidate enrollment processing",
    category: "Full-Stack Web",
    year: "2024–2025",
    thumbnail: "/projects/iniesat.jpg",
    tags: ["Next.js", "Supabase", "PostgreSQL", "Tailwind CSS", "Bootstrap"],
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
  },
  {
    id: "ghl-workforce-dashboard",
    track: "va",
    title: "Workforce Reporting System",
    tagline: "Multi-cohort student tracking with Custom Objects and automated metrics",
    category: "CRM Architecture",
    year: "2025",
    thumbnail: "/projects/ghl-workforce.jpg",
    tags: ["GoHighLevel", "Custom Objects", "Custom Metrics", "Zapier", "Reporting SOPs"],
    toolsUsed: ["GoHighLevel CRM", "Custom Objects", "Custom Metrics", "Zapier", "Google Sheets"],
    projectBrief:
      "A fast-growing workforce development institute was managing multiple student cohorts via fragmented spreadsheets, resulting in missing progress milestones and hours of manual reporting each week.",
    workflowHighlights: [
      "Engineered multi-entity data schema in GoHighLevel utilizing Custom Objects to model Programs, Cohorts, and Student Milestones.",
      "Built custom calculation metrics and KPI dashboards giving program directors real-time attendance and graduation progress.",
      "Authored end-to-end functional specifications and standard operating procedures (SOPs) formally praised by program instructors.",
    ],
  },
  {
    id: "ghl-shopify-pipeline",
    track: "va",
    title: "Shopify-to-GHL Pipeline",
    tagline: "Automated webhook sync and customer retention follow-up sequences",
    category: "E-Commerce Automation",
    year: "2025",
    thumbnail: "/projects/ghl-shopify.jpg",
    tags: ["GoHighLevel", "Shopify Webhooks", "Make.com", "SMS Marketing", "Email Automation"],
    toolsUsed: ["GoHighLevel", "Shopify Webhooks", "Make.com", "GHL Smart Lists", "Email/SMS Sequences"],
    projectBrief:
      "An e-commerce brand needed immediate post-purchase order data sync between their Shopify store and GoHighLevel CRM to trigger automated review requests, VIP customer tagging, and abandoned checkout flows.",
    workflowHighlights: [
      "Constructed a resilient Make.com webhook pipeline mapping Shopify customer/order payload directly into GHL contact records.",
      "Configured segmented multi-step email & SMS follow-up nurture sequences conditioned on purchase value and SKU types.",
      "Eliminated manual customer data exports and accelerated customer review generation by 24% in the first 60 days.",
    ],
  },
  {
    id: "ghl-executive-coaching-hub",
    track: "va",
    title: "Executive Coaching CRM",
    tagline: "End-to-end 10-stage client journey with AI pre-call briefings",
    category: "CRM & AI Intelligence",
    year: "2025",
    thumbnail: "/projects/ghl-coaching.jpg",
    tags: ["GoHighLevel", "Typeform", "Zapier", "PDF.co", "Stripe", "DocuSign", "Zoom AI"],
    toolsUsed: ["GoHighLevel CRM", "Typeform", "Zapier + PDF.co", "Stripe Billing", "DocuSign", "Zoom AI Transcription"],
    projectBrief:
      "An ultra-premium executive coaching practice required an automated, end-to-end 10-stage client journey — from inbound assessment qualification and dynamic PDF readiness scoring to seamless onboarding and an AI-powered Client Intelligence Hub synthesizing session breakthroughs across 6-month engagements.",
    workflowHighlights: [
      "Deployed a 15-question Typeform Executive Readiness Assessment integrated via Zapier + PDF.co to instantly calculate scores across Professional, Personal, and Relational dimensions and auto-deliver a custom branded PDF report.",
      "Engineered a 7-day multi-channel Email/SMS nurture sequence, GHL discovery booking with prep questionnaires, live Stripe checkout, and automated DocuSign agreement dispatch.",
      "Architected client portal onboarding, weekly Zoom call transcription ingestion, client journal logs, and automated AI pre-call briefings synthesizing breakthrough patterns for 5-month renewal retention.",
    ],
  },
  {
    id: "ghl-voice-ai-receptionist",
    track: "va",
    title: "Voice AI Receptionist",
    tagline: "Sub-second natural voice agent for 24/7 lead qualification and booking",
    category: "Voice AI",
    year: "2025",
    thumbnail: "/projects/voice-ai.jpg",
    tags: ["GoHighLevel", "Voice AI", "Twilio", "Natural Voice Agents", "Calendar Scheduling"],
    toolsUsed: ["GHL Voice AI", "Twilio Telecom", "Conversation Engine", "GHL Calendar Engine", "SMS Triggers"],
    projectBrief:
      "Businesses and high-volume practices frequently miss high-intent phone inquiries during off-hours and peak call spikes, suffering from low lead-to-booking conversion rates due to delayed human callback times.",
    workflowHighlights: [
      "Trained and deployed a natural-sounding Voice AI agent configured with dynamic prompt guardrails, objection handling, and real-time knowledge base lookups.",
      "Connected real-time GHL calendar availability to qualify callers over the phone, resolve scheduling conflicts, and book confirmed appointments directly during the call.",
      "Configured automated failover protocols that trigger instant SMS confirmations to the caller, sync call recordings and AI transcripts to CRM contact cards, and alert staff to high-priority escalations.",
    ],
  },
  {
    id: "ghl-conversation-ai",
    track: "va",
    title: "Conversation AI Lead-Capture",
    tagline: "Autonomous chatbot for lead qualification, booking, and CRM routing",
    category: "AI Chatbots",
    year: "2025",
    thumbnail: "/projects/conversation-ai.jpg",
    tags: ["GoHighLevel", "Conversation AI", "Calendar Booking", "Custom Objects", "SMS Automation"],
    toolsUsed: ["GHL Conversation AI", "Appointment Scheduling", "SMS Triggers", "Custom Objects"],
    projectBrief:
      "A coaching business struggled with losing high-intent leads that reached out during off-hours, resulting in sluggish booking rates and delayed follow-ups.",
    workflowHighlights: [
      "Trained GHL Conversation AI with custom qualification prompts and FAQ objection-handling guardrails.",
      "Connected real-time calendar availability to automate appointment scheduling directly within the chat interface.",
      "Selected into the program's paid phase after delivering a standout Custom Objects build evaluated across a 23-person cohort.",
    ],
  },
];

// ============ EXPERIENCE ============
export const EXPERIENCES: ExperienceItem[] = [
  {
    period: "2025 — Present",
    role: "GHL Certified Admin / Automation Developer",
    company: "Client Systems & Operations",
    location: "Remote",
  },
  {
    period: "Sept 2024 — Present",
    role: "ICT Technical Assistant / Full-Stack Developer",
    company: "INIESAT",
    location: "Yaoundé, Cameroon",
  },
];

// ============ EDUCATION ============
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
