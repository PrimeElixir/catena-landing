import Link from "next/link";
import { Arrow, OperatingModelFilm } from "@/components/Site";

export default function Home() {
  return (
    <main id="main-content" tabIndex={-1}>
      <section className="hero wrap" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">Managed operations platform · Plaintiff PI</p>
          <h1 id="hero-title">The records arrived.<em>The file still isn’t ready.</em></h1>
          <p className="hero-description">
            Catena runs Records-to-Demand: records and billing operations from
            the first request through evidence-backed proof of demand readiness.
          </p>
          <p className="hero-boundary">
            Your firm sets the criteria, keeps professional judgment, and drafts the demand.
          </p>
          <div className="actions">
            <Link className="button" href="/conversation">Book a 15-minute conversation <Arrow /></Link>
            <Link className="text-link" href="/records-to-demand">Read the lane scope <Arrow /></Link>
          </div>
          <p className="helper">No preparation or client files needed.</p>
        </div>
        <div id="proof" className="hero-media">
          <span id="document-readiness" className="anchor-alias" />
          <OperatingModelFilm />
        </div>
      </section>
      <section className="example-section section" aria-labelledby="example-title">
        <div className="wrap example-layout">
          <div>
            <p className="eyebrow">One exception within the operation</p>
            <h2 id="example-title">A balance is not an itemized bill.</h2>
            <p className="helper">Constructed illustration, not product output.</p>
          </div>
          <div>
            <dl className="example-steps">
              <div><dt>Needed</dt><dd>An itemized bill through July 31.</dd></div>
              <div><dt>Received</dt><dd>A balance summary without service dates or line-item charges.</dd></div>
              <div><dt>Catena</dt><dd>Requests the correction and checks the returned bill.</dd></div>
            </dl>
            <p className="example-result"><strong>Bill requirement satisfied. File still not ready.</strong> Later treatment needs the firm’s cutoff decision and fresh checks.</p>
          </div>
        </div>
      </section>
      <section className="section wrap" id="ownership" aria-labelledby="ownership-title">
        <span id="how-it-works" className="anchor-alias" />
        <div className="section-heading">
          <h2 id="ownership-title">What Catena carries. What your firm keeps.</h2>
          <Link className="text-link" href="/records-to-demand#authority">Read the responsibilities <Arrow /></Link>
        </div>
        <div className="responsibility-pair">
          <div><h3>Catena runs the operation</h3><ul>
            <li>Requirements, authorized requests, and follow-ups.</li>
            <li>Verification, missing information, and corrections.</li>
            <li>Evidence-backed readiness under your firm’s criteria.</li>
          </ul></div>
          <div><h3>Your firm keeps professional authority</h3><ul>
            <li>Policy, professional judgment, and client relationships.</li>
            <li>Case strategy, demand drafting, and settlement.</li>
            <li>Agreed reviews, decisions, and approvals.</li>
          </ul></div>
        </div>
      </section>
      <section className="section wrap faq-layout" id="fit" aria-labelledby="fit-title">
        <span id="integrations" className="anchor-alias" />
        <div><h2 id="fit-title">A few practical questions.</h2><p className="section-note">For firms with a steady flow of pre-suit matters.</p></div>
        <div className="faq">
          <details><summary>Does this fit our firm?</summary><p>Catena is for plaintiff personal injury firms with recurring records-and-bills work and an accountable person overseeing readiness. The first conversation compares your process and the work you want Catena to carry.</p></details>
          <details><summary>Do we need to change our systems or vendors?</summary><p>We review your current systems and vendors during scoping. Compatibility, any changes, and authorized access are agreed for your firm before live work.</p></details>
          <details><summary>How do we evaluate Catena before relying on it?</summary><p>Inspect the scope, readiness decisions, supporting evidence, and access and data-handling arrangements. Initial delivery includes full review. Any reduced routine re-review requires calibration and firm agreement; a material failure returns the operation to full review.</p><Link className="text-link" href="/records-to-demand#evaluation">See the evaluation process <Arrow /></Link></details>
        </div>
      </section>
      <section className="founder-section section" id="founder" aria-labelledby="founder-title">
        <span id="start" className="anchor-alias" />
        <div className="wrap founder-layout">
          <div><p className="eyebrow">Behind Catena</p><h2 id="founder-title">Brian McLeod</h2><p>Founder of Prime Elixir and creator of CatenaOS. His background includes engineering leadership at Disney Streaming, Payspan, and Logility.</p><a className="text-link" href="https://www.primeelixirco.com/">About the company <Arrow /></a></div>
          <div><h3>Discuss your operation in 15 minutes.</h3><p>Compare your current process, the work you want Catena to carry, and what you would need to inspect.</p><div className="actions"><Link className="button" href="/conversation">Book a 15-minute conversation <Arrow /></Link></div><p className="helper">No preparation or client files needed. Founding engagement conversations are open.</p></div>
        </div>
      </section>
    </main>
  );
}
