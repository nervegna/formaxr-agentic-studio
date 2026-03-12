"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { useLang } from "@/context/LanguageContext";

export default function Contact() {
  const { t } = useLang();
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const name = data.get("name") as string;
    const studio = data.get("studio") as string;
    const email = data.get("email") as string;
    const phone = data.get("phone") as string;
    const message = data.get("message") as string;

    const subject = encodeURIComponent(`FormaXR \u2014 Contatto da ${name} (${studio})`);
    const body = encodeURIComponent(
      `Nome: ${name}\nStudio: ${studio}\nEmail: ${email}\nTelefono: ${phone || "N/A"}\n\nMessaggio:\n${message || "N/A"}`
    );

    window.location.href = `mailto:nicolas.barale@formaxr.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  const inputClass =
    "w-full rounded-xl border border-white/[0.06] bg-white/[0.03] px-4 py-3.5 text-white placeholder:text-white/20 focus:border-white/20 focus:outline-none transition";

  return (
    <section id="contact" className="relative px-6 py-24 md:py-32 lg:px-20">
      <div className="mx-auto max-w-7xl">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
            {t("Pronti a rendere i vostri spazi XR-ready?", "Ready to make your spaces XR-ready?")}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[#888]">
            {t(
              "Parliamone. Nessun impegno. Solo una conversazione per capire come FormaXR può trasformare i vostri file 3D.",
              "Let\u2019s talk. No commitment. Just a conversation to understand how FormaXR can transform your 3D files."
            )}
          </p>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="mx-auto max-w-xl"
        >
          {submitted ? (
            <div className="rounded-3xl border border-white/[0.06] bg-white/[0.03] p-8 text-center backdrop-blur-sm md:p-12">
              <div className="mb-4 text-4xl text-white/40">&#10003;</div>
              <p className="text-xl font-semibold text-white">
                {t("Grazie per averci contattato!", "Thank you for reaching out!")}
              </p>
              <p className="mt-2 text-[#888]">
                {t(
                  "Il vostro client email si aprir\u00e0 con i dettagli. Vi risponderemo al pi\u00f9 presto.",
                  "Your email client will open with the details. We\u2019ll get back to you shortly."
                )}
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-6 text-sm text-white/60 underline underline-offset-4 transition hover:text-white"
              >
                {t("Invia un altro messaggio", "Send another message")}
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-5 rounded-3xl border border-white/[0.06] bg-white/[0.03] p-8 backdrop-blur-sm md:p-12"
            >
              {/* Name */}
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-[#888]">
                  {t("Nome", "Name")} *
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder={t("Il vostro nome", "Your name")}
                  className={inputClass}
                />
              </div>

              {/* Firm */}
              <div>
                <label htmlFor="studio" className="mb-1.5 block text-sm font-medium text-[#888]">
                  {t("Studio / Azienda", "Studio / Company")} *
                </label>
                <input
                  id="studio"
                  name="studio"
                  type="text"
                  required
                  placeholder={t("Nome dello studio", "Your firm name")}
                  className={inputClass}
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-[#888]">
                  Email *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="nome@studio.com"
                  className={inputClass}
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-[#888]">
                  {t("Telefono", "Phone")}
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+39 ..."
                  className={inputClass}
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-[#888]">
                  {t("Messaggio", "Message")}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder={t("Come possiamo aiutarvi?", "How can we help you?")}
                  className={`${inputClass} resize-none`}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="mt-2 w-full rounded-full bg-white px-8 py-4 text-base font-medium text-black transition hover:brightness-[0.9]"
              >
                {t("Invia Messaggio", "Send Message")}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
