"use client";

import { motion } from "framer-motion";
import { useLang } from "@/context/LanguageContext";
import { useIndustry } from "@/context/IndustryContext";

export default function ClosingStatement() {
  const { t } = useLang();
  const { content } = useIndustry();

  return (
    <section className="relative px-6 py-32 md:py-48 lg:px-20">
      <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
        <motion.p
          key={content.closing.line1It}
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-3xl font-bold leading-tight tracking-tight text-white md:text-4xl lg:text-5xl xl:text-6xl"
        >
          {t(content.closing.line1It, content.closing.line1En)}
        </motion.p>

        <motion.p
          key={content.closing.line2It}
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.25 }}
          className="mt-4 text-3xl font-bold leading-tight tracking-tight text-[#888] md:text-4xl lg:text-5xl xl:text-6xl"
        >
          {t(content.closing.line2It, content.closing.line2En)}
        </motion.p>
      </div>
    </section>
  );
}
