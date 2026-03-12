"use client";

import { motion } from "framer-motion";
import { useLang } from "@/context/LanguageContext";
import { useIndustry } from "@/context/IndustryContext";

export default function ProblemStatement() {
  const { t } = useLang();
  const { content } = useIndustry();

  return (
    <section className="py-32 md:py-48 px-6">
      <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
        <motion.p
          key={content.problem.problemIt}
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight leading-[1.1] text-white"
        >
          {t(content.problem.problemIt, content.problem.problemEn)}
        </motion.p>

        <motion.p
          key={content.problem.solutionIt}
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.25 }}
          className="mt-10 text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight leading-[1.1] text-text-secondary"
        >
          <span className="text-white">FormaXR</span>{" "}
          {t(content.problem.solutionIt, content.problem.solutionEn)}
        </motion.p>
      </div>
    </section>
  );
}
