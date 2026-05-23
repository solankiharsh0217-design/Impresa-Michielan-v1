import Link from "next/link";
import { Facebook, Instagram, Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { COMPANY, SERVICES, NAV_ITEMS } from "@/lib/data";
import { IMAGES } from "@/lib/images";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white pt-24 pb-12 overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-light rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-20">
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-8">
            <Link href="/" className="flex items-center gap-4 group">
              <img src={IMAGES.logo} alt={COMPANY.name} className="h-12 w-auto brightness-0 invert transition-transform duration-500 group-hover:scale-110" />
              <div>
                <span className="block text-[10px] font-bold uppercase tracking-[0.3em] leading-none text-white/50 mb-1">
                  Impresa Edile
                </span>
                <span className="block text-2xl font-black uppercase tracking-tight leading-none text-white">
                  Michielan
                </span>
              </div>
            </Link>
            <p className="text-lg text-white/60 leading-relaxed italic font-serif">
              &ldquo;{COMPANY.slogan}&rdquo;
            </p>
            <div className="flex gap-4">
              <a
                href={COMPANY.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl border border-white/10 flex items-center justify-center hover:bg-secondary hover:border-secondary transition-all duration-300 hover:-translate-y-1"
              >
                <Facebook size={20} />
              </a>
              <a
                href={COMPANY.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl border border-white/10 flex items-center justify-center hover:bg-secondary hover:border-secondary transition-all duration-300 hover:-translate-y-1"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2 space-y-8">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white/30">Navigazione</h4>
            <ul className="space-y-4">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm font-medium text-white/60 hover:text-secondary transition-colors inline-flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3 space-y-8">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white/30">Servizi Principali</h4>
            <ul className="space-y-4">
              {SERVICES.slice(0, 4).map((service) => (
                <li key={service.id}>
                  <Link href={service.href} className="text-sm font-medium text-white/60 hover:text-secondary transition-colors">
                    {service.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/servizi" className="text-sm font-bold text-secondary inline-flex items-center gap-2 group">
                  Tutti i servizi <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3 space-y-8">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white/30">Contatti</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-colors flex-shrink-0">
                  <MapPin size={20} />
                </div>
                <span className="text-sm text-white/70 leading-relaxed">{COMPANY.address}</span>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-colors flex-shrink-0">
                  <Phone size={20} />
                </div>
                <a href={`tel:${COMPANY.phone}`} className="text-sm text-white/70 hover:text-white font-bold transition-colors">
                  {COMPANY.phone}
                </a>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-colors flex-shrink-0">
                  <Mail size={20} />
                </div>
                <a href={`mailto:${COMPANY.email}`} className="text-sm text-white/70 hover:text-white transition-colors">
                  {COMPANY.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[11px] font-medium uppercase tracking-widest text-white/30">
            &copy; {currentYear} {COMPANY.name}. P.IVA {COMPANY.vat}
          </p>
          <div className="flex gap-8">
            <Link href="/privacy" className="text-[11px] font-medium uppercase tracking-widest text-white/30 hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/cookie" className="text-[11px] font-medium uppercase tracking-widest text-white/30 hover:text-white transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
