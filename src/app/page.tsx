import Link from "next/link";
import {
  Arrow,
  OperatingModelFilm,
  OperatingModelLedger,
} from "@/components/Site";
import { InspectableDeliverableShowcase } from "@/components/InteractivePlatformShowcase";

const responsibilities = [
  {
    lane: "01",
    statusTag: "Available in Founding Scope",
    title: "Intake and case assessment",
    intendedBenefit:
      "Intended benefit: Faster acceptance decisions without pulling paralegals off active files to chase crash reports and coverage.",
    catenaWork:
      "Collect and verify required intake facts, crash reports, and insurance disclosures; carry authorized follow-ups; prepare a substantive case assessment memo.",
    deliverable:
      "Intake Assessment Memo with verified liability facts, coverage disclosures, and initial treatment summary.",
    reservedDecisions:
      "Final matter acceptance or declination, fee agreement terms, legal advice, and the client relationship.",
  },
  {
    lane: "02",
    statusTag: "Foundational Lane · Available Now",
    title: "Treatment and records follow-through",
    intendedBenefit:
      "Intended benefit: Less staff time spent chasing provider status and billing offices; clear separation of provider wait time vs. execution time.",
    catenaWork:
      "Maintain provider and date-range requirements; send authorized requests via your retrieval vendor or a Catena supplier; audit returns; resolve bare balance summaries and missing CPT codes.",
    deliverable:
      "Records & Billing Readiness Packet with source-linked clinical notes, verified CPT/UB-04 ledgers, and deficiency logs.",
    reservedDecisions:
      "Treatment-related legal judgment, cutoff decisions, deficiency waivers, and patient/clinician medical autonomy.",
    link: {
      href: "/records-to-demand",
      label: "Read the Records-to-Demand lane brief & checklists",
    },
  },
  {
    lane: "03",
    statusTag: "Available in Founding Scope",
    title: "Qualified demand preparation",
    intendedBenefit:
      "Intended benefit: Fewer incomplete files reaching attorney review and faster turnaround from satisfied requirements to a staged demand.",
    catenaWork:
      "Assemble the chronological medical narrative, reconcile itemized specials dollar-for-dollar against verified bills, and prepare the demand draft in your firm’s format with any open issues flagged.",
    deliverable:
      "Staged Demand Package with cited medical chronology, reconciled specials table, organized exhibits, and draft demand.",
    reservedDecisions:
      "Legal positions, case valuation, final demand edits, approval, sending, negotiation, and settlement authority.",
  },
];

const practicalFaqs = [
  {
    headline: "Does using Catena mean replacing our paralegals or reorganizing our team?",
    subline: "Your paralegals keep matter ownership",
    answer:
      "No. Well-run firms use Catena to take recurring follow-through and document verification off their team’s plate without changing matter ownership. Your paralegal remains the firm’s matter owner while Catena pursues outstanding provider returns, resolves billing deficiencies, and stages work for review.",
  },
  {
    headline: "Do we have to replace Clio, Filevine, CASEpeer, or our retrieval vendor?",
    subline: "Works alongside your current systems and vendor",
    answer:
      "No. Catena works alongside your existing practice management software and document storage. For records and billing retrieval, we agree during scoping whether Catena coordinates through your incumbent retrieval vendor or manages a supplier directly.",
  },
  {
    headline: "How do you separate provider waiting time from Catena’s own work?",
    subline: "Transparent turnaround and deficiency tracking",
    answer:
      "Medical facilities have statutory and operational turnaround windows that no vendor can bypass instantly. CatenaOS tracks provider wait time separately from Catena execution time—measuring how quickly requests are dispatched, how fast returned PDFs are audited for deficiencies, and how promptly corrections are pursued.",
  },
  {
    headline: "What happens if a case manager is out or we transfer matters back in-house?",
    subline: "Zero caseload reconstruction and clean handover",
    answer:
      "CatenaOS preserves requirements, verified source evidence, recorded firm decisions, and next-action ownership across covered matters—including covered matters your team executes. If a contributor changes or you bring a matter back in-house, structured handover transfers all records, logs, and open next steps without days of reconstruction.",
  },
  {
    headline: "How do we evaluate Catena before expanding beyond the first group?",
    subline: "Side-by-side calibration with your operational counterpart",
    answer:
      "Every engagement begins with a selected group of 10–25 matters and a named operational counterpart on your team. We review initial readiness determinations, billing audits, and staged demand packages side by side until your team is confident in the quality and boundaries.",
  },
];

export default function Home() {
  return (
    <main id="main-content" tabIndex={-1} className="page-shell">
      {/* SECTION 1: HERO (Clear Buyer Benefit + Explicitly Labeled Illustrative Example) */}
      <section className="hero-surface" aria-labelledby="hero-title">
        <div className="hero wrap">
          <div className="hero-copy">
            <p className="eyebrow">
              Managed pre-lit operations for plaintiff personal injury firms
            </p>
            <h1 id="hero-title">
              Catena runs the pre-lit work.{" "}
              <em>You choose the matters.</em>
            </h1>
            <p className="hero-subheadline">
              Give your team relief from pre-lit follow-through.
            </p>
            <p className="hero-description">
              Catena carries the requests, follow-ups, corrections, and
              preparation on the matters you assign. Your team keeps matter
              ownership and legal judgment, with visibility into what is
              complete and what needs a decision.
            </p>
            <p className="hero-start-note">
              <strong>Start with a selected group of matters.</strong> Expand
              when the arrangement works for your firm.
            </p>

            {/* 3 Concise Intended Benefits */}
            <ul className="hero-quick-points" aria-label="Intended practice benefits">
              <li>
                <span className="qp-icon" aria-hidden="true">✓</span>
                <span>
                  <strong>Less staff time spent chasing status</strong> —
                  Provider follow-ups and itemized CPT billing corrections
                  carried through to completion
                </span>
              </li>
              <li>
                <span className="qp-icon" aria-hidden="true">✓</span>
                <span>
                  <strong>Fewer incomplete files reaching review</strong> —
                  Requirements, records, and bills verified before a demand is
                  staged
                </span>
              </li>
              <li>
                <span className="qp-icon" aria-hidden="true">✓</span>
                <span>
                  <strong>Clear decisions on stalled matters</strong> — Only
                  reserved legal choices route to your reviewer, with linked
                  evidence attached
                </span>
              </li>
            </ul>

            <div className="actions">
              <Link className="button" href="/conversation">
                Book a 15-minute fit call <Arrow />
              </Link>
              <Link className="button-secondary" href="/#example-matter">
                Explore an example matter
              </Link>
            </div>
            <p className="helper">
              Founding Partner conversations open · No preparation or client
              files needed for the first call.
            </p>
          </div>

          <div className="hero-media">
            <OperatingModelLedger />
          </div>
        </div>
      </section>

      {/* SECTION 2: INSPECTABLE EVIDENCE & SAMPLE DELIVERABLE (#example-matter) */}
      <section
        className="section-card-wrap wrap"
        id="example-matter"
        aria-labelledby="evidence-title"
      >
        <span id="proof" className="anchor-alias" />
        <span id="document-readiness" className="anchor-alias" />
        <div className="surface-card surface-card-tinted">
          <div className="section-header-compact">
            <div>
              <p className="eyebrow">Inspectable Walkthrough &amp; Deliverable</p>
              <h2 id="evidence-title">
                See what happens when a return is incomplete—and what your
                attorney receives.
              </h2>
            </div>
            <p className="section-lead">
              A document arriving in a folder is not demand readiness. Below is
              a constructed walkthrough using synthetic matter data showing how
              Catena resolves billing deficiencies, handles mid-stream treatment
              updates, and packages the deliverable for firm review.
            </p>
          </div>

          <div className="mechanism-grid">
            <div className="mechanism-copy">
              <div className="mech-static-steps">
                <div className="mech-static-card">
                  <span className="step-badge">01</span>
                  <div>
                    <h3>Catch billing deficiencies on return</h3>
                    <p>
                      When an itemized bill through July 31 is required but a
                      provider returns a bare $8,420 balance summary without
                      service dates or CPT codes, Catena flags the gap, pursues
                      the billing department, and verifies the corrected 14-line
                      itemized ledger.
                    </p>
                  </div>
                </div>

                <div className="mech-static-card">
                  <span className="step-badge">02</span>
                  <div>
                    <h3>Reopen readiness if new treatment appears</h3>
                    <p>
                      When an August 14 follow-up note discloses a new lumbar
                      MRI referral, earlier verified records remain preserved in
                      history while Catena reopens readiness automatically—so an
                      incomplete demand is never sent by mistake.
                    </p>
                  </div>
                </div>

                <div className="mech-static-card">
                  <span className="step-badge">03</span>
                  <div>
                    <h3>Separate provider wait time from Catena execution</h3>
                    <p>
                      Catena tracks external provider turnaround days separately
                      from Catena processing time—and routes only reserved legal
                      decisions (such as whether to hold for the August MRI or
                      apply a July 31 cutoff) to your designated reviewer.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mechanism-media">
              <OperatingModelFilm />
            </div>
          </div>

          {/* Sample Deliverable Artifact Showcase */}
          <div className="deliverable-section-divider">
            <InspectableDeliverableShowcase />
          </div>
        </div>
      </section>

      {/* SECTION 3: RECOMMENDED STARTING ENGAGEMENT & PLAIN-LANGUAGE ECONOMICS (#assignment) */}
      <section
        className="section-card-wrap wrap"
        id="assignment"
        aria-labelledby="assignment-title"
      >
        <span id="founding-partners" className="anchor-alias" />
        <span id="start" className="anchor-alias" />
        <div className="surface-card">
          <div className="section-header-compact">
            <div>
              <p className="eyebrow">Starting Engagement &amp; Commercial Terms</p>
              <h2 id="assignment-title">
                Recommended first step: Start with a selected group of 10–25
                matters.
              </h2>
            </div>
            <p className="section-lead">
              You do not need to reorganize your department or commit your full
              caseload. Most firms begin with a bounded initial group of matters
              to verify our execution and review process firsthand, then expand
              into automated rules when ready.
            </p>
          </div>

          {/* Recommended Starting Route vs Expansion Options */}
          <div className="starting-offer-grid">
            <article className="starting-recommended-card">
              <div className="recommended-banner">
                <span>Recommended First Engagement</span>
                <span className="recommended-pill">Available Now · 3–5 Founding Firms</span>
              </div>
              <h3>Selected Starting Group (10–25 Eligible Matters)</h3>
              <p className="starting-deck">
                Assign a concrete initial set of pre-suit PI files and choose
                which responsibilities Catena carries alongside your named
                operational counterpart.
              </p>

              <div className="eligibility-grid">
                <div className="eligibility-box">
                  <h4>Suitable matters to assign now</h4>
                  <ul>
                    <li>
                      <strong>Case types:</strong> Pre-suit plaintiff auto/MVA
                      bodily injury, uninsured motorist, and standard premises
                      matters.
                    </li>
                    <li>
                      <strong>Stage &amp; authorizations:</strong> Matters in
                      active treatment, approaching treatment completion, or
                      stalled in records/billing collection, with signed HIPAA
                      and client authorizations available.
                    </li>
                    <li>
                      <strong>Systems &amp; vendors:</strong> Works alongside
                      Clio, Filevine, CASEpeer, or shared matter folders—using
                      your existing retrieval vendor or a Catena supplier.
                    </li>
                  </ul>
                </div>

                <div className="eligibility-box">
                  <h4>How stalls &amp; custom scopes are handled</h4>
                  <ul>
                    <li>
                      <strong>How a “30+ day stall” is defined:</strong> Any
                      required provider record or itemized billing request
                      unresolved &gt; 30 calendar days without a verified return
                      or recorded firm hold, or where follow-up cadence has
                      lapsed past firm policy.
                    </li>
                    <li>
                      <strong>What requires additional scoping:</strong>{" "}
                      Multi-defendant commercial/catastrophic litigation,
                      custom bi-directional CMS automations, or post-demand lien
                      resolution are scoped separately.
                    </li>
                  </ul>
                </div>
              </div>
            </article>

            <div className="expansion-column">
              <div className="expansion-card">
                <span className="assignment-number">Expansion Option A · After Calibration</span>
                <h3>Standing 30+ Day Stall or Overflow Rule</h3>
                <p>
                  Once your team validates the initial group, set a standing
                  trigger so files with provider returns stalled past 30 days—or
                  intake/records overflow during capacity spikes—route to Catena
                  automatically within agreed monthly volume bands.
                </p>
              </div>

              <div className="expansion-card">
                <span className="assignment-number">Expansion Option B · Broader Coverage</span>
                <h3>Standing Caseload or Pod Assignment</h3>
                <p>
                  Direct agreed pre-lit responsibilities continuously across an
                  eligible practice segment or attorney pod under your firm’s
                  operating playbooks, with structured handover available
                  whenever ownership changes.
                </p>
              </div>
            </div>
          </div>

          {/* Plain-Language Economics & Sample Founding Engagement */}
          <div className="economics-panel">
            <div className="economics-copy">
              <p className="eyebrow">Plain-Language Economics</p>
              <h3>How Founding Partner charges and terms work</h3>
              <p className="economics-intro">
                We structure Founding Partner pricing so your firm understands
                every cost component up front and controls its financial
                exposure before a single matter is assigned:
              </p>

              <div className="economics-items">
                <div className="econ-item">
                  <strong>1. Per-matter operating charge (cost recovery)</strong>
                  <p>
                    An agreed charge per assigned matter that recovers the
                    direct operational work Catena carries across your selected
                    responsibilities.
                  </p>
                </div>
                <div className="econ-item">
                  <strong>2. Pass-through provider &amp; record fees at cost</strong>
                  <p>
                    Third-party medical facility copy fees and retrieval vendor
                    charges are billed directly to your existing vendor account
                    or passed through at actual cost—never marked up without
                    your written approval.
                  </p>
                </div>
                <div className="econ-item">
                  <strong>3. Fixed monthly founding program fee (no seat fees)</strong>
                  <p>
                    A flat monthly founding contribution that covers shared
                    onboarding and program setup—with <code>CatenaOS</code>{" "}
                    status and evidence visibility included across covered
                    matters at <strong>no separate software subscription</strong>.
                  </p>
                </div>
                <div className="econ-item">
                  <strong>4. Pre-approved cost ceiling &amp; clean exit</strong>
                  <p>
                    Your written agreement specifies the initial matter count,
                    covered responsibilities, and a hard cost cap requiring your
                    approval before any additional matters or expenses are
                    incurred. You may pause or exit at any point with full
                    structured handover.
                  </p>
                </div>
              </div>
            </div>

            <aside className="sample-engagement-box" aria-label="Illustrative founding engagement outline">
              <span className="cp-provenance-badge">
                Illustrative Engagement Outline
              </span>
              <h4>What a typical starting engagement looks like</h4>
              <dl className="sample-dl">
                <div>
                  <dt>Initial Matter Cohort</dt>
                  <dd>
                    15 selected pre-lit auto BI matters (e.g., 10 stalled
                    records/billing files + 5 ready for chronology &amp; demand
                    preparation)
                  </dd>
                </div>
                <div>
                  <dt>Calibration Window</dt>
                  <dd>
                    60-day initial operating period with a 20-minute weekly
                    review alongside your named operational counterpart
                  </dd>
                </div>
                <div>
                  <dt>What Participation Asks of Your Firm</dt>
                  <dd>
                    Designate one operational counterpart (e.g., Senior
                    Paralegal or Operations Lead), provide scoped system/folder
                    access, and review routed cutoff decisions and staged
                    deliverables
                  </dd>
                </div>
                <div>
                  <dt>What Your Firm Receives in Return</dt>
                  <dd>
                    Immediate execution relief on assigned files, direct input
                    into playbook calibration, founding cost-recovery pricing,
                    and zero software seat fees
                  </dd>
                </div>
              </dl>
              <div className="actions">
                <Link className="button button-light" href="/conversation">
                  Request a starting scope &amp; estimate <Arrow />
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* SECTION 4: COVERED RESPONSIBILITIES & INTENDED BUSINESS VALUE (#ownership) */}
      <section
        className="section-card-wrap wrap"
        id="ownership"
        aria-labelledby="ownership-title"
      >
        <span id="how-it-works" className="anchor-alias" />
        <span id="responsibilities" className="anchor-alias" />
        <div className="surface-card">
          <div className="section-header-compact">
            <div>
              <p className="eyebrow">Covered Pre-Lit Responsibilities</p>
              <h2 id="ownership-title">
                What Catena carries, what you receive, and what your firm
                retains.
              </h2>
            </div>
            <p className="section-lead">
              Every responsibility is readable at a glance—pairing concrete
              operational execution and deliverables with the intended practical
              benefit for your team.
            </p>
          </div>

          <div className="skimmable-lanes-grid">
            {responsibilities.map((item) => (
              <article key={item.lane} className="skimmable-lane-card">
                <div className="lane-card-header">
                  <span className="assignment-number">
                    Responsibility {item.lane}
                  </span>
                  <span className="assignment-tag">{item.statusTag}</span>
                </div>
                <h3>{item.title}</h3>
                <p className="lane-benefit-callout">{item.intendedBenefit}</p>

                <dl className="lane-detail-dl">
                  <div>
                    <dt>Work Catena Carries</dt>
                    <dd>{item.catenaWork}</dd>
                  </div>
                  <div>
                    <dt>Deliverable Your Team Receives</dt>
                    <dd>{item.deliverable}</dd>
                  </div>
                  <div className="lane-firm-authority-box">
                    <dt>Decisions Reserved to Your Firm</dt>
                    <dd>{item.reservedDecisions}</dd>
                  </div>
                </dl>

                {item.link && (
                  <div className="lane-card-footer">
                    <Link className="text-link" href={item.link.href}>
                      {item.link.label} <Arrow />
                    </Link>
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: DELIVERY ACCOUNTABILITY ("WHEN A MATTER BECOMES DIFFICULT, WHO OWNS IT?") */}
      <section
        className="section-card-wrap wrap"
        id="accountability"
        aria-labelledby="accountability-title"
      >
        <span id="founder" className="anchor-alias" />
        <div className="surface-card">
          <div className="section-header-compact">
            <div>
              <p className="eyebrow">Delivery &amp; Exception Ownership</p>
              <h2 id="accountability-title">
                When a matter becomes difficult, who owns getting it resolved?
              </h2>
            </div>
            <p className="section-lead">
              Software alone does not persuade a hospital billing department to
              replace a balance summary with a CPT ledger. Catena combines
              governed software state tracking with named human accountability.
            </p>
          </div>

          <div className="accountability-grid">
            <div className="accountability-steps">
              <div className="acc-card">
                <span className="evidence-pill">01 · Named Operational Lead</span>
                <h3>A dedicated counterpart assigned to your firm</h3>
                <p>
                  Every Founding Partner firm is paired with a named Catena
                  operations lead who supervises daily request queues, reviews
                  flagged document deficiencies, and conducts a concise weekly
                  review with your designated paralegal or operations manager.
                </p>
              </div>

              <div className="acc-card">
                <span className="evidence-pill">02 · Exception &amp; Escalation Protocol</span>
                <h3>Catena works through provider stalls and rejections</h3>
                <p>
                  When a facility ignores an initial request, rejects an
                  authorization format, or sends incomplete dates of service,
                  Catena owns the phone and portal escalation loop. We only
                  escalate to your firm when a legal cutoff decision, fee
                  approval, or direct client contact is required.
                </p>
              </div>

              <div className="acc-card">
                <span className="evidence-pill">03 · Measurable Operational Metrics</span>
                <h3>Tracked by execution milestones you can verify</h3>
                <p>
                  During each review, we track metrics Catena directly controls:
                  staff hours saved on follow-through, age of unresolved
                  deficiencies, time from document return to deficiency audit,
                  and time from satisfied requirements to demand readiness.
                </p>
              </div>
            </div>

            <aside className="founder-profile-box founder-profile-elevated">
              <div>
                <p className="eyebrow">Executive Accountability · Behind Catena</p>
                <h3>Brian McLeod</h3>
                <p className="founder-role">
                  Founder of Prime Elixir &amp; Creator of CatenaOS
                </p>
                <p className="founder-pitch">
                  Brian directly oversees Founding Partner onboarding, system
                  architecture, and operational quality. Prior to founding Prime
                  Elixir, he held senior engineering leadership roles building
                  high-accountability operating platforms at:
                </p>

                <ul className="founder-cred-list">
                  <li>
                    <strong>Disney Streaming</strong> — Mission-critical
                    platform reliability and high-volume media operations
                  </li>
                  <li>
                    <strong>Payspan</strong> — Healthcare reimbursement and
                    provider billing/payment networks
                  </li>
                  <li>
                    <strong>Logility</strong> — Enterprise supply chain planning
                    and exception-driven execution systems
                  </li>
                </ul>
              </div>

              <div className="founder-actions-row">
                <Link className="button" href="/conversation">
                  Meet Brian on a 15-min fit call <Arrow />
                </Link>
                <a
                  className="text-link"
                  href="https://www.primeelixirco.com/"
                  rel="noopener noreferrer"
                >
                  About Prime Elixir <Arrow />
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* SECTION 6: COMPATIBILITY, CONTINUITY, SECURITY & PRACTICAL QUESTIONS */}
      <section
        className="section-card-wrap wrap"
        id="continuity"
        aria-labelledby="continuity-title"
      >
        <span id="fit" className="anchor-alias" />
        <span id="integrations" className="anchor-alias" />
        <div className="surface-card">
          <div className="workflow-split-grid">
            {/* Left: Compatibility, Security & Diagnostic Resources */}
            <div className="workflow-left-col">
              <p className="eyebrow">Compatibility, Continuity &amp; Security</p>
              <h2 id="continuity-title">
                Fits your current stack. Protects your firm’s data.
              </h2>
              <p className="workflow-lead">
                Catena works alongside your practice management system and
                maintains shared operational context across covered matters—so
                even if a staff member is out or a matter changes hands, nobody
                spends days reconstructing status from scattered notes.
              </p>

              {/* Visual Architecture Diagram */}
              <div className="arch-diagram" aria-label="CatenaOS operational context architecture">
                <div className="arch-tier">
                  <div className="arch-node">
                    <span className="arch-node-kicker">Your Practice Stack</span>
                    <strong>Clio · Filevine · CASEpeer</strong>
                  </div>
                  <div className="arch-node">
                    <span className="arch-node-kicker">Matter Ownership</span>
                    <strong>Your Paralegals &amp; Attorneys</strong>
                  </div>
                </div>

                <div className="arch-connector" aria-hidden="true">
                  <span>↕ Scoped Access &amp; Audit Trail</span>
                </div>

                <div className="arch-core">
                  <div className="arch-core-top">
                    <span className="arch-core-badge">CatenaOS Operational Context</span>
                    <span className="arch-core-sub">Included across covered matters</span>
                  </div>
                  <div className="arch-core-pills">
                    <span>Requirements &amp; Policy</span>
                    <span>Source-Linked Evidence</span>
                    <span>Recorded Decisions</span>
                    <span>Next-Action Owner</span>
                  </div>
                </div>
              </div>

              {/* Trust & Practical Resource Links */}
              <div className="trust-resource-cards">
                <Link href="/security" className="trust-card-link">
                  <div>
                    <span className="arch-node-kicker">Trust &amp; Governance</span>
                    <strong>Security, Data Handling &amp; AI Policy ↗</strong>
                    <p>
                      Scoped CMS access, zero public model training on client
                      files, HIPAA/BAA terms, and clean handover guarantees.
                    </p>
                  </div>
                </Link>
                <Link href="/records-to-demand#resources" className="trust-card-link">
                  <div>
                    <span className="arch-node-kicker">Practical Buyer Guides</span>
                    <strong>Readiness Checklist &amp; Stall Diagnostic ↗</strong>
                    <p>
                      Inspect our Demand Readiness Checklist, Stalled Records
                      Diagnostic Guide, and Evaluation Framework.
                    </p>
                  </div>
                </Link>
              </div>
            </div>

            {/* Right: Practical Buyer Questions */}
            <div className="workflow-right-col">
              <div className="drilldown-list-header">
                <span>Practical Buyer Questions</span>
                <span className="drilldown-hint">Click any question to expand</span>
              </div>
              <div className="faq">
                {practicalFaqs.map((item, index) => (
                  <details
                    key={item.headline}
                    className="faq-item"
                    open={index < 2}
                  >
                    <summary>
                      <div className="faq-summary-text">
                        <strong>{item.headline}</strong>
                        <span>{item.subline}</span>
                      </div>
                      <span className="accordion-icon" aria-hidden="true">
                        +
                      </span>
                    </summary>
                    <div className="faq-answer">
                      <p>{item.answer}</p>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: FINAL BOOKING CTA */}
      <section className="section-card-wrap wrap" aria-labelledby="closing-cta-title">
        <div className="founding-offer-box closing-cta-banner">
          <div>
            <div className="founding-top-badge">
              <span className="cp-live-indicator" aria-hidden="true" />
              Founding Partner Program · 3–5 Plaintiff PI Firms
            </div>
            <h2 id="closing-cta-title">
              Explore a starting group of 10–25 matters in 15 minutes.
            </h2>
            <p className="founding-description">
              Compare your current pre-lit workflow, identify candidate matters
              or 30+ day stalls you want off your team’s plate, and get a clear
              written scope and cost estimate—with zero preparation required.
            </p>
          </div>
          <div className="actions">
            <Link className="button button-light" href="/conversation">
              Book a 15-minute fit call <Arrow />
            </Link>
            <Link className="text-link text-link-light" href="/records-to-demand">
              Inspect Records-to-Demand brief <Arrow />
            </Link>
            <Link className="text-link text-link-light" href="/security">
              Review security &amp; data handling <Arrow />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
