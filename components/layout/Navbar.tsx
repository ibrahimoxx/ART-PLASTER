"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Menu, X, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "À Propos" },
  { href: "/careers", label: "Carrières" },
  { href: "/contact", label: "Contact" },
];

// Geometric hexagon logo
function HexLogo({ className }: { className?: string }) {
  return (
    <svg
      width="36"
      height="40"
      viewBox="0 0 36 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M18 0L36 10V30L18 40L0 30V10L18 0Z"
        fill="url(#hexGrad)"
      />
      <path
        d="M18 8L28 14V26L18 32L8 26V14L18 8Z"
        fill="rgba(14,12,10,0.6)"
      />
      <path
        d="M18 14L22 16.5V21.5L18 24L14 21.5V16.5L18 14Z"
        fill="url(#hexGrad)"
        opacity="0.9"
      />
      <defs>
        <linearGradient id="hexGrad" x1="0" y1="0" x2="36" y2="40" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#C9A96E" />
          <stop offset="50%" stopColor="#B66E2E" />
          <stop offset="100%" stopColor="#8B4F1A" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const mobileMenuVariants = {
    closed: { x: "100%", opacity: 0 },
    open: { x: 0, opacity: 1, transition: { type: "tween", ease: [0.4, 0, 0.2, 1], duration: 0.45 } },
    exit: { x: "100%", opacity: 0, transition: { type: "tween", ease: [0.4, 0, 0.2, 1], duration: 0.35 } },
  };

  const linkVariants = {
    closed: { x: 30, opacity: 0 },
    open: (i: number) => ({
      x: 0,
      opacity: 1,
      transition: { delay: 0.1 + i * 0.07, type: "tween", ease: [0.4, 0, 0.2, 1], duration: 0.4 },
    }),
  };

  return (
    <>
      {/* Scroll Progress */}
      <motion.div
        className="scroll-progress"
        style={{ scaleX: scrollYProgress }}
      />

      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-[9980] transition-all duration-500",
          scrolled
            ? "py-3 bg-[rgba(14,12,10,0.92)] backdrop-blur-xl border-b border-[rgba(182,110,46,0.15)] shadow-[0_4px_30px_rgba(0,0,0,0.4)]"
            : "py-5 bg-transparent"
        )}
      >
        <div className="container-custom flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group" onClick={() => setIsOpen(false)}>
            <HexLogo className="transition-transform duration-500 group-hover:rotate-[30deg]" />
            <div className="flex flex-col leading-none">
              <span className="font-heading font-bold text-[1.1rem] tracking-[0.2em] text-gold-gradient uppercase">
                ART PLASTER
              </span>
              <span className="text-[0.55rem] tracking-[0.35em] text-text-muted uppercase font-body">
                Artisanat de Prestige
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "nav-link font-body text-[0.875rem] tracking-[0.08em] uppercase transition-colors duration-200",
                  pathname === link.href
                    ? "text-primary-light active"
                    : "text-text-muted hover:text-text"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/contact"
              className="group relative flex items-center gap-2 bg-primary hover:bg-primary-dark text-text text-[0.8125rem] font-medium tracking-[0.1em] uppercase px-6 py-3 rounded-full transition-all duration-300 hover:shadow-glow overflow-hidden"
            >
              <span className="relative z-10">Devis Gratuit</span>
              <ChevronRight size={14} className="relative z-10 transition-transform duration-200 group-hover:translate-x-1" />
              {/* Shimmer effect */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsOpen((v) => !v)}
            className="lg:hidden relative z-[9991] w-11 h-11 flex items-center justify-center rounded-full border border-[rgba(182,110,46,0.3)] transition-colors duration-300 hover:bg-surface-2"
            aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <X size={20} className="text-primary-light" />
                </motion.div>
              ) : (
                <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <Menu size={20} className="text-text-muted" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="exit"
            className="fixed inset-0 z-[9985] flex flex-col bg-background"
          >
            {/* Decorative gradient */}
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-primary/10 blur-[80px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-teal/10 blur-[60px] pointer-events-none" />

            <div className="flex-1 container-custom flex flex-col justify-center gap-2 pt-24">
              {navLinks.map((link, i) => (
                <motion.div key={link.href} custom={i} variants={linkVariants} initial="closed" animate="open">
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "flex items-center justify-between py-5 border-b border-[rgba(182,110,46,0.15)] group",
                      pathname === link.href ? "text-primary-light" : "text-text"
                    )}
                  >
                    <span className="font-heading text-[1.75rem] font-bold tracking-tight">{link.label}</span>
                    <ChevronRight
                      size={22}
                      className="text-primary opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:translate-x-1"
                    />
                  </Link>
                </motion.div>
              ))}

              {/* Mobile CTA */}
              <motion.div
                custom={navLinks.length}
                variants={linkVariants}
                initial="closed"
                animate="open"
                className="mt-8"
              >
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 w-full bg-primary text-text text-[0.875rem] font-medium tracking-wider uppercase px-8 py-4 rounded-2xl hover:bg-primary-dark transition-colors duration-300"
                >
                  Demander un Devis Gratuit
                </Link>
              </motion.div>
            </div>

            {/* Mobile footer */}
            <div className="container-custom pb-8">
              <p className="text-text-dim text-xs tracking-wider">
                contact@artplaster.ma · +212 537 74 00 00
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
