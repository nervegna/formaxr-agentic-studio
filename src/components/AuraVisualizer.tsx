"use client";

import { useEffect, useRef } from "react";

interface AuraVisualizerProps {
  color?: string;
  isActive?: boolean;
  className?: string;
}

export default function AuraVisualizer({
  color = "#1FD5F9",
  isActive = true,
  className = "",
}: AuraVisualizerProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animFrameRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const size = 320;
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    ctx.scale(dpr, dpr);

    const center = size / 2;

    // Parse hex color to RGB
    const r = parseInt(color.slice(1, 3), 16);
    const g = parseInt(color.slice(3, 5), 16);
    const b = parseInt(color.slice(5, 7), 16);

    let time = 0;

    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, size, size);

      time += 0.008;

      // Multiple layered glowing orbs for organic aura feel
      const layers = 5;
      for (let layer = layers; layer >= 0; layer--) {
        const progress = layer / layers;
        const baseRadius = 40 + progress * 70;

        // Organic pulsing with multiple sine waves
        const pulse1 = Math.sin(time * 1.2 + layer * 0.5) * 0.15;
        const pulse2 = Math.sin(time * 2.1 + layer * 0.8) * 0.08;
        const pulse3 = Math.sin(time * 0.7 + layer * 1.2) * 0.12;
        const breathe = isActive ? 1 + pulse1 + pulse2 + pulse3 : 0.85;

        const radius = baseRadius * breathe;
        const alpha = (0.08 - progress * 0.015) * (isActive ? 1 : 0.4);

        // Offset each layer slightly for organic movement
        const offsetX = Math.sin(time * 0.9 + layer * 1.5) * 3;
        const offsetY = Math.cos(time * 1.1 + layer * 1.3) * 3;

        const gradient = ctx.createRadialGradient(
          center + offsetX,
          center + offsetY,
          0,
          center + offsetX,
          center + offsetY,
          radius
        );

        // Color shift per layer
        const shift = layer * 0.1;
        const sr = Math.min(255, r + (255 - r) * shift);
        const sg = Math.min(255, g + (255 - g) * shift);
        const sb = Math.min(255, b + (255 - b) * shift);

        gradient.addColorStop(0, `rgba(${sr}, ${sg}, ${sb}, ${alpha * 3})`);
        gradient.addColorStop(0.4, `rgba(${sr}, ${sg}, ${sb}, ${alpha * 1.5})`);
        gradient.addColorStop(0.7, `rgba(${r}, ${g}, ${b}, ${alpha * 0.6})`);
        gradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);

        ctx.beginPath();
        ctx.arc(center + offsetX, center + offsetY, radius, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      }

      // Bright core
      const coreGrad = ctx.createRadialGradient(center, center, 0, center, center, 25);
      const corePulse = isActive ? 0.6 + Math.sin(time * 1.5) * 0.2 : 0.3;
      coreGrad.addColorStop(0, `rgba(255, 255, 255, ${corePulse})`);
      coreGrad.addColorStop(0.3, `rgba(${r}, ${g}, ${b}, ${corePulse * 0.7})`);
      coreGrad.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);

      ctx.beginPath();
      ctx.arc(center, center, 25, 0, Math.PI * 2);
      ctx.fillStyle = coreGrad;
      ctx.fill();

      animFrameRef.current = requestAnimationFrame(draw);
    }

    draw();

    return () => cancelAnimationFrame(animFrameRef.current);
  }, [color, isActive]);

  return (
    <canvas
      ref={canvasRef}
      className={`h-full w-full ${className}`}
      style={{ width: 320, height: 320 }}
    />
  );
}
