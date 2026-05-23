"use client";

import { COMPANY } from "@/lib/data";
import { IMAGES } from "@/lib/images";
import { Phone, Mail, MapPin, Facebook, Instagram, Clock, ShieldCheck, Heart } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="relative h-[50vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-primary">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.5 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${IMAGES.hero.contatti})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-transparent to-primary" />
        <div className="container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="space-y-8"
          >
            <span className="text-secondary text-xs font-bold uppercase tracking-[0.4em] block">Sempre a Disposizione</span>
            <h1 className="text-white text-6xl md:text-8xl lg:text-9xl font-black italic tracking-tighter serif leading-none">
              Parliamo.
            </h1>
          </motion.div>
        </div>
      </section>

      {/* CONTACT CONTENT */}
      <section className="section-padding bg-bg-warm relative overflow-hidden">
        {/* Background Text */}
        <div className="absolute bottom-0 right-0 overflow-hidden pointer-events-none opacity-[0.02] select-none translate-y-1/2">
          <span className="text-[30vw] font-black uppercase leading-none whitespace-nowrap">Contatti</span>
        </div>

        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-32">
            {/* Info Col */}
            <div className="lg:col-span-5 space-y-16">
              <div className="space-y-8">
                <span className="text-secondary text-xs font-bold uppercase tracking-[0.3em] block">Inizia il Dialogo</span>
                <h2 className="text-5xl md:text-6xl font-black tracking-tighter leading-none">
                  La tua casa <br />
                  <span className="serif italic font-normal text-primary">merita il meglio.</span>
                </h2>
                <p className="text-xl text-text-muted leading-relaxed font-medium">
                  Che si tratti di un piccolo restauro o di una ristrutturazione completa, siamo pronti ad ascoltare le tue necessità e a proporre la soluzione tecnica più avanzata.
                </p>
              </div>

              <div className="grid gap-10">
                <div className="flex gap-8 items-start group">
                  <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center text-secondary shadow-sm group-hover:bg-secondary group-hover:text-white transition-all duration-500 shrink-0">
                    <MapPin size={28} />
                  </div>
                  <div className="space-y-2 pt-2">
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-secondary">Sede Operativa</p>
                    <p className="text-xl font-bold text-primary leading-tight">{COMPANY.address}</p>
                  </div>
                </div>

                <div className="flex gap-8 items-start group">
                  <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center text-secondary shadow-sm group-hover:bg-secondary group-hover:text-white transition-all duration-500 shrink-0">
                    <Phone size={28} />
                  </div>
                  <div className="space-y-2 pt-2">
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-secondary">Filo Diretto</p>
                    <a href={`tel:${COMPANY.phone}`} className="text-2xl font-black italic serif text-primary hover:text-secondary transition-colors inline-block">{COMPANY.phone}</a>
                  </div>
                </div>

                <div className="flex gap-8 items-start group">
                  <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center text-secondary shadow-sm group-hover:bg-secondary group-hover:text-white transition-all duration-500 shrink-0">
                    <Mail size={28} />
                  </div>
                  <div className="space-y-2 pt-2">
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-secondary">Email</p>
                    <a href={`mailto:${COMPANY.email}`} className="text-xl font-bold text-primary hover:text-secondary transition-colors break-all inline-block">{COMPANY.email}</a>
                  </div>
                </div>

                <div className="flex gap-8 items-start group">
                  <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center text-secondary shadow-sm group-hover:bg-secondary group-hover:text-white transition-all duration-500 shrink-0">
                    <Clock size={28} />
                  </div>
                  <div className="space-y-2 pt-2">
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-secondary">Disponibilità</p>
                    <p className="text-xl font-bold text-primary">Lun - Ven: 08:00 &mdash; 18:00</p>
                  </div>
                </div>
              </div>

              <div className="pt-8 space-y-8">
                <p className="text-xs font-black uppercase tracking-[0.4em] text-primary/40">Seguici sui social</p>
                <div className="flex gap-6">
                  <a href={COMPANY.social.facebook} target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-2xl bg-white border border-primary/5 flex items-center justify-center text-primary hover:bg-secondary hover:text-white transition-all duration-500 hover:-translate-y-1 shadow-sm">
                    <Facebook size={24} />
                  </a>
                  <a href={COMPANY.social.instagram} target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-2xl bg-white border border-primary/5 flex items-center justify-center text-primary hover:bg-secondary hover:text-white transition-all duration-500 hover:-translate-y-1 shadow-sm">
                    <Instagram size={24} />
                  </a>
                </div>
              </div>
            </div>

            {/* Form Col */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute -inset-4 bg-secondary/10 rounded-[3.5rem] blur-2xl -z-10" />
                <ContactForm />
                
                <div className="mt-12 p-8 bg-white/50 backdrop-blur-md rounded-3xl border border-white flex items-center gap-6 shadow-sm">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                    <ShieldCheck size={24} />
                  </div>
                  <p className="text-sm font-medium text-text-muted">
                    I tuoi dati sono al sicuro. Utilizziamo crittografia SSL e rispettiamo rigorosamente la normativa GDPR.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* MAP SECTION - FULL BLEED PREMIUM */}
      <section className="h-[600px] w-full relative bg-gray-100 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_100px_rgba(0,0,0,0.1)] z-10" />
        <iframe 
          src={COMPANY.mapUrl} 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen={true} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          className="grayscale contrast-[1.1] brightness-[1.05] hover:grayscale-0 transition-all duration-1000 ease-in-out"
        />
        
        {/* Map Overlay Card */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 md:left-24 md:translate-x-0 bg-white/90 backdrop-blur-lg p-10 rounded-[2.5rem] shadow-2xl z-20 max-w-[350px] border border-white">
          <Heart size={32} className="text-secondary mb-6 fill-secondary" />
          <h4 className="text-2xl font-black italic serif text-primary mb-2">Vieni a Trovarci</h4>
          <p className="text-text-muted font-medium leading-relaxed mb-6">
            La nostra sede è il cuore pulsante dove nascono i vostri progetti.
          </p>
          <div className="w-full h-[1px] bg-primary/10 mb-6" />
          <p className="text-xs font-black uppercase tracking-[0.2em] text-secondary">{COMPANY.address}</p>
        </div>
      </section>
    </div>
  );
}
