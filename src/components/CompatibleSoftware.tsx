"use client";

import { motion } from "framer-motion";
import { useLang } from "@/context/LanguageContext";

const tools = [
  { name: "Blender", svg: <svg viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor"><path d="M12.51 13.214c.046-.8.438-1.506 1.03-2.006a3.424 3.424 0 0 1 2.212-.79c.85 0 1.631.3 2.211.79.592.5.983 1.206 1.028 2.005.045.823-.285 1.586-.865 2.153a3.389 3.389 0 0 1-2.374.938 3.393 3.393 0 0 1-2.376-.938c-.58-.567-.91-1.33-.865-2.152M7.35 14.831c.006.314.106.922.256 1.398a7.372 7.372 0 0 0 1.593 2.757 8.227 8.227 0 0 0 2.787 2.001 8.947 8.947 0 0 0 3.66.76 8.964 8.964 0 0 0 3.657-.772 8.285 8.285 0 0 0 2.785-2.01 7.428 7.428 0 0 0 1.592-2.762 6.964 6.964 0 0 0 .04-3.791 7.155 7.155 0 0 0-1.166-2.334 10.015 10.015 0 0 0-.5-.59l-5.02-5.096-.013-.014a1.63 1.63 0 0 0-.544-.378 1.346 1.346 0 0 0-1.002 0 1.63 1.63 0 0 0-.544.378L13.507 6.08l-3.503 2.187c-.32.2-.639.392-.921.598l-.075.053a.67.67 0 0 0-.3.56c0 .297.227.543.532.57l2.253.168-4.084 3.18-.013.012a.693.693 0 0 0-.247.525m-3.586.485c-.085-.375-.124-.72-.124-1.04 0-.835.22-1.593.591-2.268.37-.674.919-1.277 1.617-1.774l2.17-1.548L3.04 5.564c-.145-.105-.315-.2-.368-.24a.7.7 0 0 0-.413-.135.71.71 0 0 0-.644.393.7.7 0 0 0-.082.322l.001.073 1.2 5.73-1.776 1.4c-1.005.788-1.61 1.753-1.855 2.735a5.847 5.847 0 0 0 .132 3.103c.349 1.051.962 2.02 1.826 2.826a8.88 8.88 0 0 0 3.12 1.942 10.715 10.715 0 0 0 3.986.752 10.49 10.49 0 0 0 3.337-.536A8.009 8.009 0 0 1 5.755 20.14c-1.053-.946-1.691-2.063-1.992-2.824"/></svg> },
  { name: "SketchUp", svg: <svg viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.752 16.5H7.248a.75.75 0 0 1-.75-.75V8.25a.75.75 0 0 1 .75-.75h9.504a.75.75 0 0 1 .75.75v7.5a.75.75 0 0 1-.75.75z"/></svg> },
  { name: "3ds Max", svg: <svg viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor"><path d="M2 2v20h20V2H2zm9.12 15.48L4.56 12l6.56-5.48v3.24L6.68 12l4.44 2.24v3.24zm1.76 0V14.24L17.32 12l-4.44-2.24V6.52L19.44 12l-6.56 5.48z"/></svg> },
  { name: "AutoCAD", svg: <svg viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor"><path d="M.563 17.86L0 16.858l7.21-4.56.563.994-7.21 4.567zm7.21-4.567l-.563-.993 8.25-3.168.353 1.055-8.04 3.106zM23.437 6.14L24 7.142l-7.21 4.56-.563-.994 7.21-4.567zm-7.21 4.567l.563.993-8.25 3.168-.353-1.055 8.04-3.106z"/></svg> },
  { name: "Rhino", svg: <svg viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15H7v-2h4v2zm6-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg> },
  { name: "Revit", svg: <svg viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor"><path d="M2 2v20h20V2H2zm10 16H6v-2h6v2zm4-4H6v-2h10v2zm2-4H6V8h12v2z"/></svg> },
];

export default function CompatibleSoftware() {
  const { t } = useLang();

  return (
    <section className="relative px-6 py-12 lg:px-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto max-w-4xl"
      >
        <p className="mb-6 text-center text-xs font-medium uppercase tracking-[0.2em] text-white/30">
          {t("Compatibile con", "Compatible with")}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {tools.map((tool, i) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="flex flex-col items-center gap-2 text-white/30 transition-colors hover:text-white/60"
            >
              {tool.svg}
              <span className="text-[10px] font-mono tracking-wider">{tool.name}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
