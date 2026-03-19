"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Button from "@/components/ui/Button";

interface CTABannerProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
}

export default function CTABanner({
  title = "Prêt à Donner Vie à Votre Vision ?",
  subtitle = "Contactez nos maîtres artisans pour une étude personnalisée de votre projet d'aménagement intérieur ou de construction.",
  buttonText = "Demander un Devis",
  buttonLink = "/contact"
}: CTABannerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section 
      ref={ref} 
      className="relative py-24 lg:py-32 overflow-hidden bg-surface-2 border-y border-[rgba(182,110,46,0.15)]"
    >
      {/* Moving gradient bg */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0 pointer-events-none opacity-40"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-radial from-primary/20 via-primary/5 to-transparent rounded-[100%] blur-[80px]" />
      </motion.div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="font-heading font-extrabold text-display-lg text-gold-gradient leading-tight mb-6"
          >
            {title}
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
            className="text-text-muted text-lg lg:text-xl leading-relaxed mb-10 max-w-2xl mx-auto"
          >
            {subtitle}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5, delay: 0.4, type: "spring", stiffness: 200, damping: 20 }}
          >
            <Link href={buttonLink}>
              <Button size="lg" className="px-10 py-5 text-base hover:shadow-glow-lg transition-shadow duration-300">
                {buttonText}
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
