"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FileSearch, Palette, HardHat, CheckCircle2 } from "lucide-react";
import { processSteps } from "@/lib/data";
import { staggerContainer, fadeUpVariant } from "@/lib/utils";
import SectionHeader from "@/components/ui/SectionHeader";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  FileSearch,
  Palette,
  HardHat,
  CheckCircle2,
};

export default function ProcessTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <SectionHeader
          overline="Notre Méthode"
          title="Un Processus"
          titleHighlight="Rigoureux"
          subtitle="De l'étude préliminaire à la réception finale, chaque étape est menée avec méthode et professionnalisme pour garantir des résultats à la hauteur de vos exigences."
          centered
        />

        {/* Desktop: Horizontal timeline */}
        <div ref={ref} className="relative hidden lg:block">
          {/* Connector line */}
          <div className="absolute top-14 left-[12.5%] right-[12.5%] h-px bg-[rgba(182,110,46,0.15)]">
            <motion.div
              className="h-full bg-gradient-to-r from-primary to-primary-light origin-left"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ delay: 0.5, duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
            />
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-4 gap-6"
          >
            {processSteps.map((step, i) => {
              const Icon = iconMap[step.icon] || CheckCircle2;
              return (
                <motion.div
                  key={step.number}
                  variants={fadeUpVariant}
                  custom={i}
                  className="flex flex-col items-center text-center"
                >
                  {/* Circle node */}
                  <div className="relative mb-8">
                    <div className="w-28 h-28 rounded-full bg-surface border-2 border-[rgba(182,110,46,0.2)] flex flex-col items-center justify-center gap-1 group hover:border-primary/50 transition-all duration-300 hover:shadow-glow">
                      <Icon size={24} className="text-primary-light" />
                      <span className="font-heading font-bold text-xs text-text-dim">{step.number}</span>
                    </div>
                    {/* Pulse ring */}
                    <div className="absolute inset-0 rounded-full border border-primary/20 animate-ping opacity-0 group-hover:opacity-30" style={{ animationDuration: "2s" }} />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-text mb-3">{step.title}</h3>
                  <p className="text-text-muted text-sm leading-relaxed">{step.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Mobile: Vertical timeline */}
        <div className="lg:hidden space-y-0">
          {processSteps.map((step, i) => {
            const Icon = iconMap[step.icon] || CheckCircle2;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="flex gap-5 pb-10 last:pb-0"
              >
                {/* Left: connector */}
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-2xl bg-surface border border-[rgba(182,110,46,0.2)] flex items-center justify-center shrink-0">
                    <Icon size={18} className="text-primary-light" />
                  </div>
                  {i < processSteps.length - 1 && (
                    <div className="flex-1 w-px bg-gradient-to-b from-primary/20 to-transparent mt-2" />
                  )}
                </div>

                {/* Right: text */}
                <div className="pt-2 pb-6">
                  <div className="text-[0.65rem] tracking-[0.2em] text-primary mb-1.5 font-semibold">
                    Étape {step.number}
                  </div>
                  <h3 className="font-heading font-bold text-xl text-text mb-2">{step.title}</h3>
                  <p className="text-text-muted text-sm leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
