"use client";

import React, { useState, useEffect } from 'react';
import clsx from 'clsx';

const loopSteps = [
  "Sense",
  "Commit Truth",
  "Find Blocked Outcome",
  "Route Work",
  "Govern Action",
  "Capture Proof",
  "Record Movement"
];

export default function OperatingModel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [pulseCenter, setPulseCenter] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => {
        const next = prev + 1;
        if (next === loopSteps.length) {
          // Reached the end, trigger center pulse
          setPulseCenter(true);
          setTimeout(() => setPulseCenter(false), 500); // Reset pulse
          return 0; // Loop back to start
        }
        return next;
      });
    }, 1200); // Time per step

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-32 px-6">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        
        {/* Left: The Circular Animation Diagram */}
        <div className="flex-1 w-full max-w-lg relative flex items-center justify-center py-20 lg:py-0">
          
          <div className="relative w-[320px] h-[320px] md:w-[450px] md:h-[450px] rounded-full flex items-center justify-center glass-panel shadow-sm">
            
            {/* Center Node ("Movement") */}
            <div className={clsx(
              "w-32 h-32 md:w-40 md:h-40 rounded-full flex items-center justify-center transition-all duration-500 shadow-lg border-2 z-10",
              pulseCenter 
                ? "bg-accent border-accent text-white scale-110 shadow-accent/40" 
                : "bg-slate-900 border-slate-800 text-white scale-100 shadow-slate-900/20"
            )}>
              <span className="text-lg md:text-xl font-bold tracking-wide">Movement</span>
            </div>

            {/* Orbiting Nodes */}
            {loopSteps.map((step, idx) => {
              // Calculate position around the circle
              // Start at top (-90 degrees), move clockwise
              const angleDeg = (idx * (360 / loopSteps.length)) - 90;
              const angleRad = angleDeg * (Math.PI / 180);
              
              // Radius of the orbit (adjust based on container size)
              // Responsive radius (smaller on mobile)
              const radius = 175; // For desktop (450/2 = 225, giving some padding)
              
              // Calculate coordinates using JS Math for safer browser compatibility
              const x = Math.cos(angleRad) * radius;
              const y = Math.sin(angleRad) * radius;

              const isActive = idx === activeIndex;

              return (
                <div 
                  key={step}
                  className={clsx(
                    "absolute transition-all duration-500 flex items-center justify-center",
                    isActive ? "z-20 scale-105 opacity-100" : "z-0 scale-100 opacity-60"
                  )}
                  style={{
                    transform: `translate(${x}px, ${y}px)`
                  }}
                >
                  <div className={clsx(
                    "px-4 py-2 md:px-5 md:py-2.5 rounded-full text-xs md:text-sm font-semibold border shadow-sm transition-colors duration-300 text-center",
                    isActive 
                      ? "bg-accent text-white border-accent shadow-accent/20" 
                      : "bg-white text-slate-500 border-slate-200"
                  )}>
                    {step}
                  </div>
                </div>
              );
            })}

          </div>
        </div>

        {/* Right: Text Copy */}
        <div className="flex-1 space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">
            One operating model.<br />
            Every outcome runs on it.
          </h2>
          
          <p className="text-lg md:text-xl text-slate-700 leading-relaxed font-light">
            Rather than tracking static tasks on a checklist, Catena watches the continuous flow of execution. It senses changes, commits them to a single operational truth, finds the outcome that's blocked, routes the next approved step, governs the action, captures proof, and records whether the outcome actually moved.
          </p>
          
          <div className="pt-6 border-t border-slate-200">
            <p className="text-sm text-slate-500 font-medium tracking-wide uppercase">
              Catena doesn't count work as done until the business state changes.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
