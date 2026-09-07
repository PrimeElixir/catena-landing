import type { Metadata } from "next";
import Link from "next/link";
import { Arrow } from "@/components/Site";
import { InquiryForm } from "@/components/InquiryForm";

export const metadata: Metadata = {
  title: "Explore Catena for your firm",
  description:
    "Start a conversation about your firm's records-and-bills operation and whether Catena fits.",
  alternates: { canonical: "/conversation" },
  openGraph: {
    url: "/conversation",
    title: "Explore Catena for your firm",
    description: "Start with the operation your firm needs carried.",
    images: [{ url: "/catena-social.png", width: 1200, height: 630 }],
  },
};

export default function Conversation() {
  return (
    <main id="main-content" tabIndex={-1} className="wrap">
      <header className="page-hero">
        <p className="eyebrow">Explore this for your firm</p>
        <h1>
          What would Records-to-Demand
          <br />
          <em>look like at your firm?</em>
        </h1>
        <p className="page-deck">
          In 15 minutes with Brian, compare how your firm handles
          records-to-demand work today and whether a founding Catena engagement
          is worth exploring. No preparation or client files needed.
        </p>
        <p className="conversation-response">
          Brian will review your inquiry and reply by email to arrange the next
          step. You can also reply to your existing email or LinkedIn
          conversation, or email{" "}
          <a href="mailto:brian.mcleod@primeelixirco.com">
            brian.mcleod@primeelixirco.com
          </a>{" "}
          directly.
        </p>
      </header>
      <div className="conversation-layout">
        <div>
          <InquiryForm />
          <noscript>
            <style>{".inquiry-form { display: none; }"}</style>
            <p>
              To inquire without JavaScript, email{" "}
              <a href="mailto:brian.mcleod@primeelixirco.com">
                brian.mcleod@primeelixirco.com
              </a>{" "}
              with your name, firm and role. Please leave out client or matter
              details.
            </p>
          </noscript>
        </div>
        <aside className="form-aside">
          <h2>A useful first conversation.</h2>
          <p>
            How does your team handle records requests, bills and readiness
            today? What would you like Catena to take on, and what would you
            need to verify before relying on it?
          </p>
          <p>
            Start with your current process. Together, we can identify who
            should join scoping if there is a fit. No client or matter
            information is needed for this conversation.
          </p>
          <p>
            Live work begins only after onboarding, agreed operating conditions
            and separate go-live approval.
          </p>
          <Link className="text-link" href="/records-to-demand">
            Review the lane scope <Arrow />
          </Link>
        </aside>
      </div>
    </main>
  );
}
