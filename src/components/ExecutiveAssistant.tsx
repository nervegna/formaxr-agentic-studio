"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "@/context/LanguageContext";
import { useIndustry } from "@/context/IndustryContext";
import { assistantPrompts, AssistantPrompt } from "@/data/assistantPrompts";
import { SpeakingOrb } from "./SpeakingOrb";

type Phase = "typing-prompt" | "thinking" | "typing-response" | "idle";

export default function ExecutiveAssistant() {
  const { t } = useLang();
  const { industry } = useIndustry();
  const prompts = assistantPrompts[industry];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [phase, setPhase] = useState<Phase>("typing-prompt");
  const [displayedPrompt, setDisplayedPrompt] = useState("");
  const [displayedResponse, setDisplayedResponse] = useState("");
  const [delegateTo, setDelegateTo] = useState("");

  const current: AssistantPrompt = prompts[currentIndex % prompts.length];
  const promptText = t(current.promptIt, current.promptEn);
  const responseText = t(current.responseIt, current.responseEn);
  const delegateText = t(current.delegateToIt, current.delegateToEn);

  // Reset on industry change
  useEffect(() => {
    setCurrentIndex(0);
    setPhase("typing-prompt");
    setDisplayedPrompt("");
    setDisplayedResponse("");
    setDelegateTo("");
  }, [industry]);

  const typeText = useCallback(
    (
      fullText: string,
      setter: (v: string) => void,
      onComplete: () => void,
      speed = 30
    ) => {
      let i = 0;
      setter("");
      const interval = setInterval(() => {
        i++;
        setter(fullText.slice(0, i));
        if (i >= fullText.length) {
          clearInterval(interval);
          onComplete();
        }
      }, speed);
      return () => clearInterval(interval);
    },
    []
  );

  useEffect(() => {
    let cleanup: (() => void) | undefined;
    let timeout: NodeJS.Timeout;

    if (phase === "typing-prompt") {
      setDisplayedResponse("");
      setDelegateTo("");
      cleanup = typeText(promptText, setDisplayedPrompt, () => {
        timeout = setTimeout(() => setPhase("thinking"), 400);
      });
    } else if (phase === "thinking") {
      timeout = setTimeout(() => setPhase("typing-response"), 1200);
    } else if (phase === "typing-response") {
      setDelegateTo(delegateText);
      cleanup = typeText(
        responseText,
        setDisplayedResponse,
        () => {
          timeout = setTimeout(() => setPhase("idle"), 3000);
        },
        25
      );
    } else if (phase === "idle") {
      timeout = setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % prompts.length);
        setPhase("typing-prompt");
      }, 500);
    }

    return () => {
      cleanup?.();
      clearTimeout(timeout);
    };
  }, [phase, promptText, responseText, delegateText, prompts.length, typeText]);

  // Orb speaking level: reacts during thinking & response typing
  const speakingLevel =
    phase === "thinking"
      ? 0.5
      : phase === "typing-response"
        ? 0.7
        : 0;

  return (
    <div className="w-full max-w-[340px] mx-auto">
      {/* Phone-like frame */}
      <div className="rounded-[28px] border border-white/[0.08] bg-black/60 backdrop-blur-2xl backdrop-saturate-[180%] overflow-hidden shadow-2xl shadow-black/40">
        {/* Status bar */}
        <div className="flex items-center justify-between px-5 pt-3 pb-1">
          <span className="text-[10px] font-mono text-white/25 tracking-wider uppercase">
            FormaXR
          </span>
          <div className="flex items-center gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500/80" />
            <span className="text-[10px] font-mono text-white/25">
              {t("Online", "Online")}
            </span>
          </div>
        </div>

        {/* Orb area — extra padding so glow isn't clipped */}
        <div className="flex items-center justify-center px-4 pt-2 pb-0">
          <div className="relative aspect-square w-[200px] md:w-[220px]">
            <SpeakingOrb
              speakingLevel={speakingLevel}
            />
          </div>
        </div>

        {/* Label */}
        <p className="text-center text-[10px] font-mono uppercase tracking-[0.25em] text-white/30 pb-3">
          XR Optimization Studio
        </p>

        {/* Divider */}
        <div className="mx-5 h-px bg-white/[0.06]" />

        {/* Chat area */}
        <div className="px-4 py-4 space-y-3 min-h-[160px]">
          {/* User prompt — aligned right */}
          <AnimatePresence mode="wait">
            {displayedPrompt && (
              <motion.div
                key={`p-${currentIndex}-${industry}`}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.25 }}
                className="flex justify-end"
              >
                <div className="max-w-[85%] rounded-2xl rounded-tr-md bg-white/[0.08] border border-white/[0.06] px-3.5 py-2.5">
                  <p className="text-[11px] leading-relaxed text-white/75">
                    {displayedPrompt}
                    {phase === "typing-prompt" && (
                      <span className="ml-0.5 inline-block h-3 w-[2px] animate-pulse bg-white/50" />
                    )}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Thinking dots */}
          <AnimatePresence>
            {phase === "thinking" && (
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="flex items-center gap-1 px-1"
              >
                {[0, 150, 300].map((delay) => (
                  <span
                    key={delay}
                    className="h-1.5 w-1.5 animate-bounce rounded-full bg-accent/60"
                    style={{ animationDelay: `${delay}ms` }}
                  />
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* AI response — aligned left */}
          <AnimatePresence mode="wait">
            {displayedResponse && (
              <motion.div
                key={`r-${currentIndex}-${industry}`}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.25 }}
                className="flex justify-start"
              >
                <div className="max-w-[85%] space-y-2">
                  <div className="rounded-2xl rounded-tl-md border border-accent/20 bg-accent/[0.08] px-3.5 py-2.5">
                    <p className="text-[11px] leading-relaxed text-white/75">
                      {displayedResponse}
                      {phase === "typing-response" && (
                        <span className="ml-0.5 inline-block h-3 w-[2px] animate-pulse bg-accent/50" />
                      )}
                    </p>
                  </div>

                  {/* Delegate badge */}
                  {delegateTo && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.15, duration: 0.25 }}
                      className="inline-flex items-center gap-1.5 rounded-full border border-accent/20 bg-accent/10 px-2.5 py-1"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                      <span className="text-[10px] font-medium text-accent/90">
                        → {delegateTo}
                      </span>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Bottom bar */}
        <div className="mx-4 h-px bg-white/[0.06]" />
        <div className="flex items-center justify-center px-5 py-2.5">
          <span className="text-[9px] font-mono text-white/15 tracking-wider">
            {t("Coordinamento autonomo degli agenti di ottimizzazione 3D", "Autonomous coordination of 3D optimization agents")}
          </span>
        </div>
      </div>

    </div>
  );
}
