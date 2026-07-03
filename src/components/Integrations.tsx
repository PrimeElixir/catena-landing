import React from 'react';

const integrations = [
  { name: 'Clio', type: 'Practice Management' },
  { name: 'Lawmatics', type: 'CRM' },
  { name: 'DocuSign', type: 'E-Sign' },
  { name: 'Outlook', type: 'Email' },
  { name: 'Google Docs', type: 'Documents' },
  { name: 'Dropbox', type: 'Storage' }
];

export default function Integrations() {
  return (
    <section className="py-24 px-6 border-t border-border-glass" id="integrations">
      <div className="max-w-5xl mx-auto text-center">
        
        <p className="text-xs font-semibold text-text-secondary uppercase tracking-[0.2em] mb-12">
          We operate around your existing tools
        </p>

        {/* Container for scrolling/non-wrapping on smaller screens */}
        <div className="w-full overflow-x-auto pb-6 hide-scrollbar">
          <div className="flex flex-nowrap md:justify-center items-center gap-10 md:gap-16 min-w-max px-6 md:px-0">
          {integrations.map((integration, idx) => (
            <div 
              key={idx} 
              className="group flex flex-shrink-0 items-center gap-3 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer"
            >
              {/* Dummy Logo Block since we don't have SVGs */}
              <div className="w-8 h-8 rounded bg-surface border border-border-glass flex items-center justify-center group-hover:border-accent transition-colors">
                <div className="w-3 h-3 bg-text-secondary group-hover:bg-accent rounded-sm transition-colors"></div>
              </div>
              <span className="text-xl font-bold text-text-secondary group-hover:text-text-primary transition-colors">
                {integration.name}
              </span>
            </div>
          ))}
          </div>
        </div>

      </div>
    </section>
  );
}
