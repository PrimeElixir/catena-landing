import React from 'react';

export default function GovernedFabric() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-10 leading-[1.2]">
          It knows when not to act.
        </h2>
        
        <div className="space-y-8 text-lg md:text-xl text-slate-700 leading-relaxed font-light">
          <p>
            Catena doesn't assume AI should do everything. AI workers handle bounded operational work. People hold judgment, approvals, relationships, and every sensitive call. External systems produce the deterministic signals — signatures, uploads, calendar events, payment status. 
          </p>
          <p>
            Catena runs all three through one model of truth, authority, and proof, and stops at a human gate whenever authority, legal judgment, or a client-sensitive decision is required. 
          </p>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-100">
          <p className="text-xl md:text-2xl font-serif font-medium text-slate-900 tracking-tight italic">
            Autonomy that knows its limits is the only kind a firm can trust.
          </p>
        </div>
      </div>
    </section>
  );
}
