"use client";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setTimeout(() => setStatus("success"), 1500);
  };

  if (status === "success") {
    return (
      <div className="bg-[var(--bg-warm)] p-12 rounded-3xl text-center flex flex-col items-center gap-6">
        <CheckCircle size={80} className="text-[var(--secondary)]" />
        <h3 className="text-2xl font-bold text-[var(--text-dark)]">Messaggio inviato!</h3>
        <p className="text-[var(--text-muted)]">Grazie per averci contattato. Ti risponderemo al più presto.</p>
        <button 
          onClick={() => setStatus("idle")}
          className="text-sm font-bold uppercase tracking-widest text-[var(--secondary)] border-b-2 border-[var(--secondary)] pb-1"
        >
          Invia un altro messaggio
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 sm:p-12 rounded-3xl shadow-[var(--shadow-warm)] space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-widest text-[var(--text-muted)]">Nome e Cognome</label>
          <input 
            type="text" 
            required 
            placeholder="Esempio: Mario Rossi"
            className="w-full px-6 py-4 bg-[var(--bg-warm)] border-none rounded-xl focus:ring-2 focus:ring-[var(--secondary)] outline-none transition-all"
          />
        </div>
        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-widest text-[var(--text-muted)]">Città</label>
          <input 
            type="text" 
            required 
            placeholder="Esempio: Scorzè"
            className="w-full px-6 py-4 bg-[var(--bg-warm)] border-none rounded-xl focus:ring-2 focus:ring-[var(--secondary)] outline-none transition-all"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-widest text-[var(--text-muted)]">Email</label>
          <input 
            type="email" 
            required 
            placeholder="mario@esempio.com"
            className="w-full px-6 py-4 bg-[var(--bg-warm)] border-none rounded-xl focus:ring-2 focus:ring-[var(--secondary)] outline-none transition-all"
          />
        </div>
        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-widest text-[var(--text-muted)]">Telefono</label>
          <input 
            type="tel" 
            required 
            placeholder="+39 000 0000000"
            className="w-full px-6 py-4 bg-[var(--bg-warm)] border-none rounded-xl focus:ring-2 focus:ring-[var(--secondary)] outline-none transition-all"
          />
        </div>
      </div>
      <div className="space-y-2">
        <label className="text-xs font-bold uppercase tracking-widest text-[var(--text-muted)]">Messaggio</label>
        <textarea 
          required 
          rows={5}
          placeholder="Come possiamo aiutarti?"
          className="w-full px-6 py-4 bg-[var(--bg-warm)] border-none rounded-xl focus:ring-2 focus:ring-[var(--secondary)] outline-none transition-all resize-none"
        />
      </div>
      <div className="flex items-start gap-3">
        <input type="checkbox" required className="mt-1 w-4 h-4 rounded text-[var(--secondary)] focus:ring-[var(--secondary)]" id="privacy" />
        <label htmlFor="privacy" className="text-xs text-[var(--text-muted)] leading-relaxed">
          Acconsento al trattamento dei dati personali secondo la Privacy Policy.
        </label>
      </div>
      <button 
        type="submit"
        disabled={status === "submitting"}
        className="w-full bg-[var(--cta)] text-white py-5 rounded-xl font-bold uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-[var(--cta-hover)] transition-all shadow-lg hover:shadow-[var(--shadow-warm)]"
      >
        {status === "submitting" ? "Invio in corso..." : "Invia Messaggio"}
        <Send size={18} />
      </button>
    </form>
  );
}
