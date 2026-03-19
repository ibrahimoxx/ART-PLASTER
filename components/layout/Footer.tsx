"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Instagram, Facebook, Linkedin, Youtube, MapPin, Phone, Mail, Clock, ChevronRight } from "lucide-react";
import { companyInfo } from "@/lib/data";

// Hexagon logo inline (same as Navbar for consistency)
function HexLogo() {
  return (
    <svg width="30" height="34" viewBox="0 0 36 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18 0L36 10V30L18 40L0 30V10L18 0Z" fill="url(#hexGradF)" />
      <path d="M18 8L28 14V26L18 32L8 26V14L18 8Z" fill="rgba(14,12,10,0.6)" />
      <path d="M18 14L22 16.5V21.5L18 24L14 21.5V16.5L18 14Z" fill="url(#hexGradF)" opacity="0.9" />
      <defs>
        <linearGradient id="hexGradF" x1="0" y1="0" x2="36" y2="40" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#C9A96E" />
          <stop offset="50%" stopColor="#B66E2E" />
          <stop offset="100%" stopColor="#8B4F1A" />
        </linearGradient>
      </defs>
    </svg>
  );
}

const footerServices = [
  { label: "Enduits Décoratifs", href: "/services" },
  { label: "Plafonds Décoratifs", href: "/services" },
  { label: "Rénovation Patrimoine", href: "/services" },
  { label: "Construction Hôtelière", href: "/services" },
  { label: "Espaces Commerciaux", href: "/services" },
  { label: "Résidences Privées", href: "/services" },
];

const footerPortfolio = [
  { label: "Hôtels de Luxe", href: "/portfolio" },
  { label: "Résidences", href: "/portfolio" },
  { label: "Patrimoine & Riads", href: "/portfolio" },
  { label: "Espaces Commerciaux", href: "/portfolio" },
];

const socialLinks = [
  { icon: Instagram, href: companyInfo.socials.instagram, label: "Instagram" },
  { icon: Facebook, href: companyInfo.socials.facebook, label: "Facebook" },
  { icon: Linkedin, href: companyInfo.socials.linkedin, label: "LinkedIn" },
  { icon: Youtube, href: companyInfo.socials.youtube, label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="relative bg-surface border-t border-[rgba(182,110,46,0.15)] overflow-hidden">
      {/* Decorative top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      {/* Background decorative blobs */}
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-primary/5 blur-[100px] pointer-events-none" />
      <div className="absolute top-0 left-0 w-72 h-72 rounded-full bg-teal/5 blur-[80px] pointer-events-none" />

      <div className="container-custom py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

          {/* Column 1: Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-5 group w-fit">
              <HexLogo />
              <div>
                <div className="font-heading font-bold text-sm tracking-[0.2em] text-gold-gradient uppercase">
                  ART PLASTER
                </div>
                <div className="text-[0.5rem] tracking-[0.35em] text-text-muted uppercase">
                  Artisanat de Prestige
                </div>
              </div>
            </Link>
            <p className="text-text-muted text-sm leading-relaxed mb-6 max-w-[280px]">
              Référence marocaine de l'enduit décoratif et du plafond ornemental depuis 2006. Excellence, tradition et innovation.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-xl border border-[rgba(182,110,46,0.2)] flex items-center justify-center text-text-muted hover:text-primary-light hover:border-primary/50 hover:bg-surface-2 transition-all duration-300"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h3 className="font-heading font-bold text-[0.75rem] tracking-[0.2em] text-primary-light uppercase mb-5">
              Services
            </h3>
            <ul className="space-y-3">
              {footerServices.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="group flex items-center gap-2 text-sm text-text-muted hover:text-text transition-colors duration-200"
                  >
                    <ChevronRight size={12} className="text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-200 -ml-2 group-hover:ml-0" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Portfolio */}
          <div>
            <h3 className="font-heading font-bold text-[0.75rem] tracking-[0.2em] text-primary-light uppercase mb-5">
              Portfolio
            </h3>
            <ul className="space-y-3 mb-6">
              {footerPortfolio.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="group flex items-center gap-2 text-sm text-text-muted hover:text-text transition-colors duration-200"
                  >
                    <ChevronRight size={12} className="text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-200 -ml-2 group-hover:ml-0" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="font-heading font-bold text-[0.75rem] tracking-[0.2em] text-primary-light uppercase mb-3">
              Liens
            </h3>
            <ul className="space-y-2">
              {[
                { label: "À Propos", href: "/about" },
                { label: "Carrières", href: "/careers" },
                { label: "Contact", href: "/contact" },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-sm text-text-muted hover:text-text transition-colors duration-200">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="font-heading font-bold text-[0.75rem] tracking-[0.2em] text-primary-light uppercase mb-5">
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={15} className="text-primary mt-0.5 shrink-0" />
                <span className="text-sm text-text-muted leading-relaxed">{companyInfo.address}</span>
              </li>
              <li>
                <a href={`tel:${companyInfo.phone}`} className="flex items-center gap-3 text-sm text-text-muted hover:text-text transition-colors duration-200">
                  <Phone size={15} className="text-primary shrink-0" />
                  {companyInfo.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${companyInfo.email}`} className="flex items-center gap-3 text-sm text-text-muted hover:text-text transition-colors duration-200">
                  <Mail size={15} className="text-primary shrink-0" />
                  {companyInfo.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={15} className="text-primary mt-0.5 shrink-0" />
                <span className="text-sm text-text-muted leading-relaxed">{companyInfo.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-14 pt-6 border-t border-[rgba(182,110,46,0.1)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-text-dim text-xs tracking-wide">
            © {new Date().getFullYear()} ART PLASTER Maroc. Tous droits réservés.
          </p>
          <div className="flex items-center gap-4 text-text-dim text-xs">
            <span>Temara, Maroc</span>
            <span className="w-1 h-1 rounded-full bg-primary/50" />
            <span>ISO 9001 Certifié</span>
            <span className="w-1 h-1 rounded-full bg-primary/50" />
            <span>Membre AMITH</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
