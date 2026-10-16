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
        Menu <span aria-hidden="true" className="menu-glyph">+</span>
      </summary>
      <nav aria-label="Mobile navigation" className="mobile-nav-panel">
        <Link href="/#example-matter">How it works</Link>
        <Link href="/#assignment">Starting offer &amp; pricing</Link>
        <Link href="/#ownership">Scope &amp; deliverables</Link>
        <Link href="/records-to-demand">Records-to-Demand brief</Link>
        <Link href="/security">Security &amp; data handling</Link>
        <Link href="/conversation" className="mobile-menu-cta">
          Book a 15-minute fit call <span aria-hidden="true">↗</span>
        </Link>
        <a href="https://www.primeelixirco.com/">Prime Elixir (Company)</a>
      </nav>
    </details>
  );
}
