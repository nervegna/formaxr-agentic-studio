"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "@/context/LanguageContext";
import { useIndustry } from "@/context/IndustryContext";
import { industries } from "@/data/industryContent";

export default function IndustrySelector() {
  const { t } = useLang();
  const { industry, setIndustry } = useIndustry();

  return (
    <section className="relative z-10 mt-6 px-6 md:-mt-14 lg:px-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1, ease: "easeOut" }}
        className="mx-auto max-w-3xl"
      >
        {/* Label */}
        <p className="mb-3 text-center text-xs font-medium uppercase tracking-[0.2em] text-white/30">
          {t("Seleziona il tuo settore", "Select your industry")}
        </p>

        {/* Pill container — liquid glass */}
        <div className="flex flex-wrap items-center justify-center gap-2 rounded-2xl border border-white/[0.08] bg-white/[0.03] p-2 backdrop-blur-2xl backdrop-saturate-[180%]">
          {industries.map((ind) => {
            const isActive = industry === ind.id;
            return (
              <button
                key={ind.id}
                onClick={() => setIndustry(ind.id)}
                className={`relative rounded-xl px-4 py-2.5 text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "text-white"
                    : "text-white/40 hover:text-white/70"
                }`}
              >
                {/* Active background pill */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      layoutId="industry-active-pill"
                      className="absolute inset-0 rounded-xl border border-white/[0.12] bg-white/[0.08]"
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                    />
                  )}
                </AnimatePresence>

                {/* Label */}
                <span className="relative z-10 flex items-center gap-1.5">
                  <span className="text-xs">{ind.iconEmoji}</span>
                  {t(ind.labelIt, ind.labelEn)}
                </span>
              </button>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
