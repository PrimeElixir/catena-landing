"use client";

import Link from "next/link";

export function MobileNavigation() {
  return (
    <details
      className="mobile-nav"
      onClick={(event) => {
        if ((event.target as HTMLElement).closest("a"))
          event.currentTarget.open = false;
      }}
      onKeyDown={(event) => {
        if (event.key === "Escape" && event.currentTarget.open) {
          event.currentTarget.open = false;
          event.currentTarget.querySelector("summary")?.focus();
        }
      }}
    >
      <summary>
        Menu <span aria-hidden="true">+</span>
      </summary>
      <nav aria-label="Mobile navigation">
        <Link href="/records-to-demand">The lane</Link>
        <Link href="/#proof">Readiness</Link>
        <Link href="/conversation">
          Explore Catena for your firm <span aria-hidden="true">↗</span>
        </Link>
        <a href="https://www.primeelixirco.com/">The company</a>
      </nav>
    </details>
  );
}
