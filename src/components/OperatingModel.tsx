import React from 'react';
import { ArrowRight } from 'lucide-react';
import clsx from 'clsx';

const loopSteps = [
  "Sense",
  "Commit truth",
  "Find the blocked outcome",
  "Route the work",
  "Govern the action",
  "Capture proof",
  "Record movement"
];

const spineNodes = [
  { label: 'Demand Recovery', active: false },
  { label: 'Engagement Readiness', active: false },
  { label: 'Document Readiness', active: true, badge: 'Previewing now' },
  { label: 'Work Readiness', active: false },
  { label: 'Revenue Readiness', active: false },
  { label: 'Collection', active: false },
];

export default function OperatingModel() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        
        {/* Header & Body */}
        <div className="max-w-3xl mb-24">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-8">
            One operating model. Every outcome runs on it.
          </h2>
          <p className="text-lg md:text-xl text-slate-700 leading-relaxed font-light">
            Catena senses the signals across your stack, commits them into a single operational truth, finds the outcome that's actually blocked, routes the next approved step to an AI worker, a person, or an external system, captures proof that it happened, and records whether the outcome moved. The same loop runs whether the outcome is a recovered lead, a cleared document blocker, or a collected payment.
          </p>
        </div>

        {/* The Loop */}
        <div className="mb-32">
          <div className="glass-panel p-8 md:p-12 border-slate-200">
            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-10 text-center">The Operating Loop</h3>
            
            <div className="flex flex-wrap justify-center items-center gap-4">
              {loopSteps.map((step, idx) => (
                <React.Fragment key={idx}>
                  <div className="px-5 py-2.5 bg-white border border-slate-200 rounded-full shadow-sm text-sm font-medium text-slate-700">
                    {step}
                  </div>
                  {idx < loopSteps.length - 1 && (
                    <ArrowRight size={16} className="text-slate-300 flex-shrink-0" />
                  )}
                </React.Fragment>
              ))}
              {/* Loop back indicator - simple text for now to keep it clean */}
              <ArrowRight size={16} className="text-slate-300 flex-shrink-0" />
              <div className="px-5 py-2.5 bg-accent/5 border border-accent/20 rounded-full text-sm font-medium text-accent">
                Repeat
              </div>
            </div>
          </div>
        </div>

        {/* The Spine Echo */}
        <div className="mb-16">
          <div className="relative mb-16 px-4 max-w-4xl mx-auto">
            {/* The line */}
            <div className="absolute top-1/2 left-0 w-full h-[2px] bg-slate-200 -translate-y-1/2 z-0"></div>
            
            {/* Nodes */}
            <div className="relative z-10 flex justify-between items-center w-full">
              {spineNodes.map((node, idx) => (
                <div key={idx} className="flex flex-col items-center relative group">
                  <div className={clsx(
                    "w-5 h-5 rounded-full flex items-center justify-center transition-colors shadow-sm",
                    node.active ? "bg-accent border-4 border-white" : "bg-white border-2 border-slate-300"
                  )}>
                  </div>
                  
                  {/* Label */}
                  <div className={clsx(
                    "absolute top-8 text-center w-32 -ml-16 left-1/2 text-[13px] font-medium transition-colors",
                    node.active ? "text-accent" : "text-slate-400 group-hover:text-slate-600"
                  )}>
                    {node.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* The Grammar & Supporting Line */}
        <div className="max-w-3xl mx-auto text-center mt-12 pt-8 border-t border-slate-100">
          <p className="text-lg md:text-xl text-slate-800 leading-relaxed font-medium mb-8">
            Recovery rescues what would be lost. Readiness decides whether the matter can move. Reconciliation resolves what's out of sync. <span className="text-accent italic">One grammar, one system.</span>
          </p>
          <p className="text-sm text-slate-500 font-medium tracking-wide uppercase">
            Catena doesn't count work as done until the business state changes.
          </p>
        </div>

      </div>
    </section>
  );
}
