"use client";

export function PrintBrief() {
  return (
    <>
      <button
        className="text-link print-control"
        type="button"
        onClick={() => window.print()}
      >
        Print this brief <span aria-hidden="true">↗</span>
      </button>
      <noscript>
        <style>{".print-control { display: none; }"}</style>
        <span>Use your browser’s Print menu to save or print this brief.</span>
      </noscript>
    </>
  );
}
