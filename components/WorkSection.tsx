"use client";

import { useRef } from "react";
import Link from "next/link";
import { projectsData } from "@/data/projects";
import { ChevronLeft, ChevronRight, Eye, Music2, ArrowUpRight } from "lucide-react";

export default function WorkSection() {
  const railRef = useRef<HTMLDivElement>(null);

  const scrollRail = (direction: "left" | "right") => {
    if (railRef.current) {
      const scrollOffset = direction === "left" ? -340 : 340;
      railRef.current.scrollBy({ left: scrollOffset, behavior: "smooth" });
    }
  };

  return (
    <section id="work" className="py-20 md:py-28 relative border-b border-hairline bg-[#090909]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header with Navigation Controls */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 border-b border-hairline pb-6">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-lime mb-2">
              <span>00:00:16:22</span>
              <span className="text-offwhite-dim">//</span>
              <span className="text-offwhite-muted uppercase">[REELS / 9:16 VERTICAL ARCHIVE]</span>
            </div>
            <h2 className="font-sans font-bold text-3xl sm:text-4xl text-offwhite tracking-tight">
              Selected client reels.
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-offwhite-dim hidden sm:inline mr-2">
              SCROLL // SNAP
            </span>
            <button
              onClick={() => scrollRail("left")}
              className="w-10 h-10 border border-hairline hover:border-lime text-offwhite flex items-center justify-center transition-colors font-mono focus:outline-none focus-visible:ring-1 focus-visible:ring-lime"
              aria-label="Previous reel"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scrollRail("right")}
              className="w-10 h-10 border border-hairline hover:border-lime text-offwhite flex items-center justify-center transition-colors font-mono focus:outline-none focus-visible:ring-1 focus-visible:ring-lime"
              aria-label="Next reel"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Horizontal Scroll-Snap Rail */}
        <div
          ref={railRef}
          className="flex items-stretch gap-6 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-6 pt-2 px-1"
          style={{ scrollPaddingLeft: "1rem", scrollPaddingRight: "1rem" }}
        >
          {projectsData.map((project) => (
            <Link
              key={project.slug}
              href={`/work/${project.slug}`}
              data-cursor="view"
              className="group snap-center shrink-0 w-[270px] sm:w-[310px] aspect-[9/16] bg-[#111111] border border-hairline hover:border-lime transition-all duration-200 p-4 flex flex-col justify-between relative shadow-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-lime"
            >
              {/* Corner Viewfinder Brackets */}
              <div className="bracket-tl" />
              <div className="bracket-tr" />
              <div className="bracket-bl" />
              <div className="bracket-br" />

              {/* Top Bar: Frame Counter & Metric Badge */}
              <div className="flex items-center justify-between font-mono text-[10px] text-offwhite-dim border-b border-hairline pb-2">
                <span>{project.frameNumber}</span>
                <span className="px-2 py-0.5 bg-lime text-black font-bold uppercase tracking-wider">
                  {project.metricBadge}
                </span>
              </div>

              {/* Center Card Content: Client Name & Headline */}
              <div className="my-auto py-4 text-center">
                <span className="font-mono text-[10px] text-offwhite-dim uppercase tracking-wider block mb-1">
                  [{project.industry.split("•")[0].trim()}]
                </span>

                <h3 className="font-sans font-bold text-lg sm:text-xl text-offwhite leading-tight mb-3 group-hover:text-lime transition-colors">
                  {project.client}
                </h3>

                <p className="text-xs text-offwhite-muted leading-relaxed line-clamp-3 font-sans px-2">
                  "{project.tagline}"
                </p>

                {/* View Case Study Pill on Hover */}
                <div className="mt-4 inline-flex items-center gap-1.5 px-3 py-1 border border-hairline group-hover:border-lime group-hover:bg-lime/10 text-offwhite group-hover:text-lime font-mono text-[11px] transition-colors">
                  <span>CASE STUDY</span>
                  <ArrowUpRight className="w-3 h-3 stroke-[2]" />
                </div>
              </div>

              {/* Bottom Bar: Audio Ticker & Views Count */}
              <div className="pt-2 border-t border-hairline font-mono text-[10px] text-offwhite-muted flex items-center justify-between">
                <div className="flex items-center gap-1.5 truncate max-w-[170px]">
                  <Music2 className="w-3 h-3 text-lime shrink-0" />
                  <span className="truncate">{project.reelAudioTitle}</span>
                </div>
                <div className="flex items-center gap-1 text-offwhite font-bold shrink-0">
                  <Eye className="w-3 h-3 text-lime" />
                  <span>{project.reelViewsCount}</span>
                </div>
              </div>

            </Link>
          ))}
        </div>

        {/* Mobile Swipe Hint */}
        <div className="sm:hidden flex items-center justify-center font-mono text-[11px] text-offwhite-dim mt-4">
          <span>[← SWIPE REELS →]</span>
        </div>

      </div>
    </section>
  );
}
