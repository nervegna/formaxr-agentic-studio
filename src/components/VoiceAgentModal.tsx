"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Room,
  RoomEvent,
  Track,
  ConnectionState,
  RemoteTrackPublication,
  RemoteParticipant,
} from "livekit-client";
import { useLang } from "@/context/LanguageContext";
import { useIndustry } from "@/context/IndustryContext";
import { SpeakingOrb } from "./SpeakingOrb";

type AgentState = "idle" | "connecting" | "listening" | "thinking" | "speaking";

interface VoiceAgentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function VoiceAgentModal({ isOpen, onClose }: VoiceAgentModalProps) {
  const { lang, t } = useLang();
  const { industry } = useIndustry();

  const [agentState, setAgentState] = useState<AgentState>("idle");
  const [transcript, setTranscript] = useState("");
  const [error, setError] = useState("");

  const roomRef = useRef<Room | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const [speakingLevel, setSpeakingLevel] = useState(0);
  const rafRef = useRef<number>(0);

  const startAudioAnalysis = useCallback((track: MediaStreamTrack) => {
    try {
      const audioContext = new AudioContext();
      const source = audioContext.createMediaStreamSource(new MediaStream([track]));
      const analyser = audioContext.createAnalyser();
      analyser.fftSize = 256;
      analyser.smoothingTimeConstant = 0.4;
      source.connect(analyser);
      analyserRef.current = analyser;
      const dataArray = new Uint8Array(analyser.frequencyBinCount);
      const tick = () => {
        if (!analyserRef.current) return;
        analyserRef.current.getByteFrequencyData(dataArray);
        let sum = 0;
        for (let i = 0; i < dataArray.length; i++) sum += (dataArray[i] / 255) ** 2;
        setSpeakingLevel(Math.min(Math.sqrt(sum / dataArray.length) * 3, 1));
        rafRef.current = requestAnimationFrame(tick);
      };
      tick();
    } catch { /* optional */ }
  }, []);

  const disconnect = useCallback(() => {
    cancelAnimationFrame(rafRef.current);
    analyserRef.current = null;
    if (roomRef.current) { roomRef.current.disconnect(); roomRef.current = null; }
    setAgentState("idle");
    setTranscript("");
    setSpeakingLevel(0);
  }, []);

  const connect = useCallback(async () => {
    setError("");
    setAgentState("connecting");
    try {
      const res = await fetch("/api/livekit-token", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ industry, lang }),
      });
      if (!res.ok) throw new Error("Failed to get token");
      const { token, url } = await res.json();

      const room = new Room({
        audioCaptureDefaults: { echoCancellation: true, noiseSuppression: true },
        adaptiveStream: true,
      });
      roomRef.current = room;

      room.on(RoomEvent.TrackSubscribed, (track: RemoteTrackPublication["track"], _pub: RemoteTrackPublication, _p: RemoteParticipant) => {
        if (track && track.kind === Track.Kind.Audio) {
          const el = track.attach();
          if (audioRef.current?.parentElement) audioRef.current.parentElement.appendChild(el);
          const mt = track.mediaStreamTrack;
          if (mt) startAudioAnalysis(mt);
          setAgentState("listening");
        }
      });
      room.on(RoomEvent.TrackUnsubscribed, () => { cancelAnimationFrame(rafRef.current); analyserRef.current = null; setSpeakingLevel(0); });
      room.on(RoomEvent.DataReceived, (data) => { try { const msg = JSON.parse(new TextDecoder().decode(data)); if (msg.type === "transcript" && msg.text) setTranscript(msg.text); } catch { /* */ } });
      room.on(RoomEvent.Disconnected, () => { setAgentState("idle"); setSpeakingLevel(0); });
      room.on(RoomEvent.ConnectionStateChanged, (state: ConnectionState) => { if (state === ConnectionState.Connected) setAgentState("listening"); });

      await room.connect(url, token);
      await room.localParticipant.setMicrophoneEnabled(true);
      setAgentState("listening");
    } catch (err) {
      console.error("Connection error:", err);
      setError(t("Impossibile connettersi. Riprova.", "Unable to connect. Please try again."));
      setAgentState("idle");
    }
  }, [industry, lang, t, startAudioAnalysis]);

  useEffect(() => { if (!isOpen) disconnect(); }, [isOpen, disconnect]);
  useEffect(() => () => disconnect(), [disconnect]);

  const isConnected = agentState !== "idle" && agentState !== "connecting";

  const stateLabel = {
    idle: t("Pronto", "Ready"),
    connecting: t("Connessione...", "Connecting..."),
    listening: t("In ascolto...", "Listening..."),
    thinking: t("Elaborazione...", "Processing..."),
    speaking: t("Risponde...", "Speaking..."),
  }[agentState];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex items-end justify-center bg-black/80 backdrop-blur-xl sm:items-center"
          onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="relative w-full sm:mx-4 sm:max-w-sm"
          >
            {/* Card — full-width bottom sheet on mobile, centered card on sm+ */}
            <div className="rounded-t-[28px] border-t border-x border-white/[0.08] bg-black/95 backdrop-blur-2xl sm:rounded-[28px] sm:border sm:shadow-2xl">
              {/* Drag handle (mobile) */}
              <div className="flex justify-center pt-3 sm:hidden">
                <div className="h-1 w-10 rounded-full bg-white/20" />
              </div>

              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/[0.08] text-white/50 transition-colors hover:bg-white/[0.15] hover:text-white sm:right-5"
                aria-label="Close"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M1 1l12 12M13 1L1 13" />
                </svg>
              </button>

              {/* Header */}
              <div className="px-6 pt-4 pb-1 sm:pt-5">
                <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-white/25">FormaXR</p>
                <h3 className="mt-1 text-base font-semibold text-white sm:text-lg">XR Optimization Studio</h3>
              </div>

              {/* Orb — scales with viewport */}
              <div className="flex items-center justify-center px-6 py-6">
                <div className="relative aspect-square w-[45vw] max-w-[220px] sm:w-[220px]">
                  <SpeakingOrb speakingLevel={speakingLevel} />
                </div>
              </div>

              {/* State */}
              <div className="flex items-center justify-center gap-2 pb-4">
                {isConnected && <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />}
                <span className="text-sm font-mono text-white/40 sm:text-xs">{stateLabel}</span>
              </div>

              {/* Transcript */}
              {transcript && (
                <div className="mx-5 mb-4 rounded-2xl bg-white/[0.04] border border-white/[0.06] px-4 py-3">
                  <p className="text-sm leading-relaxed text-white/60 sm:text-xs">{transcript}</p>
                </div>
              )}

              {/* Error */}
              {error && (
                <div className="mx-5 mb-4 rounded-2xl bg-red-500/10 border border-red-500/20 px-4 py-3">
                  <p className="text-sm text-red-400 sm:text-xs">{error}</p>
                </div>
              )}

              <div className="mx-5 h-px bg-white/[0.06]" />

              {/* Action */}
              <div className="px-5 py-5 sm:py-4">
                {!isConnected ? (
                  <button
                    onClick={connect}
                    disabled={agentState === "connecting"}
                    className="flex w-full items-center justify-center gap-2.5 rounded-2xl bg-white py-4 text-base font-medium text-black transition-all hover:brightness-[0.9] disabled:opacity-50 sm:py-3.5 sm:text-sm"
                  >
                    {agentState === "connecting" ? (
                      <span className="h-5 w-5 animate-spin rounded-full border-2 border-black/20 border-t-black sm:h-4 sm:w-4" />
                    ) : (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sm:h-4 sm:w-4">
                        <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
                        <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                        <line x1="12" x2="12" y1="19" y2="22" />
                      </svg>
                    )}
                    {agentState === "connecting" ? t("Connessione...", "Connecting...") : t("Parla con l'AI", "Talk to the AI")}
                  </button>
                ) : (
                  <button
                    onClick={disconnect}
                    className="flex w-full items-center justify-center gap-2.5 rounded-2xl border border-red-500/20 bg-red-500/10 py-4 text-base font-medium text-red-400 transition-all hover:bg-red-500/20 sm:py-3.5 sm:text-sm"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="sm:h-4 sm:w-4">
                      <rect x="6" y="6" width="12" height="12" rx="2" />
                    </svg>
                    {t("Termina conversazione", "End conversation")}
                  </button>
                )}
              </div>

              {/* Safe area spacer for mobile */}
              <div className="h-2 sm:hidden" />
            </div>

            <div className="hidden"><audio ref={audioRef} autoPlay /></div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
