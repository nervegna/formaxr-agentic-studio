"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { IndustryKey, industryContent, IndustryContent } from "@/data/industryContent";

interface IndustryContextType {
  industry: IndustryKey;
  setIndustry: (key: IndustryKey) => void;
  content: IndustryContent;
}

const IndustryContext = createContext<IndustryContextType | undefined>(undefined);

export function IndustryProvider({ children }: { children: ReactNode }) {
  const [industry, setIndustry] = useState<IndustryKey>("real-estate");

  return (
    <IndustryContext.Provider
      value={{
        industry,
        setIndustry,
        content: industryContent[industry],
      }}
    >
      {children}
    </IndustryContext.Provider>
  );
}

export function useIndustry() {
  const context = useContext(IndustryContext);
  if (!context)
    throw new Error("useIndustry must be used within IndustryProvider");
  return context;
}
