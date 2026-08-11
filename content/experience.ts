/* Professional experience — from Anushka's resume, reverse chronological
   (currently a single role: newest first still applies once more are added). */

export type Role = {
  company: string;
  role: string;
  type: "Internship" | "Full-time" | "Hackathon" | "Freelance";
  location: string;
  period: string;
  summary: string;
  achievements: string[];
  outcome: string;
  skills: string[];
  /* panel color — intentional, one vibrant per role (Experience deck) */
  color: string;
  fg: "light" | "dark";
  /* Company mark. `variant` follows what the supplied file actually IS:
     · "tile"  — the logo ships with its own background baked in (square
                 avatars), so it is shown as a rounded tile, uncropped
     · "plate" — transparent artwork that needs a light ground to read;
                 the plate's width follows the logo's true aspect ratio
     · absent  — no official file supplied yet → typographic fallback */
  logo?: {
    src: string;
    variant: "tile" | "plate";
    aspect: number;
    placement?: "right" | "below";
  };
  /* verified credential/certificate link, when one exists */
  credentialUrl?: string;
  fr?: { role?: string; summary?: string; outcome?: string; achievements?: string[] };
};

export const ROLES: Role[] = [
  {
    company: "Spacenos",
    role: "Full-Stack Developer",
    type: "Internship",
    /* Spacenos does not list a physical office on the resume — internship
       ran remotely alongside her B.Tech in Kolkata. */
    location: "Remote",
    period: "Jul – Oct 2025",
    summary:
      "Built and deployed frontend dashboards, project discovery modules and mentorship features for the Spacenos platform, serving 7,000+ students and startups.",
    achievements: [
      "Built and deployed frontend dashboards, project discovery modules, and mentorship features using React.js, TypeScript, Firebase, Tailwind CSS, and Vite for the Spacenos platform, serving 7,000+ students and startups.",
      "Implemented Firebase Authentication, real-time data synchronization, and backend API integrations enabling secure authentication and seamless data sync across the application.",
      "Reviewed teammates' pull requests, identified code quality issues before deployment, and collaborated in 2-week Agile sprints with Vercel deployment and CI/CD workflows.",
    ],
    outcome: "Internship Certificate · shipped features used by 7,000+ students and startups",
    skills: ["React.js", "TypeScript", "Firebase", "Tailwind CSS", "Vite", "Agile", "CI/CD"],
    color: "#0072E3",
    fg: "light",
    /* no official company mark supplied — the panel falls back to the
       typographic company-name stand-in the site already uses (see
       Experience.tsx) rather than a placeholder square. */
    credentialUrl: "https://drive.google.com/file/d/1qvVTZVHACxX1aITuyspIQXz0ccABLaxN/view?usp=sharing",
  },
];
