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
    "Catena runs the pre-lit work. You choose the matters. From intake and case assessment through treatment and records follow-through to demand preparation, your firm keeps legal judgment and final authority.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "Catena",
    locale: "en_US",
    url: "https://www.catenaos.com",
    title: "Catena | Managed Pre-Lit Operations Platform",
    description:
      "Catena runs the pre-lit work you entrust to us—from intake and case assessment through treatment and records follow-through to qualified demand preparation.",
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
