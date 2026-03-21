"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Link from "next/link";
import { ChevronDown, TrendingUp } from "lucide-react";
import { staggerContainer, fadeUpVariant, slideInRight } from "@/lib/utils";
import Button from "@/components/ui/Button";

function AnimatedCounter({ target, suffix = "+" }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacityContent = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const heroBlobRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true });

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-background"
    >
      {/* Parallax background layer */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ y: yBg }}
      >
        {/* Ambient blobs */}
        <div className="absolute top-1/4 right-[8%] w-[500px] h-[500px] rounded-full bg-primary/10 blur-[120px] animate-blob-1" />
        <div className="absolute bottom-1/4 left-[5%] w-[400px] h-[400px] rounded-full bg-teal/8 blur-[100px] animate-blob-2" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-primary/5 blur-[80px]" />

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(182,110,46,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(182,110,46,0.5) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </motion.div>

      {/* Main hero content */}
      <motion.div
        className="relative z-10 container-custom flex flex-col lg:flex-row items-center justify-between gap-12 pt-20 pb-16 lg:pt-36 lg:pb-24"
        style={{ opacity: opacityContent }}
      >
        {/* Left: Text content */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex-1 max-w-2xl"
        >
          {/* Overline badge */}
          <motion.div
            variants={fadeUpVariant}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-[0.7rem] tracking-[0.2em] text-primary-light uppercase font-body">
              Référence Marocaine depuis 2006
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            variants={fadeUpVariant}
            className="font-heading font-extrabold text-display-2xl text-text leading-[1.1] sm:leading-[1.05] mb-6 tracking-tight sm:tracking-normal"
          >
            L&apos;Art du Plâtre,{" "}
            <span className="relative inline-block">
              <span className="text-gold-gradient">Redéfini</span>
              {/* Underline accent */}
              <motion.span
                className="absolute -bottom-1 sm:-bottom-2 left-0 h-[2px] bg-gradient-to-r from-primary to-primary-light rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.9, duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                style={{ transformOrigin: "left" }}
              />
            </span>{" "}
            pour l&apos;Excellence
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeUpVariant}
            className="text-text-muted text-lg leading-relaxed mb-10 max-w-lg"
          >
            Enduits décoratifs, plafonds ornementaux et constructions de prestige pour 
            les hôtels cinq étoiles, résidences de luxe et bâtiments patrimoniaux au Maroc.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeUpVariant}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link href="/contact">
              <Button size="lg" variant="primary">
                Demander un Devis
              </Button>
            </Link>
            <Link href="/portfolio">
              <Button size="lg" variant="secondary">
                Voir nos Projets
              </Button>
            </Link>
          </motion.div>

          {/* Quick stats row */}
          <motion.div
            variants={fadeUpVariant}
            className="flex items-center gap-6 mt-12 pt-8 border-t border-[rgba(182,110,46,0.15)]"
          >
            {[
              { value: "380+", label: "Projets" },
              { value: "45+", label: "Hôtels" },
              { value: "18", label: "Ans d'Exp." },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-heading font-bold text-display-sm text-primary-light">
                  {stat.value}
                </div>
                <div className="text-[0.7rem] text-text-dim tracking-[0.15em] uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right: Floating visual card */}
        <motion.div
          variants={slideInRight}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ delay: 0.4 }}
          className="relative flex-1 max-w-md w-full hidden lg:block"
        >
          {/* Main image card */}
          <div className="relative rounded-3xl overflow-hidden aspect-[4/5] glass border border-primary/20 shadow-card-hover">
            <img
              src="/images/projects/Hotellerie__hotel_barcelo_tanger__001.jpg"
              alt="Projet hôtelier ART PLASTER — Plafond ornemental luxe"
              className="w-full h-full object-cover"
              loading="eager"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />

            {/* Projects count badge */}
            <div className="absolute bottom-6 left-6 right-6">
              <div className="glass rounded-2xl p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                    <TrendingUp size={18} className="text-primary-light" />
                  </div>
                  <div>
                    <div className="font-heading font-bold text-lg text-text">380+ Projets</div>
                    <div className="text-text-muted text-xs">livraisons réussies</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating credential card */}
          <motion.div
            initial={{ opacity: 0, x: 30, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="absolute -top-6 -left-8 glass rounded-2xl p-4 border border-primary/20 shadow-glow max-w-[180px]"
          >
            <div className="text-[0.65rem] text-text-muted tracking-[0.15em] uppercase mb-1.5">Certifié</div>
            <div className="font-heading font-bold text-text text-sm">ISO 9001</div>
            <div className="text-[0.65rem] text-text-dim mt-1">Qualité Garantie</div>
          </motion.div>

          {/* Floating experience badge */}
          <motion.div
            initial={{ opacity: 0, x: -20, y: -20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ delay: 1.0, duration: 0.6 }}
            className="absolute -bottom-4 -right-4 glass rounded-2xl p-4 border border-teal/20 max-w-[160px]"
          >
            <div className="font-heading font-bold text-2xl text-teal-light">18+</div>
            <div className="text-[0.65rem] text-text-muted">Années d&apos;excellence</div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[0.65rem] tracking-[0.25em] text-text-dim uppercase">Défiler</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown size={18} className="text-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
}
