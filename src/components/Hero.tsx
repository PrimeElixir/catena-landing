import React from 'react';
import { Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-40 pb-20 px-6 flex flex-col items-center text-center overflow-hidden">
      
      {/* Background Architectural Elements (abstract shapes) */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-[20%] left-[15%] w-96 h-96 bg-accent rounded-full mix-blend-screen filter blur-[100px] animate-pulse opacity-20"></div>
        <div className="absolute top-[40%] right-[10%] w-[500px] h-[500px] bg-blue-600 rounded-full mix-blend-screen filter blur-[150px] opacity-10"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        {/* Pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent/30 bg-accent/5 text-accent text-xs font-semibold uppercase tracking-wider mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
          Document Readiness Intelligence
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
          File status <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-400">≠</span> <br className="hidden md:block" />
          matter readiness.
        </h1>

        <p className="text-lg md:text-xl text-text-secondary max-w-2xl mb-10 leading-relaxed font-light">
          Automate the document-readiness chase. Catena detects blockers, resolves rejects, and keeps your matters moving to the next stage.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <button className="w-full sm:w-auto px-8 py-3.5 bg-accent hover:bg-accent-hover text-[#0a0c10] font-semibold rounded-full shadow-[0_0_20px_rgba(20,184,166,0.3)] transition-all transform hover:scale-105">
            Join the Pilot
          </button>
          
          <button className="w-full sm:w-auto px-8 py-3.5 flex items-center justify-center gap-2 bg-surface hover:bg-surface/80 border border-border-glass text-text-primary font-medium rounded-full transition-all">
            <Play size={16} className="text-accent" />
            Watch replay
          </button>
        </div>
      </div>
    </section>
  );
}
