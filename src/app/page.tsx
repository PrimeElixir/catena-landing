import Link from "next/link";
import Image from "next/image";
import { RequirementExample } from "@/components/RequirementExample";
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
              <Link className="text-link" href="/conversation">
                Discuss your firm’s fit in 15 minutes <Arrow />
              </Link>
            </div>
          </div>
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
          <div className="proof-example-stack">
            <OperatingModelFilm />
            <RequirementExample />
          </div>
        </div>
      </section>
      <section className="section wrap" id="ownership">
        <span className="anchor-alias" id="how-it-works" />
        <div className="section-heading">
          <p className="eyebrow">Records-to-Demand, managed by Catena</p>
          <h2>
            Less daily chase.
            <br />
            <em>A clear readiness answer.</em>
          </h2>
        </div>
        <div className="ownership-layout">
          <p className="large-note">
            Even a well-run team carries recurring records-and-bills work.
            Handing off that operation creates room for the work that needs
            your firm’s attention.
          </p>
          <div className="responsibility-list">
            <div>
              <span className="row-number">01</span>
              <h3>The work your team carries today</h3>
              <p>
                Carry the requests, chase missing returns, resolve corrections,
                and establish whether the file is ready. Receiving documents
                still leaves that work with your team.
              </p>
            </div>
            <div>
              <span className="row-number">02</span>
              <h3>The operation Catena takes on</h3>
              <p>
                CatenaOS runs that records-and-bills operation under your firm’s
                agreed criteria, from authorized requests through gaps,
                corrections and an evidence-backed readiness decision.
              </p>
            </div>
            <div>
              <span className="row-number">03</span>
              <h3>What changes for your team</h3>
              <p>
                Your team handles professional decisions with supporting
                context, instead of supervising each request and correction.
                Agreed reviews and approvals remain part of the work.
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
            <p className="eyebrow">For plaintiff personal injury firms</p>
            <h2>
              Keep control of your cases.
              <br />
              <em>Let Catena run Records-to-Demand.</em>
            </h2>
            <p>
              For firms with a steady flow of pre-suit matters and a team still
              managing records requests, missing bills, corrections, and the
              final readiness check.
            </p>
            <p>
              Catena takes responsibility for that operation. Your firm keeps
              professional judgment and drafts the demand.
            </p>
          </div>
          <div className="faq">
            <details>
              <summary>What will our team still need to do?</summary>
              <p>
                Your firm sets policy and readiness criteria, makes professional
                decisions, maintains client relationships, and drafts the demand.
                You also complete the reviews and approvals agreed during
                onboarding. Catena runs the daily records-and-bills operation
                and brings decisions that need your authority with supporting
                context.
              </p>
            </details>
            <details>
              <summary>Do we need to change our systems or vendors?</summary>
              <p>
                We review your current systems and vendors during scoping, then
                agree what can stay, what needs to change, and how Catena will
                get authorized access. Compatibility and any vendor changes are
                confirmed for your firm before live work.
              </p>
            </details>
            <details>
              <summary>How do we evaluate Catena before relying on it?</summary>
              <p>
                Before live work, review the scope, example readiness decisions,
                supporting evidence, and access and data-handling arrangements.
                Initial delivery includes full review of readiness decisions
                against your firm’s agreed criteria. Routine re-review is reduced
                only when calibration supports it and your firm agrees. A
                material failure returns the operation to full review.
              </p>
            </details>
            <details>
              <summary>How do we get started?</summary>
              <p>
                Start with a conversation about your current process and whether
                a founding cohort fits. No client files are needed for that
                conversation. Together, we involve the appropriate firm
                participants, define scope, agree responsibilities, and complete
                onboarding. Live work starts only after the agreed operating
                conditions are met and separate go-live approval is complete.
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
