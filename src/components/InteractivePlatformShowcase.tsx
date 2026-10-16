"use client";

import { useState } from "react";

type RoutingModeId = "defined" | "stall" | "standing";

const ROUTING_MODES: Record<
  RoutingModeId,
  {
    label: string;
    shortLabel: string;
    scenarioTag: string;
    matterTitle: string;
    matterMeta: string;
    firmOwner: string;
    statusSignal: {
      headline: string;
      detail: string;
      tone: "warn" | "done" | "active";
    };
    catenaWorkSignal: {
      headline: string;
      detail: string;
    };
    firmDecisionSignal: {
      headline: string;
      detail: string;
    };
    providers: Array<{
      name: string;
      recordsState: string;
      recordsTone: "done" | "active" | "warn";
      billingState: string;
      billingTone: "done" | "active" | "warn";
      auditDetail: string;
    }>;
  }
> = {
  defined: {
    label: "Selected Starting Group (Recommended)",
    shortLabel: "Selected Group (15 Files)",
    scenarioTag: "Illustrative Scenario · Selected Cohort",
    matterTitle: "MVA Bodily Injury · Synthetic Matter #2048",
    matterMeta: "Illustrative DOI: 04/18 · 3 Providers · Assigned Cohort",
    firmOwner: "Firm Paralegal (Retains matter ownership)",
    statusSignal: {
      headline: "Readiness Reopened Automatically",
      detail:
        "2 of 3 providers verified complete. An 08/14 follow-up note disclosed a new lumbar MRI referral—pausing demand readiness so an incomplete package is never sent.",
      tone: "warn",
    },
    catenaWorkSignal: {
      headline: "Billing Deficiency Resolved by Catena",
      detail:
        "Peachtree Orthopedics initially returned a bare $8,420 balance summary without CPT codes. Catena requested the correction and verified all 14 itemized service lines.",
    },
    firmDecisionSignal: {
      headline: "Cutoff Decision Routed to Firm Reviewer",
      detail:
        "Hold demand for the August lumbar MRI results, or proceed under a July 31 treatment cutoff? Linked clinical notes attached for 1-click review.",
    },
    providers: [
      {
        name: "Grady EMS & Trauma",
        recordsState: "Verified (04/18)",
        recordsTone: "done",
        billingState: "Itemized UB-04 Verified ($4,820)",
        billingTone: "done",
        auditDetail:
          "Emergency transport run sheet and ER admission records matched against itemized hospital charges ($4,820.00).",
      },
      {
        name: "Peachtree Orthopedics",
        recordsState: "Verified through 07/31",
        recordsTone: "done",
        billingState: "Balance summary rejected → CPT ledger verified",
        billingTone: "done",
        auditDetail:
          "Provider initially sent a bare $8,420 balance summary. Catena flagged missing CPT codes, pursued the billing department, and verified all 14 dated line items.",
      },
      {
        name: "Atlanta Spine & Imaging",
        recordsState: "New 08/14 MRI referral detected",
        recordsTone: "warn",
        billingState: "Awaiting firm cutoff decision",
        billingTone: "active",
        auditDetail:
          "08/14 orthopedic follow-up note disclosed a new lumbar MRI referral. Earlier verified evidence stays locked in history while readiness reopens.",
      },
    ],
  },
  stall: {
    label: "30+ Day Stall / Overflow Rule",
    shortLabel: "30+ Day Stall Rule",
    scenarioTag: "Illustrative Scenario · Unresolved > 30 Days",
    matterTitle: "Commercial Rear-End · Synthetic Matter #1982",
    matterMeta: "Illustrative DOI: 03/09 · Unresolved Billing Chase (34 Days)",
    firmOwner: "Case Manager (Retains matter ownership)",
    statusSignal: {
      headline: "All Governing Criteria Now Satisfied",
      detail:
        "Routed to Catena after a provider billing request stalled past 30 days. All 3 provider records and itemized ledgers are now verified and staged for demand review.",
      tone: "done",
    },
    catenaWorkSignal: {
      headline: "Stalled Provider Escalation & Chronology Assembly",
      detail:
        "Catena took over the 34-day stalled hospital billing request, verified the UB-04 ledger, and assembled the medical chronology and $18,990 specials table.",
    },
    firmDecisionSignal: {
      headline: "Qualified Demand Staged for Attorney Valuation",
      detail:
        "Complete demand draft and indexed exhibits are ready for lead attorney valuation, edits, and final approval.",
    },
    providers: [
      {
        name: "Northside Hospital ER",
        recordsState: "Verified (03/09)",
        recordsTone: "done",
        billingState: "Stalled UB-04 obtained & verified ($9,140)",
        billingTone: "done",
        auditDetail:
          "Escalated stalled billing request with hospital release-of-information desk; verified itemized UB-04 ledger.",
      },
      {
        name: "Metro Physical Therapy",
        recordsState: "18/18 visit notes verified",
        recordsTone: "done",
        billingState: "Itemized ledger verified ($3,600)",
        billingTone: "done",
        auditDetail:
          "Initial evaluation, 16 daily therapy notes, and discharge summary reconciled with CPT 97110/97140 billing lines.",
      },
      {
        name: "Premier Pain Specialists",
        recordsState: "Final discharge note verified",
        recordsTone: "done",
        billingState: "Itemized ledger verified ($6,250)",
        billingTone: "done",
        auditDetail:
          "Procedure notes and itemized facility ledgers verified complete and linked to specials table.",
      },
    ],
  },
  standing: {
    label: "Standing Caseload Coverage",
    shortLabel: "Standing Coverage",
    scenarioTag: "Illustrative Scenario · Active Treatment Follow-Through",
    matterTitle: "Uninsured Motorist Claim · Synthetic Matter #2104",
    matterMeta: "Illustrative DOI: 06/22 · Intake Assessment + Active Care",
    firmOwner: "Pod Lead Paralegal (Retains matter ownership)",
    statusSignal: {
      headline: "Active Treatment & Initial Records Tracked",
      detail:
        "Intake assessment approved. Catena is tracking 30-day treatment intervals and collecting initial urgent care billing while the client completes care.",
      tone: "active",
    },
    catenaWorkSignal: {
      headline: "Crash Report, Coverage & Initial Requests Carried",
      detail:
        "Confirmed $100k UM coverage disclosure, delivered the intake assessment memo, and initiated authorized requests for acute-care providers.",
    },
    firmDecisionSignal: {
      headline: "No Attorney Interruption Required",
      detail:
        "Routine follow-through is running on schedule. Catena will alert your reviewer only if a treatment gap, coverage issue, or cutoff choice arises.",
    },
    providers: [
      {
        name: "Intake & Coverage Verification",
        recordsState: "Crash report & UM limits confirmed",
        recordsTone: "done",
        billingState: "Case assessment memo delivered",
        billingTone: "done",
        auditDetail:
          "Official crash report and carrier declarations page ($100k UM) organized into a substantive case assessment.",
      },
      {
        name: "Piedmont Urgent Care",
        recordsState: "Initial visit verified",
        recordsTone: "done",
        billingState: "Itemized ledger requested (Provider wait: Day 6)",
        billingTone: "active",
        auditDetail:
          "Acute visit clinical note verified; automated follow-up scheduled for outstanding itemized billing statement.",
      },
      {
        name: "ChiroCare Rehabilitation",
        recordsState: "30-day treatment check completed",
        recordsTone: "active",
        billingState: "In treatment · Next check scheduled",
        billingTone: "active",
        auditDetail:
          "Client actively treating; Catena tracking treatment cadence and staging final request upon discharge.",
      },
    ],
  },
};

export function HeroControlPlane() {
  const [stageTab, setStageTab] = useState<"interactive" | "video">("interactive");
  const [activeMode, setActiveMode] = useState<RoutingModeId>("defined");
  const [showAuditTable, setShowAuditTable] = useState(false);
  const [expandedProv, setExpandedProv] = useState<number | null>(1);
  const current = ROUTING_MODES[activeMode];

  return (
    <div
      className="control-plane"
      aria-label="Illustrative CatenaOS matter demonstration using synthetic data"
    >
      {/* Clear Provenance Banner */}
      <div className="cp-provenance-bar">
        <span className="cp-provenance-badge">
          Illustrative Matter · Synthetic Data
        </span>
        <span className="cp-provenance-note">
          Constructed walkthrough of how CatenaOS tracks work and routes firm decisions
        </span>
      </div>

      {/* Top Stage Switcher */}
      <div className="cp-stage-switcher">
        <div className="cp-stage-pills" role="tablist" aria-label="Example view mode">
          <button
            type="button"
            role="tab"
            aria-selected={stageTab === "interactive"}
            className={`cp-stage-pill ${stageTab === "interactive" ? "cp-stage-pill-active" : ""}`}
            onClick={() => setStageTab("interactive")}
          >
            Interactive Matter Example
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={stageTab === "video"}
            className={`cp-stage-pill ${stageTab === "video" ? "cp-stage-pill-active" : ""}`}
            onClick={() => setStageTab("video")}
          >
            <span aria-hidden="true">▶</span> 42s Walkthrough Video
          </button>
        </div>

        {stageTab === "interactive" && (
          <div className="cp-tabs" role="tablist" aria-label="Example engagement scenario">
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
                    setExpandedProv(1);
                  }}
                >
                  {ROUTING_MODES[key].shortLabel}
                </button>
              );
            })}
          </div>
        )}
      </div>

      {stageTab === "video" ? (
        <div className="cp-video-stage">
          <video
            controls
            autoPlay
            playsInline
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
          </video>
          <div className="cp-video-footer">
            <span>
              <strong>Simulated workflow walkthrough (42s):</strong> Shows how
              Catena resolves missing CPT bills, reopens state on new treatment,
              and stages the demand.
            </span>
            <button
              type="button"
              className="cp-back-btn"
              onClick={() => setStageTab("interactive")}
            >
              Back to interactive example ↗
            </button>
          </div>
        </div>
      ) : (
        <div className="cp-window">
          <div className="cp-window-header">
            <div>
              <p className="cp-matter-name">{current.matterTitle}</p>
              <p className="cp-matter-sub">
                {current.matterMeta} · <strong>{current.firmOwner}</strong>
              </p>
            </div>
            <span className="cp-trigger-badge">{current.scenarioTag}</span>
          </div>

          {/* Default View: 3 Clear Signals (Status, Work Carried, Firm Decision) */}
          <div className="cp-three-signals">
            <div className={`cp-signal-row cp-signal-row-${current.statusSignal.tone}`}>
              <div className="cp-signal-kicker">01 · Current Matter Status</div>
              <p className="cp-signal-headline">{current.statusSignal.headline}</p>
              <p className="cp-signal-body">{current.statusSignal.detail}</p>
            </div>

            <div className="cp-signal-row">
              <div className="cp-signal-kicker">02 · Corrective Work Catena Carried</div>
              <p className="cp-signal-headline">{current.catenaWorkSignal.headline}</p>
              <p className="cp-signal-body">{current.catenaWorkSignal.detail}</p>
            </div>

            <div className="cp-signal-row cp-signal-row-decision">
              <div className="cp-signal-kicker cp-kicker-copper">
                03 · Decision Belonging to Your Firm
              </div>
              <p className="cp-signal-headline">{current.firmDecisionSignal.headline}</p>
              <p className="cp-signal-body">{current.firmDecisionSignal.detail}</p>
            </div>
          </div>

          {/* Progressive Expansion for Provider-by-Provider Audit Detail */}
          <div className="cp-audit-expander">
            <button
              type="button"
              className="cp-audit-toggle-btn"
              aria-expanded={showAuditTable}
              onClick={() => setShowAuditTable((prev) => !prev)}
            >
              <span>
                {showAuditTable
                  ? "Hide provider-by-provider verification detail"
                  : "Inspect provider-by-provider verification detail (3 providers)"}
              </span>
              <span aria-hidden="true">{showAuditTable ? "▴" : "▾"}</span>
            </button>

            {showAuditTable && (
              <div className="cp-matrix">
                <div className="cp-matrix-head">
                  <span>Provider (Click row for audit log)</span>
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
                          <span className="cp-drill-tag">Synthetic Audit Detail</span>
                          <p>{prov.auditDetail}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

const DELIVERABLE_ARTIFACTS = [
  {
    id: "records",
    lane: "02",
    title: "Records & Billing Readiness Packet",
    subtitle: "Inspectable proof before a file is marked Demand Ready",
    badge: "Illustrative Deliverable · Synthetic Data",
    items: [
      {
        heading: "1. Governing Matter Requirements",
        status: "3 Providers · Date Range 04/18–07/31",
        statusTone: "done",
        summary:
          "Documents required under firm policy: EMS run sheet, ER admission & discharge, orthopedic clinical notes through 07/31, and itemized CPT/UB-04 billing ledgers.",
      },
      {
        heading: "2. Verified Supporting Sources",
        status: "68 Pages Indexed · $13,240 Verified",
        statusTone: "done",
        summary:
          "Every clinical date of service is cross-checked against itemized billing lines. Source PDFs are linked directly to each satisfied requirement.",
      },
      {
        heading: "3. Deficiency & Turnaround Log",
        status: "Provider Wait: 18d · Catena Audit: <24h",
        statusTone: "done",
        summary:
          "Separates external provider wait time from Catena execution time. Logs the 07/19 rejection of Peachtree Ortho’s bare balance summary and the 07/26 verification of the corrected CPT ledger.",
      },
      {
        heading: "4. Open Gap & Routed Firm Decision",
        status: "08/14 MRI Referral → Cutoff Choice Routed",
        statusTone: "warn",
        summary:
          "Flags the newly discovered 08/14 lumbar MRI referral and presents a single decision to the firm’s reviewer: hold for August MRI records or approve a 07/31 cutoff.",
      },
    ],
  },
  {
    id: "demand",
    lane: "03",
    title: "Staged Demand Preparation Package",
    subtitle: "Assembled for attorney valuation, edits, and final approval",
    badge: "Illustrative Deliverable · Synthetic Data",
    items: [
      {
        heading: "1. Chronological Medical Narrative",
        status: "Linked to Source Page Citations",
        statusTone: "done",
        summary:
          "Complete treatment progression from 04/18 emergency transport through orthopedic care, with every clinical finding cited to its verified record page.",
      },
      {
        heading: "2. Reconciled Specials & Billing Table",
        status: "$23,810.00 Verified CPT/UB-04 Charges",
        statusTone: "done",
        summary:
          "Itemized medical specials table reconciled dollar-for-dollar against verified provider billing ledgers, with zero unverified balance-summary estimates.",
      },
      {
        heading: "3. Qualified Demand Draft",
        status: "Prepared in Firm Playbook Format",
        statusTone: "done",
        summary:
          "Liability summary, injury progression, treatment chronology, and specials schedule drafted for attorney review—with any open caveats or waivers highlighted explicitly.",
      },
      {
        heading: "4. Reserved Attorney Authority",
        status: "Valuation, Approval & Sending Retained",
        statusTone: "firm",
        summary:
          "Your attorney sets the settlement demand figure, makes final legal edits, approves dispatch, and conducts all adjuster negotiations.",
      },
    ],
  },
  {
    id: "intake",
    lane: "01",
    title: "Intake & Case Assessment Memo",
    subtitle: "Prepared for firm acceptance or declination decision",
    badge: "Illustrative Deliverable · Synthetic Data",
    items: [
      {
        heading: "1. Liability & Crash Report Verification",
        status: "Official Report Indexed",
        statusTone: "done",
        summary:
          "Crash report obtained and summarized, identifyingresponding agency, fault determination, witness statements, and property damage documentation.",
      },
      {
        heading: "2. Coverage & Policy Limits Summary",
        status: "BI & UM/UIM Disclosures Logged",
        statusTone: "done",
        summary:
          "At-fault carrier bodily injury status and client UM/UIM coverage disclosures organized for immediate attorney inspection.",
      },
      {
        heading: "3. Initial Treatment & Injury Fact Sheet",
        status: "ER + Specialist Follow-Up Confirmed",
        statusTone: "done",
        summary:
          "Initial symptoms, emergency care, and scheduled specialist evaluations verified through authorized follow-through.",
      },
      {
        heading: "4. Reserved Acceptance Decision",
        status: "Attorney Acceptance or Declination",
        statusTone: "firm",
        summary:
          "Substantive assessment staged so your firm can approve matter acceptance, set fee terms, and advise the client.",
      },
    ],
  },
];

export function InspectableDeliverableShowcase() {
  const [selectedTab, setSelectedTab] = useState(0);
  const current = DELIVERABLE_ARTIFACTS[selectedTab];

  return (
    <div className="deliverable-showcase">
      <div className="deliverable- showcase-header">
        <div>
          <span className="cp-provenance-badge">
            Sample Buyer Artifact · Synthetic Example
          </span>
          <h3>What your team actually inspects on an assigned matter</h3>
        </div>
        <div className="deliverable-tabs" role="tablist" aria-label="Sample deliverables by responsibility">
          {DELIVERABLE_ARTIFACTS.map((art, idx) => (
            <button
              key={art.id}
              type="button"
              role="tab"
              aria-selected={selectedTab === idx}
              className={`deliverable-tab ${selectedTab === idx ? "deliverable-tab-active" : ""}`}
              onClick={() => setSelectedTab(idx)}
            >
              {art.title}
            </button>
          ))}
        </div>
      </div>

      <div className="deliverable-body" role="tabpanel">
        <div className="deliverable-meta-strip">
          <strong>{current.title}</strong>
          <span>{current.subtitle}</span>
        </div>

        <div className="deliverable-grid">
          {current.items.map((item) => (
            <div key={item.heading} className="deliverable-item-card">
              <div className="deliverable-item-top">
                <h4>{item.heading}</h4>
                <span className={`artifact-val artifact-val-${item.statusTone}`}>
                  {item.status}
                </span>
              </div>
              <p>{item.summary}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
