"use client";

/*
 * Centralised EN/FR store for every user-facing string on the site.
 *
 * Switching is pure React state: scroll position, the active section and all
 * pinned ScrollTriggers survive, with no reload. The choice persists in
 * localStorage and is mirrored onto <html lang> for assistive tech.
 *
 * Proper nouns (companies, products, tools, place names) are deliberately
 * NOT translated. French runs longer than English, so copy here is written
 * to fit the same layout rather than translated literally.
 */

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export type Lang = "en" | "fr";

type Entry = { en: string; fr: string };

export const DICT: Record<string, Entry> = {
  /* ---------------- nav ---------------- */
  "nav.home": { en: "Home", fr: "Accueil" },
  "nav.about": { en: "About", fr: "À propos" },
  "nav.work": { en: "Work", fr: "Projets" },
  "nav.contact": { en: "Contact", fr: "Contact" },
  "nav.menu": { en: "Open menu", fr: "Ouvrir le menu" },
  "nav.close": { en: "Close menu", fr: "Fermer le menu" },

  /* ---------------- intro ---------------- */
  "intro.scroll": { en: "Scroll to enter", fr: "Faites défiler pour entrer" },

  /* ---------------- hero ---------------- */
  "hero.kicker": {
    en: "Full-Stack Developer & CS Undergraduate",
    fr: "Full-Stack Developer & CS Undergraduate",
  },
  "hero.h1a": { en: "Products that just", fr: "Products that just" },
  "hero.h1aEm": { en: "work.", fr: "work." },
  "hero.h1b": { en: "Code that ships,", fr: "Code that ships," },
  "hero.h1bEm": { en: "reliably.", fr: "reliably." },
  "hero.sub": {
    en: "I build and deploy full-stack web applications end to end — React, TypeScript, Node.js, PostgreSQL/MongoDB — with one focus: strong DS&A fundamentals applied to production systems.",
    fr: "I build and deploy full-stack web applications end to end — React, TypeScript, Node.js, PostgreSQL/MongoDB — with one focus: strong DS&A fundamentals applied to production systems.",
  },
  "hero.cta1": { en: "View My Work", fr: "View My Work" },
  "hero.cta2": { en: "See How I Work", fr: "See How I Work" },
  "hero.scroll": { en: "Scroll to Explore", fr: "Scroll to Explore" },
  "stat.projects": { en: "Projects Shipped", fr: "Projects Shipped" },
  "stat.years": { en: "Hackathon Win", fr: "Hackathon Win" },
  "stat.countries": { en: "Teams Outranked", fr: "Teams Outranked" },
  "stat.satisfaction": { en: "Students & Startups Reached", fr: "Students & Startups Reached" },

  /* ---------------- about ---------------- */
  "about.eyebrow": { en: "About", fr: "About" },
  "about.h2a": { en: "Code is how I build —", fr: "Code is how I build —" },
  "about.h2b": { en: "systems are how I", fr: "systems are how I" },
  "about.h2Em": { en: "scale", fr: "scale" },
  "about.h2c": { en: " it.", fr: " it." },
  "about.m1": {
    en: "Hack Heritage 3.0 — Her Voice, 1st Prize",
    fr: "Hack Heritage 3.0 — Her Voice, 1st Prize",
  },
  "about.m2": {
    en: "CGPA at Heritage Institute of Technology",
    fr: "CGPA at Heritage Institute of Technology",
  },
  "about.m3": {
    en: "Students & startups reached via Spacenos",
    fr: "Students & startups reached via Spacenos",
  },
  "about.m4": {
    en: "Teams outranked to win Hack Heritage 3.0",
    fr: "Teams outranked to win Hack Heritage 3.0",
  },
  "about.edu": {
    en: "B.Tech Computer Science and Business Systems · Heritage Institute of Technology, Kolkata · 2023–2027 · CGPA 9.01/10 · DS&A · DBMS · Operating Systems · Computer Networks",
    fr: "B.Tech Computer Science and Business Systems · Heritage Institute of Technology, Kolkata · 2023–2027 · CGPA 9.01/10 · DS&A · DBMS · Operating Systems · Computer Networks",
  },
  "about.cta": { en: "Explore My Work", fr: "Explore My Work" },

  /* ---------------- journey ----------------
     Chapter copy lives in content/journey.ts; only the chrome is here. */
  "journey.eyebrow": { en: "My Journey", fr: "Mon parcours" },
  "journey.enter": { en: "Scroll to travel", fr: "Faites défiler pour avancer" },
  "journey.chapter": { en: "Chapter", fr: "Chapitre" },
  "journey.lede": {
    en: "From higher secondary in Bihar to a B.Tech in Kolkata — the chapters that turned coursework into shipped software.",
    fr: "From higher secondary in Bihar to a B.Tech in Kolkata — the chapters that turned coursework into shipped software.",
  },

  /* ---------------- design stack ---------------- */
  "stack.eyebrow": { en: "Toolkit", fr: "Toolkit" },
  "stack.h2": { en: "My Dev", fr: "My Dev" },
  "stack.h2Em": { en: "Stack.", fr: "Stack." },
  "stack.lede": {
    en: "The languages, frameworks and tools I use to build, test, ship and deploy — from the first component to production.",
    fr: "The languages, frameworks and tools I use to build, test, ship and deploy — from the first component to production.",
  },
  "stack.count": { en: "tools", fr: "tools" },
  "stack.disciplines": { en: "disciplines", fr: "disciplines" },

  /* ---------------- work ---------------- */
  "work.eyebrow": { en: "Featured Work", fr: "Featured Work" },
  "work.h2a": { en: "Selected projects,", fr: "Selected projects," },
  "work.h2b": { en: "built to", fr: "built to" },
  "work.h2Em": { en: "ship.", fr: "ship." },
  "work.lede": {
    en: "Full-stack web apps, a hackathon win and a production internship — each project a different capability, all one practice.",
    fr: "Full-stack web apps, a hackathon win and a production internship — each project a different capability, all one practice.",
  },
  "work.open": { en: "Open case study", fr: "Open case study" },
  "work.hint": { en: "SCROLL TO BROWSE", fr: "SCROLL TO BROWSE" },

  /* ---------------- experience ---------------- */
  "exp.eyebrow": { en: "Experience", fr: "Expérience" },
  "exp.h2": { en: "Where I built my", fr: "Là où j’ai forgé mon" },
  "exp.h2Em": { en: "judgment.", fr: "jugement." },
  "exp.worked": { en: "What I worked on", fr: "Ce sur quoi j’ai travaillé" },
  "exp.impact": { en: "Impact", fr: "Impact" },
  "exp.tools": { en: "Tools & skills", fr: "Outils & compétences" },
  "exp.hint": { en: "SCROLL · CLICK TO JUMP", fr: "DÉFILER · CLIQUER POUR NAVIGUER" },
  "type.Internship": { en: "Internship", fr: "Stage" },
  "type.Full-time": { en: "Full-time", fr: "Temps plein" },
  "type.Hackathon": { en: "Hackathon", fr: "Hackathon" },
  "type.Freelance": { en: "Freelance", fr: "Freelance" },

  /* ---------------- credentials ---------------- */
  "cert.introLabel": { en: "Introduction", fr: "Introduction" },
  "cert.introTitle1": { en: "VERIFIED", fr: "TITRES" },
  "cert.introTitle2": { en: "CREDENTIALS", fr: "VÉRIFIÉS" },
  "cert.introBody": {
    en: "Continuous, applied learning across AI, cloud fundamentals and enterprise technology simulations — the technical base underneath the code.",
    fr: "Continuous, applied learning across AI, cloud fundamentals and enterprise technology simulations — the technical base underneath the code.",
  },
  "cert.introNote": {
    en: "Three programmes · Intel/Skill India Digital Hub, Forage and Reliance.",
    fr: "Three programmes · Intel/Skill India Digital Hub, Forage and Reliance.",
  },
  "cert.eyebrow": { en: "Credentials", fr: "Credentials" },
  "cert.h2": { en: "Credentials", fr: "Credentials" },
  "cert.lede": {
    en: "Certifications and credentials earned throughout my computer science journey.",
    fr: "Certifications and credentials earned throughout my computer science journey.",
  },
  "cert.certified": { en: "Certified", fr: "Certified" },
  "cert.brandRole": { en: "Full-Stack Developer", fr: "Full-Stack Developer" },
  "cert.issuerTBC": { en: "Issuer — to confirm", fr: "Issuer — to confirm" },
  "cert.certification": { en: "Certification", fr: "Certification" },
  "cert.verified": { en: "✓ Verified", fr: "✓ Verified" },
  "cert.onRequest": { en: "Credential on request", fr: "Credential on request" },
  "cert.issuedBy": { en: "Issued by", fr: "Issued by" },
  "cert.year": { en: "Year", fr: "Year" },
  "cert.id": { en: "Credential ID", fr: "Credential ID" },
  "cert.tbc": { en: "To confirm", fr: "To confirm" },
  "cert.skills": { en: "Skills", fr: "Skills" },
  "cert.verify": { en: "Verify credential ↗", fr: "Verify credential ↗" },
  "cert.foot": { en: "Credentials", fr: "Credentials" },

  /* ---------------- gallery — the people behind the work ---------------- */
  "gallery.eyebrow": { en: "The Archive", fr: "L’archive" },
  "gallery.h2a": { en: "The people behind", fr: "Celles et ceux derrière" },
  "gallery.h2Em": { en: "the work", fr: "le travail" },
  "gallery.lede": {
    en: "The people, moments and experiences that shaped the work behind the screen.",
    fr: "Les personnes, les moments et les expériences qui ont façonné le travail derrière l’écran.",
  },
  "gallery.alt": {
    en: "A moment with the people behind the work",
    fr: "Un moment avec celles et ceux derrière le travail",
  },
  "gallery.frames": { en: "Frames", fr: "Images" },
  "gallery.hint": { en: "Scroll to travel the archive", fr: "Faites défiler pour parcourir l’archive" },

  /* ---------------- connect ---------------- */
  "connect.eyebrow": { en: "Let’s Connect", fr: "Let’s Connect" },
  "connect.h2a": { en: "Let’s build what’s", fr: "Let’s build what’s" },
  "connect.h2Em": { en: "next.", fr: "next." },
  "connect.lede": {
    en: "I’m open to SDE internships, new-grad roles and good conversations — if you’re building something people should use, I’d like to hear about it.",
    fr: "I’m open to SDE internships, new-grad roles and good conversations — if you’re building something people should use, I’d like to hear about it.",
  },
  "connect.cta": { en: "Start a Conversation", fr: "Start a Conversation" },
  "connect.credit": { en: "Designed & Developed by", fr: "Designed & Developed by" },
  "connect.top": { en: "Back to top ↑", fr: "Back to top ↑" },

  /* ---------------- case study (/work/[slug]) ---------------- */
  "case.back": { en: "← Back to work", fr: "← Retour aux projets" },
  "case.kicker": { en: "Case Study", fr: "Étude de cas" },
  "case.role": { en: "Role", fr: "Rôle" },
  "case.timeline": { en: "Timeline", fr: "Période" },
  "case.focus": { en: "Focus", fr: "Focus" },
  "case.site": { en: "Live product", fr: "Produit en ligne" },
  "case.repo": { en: "Source", fr: "Code source" },
  "case.cover": { en: "COVER", fr: "VISUEL" },
  "case.context": { en: "Context", fr: "Contexte" },
  "case.problem": { en: "The Problem", fr: "Le problème" },
  "case.process": { en: "Process", fr: "Démarche" },
  "case.decisions": { en: "Design Decisions", fr: "Décisions de design" },
  "case.outcome": { en: "Outcome", fr: "Résultats" },
  "case.reflection": { en: "Reflection", fr: "Ce que j’en retire" },
  "case.all": { en: "← All projects", fr: "← Tous les projets" },
  "case.next": { en: "Next project", fr: "Projet suivant" },

  /* ---------------- lab (/tunnel) ---------------- */
  "lab.back": { en: "← PORTFOLIO", fr: "← PORTFOLIO" },
  "lab.hint": {
    en: "LAB · TUNNEL TYPE — SCROLL TO TRAVEL · MOVE THE MOUSE",
    fr: "LAB · TUNNEL TYPE — FAITES DÉFILER POUR AVANCER · BOUGEZ LA SOURIS",
  },

  /* ---------------- 404 ---------------- */
  "nf.label": { en: "404 — NOT FOUND", fr: "404 — PAGE INTROUVABLE" },
  "nf.h1": { en: "This page went", fr: "Cette page a quitté" },
  "nf.h1Em": { en: "off the grid.", fr: "les radars." },
  "nf.cta": { en: "Back to the portfolio →", fr: "Retour au portfolio →" },
};

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (k: string) => string };

const LanguageContext = createContext<Ctx>({
  lang: "en",
  setLang: () => {},
  t: (k) => DICT[k]?.en ?? k,
});

/* The French toggle has been removed — this provider now always renders
   English. `lang`/`setLang`/`L()` are kept as no-ops / English-only so the
   many call sites across components/content don't need to change. */
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang] = useState<Lang>("en");

  useEffect(() => {
    document.documentElement.lang = "en";
  }, []);

  const setLang = () => {
    /* no-op — single-language site */
  };

  const t = (k: string) => DICT[k]?.en ?? k;

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLang = () => useContext(LanguageContext);

/** Pick a translated field off a content record: `L(lang, item, "summary")`
 *  returns `item.fr.summary` when available, else the English original. */
export function L<T extends { fr?: Record<string, unknown> }>(
  lang: Lang,
  item: T,
  field: keyof T & string
): string {
  if (lang === "fr" && item.fr && typeof item.fr[field] === "string") {
    return item.fr[field] as string;
  }
  return item[field] as unknown as string;
}
