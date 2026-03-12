"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "@/context/LanguageContext";

const navLinks = [
  { it: "Soluzioni", en: "Solutions", href: "#soluzioni" },
  { it: "Agenti", en: "Agents", href: "#ruoli" },
  { it: "Come Funziona", en: "How It Works", href: "#come-funziona" },
  { it: "Standard", en: "Standards", href: "#sicurezza" },
];

export default function Navbar() {
  const { lang, toggleLang, t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/60 backdrop-blur-2xl backdrop-saturate-[180%] border-b border-white/[0.06]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-20">
        {/* Logo — bigger */}
        <a href="#" className="flex items-center">
          <Image
            src="/images/logo-white.png"
            alt="FormaXR"
            width={220}
            height={48}
            className="h-10 w-auto md:h-12"
            priority
          />
        </a>

        {/* Desktop Nav Links + Right */}
        <div className="hidden items-center gap-8 md:flex">
          {/* Anchor links */}
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/50 transition-colors hover:text-white"
            >
              {t(link.it, link.en)}
            </a>
          ))}

          {/* Language Toggle */}
          <div className="flex items-center gap-1">
            <button
              onClick={() => lang !== "it" && toggleLang()}
              className={`px-2 py-1 text-sm font-medium tracking-wide transition-opacity ${
                lang === "it" ? "text-white opacity-100" : "text-white opacity-40 hover:opacity-70"
              }`}
            >
              IT
            </button>
            <span className="text-sm text-white/20">/</span>
            <button
              onClick={() => lang !== "en" && toggleLang()}
              className={`px-2 py-1 text-sm font-medium tracking-wide transition-opacity ${
                lang === "en" ? "text-white opacity-100" : "text-white opacity-40 hover:opacity-70"
              }`}
            >
              EN
            </button>
          </div>

          {/* CTA */}
          <a
            href="#contact"
            className="rounded-full bg-white px-6 py-2.5 text-sm font-medium text-black transition-all hover:brightness-[0.9]"
          >
            {t("Contattaci", "Contact Us")}
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-label="Toggle menu"
        >
          <motion.span animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }} className="block h-0.5 w-6 bg-white" />
          <motion.span animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }} className="block h-0.5 w-6 bg-white" />
          <motion.span animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }} className="block h-0.5 w-6 bg-white" />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden border-b border-white/[0.06] bg-black/80 backdrop-blur-2xl backdrop-saturate-[180%] md:hidden"
          >
            <div className="flex flex-col items-center gap-6 px-6 py-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-base font-medium text-white/70 transition-colors hover:text-white"
                >
                  {t(link.it, link.en)}
                </a>
              ))}
              <div className="flex items-center gap-1">
                <button onClick={() => { if (lang !== "it") toggleLang(); }} className={`px-3 py-2 text-sm font-medium ${lang === "it" ? "text-white" : "text-white/40"}`}>IT</button>
                <span className="text-sm text-white/20">/</span>
                <button onClick={() => { if (lang !== "en") toggleLang(); }} className={`px-3 py-2 text-sm font-medium ${lang === "en" ? "text-white" : "text-white/40"}`}>EN</button>
              </div>
              <a href="#contact" onClick={() => setMobileOpen(false)} className="rounded-full bg-white px-8 py-3 text-sm font-medium text-black">
                {t("Contattaci", "Contact Us")}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
