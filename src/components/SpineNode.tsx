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
  const className = status === 'pending' ? 'text-text-secondary/50' : (status === 'completed' ? 'text-accent' : 'text-blue-400');
  
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
        <div className="absolute left-6 top-14 bottom-0 w-[2px] bg-border-glass -translate-x-1/2"></div>
      )}
      
      {/* Node Icon Container */}
      <div className="relative z-10 flex-shrink-0">
        <div className={clsx(
          "w-12 h-12 rounded-xl flex items-center justify-center bg-surface border-2 transition-all duration-500",
          status === 'completed' && "border-accent shadow-[0_0_10px_rgba(20,184,166,0.2)]",
          status === 'active' && "border-blue-400 shadow-[0_0_15px_rgba(96,165,250,0.4)]",
          status === 'pending' && "border-border-glass border-dashed opacity-60"
        )}>
          {getIcon(iconType, status)}
        </div>
        
        {/* Active Pulse Effect */}
        {status === 'active' && (
          <div className="absolute inset-0 rounded-xl border-2 border-blue-400 animate-ping opacity-20"></div>
        )}
      </div>

      {/* Content */}
      <div className={clsx("flex flex-col pt-2", status === 'pending' && "opacity-50")}>
        <h3 className="text-base font-semibold text-text-primary">{title}</h3>
        <div className="flex items-center gap-2 mt-1 text-xs font-mono text-text-secondary">
          {timestamp && <span>{timestamp}</span>}
          {timestamp && <span className="text-border-glass">•</span>}
          <span className={clsx(
            status === 'completed' ? "text-accent/80" : (status === 'active' ? "text-blue-400/80" : "text-text-secondary")
          )}>{description}</span>
        </div>
      </div>
    </div>
  );
}
