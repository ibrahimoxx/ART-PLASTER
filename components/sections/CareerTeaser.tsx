"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight, GraduationCap, Users } from "lucide-react";
import Link from "next/link";
import { staggerContainer, fadeUpVariant } from "@/lib/utils";

export default function CareerTeaser() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section className="section-padding bg-background border-t border-[rgba(182,110,46,0.1)]">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left: Text */}
          <motion.div
            ref={ref}
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="lg:col-span-5"
          >
            <motion.div variants={fadeUpVariant} className="flex items-center gap-3 mb-5">
              <span className="w-8 h-px bg-primary" />
              <span className="text-[0.7rem] font-semibold tracking-[0.25em] uppercase text-primary font-body">
                Rejoindre Nos Équipes
              </span>
            </motion.div>

            <motion.h2 variants={fadeUpVariant} className="font-heading font-bold text-display-md text-text leading-tight mb-6">
              Façonnez l'Avenir de <br/>
              <span className="text-gold-gradient">l'Artisanat de Luxe</span>
            </motion.h2>

            <motion.p variants={fadeUpVariant} className="text-text-muted leading-relaxed mb-8">
              Bâtir des chefs-d'œuvre nécessite plus que d'excellents matériaux. Nous recherchons 
              les esprits créatifs, les mains expertes et les visionnaires pour repousser les 
              frontières de la finition décorative.
            </motion.p>

            <motion.div variants={fadeUpVariant}>
              <Link href="/careers" className="inline-flex items-center gap-2 bg-primary text-text px-8 py-3.5 rounded-full text-sm font-medium tracking-wider uppercase transition-all duration-300 hover:bg-primary-dark hover:shadow-glow group">
                Voir les offres
                <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right: Feature Cards */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="lg:col-span-7 flex flex-col sm:flex-row gap-5"
          >
            <motion.div 
              variants={fadeUpVariant}
              className="flex-1 glass p-8 rounded-3xl border border-primary/20 bg-gradient-to-br from-surface to-background/50 hover:border-primary/40 transition-colors"
            >
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <GraduationCap size={24} className="text-primary-light" />
              </div>
              <h3 className="font-heading font-bold text-xl text-text mb-3">École d'Excellence</h3>
              <p className="text-sm text-text-muted leading-relaxed mb-6">
                Formation continue aux techniques ancestrales et modernes. Transmettez et perfectionnez votre savoir sous l'égide de nos Maîtres.
              </p>
              <span className="text-[0.7rem] tracking-wider text-primary-light font-medium uppercase border-b border-primary-light/30">
                Découvrir le programme
              </span>
            </motion.div>

            <motion.div 
              variants={fadeUpVariant}
              className="flex-1 glass p-8 rounded-3xl border border-primary/20 bg-gradient-to-bl from-surface to-background/50 hover:border-primary/40 transition-colors sm:mt-8"
            >
              <div className="w-12 h-12 rounded-2xl bg-teal/10 flex items-center justify-center mb-6 border border-teal/20">
                <Users size={24} className="text-teal-light" />
              </div>
              <h3 className="font-heading font-bold text-xl text-text mb-3">Culture & Projets</h3>
              <p className="text-sm text-text-muted leading-relaxed mb-6">
                Évoluez sur les chantiers les plus prestigieux du Maroc au sein d'équipes pluridisciplinaires où règne le respect mutuel.
              </p>
              <span className="text-[0.7rem] tracking-wider text-teal-light font-medium uppercase border-b border-teal-light/30">
                Notre philosophie
              </span>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
