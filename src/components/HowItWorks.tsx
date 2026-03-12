"use client";

import { motion } from "framer-motion";
import { useLang } from "@/context/LanguageContext";

const steps = [
  {
    number: "01",
    titleIt: "Upload",
    titleEn: "Upload",
    descIt:
      "Caricate i vostri file 3D (FBX, OBJ, glTF, Revit, SketchUp).",
    descEn:
      "Upload your 3D files (FBX, OBJ, glTF, Revit, SketchUp).",
  },
  {
    number: "02",
    titleIt: "Analisi AI",
    titleEn: "AI Analysis",
    descIt:
      "I nostri agenti analizzano geometrie, materiali, texture e performance.",
    descEn:
      "Our agents analyze geometry, materials, textures and performance.",
  },
  {
    number: "03",
    titleIt: "Ottimizzazione",
    titleEn: "Optimization",
    descIt:
      "Retopology, texture compression, PBR setup e generazione LOD automatici.",
    descEn:
      "Retopology, texture compression, PBR setup and automatic LOD generation.",
  },
  {
    number: "04",
    titleIt: "Export XR-Ready",
    titleEn: "Export XR-Ready",
    descIt:
      "Conversione in USDZ/glTF validata per Apple Vision Pro, web e mobile AR.",
    descEn:
      "Validated USDZ/glTF conversion for Apple Vision Pro, web and mobile AR.",
  },
];

export default function HowItWorks() {
  const { t } = useLang();

  return (
    <section id="come-funziona" className="py-24 md:py-32 px-6">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
            {t("Come funziona.", "How it works.")}
          </h2>
          <p className="mt-6 text-lg md:text-xl text-text-secondary max-w-2xl mx-auto">
            {t(
              "Un pipeline intelligente che rende i vostri file 3D XR-ready automaticamente.",
              "An intelligent pipeline that makes your 3D files XR-ready automatically."
            )}
          </p>
        </motion.div>

        {/* Steps */}
        <div>
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: i * 0.1,
              }}
              className={`flex gap-6 md:gap-10 items-start py-10 ${
                i < steps.length - 1
                  ? "border-b border-white/[0.06]"
                  : ""
              }`}
            >
              {/* Large faded number */}
              <span className="text-5xl md:text-7xl font-bold text-white/[0.08] leading-none shrink-0 select-none">
                {step.number}
              </span>

              {/* Content */}
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-white">
                  {t(step.titleIt, step.titleEn)}
                </h3>
                <p className="mt-3 text-text-secondary text-base md:text-lg leading-relaxed">
                  {t(step.descIt, step.descEn)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
