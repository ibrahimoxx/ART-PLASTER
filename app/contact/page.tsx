"use client";

import { motion } from "framer-motion";
import ContactSection from "@/components/sections/ContactSection";

export default function ContactPage() {
  return (
    <>
      {/* Header Space */}
      <div className="pt-32 pb-10 lg:pt-48 lg:pb-16 bg-surface-2 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(182,110,46,0.5) 1px, transparent 1px)", backgroundSize: "100px 100px" }} />
        
        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          >
            <span className="inline-block px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-6 text-[0.7rem] tracking-[0.2em] text-primary-light uppercase font-body shadow-glow">
              Discutons de vos Invidualités
            </span>
            <h1 className="font-heading font-extrabold text-display-xl text-text leading-tight">
              Contact <span className="text-gold-gradient">Direct</span>
            </h1>
          </motion.div>
        </div>
      </div>

      {/* Main Contact Section component */}
      <ContactSection />

      {/* Map Section */}
      <section className="h-[400px] lg:h-[500px] w-full relative bg-surface-2 overflow-hidden border-t border-[rgba(182,110,46,0.1)]">
        {/* Placeholder for actual Google Map iframe */}
        <div className="absolute inset-0 bg-background/50 backdrop-blur-sm flex flex-col items-center justify-center z-10 transition-opacity duration-500 hover:opacity-0">
          <div className="glass p-6 rounded-2xl border border-primary/20 text-center max-w-sm">
            <h3 className="font-heading font-bold text-xl text-text mb-2">ART PLASTER — Siège Social</h3>
            <p className="text-sm text-text-muted">
              Avenue Ali Bnou Abi Taleb, Sect C, Imm 15 (GH/5)<br/>
              Magasin N°6, Hay Rahma, Salé, Maroc
            </p>
            <p className="text-sm text-text-muted mt-2 font-medium">06.62.37.40.34</p>
            <p className="text-[0.65rem] tracking-wider text-primary-light uppercase mt-4">Cliquez pour voir la carte</p>
          </div>
        </div>
        
        {/* Mapbox / Google Maps Static Image Fallback */}
        <img 
          src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2000&auto=format&fit=crop" 
          alt="Carte Hay Rahma Salé Maroc" 
          className="w-full h-full object-cover opacity-30 filter grayscale sepia-[0.3]"
        />
      </section>
    </>
  );
}
