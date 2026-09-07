import Link from "next/link";
import Image from "next/image";
import {
  Arrow,
  ClosingInvitation,
  OperatingModelFilm,
  StartSteps,
} from "@/components/Site";

export default function Home() {
  return (
    <main id="main-content" tabIndex={-1}>
      <section className="hero wrap">
        <p className="eyebrow">
          <span className="lane-mark" aria-hidden="true" />
          Records-to-Demand · For plaintiff PI firms
        </p>
        <div className="hero-stage">
          <h1>
            The records arrived.
            <br />
            <em>The file still isn’t ready.</em>
          </h1>
          <figure className="hero-art">
            <Image
              src="/media/catena-operation-v3.png"
              width={1024}
              height={687}
              sizes="(max-width: 800px) calc(100vw - 44px), (max-width: 1296px) 48vw, 560px"
              preload
              alt="Layered ivory, sage and teal folders linked by paper paths, with a central break before an open tray."
            />
            <figcaption>
              <span>From records received to readiness explained.</span>
              <span>Editorial illustration</span>
            </figcaption>
          </figure>
          <div className="hero-message">
            <p className="hero-promise">
              Turn on Records-to-Demand. Catena runs the lane.
            </p>
            <p className="hero-description">
              Records-to-Demand is a managed service delivered by CatenaOS.
              Catena requests records and bills, works through gaps and
              corrections, and shows why the file is or is not Demand Ready.
            </p>
            <div className="hero-invitation">
              <Link className="button" href="/records-to-demand">
                See what your firm could hand off <Arrow />
              </Link>
              <Link className="text-link" href="#proof">
                What a ready file must show <span aria-hidden="true">↓</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="hero-foot">
          <span>One defined operation. A clear boundary.</span>
          <span>Founding cohort conversations are open.</span>
        </div>
      </section>
      <section className="proof-section section" id="proof">
        <span className="anchor-alias" id="document-readiness" />
        <div className="wrap proof-layout">
          <div className="section-intro">
            <p className="eyebrow">
              A completed request is only part of the answer
            </p>
            <h2>A file’s readiness should be explainable.</h2>
            <p>
              A document can arrive with a missing bill, an unresolved
              correction or a decision that still belongs to the firm.
            </p>
            <p>
              Catena checks what came back, works through gaps and corrections,
              and determines whether the file meets your firm’s readiness
              criteria. When Catena says ready, it shows why.
            </p>
            <Link className="text-link" href="/records-to-demand#readiness">
              Explore the readiness standard <Arrow />
            </Link>
          </div>
          <OperatingModelFilm />
        </div>
      </section>
      <section className="section wrap" id="ownership">
        <span className="anchor-alias" id="how-it-works" />
        <div className="section-heading">
          <p className="eyebrow">Records-to-Demand, managed by Catena</p>
          <h2>
            Catena runs the operation.
            <br />
            <em>Your firm owns the demand.</em>
          </h2>
        </div>
        <div className="ownership-layout">
          <p className="large-note">
            CatenaOS handles the records-and-bills work from first request to a
            readiness decision. Your team keeps professional judgment and
            drafts the demand.
          </p>
          <div className="responsibility-list">
            <div>
              <span className="row-number">01</span>
              <h3>Establish and maintain requirements</h3>
              <p>
                Define the records, bills, and treatment periods the file needs
                under your firm’s criteria. Keep those requirements current as
                the matter changes.
              </p>
            </div>
            <div>
              <span className="row-number">02</span>
              <h3>Request records and bills</h3>
              <p>
                Send authorized requests, follow up on outstanding returns,
                and work through delays. Your team does not have to manage the
                daily chase.
              </p>
            </div>
            <div>
              <span className="row-number">03</span>
              <h3>Check returns and resolve gaps</h3>
              <p>
                Check what comes back against what was requested. Pursue
                missing records, incomplete date ranges, and incorrect bills,
                bringing professional decisions to your firm with context.
              </p>
            </div>
            <div>
              <span className="row-number">04</span>
              <h3>Determine Demand Readiness</h3>
              <p>
                Determine whether the file meets your firm’s readiness
                criteria. Show the evidence behind the decision, identify
                remaining gaps, and reopen readiness when new information
                changes the answer.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="boundary-band">
        <div className="wrap boundary-layout">
          <p className="eyebrow">The firm’s authority stays clear</p>
          <div>
            <h2>
              Catena owns whether the file is demand-ready.
              <br />
              <em>The firm owns the demand.</em>
            </h2>
            <p>
              Your firm retains policy, client relationships, legal and medical
              judgment, case strategy, unusual waivers, the demand, settlement
              and professional responsibility.
            </p>
          </div>
        </div>
      </section>
      <section className="section wrap" id="start">
        <div className="section-heading">
          <p className="eyebrow">How we start</p>
          <h2>
            Understand the fit.
            <br />
            <em>Then define the work.</em>
          </h2>
        </div>
        <StartSteps />
      </section>
      <section className="fit-section section" id="fit">
        <span className="anchor-alias" id="integrations" />
        <div className="wrap fit-layout">
          <div className="section-intro">
            <p className="eyebrow">A recurring operation worth carrying</p>
            <h2>
              For firms with
              <br />
              work that keeps
              <br />
              <em>coming back.</em>
            </h2>
            <ul className="fit-points">
              <li>
                Plaintiff PI and recurring pre-suit records-and-bills work.
              </li>
              <li>Repeatable work with unresolved daily coordination.</li>
              <li>A buyer and an identifiable operating or readiness owner.</li>
            </ul>
          </div>
          <div className="faq">
            <details>
              <summary>What changes in our current workflow?</summary>
              <p>
                Scoping starts with the work your firm needs carried, your
                requirements, and the systems, staff and vendors involved. We
                establish Catena’s operating responsibility and the decisions
                that remain with you. Existing arrangements, including potential
                consolidation, are part of that discussion.
              </p>
            </details>
            <details>
              <summary>Is this just records retrieval?</summary>
              <p>
                Records-to-Demand includes requirements, requests, waits,
                follow-up, corrections, recovery and readiness evaluation. A
                returned request is one event within the operation. The file’s
                readiness still needs an evidence-backed explanation.
              </p>
            </details>
            <details>
              <summary>Where do people participate?</summary>
              <p>
                Catena uses AI, operators and approved external services and
                systems where needed to perform specific work within the
                operation. Catena handles their day-to-day coordination.
                Decisions involving firm policy or professional judgment stay
                with your firm.
              </p>
            </details>
            <details>
              <summary>What do we review before relying on it?</summary>
              <p>
                The lane scope, the evidence supporting readiness, the
                conditions that require your decision, and the access and
                data-handling arrangements for your firm. Specific systems and
                access requirements are established during scoping.
              </p>
            </details>
            <details>
              <summary>Can we start live work immediately?</summary>
              <p>
                We are speaking with firms about the founding Records-to-Demand
                cohort. Scope and terms are discussed directly. Live delivery
                begins only after separate admission; signing alone does not
                start live work.
              </p>
            </details>
          </div>
        </div>
      </section>
      <section className="founder-section wrap" id="founder">
        <div>
          <p className="eyebrow">The company behind Catena</p>
          <h2>Built by Prime Elixir.</h2>
        </div>
        <div>
          <p>
            Brian McLeod founded Prime Elixir and created CatenaOS. His
            background spans engineering leadership at Disney Streaming,
            Payspan and Logility, with experience in resilient payments,
            high-volume platforms and understanding how systems affect users.
          </p>
          <p>
            That experience informs Catena’s focus on operating responsibility
            and evidence: a system can complete an action while the underlying
            work remains unresolved.
          </p>
          <a className="text-link" href="https://www.primeelixirco.com/">
            About the company <Arrow />
          </a>
        </div>
      </section>
      <ClosingInvitation />
    </main>
  );
}
