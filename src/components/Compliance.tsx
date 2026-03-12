"use client";

import { motion } from "framer-motion";
import { useLang } from "@/context/LanguageContext";
import { useIndustry } from "@/context/IndustryContext";

export default function Compliance() {
  const { t } = useLang();
  const { content } = useIndustry();

  return (
    <section className="relative px-6 py-16 lg:px-20">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-3">
        {content.compliance.map((standard, i) => (
          <motion.div
            key={standard.code}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              duration: 0.4,
              ease: "easeOut",
              delay: i * 0.08,
            }}
            className="inline-flex items-center gap-2 rounded-full border border-white/[0.06] bg-white/[0.03] px-5 py-2.5"
          >
            <span className="font-mono text-sm text-white/70">
              {standard.code}
            </span>
            <span className="text-xs text-[#555]">
              {t(standard.labelIt, standard.labelEn)}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
