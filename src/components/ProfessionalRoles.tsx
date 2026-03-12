"use client";

import { motion } from "framer-motion";
import { useLang } from "@/context/LanguageContext";
import { useIndustry } from "@/context/IndustryContext";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function ProfessionalRoles() {
  const { t } = useLang();
  const { content } = useIndustry();

  return (
    <section id="ruoli" className="py-24 md:py-32 px-6">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
            {t(content.rolesHeadlineIt, content.rolesHeadlineEn)}
          </h2>
          <p className="mt-6 text-lg md:text-xl text-text-secondary">
            {t(content.rolesSubIt, content.rolesSubEn)}
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          key={content.rolesHeadlineIt}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
        >
          {content.roles.map((role) => (
            <motion.div
              key={role.number + role.titleIt}
              variants={cardVariants}
              className="group rounded-2xl border border-white/[0.06] bg-white/[0.03] backdrop-blur p-6 md:p-8 transition-all duration-300 hover:border-white/[0.12]"
            >
              <span className="text-text-muted text-sm font-mono">
                {role.number}
              </span>
              <h3 className="mt-3 text-lg md:text-xl font-semibold text-white">
                {t(role.titleIt, role.titleEn)}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                {t(role.capsIt, role.capsEn)}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
