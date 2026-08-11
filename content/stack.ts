/* My Dev Stack — tools shown in the spiral orbit.
   `src` uses a real logo from /public/images/logos when we have one;
   otherwise a brand-tinted monogram mark keeps the set visually uniform.
   To upgrade a monogram: drop an SVG/PNG in that folder and swap in `src`.

   ⚠ Regrouped from Gireesh's design stack (Figma/Photoshop/Midjourney/etc.)
   to Anushka's real, resume-verified skills. "Design" and "Creative" don't
   apply to a full-stack dev's toolkit, and no AI-tool usage is listed on
   her resume, so the group union was changed to the four categories that
   actually describe her stack — the component's `t.group` value is only
   used for the (unused-here) grouping label, so this is a safe, minimal
   change. `stack.disciplines` in the UI still reads "4", which still
   matches: 4 groups below. */

export type Tool = {
  name: string;
  group: "Languages" | "Frontend" | "Backend" | "Cloud & Tools";
  src?: string;
  mono?: string;
  color?: string;
};

export const TOOLS: Tool[] = [
  /* — Languages — */
  { name: "JavaScript", group: "Languages", mono: "JS", color: "#B08D00" },
  { name: "TypeScript", group: "Languages", mono: "TS", color: "#3178C6" },
  { name: "Python", group: "Languages", mono: "Py", color: "#3776AB" },
  { name: "Java", group: "Languages", mono: "Jv", color: "#EA2D2E" },
  { name: "C++", group: "Languages", mono: "C+", color: "#00599C" },

  /* — Frontend — */
  { name: "React.js", group: "Frontend", mono: "Re", color: "#0E7C99" },
  { name: "Next.js", group: "Frontend", mono: "N", color: "#141414" },
  { name: "HTML5", group: "Frontend", mono: "H5", color: "#D6431C" },
  { name: "CSS3", group: "Frontend", mono: "C3", color: "#1572B6" },
  { name: "Tailwind CSS", group: "Frontend", mono: "TW", color: "#0891A6" },
  { name: "Vite", group: "Frontend", mono: "Vi", color: "#646CFF" },

  /* — Backend — */
  { name: "Node.js", group: "Backend", mono: "No", color: "#3C873A" },
  { name: "Express.js", group: "Backend", mono: "Ex", color: "#2B2B2B" },
  { name: "REST APIs", group: "Backend", mono: "RA", color: "#FF6A00" },
  { name: "Firebase Functions", group: "Backend", mono: "Fn", color: "#FFA000" },
  { name: "PostgreSQL", group: "Backend", mono: "Pg", color: "#336791" },
  { name: "MongoDB", group: "Backend", mono: "Mo", color: "#47A248" },
  { name: "SQL", group: "Backend", mono: "SQ", color: "#4479A1" },
  { name: "Firebase Firestore", group: "Backend", mono: "Fb", color: "#FFCA28" },

  /* — Cloud & Tools — */
  { name: "Git", group: "Cloud & Tools", mono: "Gt", color: "#F05032" },
  { name: "GitHub", group: "Cloud & Tools", mono: "GH", color: "#181717" },
  { name: "Postman", group: "Cloud & Tools", mono: "Pm", color: "#FF6C37" },
  { name: "VS Code", group: "Cloud & Tools", mono: "VS", color: "#0065A9" },
  { name: "Cloudinary", group: "Cloud & Tools", mono: "Cl", color: "#3448C5" },
  { name: "Firebase Hosting", group: "Cloud & Tools", mono: "FH", color: "#FFCA28" },
  { name: "AWS", group: "Cloud & Tools", mono: "AW", color: "#FF9900" },
];
