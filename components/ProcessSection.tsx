"use client";

import { processSteps } from "@/data/stats";

export default function ProcessSection() {
  return (
    <section id="process" className="py-20 md:py-28 relative border-b border-hairline bg-[#090909]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16 border-b border-hairline pb-6">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-lime mb-2">
              <span>00:00:32:10</span>
              <span className="text-offwhite-dim">//</span>
              <span className="text-offwhite-muted uppercase">[WORKFLOW / 4-STEP SPRINT]</span>
            </div>
            <h2 className="font-sans font-bold text-3xl sm:text-4xl text-offwhite tracking-tight">
              Production pipeline.
            </h2>
          </div>

          <span className="font-mono text-xs text-offwhite-dim">
            TIMELINE: 14 DAYS TO FIRST FLIGHT
          </span>
        </div>

        {/* Vertical Film-Strip Timeline */}
        <div className="relative border-l border-hairline ml-4 sm:ml-8 space-y-12">
          {processSteps.map((step, idx) => (
            <div key={step.step} className="relative pl-8 sm:pl-12 group">
              
              {/* Film Sprocket Marker / Timeline Node */}
              <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 bg-black border border-hairline group-hover:border-lime group-hover:bg-lime transition-colors" />

              {/* Timecode & Step Header */}
              <div className="flex items-center gap-3 font-mono text-xs mb-2">
                <span className="text-lime font-bold">[{step.step}]</span>
                <span className="text-offwhite-dim">{step.timecode}</span>
                <span className="text-offwhite-dim">//</span>
                <span className="text-offwhite font-bold uppercase tracking-wider text-sm">
                  {step.title}
                </span>
              </div>

              {/* One Sentence Crisp Copy */}
              <div className="p-4 bg-[#0E0E0E] border border-hairline group-hover:border-lime/40 transition-colors">
                <p className="font-sans text-sm text-offwhite-muted leading-relaxed">
                  {step.description}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

