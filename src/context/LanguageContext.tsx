"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type Lang = "it" | "en";

interface LanguageContextType {
  lang: Lang;
  toggleLang: () => void;
  t: (it: string, en: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("it");

  const toggleLang = () => setLang((prev) => (prev === "it" ? "en" : "it"));
  const t = (it: string, en: string) => (lang === "it" ? it : en);

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLang must be used within LanguageProvider");
  return context;
}
