import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://formaxr.vercel.app"),
  title: "FormaXR — Agentic AI Studio for XR-Ready 3D",
  description:
    "Specialized AI agents that optimize, convert, and validate your 3D files for Apple Vision Pro and spatial computing. Built for real estate, interior design, and architecture.",
  keywords: ["XR", "3D optimization", "Vision Pro", "USDZ", "spatial computing", "FormaXR", "real estate", "architecture", "interior design"],
  openGraph: {
    title: "FormaXR — Agentic AI Studio for XR-Ready 3D",
    description:
      "AI agents that make your 3D files Vision Pro ready. For real estate, interior design & architecture.",
    images: [{ url: "/images/formaxr-hero.jpg", width: 1200, height: 630, alt: "FormaXR — Agentic AI Studio for XR-Ready 3D" }],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "FormaXR — Agentic AI Studio for XR-Ready 3D",
    description: "AI agents that make your 3D files Vision Pro ready. For real estate, interior design & architecture.",
    images: ["/images/formaxr-hero.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
