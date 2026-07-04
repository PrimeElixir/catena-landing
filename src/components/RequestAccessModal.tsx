'use client';

import React, { useState, useEffect } from 'react';
import { X, CheckCircle2 } from 'lucide-react';

type PathType = 'pilot' | 'question' | 'media' | 'partnership' | 'other' | '';

export default function RequestAccessModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [path, setPath] = useState<PathType>('');
  
  // Form fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mind, setMind] = useState('');
  const [firm, setFirm] = useState('');
  const [role, setRole] = useState('');

  // Event listener for opening the modal
  useEffect(() => {
    const handleOpen = () => {
      setIsOpen(true);
      setIsSubmitted(false);
      // Reset form state on fresh open if desired, or keep it.
    };
    
    window.addEventListener('open-request-modal', handleOpen);
    return () => window.removeEventListener('open-request-modal', handleOpen);
  }, []);

  // Close handlers
  const handleClose = () => setIsOpen(false);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          path,
          name,
          email,
          firm,
          role,
          mind
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setIsSubmitted(true);
    } catch (err) {
      setError('Something went wrong. Please try again or use the phone number below.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  const showExtendedFields = path === 'pilot' || path === 'question';
  const emailLabel = showExtendedFields ? 'Work email' : 'Email';

  const placeholders: Record<string, string> = {
    pilot: "Where do your matters get stuck waiting on documents? A sentence or two is plenty.",
    question: "What would you like to know? e.g. can CatenaOS handle [X]?",
    media: "Tell us about the show or event and what you'd want to cover.",
    partnership: "Tell us a bit about you and what you're exploring.",
    other: "What's on your mind?",
    '': "What's on your mind?"
  };

  const confirmations: Record<string, string> = {
    pilot: "Thanks — this goes straight to Brian, who reads every one personally. If it looks like a fit for the Document Readiness preview, you'll hear back within a couple of days.",
    question: "Thanks — Brian will read this and reply personally, usually within a couple of days.",
    media: "Thanks — we'd love to talk. Brian will get back to you directly.",
    partnership: "Thanks for reaching out — Brian will follow up personally.",
    other: "Thanks — we read every message and Brian will be in touch personally."
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity"
        onClick={handleClose}
      />
      
      {/* Modal Container */}
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-4 border-b border-slate-100">
          <h2 className="text-xl font-bold text-slate-900 tracking-tight">Request Access</h2>
          <button 
            onClick={handleClose}
            className="text-slate-400 hover:text-slate-600 transition-colors rounded-full p-1 hover:bg-slate-100"
          >
            <X size={20} />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto px-4 sm:px-6 py-6 custom-scrollbar">
          
          {isSubmitted ? (
            <div className="flex flex-col items-center text-center py-10 px-4">
              <CheckCircle2 size={48} className="text-accent mb-6" strokeWidth={1.5} />
              <p className="text-lg text-slate-700 leading-relaxed font-medium">
                {confirmations[path || 'other']}
              </p>
              <button 
                onClick={handleClose}
                className="mt-8 bg-slate-100 hover:bg-slate-200 text-slate-800 font-medium py-2 px-6 rounded-full transition-colors"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              
              <div className="bg-slate-50 text-slate-600 text-sm p-4 rounded-xl leading-relaxed border border-slate-100">
                We're onboarding a small number of firms into the Document Readiness preview — and we're always glad to talk to anyone curious about what CatenaOS is building. Tell us a bit below and we'll be in touch personally.
              </div>

              {/* Routing Field */}
              <div className="flex flex-col gap-2">
                <label htmlFor="path" className="font-semibold text-slate-900 text-sm">
                  What brings you here? <span className="text-accent">*</span>
                </label>
                <select 
                  id="path" 
                  value={path}
                  onChange={(e) => setPath(e.target.value as PathType)}
                  required
                  className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-slate-700 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-shadow appearance-none cursor-pointer"
                >
                  <option value="" disabled>Select an option...</option>
                  <option value="pilot">I might be a fit for the pilot</option>
                  <option value="question">I have a question about CatenaOS</option>
                  <option value="media">Media, podcast, or event</option>
                  <option value="partnership">Partnership or investment</option>
                  <option value="other">Something else</option>
                </select>
              </div>

              {/* Dynamic Fields (only show if path is selected) */}
              {path && (
                <div className="flex flex-col gap-5 animate-in fade-in slide-in-from-top-2 duration-300">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className="font-semibold text-slate-900 text-sm">
                        Name <span className="text-accent">*</span>
                      </label>
                      <input 
                        type="text" 
                        id="name" 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="w-full bg-white border border-slate-200 rounded-lg px-4 py-2.5 text-slate-700 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-shadow"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="font-semibold text-slate-900 text-sm">
                        {emailLabel} <span className="text-accent">*</span>
                      </label>
                      <input 
                        type="email" 
                        id="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full bg-white border border-slate-200 rounded-lg px-4 py-2.5 text-slate-700 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-shadow"
                      />
                    </div>
                  </div>

                  {showExtendedFields && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="flex flex-col gap-2">
                        <label htmlFor="firm" className="font-semibold text-slate-900 text-sm">
                          Firm / organization {path === 'pilot' && <span className="text-accent">*</span>}
                        </label>
                        <input 
                          type="text" 
                          id="firm" 
                          value={firm}
                          onChange={(e) => setFirm(e.target.value)}
                          required={path === 'pilot'}
                          className="w-full bg-white border border-slate-200 rounded-lg px-4 py-2.5 text-slate-700 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-shadow"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label htmlFor="role" className="font-semibold text-slate-900 text-sm">
                          Your role {path === 'pilot' && <span className="text-accent">*</span>}
                        </label>
                        <select 
                          id="role" 
                          value={role}
                          onChange={(e) => setRole(e.target.value)}
                          required={path === 'pilot'}
                          className="w-full bg-white border border-slate-200 rounded-lg px-4 py-2.5 text-slate-700 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-shadow appearance-none cursor-pointer"
                        >
                          <option value="" disabled>Select role...</option>
                          <option value="owner">Owner / managing partner</option>
                          <option value="ops">Operations / admin</option>
                          <option value="paralegal">Paralegal / case manager</option>
                          <option value="attorney">Attorney</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                  )}

                  <div className="flex flex-col gap-2">
                    <label htmlFor="mind" className="font-semibold text-slate-900 text-sm">
                      What's on your mind? <span className="text-accent">*</span>
                    </label>
                    <textarea 
                      id="mind" 
                      value={mind}
                      onChange={(e) => setMind(e.target.value)}
                      required
                      rows={3}
                      placeholder={placeholders[path]}
                      className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-slate-700 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-shadow resize-y"
                    />
                  </div>

                  <div className="pt-2">
                    {error && (
                      <div className="mb-4 p-3 bg-red-50 text-red-600 text-sm rounded-lg border border-red-100">
                        {error}
                      </div>
                    )}
                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-accent hover:bg-accent-hover text-white font-semibold py-3 px-6 rounded-lg transition-colors shadow-md shadow-accent/20 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        'Send Message'
                      )}
                    </button>
                    
                    <p className="text-center text-sm text-slate-500 mt-5 mb-2">
                      Prefer to talk? Call or text <a href="tel:4045006051" className="text-slate-700 font-medium hover:text-accent transition-colors">(404) 500-6051</a>
                    </p>
                  </div>
                </div>
              )}
            </form>
          )}

        </div>
      </div>
    </div>
  );
}
