"use client";

import { useState, useEffect } from "react";
import { TESTIMONIALS } from "@/lib/data";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function TestimonialCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  const prev = () => setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  useEffect(() => {
    const timer = setInterval(next, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative max-w-[900px] mx-auto">
      <div className="overflow-hidden">
        <div 
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="min-w-full px-4">
              <div className="bg-white p-10 sm:p-16 rounded-3xl shadow-[var(--shadow-warm)] relative text-center">
                <Quote size={60} className="absolute top-10 left-10 text-[var(--accent-tint)] -z-0" />
                <div className="relative z-10">
                  <div className="flex justify-center gap-1 mb-6">
                    {[...Array(t.stars)].map((_, si) => (
                      <Star key={si} size={18} fill="currentColor" className="text-amber-400" />
                    ))}
                  </div>
                  <p className="font-serif text-xl sm:text-2xl font-semibold italic text-[var(--text-dark)] leading-relaxed mb-8">
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <h4 className="text-base font-bold text-[var(--primary)] uppercase tracking-widest">{t.name}</h4>
                  <p className="text-xs text-[var(--text-muted)] uppercase tracking-widest mt-1">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center gap-4 mt-10">
        <button 
          onClick={prev}
          className="w-12 h-12 rounded-full border border-[var(--primary)] text-[var(--primary)] flex items-center justify-center hover:bg-[var(--primary)] hover:text-white transition-all"
        >
          <ChevronLeft size={20} />
        </button>
        <button 
          onClick={next}
          className="w-12 h-12 rounded-full border border-[var(--primary)] text-[var(--primary)] flex items-center justify-center hover:bg-[var(--primary)] hover:text-white transition-all"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      <div className="flex justify-center gap-2 mt-6">
        {TESTIMONIALS.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className={cn(
              "w-2 h-2 rounded-full transition-all",
              activeIndex === i ? "w-8 bg-[var(--secondary)]" : "bg-[var(--primary)]/20"
            )}
          />
        ))}
      </div>
    </div>
  );
}
