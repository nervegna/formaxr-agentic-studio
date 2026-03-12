"use client";

import { motion } from "framer-motion";
import { useLang } from "@/context/LanguageContext";

const features = [
  {
    titleIt: "File Processing Sicuro",
    titleEn: "Secure File Processing",
    descIt:
      "Processing locale, nessun file viene caricato su server terzi.",
    descEn:
      "Local processing, no files are uploaded to third-party servers.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <rect x="2" y="2" width="20" height="8" rx="2" />
        <rect x="2" y="14" width="20" height="8" rx="2" />
        <circle cx="6" cy="6" r="1" fill="currentColor" />
        <circle cx="6" cy="18" r="1" fill="currentColor" />
        <line x1="18" y1="6" x2="14" y2="6" />
        <line x1="18" y1="18" x2="14" y2="18" />
      </svg>
    ),
  },
  {
    titleIt: "IP Protetta",
    titleEn: "IP Protected",
    descIt:
      "Modelli 3D e texture restano vostri, mai condivisi.",
    descEn:
      "3D models and textures remain yours, never shared.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <rect x="3" y="11" width="18" height="11" rx="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        <circle cx="12" cy="16.5" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    titleIt: "Pipeline Crittografata",
    titleEn: "Encrypted Pipeline",
    descIt:
      "End-to-end encryption durante conversione e ottimizzazione.",
    descEn:
      "End-to-end encryption during conversion and optimization.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    titleIt: "Accesso Controllato",
    titleEn: "Controlled Access",
    descIt:
      "Permessi granulari per team, clienti e collaboratori.",
    descEn:
      "Granular permissions for teams, clients, and collaborators.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
        <rect x="9" y="2" width="6" height="5" rx="1" />
        <path d="M9 14l2 2 4-4" />
      </svg>
    ),
  },
  {
    titleIt: "Watermark Digitale",
    titleEn: "Digital Watermark",
    descIt:
      "Protezione invisibile sui modelli per tracciabilità.",
    descEn:
      "Invisible protection on models for traceability.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" />
      </svg>
    ),
  },
  {
    titleIt: "Conformità GDPR",
    titleEn: "GDPR Compliance",
    descIt:
      "Piena conformità con normativa europea sulla privacy.",
    descEn:
      "Full compliance with European privacy regulations.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
];

export default function Security() {
  const { t } = useLang();

  return (
    <section id="sicurezza" className="relative px-6 py-24 md:py-32 lg:px-20">
      <div className="mx-auto max-w-7xl">
        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mx-auto max-w-4xl text-center text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl"
        >
          {t(
            "I vostri asset 3D e la proprietà intellettuale restano al sicuro.",
            "Your 3D assets and intellectual property stay safe."
          )}
          <br />
          <span className="mt-2 inline-block text-5xl font-extrabold text-white md:text-6xl lg:text-7xl">
            {t("Mai.", "Ever.")}
          </span>
        </motion.h2>

        {/* Cards grid */}
        <div className="mt-20 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: i * 0.08,
              }}
              className="group rounded-2xl border border-white/[0.06] bg-white/[0.03] p-6 backdrop-blur-sm transition-all duration-300 hover:border-white/[0.12] md:p-8"
            >
              {/* Icon */}
              <div className="text-white/40">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="mt-4 text-lg font-semibold text-white">
                {t(feature.titleIt, feature.titleEn)}
              </h3>

              {/* Description */}
              <p className="mt-2 text-sm leading-relaxed text-[#888]">
                {t(feature.descIt, feature.descEn)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
