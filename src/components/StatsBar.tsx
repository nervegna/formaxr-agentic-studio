"use client";

import { motion } from "framer-motion";
import { useCountUp } from "@/hooks/useCountUp";
import { useLang } from "@/context/LanguageContext";

interface StatItemProps {
  end: number;
  suffix: string;
  label: string;
  hasDivider?: boolean;
}

function StatItem({ end, suffix, label, hasDivider = true }: StatItemProps) {
  const { count, ref } = useCountUp(end, 2000);

  return (
    <div
      ref={ref}
      className={`flex flex-col items-center justify-center px-6 py-8 ${
        hasDivider
          ? "border-b border-white/[0.06] md:border-b-0 md:border-r"
          : ""
      }`}
    >
      <span className="font-mono text-4xl font-bold text-white md:text-5xl">
        {count}
        {suffix}
      </span>
      <span className="mt-3 text-center text-sm text-text-secondary">
        {label}
      </span>
    </div>
  );
}

export default function StatsBar() {
  const { t } = useLang();

  const stats: Omit<StatItemProps, "hasDivider">[] = [
    {
      end: 90,
      suffix: "%",
      label: t("Riduzione Poligoni", "Polygon Reduction"),
    },
    {
      end: 35,
      suffix: "%",
      label: t("Vendite Più Rapide", "Faster Sales"),
    },
    {
      end: 87,
      suffix: "%",
      label: t("Più Visite", "More Viewings"),
    },
    {
      end: 0,
      suffix: "s",
      label: t("Lavoro Manuale", "Manual Work"),
    },
  ];

  return (
    <section className="relative z-10 mt-0 px-6 lg:px-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto grid max-w-5xl grid-cols-2 overflow-hidden rounded-3xl border border-white/[0.06] bg-white/[0.03] backdrop-blur-xl md:grid-cols-4"
      >
        {stats.map((stat, i) => (
          <StatItem
            key={stat.label}
            {...stat}
            hasDivider={i < stats.length - 1}
          />
        ))}
      </motion.div>
    </section>
  );
}
