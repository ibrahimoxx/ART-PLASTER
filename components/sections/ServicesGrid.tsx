"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Layers, Crown, Building2, Hotel, Store, Home as HomeIcon, LucideIcon } from "lucide-react";
import { services } from "@/lib/data";
import { staggerContainer, fadeUpVariant } from "@/lib/utils";
import SectionHeader from "@/components/ui/SectionHeader";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Layers,
  Crown,
  Building2,
  Hotel,
  Store,
  Home: HomeIcon,
};

export default function ServicesGrid() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section className="section-padding bg-background" id="services">
      <div className="container-custom">
        <SectionHeader
          overline="Nos Expertises"
          title="Des Services"
          titleHighlight="d'Exception"
          subtitle="Du tadelakt marocain aux plafonds sculptés, en passant par le béton ciré et les stuccos vénitiens — chaque technique au service de l'excellence architecturale."
        />

        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] || Layers;
            return (
              <motion.div
                key={service.id}
                variants={fadeUpVariant}
                custom={i}
                className="group project-card relative flex flex-col p-7 rounded-3xl bg-surface border border-[rgba(182,110,46,0.12)] hover:border-primary/30 transition-all duration-500 hover:shadow-card-hover cursor-pointer overflow-hidden"
              >
                {/* Background hover gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl" />

                {/* Category pill */}
                <div className="flex items-center justify-between mb-6 relative z-10">
                  <span className="text-[0.6rem] tracking-[0.2em] text-primary-light uppercase bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
                    {service.category}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                    <Icon size={18} className="text-primary-light" />
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10 flex-1">
                  <h3 className="font-heading font-bold text-xl text-text mb-1.5 group-hover:text-primary-light transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-[0.75rem] text-primary font-medium mb-4">{service.subtitle}</p>
                  <p className="text-text-muted text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Feature tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.features.map((f) => (
                      <span key={f} className="text-[0.625rem] tracking-wider text-text-dim bg-surface-2 px-2.5 py-1 rounded-full border border-[rgba(182,110,46,0.1)]">
                        {f}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA Link */}
                <Link
                  href={`/services`}
                  className="relative z-10 flex items-center gap-2 text-xs text-text-muted group-hover:text-primary-light transition-colors duration-300 font-medium tracking-wide w-fit"
                >
                  <span>En savoir plus</span>
                  <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>

                {/* Decorative corner accent */}
                <div className="absolute bottom-0 right-0 w-20 h-20 rounded-tl-3xl bg-gradient-to-tl from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-center mt-12"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm text-primary-light hover:text-text transition-colors duration-200 font-medium tracking-wide border-b border-primary/30 hover:border-primary pb-0.5"
          >
            Découvrir tous nos services
            <ArrowUpRight size={14} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
