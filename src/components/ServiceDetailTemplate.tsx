"use client";

import { SERVICES, COMPANY } from "@/lib/data";
import { IMAGES } from "@/lib/images";
import { Check, ArrowRight, ShieldCheck, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function ServiceDetailPage({ params }: { params: { serviceId: string } }) {
  const service = SERVICES.find(s => s.id === params.serviceId);

  if (!service) return null;

  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center overflow-hidden bg-primary">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.5 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${service.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-transparent to-primary" />
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-[800px]"
          >
            <Link href="/servizi" className="text-secondary text-xs font-black uppercase tracking-[0.4em] mb-8 inline-flex items-center gap-2 group">
              <ArrowRight size={14} className="rotate-180 group-hover:-translate-x-1 transition-transform" />
              Tutti i Servizi
            </Link>
            <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-black italic tracking-tighter serif leading-none mt-4">
              {service.title.split(' ').map((word, i) => (
                <span key={i} className={i % 2 === 1 ? "text-secondary font-normal serif not-italic" : ""}>{word} </span>
              ))}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="section-padding bg-bg-warm">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            {/* Left Col - Description */}
            <div className="lg:col-span-7 space-y-12">
              <div className="space-y-8">
                <span className="text-secondary text-xs font-bold uppercase tracking-[0.3em] block">Panoramica Intervento</span>
                <h2 className="text-4xl md:text-5xl font-black tracking-tighter leading-tight italic serif text-primary">Eccellenza e Precisione.</h2>
                <p className="text-xl text-text-muted leading-relaxed font-medium">
                  {service.fullDesc}
                </p>
              </div>

              <div className="grid gap-8">
                <h4 className="text-sm font-black uppercase tracking-[0.2em] text-primary flex items-center gap-3">
                  <div className="w-8 h-[1px] bg-secondary" />
                  Specifiche Tecniche
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {service.details.map((detail, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex gap-4 items-start group"
                    >
                      <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-colors flex-shrink-0 mt-1 shadow-sm">
                        <Check size={14} />
                      </div>
                      <span className="text-base text-text-body font-medium">{detail}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* PROJECTS */}
              <div className="space-y-8 pt-8">
                <h4 className="text-sm font-black uppercase tracking-[0.2em] text-primary flex items-center gap-3">
                  <div className="w-8 h-[1px] bg-secondary" />
                  Esempi di Progetti
                </h4>
                <div className="grid gap-6">
                  {service.projects.map((project, i) => (
                    <div key={i} className="p-8 bg-white rounded-3xl border border-primary/5 flex gap-6 items-center shadow-sm">
                      <div className="w-12 h-12 rounded-2xl bg-bg-warm flex items-center justify-center text-secondary shrink-0">
                        <MapPin size={24} />
                      </div>
                      <p className="text-lg font-medium text-text-muted leading-relaxed italic">
                        {project}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Col - Sidebar / Benefits */}
            <div className="lg:col-span-5 space-y-10">
              <div className="bg-primary p-10 lg:p-16 rounded-[3rem] text-white shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-secondary opacity-5 rounded-full -translate-y-1/2 translate-x-1/2" />
                <h3 className="text-3xl font-black italic serif text-secondary mb-10">I Benefici</h3>
                <ul className="space-y-8">
                  {service.benefits.map((benefit, i) => (
                    <li key={i} className="space-y-2">
                      <div className="flex items-center gap-3 text-secondary">
                        <ShieldCheck size={20} />
                        <span className="font-black uppercase tracking-widest text-[10px]">Punto di forza</span>
                      </div>
                      <p className="text-white/80 font-medium leading-relaxed">
                        {benefit}
                      </p>
                    </li>
                  ))}
                </ul>
                <div className="mt-12 pt-10 border-t border-white/10 space-y-8">
                  <p className="text-sm font-medium italic opacity-60">
                    Siamo pronti ad analizzare il tuo caso specifico per offrirti la soluzione migliore.
                  </p>
                  <Link 
                    href="/contatti"
                    className="block bg-cta text-white px-8 py-5 text-center text-xs font-black uppercase tracking-[0.3em] rounded-full hover:bg-cta-hover transition-all shadow-xl"
                  >
                    Richiedi Sopralluogo
                  </Link>
                </div>
              </div>

              {/* Contact Card */}
              <div className="bg-white p-10 rounded-[3rem] shadow-xl border border-primary/5 space-y-6">
                <h4 className="text-xl font-black italic serif text-primary">Hai domande urgenti?</h4>
                <p className="text-text-muted font-medium">Il titolare Donato Michielan è a tua disposizione per una consulenza telefonica immediata.</p>
                <a href={`tel:${COMPANY.phone}`} className="flex items-center gap-4 text-2xl font-black italic serif text-primary hover:text-secondary transition-colors">
                  <div className="w-12 h-12 rounded-2xl bg-bg-warm flex items-center justify-center text-secondary">
                    <Phone size={24} />
                  </div>
                  {COMPANY.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="relative py-24 lg:py-32 overflow-hidden bg-primary">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: `url(${IMAGES.hero.home})`, backgroundSize: 'cover' }} />
        <div className="container relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-[800px] mx-auto space-y-10"
          >
            <h2 className="text-white text-4xl md:text-6xl font-black leading-tight tracking-tighter text-balance">
              Ogni grande opera inizia con un <span className="serif italic font-normal text-secondary underline underline-offset-8">Primo Incontro.</span>
            </h2>
            <Link 
              href="/contatti" 
              className="inline-block bg-cta text-white px-12 py-6 text-sm font-bold uppercase tracking-[0.3em] rounded-full hover:bg-cta-hover transition-all shadow-xl hover:-translate-y-1 active:scale-95"
            >
              Inizia Ora
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
