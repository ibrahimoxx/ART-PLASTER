"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Tag } from "lucide-react";
import { projects, categories } from "@/lib/data";
import { staggerContainer, fadeUpVariant } from "@/lib/utils";
import { cn } from "@/lib/utils";
import SectionHeader from "@/components/ui/SectionHeader";
import ImageSlider from "@/components/ui/ImageSlider";

export default function PortfolioPreview() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const [activeCategory, setActiveCategory] = useState("Tous");

  const filtered = projects.filter(
    (p) => activeCategory === "Tous" || p.category === activeCategory
  ).slice(0, 6);

  return (
    <section className="section-padding bg-background" id="portfolio">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeader
            overline="Nos Réalisations"
            title="Portfolio"
            titleHighlight="Prestige"
            subtitle="Un aperçu de nos projets les plus emblématiques."
            maxWidth="max-w-xl"
          />

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2 shrink-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-4 py-2 rounded-full text-[0.75rem] tracking-[0.1em] uppercase font-medium transition-all duration-300",
                  activeCategory === cat
                    ? "bg-primary text-text shadow-glow"
                    : "bg-surface border border-[rgba(182,110,46,0.2)] text-text-muted hover:text-text hover:border-primary/40"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <motion.div
          ref={ref}
          layout
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                variants={fadeUpVariant}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1], delay: i * 0.05 }}
                className={cn(
                  "project-card group relative rounded-3xl overflow-hidden bg-surface border border-[rgba(182,110,46,0.1)] hover:border-primary/30 transition-all duration-500 hover:shadow-card-hover",
                  i === 0 && "sm:col-span-2 lg:col-span-1 lg:row-span-1"
                )}
              >
                {/* Full-card clickable link */}
                <Link href={`/portfolio/${project.slug}`} prefetch={true} className="absolute inset-0 z-20" aria-label={`Voir le projet ${project.title}`} />
                {/* Image with auto-play slider */}
                <div className="img-zoom aspect-[4/3] relative">
                  <ImageSlider
                    images={project.gallery && project.gallery.length > 0 ? project.gallery : [project.image]}
                    alt={project.title}
                    className="w-full h-full"
                    autoPlay={true}
                    interval={3500}
                  />
                </div>

                {/* Overlay */}
                <div className="project-card-overlay absolute inset-0 bg-gradient-to-t from-background/95 via-background/50 to-transparent flex flex-col justify-end p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Tag size={10} className="text-primary" />
                    <span className="text-[0.65rem] tracking-[0.15em] text-primary uppercase">{project.category}</span>
                  </div>
                  <h3 className="font-heading font-bold text-lg text-text mb-3 leading-tight">{project.title}</h3>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-[0.7rem] text-text-muted">
                      <span>{project.surface}</span>
                      <span className="w-1 h-1 rounded-full bg-primary/50" />
                      <span>{project.year}</span>
                    </div>
                    {/* Visual Button (Link handled by top-level absolute layer) */}
                    <div
                      className="w-8 h-8 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center group-hover:bg-primary transition-colors duration-200 pointer-events-none"
                    >
                      <ArrowUpRight size={14} className="text-primary-light group-hover:text-text transition-colors duration-200" />
                    </div>
                  </div>
                </div>

                {/* Category badge (always visible) */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="text-[0.6rem] tracking-[0.15em] text-primary-light uppercase bg-background/80 backdrop-blur-sm px-3 py-1.5 rounded-full border border-primary/20">
                    {project.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-center mt-12"
        >
          <Link href="/portfolio" className="inline-flex items-center gap-2 bg-surface border border-[rgba(182,110,46,0.2)] hover:border-primary/50 text-text px-8 py-3.5 rounded-full text-sm tracking-wider uppercase font-medium transition-all duration-300 hover:shadow-glow hover:bg-primary/10 group">
            Voir tout le portfolio
            <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
