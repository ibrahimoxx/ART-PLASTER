"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/lib/data";
import { ArrowLeft, MapPin, Clock, Ruler, Building2, Tag } from "lucide-react";
import { staggerContainer, fadeUpVariant } from "@/lib/utils";
import CTABanner from "@/components/sections/CTABanner";
import BeforeAfterSlider from "@/components/ui/BeforeAfterSlider";

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  const relatedProjects = projects
    .filter((p) => p.id !== project.id && p.category === project.category)
    .slice(0, 3);

  return (
    <>
      {/* Back Navigation */}
      <div className="pt-28 lg:pt-36 pb-6 bg-background">
        <div className="container-custom">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-primary-light transition-colors duration-200 group mb-8"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform duration-200" />
            Retour au Portfolio
          </Link>
        </div>
      </div>

      {/* Hero / Large Image */}
      <section className="bg-background pb-0">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Category & Title */}
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <span className="text-[0.65rem] tracking-[0.2em] uppercase text-primary-light font-semibold bg-primary/10 px-4 py-1.5 rounded-full border border-primary/20">
                {project.category}
              </span>
              <span className="flex items-center gap-1.5 text-sm text-text-dim">
                <MapPin size={14} /> {project.location}
              </span>
            </div>

            <h1 className="font-heading font-extrabold text-display-xl text-text leading-tight mb-4">
              {project.title}
            </h1>

            <p className="text-text-muted text-lg max-w-3xl leading-relaxed mb-10">
              {project.description}
            </p>

            {/* Meta Info Bar */}
            <div className="flex flex-wrap gap-8 mb-12 border-y border-[rgba(182,110,46,0.15)] py-6">
              {[
                { icon: Ruler, label: "Surface", value: project.surface },
                { icon: Clock, label: "Durée", value: project.duration },
                { icon: Building2, label: "Client", value: project.client },
                { icon: Tag, label: "Année", value: project.year },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-surface-2 border border-primary/10 flex items-center justify-center shrink-0">
                    <Icon size={16} className="text-primary" />
                  </div>
                  <div>
                    <div className="text-[0.6rem] tracking-wider text-text-dim uppercase mb-0.5">{label}</div>
                    <div className="font-medium text-text text-sm">{value}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Main Project Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative aspect-[16/9] rounded-3xl overflow-hidden glass border border-primary/20 mb-16"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* Before / After Slider */}
      {project.beforeImage && project.afterImage && (
        <section className="section-padding bg-surface-2 border-y border-[rgba(182,110,46,0.1)]">
          <div className="container-custom">
            <div className="text-center mb-10">
              <span className="text-[0.65rem] tracking-[0.2em] uppercase text-primary-light font-semibold">
                Transformation Visible
              </span>
              <h2 className="font-heading font-bold text-display-md text-text mt-2">
                Avant / Après
              </h2>
            </div>
            <BeforeAfterSlider
              beforeImage={project.beforeImage}
              afterImage={project.afterImage}
              beforeLabel="Avant Travaux"
              afterLabel="Après ART PLASTER"
            />
          </div>
        </section>
      )}

      {/* Tags / Techniques Used */}
      <section className="section-padding bg-background">
        <div className="container-custom max-w-4xl">
          <div className="mb-14">
            <h2 className="font-heading font-bold text-2xl text-text mb-6">
              Techniques & Matériaux
            </h2>
            <div className="flex flex-wrap gap-3">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-5 py-2.5 rounded-full glass border border-primary/20 text-sm text-primary-light font-medium hover:border-primary/50 hover:bg-primary/10 transition-colors duration-200 cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Client Testimonial */}
          {project.testimonial && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass rounded-3xl p-8 md:p-12 border border-primary/20 shadow-glow relative overflow-hidden"
            >
              {/* Decorative top line */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

              <div className="text-5xl text-primary/20 font-heading mb-4 leading-none">"</div>
              <p className="text-lg md:text-xl text-text-muted italic leading-relaxed mb-8">
                {project.testimonial.quote}
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/30">
                  <img
                    src={project.testimonial.avatar}
                    alt={project.testimonial.author}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-heading font-bold text-text">{project.testimonial.author}</div>
                  <div className="text-xs text-primary-light tracking-wider">{project.testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="section-padding bg-surface-2 border-t border-[rgba(182,110,46,0.1)]">
          <div className="container-custom">
            <h2 className="font-heading font-bold text-2xl text-text mb-10">
              Autres Projets <span className="text-gold-gradient">{project.category}</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProjects.map((related) => (
                <Link
                  key={related.id}
                  href={`/portfolio/${related.slug}`}
                  className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-surface border border-[rgba(182,110,46,0.1)] hover:border-primary/30 transition-all duration-300 hover:shadow-card-hover block"
                >
                  <img
                    src={related.image}
                    alt={related.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5">
                    <div className="text-[0.6rem] tracking-wider uppercase text-primary-light mb-1">{related.category}</div>
                    <h3 className="font-heading font-bold text-lg text-text group-hover:text-primary-light transition-colors leading-tight">{related.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTABanner
        title="Votre Projet Mérite le Meilleur"
        subtitle="Contactez-nous pour discuter de vos besoins et obtenir une étude personnalisée par nos experts."
        buttonText="Obtenir un Devis"
      />
    </>
  );
}
