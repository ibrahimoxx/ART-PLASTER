"use client";

import { marqueeItems } from "@/lib/data";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

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
    slow: 30,
    normal: 20,
    fast: 12,
  };

  // Double the items to create the infinite loop effect
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
      {/* Left fade gradient */}
      <div
        className={cn(
          "absolute left-0 top-0 bottom-0 w-32 z-10",
          variant === "dark"
            ? "bg-gradient-to-r from-surface via-surface/80 to-transparent"
            : "bg-gradient-to-r from-primary via-primary/80 to-transparent"
        )}
      />
      {/* Right fade gradient */}
      <div
        className={cn(
          "absolute right-0 top-0 bottom-0 w-32 z-10",
          variant === "dark"
            ? "bg-gradient-to-l from-surface via-surface/80 to-transparent"
            : "bg-gradient-to-l from-primary via-primary/80 to-transparent"
        )}
      />

      <motion.div
        className="flex whitespace-nowrap items-center"
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: speedMap[speed],
            ease: "linear",
          },
        }}
      >
        {doubled.map((item, i) => (
          <div key={i} className="flex items-center shrink-0">
            <span
              className={cn(
                "font-body text-[0.75rem] tracking-[0.2em] uppercase whitespace-nowrap px-8",
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
          </div>
        ))}
      </motion.div>
    </div>
  );
}
