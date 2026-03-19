"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "@/lib/data";
import { cn } from "@/lib/utils";
import SectionHeader from "@/components/ui/SectionHeader";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const next = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [isAutoPlaying, next]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      z: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      z: 0,
      x: direction < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  return (
    <section className="section-padding bg-surface-2 border-y border-[rgba(182,110,46,0.1)] overflow-hidden" id="testimonials">
      <div className="container-custom">
        <SectionHeader
          overline="Ce Que Disent Nos Clients"
          title="Leurs Recommandations"
          titleHighlight="Signent Notre Succès"
          centered
        />

        <div 
          className="relative max-w-4xl mx-auto h-[400px] md:h-[300px]"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Main card */}
          <div className="absolute inset-0 flex items-center justify-center">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="w-full glass p-8 md:p-12 rounded-3xl border border-primary/20 shadow-glow relative"
              >
                {/* Decorative quote icon */}
                <div className="absolute top-8 right-8 text-primary/10">
                  <Quote size={80} className="rotate-180" />
                </div>

                <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center md:items-start text-center md:text-left">
                  {/* Left: Avatar & Info */}
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-primary mb-4 p-1">
                      <div className="w-full h-full rounded-full overflow-hidden">
                        <img 
                          src={testimonials[currentIndex].avatar} 
                          alt={testimonials[currentIndex].author}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="font-heading font-bold text-lg text-text">
                      {testimonials[currentIndex].author}
                    </div>
                    <div className="text-[0.65rem] tracking-wider text-primary-light uppercase mb-1">
                      {testimonials[currentIndex].role}
                    </div>
                    <div className="text-xs text-text-dim">
                      {testimonials[currentIndex].company}
                    </div>
                  </div>

                  {/* Right: Quote & Rating */}
                  <div className="flex-1 flex flex-col pt-2">
                    <div className="flex items-center justify-center md:justify-start gap-1 mb-4">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <Star key={i} size={16} className="fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-lg md:text-xl text-text-muted leading-relaxed font-body italic mb-6">
                      "{testimonials[currentIndex].quote}"
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between z-20 pointer-events-none">
            <button
              onClick={(e) => { e.preventDefault(); prev(); }}
              className="w-12 h-12 rounded-full glass border border-primary/30 flex items-center justify-center text-primary-light hover:bg-primary hover:text-white transition-all duration-300 pointer-events-auto -translate-x-1/2"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={(e) => { e.preventDefault(); next(); }}
              className="w-12 h-12 rounded-full glass border border-primary/30 flex items-center justify-center text-primary-light hover:bg-primary hover:text-white transition-all duration-300 pointer-events-auto translate-x-1/2"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
        
        {/* Pagination Dots */}
        <div className="flex justify-center gap-3 mt-12">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={cn(
                "w-2.5 h-2.5 rounded-full transition-all duration-300",
                idx === currentIndex ? "bg-primary-light w-8" : "bg-surface-2 border border-primary/30"
              )}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
