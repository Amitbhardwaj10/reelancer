"use client";

import Link from "next/link";
import { siteConfig } from "@/data/site";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-hairline bg-[#080808] relative z-20 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-hairline">
          
          {/* Brand Info & Mission */}
          <div className="flex flex-col">
            <Link
              href="/"
              className="flex items-center gap-2 font-mono font-bold text-lg text-offwhite uppercase tracking-tight mb-2 group"
            >
              <span className="w-2 h-2 rounded-full bg-lime animate-rec-blink" />
              <span>{siteConfig.brandName}</span>
              <span className="text-[10px] text-offwhite-dim border border-hairline px-1.5 py-0.2">
                VER 2.0
              </span>
            </Link>
            <p className="font-mono text-xs text-offwhite-muted max-w-sm">
              {siteConfig.role} • Direct response vertical video systems that scale profitable acquisition.
            </p>
          </div>

          {/* Social Lettermarks */}
          <div className="flex items-center gap-2">
            {siteConfig.socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-hairline hover:border-lime text-offwhite hover:text-lime font-mono text-xs font-bold flex items-center justify-center transition-colors"
                aria-label={social.name}
              >
                <span>{social.tag}</span>
              </a>
            ))}
          </div>

          {/* Back to Top */}
          <div>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-4 py-2 border border-hairline hover:border-lime font-mono text-xs text-offwhite hover:text-lime transition-colors"
              aria-label="Back to top"
            >
              <span>TOP OF TIMELINE</span>
              <ArrowUp className="w-3.5 h-3.5 stroke-[2]" />
            </button>
          </div>

        </div>

        {/* Bottom Sub-footer with Camera Joke Line */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 font-mono text-[11px] text-offwhite-dim">
          <p>© {new Date().getFullYear()} {siteConfig.brandName} ({siteConfig.name}). All rights reserved.</p>
          
          <div className="flex items-center gap-3 text-offwhite-muted">
            <span className="text-lime">●</span>
            <span>Shot on Next.js • Shutter 1/48 • ISO 800 • No AI Fluff</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
