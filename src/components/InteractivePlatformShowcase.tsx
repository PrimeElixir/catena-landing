"use client";

import { useState } from "react";
import Link from "next/link";

type RoutingModeId = "stall" | "defined" | "standing";

const ROUTING_MODES: Record<
  RoutingModeId,
  {
    label: string;
    shortLabel: string;
    triggerBadge: string;
    ruleSummary: string;
    activeCount: string;
    matterTitle: string;
    matterMeta: string;
    firmOwner: string;
    providers: Array<{
      name: string;
      recordsState: string;
      recordsTone: "done" | "active" | "warn";
      billingState: string;
      billingTone: "done" | "active" | "warn";
      auditDetail: string;
    }>;
    signalTitle: string;
    signalDetail: string;
    firmDecision: string;
  }
> = {
  stall: {
    label: "30+ Day Stall / Overflow Rule",
    shortLabel: "30+ Day Stall Rule",
    triggerBadge: "Stall Rule · Day 34",
    ruleSummary:
      "Matters with unresolved provider returns > 30 days or paralegal capacity overflow route to Catena within agreed volume bands.",
    activeCount: "Treatment & records follow-through",
    matterTitle: "MVA Bodily Injury · Matter #2048",
    matterMeta: "DOI: 04/18 · 4 Providers",
    firmOwner: "S. Jenkins (keeps the file)",
    providers: [
      {
        name: "Grady EMS & Trauma",
        recordsState: "Verified (04/18)",
        recordsTone: "done",
        billingState: "Itemized CPT Verified ($4,820)",
        billingTone: "done",
        auditDetail:
          "Emergency transport run sheet & ER admission records matched against UB-04 itemized charges ($4,820.00).",
      },
      {
        name: "Peachtree Orthopedics",
        recordsState: "Verified through 07/31",
        recordsTone: "done",
        billingState: "Balance summary rejected → CPT ledger verified",
        billingTone: "done",
        auditDetail:
          "Provider initially returned a bare $8,420 balance summary. Catena flagged the missing CPT codes, requested the itemized ledger, and verified all 14 dated service lines.",
      },
      {
        name: "Atlanta Spine & Imaging",
        recordsState: "New 08/14 MRI referral detected",
        recordsTone: "warn",
        billingState: "Awaiting cutoff decision",
        billingTone: "active",
        auditDetail:
          "08/14 orthopedic follow-up note disclosed a new lumbar MRI referral. Earlier verified evidence stays locked in history while readiness reopens.",
      },
    ],
    signalTitle: "Readiness Reopened Automatically",
    signalDetail:
      "08/14 follow-up note references a new lumbar MRI referral. Earlier verified records stay locked; readiness paused until resolved.",
    firmDecision:
      "Hold demand for August MRI results or proceed with 07/31 cutoff?",
  },
  defined: {
    label: "Defined Matter Set",
    shortLabel: "Defined Set",
    triggerBadge: "Selected Starting Group",
    ruleSummary:
      "Your firm selects a bounded initial group of eligible pre-suit matters and chooses which responsibilities Catena carries.",
    activeCount: "Qualified demand preparation",
    matterTitle: "Commercial Rear-End · Matter #1982",
    matterMeta: "DOI: 03/09 · 5 Providers",
    firmOwner: "M. Alvarez (keeps the file)",
    providers: [
      {
        name: "Northside Hospital ER",
        recordsState: "Verified (03/09)",
        recordsTone: "done",
        billingState: "Itemized UB-04 Verified ($9,140)",
        billingTone: "done",
        auditDetail:
          "ER physician notes, CT imaging reports, and discharge instructions verified alongside itemized UB-04 hospital ledger.",
      },
      {
        name: "Metro Physical Therapy",
        recordsState: "18/18 visit notes verified",
        recordsTone: "done",
        billingState: "Itemized ledger verified ($3,600)",
        billingTone: "done",
        auditDetail:
          "Initial evaluation, 16 daily therapy notes, and final discharge summary reconciled with CPT 97110/97140 billing lines.",
      },
      {
        name: "Premier Pain Specialists",
        recordsState: "Final discharge note verified",
        recordsTone: "done",
        billingState: "Itemized ledger verified ($6,250)",
        billingTone: "done",
        auditDetail:
          "Epidural steroid injection procedure notes and itemized anesthesia/facility ledgers verified complete.",
      },
    ],
    signalTitle: "All Governing Criteria Satisfied",
    signalDetail:
      "5 of 5 provider records and itemized billing ledgers verified against firm policy. Chronology and specials assembled.",
    firmDecision:
      "Demand package staged for attorney valuation, edits, and final approval.",
  },
  standing: {
    label: "Standing Caseload Segment",
    shortLabel: "Standing Caseload",
    triggerBadge: "Standing Segment",
    ruleSummary:
      "Catena carries agreed responsibilities continuously across an eligible practice segment or attorney pod under your policy.",
    activeCount: "Intake + treatment follow-through",
    matterTitle: "Uninsured Motorist Claim · Matter #2104",
    matterMeta: "DOI: 06/22 · 3 Providers",
    firmOwner: "D. Brooks (keeps the file)",
    providers: [
      {
        name: "Intake & Coverage Verification",
        recordsState: "Crash report & UM limits confirmed",
        recordsTone: "done",
        billingState: "Case assessment memo delivered",
        billingTone: "done",
        auditDetail:
          "Police crash report, carrier declarations page ($100k UM), and initial intake facts organized into a substantive case assessment.",
      },
      {
        name: "Piedmont Urgent Care",
        recordsState: "Initial visit verified",
        recordsTone: "done",
        billingState: "Itemized ledger requested (Day 6)",
        billingTone: "active",
        auditDetail:
          "Acute visit clinical note verified; automated follow-up scheduled for outstanding itemized billing statement.",
      },
      {
        name: "ChiroCare Rehabilitation",
        recordsState: "30-day treatment check completed",
        recordsTone: "active",
        billingState: "In treatment · Next follow-up 09/01",
        billingTone: "active",
        auditDetail:
          "Client actively treating; Catena tracking treatment cadence and staging interim records request upon discharge.",
      },
    ],
    signalTitle: "Active Treatment & Records Coordination",
    signalDetail:
      "Catena is tracking ongoing treatment intervals and pursuing initial provider bills while the client completes care.",
    firmDecision:
      "No attorney interruption required—routine follow-through in progress.",
  },
};

export function HeroScopeDrawer() {
  const [open, setOpen] = useState(false);

  return (
    <div className="hero-scope-drawer">
      <button
        type="button"
        className="scope-drawer-toggle"
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
      >
        <span className="scope-drawer-dot" aria-hidden="true" />
        <span>
          {open
            ? "Hide full operating scope & authority boundary"
            : "Read full operating scope & authority boundary"}
        </span>
        <span className={`scope-chevron ${open ? "scope-chevron-open" : ""}`} aria-hidden="true">
          ▾
        </span>
      </button>

      {open && (
        <div className="scope-drawer-panel">
          <div className="scope-drawer-col">
            <span className="scope-col-kicker">Platform Scope &amp; Agreed Result</span>
            <p>
              Catena is a Managed Pre-Lit Operations Platform for plaintiff PI
              firms. We take responsibility for the work you entrust to us, from
              intake and case assessment through treatment and records
              follow-through to demand preparation, and we carry it through to
              the agreed result: required records and bills in hand, treatment
              follow-ups done, and a demand prepared for your review.
            </p>
          </div>
          <div className="scope-drawer-col">
            <span className="scope-col-kicker">Execution vs. Reserved Authority</span>
            <p>
              We handle the execution, coordination, and follow-through. We
              pursue what’s outstanding, work through delays and gaps, and keep
              each matter moving.{" "}
              <strong>
                Your firm keeps the client relationship, legal judgment, and
                final authority.
              </strong>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export function HeroControlPlane() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div
      className="control-plane hero-story-card"
      aria-label="Matter #2048 follow-through example"
    >
      {showVideo ? (
        <div className="cp-video-stage">
          <video
            controls
            autoPlay
            playsInline
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
          </video>
          <div className="cp-video-footer">
            <span>
              <strong>42-second walkthrough:</strong> How Catena resolves missing
              CPT bills, reopens state on new treatment, and stages the demand.
            </span>
            <button
              type="button"
              className="cp-back-btn"
              onClick={() => setShowVideo(false)}
            >
              ← Back to Matter #2048
            </button>
          </div>
        </div>
      ) : (
        <div className="matter-story-window">
          <div className="matter-story-header">
            <span className="matter-story-title">
              Matter #2048 · MVA · 4 providers
            </span>
          </div>

          <div className="matter-story-events">
            <div className="matter-story-row">
              <span className="matter-story-date">07/31</span>
              <p className="matter-story-text">
                Peachtree Ortho returned a balance summary. Catena rejected it,
                requested the itemized ledger, verified 14 service lines.
              </p>
            </div>

            <div className="matter-story-row">
              <span className="matter-story-date">08/14</span>
              <p className="matter-story-text">
                Follow-up note referenced a new lumbar MRI. Catena reopened
                readiness; verified records stay locked.
              </p>
            </div>

            <div className="matter-story-row matter-story-row-decision">
              <span className="matter-story-date matter-story-date-today">
                Today
              </span>
              <p className="matter-story-text matter-story-decision-text">
                Decision for the firm: hold the demand for MRI results, or
                proceed with the 07/31 cutoff?
              </p>
            </div>
          </div>

          <div className="matter-story-footer">
            <p className="matter-story-attribution">
              <strong>S. Jenkins keeps the file.</strong> Catena carried the
              follow-through.
            </p>
            <button
              type="button"
              className="matter-walkthrough-btn"
              onClick={() => setShowVideo(true)}
            >
              <span aria-hidden="true">▶</span> Watch the 42s walkthrough
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export function FullMatterExplorer() {
  const [activeMode, setActiveMode] = useState<RoutingModeId>("stall");
  const [expandedProv, setExpandedProv] = useState<number | null>(1);
  const current = ROUTING_MODES[activeMode];

  return (
    <div className="control-plane" id="live-matter" aria-label="Interactive matter breakdown">
      <div className="cp-stage-switcher">
        <span className="matter-story-title">
          Inspectable Matter Breakdown · Click any row or scenario
        </span>
        <div className="cp-tabs" role="tablist" aria-label="Assignment modes">
          {(Object.keys(ROUTING_MODES) as RoutingModeId[]).map((key) => {
            const isSelected = activeMode === key;
            return (
              <button
                key={key}
                type="button"
                role="tab"
                aria-selected={isSelected}
                className={`cp-tab ${isSelected ? "cp-tab-active" : ""}`}
                onClick={() => {
                  setActiveMode(key);
                  setExpandedProv(0);
                }}
              >
                {ROUTING_MODES[key].shortLabel}
              </button>
            );
          })}
        </div>
      </div>

      <div className="cp-window">
        <div className="cp-window-header">
          <div className="cp-window-title-group">
            <div className="cp-window-dots" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <div>
              <p className="cp-matter-name">{current.matterTitle}</p>
              <p className="cp-matter-sub">{current.matterMeta}</p>
            </div>
          </div>
          <span className="cp-trigger-badge">{current.triggerBadge}</span>
        </div>

        <div className="cp-ownership-strip">
          <div className="cp-owner-item">
            <span className="cp-owner-label">Firm Matter Owner</span>
            <span className="cp-owner-val">{current.firmOwner}</span>
          </div>
          <div className="cp-owner-divider" aria-hidden="true" />
          <div className="cp-owner-item">
            <span className="cp-owner-label">Work Carried by Catena</span>
            <span className="cp-owner-val cp-owner-catena">
              {current.activeCount}
            </span>
          </div>
        </div>

        <div className="cp-matrix">
          <div className="cp-matrix-head">
            <span>Provider / Workstream (Click row to inspect)</span>
            <span>Clinical Records</span>
            <span>Itemized Billing</span>
          </div>
          {current.providers.map((prov, idx) => {
            const isOpen = expandedProv === idx;
            return (
              <div
                key={prov.name}
                className={`cp-matrix-group ${isOpen ? "cp-matrix-group-open" : ""}`}
              >
                <button
                  type="button"
                  className="cp-matrix-row"
                  aria-expanded={isOpen}
                  onClick={() => setExpandedProv(isOpen ? null : idx)}
                >
                  <div className="cp-prov-name">
                    <span className="cp-row-chevron" aria-hidden="true">
                      {isOpen ? "▾" : "▸"}
                    </span>
                    {prov.name}
                  </div>
                  <div>
                    <span className={`cp-chip cp-chip-${prov.recordsTone}`}>
                      {prov.recordsState}
                    </span>
                  </div>
                  <div>
                    <span className={`cp-chip cp-chip-${prov.billingTone}`}>
                      {prov.billingState}
                    </span>
                  </div>
                </button>
                {isOpen && (
                  <div className="cp-matrix-drilldown">
                    <span className="cp-drill-tag">Evidence Audit Log</span>
                    <p>{prov.auditDetail}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="cp-bottom-grid">
          <div className="cp-signal-card">
            <div className="cp-card-kicker">
              <span className="cp-pulse-dot" aria-hidden="true" />
              Readiness Status
            </div>
            <p className="cp-signal-title">{current.signalTitle}</p>
            <p className="cp-signal-desc">{current.signalDetail}</p>
          </div>

          <div className="cp-decision-card">
            <div className="cp-card-kicker cp-kicker-copper">
              Decision for the Firm
            </div>
            <p className="cp-decision-text">{current.firmDecision}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

const ASSIGNMENT_CARDS = [
  {
    number: "01",
    mode: "Defined Set",
    tag: "Fastest way to start",
    headline: "Hand off a specific group of files.",
    quickPitch:
      "Select 10–25 eligible pre-lit matters and choose which responsibilities Catena carries from day one.",
    bullets: [
      "Paralegals keep matter ownership",
      "Works with your current CMS",
      "Side-by-side calibration with your team",
    ],
    whatYouDecide:
      "Choose a concrete initial group of eligible matters and the specific pre-lit responsibilities Catena will carry.",
    whatAcceptanceEstablishes:
      "Named matters, supported scope, required system access, the agreed operational result, and clear execution ownership from day one.",
    visualType: "cohort",
  },
  {
    number: "02",
    mode: "Routing Rule",
    tag: "Overflow, backlog & stalls",
    headline: "Auto-route 30+ day stalls or overflow.",
    quickPitch:
      "Set a standing rule so stalled provider chases or capacity spikes route to Catena automatically.",
    bullets: [
      "Files stalled > 30 days trigger relief",
      "Agreed monthly volume bands",
      "Zero reorganization required",
    ],
    whatYouDecide:
      "Define an ongoing trigger—such as intake overflow, a backlog segment, or files stalled more than 30 days—and refine the rule with us during onboarding.",
    whatAcceptanceEstablishes:
      "A repeatable way to route eligible work to Catena with admission and capacity controls applied before we accept responsibility.",
    visualType: "valve",
  },
  {
    number: "03",
    mode: "Standing Assignment",
    tag: "Caseload or pod coverage",
    headline: "Carry pre-lit across a caseload segment.",
    quickPitch:
      "Put Catena underneath an entire practice segment or attorney pod for continuous pre-lit execution.",
    bullets: [
      "End-to-end intake through demand prep",
      "Governed by your firm’s playbooks",
      "Structured handover at any point",
    ],
    whatYouDecide:
      "Direct agreed pre-lit responsibilities across an eligible caseload, practice segment, or attorney pod.",
    whatAcceptanceEstablishes:
      "Continuing execution within agreed scope, firm operating policies, service terms, and dedicated capacity—with structured handover whenever ownership changes.",
    visualType: "pod",
  },
];

export function AssignmentExplorer() {
  const [openCard, setOpenCard] = useState<string | null>(null);

  return (
    <div className="assignment-grid">
      {ASSIGNMENT_CARDS.map((item) => {
        const isOpen = openCard === item.mode;
        return (
          <article
            key={item.mode}
            className={`assignment-card ${isOpen ? "assignment-card-expanded" : ""}`}
          >
            {/* Visual SVG Header */}
            <div className="assignment-viz" aria-hidden="true">
              {item.visualType === "cohort" && (
                <svg viewBox="0 0 280 84" className="assign-svg">
                  <rect x="12" y="14" width="68" height="56" rx="8" fill="#13251E" stroke="#2DD4A8" strokeWidth="1.5" />
                  <circle cx="28" cy="30" r="4" fill="#2DD4A8" />
                  <rect x="38" y="27" width="32" height="6" rx="3" fill="#2DD4A8" opacity="0.8" />
                  <rect x="24" y="42" width="44" height="5" rx="2.5" fill="#F6F5F0" opacity="0.35" />
                  <rect x="24" y="53" width="34" height="5" rx="2.5" fill="#F6F5F0" opacity="0.25" />

                  <path d="M88 42 H132" stroke="#2DD4A8" strokeWidth="1.75" strokeDasharray="4 4" />
                  <polygon points="132,38 140,42 132,46" fill="#2DD4A8" />

                  <rect x="148" y="14" width="120" height="56" rx="8" fill="#182F26" stroke="rgba(255,255,255,0.16)" />
                  <text x="162" y="34" fill="#2DD4A8" fontSize="10" fontWeight="700" letterSpacing="0.08em">DEFINED COHORT</text>
                  <text x="162" y="52" fill="#FFFFFF" fontSize="12" fontWeight="600">15 Selected Files</text>
                </svg>
              )}
              {item.visualType === "valve" && (
                <svg viewBox="0 0 280 84" className="assign-svg">
                  <rect x="12" y="20" width="76" height="44" rx="8" fill="#182F26" stroke="rgba(255,255,255,0.16)" />
                  <text x="24" y="39" fill="#FBBF24" fontSize="10" fontWeight="700">STALLED &gt; 30d</text>
                  <text x="24" y="53" fill="#FFFFFF" fontSize="10" opacity="0.7">Auto-Trigger</text>

                  <path d="M94 42 C112 42, 116 26, 136 26" stroke="#2DD4A8" strokeWidth="2" fill="none" />
                  <path d="M94 42 C112 42, 116 58, 136 58" stroke="rgba(255,255,255,0.22)" strokeWidth="1.5" fill="none" />
                  <circle cx="94" cy="42" r="5" fill="#FBBF24" />

                  <rect x="142" y="12" width="126" height="32" rx="6" fill="#13251E" stroke="#2DD4A8" strokeWidth="1.5" />
                  <text x="154" y="32" fill="#2DD4A8" fontSize="11" fontWeight="600">Routed to CatenaOS</text>

                  <rect x="142" y="48" width="126" height="24" rx="6" fill="rgba(255,255,255,0.05)" />
                  <text x="154" y="64" fill="rgba(255,255,255,0.5)" fontSize="10">In-House Flow Continues</text>
                </svg>
              )}
              {item.visualType === "pod" && (
                <svg viewBox="0 0 280 84" className="assign-svg">
                  <rect x="12" y="14" width="256" height="56" rx="10" fill="#13251E" stroke="rgba(45,212,168,0.4)" strokeWidth="1.5" />
                  <rect x="24" y="24" width="72" height="36" rx="6" fill="rgba(45,212,168,0.14)" />
                  <text x="34" y="46" fill="#2DD4A8" fontSize="11" fontWeight="700">01 Intake</text>

                  <rect x="104" y="24" width="72" height="36" rx="6" fill="rgba(45,212,168,0.22)" />
                  <text x="112" y="46" fill="#FFFFFF" fontSize="11" fontWeight="700">02 Records</text>

                  <rect x="184" y="24" width="72" height="36" rx="6" fill="#2DD4A8" />
                  <text x="192" y="46" fill="#0B1512" fontSize="11" fontWeight="700">03 Demand</text>
                </svg>
              )}
            </div>

            <div className="assignment-card-top">
              <span className="assignment-number">Mode {item.number} · {item.mode}</span>
              <span className="assignment-tag">{item.tag}</span>
            </div>

            <h3>{item.headline}</h3>
            <p className="assignment-pitch">{item.quickPitch}</p>

            <ul className="assignment-quick-bullets">
              {item.bullets.map((b) => (
                <li key={b}>
                  <span className="bullet-check" aria-hidden="true">✓</span>
                  {b}
                </li>
              ))}
            </ul>

            <div className="assignment-drilldown-wrap">
              <button
                type="button"
                className="assignment-drill-btn"
                aria-expanded={isOpen}
                onClick={() => setOpenCard(isOpen ? null : item.mode)}
              >
                <span>
                  {isOpen
                    ? "Hide governance & acceptance terms"
                    : "Inspect governance & acceptance terms"}
                </span>
                <span className="drill-plus" aria-hidden="true">
                  {isOpen ? "−" : "+"}
                </span>
              </button>

              {isOpen && (
                <dl className="assignment-dl">
                  <div>
                    <dt>What your firm decides</dt>
                    <dd>{item.whatYouDecide}</dd>
                  </div>
                  <div>
                    <dt>What acceptance establishes</dt>
                    <dd>{item.whatAcceptanceEstablishes}</dd>
                  </div>
                </dl>
              )}
            </div>
          </article>
        );
      })}
    </div>
  );
}

const LANE_DETAILS = [
  {
    id: "intake",
    number: "01",
    shortTitle: "Intake & Case Assessment",
    oneLineHook: "Evaluate incoming matters and carry intake follow-through.",
    summary:
      "Collect and evaluate required information, prepare substantive case assessments and recommendations for firm review, and carry the agreed intake follow-through.",
    agreedResult: "Substantive case assessment and recommendations ready for review.",
    catenaPills: [
      "Collect & evaluate required intake facts",
      "Crash report & coverage follow-through",
      "Substantive case assessment & recommendation",
      "Authorized client & third-party follow-ups",
    ],
    firmPills: [
      "Final matter acceptance or declination",
      "Legal advice & fee agreement terms",
      "Client relationship & strategic counsel",
    ],
    artifactTitle: "Deliverable · Intake Assessment Memo",
    artifactStatus: "Staged for Acceptance Decision",
    artifactRows: [
      {
        label: "Liability & Crash Report",
        value: "Rear-end collision verified · Clear fault",
        state: "done",
        detail: "Official police report obtained and indexed; zero comparative fault indicators.",
      },
      {
        label: "Insurance Coverage",
        value: "$100k/$300k BI + $50k UM confirmed",
        state: "done",
        detail: "Carrier policy disclosure verified and logged in matter record.",
      },
      {
        label: "Initial Clinical Facts",
        value: "ER + Ortho evaluation within 48 hrs",
        state: "done",
        detail: "Initial discharge diagnosis and orthopedic referral confirmed with client.",
      },
      {
        label: "Reserved Firm Decision",
        value: "Approve matter acceptance & open pre-lit",
        state: "firm",
        detail: "Attorney reviews substantive assessment memo and authorizes matter acceptance.",
      },
    ],
  },
  {
    id: "records",
    number: "02",
    shortTitle: "Treatment & Records Follow-Through",
    oneLineHook: "Eliminate provider chasing, billing gaps, and stale status checks.",
    summary:
      "Carry agreed follow-ups, requests, waits, deficiencies, corrections, and evidence review through to a supported operational state—using your retrieval vendor or a Catena-managed supplier.",
    agreedResult:
      "Required records and itemized bills verified in hand; treatment follow-ups completed.",
    link: {
      href: "/records-to-demand",
      label: "Inspect the Records-to-Demand proof brief",
    },
    catenaPills: [
      "Provider & date-range requirement tracking",
      "Authorized requests & persistent follow-ups",
      "Line-item CPT bill vs. balance summary audit",
      "Deficiency resolution & readiness state tracking",
    ],
    firmPills: [
      "Treatment-related legal judgment",
      "Cutoff decisions & deficiency waivers",
      "Patient & clinician medical autonomy",
    ],
    artifactTitle: "Deliverable · Records & Billing Readiness Ledger",
    artifactStatus: "1 Deficiency Resolved · 1 Decision Routed",
    artifactRows: [
      {
        label: "Peachtree Ortho Clinical Notes",
        value: "05/12 – 07/31 verified complete",
        state: "done",
        detail: "All 42 pages of clinical visit notes and diagnostic reports verified against date range.",
      },
      {
        label: "Billing Deficiency Audit",
        value: "Balance summary rejected → CPT ledger verified",
        state: "done",
        detail: "Catena rejected bare $8,420 balance summary and obtained the 14-line itemized CPT ledger.",
      },
      {
        label: "Mid-Stream Treatment Signal",
        value: "08/14 MRI referral detected → State reopened",
        state: "warn",
        detail: "Follow-up note disclosed new lumbar MRI referral; earlier evidence preserved in history.",
      },
      {
        label: "Reserved Cutoff Choice",
        value: "Routed to firm with supporting records",
        state: "firm",
        detail: "Designated reviewer chooses whether to hold for August MRI or proceed under July 31 cutoff.",
      },
    ],
  },
  {
    id: "demand",
    number: "03",
    shortTitle: "Qualified Demand Preparation",
    oneLineHook: "Receive an evidence-backed demand package staged for your review.",
    summary:
      "Assemble the agreed evidence and prepare the demand and supporting material for the firm’s review, with any outstanding issues made explicit.",
    agreedResult:
      "Demand package and supporting evidence assembled and staged for attorney review.",
    catenaPills: [
      "Verified medical chronology & exhibit assembly",
      "Itemized specials & wage-loss reconciliation",
      "Substantive demand draft prepared for review",
      "Explicit flagging of any open caveats",
    ],
    firmPills: [
      "Legal positions & case valuation",
      "Final demand edits, approval & sending",
      "Adjuster negotiation & settlement authority",
    ],
    artifactTitle: "Deliverable · Staged Demand Package",
    artifactStatus: "Demand Ready · Staged for Review",
    artifactRows: [
      {
        label: "Evidence Completeness",
        value: "All 4 providers & CPT ledgers linked",
        state: "done",
        detail: "Every medical fact and billing line in the package links directly to verified source pages.",
      },
      {
        label: "Specials & Chronology",
        value: "$23,810 verified specials indexed to exhibits",
        state: "done",
        detail: "Chronological treatment narrative reconciled dollar-for-dollar with itemized billing exhibits.",
      },
      {
        label: "Qualified Demand Draft",
        value: "Prepared under firm playbook template",
        state: "done",
        detail: "Complete draft staged with liability, medical progression, and specials tables populated.",
      },
      {
        label: "Valuation & Dispatch",
        value: "Reserved to lead attorney",
        state: "firm",
        detail: "Attorney sets settlement valuation, approves final text, and controls dispatch and negotiation.",
      },
    ],
  },
];

export function ResponsibilityExplorer() {
  const [selectedIdx, setSelectedIdx] = useState(1);
  const [rightTab, setRightTab] = useState<"deliverable" | "boundary">("deliverable");
  const [openRowIdx, setOpenRowIdx] = useState<number | null>(1);
  const active = LANE_DETAILS[selectedIdx];

  return (
    <div className="resp-playbook">
      {/* Left Accordion / Playbook Selector Rail (Finch / Apollo style) */}
      <div className="resp-playbook-rail" role="tablist" aria-label="Pre-litigation responsibilities">
        {LANE_DETAILS.map((item, idx) => {
          const isSelected = idx === selectedIdx;
          return (
            <div
              key={item.id}
              className={`resp-playbook-item ${isSelected ? "resp-playbook-item-open" : ""}`}
            >
              <button
                type="button"
                role="tab"
                aria-selected={isSelected}
                className="resp-playbook-trigger"
                onClick={() => {
                  setSelectedIdx(idx);
                  setOpenRowIdx(0);
                }}
              >
                <span className="resp-playbook-num">{item.number}</span>
                <div className="resp-playbook-head">
                  <h3>{item.shortTitle}</h3>
                  <p className="resp-playbook-hook">{item.oneLineHook}</p>
                </div>
                <span className="resp-playbook-arrow" aria-hidden="true">
                  {isSelected ? "●" : "○"}
                </span>
              </button>

              {isSelected && (
                <div className="resp-playbook-body">
                  <div className="resp-progress-bar" aria-hidden="true">
                    <span className="resp-progress-fill" />
                  </div>
                  <p className="resp-body-summary">{item.summary}</p>
                  <div className="resp-result-pill">
                    <strong>Agreed result:</strong> {item.agreedResult}
                  </div>
                  {item.link && (
                    <Link className="text-link resp-inline-link" href={item.link.href}>
                      {item.link.label} <span aria-hidden="true">↗</span>
                    </Link>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Right Synchronized Visual Canvas */}
      <div className="resp-canvas" role="tabpanel">
        <div className="resp-canvas-topbar">
          <span className="resp-canvas-kicker">
            Lane {active.number} · {active.shortTitle}
          </span>
          <div className="resp-canvas-tabs" role="tablist" aria-label="Inspect deliverable or authority boundary">
            <button
              type="button"
              role="tab"
              aria-selected={rightTab === "deliverable"}
              className={`resp-canvas-tab ${rightTab === "deliverable" ? "resp-canvas-tab-active" : ""}`}
              onClick={() => setRightTab("deliverable")}
            >
              Deliverable Preview
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={rightTab === "boundary"}
              className={`resp-canvas-tab ${rightTab === "boundary" ? "resp-canvas-tab-active" : ""}`}
              onClick={() => setRightTab("boundary")}
            >
              Authority Boundary
            </button>
          </div>
        </div>

        {rightTab === "deliverable" ? (
          <div className="artifact-card">
            <div className="artifact-head">
              <span>{active.artifactTitle}</span>
              <span className="artifact-badge">{active.artifactStatus}</span>
            </div>
            <div className="artifact-rows">
              {active.artifactRows.map((row, rIdx) => {
                const isRowOpen = openRowIdx === rIdx;
                return (
                  <div key={row.label} className="artifact-row-group">
                    <button
                      type="button"
                      className="artifact-row"
                      aria-expanded={isRowOpen}
                      onClick={() => setOpenRowIdx(isRowOpen ? null : rIdx)}
                    >
                      <span className="artifact-label">
                        <span className="artifact-row-caret" aria-hidden="true">
                          {isRowOpen ? "▾" : "▸"}
                        </span>
                        {row.label}
                      </span>
                      <span className={`artifact-val artifact-val-${row.state}`}>
                        {row.value}
                      </span>
                    </button>
                    {isRowOpen && (
                      <div className="artifact-row-detail">
                        {row.detail}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
            <div className="artifact-foot">
              <span>Click any row above to inspect verification detail</span>
              <button
                type="button"
                className="artifact-switch-link"
                onClick={() => setRightTab("boundary")}
              >
                Inspect Catena vs. Firm authority →
              </button>
            </div>
          </div>
        ) : (
          <div className="resp-boundary-grid">
            <div className="resp-pill-box resp-pill-catena">
              <span className="pill-box-tag">Delegated Execution</span>
              <h4>What Catena Carries</h4>
              <ul>
                {active.catenaPills.map((pill) => (
                  <li key={pill}>
                    <span aria-hidden="true">✓</span> {pill}
                  </li>
                ))}
              </ul>
            </div>

            <div className="resp-pill-box resp-pill-firm">
              <span className="pill-box-tag pill-box-tag-firm">Reserved Authority</span>
              <h4>What Your Firm Retains</h4>
              <ul>
                {active.firmPills.map((pill) => (
                  <li key={pill}>
                    <span aria-hidden="true">◆</span> {pill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

const MECHANISM_STEPS = [
  {
    step: "01",
    title: "Catch deficiencies on return",
    shortHook: "Reject bare balance summaries automatically.",
    detail:
      "When an itemized bill through July 31 is required but a provider returns a bare balance summary without service dates or CPT line items, Catena flags the deficiency, requests the correction, and verifies the updated return.",
    stateBadge: "Deficiency Flagged → Correction Pursued",
    tone: "warn",
  },
  {
    step: "02",
    title: "Reevaluate when new treatment appears",
    shortHook: "Preserve history while reopening readiness.",
    detail:
      "If a later update identifies additional treatment—such as an August 14 lumbar MRI referral—earlier records remain preserved in history while Catena updates what is required and reopens readiness so an incomplete demand is never sent.",
    stateBadge: "08/14 MRI Detected → State Reopened",
    tone: "warn",
  },
  {
    step: "03",
    title: "Route only reserved decisions with context",
    shortHook: "Bring the exact cutoff question to your reviewer.",
    detail:
      "When later treatment requires a legal cutoff or waiver decision from the firm, Catena brings the exact question and supporting evidence to your designated reviewer—then resumes execution immediately once decided.",
    stateBadge: "Firm Decision Recorded → Demand Staged",
    tone: "done",
  },
];

export function MidStreamInteractiveStepList() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="mech-interactive-list" role="tablist" aria-label="How Catena handles mid-stream changes">
      {MECHANISM_STEPS.map((item, idx) => {
        const isOpen = idx === activeStep;
        return (
          <div
            key={item.step}
            className={`mech-step-card ${isOpen ? "mech-step-card-open" : ""}`}
          >
            <button
              type="button"
              role="tab"
              aria-selected={isOpen}
              className="mech-step-trigger"
              onClick={() => setActiveStep(idx)}
            >
              <span className="step-badge">{item.step}</span>
              <div className="mech-step-headings">
                <h3>{item.title}</h3>
                <p className="mech-step-hook">{item.shortHook}</p>
              </div>
              <span className="mech-step-toggle" aria-hidden="true">
                {isOpen ? "−" : "+"}
              </span>
            </button>
            {isOpen && (
              <div className="mech-step-body">
                <p>{item.detail}</p>
                <div className="mech-state-chip">{item.stateBadge}</div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
