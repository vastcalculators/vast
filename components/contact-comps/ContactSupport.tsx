"use client";

import { motion } from "framer-motion";
import { Locale, translations } from "@/lib/i18n";

interface ContactSupportProps {
  locale: Locale;
}

export default function ContactSupport({ locale }: ContactSupportProps) {
  const t = translations[locale].contact.support;

  return (
    <section
      className="relative overflow-hidden bg-gradient-to-b from-white via-zinc-50 to-zinc-100 py-24 md:py-32"
      aria-labelledby="support-heading"
    >
      {/* Subtle glowing background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(99,102,241,0.06),transparent_70%)] pointer-events-none" />

      <div className="container mx-auto max-w-6xl px-6 text-center relative z-10">
        <motion.h2
          id="support-heading"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-extrabold text-zinc-900 mb-6"
        >
          {t.title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-lg md:text-xl text-zinc-600 max-w-3xl mx-auto mb-16"
        >
          {t.subtitle}
        </motion.p>

        {/* Support Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {t.details.map((detail:any, i:any) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-8 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.15)] hover:scale-[1.03] transition-all"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-100/70 via-transparent to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative z-10">
                <detail.icon className="w-10 h-10 text-indigo-500 mb-4" />
                <h3 className="text-xl font-semibold text-zinc-900 mb-2">
                  {detail.heading}
                </h3>
                <p className="text-zinc-600">{detail.content}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-zinc-100 to-transparent pointer-events-none" />
    </section>
  );
}
