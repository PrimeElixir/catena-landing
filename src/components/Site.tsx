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

export function ReadinessExplanation() {
  return (
    <figure className="readiness-figure" aria-labelledby="explanation-title">
      <figcaption>
        <span className="eyebrow">Illustration of the operating model</span>
      </figcaption>
      <h3 id="explanation-title">
        A file’s readiness
        <br />
        should be explainable.
      </h3>
      <ol className="evidence-questions">
        <li>
          <span className="evidence-number" aria-hidden="true">
            01
          </span>
          <div>
            <h4>What is still missing?</h4>
            <p>
              The conditions keeping the file from Demand Ready, grounded in the
              firm’s requirements.
            </p>
          </div>
        </li>
        <li>
          <span className="evidence-number" aria-hidden="true">
            02
          </span>
          <div>
            <h4>What does Catena carry next?</h4>
            <p>
              The next owned work, including follow-up, corrections and bounded
              assignments.
            </p>
          </div>
        </li>
        <li>
          <span className="evidence-number" aria-hidden="true">
            03
          </span>
          <div>
            <h4>What needs the firm?</h4>
            <p>
              The decision, its context and the authority that remains with your
              firm.
            </p>
          </div>
        </li>
      </ol>
      <div className="figure-foot">
        <span>From received</span>
        <span className="figure-rule" aria-hidden="true" />
        <span>To evidence-backed readiness</span>
      </div>
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
          Bring the buyer and the person who owns readiness. Identify the
          recurring work and the burden you want carried.
        </p>
      </li>
      <li>
        <span className="step-number" aria-hidden="true">
          02
        </span>
        <h3>Inspect and scope</h3>
        <p>
          Review the evidence you would need, define the bounded lane and
          establish the decisions your firm retains.
        </p>
      </li>
      <li>
        <span className="step-number" aria-hidden="true">
          03
        </span>
        <h3>Start after admission</h3>
        <p>
          Agree scope and terms directly. Live work begins only after separate
          admission.
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
        <p>
          Start a conversation about your current operation and whether Catena
          fits.
        </p>
        <div className="actions">
          <Link className="button button-light" href="/conversation">
            Explore this for your firm <Arrow />
          </Link>
          <Link className="text-link" href="/records-to-demand">
            Read the lane brief <Arrow />
          </Link>
        </div>
      </div>
    </section>
  );
}
