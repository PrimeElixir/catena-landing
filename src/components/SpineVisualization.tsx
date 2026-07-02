"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import SpineNode, { SpineNodeProps } from './SpineNode';

const sampleNodes: SpineNodeProps[] = [
  {
    id: '1',
    status: 'completed',
    title: 'Illegible ID Scan identified',
    timestamp: '10:42 AM',
    description: 'Trigger: Document Analysis',
    iconType: 'scan'
  },
  {
    id: '2',
    status: 'completed',
    title: 'Automated SMS Sent to Client',
    timestamp: '10:43 AM',
    description: 'Action: Comm Hub',
    iconType: 'sms'
  },
  {
    id: '3',
    status: 'completed',
    title: 'Client uploaded new photo via secure link',
    timestamp: '11:15 AM',
    description: 'Event: Client Portal',
    iconType: 'photo'
  },
  {
    id: '4',
    status: 'active',
    title: 'Blocker resolved: ID Scan verified',
    timestamp: '11:16 AM',
    description: 'Engine: Catena Vision',
    iconType: 'verify'
  },
  {
    id: '5',
    status: 'pending',
    title: 'Matter ready to move forward',
    description: 'Awaiting Status Update in CMS',
    iconType: 'ready'
  }
];

export default function SpineVisualization() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress relative to this container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  // Map scroll progress to the height of the animated gradient line
  // From 0% to 100% height
  const lineHeight = useTransform(scrollYProgress, [0, 0.8], ["0%", "100%"]);

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
        <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-blue-500/20 blur-3xl -z-10 rounded-full opacity-50 translate-y-10"></div>
        
        <div className="glass-panel p-8" ref={containerRef}>
          {/* Card Header */}
          <div className="flex items-center justify-between mb-8 border-b border-border-glass pb-6">
            <div>
              <h3 className="text-lg font-bold">Sample Matter</h3>
              <p className="text-sm text-text-secondary">Personal Injury • ID: MT-8924</p>
            </div>
            <div className="px-3 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full border border-accent/20">
              Readiness Check
            </div>
          </div>

          {/* Spine Nodes Container */}
          <div className="relative">
            {/* The Animated Gradient Line that "fills" on scroll */}
            <motion.div 
              className="absolute left-6 top-6 w-[2px] bg-gradient-to-b from-accent to-blue-500 -translate-x-1/2 z-0"
              style={{ height: lineHeight, originY: 0 }}
            />
            
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
