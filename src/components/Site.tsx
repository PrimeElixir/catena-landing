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
        <h3 id="film-title">Received is the beginning.</h3>
        <span>30 seconds · No sound</span>
      </div>
      <video
        controls
        playsInline
        preload="none"
        width="1280"
        height="720"
        poster="/media/records-to-demand-explainer-poster-v2.webp"
        aria-label="How Catena carries the work from received records toward Demand Readiness"
      >
        <source
          src="/media/records-to-demand-explainer-v2.mp4"
          type="video/mp4"
        />
        <track
          kind="captions"
          src="/media/records-to-demand-explainer-v2.vtt"
          srcLang="en"
          label="English"
          default
        />
        <p>
          <a href="/media/records-to-demand-explainer-v2.mp4">
            Watch the short film
          </a>{" "}
          or read the visual transcript below.
        </p>
      </video>
      <figcaption>Illustration of the operating model.</figcaption>
      <details className="film-transcript">
        <summary>Read the visual transcript</summary>
        <p>
          <strong>The records arrived. The file may still need more.</strong>{" "}
          Three record sheets travel along a teal ribbon into an open folio.
          Arrival does not mark the file complete.
        </p>
        <p>
          <strong>
            A missing bill. An unresolved correction. A decision for the firm.
          </strong>{" "}
          An empty bill outline, a moving correction strip and a separate firm
          decision sheet remain visibly unresolved.
        </p>
        <p>
          <strong>
            Catena carries follow-up and keeps the next work owned.
          </strong>{" "}
          Paper assignments move between trays labeled “Follow-up” and “Bounded
          work,” pausing and continuing along the same teal ribbon.
        </p>
        <p>
          <strong>
            Readiness needs an explanation. The firm owns the demand.
          </strong>{" "}
          Sheets gather in an open folio labeled “Readiness evidence.” Across a
          visible boundary, a separate “Firm decisions” sheet remains with the
          firm. The illustration does not declare a file ready.
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
