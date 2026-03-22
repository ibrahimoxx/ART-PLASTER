"use client";

import { motion } from "framer-motion";
import { Award, Building2 } from "lucide-react";
import { companyInfo, historyTimeline, stats } from "@/lib/data";
import { cn, staggerContainer, fadeUpVariant } from "@/lib/utils";
import SectionHeader from "@/components/ui/SectionHeader";
import CTABanner from "@/components/sections/CTABanner";

export const dynamic = 'force-static';

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="pt-32 pb-16 lg:pt-48 lg:pb-24 bg-surface-2 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/projects/Hotellerie__hotel_barcelo_tanger__001.jpg" 
            alt="ART PLASTER — Chantier" 
            className="w-full h-full object-cover opacity-10" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/30" />
        </div>
        
        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          >
            <span className="inline-block px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-6 text-[0.7rem] tracking-[0.2em] text-primary-light uppercase font-body shadow-glow">
              Leader National en Plâtrerie
            </span>
            <h1 className="font-heading font-extrabold text-display-xl text-text leading-tight mb-6">
              ART PLASTER — <span className="text-gold-gradient">Travaux Plâtre & Divers</span>
            </h1>
            <p className="text-text-muted text-lg max-w-2xl mx-auto leading-relaxed">
              Fondée par Mr MABCHOUR MOHAMED, ART PLASTER est aujourd'hui un leader national 
              en travaux de Plâtre avec plus de 300 projets livrés et 45 personnes qualifiées.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Vision & Values */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8 }}
            >
              <SectionHeader
                overline="Qui Sommes-Nous"
                title="Leader National"
                titleHighlight="En Plâtrerie"
                subtitle="Fondée par Mr MABCHOUR MOHAMED, ART PLASTER est aujourd'hui la référence marocaine en travaux de Plâtre."
                maxWidth="max-w-xl"
              />
              <div className="space-y-6 text-text-muted leading-relaxed mt-8">
                <p>
                  ART PLASTER se caractérise par une démarche globale qui implique la connaissance de toutes les 
                  composantes des métiers de Plâtre, incluant l'anticipation des besoins pour aboutir à répondre 
                  à toutes les problématiques posées à chaque étape de la réalisation.
                </p>
                <p>
                  Cultivant le souci de la perfection au sein d'une équipe de près de <strong className="text-primary-light">45 personnes hautement qualifiées</strong>, 
                  ART PLASTER a signé quelques-unes des réalisations les plus marquantes de ces dernières décennies.
                  Elle compte parmi sa clientèle des enseignes prestigieuses des secteurs de la finance, des assurances, 
                  de l'hôtellerie ou de la grande distribution.
                </p>
              </div>

              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start gap-4 p-5 rounded-2xl glass border border-primary/20 bg-surface/50">
                  <Award size={24} className="text-primary-light shrink-0" />
                  <div>
                    <h4 className="font-heading font-bold text-text mb-1 text-sm leading-tight">+300 Projets Livrés</h4>
                    <p className="text-xs text-text-dim leading-relaxed">Hôtels, banques, hôpitaux, musées et résidences à travers tout le Maroc.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-5 rounded-2xl glass border border-primary/20 bg-surface/50">
                  <Building2 size={24} className="text-primary-light shrink-0" />
                  <div>
                    <h4 className="font-heading font-bold text-text mb-1 text-sm leading-tight">6 Secteurs d'Activité</h4>
                    <p className="text-xs text-text-dim leading-relaxed">Hôtellerie, santé, tertiaire, éducation, commerce et résidentiel.</p>
                  </div>
                </div>
              </div>

              {/* Secteurs d'intervention */}
              <div className="mt-8 p-6 glass rounded-2xl border border-primary/20">
                <h4 className="font-heading font-bold text-text mb-4 text-sm uppercase tracking-wider">Secteurs d'Intervention</h4>
                <ul className="grid grid-cols-2 gap-2">
                  {["Construction neuve", "Construction ancienne", "Rénovation", "Restauration", "Banques & Assurances", "Hôtellerie de luxe", "Santé & Médical", "Éducation & Culture"].map((sector) => (
                    <li key={sector} className="flex items-center gap-2 text-xs text-text-muted">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-light shrink-0" />
                      {sector}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8 }}
              className="relative aspect-square lg:aspect-[4/5] rounded-[2rem] overflow-hidden glass border-2 border-primary/20"
            >
              <img 
                src="/images/projects/Education__fondation_mohamed_vi_rabat__001.jpg" 
                alt="ART PLASTER — Fondation Mohammed VI" 
                className="w-full h-full object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
              
              <div className="absolute bottom-10 left-10 p-6 glass rounded-2xl backdrop-blur-md border border-primary/30 max-w-[280px]">
                <p className="text-primary-light font-medium italic text-sm leading-relaxed mb-4">
                  "Cultivant le souci de la perfection, ART PLASTER a signé quelques-unes des réalisations les plus marquantes."
                </p>
                <div className="text-[0.65rem] tracking-wider uppercase text-text-dim">MABCHOUR MOHAMED — Directeur Général</div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>


      {/* Stats Section bg */}
      <section className="py-20 bg-primary/5 border-y border-[rgba(182,110,46,0.15)] relative overflow-hidden">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col items-center text-center p-6 glass rounded-3xl border border-primary/20 hover:border-primary/50 transition-colors"
              >
                <div className="font-heading font-extrabold text-4xl lg:text-5xl text-gold-gradient mb-3 drop-shadow-md">
                  {stat.value}
                </div>
                <div className="text-[0.7rem] tracking-[0.1em] text-text-muted uppercase font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding bg-background">
        <div className="container-custom max-w-4xl">
          <SectionHeader
            overline="Parcours"
            title="Notre"
            titleHighlight="Évolution"
            centered
          />

          <div className="relative mt-20">
            {/* Center line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent -translate-x-1/2 hidden md:block" />

            <div className="space-y-16 lg:space-y-24">
              {historyTimeline.map((item, i) => {
                const isEven = i % 2 === 0;
                return (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    className="relative flex flex-col md:flex-row items-center justify-between w-full"
                  >
                    {/* Year Tag Mobile */}
                    <div className="md:hidden flex items-center justify-center w-20 h-20 rounded-full glass border border-primary/30 text-primary-light font-heading font-bold text-xl mb-6 shadow-glow">
                      {item.year}
                    </div>

                    {/* Left Content */}
                    <div className={cn("w-full md:w-[45%] text-center md:text-right group", !isEven && "md:order-3 md:text-left")}>
                      <div className="p-8 glass rounded-3xl border border-primary/10 hover:border-primary/40 transition-colors duration-500 hover:shadow-glow relative overflow-hidden">
                        {/* Decorative glow line inside card */}
                        <div className={cn("absolute top-0 bottom-0 w-1 bg-gradient-to-b from-primary/50 to-transparent", isEven ? "right-0" : "left-0")} />
                        
                        <h3 className="font-heading font-bold text-xl text-text mb-3">{item.title}</h3>
                        <p className="text-text-muted text-sm leading-relaxed">{item.description}</p>
                      </div>
                    </div>

                    {/* Center Year Tag Desktop */}
                    <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center justify-center w-20 h-20 rounded-full bg-surface-2 border-2 border-primary/30 text-primary-light font-heading font-bold text-xl shadow-glow z-10 hover:scale-110 hover:bg-primary hover:text-white transition-all duration-300">
                      {item.year}
                    </div>

                    {/* Right spacer for alignment */}
                    <div className={cn("hidden md:block w-[45%]", !isEven && "order-1")} />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <CTABanner 
        title="Bâtissons Votre Histoire"
        subtitle="Confiez la réalisation de vos intérieurs à une équipe passionnée par l'excellence et le souci du détail."
      />
    </>
  );
}
