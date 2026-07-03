import React from 'react';

const steps = [
  {
    num: '1',
    title: 'Ingestion',
    desc: 'Documents arrive via email, portal, or API.',
    color: 'text-indigo-500'
  },
  {
    num: '2',
    title: 'Analysis',
    desc: 'Catena reads and classifies the payload.',
    color: 'text-indigo-500'
  },
  {
    num: '3',
    title: 'Detection',
    desc: 'Missing pages, signatures, or blurriness flagged.',
    color: 'text-indigo-500'
  },
  {
    num: '4',
    title: 'Resolution',
    desc: 'Automated chasers reach out to clients to fix issues.',
    color: 'text-indigo-500'
  },
  {
    num: '5',
    title: 'Readiness',
    desc: "Matter moves to 'Ready' in your CMS.",
    color: 'text-accent'
  }
];

export default function HowItWorks() {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Abstract Background Blurs */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <div className="absolute top-[10%] left-[-10%] w-[600px] h-[600px] rounded-full border-[60px] border-indigo-200/50 filter blur-[40px]"></div>
        <div className="absolute top-[20%] right-[-5%] w-[500px] h-[500px] rounded-full border-[50px] border-accent/20 filter blur-[40px]"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3">How It Works</h2>
        <p className="text-slate-500 mb-20 text-lg">
          From "handled" to a matter that can actually move.
        </p>

        {/* Timeline Container */}
        <div className="relative flex flex-col md:flex-row justify-between items-start md:items-center">
          
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-6 left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-indigo-200 via-indigo-200 to-accent/30 -z-10"></div>
          
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col items-center flex-1 mb-10 md:mb-0 px-2">
              <div className="w-14 h-14 bg-white rounded-2xl shadow-md border border-slate-100 flex items-center justify-center mb-6 z-10">
                <span className={`text-xl font-bold ${step.color}`}>{step.num}</span>
              </div>
              <h3 className="text-sm font-semibold text-slate-800 mb-2">{step.title}</h3>
              <p className="text-xs text-slate-500 leading-relaxed max-w-[180px] mx-auto">
                {step.desc}
              </p>
            </div>
          ))}
          
        </div>
      </div>
    </section>
  );
}
