"use client";

import { partners } from "@/lib/data";

export default function Partners() {
  const doubled = [...partners, ...partners];

  return (
    <section className="py-12 bg-background border-y border-[rgba(182,110,46,0.1)] overflow-hidden">
      <div className="container-custom">
        <div className="text-center mb-8">
          <span className="text-[0.6rem] font-semibold tracking-[0.2em] uppercase text-text-dim">
            Ils nous font confiance
          </span>
        </div>

        <div className="relative">
          {/* Fades */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />

          {/* Track */}
          <div 
            className="flex items-center w-max"
            style={{ animation: "marquee 40s linear infinite" }}
          >
            {doubled.map((partner, i) => (
              <div 
                key={`${partner.slug}-${i}`} 
                className="flex items-center justify-center w-[160px] md:w-[200px] shrink-0 mx-4 opacity-50 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0 cursor-pointer"
              >
                {/* Fallback to text since we don't have logo SVGs yet */}
                <span className="font-heading font-bold text-lg text-text-muted tracking-wider">
                  {partner.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
