"use client";

import { motion } from "framer-motion";
import { Award, Building2 } from "lucide-react";
import { companyInfo, historyTimeline, stats } from "@/lib/data";
import { cn, staggerContainer, fadeUpVariant } from "@/lib/utils";
import SectionHeader from "@/components/ui/SectionHeader";
import CTABanner from "@/components/sections/CTABanner";

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="pt-32 pb-16 lg:pt-48 lg:pb-24 bg-surface-2 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1541888086088-7510d9ce2571?q=80&w=2000&auto=format&fit=crop" 
            alt="Artisanat" 
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
              Notre Héritage
            </span>
            <h1 className="font-heading font-extrabold text-display-xl text-text leading-tight mb-6">
              L'Art de <span className="text-gold-gradient">Sublimer</span>
            </h1>
            <p className="text-text-muted text-lg max-w-2xl mx-auto leading-relaxed">
              Depuis 2005, ART PLASTER fusionne avec passion les techniques traditionnelles 
              marocaines et l'innovation architecturale contemporaine.
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
                overline="Notre Histoire"
                title="L'Excellence"
                titleHighlight="En Héritage"
                subtitle="Née de la passion d'artisans maîtres plâtriers, notre entreprise s'est hissée au rang des références incontournables de la décoration d'intérieur au Maroc."
                maxWidth="max-w-xl"
              />
              <div className="space-y-6 text-text-muted leading-relaxed mt-8">
                <p>
                  Chaque projet que nous entreprenons est une nouvelle occasion de démontrer notre savoir-faire. 
                  Notre équipe, composée de maîtres artisans chevronnés et de jeunes talents passionnés, 
                  partage une même exigence : la perfection dans les moindres détails.
                </p>
                <p>
                  Nous ne nous contentons pas d'habiller vos murs et plafonds. Nous sculptons la lumière, 
                  nous jouons avec les volumes et nous créons des espaces qui racontent une histoire — 
                  la vôtre, magnifiée par notre expertise.
                </p>
              </div>

              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start gap-4 p-5 rounded-2xl glass border border-primary/20 bg-surface/50">
                  <Award size={24} className="text-primary-light shrink-0" />
                  <div>
                    <h4 className="font-heading font-bold text-text mb-1text-sm leading-tight">Savoir-faire Reconnu</h4>
                    <p className="text-xs text-text-dim leading-relaxed">Maîtrise parfaite des enduits traditionnels (Tadelakt, stuc) et modernes.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-5 rounded-2xl glass border border-primary/20 bg-surface/50">
                  <Building2 size={24} className="text-primary-light shrink-0" />
                  <div>
                    <h4 className="font-heading font-bold text-text mb-1 text-sm leading-tight">Projets d'Envergure</h4>
                    <p className="text-xs text-text-dim leading-relaxed">Partenaire privilégié des architectes pour le résidentiel et l'hôtellerie de luxe.</p>
                  </div>
                </div>
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
                src="https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=2000&auto=format&fit=crop" 
                alt="Maître Artisan" 
                className="w-full h-full object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
              
              <div className="absolute bottom-10 left-10 p-6 glass rounded-2xl backdrop-blur-md border border-primary/30 max-w-[280px]">
                <p className="text-primary-light font-medium italic text-sm leading-relaxed mb-4">
                  "L'art ne réside pas seulement dans le geste, mais dans l'âme que l'on insuffle à la matière."
                </p>
                <div className="text-[0.65rem] tracking-wider uppercase text-text-dim">M. Youssef, Maître Artisan Fondateur</div>
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
