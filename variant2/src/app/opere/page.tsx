"use client";

import { useState } from "react";
import { IMAGES, GalleryItem } from "@/lib/images";
import { X, Maximize2, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-primary">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.5 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${IMAGES.hero.opere})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-transparent to-primary" />
        <div className="container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="space-y-8"
          >
            <span className="text-secondary text-xs font-bold uppercase tracking-[0.4em] block">Portfolio Progetti</span>
            <h1 className="text-white text-6xl md:text-8xl lg:text-9xl font-black italic tracking-tighter serif">
              Le Nostre <br /><span className="text-secondary font-normal serif not-italic">Opere.</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* GALLERY GRID - MASONRY FEEL */}
      <section className="section-padding bg-bg-warm">
        <div className="container">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-10 space-y-10">
            {IMAGES.gallery.map((item, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="relative group cursor-pointer overflow-hidden rounded-[2.5rem] shadow-lg hover:shadow-2xl transition-all duration-700 break-inside-avoid bg-white border border-primary/5"
                onClick={() => setSelectedImage(item)}
              >
                <img 
                  src={item.src} 
                  alt={item.title} 
                  className="w-full h-auto object-cover transition-transform duration-[1.5s] group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-10">
                  <span className="text-secondary text-[10px] font-black uppercase tracking-[0.3em] mb-3 block transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{item.category}</span>
                  <h3 className="text-white text-2xl font-black italic serif transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">{item.title}</h3>
                  <div className="mt-6 w-12 h-12 rounded-full bg-secondary text-white flex items-center justify-center transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-150 shadow-lg group-hover:rotate-90">
                    <Maximize2 size={20} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-primary/95 backdrop-blur-xl flex items-center justify-center p-6 md:p-20"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-10 right-10 p-4 rounded-full bg-white/5 text-white/50 hover:text-white hover:bg-white/10 transition-all duration-300 z-[210] group"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} className="group-hover:rotate-90 transition-transform" />
            </button>
            
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="max-w-6xl w-full space-y-10 relative" 
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative rounded-[3rem] overflow-hidden shadow-2xl bg-primary/20 aspect-video md:aspect-auto">
                <img 
                  src={selectedImage.src} 
                  alt={selectedImage.title} 
                  className="w-full h-full max-h-[75vh] object-contain" 
                />
              </div>
              <div className="text-center space-y-4">
                <span className="text-secondary text-xs font-black uppercase tracking-[0.4em] block">{selectedImage.category}</span>
                <h2 className="text-white text-4xl md:text-6xl font-black italic serif tracking-tight">{selectedImage.title}</h2>
                <div className="w-20 h-[1px] bg-secondary/30 mx-auto mt-8" />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA */}
      <section className="section-padding bg-white">
        <div className="container text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-[900px] mx-auto space-y-10"
          >
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-none">Vuoi vedere un <br /><span className="serif italic font-normal text-primary">sopralluogo dal vivo?</span></h2>
            <p className="text-xl text-text-muted max-w-[600px] mx-auto font-medium leading-relaxed">
              Contattaci per scoprire i nostri cantieri attivi e toccare con mano la qualità del nostro lavoro artigianale.
            </p>
            <Link 
              href="/contatti" 
              className="inline-flex items-center gap-6 bg-primary text-white px-12 py-6 rounded-full font-black uppercase tracking-widest hover:bg-secondary transition-all shadow-xl hover:-translate-y-1"
            >
              <span>Contattaci ora</span>
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
