"use client";

import { useRef, useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLang } from "@/context/LanguageContext";
import { useIndustry } from "@/context/IndustryContext";
import ExecutiveAssistant from "./ExecutiveAssistant";

const VoiceAgentModal = dynamic(() => import("./VoiceAgentModal"), {
  ssr: false,
});

export default function Hero() {
  const { t } = useLang();
  const { content } = useIndustry();
  const sectionRef = useRef<HTMLElement>(null);
  const [voiceModalOpen, setVoiceModalOpen] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full overflow-hidden bg-black"
    >
      {/* YouTube Video Background */}
      <motion.div
        className="absolute inset-0"
        style={{ y: imageY, scale: imageScale }}
      >
        {isMounted && (
          <div className="absolute inset-[-80px] overflow-hidden">
            <iframe
              src="https://www.youtube.com/embed/IXc40o5kTIw?autoplay=1&mute=1&loop=1&playlist=IXc40o5kTIw&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&enablejsapi=1&iv_load_policy=3&disablekb=1"
              title="FormaXR"
              allow="autoplay; encrypted-media"
              className="pointer-events-none absolute top-1/2 left-1/2 h-[max(calc(100%+160px),56.25vw)] w-[max(calc(100%+160px),177.78vh)] -translate-x-1/2 -translate-y-1/2 border-0 scale-[1.2]"
            />
          </div>
        )}
      </motion.div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black" />
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen w-full flex-col justify-end">
        <div className="mx-auto w-full max-w-7xl px-6 pb-8 md:pb-28 lg:px-20 lg:pb-32">
          <div className="flex flex-col items-start gap-8 lg:flex-row lg:items-end lg:justify-between">
            {/* LEFT — Headline */}
            <div className="max-w-xl">
              <motion.h1
                key={content.hero.headlineIt}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                className="text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl"
              >
                {t(content.hero.headlineIt, content.hero.headlineEn)
                  .split("\n")
                  .map((line, i) => (
                    <span key={i}>
                      {i > 0 && <br />}
                      {line}
                    </span>
                  ))}
              </motion.h1>

              <motion.p
                key={content.hero.taglineIt}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
                className="mt-4 text-xs tracking-widest text-white/50 sm:text-sm"
              >
                {t(content.hero.taglineIt, content.hero.taglineEn)}
              </motion.p>

              {/* Desktop CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8, ease: "easeOut" }}
                className="mt-8 hidden md:flex md:items-center md:gap-3"
              >
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-medium text-black transition-all hover:brightness-[0.9]"
                >
                  {t("Contattaci", "Contact Us")}
                  <span aria-hidden="true">&rarr;</span>
                </a>
              </motion.div>
            </div>

            {/* RIGHT — Executive AI (desktop only: full phone frame) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              className="hidden w-full max-w-sm lg:block"
            >
              <ExecutiveAssistant />
            </motion.div>
          </div>

          {/* Mobile CTAs — two buttons side by side */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8, ease: "easeOut" }}
            className="mt-6 flex items-center gap-3 md:hidden"
          >
            <a
              href="#contact"
              className="flex-1 rounded-full bg-white py-3 text-center text-sm font-medium text-black transition-all hover:brightness-[0.9]"
            >
              {t("Contattaci", "Contact Us")}
            </a>
            <button
              onClick={() => setVoiceModalOpen(true)}
              className="flex flex-1 items-center justify-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.08] py-3 text-sm font-medium text-white backdrop-blur-xl transition-all hover:bg-white/[0.15]"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
                <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                <line x1="12" x2="12" y1="19" y2="22" />
              </svg>
              {t("Prova l'AI", "Try the AI")}
            </button>
          </motion.div>
        </div>
      </div>

      {/* Voice Agent Modal */}
      <VoiceAgentModal
        isOpen={voiceModalOpen}
        onClose={() => setVoiceModalOpen(false)}
      />
    </section>
  );
}
