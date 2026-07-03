import React from 'react';
import { Cpu, Database, Users, Hand, Ban } from 'lucide-react';

export default function GovernedFabric() {
  return (
    <section className="py-32 px-6 bg-slate-50 border-y border-border-glass">
      <div className="max-w-5xl mx-auto">
        
        {/* Header & Intro */}
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6 leading-[1.1]">
            It knows when not to act.
          </h2>
          <p className="text-xl text-slate-600 font-light max-w-2xl mx-auto">
            Catena doesn't assume AI should do everything.
          </p>
        </div>

        {/* The Visual Hierarchy */}
        <div className="relative max-w-3xl mx-auto flex flex-col items-center mb-24">
          
          {/* Top Tier: The 3 Actors */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 w-full relative z-10">
            
            {/* AI Workers */}
            <div className="glass-panel p-6 flex flex-col items-center justify-center text-center">
              <Cpu size={24} className="text-accent mb-3" />
              <h3 className="font-bold text-slate-900 mb-1">AI Workers</h3>
              <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest">Operational</p>
            </div>

            {/* External Systems */}
            <div className="glass-panel p-6 flex flex-col items-center justify-center text-center">
              <Database size={24} className="text-accent mb-3" />
              <h3 className="font-bold text-slate-900 mb-1">External Systems</h3>
              <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest">Deterministic Signals</p>
            </div>

            {/* People */}
            <div className="glass-panel p-6 flex flex-col items-center justify-center text-center">
              <Users size={24} className="text-accent mb-3" />
              <h3 className="font-bold text-slate-900 mb-1">People</h3>
              <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest">Judgment / Relationships</p>
            </div>
          </div>

          {/* Lines converging from 3 columns to center */}
          <div className="hidden md:block relative w-full h-16 z-0">
            {/* Horizontal collector line */}
            <div className="absolute top-8 left-[16.66%] w-[66.66%] h-[2px] bg-slate-300"></div>
            {/* Vertical drops from cards */}
            <div className="absolute top-0 left-[16.66%] w-[2px] h-8 bg-slate-300 -ml-[1px]"></div>
            <div className="absolute top-0 left-1/2 w-[2px] h-16 bg-slate-300 -ml-[1px]"></div>
            <div className="absolute top-0 right-[16.66%] w-[2px] h-8 bg-slate-300 -mr-[1px]"></div>
          </div>
          
          {/* Mobile connecting line */}
          <div className="md:hidden w-[2px] h-8 bg-slate-300"></div>

          {/* Middle Tier: Model of Truth */}
          <div className="relative z-10 flex items-center justify-center">
            {/* Radiant glow behind the anchor node */}
            <div className="absolute inset-0 bg-accent rounded-2xl blur-xl animate-pulse opacity-20 scale-125"></div>
            
            <div className="relative glass-panel px-10 py-6 flex items-center gap-4 border-accent/40 shadow-xl shadow-accent/10">
              {/* Live status dot */}
              <div className="relative flex items-center justify-center w-3 h-3">
                <div className="absolute w-full h-full bg-accent rounded-full animate-ping opacity-75"></div>
                <div className="relative w-full h-full bg-accent rounded-full"></div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 tracking-tight">Catena Model of Truth</h3>
            </div>
          </div>

          {/* Line down to gate */}
          <div className="w-[2px] h-16 bg-slate-300"></div>

          {/* Bottom Tier: Human Gate */}
          <div className="relative z-10 bg-slate-900 border border-amber-500/50 shadow-xl shadow-amber-900/10 rounded-xl px-8 py-5 flex items-center gap-4">
            <div className="bg-amber-500/20 p-2 rounded-lg">
              <Hand size={24} className="text-amber-500 fill-amber-500" />
            </div>
            <div className="text-left">
              <h4 className="text-amber-500 font-bold text-sm tracking-wider uppercase mb-0.5">Human Gate</h4>
              <p className="text-slate-300 text-sm font-medium">Stopping: Settlement Approval</p>
            </div>
          </div>

          {/* Dashed line down to halted decision */}
          <div className="w-[2px] h-16 border-l-2 border-dashed border-slate-400 opacity-60"></div>
          
          {/* Halted state */}
          <div className="flex flex-col items-center">
            <Ban size={20} className="text-slate-600 mb-2" />
            <p className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">Sensitive Decision Halted</p>
          </div>

        </div>

        {/* Closing Trust Line */}
        <div className="mt-16 pt-12 border-t border-slate-200 text-center">
          <p className="text-2xl md:text-3xl font-serif font-medium text-slate-900 tracking-tight italic">
            Autonomy that knows its limits is the only kind a firm can trust.
          </p>
        </div>
        
      </div>
    </section>
  );
}
