"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLang } from "@/context/LanguageContext";
import { useIndustry } from "@/context/IndustryContext";

export default function FeatureCards() {
  const { t } = useLang();
  const { content } = useIndustry();

  return (
    <section id="soluzioni" className="py-24 md:py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {content.features.map((card, i) => (
            <motion.div
              key={card.titleIt}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: i * 0.1,
              }}
              className="group overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.03] backdrop-blur transition-all duration-300 hover:border-white/[0.12] hover:scale-[1.02]"
            >
              {/* Image — portrait */}
              <div className="relative aspect-[3/4] overflow-hidden bg-black/40">
                <Image
                  src={card.image}
                  alt={t(card.titleIt, card.titleEn)}
                  fill
                  unoptimized={false}
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>

              {/* Text */}
              <div className="p-4 md:p-5">
                <h3 className="text-sm md:text-base font-bold text-white leading-snug">
                  {t(card.titleIt, card.titleEn)}
                </h3>
                <p className="text-text-secondary text-xs md:text-sm mt-2 leading-relaxed">
                  {t(card.descIt, card.descEn)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
