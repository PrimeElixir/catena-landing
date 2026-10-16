import type { Metadata } from "next";
import Link from "next/link";
import { Arrow } from "@/components/Site";
import { BookingCalendar } from "@/components/BookingCalendar";
import { BOOKING_URL, CONTACT_EMAIL } from "@/lib/booking";

export const metadata: Metadata = {
  title: "Book a 15-minute fit call",
  description:
    "Discuss your firm’s pre-litigation operation, a starting group of 10–25 matters, and how a Founding Partner engagement works.",
  alternates: { canonical: "/conversation" },
  openGraph: {
    url: "/conversation",
    title: "Book a 15-minute Catena fit call",
    description:
      "Discuss the pre-lit work you want off your team’s plate, candidate matters, and written starting terms.",
    images: [{ url: "/catena-social.png", width: 1200, height: 630 }],
  },
};

export default function Conversation() {
  return (
    <main id="main-content" tabIndex={-1} className="page-shell">
      <div className="wrap conversation-page">
        <header className="surface-card conversation-intro-compact">
          <div className="conversation-top-split">
            <div>
              <p className="eyebrow">
                Founding Partner &amp; Fit Call · Plaintiff PI
              </p>
              <h1>Book a 15-minute fit call.</h1>
              <p className="page-deck">
                Meet with <strong>Brian McLeod</strong> (Founder of Prime Elixir
                &amp; Creator of CatenaOS) to review which pre-lit matters or
                responsibilities you want off your team’s plate and whether a
                selected starting group fits your practice.
              </p>
            </div>
            <div className="conversation-direct-box">
              <span className="direct-box-kicker">Direct Booking Option</span>
              <a
                className="button"
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Open scheduler in Cal.com <Arrow />
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
              <p className="direct-box-sub">
                Or email directly:{" "}
                <a href={"mailto:" + CONTACT_EMAIL}>{CONTACT_EMAIL}</a>
              </p>
            </div>
          </div>

          <div className="booking-facts">
            <span className="fact-pill">✓ 15 minutes · Microsoft Teams</span>
            <span className="fact-pill">
              ✓ No preparation or client files needed
            </span>
            <span className="fact-pill">
              ✓ Leave with clear eligibility &amp; pricing answers
            </span>
          </div>
        </header>

        <section
          className="surface-card booking-section"
          aria-labelledby="booking-title"
        >
          <div className="booking-header-row">
            <div>
              <h2 id="booking-title">Choose a time below.</h2>
              <p className="section-note">
                Confirm the timezone displayed in the calendar. Your invite
                includes a Microsoft Teams link plus one-click reschedule or
                cancel options.
              </p>
            </div>
          </div>
          <BookingCalendar />
          <noscript>
            <style>{".booking-calendar { display: none; }"}</style>
            <p>
              Use the direct booking link above to choose a time, or email us to
              arrange a conversation.
            </p>
          </noscript>
          <p className="helper booking-privacy">
            Business contact information only. Please do not submit confidential
            client or matter files. Scheduling is provided by Cal.com and
            Microsoft. <Link href="/privacy">Website privacy</Link> ·{" "}
            <Link href="/security">Security &amp; data handling</Link>.
          </p>
        </section>

        <aside className="surface-card conversation-next">
          <h2>What you will know after 15 minutes</h2>
          <div className="conversation-steps-grid">
            <div>
              <h3>01 · Which matters fit a starting group</h3>
              <p>
                We identify 10–25 candidate pre-lit matters (such as stalled
                records chases or incoming auto BI files) that can be assigned
                without changing your paralegals’ matter ownership.
              </p>
            </div>
            <div>
              <h3>02 · How Catena works alongside your stack</h3>
              <p>
                We walk through how Catena connects with your CMS (Clio,
                Filevine, CASEpeer) and either coordinates your incumbent
                retrieval vendor or manages a supplier directly.
              </p>
            </div>
            <div>
              <h3>03 · Exact written scope &amp; cost estimate</h3>
              <p>
                If there is a mutual fit, we follow up with a written starting
                scope, per-matter operating charge, cost ceiling, and handover
                terms for your review before any commitment.
              </p>
            </div>
          </div>
          <div className="actions">
            <Link className="text-link" href="/records-to-demand">
              Inspect the Records-to-Demand lane brief <Arrow />
            </Link>
            <Link className="text-link" href="/security">
              Review security &amp; data handling <Arrow />
            </Link>
          </div>
        </aside>
      </div>
    </main>
  );
}
