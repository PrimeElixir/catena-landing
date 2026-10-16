import type { Metadata } from "next";
import Link from "next/link";
import { Arrow } from "@/components/Site";
import { CONTACT_EMAIL } from "@/lib/booking";

export const metadata: Metadata = {
  title: "Security, Data Handling & Governance",
  description:
    "How Catena handles matter access, system connections, AI boundaries, auditability, retention, and written agreements for plaintiff personal injury firms.",
  alternates: { canonical: "/security" },
  openGraph: {
    url: "/security",
    title: "Security, Data Handling & Governance | Catena",
    description:
      "Access controls, AI model boundaries, retention, and pre-engagement agreements for Catena’s Managed Pre-Lit Operations Platform.",
    images: [{ url: "/catena-social.png", width: 1200, height: 630 }],
  },
};

const securityPillars = [
  {
    kicker: "01 · Pre-Engagement Boundary",
    title: "Agreements established before any live matter work",
    points: [
      "This public website does not accept client files, medical records, or confidential matter data.",
      "Before any live matter is admitted, your firm and Prime Elixir execute a written engagement agreement defining covered responsibilities, authorized personnel, confidentiality obligations, and applicable data-processing or HIPAA Business Associate terms.",
      "No matter access or retrieval request occurs outside the written scope approved by your firm.",
    ],
  },
  {
    kicker: "02 · System & Matter Access",
    title: "Scoped access alongside your existing systems",
    points: [
      "Catena works alongside your practice management system (such as Clio, Filevine, or CASEpeer) and document storage using scoped, role-restricted credentials or designated matter folders agreed during onboarding.",
      "Access is limited to the specific matters and operational responsibilities your firm assigns to Catena.",
      "Every request, document check, deficiency follow-up, and routed decision is logged against the matter record so your team can audit what was done and why.",
    ],
  },
  {
    kicker: "03 · AI & Evidence Discipline",
    title: "No training public models on firm or client files",
    points: [
      "Client identities, medical records, billing ledgers, and firm playbooks are never used to train public or shared third-party foundation models.",
      "CatenaOS does not treat unverified model summaries as operational truth: every readiness status, billing reconciliation, and chronology entry is linked to the underlying source pages for human inspection.",
      "Legal judgment, treatment cutoff choices, deficiency waivers, and demand valuation are never automated—they are routed explicitly to your firm’s designated reviewer.",
    ],
  },
  {
    kicker: "04 · Retrieval & Service Providers",
    title: "Controlled vendor and supplier coordination",
    points: [
      "During onboarding, your firm chooses whether Catena coordinates requests through your incumbent retrieval vendor or uses a Catena-managed retrieval supplier.",
      "Patient authorizations (HIPAA releases) are validated against matter requirements before requests are dispatched to medical or billing facilities.",
      "Infrastructure and cloud service providers used to operate CatenaOS are bound by confidentiality and security obligations and are disclosed to your firm during scoping.",
    ],
  },
  {
    kicker: "05 · Ownership, Retention & Handover",
    title: "Your firm owns its records and can exit cleanly at any time",
    points: [
      "Your firm retains full ownership of all client files, retrieved medical records, itemized bills, chronologies, and demand packages.",
      "If you transfer a matter back in-house or conclude an engagement, Catena provides a structured handover including all retrieved documents, open provider request logs, and next-action status.",
      "Upon engagement completion and handover confirmation, matter data held in Catena’s operating environment is deleted or archived strictly according to your firm’s written retention and destruction instructions.",
    ],
  },
];

export default function SecurityPage() {
  return (
    <main id="main-content" tabIndex={-1} className="page-shell">
      <div className="wrap lane-brief">
        <header className="surface-card">
          <p className="eyebrow">Trust, Security &amp; Data Handling</p>
          <h1>Security and data governance for assigned matters.</h1>
          <p className="page-deck">
            Entrusting pre-litigation work requires clear rules on how matter
            files are accessed, how AI is governed, who touches your systems,
            and how your firm retains ownership and control.
          </p>
          <div className="booking-facts">
            <span className="fact-pill">✓ Written agreements before live work</span>
            <span className="fact-pill">✓ Zero public model training on client files</span>
            <span className="fact-pill">✓ Scoped CMS &amp; folder access</span>
            <span className="fact-pill">✓ Full data ownership &amp; clean handover</span>
          </div>
        </header>

        <section className="surface-card" aria-labelledby="pillars-title">
          <div className="section-header-compact">
            <div>
              <p className="eyebrow">Operational Safeguards</p>
              <h2 id="pillars-title">
                How Catena protects firm and client information.
              </h2>
            </div>
            <p className="section-lead">
              We publish only controls we can substantiate and establish exact
              system and compliance arrangements with your firm before live
              onboarding.
            </p>
          </div>

          <div className="security-grid">
            {securityPillars.map((pillar) => (
              <article key={pillar.title} className="evidence-card">
                <span className="evidence-pill">{pillar.kicker}</span>
                <h3>{pillar.title}</h3>
                <ul>
                  {pillar.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="surface-card" aria-labelledby="security-qa-title">
          <div className="section-header-compact">
            <div>
              <p className="eyebrow">Security Review &amp; Onboarding</p>
              <h2 id="security-qa-title">
                What we review with your operations and IT leads.
              </h2>
            </div>
            <p className="section-lead">
              During a Founding Partner scoping review, we walk through your
              exact environment so your managing partner and operations lead
              approve every connection up front.
            </p>
          </div>

          <div className="evidence-pair">
            <div className="evidence-card">
              <h3>Before onboarding begins</h3>
              <ul>
                <li>
                  <strong>Written scope &amp; confidentiality:</strong> Execute
                  mutual confidentiality, service terms, and applicable HIPAA
                  Business Associate / data-processing agreements.
                </li>
                <li>
                  <strong>Access boundary definition:</strong> Agree whether
                  Catena works inside a restricted CMS role, a dedicated shared
                  matter folder, or scheduled exports.
                </li>
                <li>
                  <strong>Named reviewers &amp; escalation contacts:</strong>{" "}
                  Designate the firm owners who approve cutoffs, waivers, and
                  account access.
                </li>
              </ul>
            </div>
            <div className="evidence-card evidence-card-ready">
              <h3>Questions or security questionnaires?</h3>
              <p className="section-note">
                If your firm requires a vendor security walkthrough, data-flow
                review, or sample engagement terms before starting a cohort, book
                a 15-minute fit call or contact{" "}
                <a href={"mailto:" + CONTACT_EMAIL}>{CONTACT_EMAIL}</a>.
              </p>
              <div className="actions">
                <Link className="button" href="/conversation">
                  Book a 15-minute fit call <Arrow />
                </Link>
                <Link className="text-link" href="/privacy">
                  Read website privacy notice <Arrow />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
