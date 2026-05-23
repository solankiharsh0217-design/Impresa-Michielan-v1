"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { COMPANY, NAV_ITEMS, SERVICES } from "@/lib/data";
import { IMAGES } from "@/lib/images";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import Image from "next/image";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsDropdownOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-500 h-20 flex items-center",
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-lg h-16"
          : "bg-transparent h-24"
      )}
    >
      <div className="container flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3 group">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className={cn(
              "relative transition-all duration-500",
              isScrolled ? "h-10 w-32" : "h-12 w-40"
            )}
          >
            <Image 
              src={IMAGES.logo} 
              alt={COMPANY.name} 
              fill
              className="object-contain"
              priority
            />
          </motion.div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-10">
          {NAV_ITEMS.map((item, i) => (
            <motion.div 
              key={item.href} 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.1 }}
              className="relative group"
            >
              {item.label === "Servizi" ? (
                <div 
                  className="flex items-center gap-1 cursor-pointer py-2"
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "text-[13px] font-bold uppercase tracking-widest transition-colors duration-500 relative",
                      isScrolled ? "text-text-dark hover:text-secondary" : "text-white hover:text-white/80"
                    )}
                  >
                    {item.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-secondary transition-all duration-300 group-hover:w-full" />
                  </Link>
                  <ChevronDown size={14} className={cn(
                    "transition-transform duration-300",
                    isDropdownOpen && "rotate-180",
                    isScrolled ? "text-text-dark" : "text-white"
                  )} />
                  
                  {/* Dropdown */}
                  <AnimatePresence>
                    {isDropdownOpen && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full left-[-20px] w-72 bg-white shadow-2xl rounded-xl py-6 px-2 grid gap-1 border border-bg-warm"
                      >
                        {SERVICES.map((service) => (
                          <Link
                            key={service.id}
                            href={service.href}
                            className="block px-6 py-3 text-sm font-medium text-text-dark hover:bg-bg-warm hover:text-secondary rounded-lg transition-all"
                          >
                            {service.title}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  href={item.href}
                  className={cn(
                    "text-[13px] font-bold uppercase tracking-widest transition-colors duration-500 relative py-2",
                    pathname === item.href 
                      ? (isScrolled ? "text-secondary" : "text-white") 
                      : (isScrolled ? "text-text-dark hover:text-secondary" : "text-white hover:text-white/80")
                  )}
                >
                  {item.label}
                  <span className={cn(
                    "absolute -bottom-1 left-0 h-[2px] bg-secondary transition-all duration-300",
                    pathname === item.href ? "w-full" : "w-0 group-hover:w-full"
                  )} />
                </Link>
              )}
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
          >
            <Link
              href="/contatti"
              className="bg-cta text-white px-8 py-3.5 text-xs font-bold uppercase tracking-[0.2em] rounded-full hover:bg-cta-hover transition-all duration-300 hover:shadow-[0_10px_25px_rgba(227,22,17,0.4)] hover:-translate-y-0.5 active:scale-95"
            >
              Sopralluogo gratuito
            </Link>
          </motion.div>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className={cn(
            "lg:hidden p-2 rounded-full transition-colors duration-500",
            isScrolled ? "text-text-dark bg-bg-warm" : "text-white bg-white/10 backdrop-blur-md"
          )}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-white z-[60] flex flex-col p-10 pt-24 gap-8"
          >
            <button 
              className="absolute top-8 right-10 p-2 bg-bg-warm rounded-full text-text-dark"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X size={30} />
            </button>
            {NAV_ITEMS.map((item, i) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * i }}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "text-3xl font-black uppercase tracking-tighter",
                    pathname === item.href ? "text-secondary" : "text-text-dark"
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-auto"
            >
              <Link
                href="/contatti"
                className="block bg-cta text-white px-10 py-6 text-center text-lg font-bold uppercase tracking-widest rounded-2xl shadow-xl"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Sopralluogo gratuito
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
