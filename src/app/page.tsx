"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, ArrowRight, Play, Award, Zap, Heart } from "lucide-react";
import { motion } from "framer-motion";
import { COMPANY, SERVICES, BENEFITS } from "@/lib/data";
import { IMAGES } from "@/lib/images";
import ServiceCard from "@/components/ServiceCard";
import Modal from "@/components/Modal";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import Image from "next/image";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function Home() {
  const [selectedService, setSelectedService] = useState<any>(null);

  return (
    <div className="bg-white">
      {/* HERO SECTION */}
      <section className="relative h-screen min-h-[750px] flex items-center overflow-hidden bg-primary">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.6 }}
          transition={{ duration: 2.5, ease: "easeOut" }}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${IMAGES.hero.home})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/40 to-transparent" />
        
        <div className="container relative z-10">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-[850px]"
          >
            <motion.div variants={itemVariants} className="flex items-center gap-4 mb-8">
              <div className="w-12 h-[1px] bg-secondary" />
              <span className="text-white/60 text-[11px] font-bold uppercase tracking-[0.4em]">
                {COMPANY.nameShort} &bull; Dal 1990
              </span>
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="text-white text-6xl md:text-8xl lg:text-9xl font-black mb-8 leading-[0.9] tracking-tighter text-balance">
              L&apos;Arte di <br />
              <span className="italic font-normal serif text-secondary">Costruire</span> <br />
              il Benessere.
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-white/70 text-lg md:text-2xl font-medium italic mb-12 max-w-[650px] leading-relaxed font-serif">
              &ldquo;Trasformiamo ogni abitazione in un ambiente salubre, unendo la tradizione artigiana veneta alle più moderne tecnologie sostenibili.&rdquo;
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-wrap gap-8 items-center">
              <Link 
                href="/contatti" 
                className="bg-cta text-white px-12 py-6 text-sm font-bold uppercase tracking-[0.2em] rounded-full hover:bg-cta-hover transition-all hover:-translate-y-1 active:scale-95"
              >
                Sopralluogo gratuito
              </Link>
              <Link 
                href="/servizi" 
                className="group flex items-center gap-4 text-white text-sm font-bold uppercase tracking-widest hover:text-secondary transition-colors"
              >
                <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center group-hover:border-secondary transition-colors">
                  <Play size={16} className="fill-current ml-1" />
                </div>
                Scopri i servizi
              </Link>
            </motion.div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-white/30"
        >
          <span className="text-[9px] font-bold uppercase tracking-[0.3em]">Scorri</span>
          <div className="w-[1px] h-20 bg-gradient-to-b from-white/30 to-transparent" />
        </motion.div>
      </section>

      <section className="section-padding bg-bg-warm overflow-hidden">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
            <div className="lg:col-span-7 relative">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl aspect-[16/10]"
              >
                <Image src={IMAGES.about.history} alt="Storia" fill className="object-cover" />
                <div className="absolute inset-0 bg-primary/10" />
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
                className="absolute -bottom-10 -right-10 w-64 h-64 bg-secondary rounded-[2.5rem] p-10 flex flex-col justify-end text-white shadow-2xl z-20 hidden md:flex"
              >
                <Award size={48} className="mb-4" />
                <p className="text-4xl font-black italic leading-none">30+</p>
                <p className="text-xs font-bold uppercase tracking-widest opacity-80">Anni di Esperienza</p>
              </motion.div>
            </div>
            
            <div className="lg:col-span-5 space-y-10">
              <div className="space-y-6">
                <motion.span className="text-secondary text-xs font-bold uppercase tracking-[0.3em] block">La Nostra Eredità</motion.span>
                <motion.h2 className="text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight">Oltre le mura, <br /><span className="serif italic font-normal text-primary">creiamo futuro.</span></motion.h2>
              </div>
              <motion.div className="space-y-6 text-lg text-text-muted leading-relaxed font-medium">
                <p>Siamo un&apos;impresa di famiglia radicata nel territorio veneziano. Dal 1990, trasformiamo la visione dei nostri clienti in realtà tangibili.</p>
              </motion.div>
              <Link href="/chi-siamo" className="inline-flex items-center gap-6 group">
                <span className="text-sm font-black uppercase tracking-widest text-primary group-hover:text-secondary transition-colors">Scopri di più</span>
                <div className="w-12 h-12 rounded-full border border-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                  <ArrowRight size={18} />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white relative">
        <div className="container relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-24">
            <div className="max-w-[700px] space-y-6">
              <span className="text-secondary text-xs font-bold uppercase tracking-[0.3em] block">Eccellenza</span>
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.95]">I Nostri Servizi.</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20">
            {SERVICES.map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-48 lg:py-64 flex items-center justify-center overflow-hidden bg-primary">
        <motion.div 
          initial={{ y: "-10%" }}
          whileInView={{ y: "10%" }}
          transition={{ duration: 2, ease: "linear" }}
          className="absolute inset-0 opacity-40 bg-cover bg-center"
          style={{ backgroundImage: `url(${IMAGES.testimonial.bg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary via-transparent to-primary" />
        <div className="container relative z-10 text-center">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="max-w-[1000px] mx-auto space-y-12">
            <div className="w-24 h-[2px] bg-secondary mx-auto" />
            <p className="text-white text-4xl md:text-6xl lg:text-7xl font-serif font-bold italic leading-[1.1] tracking-tight text-balance">
              &ldquo;Donato è sempre presente in cantiere, garantendo precisione artigianale in ogni singolo dettaglio.&rdquo;
            </p>
            <div className="space-y-3">
              <p className="text-secondary text-xl font-black uppercase tracking-[0.2em]">Crivellari Avellino</p>
              <p className="text-white/40 text-xs font-bold uppercase tracking-[0.4em]">Proprietario &bull; Calcroci di Camponogara</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-bg-warm">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 bg-white rounded-[3rem] overflow-hidden shadow-2xl border border-primary/5">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="p-12 lg:p-24 space-y-10">
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 rounded-2xl bg-bg-warm p-4 flex items-center justify-center relative overflow-hidden">
                  <Image src={IMAGES.materials.izonil} alt="Izonil" width={80} height={80} className="object-contain" />
                </div>
                <h3 className="text-4xl font-black italic serif text-primary">IZONIL&reg;</h3>
              </div>
              <p className="text-xl text-text-muted leading-relaxed font-medium">
                La rivoluzione del risanamento. Una membrana minerale che respira ma blocca l&apos;acqua. Esclusività tecnica per una casa finalmente asciutta e protetta.
              </p>
              <Link href="/servizi/materiali" className="inline-flex items-center gap-4 text-xs font-black uppercase tracking-[0.3em] text-secondary group">
                Scopri la tecnologia 
                <div className="w-10 h-10 rounded-full border border-secondary/20 flex items-center justify-center group-hover:bg-secondary group-hover:text-white transition-all">
                  <ArrowRight size={14} />
                </div>
              </Link>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-primary p-12 lg:p-24 space-y-10 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-secondary opacity-5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                  <Zap size={40} className="text-secondary" />
                </div>
                <h3 className="text-4xl font-black italic serif text-secondary">Basalto</h3>
              </div>
              <p className="text-xl text-white/70 leading-relaxed font-medium">
                L&apos;isolamento del futuro. Pannelli in fibra di basalto: naturali, ignifughi e dalle prestazioni termiche ineguagliabili. Per chi non accetta compromessi.
              </p>
              <Link href="/servizi/materiali" className="inline-flex items-center gap-4 text-xs font-black uppercase tracking-[0.3em] text-secondary group">
                I vantaggi esclusivi 
                <div className="w-10 h-10 rounded-full border border-secondary/20 flex items-center justify-center group-hover:bg-secondary group-hover:text-white transition-all">
                  <ArrowRight size={14} />
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white relative">
        <div className="container">
          <div className="text-center max-w-[800px] mx-auto mb-24 space-y-6">
            <span className="text-secondary text-xs font-bold uppercase tracking-[0.3em] block">Qualità di Vita</span>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter">Perché scegliere la <br /><span className="serif italic font-normal text-primary">Casa Salubre.</span></h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-20">
            {BENEFITS.map((benefit, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="group p-8 rounded-[2.5rem] hover:bg-bg-warm transition-all duration-500 border border-transparent hover:border-primary/5">
                <div className="w-16 h-16 rounded-2xl bg-bg-warm flex items-center justify-center text-secondary mb-8 shadow-sm group-hover:bg-secondary group-hover:text-white group-hover:scale-110 transition-all duration-500">
                  <Check size={28} />
                </div>
                <div className="space-y-4">
                  <h4 className="text-2xl font-black italic serif text-text-dark">{benefit.title}</h4>
                  <p className="text-text-muted leading-relaxed font-medium">{benefit.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-bg-warm">
        <div className="container">
          <div className="text-center mb-24 space-y-6">
            <span className="text-secondary text-xs font-bold uppercase tracking-[0.3em] block">Recensioni</span>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter">Cosa dicono di noi.</h2>
          </div>
          <TestimonialCarousel />
        </div>
      </section>

      <section className="relative py-32 lg:py-48 overflow-hidden bg-primary">
        <motion.div 
          initial={{ scale: 1.2 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 opacity-30 bg-cover bg-center"
          style={{ backgroundImage: `url(${IMAGES.hero.home})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-primary/40" />
        
        <div className="container relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-[900px] mx-auto space-y-12">
            <h2 className="text-white text-5xl md:text-7xl lg:text-8xl font-black leading-[1] tracking-tighter text-balance">
              Pronto a trasformare la tua <span className="serif italic font-normal text-secondary underline underline-offset-8">Visione?</span>
            </h2>
            <p className="text-white/60 text-lg md:text-xl font-medium max-w-[650px] mx-auto leading-relaxed">
              Consulenza gratuita, sopralluogo tecnico e preventivo personalizzato. Inizia oggi il viaggio verso la tua nuova casa salubre.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-8 items-center pt-8">
              <Link href="/contatti" className="bg-cta text-white px-16 py-7 text-sm font-bold uppercase tracking-[0.3em] rounded-full hover:bg-cta-hover transition-all shadow-xl hover:-translate-y-2 active:scale-95">
                Contattaci ora
              </Link>
              <a href={`tel:${COMPANY.phone}`} className="text-white text-lg font-black italic flex items-center gap-3 hover:text-secondary transition-colors">
                <Heart size={20} className="fill-secondary text-secondary" />
                {COMPANY.phone}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Modal isOpen={!!selectedService} onClose={() => setSelectedService(null)}>
        {selectedService && (
          <div className="flex flex-col lg:flex-row h-full">
            <div className="lg:w-[45%] h-[350px] lg:h-auto relative">
              <Image src={selectedService.image} alt={selectedService.title} fill className="object-cover" />
              <div className="absolute inset-0 bg-primary/20" />
              <div className="absolute bottom-10 left-10 p-8 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl max-w-[250px] hidden md:block">
                <span className="text-secondary text-[10px] font-black uppercase tracking-[0.3em] block mb-2">Servizio 0{SERVICES.indexOf(selectedService) + 1}</span>
                <p className="text-text-dark font-black italic serif text-lg">{selectedService.title}</p>
              </div>
            </div>
            <div className="lg:w-[55%] p-10 lg:p-20 space-y-10 overflow-y-auto">
              <div className="space-y-6">
                <span className="text-secondary text-xs font-bold uppercase tracking-[0.3em] block">Scheda Tecnica</span>
                <h2 className="text-4xl md:text-5xl font-black tracking-tighter leading-tight italic serif text-primary">{selectedService.title}</h2>
              </div>
              <p className="text-xl text-text-muted leading-relaxed font-medium">{selectedService.fullDesc}</p>
              <div className="space-y-6 pt-6">
                <h4 className="text-sm font-black uppercase tracking-[0.2em] text-primary flex items-center gap-3">
                  <div className="w-8 h-[1px] bg-secondary" />
                  Dettagli
                </h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {selectedService.details.map((detail: string, i: number) => (
                    <li key={i} className="flex gap-4 items-start group">
                      <div className="w-6 h-6 rounded-full bg-bg-warm flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-colors flex-shrink-0 mt-1">
                        <Check size={14} />
                      </div>
                      <span className="text-base text-text-body font-medium">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-12 border-t border-bg-warm flex flex-col sm:flex-row items-center gap-8">
                <Link href="/contatti" className="bg-primary text-white px-10 py-5 text-[11px] font-black uppercase tracking-[0.2em] rounded-full hover:bg-secondary transition-all shadow-lg active:scale-95">
                  Contattaci
                </Link>
                <a href={`tel:${COMPANY.phone}`} className="text-primary font-black uppercase tracking-widest text-xs hover:text-secondary transition-colors">
                  {COMPANY.phone}
                </a>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
