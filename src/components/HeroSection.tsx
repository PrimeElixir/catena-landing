"use client";

import React, { useState } from 'react';
import { Play, CheckCircle2, Circle, Check } from 'lucide-react';
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
  const [lens, setLens] = useState<'activity' | 'movement'>('activity');

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
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-32">
          <button className="w-full sm:w-auto px-8 py-3.5 bg-accent hover:bg-accent-hover text-white font-semibold rounded-full shadow-md shadow-accent/20 transition-all transform hover:scale-105">
            Request Access
          </button>
          
          <button className="w-full sm:w-auto px-8 py-3.5 flex items-center justify-center gap-2 bg-surface hover:bg-surface/80 border border-border-glass text-text-primary font-medium rounded-full transition-all">
            <Play size={16} className="text-accent fill-accent" />
            Watch the 90-second replay
          </button>
        </div>

        {/* The Toggle Section */}
        <div className="w-full flex flex-col items-center mb-8">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4">
            Activity is not movement.
          </h2>
          <p className="text-lg text-slate-500 font-light mb-8">
            Same firm, same week. Switch the lens.
          </p>
          
          {/* Toggle Switch */}
          <div className="inline-flex items-center p-1 bg-slate-200 rounded-full border border-slate-400 shadow-inner mb-12">
            <button 
              onClick={() => setLens('activity')}
              className={clsx(
                "px-8 py-2.5 rounded-full text-sm font-semibold transition-all duration-300",
                lens === 'activity' ? "bg-white text-slate-900 shadow-md border border-slate-300" : "text-slate-600 hover:text-slate-800"
              )}
            >
              Activity
            </button>
            <button 
              onClick={() => setLens('movement')}
              className={clsx(
                "px-8 py-2.5 rounded-full text-sm font-semibold transition-all duration-300",
                lens === 'movement' ? "bg-white text-slate-900 shadow-md border border-slate-300" : "text-slate-600 hover:text-slate-800"
              )}
            >
              Movement
            </button>
          </div>
        </div>

        {/* The Panel Visual */}
        <div className="w-full max-w-4xl glass-panel p-8 md:p-12 text-left relative overflow-hidden transition-all duration-500">
          
          {/* Horizontal Spine Line */}
          <div className="relative mb-16 px-4 hidden md:block">
            {/* The line */}
            <div className="absolute top-1/2 left-0 w-full h-[3px] bg-slate-400 -translate-y-1/2 z-0"></div>
            
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

          {/* Toggleable Content Area */}
          <div className="flex flex-col items-center max-w-2xl mx-auto min-h-[300px] justify-center">
            
            {lens === 'activity' ? (
              <div className="w-full space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <ul className="space-y-4 max-w-md mx-auto text-slate-600 font-medium">
                  <li className="flex items-center gap-3"><Check size={16} className="text-slate-400" /> Medical release — signed ✓</li>
                  <li className="flex items-center gap-3"><Check size={16} className="text-slate-400" /> Records — received ✓</li>
                  <li className="flex items-center gap-3"><Check size={16} className="text-slate-400" /> Demand package — drafted ✓</li>
                  <li className="flex items-center gap-3"><Check size={16} className="text-slate-400" /> Client follow-up — sent ✓</li>
                </ul>

                <div className="mt-6 pt-6 border-t border-slate-100 text-center">
                  <div className="inline-block px-4 py-1.5 bg-slate-100 text-slate-500 rounded-full text-sm font-medium mb-2">
                    42 tasks logged
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800">
                    0 matters advanced this week
                  </h3>
                </div>
              </div>
            ) : (
              <div className="w-full space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <ul className="space-y-4 max-w-lg mx-auto text-slate-700 font-medium">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                    <div>Release — <span className="font-semibold text-slate-900">rejected by provider</span> <span className="text-slate-400 font-normal">· corrected form re-sent</span></div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                    <div>Records — <span className="font-semibold text-slate-900">came back partial</span> <span className="text-slate-400 font-normal">· full chart re-requested</span></div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 flex-shrink-0"></div>
                    <div>Demand — <span className="font-semibold text-amber-700">blocked until the release is accepted</span> <span className="text-slate-400 font-normal">· flagged</span></div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 flex-shrink-0"></div>
                    <div>1 item — <span className="font-semibold text-slate-900">routed to an attorney for judgment</span></div>
                  </li>
                </ul>

                <div className="mt-6 pt-6 border-t border-slate-100 text-center">
                  <h3 className="text-2xl font-bold text-accent mb-3">
                    3 matters moving <span className="text-slate-300 font-light mx-1">·</span> <span className="text-slate-800">1 sent to human review</span>
                  </h3>
                  <p className="text-sm text-slate-500 font-medium">
                    The same week, through the movement lens.
                  </p>
                </div>
              </div>
            )}
            
          </div>
        </div>
        
        <p className="text-center text-xs text-slate-400 mt-3 italic">
          Illustrative of a document-readiness scenario — not live firm data.
        </p>

      </div>
    </section>
  );
}
