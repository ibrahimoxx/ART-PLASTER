"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on non-touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let rafId: number;
    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!isVisible) setIsVisible(true);

      if (dotRef.current) {
        dotRef.current.style.left = `${mouseX}px`;
        dotRef.current.style.top = `${mouseY}px`;
      }
    };

    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.left = `${ringX}px`;
        ringRef.current.style.top = `${ringY}px`;
      }
      rafId = requestAnimationFrame(animateRing);
    };

    const onMouseEnterInteractive = () => setIsHovering(true);
    const onMouseLeaveInteractive = () => setIsHovering(false);

    const interactiveElements = document.querySelectorAll(
      "a, button, [role='button'], input, textarea, select, label"
    );
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", onMouseEnterInteractive);
      el.addEventListener("mouseleave", onMouseLeaveInteractive);
    });

    document.addEventListener("mousemove", onMouseMove, { passive: true });
    rafId = requestAnimationFrame(animateRing);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(rafId);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", onMouseEnterInteractive);
        el.removeEventListener("mouseleave", onMouseLeaveInteractive);
      });
    };
  }, [isVisible]);

  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null;
  }

  return (
    <>
      {/* Dot */}
      <div
        ref={dotRef}
        className="cursor-dot"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: `translate(-50%, -50%) scale(${isHovering ? 0 : 1})`,
          transition: "transform 0.2s ease, opacity 0.3s ease",
        }}
      />
      {/* Ring */}
      <div
        ref={ringRef}
        className="cursor-ring"
        style={{
          opacity: isVisible ? 1 : 0,
          width: isHovering ? "60px" : "40px",
          height: isHovering ? "60px" : "40px",
          borderColor: isHovering ? "rgba(201,169,110,0.8)" : "rgba(201,169,110,0.5)",
          transition: "width 0.3s ease, height 0.3s ease, border-color 0.3s ease, opacity 0.3s ease",
        }}
      />
    </>
  );
}
