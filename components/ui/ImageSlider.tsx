"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ImageSliderProps {
  images: string[];
  alt: string;
  className?: string;
  autoPlay?: boolean;
  interval?: number;
}

export default function ImageSlider({
  images,
  alt,
  className = "",
  autoPlay = true,
  interval = 3500,
}: ImageSliderProps) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    if (!autoPlay || images.length <= 1) return;
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [autoPlay, images.length, interval]);

  const prev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  const next = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % images.length);
  };

  if (!images || images.length === 0) return null;
  if (images.length === 1) {
    return (
      <img
        src={images[0]}
        alt={alt}
        className={`w-full h-full object-cover ${className}`}
        loading="lazy"
      />
    );
  }

  return (
    <div className={`relative overflow-hidden group ${className}`}>
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          key={current}
          src={images[current]}
          alt={`${alt} ${current + 1}`}
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
          custom={direction}
          initial={{ x: direction * 100 + "%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: direction * -100 + "%", opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        />
      </AnimatePresence>

      {/* Navigation arrows */}
      <button
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-background/70 backdrop-blur-sm border border-primary/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-primary/20"
        aria-label="Image précédente"
      >
        <ChevronLeft size={14} className="text-primary-light" />
      </button>
      <button
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-background/70 backdrop-blur-sm border border-primary/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-primary/20"
        aria-label="Image suivante"
      >
        <ChevronRight size={14} className="text-primary-light" />
      </button>

      {/* Dots indicator */}
      {images.length > 1 && images.length <= 10 && (
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-10 flex gap-1">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
              className={`rounded-full transition-all duration-300 ${
                i === current
                  ? "w-4 h-1.5 bg-primary"
                  : "w-1.5 h-1.5 bg-white/50 hover:bg-white/80"
              }`}
              aria-label={`Image ${i + 1}`}
            />
          ))}
        </div>
      )}

      {/* Counter for many images */}
      {images.length > 10 && (
        <div className="absolute bottom-2 right-2 z-10 bg-background/70 backdrop-blur-sm px-2 py-1 rounded-full text-[0.6rem] text-text-muted border border-primary/10">
          {current + 1}/{images.length}
        </div>
      )}
    </div>
  );
}
