import React from 'react';
import { Phone, PenTool, FileText, Receipt, CheckCircle2, AlertCircle, AlertTriangle, FileWarning, ArrowRight } from 'lucide-react';
import clsx from 'clsx';

export default function MissingLayer() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4 leading-[1.1]">
            Your software has logged activity for decades.<br/>
            <span className="text-accent">None of it moves the outcome.</span>
          </h2>
        </div>

        {/* Visual Argument Section */}
        <div className="mb-24 relative">
          
          {/* Pipeline Strip */}
          <div className="max-w-4xl mx-auto mb-16 relative">
            <div className="absolute top-1/2 left-0 w-full h-[2px] bg-slate-200 -translate-y-1/2 z-0 border-t border-dashed border-slate-300"></div>
            
            <div className="relative z-10 flex justify-between items-center w-full px-4 md:px-12">
              {/* Step 1 */}
              <div className="flex flex-col items-center bg-white px-4 py-2 rounded-lg border border-slate-200 shadow-sm text-slate-600 font-medium text-sm">
                <Phone size={16} className="mb-1 text-slate-400" />
                Phone
              </div>
              
              {/* Step 2 */}
              <div className="flex flex-col items-center bg-white px-4 py-2 rounded-lg border border-slate-200 shadow-sm text-slate-600 font-medium text-sm">
                <PenTool size={16} className="mb-1 text-slate-400" />
                Signature
              </div>

              {/* STUCK POINT */}
              <div className="flex flex-col items-center bg-white px-6 py-3 rounded-lg border-2 border-amber-500 shadow-md shadow-amber-500/20 text-amber-600 font-bold text-sm relative transform scale-110">
                <div className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-amber-500 rounded-full animate-ping opacity-75"></div>
                <div className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-amber-500 rounded-full"></div>
                <FileWarning size={20} className="mb-1 text-amber-500" />
                STUCK
              </div>

              {/* Step 4 */}
              <div className="flex flex-col items-center bg-white px-4 py-2 rounded-lg border border-slate-200 shadow-sm text-slate-400 font-medium text-sm opacity-60">
                <FileText size={16} className="mb-1 text-slate-300" />
                Records
              </div>

              {/* Step 5 */}
              <div className="flex flex-col items-center bg-white px-4 py-2 rounded-lg border border-slate-200 shadow-sm text-slate-400 font-medium text-sm opacity-60">
                <Receipt size={16} className="mb-1 text-slate-300" />
                Invoice
              </div>
            </div>
          </div>

          {/* Cards Side-by-Side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            {/* The Illusion Card */}
            <div className="glass-panel p-8 text-left">
              <h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center gap-2">
                <span className="text-slate-400">👻</span> The Illusion: what your tools report
              </h3>
              
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-slate-600 font-medium">
                  <CheckCircle2 size={20} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                  Medical release — signed
                </li>
                <li className="flex items-start gap-3 text-slate-600 font-medium">
                  <CheckCircle2 size={20} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                  Records — received
                </li>
                <li className="flex items-start gap-3 text-slate-600 font-medium">
                  <CheckCircle2 size={20} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                  Demand package — drafted
                </li>
              </ul>
            </div>

            {/* The Truth Card */}
            <div className="glass-panel border-amber-200 shadow-amber-900/5 p-8 text-left relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-amber-500"></div>
              <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
                <AlertCircle size={20} className="text-amber-500" /> The Truth: the actual outcome
              </h3>
              
              <ul className="space-y-5">
                <li className="flex items-start gap-3">
                  <AlertCircle size={20} className="text-rose-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-bold text-slate-900 block">Release rejected</span>
                    <span className="text-slate-500 text-sm">Provider requires its own form</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <AlertTriangle size={20} className="text-amber-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-bold text-slate-900 block">Records unusable</span>
                    <span className="text-slate-500 text-sm">Complete only through March, treatment ran to July</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <AlertCircle size={20} className="text-slate-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-bold text-slate-900 block">Demand blocked</span>
                    <span className="text-slate-500 text-sm">Can't go out until the release is accepted</span>
                  </div>
                </li>
              </ul>
            </div>

          </div>
          
          <p className="text-center text-xs text-slate-400 mt-6 italic">
            Illustrative of a document-readiness scenario — not live firm data.
          </p>
        </div>

        {/* Body Copy */}
        <div className="max-w-3xl mx-auto space-y-6 text-lg md:text-xl text-slate-700 leading-relaxed font-light mb-24 text-center md:text-left">
          <p>
            Work doesn't stall inside a system. It stalls <em className="font-medium text-slate-900">between</em> them. The call happens in one tool, the signature in another, the records in a third, the invoice in a fourth — and each one faithfully reports that its piece is done, while the matter sits untouched for three weeks. 
          </p>
          <p>
            A release the client signed still shows "signed" after the provider rejected it. Records that came back for the wrong patient still show "received." Your systems are full of green checkmarks on a file that hasn't actually moved.
          </p>
          <p>
            That gap — between what your tools recorded and whether the outcome advanced — is not a tooling problem you can fix by buying one more app. Every app lives inside the gap. It's a missing layer.
          </p>
        </div>

        {/* Closing Statement */}
        <div className="max-w-4xl mx-auto pt-16 border-t border-slate-200 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-[1.1]">
            Activity is not movement.<br/>
            <span className="text-accent">Catena is the layer that moves.</span>
          </h2>
        </div>

      </div>
    </section>
  );
}
