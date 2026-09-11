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
    default: "Catena | Records-to-Demand for plaintiff PI firms",
    template: "%s | Catena",
  },
  description:
    "Catena runs Records-to-Demand: records and billing operations from the first request through evidence-backed proof of demand readiness. A managed operations platform by Prime Elixir.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "Catena",
    locale: "en_US",
    url: "https://www.catenaos.com",
    title: "Catena | Records-to-Demand",
    description:
      "Records and billing operations from the first request through evidence-backed proof of demand readiness.",
    images: [
      {
        url: "/catena-social.png",
        width: 1200,
        height: 630,
        alt: "Catena. Turn on Records-to-Demand. Catena runs the lane.",
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
    <html lang="en" className={`${inter.variable} ${serif.variable}`}>
      <body>
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
