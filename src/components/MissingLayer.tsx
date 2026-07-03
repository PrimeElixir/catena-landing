import React from 'react';

export default function MissingLayer() {
  return (
    <section className="py-32 px-6 bg-slate-50 border-y border-border-glass">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-10 leading-[1.2]">
          Your software has logged activity for decades. <br className="hidden md:block" />
          <span className="text-slate-500">None of it moves the outcome.</span>
        </h2>
        
        <div className="space-y-8 text-lg md:text-xl text-slate-700 leading-relaxed font-light">
          <p>
            Work doesn't stall inside a system. It stalls <em>between</em> them. The call happens in one tool, the signature in another, the records in a third, the invoice in a fourth — and each one faithfully reports that its piece is done, while the matter sits untouched for three weeks. 
          </p>
          <p>
            A release the client signed still shows "signed" after the provider rejected it. Records that came back for the wrong patient still show "received." Your systems are full of green checkmarks on a file that hasn't actually moved.
          </p>
          <p>
            That gap — between what your tools recorded and whether the outcome advanced — is not a tooling problem you can fix by buying one more app. Every app lives <em>inside</em> the gap. It's a missing layer.
          </p>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-200">
          <p className="text-2xl md:text-3xl font-serif font-medium text-slate-900 tracking-tight">
            Activity is not movement. <span className="text-accent italic">Catena is the layer that moves.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
