"use client";

import Link from "next/link";
import { siteConfig } from "@/data/site";
import { profileStats } from "@/data/stats";
import { ArrowUpRight, Play, Eye } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="relative pt-24 sm:pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden border-b border-hairline">
      
      {/* Top and Bottom Letterbox Bars effect */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-lime/20 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Viewfinder Header Stamp */}
        <div className="flex items-center justify-between font-mono text-[11px] text-offwhite-dim border-b border-hairline pb-3 mb-8">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-lime animate-rec-blink" />
            <span className="text-offwhite-muted font-bold tracking-wider">VIEWFINDER // RAW 4K</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="hidden sm:inline">SHUTTER 1/48</span>
            <span className="hidden sm:inline">ISO 800</span>
            <span className="text-lime">{siteConfig.status}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
          
          {/* Left Column: Big Editorial Headline & Pitch */}
          <div className="lg:col-span-7 flex flex-col">
            
            {/* Creator Profile Stamp */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-none border border-lime flex items-center justify-center font-mono font-bold text-xs text-lime bg-surface">
                {siteConfig.name.split(" ").map(n => n[0]).join("")}
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-xs font-bold text-offwhite tracking-wide uppercase">
                  {siteConfig.name} <span className="text-offwhite-dim font-normal">({siteConfig.handle})</span>
                </span>
                <span className="font-mono text-[11px] text-offwhite-muted">
                  {siteConfig.role}
                </span>
              </div>
            </div>

            {/* Giant Editorial Headline with Italic Serif */}
            <h1 className="font-sans font-bold text-[clamp(2.5rem,7vw,5.5rem)] text-offwhite tracking-tight leading-[0.98] mb-6">
              Engineering{" "}
              <span className="font-serif italic font-normal text-lime">
                viral velocity
              </span>{" "}
              into cold, hard cashflow.
            </h1>

            {/* Subline */}
            <p className="text-offwhite-muted text-sm sm:text-base leading-relaxed max-w-xl mb-8">
              {siteConfig.subline}
            </p>

            {/* CTAs with Magnetic / Sharp Stying */}
            <div className="flex flex-wrap items-center gap-4 mb-12">
              <Link
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-lime text-black font-mono font-bold text-xs uppercase tracking-wider hover:bg-lime-hover transition-all duration-150 shadow-[0_0_20px_rgba(198,255,61,0.25)] focus:outline-none focus-visible:ring-2 focus-visible:ring-lime"
              >
                <span>Start a project</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>

              <Link
                href="#work"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-hairline text-offwhite font-mono text-xs uppercase tracking-wider hover:border-offwhite hover:bg-white/[0.03] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offwhite"
              >
                <Play className="w-3 h-3 fill-current text-lime" />
                <span>Watch the work</span>
              </Link>
            </div>

            {/* 4 Stats in Mono Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-hairline">
              {profileStats.map((stat) => (
                <div key={stat.id} className="flex flex-col">
                  <span className="font-mono text-[10px] text-offwhite-dim tracking-wider uppercase">
                    [{stat.label}]
                  </span>
                  <span className="font-mono font-bold text-2xl sm:text-3xl text-offwhite tracking-tight mt-0.5">
                    {stat.value}
                  </span>
                  <span className="font-mono text-[10px] text-offwhite-muted mt-0.5">
                    {stat.subnote}
                  </span>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Stacked / Overlapping 3 Vertical Reel Frames */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end pt-4 lg:pt-0">
            <div className="relative w-full max-w-[340px] h-[460px] sm:h-[500px]">
              
              {/* Card 1: Background Left (-3 deg rotation, Frame 01) */}
              <div className="absolute top-4 left-0 w-[240px] aspect-[9/16] bg-[#0E0E0E] border border-hairline p-3 -rotate-3 transition-transform hover:rotate-0 duration-300 opacity-60 hover:opacity-100 z-10 shadow-xl hidden sm:block">
                <div className="bracket-tl" />
                <div className="bracket-tr" />
                <div className="bracket-bl" />
                <div className="bracket-br" />
                <div className="flex justify-between font-mono text-[9px] text-offwhite-dim mb-2">
                  <span>FRAME 01/03</span>
                  <span className="text-lime">00:02:14</span>
                </div>
                <div className="w-full h-full bg-gradient-to-b from-neutral-800/40 via-neutral-900/60 to-black flex items-center justify-center text-center p-3">
                  <span className="font-mono text-[10px] text-offwhite-muted uppercase">
                    Aura Botanicals • 4.8x ROAS
                  </span>
                </div>
              </div>

              {/* Card 2: Background Right (+2.5 deg rotation, Frame 03) */}
              <div className="absolute top-8 right-0 w-[240px] aspect-[9/16] bg-[#0E0E0E] border border-hairline p-3 rotate-2 transition-transform hover:rotate-0 duration-300 opacity-60 hover:opacity-100 z-10 shadow-xl hidden sm:block">
                <div className="bracket-tl" />
                <div className="bracket-tr" />
                <div className="bracket-bl" />
                <div className="bracket-br" />
                <div className="flex justify-between font-mono text-[9px] text-offwhite-dim mb-2">
                  <span>FRAME 03/03</span>
                  <span className="text-live font-bold">LIVE</span>
                </div>
                <div className="w-full h-full bg-gradient-to-b from-neutral-800/40 via-neutral-900/60 to-black flex items-center justify-center text-center p-3">
                  <span className="font-mono text-[10px] text-offwhite-muted uppercase">
                    Véloce • $85k in 18m
                  </span>
                </div>
              </div>

              {/* Card 3: Main Center Active Card (Frame 02, Viewfinder overlays) */}
              <div className="relative mx-auto sm:mx-0 sm:left-8 top-0 w-[260px] sm:w-[270px] aspect-[9/16] bg-[#111111] border border-hairline-bright p-4 z-20 shadow-2xl flex flex-col justify-between">
                
                {/* Viewfinder Corner Brackets */}
                <div className="bracket-tl" />
                <div className="bracket-tr" />
                <div className="bracket-bl" />
                <div className="bracket-br" />

                {/* Top Viewfinder Metadata */}
                <div className="flex items-center justify-between font-mono text-[10px] text-offwhite-dim border-b border-hairline pb-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-lime animate-rec-blink" />
                    <span className="text-lime font-bold">NOW PLAYING</span>
                  </div>
                  <span>00:04:18:12</span>
                </div>

                {/* Center Dynamic Hook Visual */}
                <div className="my-auto text-center py-6">
                  <span className="font-mono text-[9px] text-offwhite-dim tracking-widest uppercase block mb-2">
                    [HOOK AUDIT]
                  </span>
                  <div className="p-3 bg-black/60 border border-hairline mb-3">
                    <p className="font-sans font-bold text-sm text-offwhite leading-snug">
                      "Why 82% of DTC brands burn cash on Meta in the first 3 seconds."
                    </p>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-lime/10 border border-lime/30 text-lime font-mono text-[10px] font-bold">
                    <span>AVG. RETENTION: 68.4%</span>
                  </div>
                </div>

                {/* Bottom Reel Audio & Stats Bar */}
                <div className="pt-2 border-t border-hairline flex items-center justify-between font-mono text-[10px] text-offwhite-muted">
                  <span className="truncate max-w-[140px] text-offwhite">
                    Nexus • Terminal Beats
                  </span>
                  <span className="text-lime flex items-center gap-1 font-bold">
                    <Eye className="w-3 h-3" />
                    840K
                  </span>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
