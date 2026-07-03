import React from 'react';
import { Scale, Zap, FileSignature, LayoutGrid, FileText, Box } from 'lucide-react';

const integrations = [
  { name: 'Clio', type: 'Practice Management', icon: Scale },
  { name: 'Lawmatics', type: 'CRM', icon: Zap },
  { name: 'DocuSign', type: 'E-Sign', icon: FileSignature },
  { name: 'Outlook', type: 'Email', icon: LayoutGrid },
  { name: 'Google Docs', type: 'Documents', icon: FileText },
  { name: 'Dropbox', type: 'Storage', icon: Box }
];

export default function Integrations() {
  return (
    <section className="py-24 px-6 border-t border-border-glass" id="integrations">
      <div className="w-full text-center">
        
        <p className="text-xs font-semibold text-text-secondary uppercase tracking-[0.2em] mb-12">
          We operate around your existing tools
        </p>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 px-6">
          {integrations.map((integration, idx) => {
            const Icon = integration.icon;
            return (
              <div 
                key={idx} 
                className="group flex items-center gap-2.5 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer"
              >
                <div className="w-8 h-8 flex items-center justify-center text-slate-500 group-hover:text-accent transition-colors">
                  <Icon size={22} strokeWidth={2} />
                </div>
                <span className="text-xl font-semibold text-slate-500 group-hover:text-text-primary transition-colors">
                  {integration.name}
                </span>
              </div>
            );
          })}
        </div>

        <p className="mt-12 text-xs text-slate-400 italic">
          Product names are examples of systems Catena operates around; partnership status varies.
        </p>

      </div>
    </section>
  );
}
