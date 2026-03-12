"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] px-6 py-16 text-center lg:px-20">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4">
        {/* Logo */}
        <Image
          src="/images/logo-white.png"
          alt="FormaXR"
          width={160}
          height={40}
          className="h-10 w-auto"
        />

        {/* Powered by */}
        <p className="text-sm text-[#555]">
          Powered by Claude &amp; OpenAI &mdash; Spatial Computing
        </p>

        {/* Wrapped by */}
        <p className="text-xs text-[#555]">
          Built by OpenClaw Vertical AI
        </p>

        {/* Contact email */}
        <a
          href="mailto:nicolas.barale@formaxr.com"
          className="text-sm text-[#888] transition hover:text-white"
        >
          nicolas.barale@formaxr.com
        </a>

        {/* Copyright */}
        <p className="mt-2 text-xs text-[#555]">
          &copy; 2025 MetaRKTKS S.r.l. &mdash; All rights reserved.
        </p>
      </div>
    </footer>
  );
}
