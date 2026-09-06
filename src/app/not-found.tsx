import Link from "next/link";
import { Arrow } from "@/components/Site";

export default function NotFound() {
  return (
    <main id="main-content" tabIndex={-1} className="not-found wrap">
      <p className="eyebrow">Page not found</p>
      <h1>
        Let’s get you
        <br />
        <em>to the right place.</em>
      </h1>
      <p>
        This address doesn’t lead to a current page. Explore Records-to-Demand
        or return to the Catena homepage.
      </p>
      <div className="actions">
        <Link className="button" href="/records-to-demand">
          See what your firm could hand off <Arrow />
        </Link>
        <Link className="text-link" href="/">
          Back to Catena <Arrow />
        </Link>
      </div>
    </main>
  );
}
