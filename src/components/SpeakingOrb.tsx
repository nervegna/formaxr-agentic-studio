"use client";

import React, { useEffect, useRef, FC } from "react";
import { cn } from "@/lib/utils";

interface SpeakingOrbProps {
  className?: string;
  /** 0–1 intensity to simulate speaking */
  speakingLevel?: number;
}

const vert = /* glsl */ `
  precision highp float;
  attribute vec2 position;
  attribute vec2 uv;
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 0.0, 1.0);
  }
`;

// FormaXR brand colors: cyan, cyan, purple
const frag = /* glsl */ `
  precision highp float;

  uniform float iTime;
  uniform vec3 iResolution;
  uniform float hover;
  uniform float rot;
  uniform float hoverIntensity;
  varying vec2 vUv;

  vec3 hash33(vec3 p3) {
    p3 = fract(p3 * vec3(0.1031, 0.11369, 0.13787));
    p3 += dot(p3, p3.yxz + 19.19);
    return -1.0 + 2.0 * fract(vec3(
      p3.x + p3.y, p3.x + p3.z, p3.y + p3.z
    ) * p3.zyx);
  }

  float snoise3(vec3 p) {
    const float K1 = 0.333333333;
    const float K2 = 0.166666667;
    vec3 i = floor(p + (p.x + p.y + p.z) * K1);
    vec3 d0 = p - (i - (i.x + i.y + i.z) * K2);
    vec3 e = step(vec3(0.0), d0 - d0.yzx);
    vec3 i1 = e * (1.0 - e.zxy);
    vec3 i2 = 1.0 - e.zxy * (1.0 - e);
    vec3 d1 = d0 - (i1 - K2);
    vec3 d2 = d0 - (i2 - K1);
    vec3 d3 = d0 - 0.5;
    vec4 h = max(0.6 - vec4(
      dot(d0, d0), dot(d1, d1), dot(d2, d2), dot(d3, d3)
    ), 0.0);
    vec4 n = h * h * h * h * vec4(
      dot(d0, hash33(i)),
      dot(d1, hash33(i + i1)),
      dot(d2, hash33(i + i2)),
      dot(d3, hash33(i + 1.0))
    );
    return dot(vec4(31.316), n);
  }

  vec4 extractAlpha(vec3 colorIn) {
    float a = max(max(colorIn.r, colorIn.g), colorIn.b);
    return vec4(colorIn.rgb / (a + 1e-5), a);
  }

  // FormaXR brand: cyan, cyan, purple
  const vec3 baseColor1 = vec3(0.024, 0.714, 0.831);  // cyan #06b6d4
  const vec3 baseColor2 = vec3(0.133, 0.827, 0.933);  // cyan #22d3ee
  const vec3 baseColor3 = vec3(0.659, 0.333, 0.969);  // purple #a855f7
  const float innerRadius = 0.6;
  const float noiseScale = 0.65;

  float light1(float intensity, float attenuation, float dist) {
    return intensity / (1.0 + dist * attenuation);
  }
  float light2(float intensity, float attenuation, float dist) {
    return intensity / (1.0 + dist * dist * attenuation);
  }

  vec4 draw(vec2 uv) {
    float ang = atan(uv.y, uv.x);
    float len = length(uv);
    float invLen = len > 0.0 ? 1.0 / len : 0.0;

    float n0 = snoise3(vec3(uv * noiseScale, iTime * 0.5)) * 0.5 + 0.5;
    float r0 = mix(mix(innerRadius, 1.0, 0.4), mix(innerRadius, 1.0, 0.6), n0);
    float d0 = distance(uv, (r0 * invLen) * uv);
    float v0 = light1(1.0, 10.0, d0);
    v0 *= smoothstep(r0 * 1.05, r0, len);
    float cl = cos(ang + iTime * 2.0) * 0.5 + 0.5;

    float a = iTime * -1.0;
    vec2 pos = vec2(cos(a), sin(a)) * r0;
    float d = distance(uv, pos);
    float v1 = light2(1.5, 5.0, d);
    v1 *= light1(1.0, 50.0, d0);

    float v2 = smoothstep(1.0, mix(innerRadius, 1.0, n0 * 0.5), len);
    float v3 = smoothstep(innerRadius, mix(innerRadius, 1.0, 0.5), len);

    vec3 col = mix(baseColor1, baseColor2, cl);
    col = mix(baseColor3, col, v0);
    col = (col + v1) * v2 * v3;
    col = clamp(col, 0.0, 1.0);

    return extractAlpha(col);
  }

  vec4 mainImage(vec2 fragCoord) {
    vec2 center = iResolution.xy * 0.5;
    float size = min(iResolution.x, iResolution.y);
    vec2 uv = (fragCoord - center) / size * 2.0;

    float angle = rot;
    float s = sin(angle);
    float c = cos(angle);
    uv = vec2(c * uv.x - s * uv.y, s * uv.x + c * uv.y);

    uv.x += hover * hoverIntensity * 0.1 * sin(uv.y * 10.0 + iTime);
    uv.y += hover * hoverIntensity * 0.1 * sin(uv.x * 10.0 + iTime);

    return draw(uv);
  }

  void main() {
    vec2 fragCoord = vUv * iResolution.xy;
    vec4 col = mainImage(fragCoord);
    gl_FragColor = vec4(col.rgb * col.a, col.a);
  }
`;

export const SpeakingOrb: FC<SpeakingOrbProps> = ({
  className,
  speakingLevel = 0,
}) => {
  const ctnDom = useRef<HTMLDivElement>(null);
  const speakingRef = useRef(speakingLevel);

  useEffect(() => {
    speakingRef.current = speakingLevel;
  }, [speakingLevel]);

  useEffect(() => {
    const container = ctnDom.current;
    if (!container) return;

    // Dynamic import to avoid SSR issues with OGL
    let cancelled = false;

    import("ogl").then(({ Renderer, Program, Mesh, Triangle, Vec3 }) => {
      if (cancelled || !container) return;

      const renderer = new Renderer({
        alpha: true,
        premultipliedAlpha: false,
        antialias: true,
        dpr: window.devicePixelRatio || 1,
      });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const gl = renderer.gl as any;
      gl.clearColor(0, 0, 0, 0);
      gl.enable(gl.BLEND);
      gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

      while (container.firstChild) container.removeChild(container.firstChild);
      container.appendChild(gl.canvas);

      const geometry = new Triangle(gl);
      const program = new Program(gl, {
        vertex: vert,
        fragment: frag,
        uniforms: {
          iTime: { value: 0 },
          iResolution: {
            value: new Vec3(
              gl.canvas.width,
              gl.canvas.height,
              gl.canvas.width / gl.canvas.height
            ),
          },
          hover: { value: 0 },
          rot: { value: 0 },
          hoverIntensity: { value: 0 },
        },
      });

      const mesh = new Mesh(gl, { geometry, program });

      const resize = () => {
        if (!container) return;
        const dpr = window.devicePixelRatio || 1;
        const width = container.clientWidth;
        const height = container.clientHeight;
        if (width === 0 || height === 0) return;
        renderer.setSize(width * dpr, height * dpr);
        gl.canvas.style.width = width + "px";
        gl.canvas.style.height = height + "px";
        program.uniforms.iResolution.value.set(
          gl.canvas.width,
          gl.canvas.height,
          gl.canvas.width / gl.canvas.height
        );
      };
      window.addEventListener("resize", resize);
      resize();

      let lastTime = 0;
      let currentRot = 0;
      let rafId: number;

      const update = (t: number) => {
        rafId = requestAnimationFrame(update);
        const dt = (t - lastTime) * 0.001;
        lastTime = t;
        program.uniforms.iTime.value = t * 0.001;

        const level = speakingRef.current;
        const flutter =
          level > 0
            ? Math.sin(t * 0.012) * 0.15 +
              Math.sin(t * 0.019) * 0.1 +
              Math.sin(t * 0.007) * 0.08
            : 0;
        const effectiveLevel = Math.min(Math.max(level + flutter, 0), 1);

        currentRot += dt * (0.3 + effectiveLevel * 2.0);
        program.uniforms.rot.value = currentRot;
        program.uniforms.hover.value = Math.min(effectiveLevel * 2.0, 1.0);
        program.uniforms.hoverIntensity.value = Math.min(
          effectiveLevel * 0.8,
          0.8
        );

        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
        renderer.render({ scene: mesh });
      };

      rafId = requestAnimationFrame(update);

      // Cleanup
      const currentContainer = container;
      return () => {
        cancelAnimationFrame(rafId);
        window.removeEventListener("resize", resize);
        try {
          if (currentContainer.contains(gl.canvas)) {
            currentContainer.removeChild(gl.canvas);
          }
        } catch {
          /* noop */
        }
        gl.getExtension("WEBGL_lose_context")?.loseContext();
      };
    });

    return () => {
      cancelled = true;
      // Children will be cleaned up on next mount
      while (container.firstChild) container.removeChild(container.firstChild);
    };
  }, []);

  return (
    <div
      ref={ctnDom}
      className={cn("relative h-full w-full", className)}
    />
  );
};
