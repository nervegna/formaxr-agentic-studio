"use client";

import { motion } from "framer-motion";
import { useLang } from "@/context/LanguageContext";

function PaletteIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="13.5" cy="6.5" r="2" />
      <circle cx="17.5" cy="10.5" r="2" />
      <circle cx="8.5" cy="7.5" r="2" />
      <circle cx="6.5" cy="12.5" r="2" />
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function TrendingUpIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
      <polyline points="17 6 23 6 23 12" />
    </svg>
  );
}

export default function WhiteLabel() {
  const { t } = useLang();

  const pillars = [
    {
      icon: <PaletteIcon />,
      title: t("Il Vostro Brand, Le Nostre Capacità XR", "Your Brand, Our XR Capabilities"),
      description: t(
        "Offrite esperienze spaziali white-label ai vostri clienti con il vostro logo, i vostri colori e il vostro brand. La tecnologia FormaXR resta invisibile dietro le quinte.",
        "Offer white-label spatial experiences to your clients with your logo, colors, and brand. FormaXR technology stays invisible behind the scenes."
      ),
    },
    {
      icon: <StarIcon />,
      title: t("Qualità Garantita dall'AI", "AI-Guaranteed Quality"),
      description: t(
        "Ottimizzazione consistente su tutti i progetti. Ogni file 3D viene processato con gli stessi standard elevati, garantendo qualità uniforme per ogni cliente.",
        "Consistent optimization across all projects. Every 3D file is processed with the same high standards, ensuring uniform quality for every client."
      ),
    },
    {
      icon: <TrendingUpIcon />,
      title: t("Nuovo Flusso di Ricavi", "New Revenue Stream"),
      description: t(
        "Offrite servizi XR ai vostri clienti. Trasformate i file 3D in esperienze spaziali immersive e generate nuovi ricavi ricorrenti senza costi aggiuntivi di personale.",
        "Offer XR services to your clients. Transform 3D files into immersive spatial experiences and generate new recurring revenue without additional staff costs."
      ),
    },
  ];

  const steps = [
    { num: "01", label: "Upload" },
    { num: "02", label: t("Ottimizzazione", "Optimization") },
    { num: "03", label: t("Personalizzazione", "Customization") },
    { num: "04", label: t("Pubblicazione", "Publishing") },
  ];

  return (
    <section className="relative px-6 py-24 md:py-32 lg:px-20">
      <div className="mx-auto max-w-7xl">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-20 text-center"
        >
          <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
            {t("Il vostro studio. La nostra tecnologia XR.", "Your studio. Our XR technology.")}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[#888] md:text-xl">
            {t(
              "Offrite esperienze spaziali ai vostri clienti con il vostro brand.",
              "Offer spatial experiences to your clients under your brand."
            )}
          </p>
        </motion.div>

        {/* 3-Column Pillar Grid */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {pillars.map((pillar, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.12, duration: 0.6, ease: "easeOut" }}
              className="group rounded-2xl border border-white/[0.06] bg-white/[0.03] p-6 backdrop-blur-sm transition-all duration-300 hover:border-white/[0.12] md:p-8"
            >
              {/* Icon */}
              <div className="text-white/40">
                {pillar.icon}
              </div>

              <h3 className="mt-4 text-lg font-semibold text-white">
                {pillar.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#888]">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* 4-Step Process Flow */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mt-24"
        >
          <div className="relative flex flex-wrap items-center justify-center gap-y-8 md:flex-nowrap md:justify-between">
            {/* Connecting line (desktop) */}
            <div className="pointer-events-none absolute top-3 right-[12%] left-[12%] hidden h-px bg-white/[0.06] md:block" />

            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.5, ease: "easeOut" }}
                className="relative z-10 flex flex-col items-center text-center px-6"
              >
                <span className="font-mono text-sm text-white/20">
                  {step.num}
                </span>
                <span className="mt-1.5 text-sm font-medium text-white">
                  {step.label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
