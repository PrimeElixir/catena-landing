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
              <span>Now taking five founding plaintiff PI firms.</span>
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
              A returned record isn’t a ready file. We work through the gaps.
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
            <p className="eyebrow">When staff or caseloads shift</p>
            <h2 id="continuity-title">
              A case manager leaves. The chase doesn’t.
            </h2>
            <p className="continuity-lead">
              Your practice software keeps the notes. It doesn’t call the
              provider on Monday. On matters Catena carries, the follow-through
              was never sitting on one person’s desk—so it keeps moving when
              that person doesn’t.
            </p>
            <ul className="continuity-cases">
              <li>
                <strong>Files Catena is carrying keep moving.</strong> Name a
                new owner; they open the file to current state and the one
                question waiting on the firm.
              </li>
              <li>
                <strong>Files she was carrying herself — assign them.</strong> A
                departure is overflow. Name an owner on your side, route the
                open segment under the rule you already set, and Catena picks up
                the follow-through instead of your team absorbing it on top of
                their own caseload.
              </li>
            </ul>
          </div>

          <div className="continuity-media">
            <ContinuityHandoverCard />
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
              Founding Partner Program · Five Plaintiff PI Firms
            </div>
            <h2 id="founding-title">
              Five founding firms. Built with you, not sold to you.
            </h2>
            <p className="founding-description">
              We’re taking a small number on purpose. Each one starts with a
              defined set of matters, a named counterpart on your side, and a
              working arrangement we shape together — not a seat in a queue.
            </p>
            <ul className="founding-quick-list">
              <li>
                <span className="qp-icon" aria-hidden="true">✓</span>
                <span>
                  <strong>Bounded.</strong> 10–25 files, or one routing rule.
                  Expand only if we earn it.
                </span>
              </li>
              <li>
                <span className="qp-icon" aria-hidden="true">✓</span>
                <span>
                  <strong>Checked first.</strong> We run side-by-side on your
                  candidate files before you rely on the result.
                </span>
              </li>
              <li>
                <span className="qp-icon" aria-hidden="true">✓</span>
                <span>
                  <strong>Reversible.</strong> Any file comes back to your team
                  at any point, with its history and open items intact.
                </span>
              </li>
              <li>
                <span className="qp-icon" aria-hidden="true">✓</span>
                <span>
                  <strong>Direct.</strong> You work with the founder. Terms in
                  writing before you decide; no platform fee during the founding
                  period.
                </span>
              </li>
            </ul>
            <div className="actions">
              <Link className="button" href="/conversation">
                Book 15 minutes <Arrow />
              </Link>
              <Link className="text-link" href="/records-to-demand">
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
