import type { Metadata } from "next";
import Link from "next/link";
import { Arrow } from "@/components/Site";
import { PrintBrief } from "@/components/PrintBrief";
import { BOOKING_URL, CONTACT_EMAIL } from "@/lib/booking";

export const metadata: Metadata = {
  title: "Records-to-Demand: scope and evidence",
  description:
    "The records and billing operation Catena runs, the evidence behind demand readiness, and the decisions your firm retains.",
  alternates: { canonical: "/records-to-demand" },
  openGraph: {
    url: "/records-to-demand",
    title: "Records-to-Demand: scope and evidence",
    images: [{ url: "/catena-social.png", width: 1200, height: 630 }],
  },
};

const scope = [
  [
    "Maintain requirements",
    "Establish required records, bills, and treatment periods under your firm’s policy. Keep requirements current as the matter changes.",
  ],
  [
    "Run requests and follow-ups",
    "Send authorized requests, pursue outstanding returns, and work through delays.",
  ],
  [
    "Verify and resolve",
    "Check returned material against requirements. Resolve missing dates, incomplete information, and billing corrections. Bring professional decisions to the firm with context.",
  ],
  [
    "Establish readiness",
    "Determine whether governing criteria are satisfied. Explain the supporting evidence and reopen readiness when new information changes the answer.",
  ],
];

export default function LaneBrief() {
  return (
    <main id="main-content" tabIndex={-1} className="wrap lane-brief">
      <header className="page-hero">
        <p className="eyebrow">The lane brief</p>
        <h1>Records-to-Demand</h1>
        <p className="page-deck">
          The records and billing operation Catena runs, the evidence behind
          demand readiness, and the decisions your firm retains.
        </p>
        <div className="actions">
          <Link className="button" href="/conversation">
            Book a 15-minute conversation <Arrow />
          </Link>
          <PrintBrief />
        </div>
      </header>
      <nav className="brief-nav" aria-label="Lane brief sections">
        <a href="#scope">Scope</a>
        <a href="#readiness">Evidence</a>
        <a href="#authority">Your firm</a>
        <a href="#evaluation">Evaluation</a>
      </nav>
      <section className="brief-section" id="scope">
        <h2>From first request through readiness.</h2>
        <ol className="scope-list">
          {scope.map(([title, text], index) => (
            <li key={title}>
              <span className="row-number" aria-hidden="true">
                0{index + 1}
              </span>
              <h3>{title}</h3>
              <p>{text}</p>
            </li>
          ))}
        </ol>
      </section>
      <section className="brief-section" id="readiness">
        <h2>Inspect the reason behind the result.</h2>
        <div className="evidence-pair">
          <div>
            <h3>When the file is not ready</h3>
            <ul>
              <li>What still prevents readiness?</li>
              <li>What is Catena doing next?</li>
              <li>What decision does your firm need to make?</li>
            </ul>
          </div>
          <div>
            <h3>When the file is Demand Ready</h3>
            <ul>
              <li>Which criteria and evidence support readiness?</li>
              <li>Which firm decisions are part of the result?</li>
              <li>What new information could reopen readiness?</li>
            </ul>
          </div>
        </div>
        <p className="helper">
          These are evaluation questions to inspect in a product conversation.
        </p>
        <details className="brief-example">
          <summary>Example: correcting a bill within the operation</summary>
          <p>
            An itemized bill through July 31 is required. A balance summary
            arrives without dated charges. Catena requests an authorized
            correction and checks the person, provider, dates, and charges. The
            corrected bill has dated line items through July 31, matching the
            person and provider.
          </p>
          <p>
            <strong>
              Bill requirement satisfied. File still not Demand Ready.
            </strong>{" "}
            Later treatment still needs the firm’s cutoff decision and fresh
            records-and-bills checks. New evidence can reopen readiness.
          </p>
          <p className="helper">
            Constructed illustration, not product output.
          </p>
        </details>
      </section>
      <section className="brief-section" id="authority">
        <h2>The firm owns the demand.</h2>
        <p className="page-deck">
          Your firm retains policy, client relationships, legal and medical
          judgment, case strategy, unusual waivers, demand drafting, settlement,
          and professional responsibility.
        </p>
        <p className="section-note">
          Catena brings decisions requiring your authority with supporting
          context. Agreed reviews and approvals remain part of the operation.
        </p>
      </section>
      <section className="brief-section" id="evaluation">
        <span id="fit" className="anchor-alias" />
        <span id="start" className="anchor-alias" />
        <h2>Evaluate the work before live delivery.</h2>
        <div className="evidence-pair">
          <div>
            <h3>Inspect and agree</h3>
            <ul>
              <li>Scope, readiness criteria, and supporting evidence.</li>
              <li>
                Systems, vendors, compatibility, authorized access, and data
                handling.
              </li>
              <li>Firm responsibilities and commercial terms.</li>
            </ul>
          </div>
          <div>
            <h3>Calibrate and start</h3>
            <ul>
              <li>Initial full review of readiness decisions.</li>
              <li>
                Reduced routine re-review only after calibration and firm
                agreement.
              </li>
              <li>Return to full review after a material failure.</li>
              <li>Onboarding and separate go-live approval.</li>
            </ul>
          </div>
        </div>
        <p className="helper">
          For plaintiff PI firms with a steady flow of pre-suit matters and an
          accountable person overseeing readiness. Confirm fit and operating
          conditions together before starting.
        </p>
        <div className="actions">
          <Link className="button" href="/conversation">
            Book a 15-minute conversation <Arrow />
          </Link>
          <Link className="text-link" href="/">
            Back to Catena <Arrow />
          </Link>
        </div>
        <div className="print-contact">
          <p>
            Book a 15-minute conversation:{" "}
            <a href={BOOKING_URL}>{BOOKING_URL}</a>
          </p>
          <p>
            Contact Catena:{" "}
            <a href={"mailto:" + CONTACT_EMAIL}>{CONTACT_EMAIL}</a>
          </p>
        </div>
      </section>
    </main>
  );
}
