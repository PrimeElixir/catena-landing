import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Website privacy",
  description:
    "How Prime Elixir handles business inquiries and technical information from the Catena website.",
  alternates: { canonical: "/privacy" },
  openGraph: {
    url: "/privacy",
    title: "Catena website privacy",
    images: [{ url: "/catena-social.png", width: 1200, height: 630 }],
  },
};

export default function Privacy() {
  return (
    <main id="main-content" tabIndex={-1} className="wrap">
      <header className="page-hero">
        <p className="eyebrow">Website information</p>
        <h1>Privacy, in plain language.</h1>
        <p className="page-deck">
          This notice covers the Catena website and business inquiries to Prime
          Elixir, the company behind CatenaOS.
        </p>
      </header>
      <div className="legal-copy">
        <h2>Business inquiries</h2>
        <p>
          If you use the inquiry form, we receive your name, business email,
          firm, role and any optional matter-volume range you choose. We use
          those details to review your inquiry, reply and maintain the business
          conversation.
        </p>
        <p>
          Please do not send client identities, case files, treatment
          information or other confidential matter details. This website is not
          a channel for submitting matter data or starting live operations.
        </p>
        <h2>How the information is handled</h2>
        <p>
          The website is hosted on Vercel. Form inquiries are processed through
          Resend for delivery to Prime Elixir’s company email. Company email and
          relevant business records are used to respond and manage follow-up.
          People responsible for the inquiry and service providers supporting
          hosting, email and business-record management may process this
          information for those purposes.
        </p>
        <p>
          Business correspondence is retained as needed to respond, maintain an
          appropriate record of the relationship and meet applicable
          obligations. You can contact us to ask about the information you have
          shared or request a correction or deletion.
        </p>
        <h2>Technical information</h2>
        <p>
          Hosting and security services process technical request information,
          which can include an IP address, browser information, requested URL
          and time of access, to serve and protect the website. The site does
          not ask you to put contact or matter information in a URL.
        </p>
        <p>
          Our website fonts are served with the site. We do not add advertising
          pixels or automatically enroll inquiries in marketing subscriptions.
        </p>
        <h2>Links and direct email</h2>
        <p>
          If you follow a link to LinkedIn or another external service, that
          service handles the visit under its own policies. If you email us
          directly, your email provider and our company email service process
          the message.
        </p>
        <h2>Product data is a separate conversation</h2>
        <p>
          This notice does not describe a live matter-processing arrangement.
          Product access, data handling and the firm’s requirements must be
          established separately before admitted live work.
        </p>
        <h2>Contact</h2>
        <p>
          For questions about this notice or your business-contact information,
          email{" "}
          <a href="mailto:brian.mcleod@primeelixirco.com">
            brian.mcleod@primeelixirco.com
          </a>
          .
        </p>
        <p>Last updated September 2026.</p>
      </div>
    </main>
  );
}
