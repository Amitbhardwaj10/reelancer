"use client";

import Link from "next/link";
import Image from "next/image";
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
            
            {/* Creator Profile Stamp with Avatar Image */}
            <div className="flex items-center gap-3 mb-6">
              <div className="relative w-10 h-10 border border-lime overflow-hidden bg-surface shrink-0">
                <Image
                  src={siteConfig.avatarImage}
                  alt={siteConfig.name}
                  width={40}
                  height={40}
                  className="object-cover w-full h-full"
                  priority
                />
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

          {/* Right Column: Stacked / Overlapping 3 Vertical Reel Frames with Images */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end pt-4 lg:pt-0">
            <div className="relative w-full max-w-[340px] h-[460px] sm:h-[500px]">
              
              {/* Card 1: Background Left (-3 deg rotation, Frame 01) */}
              <div className="absolute top-4 left-0 w-[240px] aspect-[9/16] bg-[#0E0E0E] border border-hairline p-1 -rotate-3 transition-transform hover:rotate-0 duration-300 opacity-60 hover:opacity-100 z-10 shadow-xl hidden sm:block overflow-hidden">
                <div className="bracket-tl" />
                <div className="bracket-tr" />
                <div className="bracket-bl" />
                <div className="bracket-br" />
                <div className="relative w-full h-full">
                  <Image
                    src="/images/reels/aura-botanicals.svg"
                    alt="Aura Botanicals Case Study"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Card 2: Background Right (+2.5 deg rotation, Frame 03) */}
              <div className="absolute top-8 right-0 w-[240px] aspect-[9/16] bg-[#0E0E0E] border border-hairline p-1 rotate-2 transition-transform hover:rotate-0 duration-300 opacity-60 hover:opacity-100 z-10 shadow-xl hidden sm:block overflow-hidden">
                <div className="bracket-tl" />
                <div className="bracket-tr" />
                <div className="bracket-bl" />
                <div className="bracket-br" />
                <div className="relative w-full h-full">
                  <Image
                    src="/images/reels/veloce-streetwear.svg"
                    alt="Véloce Streetwear Case Study"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Card 3: Main Center Active Card (Frame 02, Viewfinder overlays) */}
              <div className="relative mx-auto sm:mx-0 sm:left-8 top-0 w-[260px] sm:w-[270px] aspect-[9/16] bg-[#111111] border border-hairline-bright p-1 z-20 shadow-2xl flex flex-col justify-between overflow-hidden">
                
                {/* Viewfinder Corner Brackets */}
                <div className="bracket-tl z-20" />
                <div className="bracket-tr z-20" />
                <div className="bracket-bl z-20" />
                <div className="bracket-br z-20" />

                <div className="relative w-full h-full">
                  <Image
                    src="/images/reels/nexus-cloud-sdk.svg"
                    alt="Nexus Cloud SDK Case Study"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
