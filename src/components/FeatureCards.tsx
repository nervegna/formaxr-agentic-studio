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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
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
              className="group overflow-hidden rounded-3xl border border-white/[0.06] bg-white/[0.03] backdrop-blur transition-all duration-300 hover:border-white/[0.12] hover:scale-[1.02]"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden bg-black/40">
                <Image
                  src={card.image}
                  alt={t(card.titleIt, card.titleEn)}
                  fill
                  unoptimized={false}
                  className="object-contain transition-transform duration-500 group-hover:scale-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>

              {/* Text */}
              <div className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold text-white">
                  {t(card.titleIt, card.titleEn)}
                </h3>
                <p className="text-text-secondary text-sm md:text-base mt-3 leading-relaxed">
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
