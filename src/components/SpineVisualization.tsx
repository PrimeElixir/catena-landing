"use client";

import React, { useRef } from 'react';
import SpineNode, { SpineNodeProps } from './SpineNode';

const sampleNodes: SpineNodeProps[] = [
  {
    id: '1',
    status: 'completed',
    title: 'Illegible ID Scan identified',
    timestamp: '10:42 AM',
    description: 'Trigger: Document Analysis',
    iconType: 'alert',
    colorTheme: 'slate'
  },
  {
    id: '2',
    status: 'completed',
    title: 'Automated SMS Sent to Client',
    timestamp: '10:43 AM',
    description: 'Action: Comm Hub',
    iconType: 'sms',
    colorTheme: 'slate'
  },
  {
    id: '3',
    status: 'completed',
    title: 'Client uploaded new photo via secure link',
    timestamp: '11:15 AM',
    description: 'Event: Client Portal',
    iconType: 'photo',
    colorTheme: 'success'
  },
  {
    id: '4',
    status: 'completed',
    title: 'Blocker resolved: ID Scan verified',
    timestamp: '11:16 AM',
    description: 'Engine: Catena Vision',
    iconType: 'verify',
    colorTheme: 'success'
  },
  {
    id: '5',
    status: 'active',
    title: 'Matter ready to move forward',
    timestamp: '11:16 AM',
    description: 'Status Updated in CMS',
    iconType: 'ready',
    colorTheme: 'indigo'
  }
];

export default function SpineVisualization() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16" id="platform">
      
      {/* Left Text */}
      <div className="flex-1 space-y-6">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
          The intelligence that connects your firm.
        </h2>
        <p className="text-lg text-text-secondary leading-relaxed font-light max-w-lg">
          Stop treating highly-paid professionals like routers. The Catena Spine acts as an invisible layer across your practice management, communication, and document tools, actively chasing down what's missing so your team can focus on practicing law.
        </p>
        
        <div className="pt-8 space-y-8">
          <Feature 
            title="Missing Signatures" 
            desc="Detects unsigned agreements and automatically routes them to the right party for execution."
          />
          <Feature 
            title="Blurry / Illegible Uploads" 
            desc="Instantly flags unreadable ID or medical scans and texts the client for a clearer copy."
          />
          <Feature 
            title="Expired Documentation" 
            desc="Tracks expiration dates on critical filings and triggers a renewal request before deadlines hit."
          />
        </div>
      </div>

      {/* Right Glass Card with Spine */}
      <div className="flex-1 w-full max-w-md relative perspective-1000">
        <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 to-transparent blur-3xl -z-10 rounded-full opacity-50 translate-y-10"></div>
        
        <div className="bg-white rounded-xl shadow-[0_20px_60px_-15px_rgba(20,184,166,0.3)] border border-slate-200 overflow-hidden" ref={containerRef}>
          {/* Mac Window Header */}
          <div className="flex items-center px-4 py-3 border-b border-slate-100 bg-white/50">
            <div className="flex gap-1.5 flex-1">
              <div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
            </div>
            <div className="text-xs font-mono text-slate-500 justify-center flex-1 text-center whitespace-nowrap">
              catena://matter/garcia-v-deliveryco
            </div>
            <div className="flex-1"></div>
          </div>

          <div className="p-8 pb-10">
            {/* Card Header */}
            <div className="flex items-center justify-between mb-10 pb-2">
              <div>
                <h3 className="text-[22px] font-bold text-slate-800 mb-1">Sample Matter</h3>
                <p className="text-[13px] text-slate-500">Personal Injury • ID: MT-8924</p>
              </div>
              <div className="px-3.5 py-1.5 bg-accent/10 text-accent text-xs font-semibold rounded-full">
                Readiness Achieved
              </div>
            </div>

            {/* Spine Nodes Container */}
            <div className="relative ml-2">
              {sampleNodes.map((node, idx) => (
                <SpineNode 
                  key={node.id} 
                  {...node} 
                  isLast={idx === sampleNodes.length - 1} 
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Feature({ title, desc }: { title: string, desc: string }) {
  return (
    <div className="flex gap-4">
      <div className="w-10 h-10 rounded bg-surface border border-border-glass flex items-center justify-center flex-shrink-0">
        <div className="w-2 h-2 rounded-full bg-accent"></div>
      </div>
      <div>
        <h4 className="font-semibold text-text-primary mb-1">{title}</h4>
        <p className="text-sm text-text-secondary">{desc}</p>
      </div>
    </div>
  )
}
