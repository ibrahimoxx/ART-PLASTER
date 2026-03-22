"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Send, MapPin, Phone, Mail, Clock, CheckCircle2 } from "lucide-react";
import { companyInfo } from "@/lib/data";
import { staggerContainer, fadeUpVariant } from "@/lib/utils";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";

export default function ContactSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section className="section-padding bg-background relative" id="contact">
      {/* Decorative background lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(182,110,46,0.5) 1px, transparent 1px)", backgroundSize: "100px 100px" }} />

      <div className="container-custom relative z-10">
        <SectionHeader
          overline="Démarrer un Projet"
          title="Contactez"
          titleHighlight="Nos Équipes"
          subtitle="Une idée, un projet de rénovation ou de construction ? Nos experts sont à votre disposition pour étudier votre demande et vous proposer un devis sur mesure."
          centered
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mt-16 max-w-6xl mx-auto">
          {/* Left: Contact Info */}
          <motion.div
            ref={ref}
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            <motion.div variants={fadeUpVariant} className="glass p-8 rounded-3xl border border-primary/20 hover:border-primary/40 transition-colors duration-300">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <MapPin size={24} className="text-primary-light" />
              </div>
              <h3 className="font-heading font-bold text-lg text-text mb-2">Siège Social</h3>
              <p className="text-text-muted leading-relaxed">{companyInfo.address}</p>
            </motion.div>

            <motion.div variants={fadeUpVariant} className="glass p-8 rounded-3xl border border-primary/20 hover:border-primary/40 transition-colors duration-300 flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-surface-2 border border-primary/10 flex items-center justify-center shrink-0">
                  <Phone size={18} className="text-primary" />
                </div>
                <div>
                  <div className="text-[0.65rem] tracking-wider text-text-dim uppercase mb-1">Téléphone</div>
                  <a href={`tel:${companyInfo.phone}`} className="font-medium text-text hover:text-primary-light transition-colors">{companyInfo.phone}</a>
                </div>
              </div>

              <div className="w-full h-px bg-[rgba(182,110,46,0.1)]" />

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-surface-2 border border-primary/10 flex items-center justify-center shrink-0">
                  <Mail size={18} className="text-primary" />
                </div>
                <div>
                  <div className="text-[0.65rem] tracking-wider text-text-dim uppercase mb-1">Email</div>
                  <a href={`mailto:${companyInfo.email}`} className="font-medium text-text hover:text-primary-light transition-colors">{companyInfo.email}</a>
                </div>
              </div>

              <div className="w-full h-px bg-[rgba(182,110,46,0.1)]" />

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-surface-2 border border-primary/10 flex items-center justify-center shrink-0">
                  <Clock size={18} className="text-primary" />
                </div>
                <div>
                  <div className="text-[0.65rem] tracking-wider text-text-dim uppercase mb-1">Horaires</div>
                  <div className="font-medium text-text">{companyInfo.hours}</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-7"
          >
            <div className="glass p-8 md:p-12 rounded-3xl border border-primary/20 shadow-glow relative overflow-hidden">
              {/* Decorative top glow */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

              <h3 className="font-heading font-bold text-2xl text-text mb-8">Demander un Devis</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative group">
                    <input type="text" id="name" required className="form-input peer" placeholder=" " />
                    <label htmlFor="name" className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted transition-all duration-300 pointer-events-none peer-focus:top-3 peer-focus:text-[0.65rem] peer-focus:text-primary-light peer-focus:-translate-y-0 peer-valid:top-3 peer-valid:text-[0.65rem] peer-valid:-translate-y-0">
                      Nom complet *
                    </label>
                  </div>
                  <div className="relative group">
                    <input type="email" id="email" required className="form-input peer" placeholder=" " />
                    <label htmlFor="email" className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted transition-all duration-300 pointer-events-none peer-focus:top-3 peer-focus:text-[0.65rem] peer-focus:text-primary-light peer-focus:-translate-y-0 peer-valid:top-3 peer-valid:text-[0.65rem] peer-valid:-translate-y-0">
                      Adresse email *
                    </label>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative group">
                    <input type="tel" id="phone" className="form-input peer" placeholder=" " />
                    <label htmlFor="phone" className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted transition-all duration-300 pointer-events-none peer-focus:top-3 peer-focus:text-[0.65rem] peer-focus:text-primary-light peer-focus:-translate-y-0 peer-[&:not(:placeholder-shown)]:top-3 peer-[&:not(:placeholder-shown)]:text-[0.65rem] peer-[&:not(:placeholder-shown)]:-translate-y-0">
                      Téléphone
                    </label>
                  </div>
                  <div className="relative group">
                    <select id="service" required className="form-input appearance-none text-text-muted peer focus:text-text">
                      <option value="" disabled selected>Service souhaité *</option>
                      <option value="enduits">Enduits Décoratifs</option>
                      <option value="plafonds">Plafonds Ornementaux</option>
                      <option value="renovation">Rénovation Patrimoine</option>
                      <option value="hotellerie">Construction Hôtelière</option>
                      <option value="residentiel">Résidence Privée</option>
                    </select>
                  </div>
                </div>

                <div className="relative group">
                  <textarea id="message" required rows={5} className="form-input peer resize-none py-4" placeholder=" " />
                  <label htmlFor="message" className="absolute left-4 top-6 -translate-y-1/2 text-text-muted transition-all duration-300 pointer-events-none peer-focus:top-3 peer-focus:text-[0.65rem] peer-focus:text-primary-light peer-focus:-translate-y-0 peer-valid:top-3 peer-valid:text-[0.65rem] peer-valid:-translate-y-0">
                    Parlez-nous de votre projet *
                  </label>
                </div>

                <Button 
                  type="submit" 
                  fullWidth 
                  loading={isSubmitting} 
                  icon={!isSuccess}
                  className={isSuccess ? "bg-teal hover:bg-teal-light !border-transparent text-white" : ""}
                >
                  {isSuccess ? "Message Envoyé avec Succès !" : "Envoyer la Demande"}
                </Button>

                <AnimatePresence>
                  {isSuccess && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.3 }}
                      className="flex items-center gap-2 mt-3 text-sm text-teal-light"
                    >
                      <CheckCircle2 size={16} />
                      <span>Message envoyé ! Nous vous répondrons dans les 24h.</span>
                    </motion.div>
                  )}
                </AnimatePresence>
                
                <p className="text-[0.65rem] text-text-dim text-center mt-4 tracking-wider">
                  Vos données sont protégées. Nous vous répondrons sous 24 à 48 heures.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
