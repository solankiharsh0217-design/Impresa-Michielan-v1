"use client";

import { SERVICES } from "@/lib/data";
import { IMAGES } from "@/lib/images";
import ServiceCard from "@/components/ServiceCard";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="relative h-[70vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-primary">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.5 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${IMAGES.hero.servizi})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-transparent to-primary" />
        
        <div className="container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="space-y-8"
          >
            <span className="text-secondary text-xs font-bold uppercase tracking-[0.4em] block">Competenza Tecnica</span>
            <h1 className="text-white text-6xl md:text-8xl lg:text-9xl font-black italic tracking-tighter serif">
              I Nostri <br /><span className="text-secondary font-normal serif not-italic">Servizi.</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="section-padding bg-bg-warm relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/[0.02] -skew-x-12 translate-x-1/2" />
        
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-6 space-y-8">
              <span className="text-secondary text-xs font-bold uppercase tracking-[0.3em] block">Visione Integrata</span>
              <h2 className="text-5xl md:text-6xl font-black tracking-tighter leading-none">
                L&apos;eccellenza nel <br />
                <span className="serif italic font-normal text-primary">settore edile.</span>
              </h2>
              <p className="text-xl text-text-muted leading-relaxed font-medium">
                Dalla ristrutturazione conservativa alla nuova costruzione bioclimatica, ogni nostro intervento è guidato dalla ricerca della perfezione tecnica e del benessere abitativo.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                {["Qualità Certificata", "Tempi Certi", "Materiali Bio"].map((tag, i) => (
                  <span key={i} className="px-6 py-2 rounded-full bg-white text-[10px] font-black uppercase tracking-widest text-primary shadow-sm border border-primary/5">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="lg:col-span-6">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="rounded-[3rem] overflow-hidden shadow-2xl aspect-square relative"
              >
                <img src={IMAGES.hero.opere} alt="Qualità Michielan" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-primary/20" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-24">
            {SERVICES.map((service, i) => (
              <ServiceCard 
                key={service.id} 
                service={service} 
                index={i} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* INNOVATIVE MATERIALS FOCUS */}
      <section id="materiali" className="section-padding bg-primary text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none" style={{ backgroundImage: `url(${IMAGES.hero.home})`, backgroundSize: 'cover' }} />
        
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
            <div className="lg:col-span-5 order-2 lg:order-1">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-12"
              >
                <div className="space-y-6">
                  <span className="text-secondary text-xs font-bold uppercase tracking-[0.3em] block">Ricerca & Sviluppo</span>
                  <h2 className="text-5xl md:text-6xl font-black tracking-tighter italic serif text-secondary underline underline-offset-8">Materiali Innovativi.</h2>
                  <p className="text-xl text-white/70 leading-relaxed font-medium">
                    Siamo fieri di offrire soluzioni in esclusiva che rappresentano lo stato dell&apos;arte dell&apos;edilizia moderna.
                  </p>
                </div>

                <div className="grid gap-8">
                  <div className="p-10 rounded-[2rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                    <h4 className="text-2xl font-black italic serif mb-4">IZONIL&reg;</h4>
                    <p className="text-white/60 leading-relaxed">
                      La membrana traspirante che rivoluziona il concetto di impermeabilizzazione. Risolviamo l&apos;umidità di risalita alla radice, lasciando respirare le tue pareti.
                    </p>
                  </div>
                  <div className="p-10 rounded-[2rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                    <h4 className="text-2xl font-black italic serif mb-4">Fibra di Basalto</h4>
                    <p className="text-white/60 leading-relaxed">
                      L&apos;isolamento termico e acustico definitivo. Minerale, naturale, incombustibile. Una protezione assoluta per te e per l&apos;ambiente.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
            <div className="lg:col-span-7 order-1 lg:order-2">
              <motion.div 
                initial={{ opacity: 0, scale: 1.1 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5 }}
                className="rounded-[3rem] overflow-hidden shadow-2xl aspect-[16/11]"
              >
                <img src={IMAGES.hero.opere} alt="Materiali Innovativi" className="w-full h-full object-cover" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-bg-warm">
        <div className="container text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-[900px] mx-auto space-y-12"
          >
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-none">Hai un progetto che <br /><span className="serif italic font-normal text-primary">vuoi realizzare?</span></h2>
            <p className="text-xl text-text-muted max-w-[600px] mx-auto font-medium">
              Contattaci oggi stesso per una consulenza tecnica gratuita e un sopralluogo senza impegno.
            </p>
            <Link 
              href="/contatti" 
              className="inline-block bg-cta text-white px-16 py-7 text-sm font-bold uppercase tracking-[0.3em] rounded-full hover:bg-cta-hover transition-all shadow-xl hover:-translate-y-1 active:scale-95"
            >
              Richiedi Preventivo
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
