import React from 'react';
import { Link } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-panel border-x-0 border-t-0 rounded-none rounded-b-xl mx-4 mt-2">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-[10px] bg-white border border-slate-200 shadow-sm flex items-center justify-center text-indigo-600">
            <Link size={18} strokeWidth={2.5} />
          </div>
          <span className="text-xl font-bold tracking-tight">Catena</span>
        </div>

        {/* Navigation - Hidden on mobile for simplicity in prototype */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <a href="/readiness" className="hover:text-slate-900 transition-colors">Document Readiness</a>
          <a href="#how-it-works" className="hover:text-slate-900 transition-colors">How it works</a>
        </nav>

        {/* CTAs */}
        <div className="flex items-center gap-4">
          <button className="bg-accent hover:bg-accent-hover text-white font-semibold py-2 px-5 rounded-full text-sm transition-colors shadow-md shadow-accent/20 hover:shadow-lg hover:shadow-accent/40">
            Request Access
          </button>
        </div>
      </div>
    </header>
  );
}
