"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { staggerContainer, fadeUpVariant } from "@/lib/utils";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  overline?: string;
  title: string;
  titleHighlight?: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  maxWidth?: string;
}

export default function SectionHeader({
  overline,
  title,
  titleHighlight,
  subtitle,
  centered = false,
  light = false,
  maxWidth = "max-w-3xl",
}: SectionHeaderProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <motion.div
      ref={ref}
      variants={staggerContainer}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={cn("mb-12 lg:mb-16", centered && "text-center mx-auto", maxWidth)}
    >
      {overline && (
        <motion.div variants={fadeUpVariant} className="flex items-center gap-3 mb-4" style={{ justifyContent: centered ? "center" : "flex-start" }}>
          <span className="w-8 h-px bg-primary" />
          <span
            className={cn(
              "text-[0.7rem] font-semibold tracking-[0.25em] uppercase font-body",
              light ? "text-primary-light" : "text-primary"
            )}
          >
            {overline}
          </span>
          <span className="w-8 h-px bg-primary" />
        </motion.div>
      )}

      <motion.h2
        variants={fadeUpVariant}
        className={cn(
          "font-heading font-bold leading-tight mb-4",
          "text-display-lg",
          light ? "text-text" : "text-text"
        )}
      >
        {title}{" "}
        {titleHighlight && (
          <span className="text-gold-gradient">{titleHighlight}</span>
        )}
      </motion.h2>

      {subtitle && (
        <motion.p
          variants={fadeUpVariant}
          className={cn(
            "text-text-muted leading-relaxed text-base lg:text-lg",
            light ? "text-text-muted" : "text-text-muted"
          )}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}
