import React from 'react';
import { Play, CheckCircle2, Circle, ArrowRight } from 'lucide-react';
import clsx from 'clsx';

const spineNodes = [
  { label: 'Demand Recovery', active: false },
  { label: 'Engagement Readiness', active: false },
  { label: 'Document Readiness', active: true, badge: 'Previewing now' },
  { label: 'Work Readiness', active: false },
  { label: 'Revenue Readiness', active: false },
  { label: 'Collection', active: false },
];

export default function HeroSection() {
  return (
    <section className="relative pt-40 pb-20 px-6 flex flex-col items-center overflow-hidden">
      
      {/* Background Architectural Elements */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute top-[20%] left-[15%] w-96 h-96 bg-accent rounded-full mix-blend-multiply filter blur-[100px] animate-pulse opacity-10"></div>
        <div className="absolute top-[40%] right-[10%] w-[500px] h-[500px] bg-slate-300 rounded-full mix-blend-multiply filter blur-[150px] opacity-30"></div>
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center text-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-200 bg-white shadow-sm text-text-secondary text-xs font-semibold uppercase tracking-wider mb-8">
          Governed outcome execution for legal operations
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1] text-text-primary max-w-4xl">
          Your tools track activity.<br/>
          <span className="text-accent">Catena moves outcomes.</span>
        </h1>

        {/* Subhead */}
        <p className="text-lg md:text-xl text-text-secondary max-w-3xl mb-12 leading-relaxed font-light">
          Every system in your firm records its own slice of the work — the call, the signature, the upload, the invoice — and each one says "done." The matter still doesn't move. Catena is the layer that turns those scattered signals into governed outcome loops and drives them to a real result.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-24">
          <button className="w-full sm:w-auto px-8 py-3.5 bg-accent hover:bg-accent-hover text-white font-semibold rounded-full shadow-md shadow-accent/20 transition-all transform hover:scale-105">
            Request Access
          </button>
          
          <button className="w-full sm:w-auto px-8 py-3.5 flex items-center justify-center gap-2 bg-surface hover:bg-surface/80 border border-border-glass text-text-primary font-medium rounded-full transition-all">
            <Play size={16} className="text-accent fill-accent" />
            Watch the 90-second replay
          </button>
        </div>

        {/* Invariant anchor */}
        <div className="w-full flex justify-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif italic font-medium text-slate-800 tracking-tight border-l-4 border-accent pl-6 py-2">
            Activity is not movement.
          </h2>
        </div>

        {/* The Spine Visual */}
        <div className="w-full glass-panel p-8 md:p-12 text-left relative overflow-hidden">
          
          {/* Horizontal Spine Line */}
          <div className="relative mb-16 px-4">
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

                  {/* Lit Badge */}
                  {node.active && node.badge && (
                    <div className="absolute -top-10 text-center w-32 -ml-16 left-1/2">
                      <span className="inline-block px-2.5 py-1 bg-accent/10 text-accent text-[11px] font-bold uppercase tracking-wider rounded-full whitespace-nowrap">
                        {node.badge}
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Two Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8 mt-12 border-t border-slate-100">
            {/* Activity Column */}
            <div>
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">Activity</h3>
              <ul className="space-y-4">
                {['Message sent', 'Upload received', 'Link created', 'Calendar event'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-500 font-medium">
                    <Circle size={16} className="text-slate-300" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Movement Column */}
            <div>
              <h3 className="text-sm font-bold text-accent uppercase tracking-widest mb-6">Movement</h3>
              <ul className="space-y-4">
                {['Lead recovered', 'Blocker cleared', 'Matter ready', 'Invoice issued', 'Payment collected'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-800 font-semibold">
                    <CheckCircle2 size={18} className="text-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
