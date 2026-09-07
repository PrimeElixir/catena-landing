import Link from "next/link";
import { MobileNavigation } from "./MobileNavigation";

export function Arrow() {
  return (
    <span aria-hidden="true" className="arrow">
      ↗
    </span>
  );
}

export function SiteHeader() {
  return (
    <header className="site-header wrap">
      <Link className="wordmark" href="/" aria-label="Catena home">
        catena<span aria-hidden="true">.</span>
      </Link>
      <nav aria-label="Main navigation" className="desktop-nav">
        <Link href="/records-to-demand">The lane</Link>
        <Link href="/#proof">Readiness</Link>
        <Link className="nav-inquiry" href="/conversation">
          Explore Catena for your firm <Arrow />
        </Link>
      </nav>
      <MobileNavigation />
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer wrap">
      <div>
        <Link className="wordmark" href="/" aria-label="Catena home">
          catena<span aria-hidden="true">.</span>
        </Link>
        <p>
          CatenaOS is the platform.
          <br />
          Prime Elixir is the company behind it.
        </p>
      </div>
      <nav aria-label="Footer navigation">
        <Link href="/records-to-demand">Records-to-Demand</Link>
        <Link href="/conversation">Inquire</Link>
        <a href="https://www.primeelixirco.com/">Company</a>
        <Link href="/privacy">Privacy</Link>
      </nav>
      <p className="copyright">© {new Date().getFullYear()} Prime Elixir</p>
    </footer>
  );
}

export function OperatingModelFilm() {
  return (
    <figure className="operation-film" aria-labelledby="film-title">
      <div className="film-heading">
        <h3 id="film-title">Catena runs Records-to-Demand.</h3>
        <span>42 seconds · No sound</span>
      </div>
      <video
        controls
        playsInline
        preload="none"
        width="1280"
        height="720"
        poster="/media/records-to-demand-explainer-poster-v3.webp"
        aria-label="Catena requests records and bills, resolves gaps and explains the readiness decision"
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
            Watch the short film
          </a>{" "}
          or read the visual transcript below.
        </p>
      </video>
      <figcaption>Illustrative example of the service and its readiness decision.</figcaption>
      <details className="film-transcript">
        <summary>Read the visual transcript</summary>
        <p>
          <strong>Turn on Records-to-Demand. Catena runs the lane.</strong>{" "}
          One example file stays in view. Catena maintains its requirements and
          sends authorized requests for records and bills.
        </p>
        <p>
          <strong>
            Catena checks what comes back.
          </strong>{" "}
          Records arrive, but the required bill is missing. Catena checks the
          return against the requirements. The example file is not ready.
        </p>
        <p>
          <strong>
            Catena works through gaps and corrections.
          </strong>{" "}
          A returned bill needs correction. Catena requests the correction and
          checks the corrected return. Completing that work alone does not
          establish readiness.
        </p>
        <p>
          <strong>
            When Catena says ready, it shows why.
          </strong>{" "}
          In this illustrative example, required records and the corrected bill
          have been accepted, and required firm decisions have been recorded.
          Catena evaluates those conditions under the firm’s criteria and
          explains the Demand Ready decision.
        </p>
        <p>
          <strong>New evidence can change readiness.</strong>{" "}
          New information introduces a gap. Catena reopens the readiness
          decision and identifies what needs attention.
        </p>
        <p>
          <strong>Your firm keeps professional judgment and drafts the demand.</strong>{" "}
          The example file remains on Catena’s side of a visible boundary. Policy,
          professional judgment, drafting and strategy remain with the firm.
        </p>
      </details>
    </figure>
  );
}

export function StartSteps() {
  return (
    <ol className="start-steps">
      <li>
        <span className="step-number" aria-hidden="true">
          01
        </span>
        <h3>Discuss your operation</h3>
        <p>
          Start with your current records-and-bills process and what you would
          like Catena to take on. No client files are needed for this conversation.
        </p>
      </li>
      <li>
        <span className="step-number" aria-hidden="true">
          02
        </span>
        <h3>Inspect and scope</h3>
        <p>
          Together, involve the right people at your firm, review the evidence
          you would need, and agree scope, systems and responsibilities.
        </p>
      </li>
      <li>
        <span className="step-number" aria-hidden="true">
          03
        </span>
        <h3>Prepare for live work</h3>
        <p>
          Complete onboarding and the agreed operating conditions. Live work
          begins only after separate go-live approval.
        </p>
      </li>
    </ol>
  );
}

export function ClosingInvitation() {
  return (
    <section className="closing-section">
      <div className="wrap">
        <p className="eyebrow">Records-to-Demand at your firm</p>
        <h2>
          What would it mean
          <br />
          to hand off the operation?
        </h2>
        <div className="actions">
          <Link className="button button-light" href="/conversation">
            Discuss your firm’s fit <Arrow />
          </Link>
          <Link className="text-link" href="/records-to-demand">
            Read the lane brief <Arrow />
          </Link>
        </div>
        <p>
          Start with your current process and whether a founding cohort makes
          sense. No client files needed.
        </p>
      </div>
    </section>
  );
}
