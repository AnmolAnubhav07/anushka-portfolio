/* Single source of truth for site-wide constants.
   Set NEXT_PUBLIC_SITE_URL in Vercel once the domain exists —
   everything (sitemap, robots, OG, JSON-LD) follows automatically. */

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const PERSON = {
  name: "Anushka Kumari",
  jobTitle: "Full-Stack Developer",
  email: "anushkalaheri@gmail.com",
  phone: "+91 9798716135",
  location: "Kolkata, India",
  /* exact profile URLs as supplied — also consumed by JSON-LD */
  sameAs: ["https://www.linkedin.com/in/anushka-l-00b7a5249", "https://github.com/AnushkaLaheri"],
};
