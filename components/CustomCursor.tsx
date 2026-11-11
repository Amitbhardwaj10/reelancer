"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHoveringWork, setIsHoveringWork] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  useEffect(() => {
    // Check if device has touch capability or prefers reduced motion
    const hasTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (hasTouch || prefersReducedMotion) {
      setIsTouchDevice(true);
      return;
    }

    setIsTouchDevice(false);

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);

      // Check if hovering over a work reel card
      const target = e.target as HTMLElement | null;
      if (target && target.closest('[data-cursor="view"]')) {
        setIsHoveringWork(true);
      } else {
        setIsHoveringWork(false);
      }
    };

    const onMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  if (isTouchDevice || !isVisible) return null;

  return (
    <div
      className="pointer-events-none fixed top-0 left-0 z-50 -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 ease-out"
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
      }}
    >
      {isHoveringWork ? (
        <div className="w-16 h-16 rounded-full bg-lime text-black flex items-center justify-center font-mono font-bold text-[11px] tracking-wider shadow-[0_0_20px_rgba(198,255,61,0.5)] scale-100 transition-all duration-200">
          VIEW
        </div>
      ) : (
        <div className="w-3 h-3 rounded-full bg-lime/80 shadow-[0_0_8px_rgba(198,255,61,0.8)]" />
      )}
    </div>
  );
}

