"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Link from "next/link";
import { Expand } from "lucide-react";
import { projects } from "@/lib/data";
import { cn } from "@/lib/utils";
import Button from "@/components/ui/Button";
import ImageSlider from "@/components/ui/ImageSlider";

export default function GrandProjects() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Parallax for the entire section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  
  // Background drift
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  // Only feature projects marked as featured
  const featured = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <section ref={containerRef} className="relative py-24 lg:py-40 bg-[#0A0907] overflow-hidden">
      {/* Dark moving background pattern */}
      <motion.div 
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{ y: yBg }}
      >
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-radial from-primary/10 to-transparent rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-radial from-teal/10 to-transparent rounded-full blur-[100px]" />
      </motion.div>

      <div className="container-custom relative z-10">
        <div className="flex flex-col items-center text-center mb-20 lg:mb-32">
          <span className="text-[0.7rem] font-semibold tracking-[0.25em] uppercase text-primary mb-4 font-body">Ligne Haute Couture</span>
          <h2 className="font-heading font-extrabold text-display-xl text-text mb-6">
            Grands <span className="text-gold-gradient">Projets</span>
          </h2>
          <p className="text-text-muted max-w-2xl text-lg">
            Focus sur nos réalisations les plus ambitieuses : des prouesses techniques 
            et esthétiques qui repoussent les limites de l&apos;artisanat d&apos;art.
          </p>
        </div>

        <div className="flex flex-col gap-24 lg:gap-40">
          {featured.map((project, index) => (
            <ProjectRow key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectRow({ project, index }: { project: any; index: number }) {
  const rowRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(rowRef, { once: true, margin: "-20%" });
  const isEven = index % 2 === 0;

  return (
    <div 
      ref={rowRef}
      className={cn(
        "flex flex-col gap-10 lg:gap-16 items-center",
        isEven ? "lg:flex-row" : "lg:flex-row-reverse"
      )}
    >
      {/* Image side - Large with auto-play slider */}
      <motion.div 
        initial={{ opacity: 0, x: isEven ? -50 : 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? -50 : 50 }}
        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        className="w-full lg:w-[60%] relative"
      >
        <Link href={`/portfolio/${project.slug}`} className="block group cursor-pointer">
          <div className="relative aspect-[4/3] lg:aspect-[16/10] overflow-hidden rounded-2xl glass border border-primary/20">
            <ImageSlider
              images={project.gallery && project.gallery.length > 0 ? project.gallery : [project.image]}
              alt={project.title}
              className="w-full h-full transition-transform duration-1000 group-hover:scale-105"
              autoPlay={true}
              interval={4000}
            />
            
            {/* Dark overlay base */}
            <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors duration-500 pointer-events-none" />
            
            {/* View Project Overlay */}
            <div className="absolute inset-0 bg-background/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center pointer-events-none">
              <div className="w-16 h-16 rounded-full border-2 border-primary-light flex items-center justify-center -translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <Expand size={24} className="text-primary-light" />
              </div>
              <span className="text-[0.65rem] tracking-[0.2em] font-medium uppercase text-text mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                Ouvrir le projet
              </span>
            </div>

            {/* Floating stat overlay (hidden on hover) */}
            <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end opacity-100 group-hover:opacity-0 transition-opacity duration-300 pointer-events-none">
              <div className="glass px-5 py-3 rounded-xl backdrop-blur-md">
                <div className="text-[0.65rem] tracking-[0.15em] text-primary-light uppercase mb-1">Surface</div>
                <div className="font-heading font-bold text-xl text-text">{project.surface}</div>
              </div>
              <div className="glass px-5 py-3 rounded-xl backdrop-blur-md text-right">
                <div className="text-[0.65rem] tracking-[0.15em] text-primary-light uppercase mb-1">Durée</div>
                <div className="font-heading font-bold text-xl text-text">{project.duration}</div>
              </div>
            </div>
          </div>
        </Link>
      </motion.div>

      {/* Text side - Smaller */}
      <motion.div 
        initial={{ opacity: 0, x: isEven ? 50 : -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? 50 : -50 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
        className="w-full lg:w-[40%] flex flex-col"
      >
        <div className="flex items-center gap-3 mb-6">
          <span className="text-[0.65rem] tracking-[0.2em] uppercase text-primary-light font-semibold bg-primary/10 px-4 py-1.5 rounded-full border border-primary/20">
            {project.category}
          </span>
          <span className="w-1 h-1 rounded-full bg-surface-2" />
          <span className="text-text-muted text-sm">{project.location}</span>
        </div>
        
        <h3 className="font-heading font-bold text-display-md text-text leading-tight mb-6">
          {project.title}
        </h3>
        
        <p className="text-text-muted leading-relaxed mb-8 text-lg">
          {project.description}
        </p>

        <div className="grid grid-cols-2 gap-y-4 gap-x-8 mb-10 pb-8 border-b border-[rgba(182,110,46,0.15)]">
          <div>
            <div className="text-[0.65rem] tracking-wider text-text-dim uppercase mb-1">Client</div>
            <div className="font-medium text-text-muted">{project.client}</div>
          </div>
          <div>
            <div className="text-[0.65rem] tracking-wider text-text-dim uppercase mb-1">Année</div>
            <div className="font-medium text-text-muted">{project.year}</div>
          </div>
        </div>

        <Link href={`/portfolio/${project.slug}`}>
          <Button variant="secondary" icon={true}>
            Explorer les détails
          </Button>
        </Link>
      </motion.div>
    </div>
  );
}
