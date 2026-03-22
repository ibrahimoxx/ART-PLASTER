"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, MapPin, Clock, ArrowRight, X } from "lucide-react";
import { jobs } from "@/lib/data";
import { cn, staggerContainer, fadeUpVariant } from "@/lib/utils";
import Button from "@/components/ui/Button";

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState<typeof jobs[0] | null>(null);

  // Close modal when pressing escape
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") setSelectedJob(null);
  };

  return (
    <>
      {/* Header */}
      <div className="pt-32 pb-16 lg:pt-48 lg:pb-24 bg-surface-2 relative overflow-hidden">
        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          >
            <span className="inline-block px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-6 text-[0.7rem] tracking-[0.2em] text-primary-light uppercase font-body shadow-glow">
              Carrières
            </span>
            <h1 className="font-heading font-extrabold text-display-xl text-text leading-tight mb-6">
              Façonnez l'Avenir de <span className="block text-gold-gradient">l'Artisanat</span>
            </h1>
            <p className="text-text-muted text-lg max-w-2xl mx-auto leading-relaxed">
              Rejoignez une équipe de passionnés où le talent est cultivé 
              et l'excellence est la norme sur les plus beaux chantiers du Maroc.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Jobs List */}
      <section className="section-padding bg-background min-h-[60vh]">
        <div className="container-custom max-w-4xl">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-6"
          >
            {jobs.map((job, i) => (
              <motion.div
                key={job.id}
                variants={fadeUpVariant}
                custom={i}
                className="group relative glass rounded-3xl p-6 md:p-8 border border-[rgba(182,110,46,0.15)] hover:border-primary/40 transition-colors duration-300 hover:shadow-card-hover flex flex-col md:flex-row md:items-center justify-between gap-6"
              >
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="text-[0.65rem] tracking-wider uppercase text-primary-light font-medium bg-primary/10 border border-primary/20 px-3 py-1 rounded-full">
                      {job.department}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-text-dim">
                      <MapPin size={14} /> {job.location}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-text-dim">
                      <Clock size={14} /> {job.type}
                    </span>
                  </div>
                  
                  <h3 className="font-heading font-bold text-2xl text-text mb-3 group-hover:text-primary-light transition-colors">
                    {job.title}
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed line-clamp-2">
                    {job.description}
                  </p>
                </div>

                <div className="shrink-0 pt-4 md:pt-0 border-t border-[rgba(182,110,46,0.1)] md:border-none md:pl-6 text-right md:text-center mt-2 md:mt-0">
                  <button
                    onClick={() => setSelectedJob(job)}
                    className="inline-flex items-center gap-2 text-sm font-medium tracking-wider text-text uppercase hover:text-primary-light transition-colors group/btn"
                  >
                    Postuler <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-16 text-center">
            <p className="text-text-muted text-sm mb-4">
              Vous ne trouvez pas de poste correspondant à votre profil ?
            </p>
            <a href="mailto:mabchour.med5@gmail.com" className="text-primary-light hover:text-white transition-colors uppercase tracking-wider text-sm font-medium underline underline-offset-4 decoration-primary/50">
              Envoyer une candidature spontanée
            </a>
          </div>
        </div>
      </section>

      {/* Application Modal */}
      <AnimatePresence>
        {selectedJob && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
            onKeyDown={handleKeyDown}
          >
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-background/80 backdrop-blur-md"
              onClick={() => setSelectedJob(null)}
            />

            {/* Modal Content */}
            <motion.div 
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-2xl bg-surface-2 border border-primary/20 rounded-3xl shadow-glow overflow-hidden z-10 max-h-[90vh] flex flex-col"
            >
              <div className="flex items-center justify-between p-6 border-b border-[rgba(182,110,46,0.15)] bg-surface sticky top-0 z-10">
                <div>
                  <h3 className="font-heading font-bold text-xl text-text">{selectedJob.title}</h3>
                  <div className="text-xs text-primary-light tracking-wider uppercase mt-1">Postuler à cette offre</div>
                </div>
                <button 
                  onClick={() => setSelectedJob(null)}
                  className="w-10 h-10 rounded-full flex items-center justify-center bg-surface border border-primary/20 text-text-muted hover:text-text hover:bg-primary/20 transition-colors"
                  aria-label="Fermer"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="p-6 md:p-8 overflow-y-auto no-scrollbar">
                <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert("Candidature envoyée ! (Simulation)"); setSelectedJob(null); }}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative group">
                      <input type="text" id="prenom" required className="form-input peer" placeholder=" " />
                      <label htmlFor="prenom" className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted transition-all duration-300 pointer-events-none peer-focus:top-3 peer-focus:text-[0.65rem] peer-focus:text-primary-light peer-focus:-translate-y-0 peer-valid:top-3 peer-valid:text-[0.65rem] peer-valid:-translate-y-0">
                        Prénom *
                      </label>
                    </div>
                    <div className="relative group">
                      <input type="text" id="nom" required className="form-input peer" placeholder=" " />
                      <label htmlFor="nom" className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted transition-all duration-300 pointer-events-none peer-focus:top-3 peer-focus:text-[0.65rem] peer-focus:text-primary-light peer-focus:-translate-y-0 peer-valid:top-3 peer-valid:text-[0.65rem] peer-valid:-translate-y-0">
                        Nom *
                      </label>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative group">
                      <input type="email" id="emailJob" required className="form-input peer" placeholder=" " />
                      <label htmlFor="emailJob" className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted transition-all duration-300 pointer-events-none peer-focus:top-3 peer-focus:text-[0.65rem] peer-focus:text-primary-light peer-focus:-translate-y-0 peer-valid:top-3 peer-valid:text-[0.65rem] peer-valid:-translate-y-0">
                        Email *
                      </label>
                    </div>
                    <div className="relative group">
                      <input type="tel" id="phoneJob" required className="form-input peer" placeholder=" " />
                      <label htmlFor="phoneJob" className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted transition-all duration-300 pointer-events-none peer-focus:top-3 peer-focus:text-[0.65rem] peer-focus:text-primary-light peer-focus:-translate-y-0 peer-valid:top-3 peer-valid:text-[0.65rem] peer-valid:-translate-y-0">
                        Téléphone *
                      </label>
                    </div>
                  </div>

                  {/* File Upload Simulation */}
                  <div className="border-2 border-dashed border-primary/30 bg-surface/50 rounded-2xl p-8 text-center hover:border-primary/60 hover:bg-primary/5 transition-colors cursor-pointer group">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                      <Briefcase size={20} className="text-primary-light" />
                    </div>
                    <p className="text-text font-medium mb-1">Télécharger votre CV (PDF)</p>
                    <p className="text-xs text-text-dim">Glissez-déposez ou cliquez pour parcourir</p>
                    <input type="file" className="hidden" accept=".pdf,.doc,.docx" />
                  </div>

                  <div className="relative group">
                    <textarea id="motivation" rows={4} className="form-input peer resize-none py-4" placeholder=" " />
                    <label htmlFor="motivation" className="absolute left-4 top-6 -translate-y-1/2 text-text-muted transition-all duration-300 pointer-events-none peer-focus:top-3 peer-focus:text-[0.65rem] peer-focus:text-primary-light peer-focus:-translate-y-0 peer-valid:top-3 peer-valid:text-[0.65rem] peer-valid:-translate-y-0">
                      Lettre de motivation (Optionnelle)
                    </label>
                  </div>

                  <div className="pt-4 border-t border-[rgba(182,110,46,0.15)] flex justify-end gap-4">
                    <button 
                      type="button" 
                      onClick={() => setSelectedJob(null)}
                      className="px-6 py-3 rounded-full text-sm font-medium tracking-wider text-text-muted hover:text-text hover:bg-surface transition-colors"
                    >
                      Annuler
                    </button>
                    <Button type="submit">
                      Envoyer ma candidature
                    </Button>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
