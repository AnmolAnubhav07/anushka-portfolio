/* Credentials — professional certification records, from Anushka's resume.
 *
 * Every entry below has a verified credential URL (a Google Drive copy of
 * the certificate), so `verified` is true and `credentialId` stays null —
 * no ID was supplied, and inventing one would be a false credential claim.
 * Years were not supplied either and are left null, rendering as
 * "To confirm" rather than being guessed.
 *
 * The fourth entry is not a course certificate — it's the Hack Heritage 3.0
 * hackathon win. It's folded in here (rather than a separate Achievements
 * section, which this site doesn't have) because it also has a verified
 * certificate link and fits the same "credential record" format.
 *
 * `fr` is unused now that the French toggle has been removed, but the field
 * stays on the type since it's still declared here for shape-compatibility. */

export type Cert = {
  no: string; /* deck-style section number */
  issuer: string | null;
  logo?: { src: string; aspect: number };
  title: string;
  year: string | null;
  credentialId: string | null;
  credentialUrl?: string;
  verified: boolean;
  skills: string[];
  metric?: { value: string; label: string };
  fr?: { title?: string; skills?: string[]; metricLabel?: string };
};

export const CERTS: Cert[] = [
  {
    no: "2.1",
    issuer: "Intel / Skill India Digital Hub",
    title: "AI for Entrepreneurship",
    year: null,
    credentialId: null,
    credentialUrl: "https://drive.google.com/file/d/1RvSP-kIS9jRGtoswmNWk2qOxj7mqMscD/view?usp=drive_link",
    verified: true,
    skills: [
      "Applied AI concepts for business use cases",
      "Opportunity framing & venture thinking",
    ],
    metric: { value: "AI", label: "Applied entrepreneurship" },
  },
  {
    no: "2.2",
    issuer: "Deloitte (via Forage)",
    title: "Technology Job Simulation",
    year: null,
    credentialId: null,
    credentialUrl: "https://drive.google.com/file/d/1HuL3KRdfsXPiUbU__xz1026xu6YsmfSw/view?usp=drive_link",
    verified: true,
    skills: [
      "Simulated real technology-consulting tasks",
      "Client-facing technical problem solving",
    ],
    metric: { value: "Forage", label: "Job simulation" },
  },
  {
    no: "2.3",
    issuer: "Reliance",
    title: "Python Programming",
    year: null,
    credentialId: null,
    credentialUrl: "https://drive.google.com/file/d/1uifF_bHJbOPv7UdDiBVZN3o92UQUa_tm/view?usp=drive_link",
    verified: true,
    skills: ["Core Python fundamentals", "Programming logic & syntax"],
    metric: { value: "Python", label: "Programming certificate" },
  },
  {
    no: "2.4",
    issuer: "Hack Heritage 3.0",
    title: "1st Prize — Her Voice, among 300 teams",
    year: "2025",
    credentialId: null,
    credentialUrl: "https://drive.google.com/file/d/1UJduaj3CWvmliX5NF4Pe6GnW_2q87rVE/view?usp=drive_link",
    verified: true,
    skills: ["Team leadership (team of 4)", "Firebase Realtime Database", "Rapid prototyping under a deadline"],
    metric: { value: "🏆 1st", label: "Among 300 teams" },
  },
];
