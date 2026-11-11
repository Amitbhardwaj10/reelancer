"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MobileTabBar() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    if (pathname !== "/") return;

    const sections = ["hero", "services", "work", "kit", "process", "testimonials", "contact"];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250;
      for (const sectionId of [...sections].reverse()) {
        const element = document.getElementById(sectionId);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sectionId);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const tabs = [
    { id: "hero", label: "FEED", code: "01", href: "/#hero" },
    { id: "services", label: "OFFERS", code: "02", href: "/#services" },
    { id: "work", label: "REELS", code: "03", href: "/#work" },
    { id: "kit", label: "KIT", code: "04", href: "/#kit" },
    { id: "contact", label: "DM", code: "05", href: "/#contact" },
  ];

  return (
    <nav
      className="md:hidden fixed bottom-3 left-3 right-3 z-40 bg-[#0E0E0E]/95 backdrop-blur-xl border border-hairline py-1.5 px-2 shadow-2xl"
      aria-label="Camera control bar"
    >
      <div className="flex items-center justify-around">
        {tabs.map((tab) => {
          const isActive = pathname === "/" && (activeSection === tab.id || (tab.id === "hero" && activeSection === "hero"));
          return (
            <Link
              key={tab.id}
              href={tab.href}
              className={`flex flex-col items-center py-1 px-2.5 transition-colors font-mono ${
                isActive ? "text-lime" : "text-offwhite-muted hover:text-offwhite"
              }`}
            >
              <span className="text-[9px] text-offwhite-dim leading-none">
                [{tab.code}]
              </span>
              <span className="text-[11px] font-bold tracking-wider mt-0.5">
                {tab.label}
              </span>
              {isActive && (
                <span className="w-1 h-1 rounded-full bg-lime mt-1 shadow-[0_0_6px_#C6FF3D]" />
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
