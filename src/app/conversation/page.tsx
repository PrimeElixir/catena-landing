import type { Metadata } from "next";
import Link from "next/link";
import { Arrow } from "@/components/Site";
import { BookingCalendar } from "@/components/BookingCalendar";
import { BOOKING_URL, CONTACT_EMAIL } from "@/lib/booking";

export const metadata: Metadata = {
  title: "Book a 15-minute conversation",
  description:
    "Discuss your firm’s pre-litigation operation, the matters and responsibilities you want Catena to carry, and how a Founding Partner engagement works.",
  alternates: { canonical: "/conversation" },
  openGraph: {
    url: "/conversation",
    title: "Book a 15-minute Catena conversation",
    description:
      "Discuss the pre-lit work you want off your team’s plate, candidate matters or routing rules, and what you would need to inspect.",
    images: [{ url: "/catena-social.png", width: 1200, height: 630 }],
  },
};

export default function Conversation() {
  return (
    <main id="main-content" tabIndex={-1} className="page-shell">
      <div className="wrap conversation-page">
        <header className="surface-card conversation-intro">
          <p className="eyebrow">
            Founding Partner &amp; Fit Conversation · Plaintiff PI
          </p>
          <h1>Book a 15-minute conversation.</h1>
          <p className="page-deck">
            Compare your current pre-lit workflow, identify candidate matters or
            30+ day stalls you want off your team’s plate, and see how a
            Founding Partner engagement works.
          </p>
          <div className="booking-facts">
            <span className="fact-pill">✓ 15 minutes · Microsoft Teams</span>
            <span className="fact-pill">
              ✓ No preparation or client files needed
            </span>
            <span className="fact-pill">
              ✓ Define a starting set or routing rule
            </span>
          </div>
        </header>

        <section
          className="surface-card booking-section"
          aria-labelledby="booking-title"
        >
          <div className="booking-header-row">
            <div>
              <h2 id="booking-title">Choose a time that works for you.</h2>
              <p className="section-note">
                Check the timezone shown in the calendar. Your confirmation
                includes the Microsoft Teams link and options to reschedule or
                cancel.
              </p>
            </div>
          </div>
          <BookingCalendar />
          <noscript>
            <style>{".booking-calendar { display: none; }"}</style>
            <p>
              Use the direct booking link below to choose a time, or email us to
              arrange a conversation.
            </p>
          </noscript>
          <div className="booking-fallback">
            <a
              className="text-link"
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Open booking in Cal.com <Arrow />
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
            <p>
              Prefer email?{" "}
              <a href={"mailto:" + CONTACT_EMAIL}>{CONTACT_EMAIL}</a>
            </p>
          </div>
          <p className="helper booking-privacy">
            Business contact information only. Please do not submit confidential
            client or matter files. Scheduling is provided by Cal.com and
            Microsoft. <Link href="/privacy">Website privacy</Link>.
          </p>
        </section>

        <aside className="surface-card conversation-next">
          <h2>What we cover in 15 minutes</h2>
          <div className="conversation-steps-grid">
            <div>
              <h3>01 · The work to take off your plate</h3>
              <p>
                Whether you want relief on records-and-bills follow-through,
                intake and case assessment, or qualified demand
                preparation—while your paralegals keep matter ownership.
              </p>
            </div>
            <div>
              <h3>02 · Your preferred assignment model</h3>
              <p>
                How to start with a bounded set of matters, an overflow or 30+
                day stall rule, or a standing caseload segment alongside your
                existing software and retrieval vendors.
              </p>
            </div>
            <div>
              <h3>03 · Founding scope &amp; written terms</h3>
              <p>
                If there is a fit, we review candidate matters with your
                operational counterpart and provide exact written scope and
                founding cost-recovery terms before any commitment.
              </p>
            </div>
          </div>
          <div className="actions">
            <Link className="text-link" href="/records-to-demand">
              Review the Records-to-Demand lane brief <Arrow />
            </Link>
            <Link className="text-link" href="/#ownership">
              See all three pre-lit responsibilities <Arrow />
            </Link>
          </div>
        </aside>
      </div>
    </main>
  );
}
