"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [timecode, setTimecode] = useState("00:00:12:08");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);

    // Subtle timecode ticker increment
    const timer = setInterval(() => {
      const now = new Date();
      const pad = (n: number) => n.toString().padStart(2, "0");
      const frames = Math.floor((now.getMilliseconds() / 1000) * 24);
      setTimecode(`${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}:${pad(frames)}`);
    }, 250);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(timer);
    };
  }, []);

  const navLinks = [
    { label: "Services", href: "/#services", code: "01" },
    { label: "Work", href: "/#work", code: "02" },
    { label: "The Kit", href: "/#kit", code: "03" },
    { label: "Process", href: "/#process", code: "04" },
    { label: "Contact", href: "/#contact", code: "05" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        scrolled
          ? "bg-[#0A0A0A]/90 backdrop-blur-md border-b border-hairline py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        
        {/* Wordmark with REC dot */}
        <Link
          href="/"
          className="group flex items-center gap-2.5 focus:outline-none focus-visible:ring-1 focus-visible:ring-lime"
          aria-label="Reelancer home"
        >
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-lime animate-rec-blink shadow-[0_0_8px_#C6FF3D]" />
            <span className="font-mono text-[11px] text-offwhite-muted tracking-widest uppercase hidden sm:inline">
              REC
            </span>
          </div>

          <span className="font-mono font-bold text-lg sm:text-xl tracking-tight text-offwhite uppercase">
            {siteConfig.brandName}
          </span>

          <span className="font-mono text-[10px] text-offwhite-dim border border-hairline px-1.5 py-0.5 rounded-none hidden md:inline">
            {timecode}
          </span>
        </Link>

        {/* Desktop Anchor Navigation */}
        <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="group flex items-center gap-1.5 text-xs font-mono text-offwhite-muted hover:text-offwhite transition-colors"
            >
              <span className="text-[10px] text-offwhite-dim group-hover:text-lime transition-colors">
                {link.code}
              </span>
              <span>{link.label}</span>
            </Link>
          ))}
        </nav>

        {/* Book a Call Action Button */}
        <div className="flex items-center gap-3">
          <Link
            href="/#contact"
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-mono font-bold tracking-wider uppercase text-black bg-lime hover:bg-lime-hover transition-colors rounded-none shadow-[0_0_15px_rgba(198,255,61,0.25)] focus:outline-none focus-visible:ring-2 focus-visible:ring-lime"
          >
            <span>Book a call</span>
            <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
          </Link>
        </div>

      </div>
    </header>
  );
}
