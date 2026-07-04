'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function CloseSection() {
  return (
    <section className="py-16 md:py-32 px-6">
      <div className="max-w-3xl mx-auto text-center">
        
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-8">
          Start with one loop.
        </h2>
        
        <p className="text-lg md:text-xl text-slate-700 leading-relaxed font-light mb-12">
          CatenaOS is built as an outcome execution system. We start by mapping one recurring stall, proving whether the loop can actually move it, and expanding only where the operating truth supports it.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <button 
            onClick={() => window.dispatchEvent(new Event('open-request-modal'))}
            className="w-full sm:w-auto px-8 py-3.5 bg-accent hover:bg-accent-hover text-white font-semibold rounded-full shadow-md shadow-accent/20 transition-all transform hover:scale-105"
          >
            Request Access
          </button>
          
          <a 
            href={process.env.NEXT_PUBLIC_READINESS_URL || "https://catena-demo-puce.vercel.app/"}
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-3.5 flex items-center justify-center gap-2 bg-surface hover:bg-surface/80 border border-border-glass text-text-primary font-medium rounded-full transition-all group"
          >
            Explore Document Readiness
            <ArrowRight size={16} className="text-accent group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <p className="text-sm font-semibold text-accent uppercase tracking-widest">
          Current preview loop: Document Readiness.
        </p>

      </div>
    </section>
  );
}
