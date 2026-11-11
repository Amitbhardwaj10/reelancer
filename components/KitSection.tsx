"use client";

import { useState } from "react";
import { gearData } from "@/data/gear";
import { softwareData } from "@/data/software";
import {
  Camera,
  Disc,
  Compass,
  Mic,
  Sun,
  Radio,
  Navigation,
  Laptop,
  HardDrive,
  Target,
  Zap,
  BarChart3,
  Search,
  Film,
  Scissors,
  Layout,
  Mail,
  MessageSquare,
  CheckSquare,
  PieChart,
  Layers,
  Wrench,
} from "lucide-react";

const gearIconMap: Record<string, React.ElementType> = {
  Camera,
  Disc,
  Compass,
  Mic,
  Sun,
  Radio,
  Navigation,
  Laptop,
  HardDrive,
};

const softwareIconMap: Record<string, React.ElementType> = {
  Target,
  Zap,
  BarChart3,
  Search,
  Film,
  Scissors,
  Layout,
  Mail,
  MessageSquare,
  CheckSquare,
  PieChart,
  Layers,
};

export default function KitSection() {
  const [activeTab, setActiveTab] = useState<"gear" | "software">("gear");

  return (
    <section id="kit" className="py-20 md:py-28 relative border-b border-hairline">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header with Tab Toggles */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 border-b border-hairline pb-6">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-lime mb-2">
              <span>00:00:24:06</span>
              <span className="text-offwhite-dim">//</span>
              <span className="text-offwhite-muted uppercase">[PRODUCTION RIG / THE KIT]</span>
            </div>
            <h2 className="font-sans font-bold text-3xl sm:text-4xl text-offwhite tracking-tight">
              Gear & Software stack.
            </h2>
          </div>

          {/* Viewfinder Tabs Switcher */}
          <div className="grid grid-cols-2 sm:flex sm:items-center border border-hairline bg-[#111111] p-1 font-mono text-xs w-full sm:w-auto">
            <button
              onClick={() => setActiveTab("gear")}
              className={`px-3 sm:px-5 py-2 uppercase tracking-wider transition-colors text-center text-[10px] sm:text-xs ${
                activeTab === "gear"
                  ? "bg-lime text-black font-bold shadow-[0_0_12px_rgba(198,255,61,0.25)]"
                  : "text-offwhite-muted hover:text-offwhite"
              }`}
            >
              [01] Hardware Gear ({gearData.length})
            </button>
            <button
              onClick={() => setActiveTab("software")}
              className={`px-3 sm:px-5 py-2 uppercase tracking-wider transition-colors text-center text-[10px] sm:text-xs ${
                activeTab === "software"
                  ? "bg-lime text-black font-bold shadow-[0_0_12px_rgba(198,255,61,0.25)]"
                  : "text-offwhite-muted hover:text-offwhite"
              }`}
            >
              [02] Software Stack ({softwareData.length})
            </button>
          </div>
        </div>

        {/* Tab 1: Gear Spec-Sheet Tiles */}
        {activeTab === "gear" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {gearData.map((item, idx) => {
              const Icon = gearIconMap[item.iconName] || Wrench;
              return (
                <div
                  key={item.id}
                  className="group relative p-6 bg-[#0E0E0E] border border-hairline hover:border-lime/50 transition-colors flex flex-col justify-between"
                >
                  <div className="bracket-tl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="bracket-br opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div>
                    <div className="flex items-center justify-between mb-4 border-b border-hairline pb-3">
                      <span className="font-mono text-[10px] text-offwhite-dim">
                        RIG 0{idx + 1} // {item.category.toUpperCase()}
                      </span>
                      <Icon className="w-4 h-4 text-lime" />
                    </div>

                    <h3 className="font-sans font-bold text-lg text-offwhite tracking-tight mb-2 group-hover:text-lime transition-colors">
                      {item.name}
                    </h3>

                    <p className="text-xs text-offwhite-muted font-sans leading-relaxed mb-6">
                      {item.usedFor}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-hairline">
                    <span className="font-mono text-[10px] text-offwhite-dim block mb-1 uppercase tracking-wider">
                      SPECIFICATION
                    </span>
                    <p className="font-mono text-[11px] text-offwhite leading-relaxed">
                      {item.specLine}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Tab 2: Software Tidy List */}
        {activeTab === "software" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {softwareData.map((tool, idx) => {
              const Icon = softwareIconMap[tool.iconName] || Layers;
              return (
                <div
                  key={tool.id}
                  className="p-5 bg-[#0E0E0E] border border-hairline hover:border-lime/50 transition-colors flex items-start gap-4"
                >
                  <div className="w-10 h-10 border border-hairline bg-[#141414] flex items-center justify-center text-lime shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <h3 className="font-sans font-bold text-base text-offwhite tracking-tight truncate">
                        {tool.name}
                      </h3>
                      <span className="font-mono text-[10px] text-offwhite-dim uppercase shrink-0">
                        {tool.category}
                      </span>
                    </div>

                    <span className="font-mono text-[11px] text-lime block mb-1">
                      {tool.role}
                    </span>

                    <p className="text-xs text-offwhite-muted leading-relaxed font-sans">
                      {tool.whyIUseIt}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
}

