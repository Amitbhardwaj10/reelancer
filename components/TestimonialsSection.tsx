"use client";

import { useState } from "react";
import Image from "next/image";
import { testimonialsData } from "@/data/testimonials";
import { Heart } from "lucide-react";

export default function TestimonialsSection() {
  const [likesState, setLikesState] = useState<Record<string, { count: number; active: boolean }>>(() => {
    const initial: Record<string, { count: number; active: boolean }> = {};
    testimonialsData.forEach((t) => {
      initial[t.id] = { count: t.likesCount, active: false };
    });
    return initial;
  });

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

  return (
    <section id="testimonials" className="py-20 md:py-28 relative border-b border-hairline">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16 border-b border-hairline pb-6">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-lime mb-2">
              <span>00:00:38:00</span>
              <span className="text-offwhite-dim">//</span>
              <span className="text-offwhite-muted uppercase">[FEEDBACK / THE DMS]</span>
            </div>
            <h2 className="font-sans font-bold text-3xl sm:text-4xl text-offwhite tracking-tight">
              Direct message receipts.
            </h2>
          </div>

          <span className="font-mono text-xs text-offwhite-dim">
            5/5 VERIFIED FOUNDER COMMENTS
          </span>
        </div>

        {/* DM Bubbles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonialsData.map((item) => {
            const isLiked = likesState[item.id]?.active;
            const likeCount = likesState[item.id]?.count ?? item.likesCount;

            return (
              <div
                key={item.id}
                className="p-6 bg-[#0E0E0E] border border-hairline hover:border-lime/40 transition-colors flex flex-col justify-between"
              >
                <div>
                  {/* DM Header with Avatar Image */}
                  <div className="flex items-center justify-between border-b border-hairline pb-3 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="relative w-9 h-9 border border-hairline overflow-hidden bg-[#161616] shrink-0">
                        <Image
                          src={item.avatarImage}
                          alt={item.name}
                          width={36}
                          height={36}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div>
                        <div className="font-sans font-bold text-sm text-offwhite leading-tight">
                          {item.name}
                        </div>
                        <div className="font-mono text-[10px] text-offwhite-dim">
                          {item.handle}
                        </div>
                      </div>
                    </div>

                    <span className="font-mono text-[10px] text-offwhite-dim">
                      {item.timeAgo}
                    </span>
                  </div>

                  {/* Company & Role */}
                  <span className="font-mono text-[10px] text-lime uppercase tracking-wider block mb-3">
                    {item.role}, {item.company}
                  </span>

                  {/* DM Speech Bubble */}
                  <div className="p-3.5 bg-black/60 border border-hairline mb-4">
                    <p className="font-sans text-xs sm:text-sm text-offwhite-muted leading-relaxed">
                      "{item.text}"
                    </p>
                  </div>
                </div>

                {/* Bottom Bar: Like Button */}
                <div className="pt-3 border-t border-hairline flex items-center justify-between font-mono text-[10px] text-offwhite-dim">
                  <span>STATUS: DELIVERED</span>

                  <button
                    onClick={() => toggleLike(item.id)}
                    className={`flex items-center gap-1.5 transition-colors p-1 ${
                      isLiked ? "text-live font-bold" : "hover:text-offwhite"
                    }`}
                  >
                    <Heart className={`w-3.5 h-3.5 ${isLiked ? "fill-live text-live" : ""}`} />
                    <span>{likeCount}</span>
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
