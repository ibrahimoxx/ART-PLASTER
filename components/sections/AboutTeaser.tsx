"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Briefcase, Building2, Award, Users } from "lucide-react";
import { stats } from "@/lib/data";
import { staggerContainer, fadeUpVariant } from "@/lib/utils";
import SectionHeader from "@/components/ui/SectionHeader";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Briefcase,
  Building2,
  Award,
  Users,
};

function AnimatedCounter({
  target,
  suffix,
  duration = 2000,
}: {
  target: number;
  suffix: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const hasStarted = useRef(false);

  useEffect(() => {
    if (!isInView || hasStarted.current) return;
    hasStarted.current = true;

    let startTime: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isInView, target, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function AboutTeaser() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section className="section-padding bg-surface border-y border-[rgba(182,110,46,0.1)]" id="about">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <motion.div
            ref={ref}
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.div variants={fadeUpVariant} className="flex items-center gap-3 mb-5">
              <span className="w-8 h-px bg-primary" />
              <span className="text-[0.7rem] font-semibold tracking-[0.25em] uppercase text-primary font-body">
                Notre Histoire
              </span>
              <span className="w-8 h-px bg-primary" />
            </motion.div>

            <motion.h2
              variants={fadeUpVariant}
              className="font-heading font-bold text-display-lg text-text mb-6 leading-tight"
            >
              Artisans du Prestige,{" "}
              <span className="text-gold-gradient">Bâtisseurs de Rêves</span>
            </motion.h2>

            <motion.p variants={fadeUpVariant} className="text-text-muted leading-relaxed mb-5">
              Fondée en 2006 à Temara, ART PLASTER est née d&apos;une passion profonde pour 
              l&apos;artisanat marocain et d&apos;une vision claire : porter les finitions décoratives 
              au niveau de l&apos;excellence internationale.
            </motion.p>

            <motion.p variants={fadeUpVariant} className="text-text-muted leading-relaxed mb-8">
              Aujourd&apos;hui, nos équipes de maîtres artisans réalisent des projets dans les 
              plus grands palaces, hôtels cinq étoiles et résidences de prestige du Maroc, 
              en fusionnant techniques traditionnelles et matériaux contemporains.
            </motion.p>

            <motion.div variants={fadeUpVariant}>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm text-primary-light hover:text-text transition-colors duration-200 font-medium tracking-wide border-b border-primary/30 hover:border-primary pb-0.5"
              >
                Découvrir notre histoire
                <ArrowUpRight size={14} />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right: Stats grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, i) => {
              const Icon = iconMap[stat.icon] || Briefcase;
              return (
                <motion.div
                  key={stat.label}
                  variants={fadeUpVariant}
                  custom={i}
                  className="relative p-6 rounded-2xl glass border border-[rgba(182,110,46,0.15)] hover:border-primary/30 transition-all duration-300 group overflow-hidden"
                >
                  {/* Corner decoration */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-2xl" />

                  <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center mb-4 group-hover:bg-primary/25 transition-colors duration-300">
                    <Icon size={18} className="text-primary-light" />
                  </div>

                  <div className="font-heading font-extrabold text-3xl text-primary-light mb-1.5 leading-none">
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                  </div>

                  <div className="text-[0.7rem] tracking-[0.15em] text-text-muted uppercase">
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
