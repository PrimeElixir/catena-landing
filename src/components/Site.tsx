import Link from "next/link";
import { MobileNavigation } from "./MobileNavigation";
import { HeroControlPlane } from "./InteractivePlatformShowcase";

export function Arrow() {
  return (
    <span aria-hidden="true" className="arrow">
      ↗
    </span>
  );
}

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="wrap header-inner">
        <div className="brand-cluster">
          <Link className="wordmark" href="/" aria-label="Catena home">
            catena<span aria-hidden="true">.</span>
          </Link>
          <span className="brand-tag">Pre-Lit Operations Platform</span>
        </div>
        <nav aria-label="Main navigation" className="desktop-nav">
          <div className="nav-dropdown-group">
            <Link className="nav-dropdown-trigger" href="/#ownership">
              Platform &amp; Scope{" "}
              <span className="nav-caret" aria-hidden="true">
                ▾
              </span>
            </Link>
            <div className="nav-dropdown-menu" role="region" aria-label="Platform capabilities">
              <div className="nav-dropdown-grid">
                <div className="nav-dropdown-col">
                  <span className="nav-dropdown-kicker">Pre-Lit Responsibilities</span>
                  <Link href="/#ownership" className="nav-dropdown-item">
                    <strong>01 · Intake &amp; Case Assessment</strong>
                    <span>Collect facts, coverage &amp; prepare assessments for review</span>
                  </Link>
                  <Link href="/records-to-demand" className="nav-dropdown-item">
                    <strong>02 · Treatment &amp; Records Follow-Through</strong>
                    <span>Carry requests, CPT billing audits &amp; deficiency resolution</span>
                  </Link>
                  <Link href="/#ownership" className="nav-dropdown-item">
                    <strong>03 · Qualified Demand Preparation</strong>
                    <span>Assemble chronology, specials &amp; demand draft for review</span>
                  </Link>
                </div>
                <div className="nav-dropdown-col nav-dropdown-col-highlight">
                  <span className="nav-dropdown-kicker">Operational Spine</span>
                  <Link href="/#continuity" className="nav-dropdown-item">
                    <strong>CatenaOS Operational Context</strong>
                    <span>Shared requirements, verified evidence &amp; next-action ownership across covered matters</span>
                  </Link>
                  <Link href="/records-to-demand" className="nav-dropdown-promo">
                    <span>Foundational Lane Brief</span>
                    <strong>Inspect Records-to-Demand ↗</strong>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="nav-dropdown-group">
            <Link className="nav-dropdown-trigger" href="/#assignment">
              Assignment Modes{" "}
              <span className="nav-caret" aria-hidden="true">
                ▾
              </span>
            </Link>
            <div className="nav-dropdown-menu nav-dropdown-menu-compact" role="region" aria-label="Assignment modes">
              <span className="nav-dropdown-kicker">Firm-Controlled Routing</span>
              <Link href="/#assignment" className="nav-dropdown-item">
                <strong>01 · Defined Set</strong>
                <span>Start with a bounded group of 10–25 eligible files</span>
              </Link>
              <Link href="/#assignment" className="nav-dropdown-item">
                <strong>02 · 30+ Day Stall / Overflow Rule</strong>
                <span>Auto-route stalled provider chases or capacity spikes</span>
              </Link>
              <Link href="/#assignment" className="nav-dropdown-item">
                <strong>03 · Standing Caseload</strong>
                <span>Continuous pre-lit execution across a segment or pod</span>
              </Link>
            </div>
          </div>

          <Link href="/records-to-demand">Records-to-Demand</Link>
          <Link href="/#founding-partners">Founding Partners</Link>
          <Link className="nav-inquiry" href="/conversation">
            Book a conversation <Arrow />
          </Link>
        </nav>
        <div className="mobile-header-actions">
          <Link className="mobile-booking" href="/conversation">
            Book · 15 min <Arrow />
          </Link>
          <MobileNavigation />
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-inner">
        <div className="footer-brand">
          <Link className="wordmark" href="/" aria-label="Catena home">
            catena<span aria-hidden="true">.</span>
          </Link>
          <p className="footer-tagline">
            Managed Pre-Lit Operations Platform for plaintiff personal injury
            firms. Built on CatenaOS by{" "}
            <a href="https://www.primeelixirco.com/">Prime Elixir</a>.
          </p>
        </div>
        <nav aria-label="Footer navigation" className="footer-nav">
          <Link href="/#assignment">How assignment works</Link>
          <Link href="/#ownership">Pre-lit responsibilities</Link>
          <Link href="/records-to-demand">Records-to-Demand brief</Link>
          <Link href="/#founding-partners">Founding partners</Link>
          <Link href="/conversation">Book a conversation</Link>
          <a href="https://www.primeelixirco.com/">Prime Elixir</a>
          <Link href="/privacy">Privacy</Link>
        </nav>
        <div className="footer-bottom">
          <p className="copyright">
            © {new Date().getFullYear()} Prime Elixir. All rights reserved.
          </p>
          <p className="footer-boundary-note">
            Catena carries agreed operational execution and follow-through;
            participating law firms retain client relationships, legal judgment,
            and final authority.
          </p>
        </div>
      </div>
    </footer>
  );
}

export function OperatingModelLedger() {
  return <HeroControlPlane />;
}

export function OperatingModelFilm() {
  return (
    <figure className="operation-film" aria-labelledby="film-title">
      <div className="film-heading">
        <div>
          <span className="film-kicker">Foundational Lane Walkthrough</span>
          <h3 id="film-title">
            Watch how Catena resolves gaps and stages the demand (42s)
          </h3>
        </div>
        <span className="film-badge">42 sec · Captioned</span>
      </div>
      <video
        controls
        playsInline
        preload="metadata"
        width="1280"
        height="720"
        poster="/media/records-to-demand-explainer-poster-v3.webp"
        aria-label="Catena requests records and bills, resolves gaps and prepares the demand package for review"
      >
        <source
          src="/media/records-to-demand-explainer-v3.mp4"
          type="video/mp4"
        />
        <track
          kind="captions"
          src="/media/records-to-demand-explainer-v3.vtt"
          srcLang="en"
          label="English"
          default
        />
        <p>
          <a href="/media/records-to-demand-explainer-v3.mp4">
            Watch the short walkthrough
          </a>{" "}
          or read the step-by-step sequence below.
        </p>
      </video>
      <details className="film-transcript">
        <summary>
          <span>Inspect the 6-step walkthrough transcript</span>
          <span className="accordion-icon" aria-hidden="true">
            +
          </span>
        </summary>
        <div className="transcript-content">
          <p>
            <strong>1. Matter routing &amp; admission.</strong> Route a defined
            set, overflow rule, or caseload. Catena establishes required
            providers, date ranges, and governing criteria under your policy.
          </p>
          <p>
            <strong>2. Return verification.</strong> Medical records arrive, but
            a required itemized CPT billing ledger is missing. Catena checks the
            return against requirements and flags the deficiency.
          </p>
          <p>
            <strong>3. Deficiency resolution.</strong> When a provider sends a
            bare balance summary instead of dated CPT charges, Catena chases the
            correction and verifies the updated itemized ledger.
          </p>
          <p>
            <strong>4. Mid-stream treatment signal.</strong> When an August 14
            note discloses a new lumbar MRI referral, Catena preserves earlier
            evidence in history and reopens readiness automatically.
          </p>
          <p>
            <strong>5. Reserved firm judgment.</strong> Only legal decisions—like
            whether to hold for the new MRI or apply a treatment cutoff—route to
            your designated reviewer with linked records.
          </p>
          <p>
            <strong>6. Qualified demand preparation.</strong> With all records,
            itemized bills, and firm decisions complete, Catena stages the
            verified chronology, specials, and demand package for attorney
            review.
          </p>
        </div>
      </details>
    </figure>
  );
}
