"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Filter } from "lucide-react";
import { projects, categories } from "@/lib/data";
import { cn } from "@/lib/utils";
import CTABanner from "@/components/sections/CTABanner";
import ImageSlider from "@/components/ui/ImageSlider";
import BeforeAfterSlider from "@/components/ui/BeforeAfterSlider";

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("Tous");

  const filtered = projects.filter(
    (p) => activeCategory === "Tous" || p.category === activeCategory
  );

  // Featured project = first marked as featured
  const featuredProject = projects.find((p) => p.featured);

  return (
    <>
      {/* Page Hero */}
      <div className="pt-32 pb-16 lg:pt-48 lg:pb-24 bg-background relative overflow-hidden">
        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          >
            <span className="inline-block px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-6 text-[0.7rem] tracking-[0.2em] text-primary-light uppercase font-body">
              Nos Réalisations
            </span>
            <h1 className="font-heading font-extrabold text-display-xl text-text leading-tight mb-6">
              Portfolio <span className="text-gold-gradient">Prestige</span>
            </h1>
            <p className="text-text-muted text-lg max-w-2xl mx-auto leading-relaxed">
              Explorez nos chantiers d&apos;exception — hôtels 5 étoiles, sièges bancaires,
              fondations royales et cliniques de prestige à travers tout le Maroc.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Featured Project Block — BeforeAfter avec vraies images ART PLASTER */}
      {featuredProject && featuredProject.gallery && featuredProject.gallery.length >= 2 && (
        <section className="pb-16 lg:pb-24 bg-background">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-6"
            >
              <BeforeAfterSlider
                beforeImage={featuredProject.gallery[0]}
                afterImage={featuredProject.gallery[1]}
                beforeLabel="Vue 1"
                afterLabel="Vue 2"
              />
            </motion.div>

            <div className="flex flex-col md:flex-row justify-between items-start md:items-center px-2">
              <div>
                <h3 className="font-heading font-bold text-2xl text-text mb-2">{featuredProject.title}</h3>
                <p className="text-text-muted text-sm max-w-xl leading-relaxed">{featuredProject.description}</p>
              </div>
              <div className="mt-4 md:mt-0 flex items-center gap-3">
                <span className="px-4 py-2 rounded-full border border-primary/20 bg-primary/10 text-[0.7rem] tracking-wider text-primary-light uppercase">
                  Projet Phare
                </span>
                <Link
                  href={`/portfolio/${featuredProject.slug}`}
                  className="w-10 h-10 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center hover:bg-primary transition-colors duration-200"
                >
                  <ArrowUpRight size={16} className="text-primary-light" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Main Grid */}
      <section className="section-padding bg-surface-2 min-h-screen">
        <div className="container-custom">
          
          <div className="flex flex-col md:flex-row justify-between items-center mb-12 border-b border-[rgba(182,110,46,0.15)] pb-6 gap-6">
            <h2 className="font-heading font-bold text-2xl text-text">
              Tous nos Projets{" "}
              <span className="text-primary-light text-lg font-normal ml-2">
                ({filtered.length})
              </span>
            </h2>
            
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[0.65rem] tracking-[0.1em] text-text-dim uppercase mr-2 flex items-center gap-2">
                <Filter size={14} /> Filtres
              </span>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={cn(
                    "px-4 py-2 rounded-full text-[0.7rem] tracking-[0.1em] uppercase transition-all duration-300",
                    activeCategory === cat 
                      ? "bg-primary text-text shadow-glow" 
                      : "bg-surface border border-primary/20 text-text-muted hover:text-text hover:border-primary/50"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <AnimatePresence mode="popLayout">
              {filtered.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                  className="group relative rounded-3xl overflow-hidden bg-background border border-[rgba(182,110,46,0.1)] hover:border-primary/30 transition-all duration-500 hover:shadow-card-hover flex flex-col h-full"
                >
                  {/* Full-card clickable link */}
                  <Link href={`/portfolio/${project.slug}`} prefetch={true} className="absolute inset-0 z-20" aria-label={`Voir le projet ${project.title}`} />
                  {/* Image with auto-play slider */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <ImageSlider
                      images={project.gallery && project.gallery.length > 0 ? project.gallery : [project.image]}
                      alt={project.title}
                      className="w-full h-full"
                      autoPlay={true}
                      interval={3800}
                    />
                    <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors duration-500 pointer-events-none" />
                    
                    {/* Hover text reveal overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent p-6 flex flex-col justify-end translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                      <p className="text-sm text-text-muted line-clamp-2 mb-4 leading-relaxed">
                        {project.description}
                      </p>
                      {/* Visual link (Click resolved by absolute layer) */}
                      <div 
                        className="inline-flex items-center gap-2 text-primary-light text-xs font-medium tracking-wider uppercase group-hover:text-text transition-colors pointer-events-none"
                      >
                        Voir les détails <ArrowUpRight size={14} />
                      </div>
                    </div>

                    <div className="absolute top-4 left-4 z-10">
                      <span className="text-[0.6rem] tracking-[0.15em] text-primary-light uppercase bg-background/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-primary/20 shadow-lg">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Card info */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="font-heading font-bold text-xl text-text mb-2 line-clamp-1 group-hover:text-primary-light transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex items-center justify-between mt-auto">
                      <span className="text-sm text-text-muted">{project.location}</span>
                      <span className="text-sm font-medium text-text-dim">{project.year}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-text-muted">
              Aucun projet dans cette catégorie pour le moment.
            </div>
          )}
        </div>
      </section>

      <CTABanner />
    </>
  );
}
