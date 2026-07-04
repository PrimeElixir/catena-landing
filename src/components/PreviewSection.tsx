'use client';

import React from 'react';
import { ArrowRight, AlertCircle, FileX, Send, Clock, FileCheck } from 'lucide-react';

export default function PreviewSection() {
  return (
    <section id="document-readiness" className="pt-8 pb-16 md:py-32 px-6 bg-slate-50 border-t border-border-glass">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-center">
        
        {/* Left: Text & CTAs */}
        <div className="flex-1 space-y-10">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-8">
              Previewing now:<br/>
              <span className="text-accent">the Document Readiness loop.</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-700 leading-relaxed font-light">
              A document is never simply missing or present. It can be wrong, partial, unreadable, unsigned, stale, rejected, or sitting in the file unreviewed — and every one of those still shows up as "handled."
            </p>
            <p className="text-lg md:text-xl text-slate-700 leading-relaxed font-light mt-4">
              CatenaOS works the loop around each required document: it catches the real blocker, runs the next approved step, captures proof, and keeps the matter moving toward a resolution instead of another reminder.
            </p>
          </div>

          <div className="p-6 bg-white border-l-4 border-accent shadow-sm rounded-r-xl">
            <p className="text-xl md:text-2xl font-serif font-medium text-slate-900 tracking-tight italic">
              Requested ≠ ready. Uploaded ≠ usable. Received ≠ resolved.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
            <a 
              href={process.env.NEXT_PUBLIC_READINESS_URL || "https://catena-demo-puce.vercel.app/"}
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3.5 bg-accent hover:bg-accent-hover text-white font-semibold rounded-full shadow-md shadow-accent/20 transition-all flex items-center justify-center gap-2 group"
            >
              Explore the Document Readiness loop
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            
            <button 
              onClick={() => window.dispatchEvent(new Event('open-request-modal'))}
              className="w-full sm:w-auto px-6 py-3.5 flex items-center justify-center gap-2 bg-transparent hover:bg-slate-100 text-slate-700 font-medium rounded-full transition-all group"
            >
              Map one document stall
              <ArrowRight size={18} className="text-slate-400 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Right: Illustrative Panel */}
        <div className="flex-1 w-full max-w-lg">
          <div className="glass-panel p-6 border-slate-200">
            {/* Header */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-accent/10 flex items-center justify-center">
                  <FileX size={16} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Medical Release (HIPAA)</h3>
                  <p className="text-xs text-slate-500 font-medium">catena://matter/8924</p>
                </div>
              </div>
              <span className="px-2.5 py-1 bg-amber-100 text-amber-700 text-xs font-bold uppercase tracking-wider rounded-full">
                Blocked
              </span>
            </div>

            {/* Story Timeline */}
            <div className="space-y-6 relative before:absolute before:inset-y-2 before:left-[15px] before:w-[2px] before:bg-slate-100 pl-2">
              
              <div className="relative flex gap-4">
                <div className="w-8 h-8 rounded-full bg-slate-50 border-2 border-slate-200 flex items-center justify-center flex-shrink-0 z-10">
                  <AlertCircle size={14} className="text-slate-400" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">Signed release rejected</p>
                  <p className="text-xs text-slate-500 mt-1">Provider (Mercy General) requires proprietary form.</p>
                </div>
              </div>

              <div className="relative flex gap-4">
                <div className="w-8 h-8 rounded-full bg-slate-50 border-2 border-slate-200 flex items-center justify-center flex-shrink-0 z-10">
                  <Send size={14} className="text-slate-400" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">Corrected form resent</p>
                  <p className="text-xs text-slate-500 mt-1">Routed Mercy General form to client via SMS.</p>
                </div>
              </div>

              <div className="relative flex gap-4">
                <div className="w-8 h-8 rounded-full bg-white border-2 border-accent flex items-center justify-center flex-shrink-0 z-10 shadow-sm">
                  <Clock size={14} className="text-accent" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-accent">Client signature pending</p>
                  <p className="text-xs text-slate-500 mt-1">Awaiting client execution. SLA: 24h.</p>
                </div>
              </div>

            </div>
          </div>
          
          <p className="text-center text-xs text-slate-400 mt-4 italic">
            Illustrative of CatenaOS's document-readiness workflow.
          </p>
        </div>

      </div>
    </section>
  );
}
