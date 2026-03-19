"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Layers, Crown, Building2, Hotel, Store, Home as HomeIcon, CheckCircle2, LucideIcon } from "lucide-react";
import { services } from "@/lib/data";
import { cn, staggerContainer, fadeUpVariant } from "@/lib/utils";
import SectionHeader from "@/components/ui/SectionHeader";
import CTABanner from "@/components/sections/CTABanner";

const iconMap: Record<string, LucideIcon> = {
  Layers,
  Crown,
  Building2,
  Hotel,
  Store,
  Home: HomeIcon,
};

const categories = ["Tous", "Résidentiel", "Hôtelier", "Commercial", "Patrimoine"];

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState("Tous");

  const filtered = services.filter(
    (s) => activeCategory === "Tous" || s.category === activeCategory
  );

  return (
    <>
      <div className="pt-32 pb-16 lg:pt-48 lg:pb-24 bg-surface-2 relative overflow-hidden">
        {/* Decorative background lines */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(182,110,46,0.5) 1px, transparent 1px)", backgroundSize: "100px 100px" }} />
        
        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          >
            <span className="inline-block px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-6 text-[0.7rem] tracking-[0.2em] text-primary-light uppercase font-body">
              Expertise Technique
            </span>
            <h1 className="font-heading font-extrabold text-display-xl text-text leading-tight mb-6">
              Nos <span className="text-gold-gradient">Services</span>
            </h1>
            <p className="text-text-muted text-lg max-w-2xl mx-auto leading-relaxed">
              D'une simple rénovation aux projets hôteliers les plus ambitieux, 
              découvrez notre gamme complète de finitions décoratives haut de gamme.
            </p>
          </motion.div>
        </div>
      </div>

      <section className="section-padding bg-background min-h-[60vh]">
        <div className="container-custom">
          {/* Filter system */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="relative px-6 py-2.5 rounded-full text-[0.8125rem] tracking-[0.1em] uppercase font-medium transition-all duration-300"
              >
                {activeCategory === cat && (
                  <motion.div
                    layoutId="activeServiceTab"
                    className="absolute inset-0 bg-primary rounded-full shadow-glow"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className={cn(
                  "relative z-10 transition-colors duration-300",
                  activeCategory === cat ? "text-text" : "text-text-muted hover:text-text"
                )}>
                  {cat}
                </span>
                {activeCategory !== cat && (
                  <div className="absolute inset-0 rounded-full border border-[rgba(182,110,46,0.3)] hover:border-primary/50 transition-colors" />
                )}
              </button>
            ))}
          </div>

          {/* Animated Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((service, i) => {
                const Icon = iconMap[service.icon] || Layers;
                return (
                  <motion.div
                    key={service.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                    className="group glass rounded-3xl overflow-hidden border border-[rgba(182,110,46,0.15)] hover:border-primary/40 transition-colors duration-500 hover:shadow-card-hover flex flex-col"
                  >
                    {/* Image Header */}
                    <div className="relative h-64 overflow-hidden">
                      <img 
                        src={service.image} 
                        alt={service.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                      
                      {/* Icon overlay */}
                      <div className="absolute bottom-6 left-8 w-14 h-14 rounded-2xl bg-surface/80 backdrop-blur-md border border-primary/30 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                        <Icon size={24} className="text-primary-light" />
                      </div>
                      
                      {/* Category tag */}
                      <div className="absolute top-6 right-6">
                        <span className="text-[0.65rem] tracking-[0.15em] text-primary-light uppercase bg-surface/80 backdrop-blur-md px-4 py-2 rounded-full border border-primary/20">
                          {service.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8 flex-1 flex flex-col">
                      <h2 className="font-heading font-bold text-2xl text-text mb-2 group-hover:text-primary-light transition-colors">
                        {service.title}
                      </h2>
                      <p className="text-sm font-medium text-primary mb-6">
                        {service.subtitle}
                      </p>
                      <p className="text-text-muted leading-relaxed mb-8 flex-1">
                        {service.description}
                      </p>

                      <div className="space-y-3 mb-8">
                        {service.features.map((feature) => (
                          <div key={feature} className="flex items-center gap-3">
                            <CheckCircle2 size={16} className="text-primary-light shrink-0" />
                            <span className="text-sm text-text-dim">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <CTABanner 
        title="Un Projet Spécifique ?"
        subtitle="Nos experts vous conseillent sur les meilleures finitions décoratives adaptées à vos espaces et à vos contraintes techniques."
      />
    </>
  );
}
