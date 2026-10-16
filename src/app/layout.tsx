import type { Metadata } from "next";
import localFont from "next/font/local";
import { SiteHeader, SiteFooter } from "@/components/Site";
import "./globals.css";

const inter = localFont({
  src: "../../public/fonts/inter-latin-variable.woff2",
  variable: "--font-inter",
  display: "swap",
  weight: "400 600",
});
const serif = localFont({
  src: "../../public/fonts/source-serif-4-latin-variable.woff2",
  variable: "--font-serif",
  display: "swap",
  weight: "400 600",
});
const isPublicRelease = process.env.VERCEL_ENV === "production";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.catenaos.com"),
  title: {
    default: "Catena | Managed Pre-Lit Operations Platform for Plaintiff PI",
    template: "%s | Catena",
  },
  description:
    "Catena runs the pre-lit work. You choose the matters. Give your team relief from requests, follow-ups, billing corrections, and demand preparation while keeping matter ownership and legal judgment.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "Catena",
    locale: "en_US",
    url: "https://www.catenaos.com",
    title: "Catena | Managed Pre-Lit Operations Platform",
    description:
      "Give your team relief from pre-lit follow-through. Catena carries requests, follow-ups, corrections, and demand preparation on the matters you assign.",
    images: [
      {
        url: "/catena-social.png",
        width: 1200,
        height: 630,
        alt: "Catena — Managed Pre-Lit Operations Platform for Plaintiff PI Firms",
      },
    ],
  },
  twitter: { card: "summary_large_image" },
  robots: isPublicRelease
    ? { index: true, follow: true }
    : { index: false, follow: false },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.catenaos.com/#organization",
      name: "Catena (by Prime Elixir)",
      url: "https://www.catenaos.com",
      parentOrganization: {
        "@type": "Organization",
        name: "Prime Elixir",
        url: "https://www.primeelixirco.com/",
      },
      founder: {
        "@type": "Person",
        name: "Brian McLeod",
      },
    },
    {
      "@type": "Service",
      "@id": "https://www.catenaos.com/#service",
      name: "Catena Managed Pre-Lit Operations Platform",
      provider: { "@id": "https://www.catenaos.com/#organization" },
      serviceType: "Managed Pre-Litigation Operations for Plaintiff Personal Injury Law Firms",
      areaServed: "US",
      description:
        "Managed pre-litigation execution covering intake and case assessment, treatment and records follow-through, and qualified demand preparation for plaintiff personal injury firms.",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${serif.variable}`}
      suppressHydrationWarning
    >
      <body suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
