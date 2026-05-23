"use client";

import { COMPANY } from "@/lib/data";
import { IMAGES } from "@/lib/images";
import { ShieldCheck, Users, History, Heart } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="relative h-[70vh] min-h-[600px] flex items-center overflow-hidden bg-primary">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.5 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${IMAGES.hero.chiSiamo})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-transparent to-primary" />
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-[850px]"
          >
            <span className="text-secondary text-xs font-bold uppercase tracking-[0.4em] block mb-8">Valori di Famiglia</span>
            <h1 className="text-white text-6xl md:text-8xl lg:text-9xl font-black italic tracking-tighter serif leading-none">
              Tradizione <br /><span className="text-secondary font-normal serif not-italic">Veneta.</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* CORE STORY */}
      <section className="section-padding bg-bg-warm relative overflow-hidden">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
            <div className="lg:col-span-6 space-y-12">
              <div className="space-y-6">
                <span className="text-secondary text-xs font-bold uppercase tracking-[0.3em] block">La Nostra Storia</span>
                <h2 className="text-5xl md:text-6xl font-black tracking-tighter leading-none">
                  Trent&apos;anni di <br />
                  <span className="serif italic font-normal text-primary">passione artigiana.</span>
                </h2>
              </div>
              <div className="space-y-8 text-xl text-text-muted leading-relaxed font-medium">
                <p>
                  Impresa Edile Michielan non è solo un&apos;azienda, è la storia di una famiglia che ha scelto di dedicare la propria vita alla creazione di ambienti sani e duraturi. Fondata da Donato Michielan, l&apos;impresa è cresciuta mantenendo intatta l&apos;attenzione al dettaglio che solo un artigiano può garantire.
                </p>
                <p>
                  Oggi operiamo a Scorzè e in tutta la provincia di Venezia, portando innovazione tecnica in ogni cantiere. La nostra specializzazione nel risanamento e nell&apos;efficientamento energetico ci rende il partner ideale per chi vuole una casa che guardi al futuro.
                </p>
              </div>
              
              {/* SOA BADGE PREMIUM */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-8 p-8 bg-white rounded-[2.5rem] shadow-xl border border-primary/5 group"
              >
                <div className="w-20 h-20 rounded-2xl bg-bg-warm flex items-center justify-center p-3 flex-shrink-0 transition-transform duration-500 group-hover:scale-110">
                  <img src={IMAGES.about.soa} alt="SOA23" className="w-full h-auto" />
                </div>
                <div>
                  <h4 className="text-2xl font-black italic serif text-primary">Certificazione SOA23</h4>
                  <p className="text-sm text-text-muted font-bold uppercase tracking-widest mt-1 opacity-60">Attestazione OG1 &bull; Qualità Certificata</p>
                </div>
              </motion.div>
            </div>
            
            <div className="lg:col-span-6 relative">
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="rounded-[3rem] overflow-hidden shadow-2xl aspect-[4/5] relative"
              >
                <img src={IMAGES.about.workshop} alt="Workshop Michielan" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-all" />
              </motion.div>
              {/* Decorative element */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary rounded-full opacity-20 blur-3xl" />
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-primary rounded-full opacity-10 blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY & VALUES */}
      <section className="section-padding bg-white relative">
        <div className="container">
          <div className="text-center max-w-[800px] mx-auto mb-24 space-y-6">
            <span className="text-secondary text-xs font-bold uppercase tracking-[0.3em] block">Il Nostro Metodo</span>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-none">Costruire con <br /><span className="serif italic font-normal text-primary">coscienza e rigore.</span></h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
            {[
              { icon: ShieldCheck, title: "Trasparenza", desc: " Preventivi dettagliati, tempi certi e comunicazione costante in ogni fase del progetto." },
              { icon: History, title: "Artigianalità", desc: "Ogni finitura è curata con la precisione di chi ama il proprio mestiere da generazioni." },
              { icon: Users, title: "Presenza", desc: "Donato è fisicamente presente in ogni cantiere, garantendo supervisione tecnica costante." },
            ].map((value, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group text-center space-y-8 p-10 rounded-[3rem] hover:bg-bg-warm transition-all duration-500"
              >
                <div className="w-24 h-24 rounded-[2rem] bg-bg-warm mx-auto flex items-center justify-center text-secondary shadow-sm group-hover:bg-secondary group-hover:text-white group-hover:scale-110 transition-all duration-500">
                  <value.icon size={40} />
                </div>
                <div className="space-y-4">
                  <h3 className="text-3xl font-black italic serif text-text-dark">{value.title}</h3>
                  <p className="text-lg text-text-muted leading-relaxed font-medium">{value.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
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
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-[900px] mx-auto space-y-12"
          >
            <h2 className="text-white text-5xl md:text-7xl lg:text-8xl font-black leading-[1] tracking-tighter text-balance">
              Vieni a trovarci o <span className="serif italic font-normal text-secondary underline underline-offset-8">Contattaci.</span>
            </h2>
            <p className="text-white/60 text-lg md:text-xl font-medium max-w-[650px] mx-auto leading-relaxed">
              Siamo a Scorzè, pronti ad ascoltare le tue idee e a metterle in opera con la massima professionalità.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-8 items-center pt-8">
              <Link 
                href="/contatti" 
                className="bg-cta text-white px-16 py-7 text-sm font-bold uppercase tracking-[0.3em] rounded-full hover:bg-cta-hover transition-all shadow-xl hover:-translate-y-2 active:scale-95"
              >
                Inizia il Progetto
              </Link>
              <a href={`tel:${COMPANY.phone}`} className="text-white text-lg font-black italic flex items-center gap-3 hover:text-secondary transition-colors">
                <Heart size={20} className="fill-secondary text-secondary" />
                {COMPANY.phone}
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
