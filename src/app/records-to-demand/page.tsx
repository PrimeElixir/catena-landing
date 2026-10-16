import type { Metadata } from "next";
import Link from "next/link";
import { Arrow, OperatingModelFilm } from "@/components/Site";
import { PrintBrief } from "@/components/PrintBrief";
import { BOOKING_URL, CONTACT_EMAIL } from "@/lib/booking";

export const metadata: Metadata = {
  title: "Records-to-Demand: Operating Proof & Lane Brief",
  description:
    "How Catena executes treatment and records follow-through, resolves billing deficiencies, establishes evidence-backed demand readiness, and prepares demands for firm review.",
  alternates: { canonical: "/records-to-demand" },
  openGraph: {
    url: "/records-to-demand",
    title: "Records-to-Demand: Operating Proof & Lane Brief | Catena",
    description:
      "The foundational operating lane within Catena’s Managed Pre-Lit Operations Platform.",
    images: [{ url: "/catena-social.png", width: 1200, height: 630 }],
  },
};

const scope = [
  {
    step: "01",
    title: "Maintain requirements across the matter",
    hook: "Dynamic provider, date-range & billing tracking",
    text: "Establish required records, itemized bills, and treatment periods under your firm’s policy. Update requirements dynamically as new providers or treatment dates are identified.",
  },
  {
    step: "02",
    title: "Execute requests and persistent follow-through",
    hook: "Run through your retrieval vendor or a Catena supplier",
    text: "Send authorized requests through your existing retrieval vendor or a Catena-managed supplier, track provider waits, and pursue outstanding returns without requiring your paralegals to chase status.",
  },
  {
    step: "03",
    title: "Verify returns and resolve deficiencies",
    hook: "Catch bare balance summaries & missing CPT codes",
    text: "Evaluate every returned document against matter requirements. Catch missing date ranges, incomplete pages, and bare balance summaries lacking CPT line items; initiate and verify corrections.",
  },
  {
    step: "04",
    title: "Establish evidence-backed readiness",
    hook: "Link verified source pages to readiness state",
    text: "Verify when governing criteria are satisfied, link the supporting evidence to the readiness state, and automatically reopen readiness if new treatment or conflicting information arrives.",
  },
  {
    step: "05",
    title: "Prepare qualified demand package",
    hook: "Assemble chronology, specials & demand draft for review",
    text: "Assemble verified records, itemized specials, and a substantive demand draft for attorney review—making any open issues or reserved decisions explicit.",
  },
];

export default function LaneBrief() {
  return (
    <main id="main-content" tabIndex={-1} className="page-shell">
      <div className="wrap lane-brief">
        {/* TOP SPLIT HERO: 3-Second Sell + 42s Video Walkthrough */}
        <header className="brief-hero-grid surface-card">
          <div className="brief-hero-copy">
            <p className="eyebrow">
              Foundational Operating Lane · Printable Brief
            </p>
            <h1>Records-to-Demand</h1>
            <p className="page-deck">
              The foundational proof and delivery lane within Catena’s Managed
              Pre-Lit Operations Platform—carrying treatment and records
              follow-through from first request to a verified demand package.
            </p>
            <ul className="hero-quick-points">
              <li>
                <span className="qp-icon" aria-hidden="true">✓</span>
                <span>
                  <strong>Provider &amp; CPT billing audit</strong> — Rejects
                  bare balance summaries and chases itemized ledgers
                </span>
              </li>
              <li>
                <span className="qp-icon" aria-hidden="true">✓</span>
                <span>
                  <strong>Zero vendor rip-and-replace</strong> — Coordinates
                  with your retrieval vendor or a Catena supplier
                </span>
              </li>
              <li>
                <span className="qp-icon" aria-hidden="true">✓</span>
                <span>
                  <strong>Demand staged for review</strong> — Verified
                  chronology, specials, and draft ready for attorney authority
                </span>
              </li>
            </ul>
            <div className="actions">
              <Link className="button" href="/conversation">
                Book a 15-minute conversation <Arrow />
              </Link>
              <PrintBrief />
              <Link className="text-link" href="/#assignment">
                Explore assignment modes <Arrow />
              </Link>
            </div>
          </div>

          <div className="brief-hero-media">
            <OperatingModelFilm />
          </div>
        </header>

        <nav className="brief-nav" aria-label="Lane brief sections">
          <a href="#scope">01 · Operating Scope</a>
          <a href="#readiness">02 · Inspectable Evidence</a>
          <a href="#authority">03 · Firm Authority</a>
          <a href="#evaluation">04 · Founding Onboarding</a>
          <a href="#resources">05 · Buyer Checklists</a>
        </nav>

        <section className="surface-card brief-section" id="scope">
          <div className="section-header-compact">
            <div>
              <p className="eyebrow">01 · End-to-End Execution</p>
              <h2>Five stages from assignment to demand ready.</h2>
            </div>
            <p className="section-lead">
              Start with a selected group of 10–25 eligible matters, or expand
              to a standing 30+ day stall rule. Click any stage to inspect the
              operational work Catena carries:
            </p>
          </div>

          <div className="brief-accordion-grid">
            {scope.map((item, idx) => (
              <details
                key={item.step}
                className="faq-item"
                open={idx === 0 || idx === 2}
              >
                <summary>
                  <div className="faq-summary-text">
                    <strong>
                      {item.step} · {item.title}
                    </strong>
                    <span>{item.hook}</span>
                  </div>
                  <span className="accordion-icon" aria-hidden="true">
                    +
                  </span>
                </summary>
                <div className="faq-answer">
                  <p>{item.text}</p>
                </div>
              </details>
            ))}
          </div>
        </section>

        <section className="surface-card brief-section" id="readiness">
          <div className="section-header-compact">
            <div>
              <p className="eyebrow">02 · State &amp; Evidence Discipline</p>
              <h2>Inspect the evidence behind every state change.</h2>
            </div>
            <p className="section-lead">
              A document arriving in a folder does not mean a requirement is
              satisfied. CatenaOS shows what is required, what is verified, and
              what blocks readiness—separating external provider waiting time
              from Catena verification and preparation time.
            </p>
          </div>

          <div className="evidence-pair">
            <div className="evidence-card">
              <span className="evidence-pill evidence-pill-warn">
                State · Not Ready
              </span>
              <h3>When a matter is still in progress</h3>
              <ul>
                <li>
                  <strong>Exact gap identified:</strong> Which provider, date
                  range, or CPT billing correction is outstanding.
                </li>
                <li>
                  <strong>Next-action owner:</strong> What follow-up Catena is
                  executing and when the next check occurs.
                </li>
                <li>
                  <strong>Clear routing distinction:</strong> Whether the file
                  waits on a provider return or a reserved firm decision.
                </li>
              </ul>
            </div>
            <div className="evidence-card evidence-card-ready">
              <span className="evidence-pill evidence-pill-ready">
                State · Demand Ready
              </span>
              <h3>When a matter reaches readiness</h3>
              <ul>
                <li>
                  <strong>Linked source evidence:</strong> Which verified
                  records and itemized bills satisfy governing criteria.
                </li>
                <li>
                  <strong>Recorded firm approvals:</strong> Which cutoff choices
                  or deficiency waivers are logged in the record.
                </li>
                <li>
                  <strong>Automatic reopening guard:</strong> How supplemental
                  treatment automatically reopens state before dispatch.
                </li>
              </ul>
            </div>
          </div>

          <details className="brief-example">
            <summary>
              <span>
                Inspect illustrative walkthrough: Billing deficiency + August
                MRI referral (Synthetic data)
              </span>
              <span className="accordion-icon" aria-hidden="true">
                +
              </span>
            </summary>
            <div className="brief-example-body">
              <p>
                <strong>1. Catching the deficiency:</strong> Under the firm’s
                criteria, an orthopedic provider requires both complete clinical
                notes and an itemized billing ledger through July 31. The
                provider returns clinical records alongside a bare balance
                summary with no service dates or CPT codes. Catena flags the
                billing return as deficient, requests an itemized ledger from
                the billing office, and verifies the corrected return matching
                patient, provider, dates, and charges.
              </p>
              <p>
                <strong>2. Handling new treatment mid-stream:</strong> While the
                billing correction is completed, a follow-up note reveals a
                subsequent August MRI referral. Even though the July 31 bill is
                now satisfied, Catena keeps the matter in a non-ready state and
                routes the cutoff decision—with supporting records attached—to
                the firm’s designated reviewer.
              </p>
            </div>
          </details>
        </section>

        <section className="surface-card brief-section" id="authority">
          <div className="section-header-compact">
            <div>
              <p className="eyebrow">03 · Governance &amp; Ownership</p>
              <h2>Your firm keeps legal judgment and final authority.</h2>
            </div>
            <p className="section-lead">
              Every engagement defines a clean boundary between delegated
              operational execution and your firm’s reserved professional
              decisions.
            </p>
          </div>

          <div className="evidence-pair">
            <div className="evidence-card">
              <span className="evidence-pill">Delegated to Catena</span>
              <h3>What Catena carries on assigned matters</h3>
              <ul>
                <li>
                  <strong>Requirements &amp; chasing:</strong> Maintaining
                  requirements, sending requests, and persistent provider
                  follow-through.
                </li>
                <li>
                  <strong>Verification &amp; corrections:</strong> Return
                  audits, gap reconciliation, and billing deficiency resolution.
                </li>
                <li>
                  <strong>Readiness &amp; staging:</strong> Evidence-backed
                  readiness evaluation and demand preparation for your review.
                </li>
              </ul>
            </div>
            <div className="evidence-card">
              <span className="evidence-pill evidence-pill-firm">
                Reserved to Your Firm
              </span>
              <h3>What always remains with your firm</h3>
              <ul>
                <li>
                  <strong>Client &amp; legal counsel:</strong> Client
                  relationships, legal advice, and treatment-related legal
                  judgment.
                </li>
                <li>
                  <strong>Cutoffs &amp; waivers:</strong> Treatment cutoff
                  decisions, deficiency waivers, and reserved approvals.
                </li>
                <li>
                  <strong>Valuation &amp; settlement:</strong> Demand valuation,
                  final edits, approval, sending, negotiation, and settlement.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="surface-card brief-section" id="evaluation">
          <span id="fit" className="anchor-alias" />
          <span id="start" className="anchor-alias" />
          <div className="section-header-compact">
            <div>
              <p className="eyebrow">04 · Founding Partner Onboarding &amp; Economics</p>
              <h2>Start with a selected group of 10–25 matters.</h2>
            </div>
            <p className="section-lead">
              Evaluate Catena on real pre-lit work alongside your named
              operational counterpart under transparent, bounded commercial
              terms before expanding to a standing rule.
            </p>
          </div>

          <div className="evidence-pair">
            <div className="evidence-card">
              <h3>Step 01 · Scope, Stack &amp; Plain Economics</h3>
              <ul>
                <li>
                  <strong>Select initial matters:</strong> Choose a defined
                  starting group of 10–25 eligible files (or set a 30+ day stall
                  rule).
                </li>
                <li>
                  <strong>Connect existing stack:</strong> Confirm CMS/folder
                  access, retrieval vendor or Catena supplier mode, and firm
                  decision owners.
                </li>
                <li>
                  <strong>Plain-language pricing:</strong> Agreed per-matter
                  operating charge (cost recovery) + pass-through provider fees
                  at cost + fixed monthly founding program fee.{" "}
                  <strong>No per-seat software subscription</strong> and a
                  written pre-approved cost ceiling.
                </li>
              </ul>
            </div>
            <div className="evidence-card">
              <h3>Step 02 · Calibration, Review &amp; Handover</h3>
              <ul>
                <li>
                  <strong>Side-by-side calibration:</strong> Verify initial
                  readiness and demand preparation states with your named
                  operational lead.
                </li>
                <li>
                  <strong>Live visibility:</strong> Track status, linked
                  evidence, and next-step ownership in CatenaOS without logging
                  into a separate billing portal.
                </li>
                <li>
                  <strong>No lock-in:</strong> Keep a selective starting group,
                  expand to standing rules, or conclude at the end of any
                  monthly cycle with complete structured handover.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="surface-card brief-section" id="resources">
          <div className="section-header-compact">
            <div>
              <p className="eyebrow">05 · Practical Buyer Resources &amp; Checklists</p>
              <h2>Inspection frameworks for plaintiff PI operations.</h2>
            </div>
            <p className="section-lead">
              Use these three operational checklists internally to audit demand
              readiness, diagnose stalled records queues, or evaluate any
              delegated pre-lit partner.
            </p>
          </div>

          <div className="brief-accordion-grid">
            <details className="faq-item" open>
              <summary>
                <div className="faq-summary-text">
                  <strong>01 · Demand-Readiness Verification Checklist</strong>
                  <span>
                    How to verify that a matter is genuinely ready for attorney
                    valuation—not merely &ldquo;documents received&rdquo;
                  </span>
                </div>
                <span className="accordion-icon" aria-hidden="true">
                  +
                </span>
              </summary>
              <div className="faq-answer">
                <ul>
                  <li>
                    <strong>Provider &amp; facility match:</strong> Every known
                    treating provider, imaging center, ER, EMS, and specialist
                    referenced inside intake or clinical notes has an explicit
                    requirement entry.
                  </li>
                  <li>
                    <strong>Date-range continuity:</strong> Returned clinical
                    notes cover the full authorized treatment window without
                    unexplained gaps between initial evaluation and discharge or
                    cutoff.
                  </li>
                  <li>
                    <strong>Itemized CPT / HCPCS billing verification:</strong>{" "}
                    Every billing return includes line-item service dates,
                    procedure codes, and charges—rejecting bare balance-forward
                    statements.
                  </li>
                  <li>
                    <strong>Mid-stream referral check:</strong> Recent progress
                    notes are audited for pending specialist or imaging
                    referrals so demands are not drafted prematurely unless the
                    firm explicitly approves a treatment cutoff.
                  </li>
                </ul>
              </div>
            </details>

            <details className="faq-item">
              <summary>
                <div className="faq-summary-text">
                  <strong>
                    02 · Guide to Diagnosing Stalled Records &amp; Billing Work
                  </strong>
                  <span>
                    Why pre-lit files stall past 30 days and how to separate
                    external provider delay from internal follow-through gaps
                  </span>
                </div>
                <span className="accordion-icon" aria-hidden="true">
                  +
                </span>
              </summary>
              <div className="faq-answer">
                <ul>
                  <li>
                    <strong>Silent authorization rejections:</strong> Providers
                    or copy services frequently hold requests due to expired
                    HIPAA dates, missing facility-specific forms, or unapproved
                    prepayment invoices without notifying the paralegal queue.
                  </li>
                  <li>
                    <strong>Split clinical &amp; billing departments:</strong>{" "}
                    Medical records and itemized billing ledgers often route to
                    separate departments or third-party billing vendors; closing
                    a request upon the first PDF return leaves billing missing.
                  </li>
                  <li>
                    <strong>Uninspected returns sitting in folders:</strong>{" "}
                    Measuring time between PDF receipt and page-level audit
                    reveals whether delays come from slow providers or overloaded
                    internal staff unable to review incoming files promptly.
                  </li>
                </ul>
              </div>
            </details>

            <details className="faq-item">
              <summary>
                <div className="faq-summary-text">
                  <strong>
                    03 · How to Evaluate Delegated Pre-Lit Operations
                  </strong>
                  <span>
                    Questions every plaintiff PI firm should ask before routing
                    live matters to an external execution partner
                  </span>
                </div>
                <span className="accordion-icon" aria-hidden="true">
                  +
                </span>
              </summary>
              <div className="faq-answer">
                <ul>
                  <li>
                    <strong>Can we start with a bounded cohort?</strong> Can the
                    firm assign 10–25 matters first without replacing its CMS,
                    retrieval vendor, or internal staff?
                  </li>
                  <li>
                    <strong>Who catches and fixes deficiencies?</strong> When a
                    provider sends a bare balance summary, does the vendor hand
                    the problem back to your paralegal or pursue the billing
                    office directly?
                  </li>
                  <li>
                    <strong>How are legal decisions protected?</strong> Are
                    treatment cutoffs, deficiency waivers, and valuation choices
                    explicitly routed back to your firm with linked source pages?
                  </li>
                  <li>
                    <strong>What happens on exit or handover?</strong> Does every
                    verified record, status log, and draft live inside your
                    firm’s systems with a clean monthly walk-away option?
                  </li>
                </ul>
              </div>
            </details>
          </div>

          <div className="actions" style={{ marginTop: "24px" }}>
            <Link className="button" href="/conversation">
              Book a 15-minute fit call <Arrow />
            </Link>
            <Link className="text-link" href="/security">
              Inspect security &amp; data governance <Arrow />
            </Link>
            <Link className="text-link" href="/">
              Back to Catena overview <Arrow />
            </Link>
          </div>

          <div className="print-contact">
            <p>
              Book a 15-minute fit call:{" "}
              <a href={BOOKING_URL}>{BOOKING_URL}</a>
            </p>
            <p>
              Contact Catena:{" "}
              <a href={"mailto:" + CONTACT_EMAIL}>{CONTACT_EMAIL}</a>
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
