import Link from "next/link";
import {
  Arrow,
  OperatingModelFilm,
  OperatingModelLedger,
} from "@/components/Site";
import {
  AssignmentExplorer,
  HeroScopeDrawer,
  MidStreamInteractiveStepList,
  ResponsibilityExplorer,
} from "@/components/InteractivePlatformShowcase";

const workflowDrilldowns = [
  {
    headline: "Keep your paralegals in matter ownership",
    subline: "Relieve recurring execution without replacing staff",
    answer:
      "Well-run firms use Catena to take recurring execution and coordination off their team’s plate without changing matter ownership. An individual paralegal remains your firm’s matter owner while Catena pursues outstanding requests, reconciles billing gaps, and carries the delegated responsibilities.",
  },
  {
    headline: "Keep your CMS and retrieval vendor",
    subline: "Works alongside Clio, Filevine, CASEpeer & your supplier",
    answer:
      "Catena works alongside your existing practice management software and document storage. For records and billing retrieval, we agree during scoping whether Catena coordinates through your incumbent retrieval vendor or manages a supplier directly within the engagement.",
  },
  {
    headline: "Auto-route 30+ day stalls or capacity overflow",
    subline: "Trigger relief automatically within agreed volume bands",
    answer:
      "We agree on the routing trigger, the responsibilities Catena will carry, and the capacity band we hold for your firm. We begin with a defined initial set of matters so your team sees how we operate and reviews decisions with us, then transition into the continuing routing rule.",
  },
  {
    headline: "Zero reconstruction when contributors change",
    subline: "CatenaOS preserves context across covered matters",
    answer:
      "CatenaOS maintains the operational context—requirements, verified evidence, firm policy, recorded decisions, and next-action ownership—across agreed matters and sources, including covered matters your own team executes. If a case manager with 80 files is out tomorrow, nobody spends days reconstructing status from emails and notes.",
  },
  {
    headline: "Transparent Founding Partner economics",
    subline: "Cost recovery + shared acquisition contribution",
    answer:
      "During the founding engagement, partners pay agreed cost recovery for the operating work Catena carries on assigned matters plus a fixed shared acquisition contribution. The supported operating view across agreed matters is included with no separate platform subscription during the founding program.",
  },
  {
    headline: "Side-by-side calibration before you rely on it",
    subline: "Verify readiness & decision routing on candidate files first",
    answer:
      "We review candidate matters, agreed responsibilities, system connections, and decision-routing boundaries together before live work begins. Initial delivery includes full review of readiness and preparation states alongside your named operational counterpart, with structured handover available at any point.",
    link: {
      href: "/records-to-demand#evaluation",
      label: "Review the evaluation & calibration process",
    },
  },
];

export default function Home() {
  return (
    <main id="main-content" tabIndex={-1} className="page-shell">
      {/* SECTION 1: HERO (Fast 3-Second Sell + Interactive Dual-Mode Stage) */}
      <section className="hero-surface" aria-labelledby="hero-title">
        <div className="hero wrap">
          <div className="hero-copy">
            <p className="eyebrow">
              Managed Pre-Lit Operations Platform · Plaintiff PI
            </p>
            <h1 id="hero-title">
              Catena runs the pre-lit work.{" "}
              <em>You choose the matters.</em>
            </h1>
            <p className="hero-description">
              Start with a defined set of matters. Set a rule for overflow,
              backlog, or files stalled more than 30 days—or have Catena carry
              the pre-lit work across your caseload.
            </p>

            {/* Apollo-style 3-Second Value Bullets */}
            <ul className="hero-quick-points" aria-label="Core platform commitments">
              <li>
                <span className="qp-icon" aria-hidden="true">✓</span>
                <span>
                  <strong>Intake through demand ready</strong> — Required
                  records, itemized bills, and a demand prepared for your review
                </span>
              </li>
              <li>
                <span className="qp-icon" aria-hidden="true">✓</span>
                <span>
                  <strong>Works alongside your team</strong> — Keep your
                  paralegals, existing systems, and live matter visibility
                </span>
              </li>
              <li>
                <span className="qp-icon" aria-hidden="true">✓</span>
                <span>
                  <strong>Your firm keeps final authority</strong> — Client
                  relationship, legal judgment, and settlement stay with you
                </span>
              </li>
            </ul>

            {/* Progressive Drilldown for Full Verbatim Scope & Authority Statement */}
            <HeroScopeDrawer />

            <div className="actions">
              <Link className="button" href="/conversation">
                Book a 15-minute conversation <Arrow />
              </Link>
              <Link className="button-secondary" href="/#assignment">
                Explore assignment modes
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

      {/* SECTION 2: FIRM-CONTROLLED ASSIGNMENT (Visual Cards + On-Demand Governance Drawer) */}
      <section
        className="section-card-wrap wrap"
        id="assignment"
        aria-labelledby="assignment-title"
      >
        <div className="surface-card">
          <div className="section-header-compact">
            <div>
              <p className="eyebrow">Firm-Controlled Assignment</p>
              <h2 id="assignment-title">
                Start with a defined set, an overflow rule, or a caseload.
              </h2>
            </div>
            <p className="section-lead">
              Your paralegals keep matter ownership while Catena takes
              accountable execution off their plate—using your existing
              retrieval vendor or a Catena-managed supplier.
            </p>
          </div>

          <AssignmentExplorer />
        </div>
      </section>

      {/* SECTION 3: ONE SYSTEM. THREE RESPONSIBILITIES (Interactive Playbook + Synchronized Deliverable) */}
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
              <p className="eyebrow">Scope &amp; Governance Boundary</p>
              <h2 id="ownership-title">
                One system. Three pre-lit responsibilities.
              </h2>
            </div>
            <p className="section-lead">
              Entrust one lane or all three. Select a responsibility below to
              inspect the deliverable your attorney receives and the decisions
              your firm retains.
            </p>
          </div>

          <ResponsibilityExplorer />
        </div>
      </section>

      {/* SECTION 4: WHY FOLLOW-THROUGH MATTERS (Interactive 3-Step Scrubber + 42s Video Theater) */}
      <section
        className="section-card-wrap wrap"
        id="proof"
        aria-labelledby="mechanism-title"
      >
        <span id="document-readiness" className="anchor-alias" />
        <div className="surface-card surface-card-tinted">
          <div className="mechanism-grid">
            <div className="mechanism-copy">
              <p className="eyebrow">Why Accountable Follow-Through Matters</p>
              <h2 id="mechanism-title">
                A returned PDF isn’t readiness. We work through the gaps.
              </h2>
              <p className="mechanism-intro">
                Pre-lit files rarely move in a straight line—providers return
                bare balance summaries instead of CPT line items, and new
                treatment appears mid-stream. Click each step to see how Catena
                carries the loop to completion:
              </p>

              <MidStreamInteractiveStepList />

              <div className="actions">
                <Link className="text-link" href="/records-to-demand">
                  Inspect the full Records-to-Demand proof brief <Arrow />
                </Link>
              </div>
            </div>

            <div className="mechanism-media">
              <OperatingModelFilm />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: WORKFLOW & CONTINUITY (Apollo-style "Don't Change Your Workflow. Just Add Catena.") */}
      <section
        className="section-card-wrap wrap"
        id="continuity"
        aria-labelledby="continuity-title"
      >
        <span id="fit" className="anchor-alias" />
        <span id="integrations" className="anchor-alias" />
        <div className="surface-card">
          <div className="workflow-split-grid">
            {/* Left: Visual Architecture & Continuity Card */}
            <div className="workflow-left-col">
              <p className="eyebrow">Operational Context · CatenaOS</p>
              <h2 id="continuity-title">
                Don’t reorganize your firm. Just add Catena.
              </h2>
              <p className="workflow-lead">
                Catena works alongside your existing systems and preserves
                requirements, evidence, policy, and next-action ownership across
                covered matters—so even when staff or contributors change,
                nobody spends days reconstructing the caseload.
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
                  <span>↕ Shared Visibility &amp; Governance</span>
                </div>

                <div className="arch-core">
                  <div className="arch-core-top">
                    <span className="arch-core-badge">CatenaOS Operational Context</span>
                    <span className="arch-core-sub">Included across covered matters</span>
                  </div>
                  <div className="arch-core-pills">
                    <span>Requirements &amp; Policy</span>
                    <span>Verified Evidence</span>
                    <span>Recorded Decisions</span>
                    <span>Next-Action Owner</span>
                  </div>
                </div>

                <div className="arch-connector" aria-hidden="true">
                  <span>↕ Accountable Follow-Through</span>
                </div>

                <div className="arch-tier">
                  <div className="arch-node arch-node-subtle">
                    <span className="arch-node-kicker">Retrieval Execution</span>
                    <strong>Incumbent Vendor or Catena Supplier</strong>
                  </div>
                  <div className="arch-node arch-node-subtle">
                    <span className="arch-node-kicker">Continuity Guarantee</span>
                    <strong>Structured Handover at Any Point</strong>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Apollo-Style Fast-Selling Accordion Drilldowns */}
            <div className="workflow-right-col">
              <div className="drilldown-list-header">
                <span>How Catena fits an established PI practice</span>
                <span className="drilldown-hint">Click any topic to expand</span>
              </div>
              <div className="faq">
                {workflowDrilldowns.map((item, index) => (
                  <details
                    key={item.headline}
                    className="faq-item"
                    open={index === 0}
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
                      {item.link && (
                        <Link className="text-link" href={item.link.href}>
                          {item.link.label} <Arrow />
                        </Link>
                      )}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: FOUNDING PARTNER PROGRAM & BEHIND CATENA */}
      <section
        className="section-card-wrap wrap"
        id="founding-partners"
        aria-labelledby="founding-title"
      >
        <span id="founder" className="anchor-alias" />
        <span id="start" className="anchor-alias" />
        <div className="founder-layout">
          <div className="founding-offer-box">
            <div className="founding-top-badge">
              <span className="cp-live-indicator" aria-hidden="true" />
              Founding Partner Program · 3–5 Plaintiff PI Firms
            </div>
            <h2 id="founding-title">
              Real pre-lit work carried. Shaped around your firm.
            </h2>
            <p className="founding-description">
              Partner with us on a defined starting set of matters to take real
              execution off your team’s plate and establish a repeatable routing
              arrangement together.
            </p>
            <ul className="founding-quick-list">
              <li>
                <span className="qp-icon" aria-hidden="true">✓</span>
                <span>
                  <strong>Bounded starting cohort</strong> — Begin with a
                  defined set of eligible matters and a named operational
                  counterpart
                </span>
              </li>
              <li>
                <span className="qp-icon" aria-hidden="true">✓</span>
                <span>
                  <strong>No separate platform fee</strong> — Pay agreed cost
                  recovery for operated work + a fixed shared acquisition
                  contribution
                </span>
              </li>
              <li>
                <span className="qp-icon" aria-hidden="true">✓</span>
                <span>
                  <strong>15-minute fit call</strong> — Identify candidate
                  matters or 30+ day stalls with zero prep required
                </span>
              </li>
            </ul>
            <div className="actions">
              <Link className="button button-light" href="/conversation">
                Book a 15-minute conversation <Arrow />
              </Link>
              <Link className="text-link text-link-light" href="/records-to-demand">
                Inspect Records-to-Demand brief <Arrow />
              </Link>
            </div>
          </div>

          <div className="founder-profile-box">
            <div>
              <p className="eyebrow">Behind Catena</p>
              <h3>Brian McLeod</h3>
              <p className="founder-role">
                Founder of Prime Elixir &amp; Creator of CatenaOS
              </p>
              <p className="founder-pitch">
                Built by an engineering leader specializing in high-accountability
                operating systems across streaming, healthcare reimbursement, and
                supply chain networks.
              </p>

              <div className="credential-chips">
                <span>Disney Streaming</span>
                <span>Payspan Healthcare Networks</span>
                <span>Logility Supply Chain</span>
              </div>
            </div>

            <details className="founder-bio-drawer">
              <summary>
                <span>Read full background &amp; operating philosophy</span>
                <span className="accordion-icon" aria-hidden="true">+</span>
              </summary>
              <div className="founder-bio-expanded">
                <p>
                  Prior to founding Prime Elixir, Brian led mission-critical
                  platform and operations engineering at{" "}
                  <strong>Disney Streaming</strong>, <strong>Payspan</strong>{" "}
                  (healthcare reimbursement and provider payment networks), and{" "}
                  <strong>Logility</strong> (supply chain planning and
                  execution).
                </p>
                <p>
                  Catena combines governed software state tracking with
                  accountable operational follow-through so plaintiff PI firms
                  can delegate complex pre-litigation work without losing
                  visibility or legal control.
                </p>
              </div>
            </details>

            <a
              className="text-link"
              href="https://www.primeelixirco.com/"
              rel="noopener noreferrer"
            >
              About Prime Elixir <Arrow />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
