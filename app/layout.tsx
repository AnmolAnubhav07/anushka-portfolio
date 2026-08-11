import type { Metadata } from "next";
import { Inter, Instrument_Serif, Caveat } from "next/font/google";
import SmoothScroll from "@/components/layout/SmoothScroll";
import { LanguageProvider } from "@/lib/i18n";
import { SITE_URL, PERSON } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-ui",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-script",
});

const DESCRIPTION =
  "Computer Science undergraduate building and deploying full-stack web applications with React, TypeScript, Node.js and PostgreSQL/MongoDB. 1st-place winner, Hack Heritage 3.0. Based in Kolkata, India.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Anushka Kumari — Full-Stack Developer",
    template: "%s",
  },
  description: DESCRIPTION,
  openGraph: {
    title: "Anushka Kumari — Full-Stack Developer",
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: "Anushka Kumari — Portfolio",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anushka Kumari — Full-Stack Developer",
    description: DESCRIPTION,
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: PERSON.name,
  jobTitle: PERSON.jobTitle,
  email: `mailto:${PERSON.email}`,
  address: { "@type": "PostalAddress", addressLocality: "Kolkata", addressCountry: "IN" },
  url: SITE_URL,
  sameAs: PERSON.sameAs,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${instrumentSerif.variable} ${caveat.variable}`}
    >
      <body>
        <LanguageProvider>
          <SmoothScroll>{children}</SmoothScroll>
        </LanguageProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </body>
    </html>
  );
}
