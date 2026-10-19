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
                  <span className="nav-dropdown-kicker">Continuity &amp; Handover</span>
                  <Link href="/#continuity" className="nav-dropdown-item">
                    <strong>When Staff or Caseloads Shift</strong>
                    <span>Follow-through keeps moving when a case manager leaves or queues change</span>
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
              <span className="nav-dropdown-kicker">How You Assign Work</span>
              <Link href="/#assignment" className="nav-dropdown-item">
                <strong>01 · Defined Set</strong>
                <span>Start with a bounded group of 10–25 eligible files</span>
              </Link>
              <Link href="/#assignment" className="nav-dropdown-item">
                <strong>02 · 30+ Day Stall / Overflow Rule</strong>
                <span>Route stalled provider chases or capacity spikes</span>
              </Link>
              <Link href="/#assignment" className="nav-dropdown-item">
                <strong>03 · Standing Caseload</strong>
                <span>Continuous pre-lit execution across a segment or pod</span>
              </Link>
            </div>
          </div>

          <Link href="/records-to-demand">Records-to-Demand</Link>
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
        <span className="film-badge">42 sec · Voiceover + Captions</span>
      </div>
      <video
        controls
        playsInline
        preload="metadata"
        width="1280"
        height="720"
        poster="/media/records-to-demand-walkthrough-poster-v4.webp"
        aria-label="Catena requests records and bills, resolves gaps and prepares the demand package for review"
      >
        <source
          src="/media/records-to-demand-walkthrough-v4.mp4"
          type="video/mp4"
        />
        <track
          kind="captions"
          src="/media/records-to-demand-walkthrough-v4.vtt"
          srcLang="en"
          label="English"
          default
        />
        <p>
          <a href="/media/records-to-demand-walkthrough-v4.mp4">
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
            <strong>1. Matter #2048 assigned to Catena (00:00–00:04).</strong>{" "}
            Four providers; S. Jenkins (your paralegal) keeps the file while
            Catena carries the follow-through. Grady EMS records and itemized
            bill are requested, returned, and verified.
          </p>
          <p>
            <strong>
              2. A returned record isn’t a ready file (00:04–00:11).
            </strong>{" "}
            Peachtree Ortho returns a bare balance summary—no CPT codes and no
            itemized bill.
          </p>
          <p>
            <strong>
              3. Catena chased it; your paralegal didn’t (00:11–00:19).
            </strong>{" "}
            Catena rejects the balance summary, requests the itemized ledger,
            and verifies all 14 service lines without a handoff.
          </p>
          <p>
            <strong>
              4. New treatment appears; readiness reopens (00:19–00:27).
            </strong>{" "}
            An 08/14 follow-up note references a new lumbar MRI. Catena pauses
            readiness while keeping verified records locked.
          </p>
          <p>
            <strong>
              5. One question goes to the firm—records attached (00:27–00:35).
            </strong>{" "}
            Catena routes the legal call to S. Jenkins with both options and the
            supporting PDFs attached: hold the demand for MRI results, or
            proceed on the 07/31 cutoff. Everything else continues.
          </p>
          <p>
            <strong>
              6. Your firm decides; Catena carried the rest (00:35–00:42).
            </strong>{" "}
            When the firm answers (“Hold for MRI results”), Catena adds the
            records, prepares the chronology and specials, and stages the demand
            for your review. Valuation, sending, and settlement stay with you.
          </p>
        </div>
      </details>
    </figure>
  );
}
