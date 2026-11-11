"use client";

import { useState } from "react";
import Link from "next/link";
import { servicesData, ServiceItem } from "@/data/services";
import { ArrowUpRight, Heart, Bookmark, Check } from "lucide-react";

export default function Services() {
  const [likesState, setLikesState] = useState<Record<string, { count: number; active: boolean }>>(() => {
    const initial: Record<string, { count: number; active: boolean }> = {};
    servicesData.forEach((s) => {
      initial[s.id] = { count: s.initialLikes, active: false };
    });
    return initial;
  });

  const [savesState, setSavesState] = useState<Record<string, boolean>>(() => {
    const initial: Record<string, boolean> = {};
    servicesData.forEach((s) => {
      initial[s.id] = false;
    });
    return initial;
  });

  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const toggleLike = (id: string) => {
    setLikesState((prev) => {
      const cur = prev[id];
      const active = !cur.active;
      return {
        ...prev,
        [id]: { count: active ? cur.count + 1 : cur.count - 1, active },
      };
    });
  };

  const toggleSave = (id: string) => {
    setSavesState((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const marqueeItems = [
    "DIRECT-RESPONSE REELS",
    "PAID SOCIAL SCALING",
    "CAPI SERVER-SIDE ATTRIBUTION",
    "MOBILE QUIZ FUNNELS",
    "COMMENT-TO-DM PIPELINES",
    "CREATOR BRAND SYSTEMS",
    "HOOK VELOCITY SPRINT",
  ];

  return (
    <section id="services" className="py-20 md:py-28 relative border-b border-hairline">
      
      {/* 1. Full-Bleed Marquee Strip */}
      <div className="w-full overflow-hidden border-y border-hairline py-3 bg-[#0C0C0C] mb-16 select-none">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, idx) => (
            <div key={idx} className="flex items-center gap-6 mx-4">
              <span className="font-mono text-xs text-offwhite font-bold tracking-widest uppercase">
                {item}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-lime" />
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header with Viewfinder Timecode */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16 border-b border-hairline pb-6">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-lime mb-2">
              <span>00:00:08:14</span>
              <span className="text-offwhite-dim">//</span>
              <span className="text-offwhite-muted uppercase">[THE FEED / CORE OFFERS]</span>
            </div>
            <h2 className="font-sans font-bold text-3xl sm:text-4xl text-offwhite tracking-tight">
              Modular sprint offerings.
            </h2>
          </div>

          <p className="font-mono text-xs text-offwhite-muted max-w-sm sm:text-right">
            Zero long-term lock-in traps. Every service is structured as a turn-key sprint with fixed deliverables and transparent pricing.
          </p>
        </div>

        {/* Irregular Editorial List/Grid (Not identical cards) */}
        <div className="space-y-6">
          {servicesData.map((service, index) => {
            const isLiked = likesState[service.id]?.active;
            const likeCount = likesState[service.id]?.count ?? service.initialLikes;
            const isSaved = savesState[service.id];
            const isFeatured = index === 0 || index === 3; // Asymmetric rhythm

            return (
              <article
                key={service.id}
                onMouseEnter={() => setHoveredId(service.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={`group relative p-6 sm:p-8 border border-hairline bg-[#0D0D0D] transition-colors duration-200 hover:border-lime/60 ${
                  isFeatured ? "md:p-10 bg-[#101010]" : ""
                }`}
              >
                {/* Viewfinder Corner Brackets on Hover */}
                {hoveredId === service.id && (
                  <>
                    <div className="bracket-tl" />
                    <div className="bracket-tr" />
                    <div className="bracket-bl" />
                    <div className="bracket-br" />
                  </>
                )}

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  
                  {/* Column 1: Number & Category */}
                  <div className="lg:col-span-2 flex items-center lg:flex-col lg:items-start justify-between">
                    <span className="font-mono font-bold text-3xl sm:text-4xl text-offwhite-dim group-hover:text-lime transition-colors">
                      {service.number}
                    </span>
                    <span className="font-mono text-[10px] text-lime border border-lime/30 px-2 py-0.5 uppercase tracking-wider mt-2">
                      {service.category}
                    </span>
                  </div>

                  {/* Column 2: Title & Outcome */}
                  <div className="lg:col-span-5">
                    <h3 className="font-sans font-bold text-xl sm:text-2xl text-offwhite tracking-tight mb-2 group-hover:text-lime transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-offwhite-muted leading-relaxed font-sans mb-4">
                      {service.outcome}
                    </p>

                    {/* Hover Reveal Preview Note */}
                    <div className="inline-flex items-center gap-2 font-mono text-[11px] text-offwhite bg-white/[0.04] px-3 py-1 border border-hairline">
                      <span className="w-1.5 h-1.5 rounded-full bg-lime" />
                      <span>{service.previewNote}</span>
                    </div>
                  </div>

                  {/* Column 3: 3 Deliverables */}
                  <div className="lg:col-span-3 space-y-2 border-t lg:border-t-0 lg:border-l border-hairline pt-4 lg:pt-0 lg:pl-6">
                    <span className="font-mono text-[10px] text-offwhite-dim uppercase tracking-wider block mb-2">
                      [DELIVERABLES]
                    </span>
                    {service.deliverables.map((d, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2 text-xs text-offwhite-muted">
                        <Check className="w-3.5 h-3.5 text-lime shrink-0 mt-0.5" />
                        <span className="leading-snug">{d}</span>
                      </div>
                    ))}
                  </div>

                  {/* Column 4: Price & Social Action */}
                  <div className="lg:col-span-2 flex flex-col justify-between items-start lg:items-end border-t lg:border-t-0 border-hairline pt-4 lg:pt-0">
                    <div className="text-left lg:text-right mb-4">
                      <span className="font-mono text-[10px] text-offwhite-dim uppercase block">
                        STARTING AT
                      </span>
                      <span className="font-mono font-bold text-xl text-offwhite">
                        {service.fromPrice}
                      </span>
                      <span className="font-mono text-[10px] text-offwhite-dim block">
                        {service.priceNote}
                      </span>
                    </div>

                    <div className="flex items-center gap-3 w-full lg:w-auto justify-between lg:justify-end">
                      {/* Like button */}
                      <button
                        onClick={() => toggleLike(service.id)}
                        className={`flex items-center gap-1 font-mono text-xs transition-colors p-1.5 ${
                          isLiked ? "text-live font-bold" : "text-offwhite-dim hover:text-offwhite"
                        }`}
                        aria-label={`Like ${service.title}`}
                      >
                        <Heart className={`w-3.5 h-3.5 ${isLiked ? "fill-live text-live" : ""}`} />
                        <span>{likeCount}</span>
                      </button>

                      {/* Save button */}
                      <button
                        onClick={() => toggleSave(service.id)}
                        className={`p-1.5 font-mono text-xs transition-colors ${
                          isSaved ? "text-lime" : "text-offwhite-dim hover:text-offwhite"
                        }`}
                        aria-label={`Save ${service.title}`}
                      >
                        <Bookmark className={`w-3.5 h-3.5 ${isSaved ? "fill-lime text-lime" : ""}`} />
                      </button>

                      {/* Inquire link */}
                      <Link
                        href={`/#contact?service=${encodeURIComponent(service.title)}`}
                        className="inline-flex items-center gap-1 px-3 py-1.5 bg-lime text-black font-mono text-[11px] font-bold uppercase hover:bg-lime-hover transition-colors"
                      >
                        <span>BOOK</span>
                        <ArrowUpRight className="w-3 h-3 stroke-[2.5]" />
                      </Link>
                    </div>

                  </div>

                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}
