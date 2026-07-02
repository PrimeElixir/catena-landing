import React from 'react';
import { Link2 } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-panel border-x-0 border-t-0 rounded-none rounded-b-xl mx-4 mt-2">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded bg-accent/10 flex items-center justify-center text-accent">
            <Link2 size={18} />
          </div>
          <span className="text-xl font-bold tracking-tight">Catena</span>
        </div>

        {/* Navigation - Hidden on mobile for simplicity in prototype */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-text-secondary">
          <a href="#platform" className="hover:text-text-primary transition-colors">Platform</a>
          <a href="#how-it-works" className="hover:text-text-primary transition-colors">How it works</a>
          <a href="#integrations" className="hover:text-text-primary transition-colors">Existing tools</a>
        </nav>

        {/* CTAs */}
        <div className="flex items-center gap-4">
          <a href="#signin" className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors hidden sm:block">Sign in</a>
          <button className="bg-accent hover:bg-accent-hover text-white font-semibold py-2 px-5 rounded-full text-sm transition-colors shadow-md shadow-accent/20 hover:shadow-lg hover:shadow-accent/40">
            Join the Pilot
          </button>
        </div>
      </div>
    </header>
  );
}
