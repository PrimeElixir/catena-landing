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
        This address doesn’t lead to a current page. Return to the Catena
        platform overview or inspect the Records-to-Demand brief.
      </p>
      <div className="actions">
        <Link className="button" href="/">
          Return to Catena overview <Arrow />
        </Link>
        <Link className="text-link" href="/records-to-demand">
          Inspect Records-to-Demand <Arrow />
        </Link>
      </div>
    </main>
  );
}
