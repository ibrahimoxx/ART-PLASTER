"use client";

import { marqueeItems } from "@/lib/data";
import { cn } from "@/lib/utils";

interface MarqueeTickerProps {
  className?: string;
  speed?: "slow" | "normal" | "fast";
  variant?: "dark" | "light";
}

export default function MarqueeTicker({
  className,
  speed = "normal",
  variant = "dark",
}: MarqueeTickerProps) {
  const speedMap = {
    slow: "40s",
    normal: "30s",
    fast: "20s",
  };

  const doubled = [...marqueeItems, ...marqueeItems];

  return (
    <div
      className={cn(
        "relative overflow-hidden py-5 border-y",
        variant === "dark"
          ? "bg-surface border-[rgba(182,110,46,0.12)]"
          : "bg-primary border-primary",
        className
      )}
    >
      {/* Left fade */}
      <div
        className={cn(
          "absolute left-0 top-0 bottom-0 w-20 z-10",
          variant === "dark"
            ? "bg-gradient-to-r from-surface to-transparent"
            : "bg-gradient-to-r from-primary to-transparent"
        )}
      />
      {/* Right fade */}
      <div
        className={cn(
          "absolute right-0 top-0 bottom-0 w-20 z-10",
          variant === "dark"
            ? "bg-gradient-to-l from-surface to-transparent"
            : "bg-gradient-to-l from-primary to-transparent"
        )}
      />

      <div
        className="marquee-track"
        style={{ animationDuration: speedMap[speed] }}
      >
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center">
            <span
              className={cn(
                "font-body text-[0.75rem] tracking-[0.2em] uppercase whitespace-nowrap px-6",
                variant === "dark" ? "text-text-muted" : "text-white"
              )}
            >
              {item}
            </span>
            <span
              className={cn(
                "w-1.5 h-1.5 rounded-full shrink-0",
                variant === "dark" ? "bg-primary/50" : "bg-white/50"
              )}
            />
          </span>
        ))}
      </div>
    </div>
  );
}
