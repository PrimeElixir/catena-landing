import type { Metadata } from "next";
import Link from "next/link";
import { Arrow } from "@/components/Site";
import { BookingCalendar } from "@/components/BookingCalendar";
import { BOOKING_URL, CONTACT_EMAIL } from "@/lib/booking";

export const metadata: Metadata = {
  title: "Book a 15-minute conversation",
  description: "Choose a time to discuss your firm’s records and billing operation and whether Catena fits. No preparation or client files needed.",
  alternates: { canonical: "/conversation" },
  openGraph: {
    url: "/conversation",
    title: "Book a 15-minute Catena conversation",
    description: "Discuss your operation, the work you want Catena to carry, and what you would need to inspect.",
    images: [{ url: "/catena-social.png", width: 1200, height: 630 }],
  },
};

export default function Conversation() {
  return (
    <main id="main-content" tabIndex={-1} className="wrap conversation-page">
      <header className="page-hero conversation-intro">
        <p className="eyebrow">Records-to-Demand at your firm</p>
        <h1>Book a 15-minute conversation.</h1>
        <p className="page-deck">Discuss your current records and billing process, the work you want Catena to carry, and what you would need to inspect.</p>
        <p className="booking-facts"><strong>15 minutes · Microsoft Teams</strong><span>No preparation or client files needed.</span></p>
      </header>
      <section className="booking-section" aria-labelledby="booking-title">
        <h2 id="booking-title">Choose a time that works for you.</h2>
        <p className="section-note">Check the timezone shown in the calendar. Your confirmation includes the meeting link and options to reschedule or cancel.</p>
        <BookingCalendar />
        <noscript><style>{".booking-calendar { display: none; }"}</style><p>Use the direct booking link below to choose a time, or email us to arrange a conversation.</p></noscript>
        <div className="booking-fallback">
          <a className="text-link" href={BOOKING_URL} target="_blank" rel="noopener noreferrer">Open booking in Cal.com <Arrow /><span className="sr-only"> (opens in a new tab)</span></a>
          <p>Prefer email? <a href={"mailto:" + CONTACT_EMAIL}>{CONTACT_EMAIL}</a></p>
        </div>
        <p className="helper booking-privacy">Business contact information only. Scheduling is provided by Cal.com and Microsoft. <Link href="/privacy">Website privacy</Link>.</p>
      </section>
      <aside className="conversation-next">
        <h2>What happens next?</h2>
        <p>If there is a fit, we scope the work and review the evidence, access, and operating conditions together. Live work starts only after onboarding and separate go-live approval.</p>
        <Link className="text-link" href="/records-to-demand">Review the scope and evaluation process <Arrow /></Link>
      </aside>
    </main>
  );
}
