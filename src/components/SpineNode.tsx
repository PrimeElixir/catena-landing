import React from 'react';
import { CheckCircle2, TriangleAlert, Smartphone, Image as ImageIcon, ShieldCheck, Flag } from 'lucide-react';
import clsx from 'clsx';
import { motion } from 'framer-motion';

export type NodeStatus = 'completed' | 'active' | 'pending';
export type ColorTheme = 'slate' | 'success' | 'indigo';

export interface SpineNodeProps {
  id: string;
  status: NodeStatus;
  title: string;
  timestamp?: string;
  description: string;
  iconType: 'alert' | 'sms' | 'photo' | 'verify' | 'ready';
  colorTheme: ColorTheme;
  isLast?: boolean;
}

const getIcon = (type: string, theme: ColorTheme) => {
  const size = 16;
  let className = '';
  
  if (theme === 'slate') className = 'text-slate-400';
  if (theme === 'success') className = 'text-success';
  if (theme === 'indigo') className = 'text-indigo-100'; // Inside solid circle
  
  switch (type) {
    case 'alert': return <TriangleAlert size={size} className={className} />;
    case 'sms': return <Smartphone size={size} className={className} />;
    case 'photo': return <CheckCircle2 size={size} className={className} />;
    case 'verify': return <CheckCircle2 size={size} className={className} />;
    case 'ready': return <Flag size={size} className={className} />;
    default: return <CheckCircle2 size={size} className={className} />;
  }
};

export default function SpineNode({ status, title, timestamp, description, iconType, colorTheme, isLast }: SpineNodeProps) {
  return (
    <div className="relative flex gap-6 pb-10">
      {/* Solid Blue Spine Line */}
      {!isLast && (
        <div className="absolute left-[15px] top-[34px] bottom-[-2px] w-[2px] bg-blue-600 rounded-full"></div>
      )}
      
      {/* Node Icon Container */}
      <div className="relative z-10 flex-shrink-0 pt-1">
        <div className={clsx(
          "w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500",
          colorTheme === 'slate' && "bg-white border-[1.5px] border-slate-300",
          colorTheme === 'success' && "bg-white border-[1.5px] border-success",
          colorTheme === 'indigo' && "bg-indigo-600 shadow-md shadow-indigo-600/30",
        )}>
          {getIcon(iconType, colorTheme)}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col">
        <h3 className="text-[15px] font-semibold text-slate-800">{title}</h3>
        <div className="flex items-center gap-1.5 mt-1.5 text-xs font-mono">
          <span className={clsx(
            colorTheme === 'slate' ? "text-slate-500" : (colorTheme === 'success' ? "text-success" : "text-indigo-600")
          )}>
            {timestamp}
          </span>
          <span className="text-slate-300">•</span>
          <span className={clsx(
            colorTheme === 'slate' ? "text-slate-500" : (colorTheme === 'success' ? "text-success" : "text-indigo-600")
          )}>
            {description}
          </span>
        </div>
      </div>
    </div>
  );
}
