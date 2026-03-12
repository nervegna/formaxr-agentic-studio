"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLang } from "@/context/LanguageContext";
import { useIndustry } from "@/context/IndustryContext";

export default function ProblemStatement() {
  const { t } = useLang();
  const { content } = useIndustry();

  return (
    <section className="py-24 md:py-32 px-6">
      <div className="mx-auto max-w-7xl">
        {/* Two-card layout */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {/* Problem Card */}
          <motion.div
            key={content.problem.problemIt}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.03]"
          >
            {/* Image */}
            <div className="relative aspect-[16/9] overflow-hidden">
              <Image
                src="/images/xr-wireframe-living.jpg"
                alt="3D wireframe visualization"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            </div>

            {/* Text overlay */}
            <div className="p-6 md:p-8">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/30">
                {t("Il problema", "The problem")}
              </span>
              <p className="mt-3 text-lg md:text-xl font-semibold leading-snug text-white/80">
                {t(content.problem.problemIt, content.problem.problemEn)}
              </p>
            </div>
          </motion.div>

          {/* Solution Card */}
          <motion.div
            key={content.problem.solutionIt}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
            className="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.03]"
          >
            {/* Image */}
            <div className="relative aspect-[16/9] overflow-hidden">
              <Image
                src="/images/vp-interior.png"
                alt="Vision Pro spatial experience"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            </div>

            {/* Text overlay */}
            <div className="p-6 md:p-8">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#06b6d4]/60">
                {t("La soluzione", "The solution")}
              </span>
              <p className="mt-3 text-lg md:text-xl font-semibold leading-snug text-white">
                <span className="text-[#06b6d4]">FormaXR</span>{" "}
                <span className="text-white/80">
                  {t(content.problem.solutionIt, content.problem.solutionEn)}
                </span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
