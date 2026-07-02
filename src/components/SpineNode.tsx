import React from 'react';
import { CheckCircle2, CircleDashed, FileSearch, MessageSquare, Image as ImageIcon, ShieldCheck } from 'lucide-react';
import clsx from 'clsx';
import { motion } from 'framer-motion';

export type NodeStatus = 'completed' | 'active' | 'pending';

export interface SpineNodeProps {
  id: string;
  status: NodeStatus;
  title: string;
  timestamp?: string;
  description: string;
  iconType: 'scan' | 'sms' | 'photo' | 'verify' | 'ready';
  isLast?: boolean;
}

const getIcon = (type: string, status: NodeStatus) => {
  const size = 18;
  const className = status === 'pending' ? 'text-text-secondary/50' : (status === 'completed' ? 'text-success' : 'text-accent');
  
  switch (type) {
    case 'scan': return <FileSearch size={size} className={className} />;
    case 'sms': return <MessageSquare size={size} className={className} />;
    case 'photo': return <ImageIcon size={size} className={className} />;
    case 'verify': return <ShieldCheck size={size} className={className} />;
    case 'ready': return <CheckCircle2 size={size} className={className} />;
    default: return <CircleDashed size={size} className={className} />;
  }
};

export default function SpineNode({ status, title, timestamp, description, iconType, isLast }: SpineNodeProps) {
  return (
    <div className="relative flex gap-6 pb-12">
      {/* Spine Line (Background) */}
      {!isLast && (
        <div className="absolute left-6 top-14 bottom-0 w-[2px] bg-spine-line -translate-x-1/2"></div>
      )}
      
      {/* Node Icon Container */}
      <div className="relative z-10 flex-shrink-0">
        <div className={clsx(
          "w-12 h-12 rounded-xl flex items-center justify-center border-2 transition-all duration-500",
          status === 'completed' && "bg-white border-success shadow-md shadow-success/10",
          status === 'active' && "bg-white border-accent shadow-md shadow-accent/20",
          status === 'pending' && "bg-slate-100 border-border-glass opacity-60"
        )}>
          {getIcon(iconType, status)}
        </div>
        
        {/* Active Pulse Effect */}
        {status === 'active' && (
          <div className="absolute inset-0 rounded-xl border-2 border-accent animate-ping opacity-20"></div>
        )}
      </div>

      {/* Content */}
      <div className={clsx("flex flex-col pt-2", status === 'pending' && "opacity-50")}>
        <h3 className="text-base font-semibold text-text-primary">{title}</h3>
        <div className="flex items-center gap-2 mt-1 text-xs font-mono text-text-secondary">
          {timestamp && <span>{timestamp}</span>}
          {timestamp && <span className="text-border-glass">•</span>}
          <span className={clsx(
            status === 'completed' ? "text-success font-medium" : (status === 'active' ? "text-accent font-medium" : "text-text-secondary")
          )}>{description}</span>
        </div>
      </div>
    </div>
  );
}
