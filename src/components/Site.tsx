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
          <Link href="/#example-matter">How it works</Link>
          <Link href="/#assignment">Starting offer</Link>
          <Link href="/#ownership">Scope</Link>
          <Link href="/records-to-demand">Records-to-Demand</Link>
          <Link href="/security">Security</Link>
          <Link className="nav-inquiry" href="/conversation">
            Book a 15-min fit call <Arrow />
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
          <Link href="/#example-matter">How it works</Link>
          <Link href="/#assignment">Starting offer &amp; economics</Link>
          <Link href="/#ownership">Pre-lit scope</Link>
          <Link href="/records-to-demand">Records-to-Demand brief</Link>
          <Link href="/security">Security &amp; data handling</Link>
          <Link href="/conversation">Book a fit call</Link>
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
          <span className="film-kicker">
            Illustrative Workflow Walkthrough · Synthetic Data
          </span>
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
        aria-label="Constructed walkthrough showing how Catena requests records and bills, resolves gaps, and prepares the demand package for review"
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
            <strong>1. Matter routing &amp; admission.</strong> Start with a
            selected group of matters or an overflow rule. Catena establishes
            required providers, date ranges, and governing criteria under your
            policy.
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
