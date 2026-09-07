import type { Metadata } from "next";
import Link from "next/link";
import { Arrow, StartSteps } from "@/components/Site";
import { PrintBrief } from "@/components/PrintBrief";

export const metadata: Metadata = {
  title: "The work your firm could hand off",
  description:
    "A clear scope for Records-to-Demand: what Catena carries, what your firm retains, and what a Demand Ready decision must show.",
  alternates: { canonical: "/records-to-demand" },
  openGraph: {
    url: "/records-to-demand",
    title: "Records-to-Demand: what Catena carries",
    description:
      "Scope, firm authority and the evidence behind Demand Readiness.",
    images: [{ url: "/catena-social.png", width: 1200, height: 630 }],
  },
};

export default function LaneBrief() {
  return (
    <main id="main-content" tabIndex={-1} className="wrap">
      <header className="page-hero">
        <p className="eyebrow">The lane brief · Records-to-Demand</p>
        <h1>
          The work your firm
          <br />
          <em>could hand off.</em>
        </h1>
        <p className="page-deck">
          Records-to-Demand is the service. CatenaOS runs it. See the work
          Catena performs, why a file is or is not ready, and which decisions
          require your firm’s authority.
        </p>
        <div className="brief-meta">
          <span>For plaintiff personal injury firms</span>
          <span>Share with your buyer and operating owner</span>
          <PrintBrief />
        </div>
      </header>
      <section className="brief-section brief-row" id="scope">
        <div>
          <p className="eyebrow">01 / Catena’s responsibility</p>
          <h2>
            Run the operation
            <br />
            through Demand Readiness.
          </h2>
        </div>
        <div>
          <p>
            CatenaOS runs your records-and-bills operation. It maintains what
            is needed, makes authorized requests, checks what comes back and
            works through gaps and corrections. Catena determines whether the
            file meets your firm’s readiness criteria and explains why.
          </p>
          <ul>
            <li>
              Establish the records and bills required under the firm’s policy.
            </li>
            <li>Execute authorized requests and follow-up.</li>
            <li>Handle corrections, missing information and recovery.</li>
            <li>Check returned records and bills against what is required.</li>
            <li>
              Evaluate Demand Readiness and explain the evidence behind it.
            </li>
            <li>Reopen readiness when new evidence changes the answer.</li>
          </ul>
          <div className="brief-authority">
            <h3>One operating responsibility</h3>
            <p>
              A request being completed or a document being received does not,
              by itself, establish that the file is Demand Ready.
            </p>
          </div>
        </div>
      </section>
      <section className="brief-section brief-row">
        <div>
          <p className="eyebrow">02 / Your firm’s authority</p>
          <h2>
            The firm
            <br />
            owns the demand.
          </h2>
        </div>
        <div>
          <p>
            Catena owns whether the file is demand-ready. Your firm retains the
            decisions and professional authority that govern the work.
          </p>
          <ul>
            <li>
              Firm policy, client relationships and professional responsibility.
            </li>
            <li>
              Legal and medical judgment, case strategy and unusual waivers.
            </li>
            <li>The demand, settlement and representation decisions.</li>
          </ul>
          <p>
            When a condition needs your authority, the decision and its context
            should be clear. The operating lane does not transfer professional
            judgment to Catena.
          </p>
        </div>
      </section>
      <section className="brief-section brief-row" id="readiness">
        <div>
          <p className="eyebrow">03 / The evidence standard</p>
          <h2>
            Every readiness
            <br />
            decision should
            <br />
            <em>show its work.</em>
          </h2>
        </div>
        <div>
          <p>
            These are the questions to inspect in a product conversation. A
            readiness label needs an explanation grounded in the file’s
            governing conditions.
          </p>
          <div className="proof-pair">
            <div>
              <h3>When the file is not ready yet</h3>
              <ul>
                <li>What is the controlling gap?</li>
                <li>What work does Catena carry next?</li>
                <li>What bounded decision needs the firm?</li>
              </ul>
            </div>
            <div>
              <h3>When the file is Demand Ready</h3>
              <ul>
                <li>Which conditions govern readiness?</li>
                <li>What accepted evidence supports them?</li>
                <li>Which firm decisions are part of the result?</li>
                <li>What new information would reopen it?</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="brief-section brief-row">
        <div>
          <p className="eyebrow">04 / Fit and adoption</p>
          <h2>
            Start with the
            <br />
            operation you have.
          </h2>
        </div>
        <div>
          <p>
            The first lane is for plaintiff PI firms with a steady flow of
            pre-suit matters and a team managing records requests, missing bills,
            corrections, and the final readiness check. Catena takes
            responsibility for that operation; your firm keeps professional
            judgment and drafts the demand.
          </p>
          <p>
            Your current systems, staff and vendors are scoping inputs. We
            discuss what responsibility you want carried, the decisions you
            retain, and any changes or consolidation you are considering.
          </p>
          <p>
            Before live work, the scope, access arrangements, data handling and
            evidence needed for reliance must be established for your firm.
          </p>
        </div>
      </section>
      <section className="brief-section">
        <p className="eyebrow">05 / How we start</p>
        <StartSteps />
      </section>
      <section className="brief-bottom">
        <h2>
          What would Records-to-Demand
          <br />
          look like at your firm?
        </h2>
        <p>
          Start a conversation about your current operation and whether Catena
          fits.
        </p>
        <div className="actions">
          <Link className="button" href="/conversation">
            Explore this for your firm <Arrow />
          </Link>
          <Link className="text-link" href="/">
            Back to Catena <Arrow />
          </Link>
        </div>
        <p className="form-privacy">
          Founding cohort conversations are open. Detailed scope and terms are
          discussed directly. Live delivery requires separate admission.
        </p>
      </section>
    </main>
  );
}
