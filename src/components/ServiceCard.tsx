"use client";

import { ServiceItem } from "@/lib/data";
import * as Icons from "lucide-react";
import { motion } from "framer-motion";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import Link from "next/link";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ServiceCardProps {
  service: ServiceItem;
  index: number;
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Icon = (Icons as any)[service.icon] || Icons.HelpCircle;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className={cn(
        "group rounded-3xl overflow-hidden shadow-soft transition-all duration-700 hover:shadow-warm relative bg-white flex flex-col h-full",
        index % 2 === 1 ? "md:translate-y-12" : ""
      )}
    >
      <Link href={service.href} className="block aspect-[4/3] overflow-hidden relative">
        <img 
          src={service.image} 
          alt={service.title} 
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
        />
        <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/0 transition-colors duration-700" />
        <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-secondary shadow-lg group-hover:bg-secondary group-hover:text-white transition-colors duration-500">
          <Icon size={24} strokeWidth={1.5} />
        </div>
      </Link>
      
      <div className="p-10 space-y-4 flex flex-col flex-grow">
        <Link href={service.href}>
          <h3 className="text-2xl font-black italic text-text-dark group-hover:text-secondary transition-colors duration-300 leading-tight">
            {service.title}
          </h3>
        </Link>
        <p className="text-sm text-text-muted leading-relaxed line-clamp-3">
          {service.shortDesc}
        </p>
        <Link 
          href={service.href}
          className="mt-auto pt-6 flex items-center gap-3 text-[11px] font-black uppercase tracking-[0.2em] text-secondary"
        >
          <span>Dettagli</span>
          <div className="w-8 h-[1px] bg-secondary/30 transition-all duration-500 group-hover:w-16 group-hover:bg-secondary" />
          <Icons.ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      <span className="absolute bottom-4 right-8 text-8xl font-black text-bg-warm -z-0 pointer-events-none opacity-50 group-hover:text-secondary/5 transition-colors duration-700">
        0{index + 1}
      </span>
    </motion.div>
  );
}
