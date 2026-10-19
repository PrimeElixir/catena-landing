import Link from "next/link";
import {
  Arrow,
  OperatingModelFilm,
  OperatingModelLedger,
} from "@/components/Site";
import {
  AssignmentExplorer,
  ContinuityHandoverCard,
  HeroPillarStrip,
  ResponsibilityExplorer,
} from "@/components/InteractivePlatformShowcase";

export default function Home() {
  return (
    <main id="main-content" tabIndex={-1} className="page-shell">
      {/* SECTION 1: HERO (Economy + Live Matter Demo + 3-Column Strip) */}
      <section className="hero-surface" aria-labelledby="hero-title">
        <div className="hero wrap">
          <div className="hero-copy">
            <p className="eyebrow">
              Managed Pre-Lit Operations · Plaintiff PI
            </p>
            <h1 id="hero-title">
              We carry pre-lit.{" "}
              <em>You keep your firm.</em>
            </h1>
            <p className="hero-description">
              Catena is accountable for intake, treatment and records, and
              demand preparation on the matters you assign — alongside the
              paralegals and systems you already have.
            </p>

            <p className="hero-scarcity">
              <span className="cp-live-indicator" aria-hidden="true" />
              <span>Now taking 3–5 founding plaintiff PI firms.</span>
            </p>

            <div className="actions">
              <Link className="button" href="/conversation">
                Book 15 minutes <Arrow />
              </Link>
              <a className="button-secondary" href="#assignment">
                How assignment works
              </a>
            </div>
          </div>

          <div className="hero-media" id="live-matter-demo">
            <OperatingModelLedger />
          </div>
        </div>

        {/* THREE-COLUMN OPEN STRIP DIRECTLY UNDER HERO */}
        <HeroPillarStrip />
      </section>

      {/* SECTION 2: THREE RESPONSIBILITIES (What we carry, what you keep — the product) */}
      <section
        className="page-section wrap"
        id="ownership"
        aria-labelledby="ownership-title"
      >
        <span id="how-it-works" className="anchor-alias" />
        <span id="responsibilities" className="anchor-alias" />
        <div className="section-header-compact">
          <div>
            <p className="eyebrow">What Catena carries. What your firm keeps.</p>
            <h2 id="ownership-title">
              One system. Three pre-lit responsibilities.
            </h2>
          </div>
          <p className="section-lead">
            Entrust one lane or all three. Each has an agreed result Catena
            carries it to, and decisions that stay with your firm.
          </p>
        </div>

        <ResponsibilityExplorer />
      </section>

      {/* SECTION 3: HOW YOU ASSIGN WORK (The on-ramp) */}
      <section
        className="page-section wrap"
        id="assignment"
        aria-labelledby="assignment-title"
      >
        <div className="section-header-compact">
          <div>
            <p className="eyebrow">How you assign work</p>
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
      </section>

      {/* SECTION 4: THE VIDEO — PROOF OF MECHANISM */}
      <section
        className="page-section wrap"
        id="proof"
        aria-labelledby="mechanism-title"
      >
        <span id="document-readiness" className="anchor-alias" />
        <div className="section-header-compact">
          <div>
            <p className="eyebrow">How follow-through works</p>
            <h2 id="mechanism-title">
              A returned PDF isn’t readiness. We work through the gaps.
            </h2>
          </div>
          <p className="section-lead">
            Pre-lit files rarely move in a straight line—providers return bare
            balance summaries instead of CPT line items, and new treatment
            appears mid-stream. Watch how Catena carries Matter #2048 to
            completion, or{" "}
            <Link className="text-link" href="/records-to-demand">
              inspect the full Records-to-Demand proof brief <Arrow />
            </Link>
          </p>
        </div>

        <div className="mechanism-stage">
          <OperatingModelFilm />
        </div>
      </section>

      {/* SECTION 5: CONTINUITY & HANDOVER */}
      <section
        className="page-section wrap"
        id="continuity"
        aria-labelledby="continuity-title"
      >
        <span id="fit" className="anchor-alias" />
        <span id="integrations" className="anchor-alias" />
        <div className="continuity-split">
          <div className="continuity-copy">
            <p className="eyebrow">Continuity &amp; Handover</p>
            <h2 id="continuity-title">
              When staff or queues shift, no file loses its place.
            </h2>
            <p className="continuity-question">
              If your case manager were out tomorrow, could someone else see
              what each file needs next—or would they spend days rebuilding it
              from emails and notes?
            </p>
            <p className="continuity-lead">
              On matters Catena covers, the requirements, the verified evidence,
              the decisions your firm made, and the next step stay with the
              file—not with the person. Hand a file to someone new, or take it
              back in-house, and nothing has to be reconstructed.
            </p>
          </div>

          <div className="continuity-media">
            <ContinuityHandoverCard />
          </div>
        </div>

        <div className="continuity-points">
          <div className="continuity-point">
            <h3>Someone’s out.</h3>
            <p>
              The next person opens the file and sees what’s verified, what’s
              missing, and whose move it is.
            </p>
          </div>
          <div className="continuity-point">
            <h3>A file comes back to your team.</h3>
            <p>
              It arrives with its history, decisions, and open items—not a
              status call.
            </p>
          </div>
          <div className="continuity-point">
            <h3>You check our work first.</h3>
            <p>
              Side-by-side on candidate files before you rely on it.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 6: FOUNDING PARTNER PROGRAM & BEHIND CATENA */}
      <section
        className="page-section wrap"
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
