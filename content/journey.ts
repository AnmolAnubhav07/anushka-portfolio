/* THE JOURNEY — the chapters the light tunnel travels through.
 *
 * ⚠ SOURCING: every fact here traces to Anushka's resume (mirrored in
 * content/experience.ts and content/projects.ts) — schools, companies,
 * dates and outcomes. Nothing biographical is invented around them.
 *
 * Shape per chapter:
 *   year   — shown large, the anchor
 *   title  — what the chapter is about, in her voice
 *   place  — where it happened (context line)
 *   story  — what was actually happening, 2–3 sentences
 *   bridge — how it handed over to the next chapter (the transition line)
 *
 * `fr` is unused now that the French toggle has been removed, but the field
 * stays on the type since other content files still declare it. */

export type Chapter = {
  id: string;
  year: string;
  title: string;
  place: string;
  story: string;
  bridge: string;
  fr?: { title?: string; place?: string; story?: string; bridge?: string };
};

export const CHAPTERS: Chapter[] = [
  {
    id: "roots",
    year: "2020–2022",
    title: "Roots",
    place: "R.P.M College, Bihar (BSEB Board)",
    story:
      "Higher secondary education, finished top 10 in college and inside the top 10 percentile of the entire BSEB board. The fixed point everything after it gets measured against.",
    bridge: "That result opened the door to an engineering degree — and a choice of major.",
  },
  {
    id: "btech",
    year: "2023–2027",
    title: "Choosing computer science",
    place: "Heritage Institute of Technology, Kolkata",
    story:
      "B.Tech in Computer Science and Business Systems, currently holding a 9.01/10 CGPA. Coursework in Data Structures & Algorithms, OOP, DBMS, Operating Systems and Computer Networks became the base everything else is built on.",
    bridge: "By late 2024 the coursework needed a real project to test itself against.",
  },
  {
    id: "financial-assistant",
    year: "Nov – Dec 2024",
    title: "First real build",
    place: "Financial Assistant — personal project",
    story:
      "Lead developer on a personal finance tracker: Node.js/MongoDB REST APIs, Firebase Authentication and real-time budget visualization. The first project built and shipped, start to finish, alone.",
    bridge: "2025 turned that into a habit — a team win, an internship, and a second hackathon.",
  },
  {
    id: "2025",
    year: "2025",
    title: "A team win and a production internship",
    place: "Hack Heritage 3.0 · Spacenos · Smart India Hackathon",
    story:
      "Led a team of 4 to 1st place at Hack Heritage 3.0 among 300 teams with Her Voice, a real-time women's-safety alert app. From July to October, interned as a Full-Stack Developer at Spacenos, shipping dashboards and mentorship features used by 7,000+ students and startups. The Civic Issue Reporting System was later nominated at Smart India Hackathon 2025, among 400 teams.",
    bridge: "Heading into 2026, the next build is an AI-powered platform, not a tracker or a rulebook.",
  },
  {
    id: "interviewer-ai",
    year: "Apr – Jun 2026",
    title: "Building the next one",
    place: "Interviewer.AI",
    story:
      "A full-stack AI-powered mock interview and resume-evaluation platform — technical, behavioral, coding and resume-based workflows on the Groq LLM API, with Supabase-backed session autosave so an interrupted interview can pick up where it left off.",
    bridge: "Strong fundamentals, three shipped projects, one internship — looking for the next production team to join.",
  },
];
