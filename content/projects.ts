/* Featured projects — single source of truth for the Work section
   and the /work/[slug] case-study routes.

   ⚠ SOURCING: all three projects below come from Anushka's resume — real
   project names, bullets and live-demo URLs she supplied. Cover images are
   temporary solid-black placeholders (public/images/projects/*) until real
   screenshots are supplied; nothing else about them is invented. */

export type Study = {
  role: string;
  timeline: string;
  context: string;
  problem: string;
  process: { title: string; body: string }[];
  decisions: { title: string; why: string }[];
  outcomes: string[];
  reflection: string;
  note?: string;
};

/* French mirror of Study — unused now that the French toggle has been
   removed, kept only for type-shape compatibility with lib/i18n.tsx's L(). */
export type StudyFr = Partial<Study>;

/* Card / case-page cover.
   ⚠ Only VERIFIED assets go in `src` — Anushka's own project captures, or a
   placeholder explicitly flagged as one. `variant: "photo"` renders
   full-bleed; "brand" (default) centres the mark on its ground. */
export type Cover = {
  bg: string;
  ink: "light" | "dark";
  src?: string;
  aspect?: number;
  variant?: "brand" | "photo";
  focus?: string;
  mark?: string;
};

export type Project = {
  slug: string;
  title: string;
  tags: string[];
  year: string;
  oneLiner: string;
  contribution: string;
  coverLabel: string;
  cover?: Cover;
  /* verified live-demo destination — never guessed */
  site?: { url: string; label: string };
  repo?: string;
  award?: string;
  study: Study;
  fr?: {
    title?: string;
    oneLiner?: string;
    contribution?: string;
    tags?: string[];
    study?: StudyFr;
  };
};

export const PROJECTS: Project[] = [
  /* ─────────────── 1 · INTERVIEWER.AI ─────────────── */
  {
    slug: "interviewer-ai",
    title: "Interviewer.AI — Mock Interview & Resume Evaluation Platform",
    tags: ["Full-Stack", "AI/LLM", "Supabase"],
    year: "2026",
    oneLiner:
      "A full-stack AI-powered mock interview platform supporting technical, behavioral, coding, and resume-based interview workflows using the Groq LLM API.",
    contribution:
      "End-to-end build — interview workflows, resume analysis, session recovery.",
    coverLabel: "INTERVIEWER.AI",
    /* placeholder cover — solid black until a real screenshot is supplied */
    cover: { bg: "#0B0B0E", ink: "light", src: "/images/projects/interviewer-ai-cover.jpg", variant: "photo" },
    site: { url: "https://neo-interviewer.lovable.app/", label: "Live demo" },
    study: {
      role: "Full-Stack Developer — solo",
      timeline: "Apr – Jun 2026",
      context:
        "A mock interview and resume-evaluation platform built to practice technical, behavioral, coding and resume-based interview formats against an LLM instead of a static question bank.",
      problem:
        "Generic interview prep treats every candidate and every resume the same. The goal was interview practice that reacts to the actual resume and actual answers, and that survives a dropped connection mid-session.",
      process: [
        {
          title: "Workflows for four interview types",
          body: "Designed technical, behavioral, coding and resume-based interview flows, each powered by the Groq LLM API for question generation and response evaluation.",
        },
        {
          title: "A resume analyzer, not just a parser",
          body: "Built an LLM-powered resume analyzer using Supabase Edge Functions and PostgreSQL — uploaded resumes are parsed into structured feedback and turned into personalized interview questions.",
        },
        {
          title: "Sessions that survive interruption",
          body: "Implemented session autosave and recovery on Supabase and PostgreSQL, so a closed tab or dropped connection doesn't cost the candidate their progress.",
        },
      ],
      decisions: [
        {
          title: "Resume-aware questions, not generic ones",
          why: "Feedback and follow-up questions generate from the candidate's actual resume rather than a fixed bank — practice matches the job they're actually interviewing for.",
        },
        {
          title: "Autosave over restart",
          why: "Losing interview progress to a refresh is worse than a slightly more complex save path — session state is the product's trust contract.",
        },
      ],
      outcomes: [
        "Four distinct interview workflows shipped end to end",
        "LLM-powered resume analysis feeding personalized question generation",
      ],
      reflection:
        "Wiring an LLM into a stateful, resumable workflow — not just a chat box — taught me more about production AI integration than any tutorial.",
    },
  },

  /* ─────────────── 2 · HER VOICE ─────────────── */
  {
    slug: "her-voice",
    title: "Her Voice — Women's Safety Alert App",
    tags: ["Team Lead", "Full-Stack", "Firebase"],
    year: "2025",
    oneLiner:
      "A real-time emergency alert application built with a team of 4, sending instant SOS notifications with live location sharing.",
    contribution:
      "Team lead — real-time alerts, auth, and a rule-based priority heuristic.",
    coverLabel: "HER VOICE",
    cover: { bg: "#0B0B0E", ink: "light", src: "/images/projects/her-voice-cover.jpg", variant: "photo" },
    site: { url: "https://her-voice-six.vercel.app/", label: "Live site" },
    award: "🏆 1st Prize — Hack Heritage 3.0",
    study: {
      role: "Team Lead & Full-Stack Developer",
      timeline: "Aug – Sep 2025 · Hack Heritage 3.0",
      context:
        "A real-time emergency alert app built with a team of 4 for Hack Heritage 3.0 — instant SOS notifications with live location sharing.",
      problem:
        "In an emergency, every second spent finding a contact or explaining a location is a second too many. The alert and the location needed to reach the right people instantly, with no manual lookup.",
      process: [
        {
          title: "Real-time alerts over Firebase",
          body: "Built instant SOS notifications and live location sharing on Firebase Realtime Database, so a triggered alert reaches contacts within seconds.",
        },
        {
          title: "Auth and a priority layer",
          body: "Implemented Firebase Authentication and a Node.js/Express API layer for contact management, alert history, and a rule-based alert-priority heuristic.",
        },
        {
          title: "Built and pitched in one sprint",
          body: "Led a team of 4 through scoping, build and a live demo inside the hackathon's time limit.",
        },
      ],
      decisions: [
        {
          title: "Rule-based priority, not a black box",
          why: "Under hackathon judging and real emergency use, a priority heuristic the team could explain beats an opaque model no one can audit in the moment.",
        },
        {
          title: "Location sharing as the core loop, not a feature",
          why: "Every other feature — auth, history, contacts — exists to get an accurate location to the right person faster. That's the one thing that had to work.",
        },
      ],
      outcomes: [
        "🏆 1st place — Hack Heritage 3.0, among 300 teams",
        "Live SOS alert app deployed and demoed to the judging panel",
      ],
      reflection:
        "Leading a team of 4 under a hackathon clock taught me to cut scope ruthlessly — the feature that ships beats the feature that's clever.",
    },
  },

  /* ─────────────── 3 · FINANCIAL ASSISTANT ─────────────── */
  {
    slug: "financial-assistant",
    title: "Financial Assistant — Personal Finance Tracker",
    tags: ["Full-Stack", "Node.js", "MongoDB"],
    year: "2024",
    oneLiner:
      "A personal finance tracker with real-time budget visualization, secure transaction APIs, and Firebase-backed auth.",
    contribution:
      "Lead developer — REST APIs, auth, and real-time budget visualization.",
    coverLabel: "FINANCIAL ASSISTANT",
    cover: { bg: "#0B0B0E", ink: "light", src: "/images/projects/financial-assistant-cover.jpg", variant: "photo" },
    site: { url: "https://personal-finance-app-tawny.vercel.app/login", label: "Live site" },
    study: {
      role: "Lead Developer — solo",
      timeline: "Nov – Dec 2024",
      context:
        "A personal finance tracker built to turn scattered transaction records into a single real-time view of a budget.",
      problem:
        "Manually tracking spending across accounts is tedious enough that most people stop within a week. The tool needed to be fast to log into and immediately show where the money went.",
      process: [
        {
          title: "REST APIs for the ledger",
          body: "Built Node.js/MongoDB REST APIs for transaction management and financial data processing — the source of truth the rest of the app reads from.",
        },
        {
          title: "Firebase-backed auth",
          body: "Firebase Authentication gated access to financial data, keeping the auth surface small and offloading session handling.",
        },
        {
          title: "Real-time budget visualization",
          body: "Budget views update as transactions are added, so the dashboard is never stale by the time it's checked.",
        },
      ],
      decisions: [
        {
          title: "Real-time over batch",
          why: "A budget dashboard that updates on refresh, not on a nightly job, is the difference between a tool people check and one they forget.",
        },
      ],
      outcomes: [
        "A working personal finance tracker, deployed and usable end to end",
        "Secure transaction APIs handling real financial records",
      ],
      reflection:
        "This was the first project where the backend, not the UI, was the hard part — getting the data model and API right made everything downstream easy.",
    },
  },
];
