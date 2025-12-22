"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Locale, translations } from "@/lib/i18n";

interface ContactHeroProps {
  locale: Locale;
}

export default function ContactHero({ locale }: ContactHeroProps) {
  const t = translations[locale].contact.hero;

  return (
    <section
      className="relative overflow-hidden bg-gradient-to-b from-background via-background/80 to-muted py-24 md:py-32"
      aria-labelledby="contact-heading"
    >
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(99,102,241,0.1),transparent_60%)] pointer-events-none" />

      <div className="container mx-auto max-w-6xl px-6 text-center relative z-10">


        <motion.h1
          id="contact-heading"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold text-foreground leading-tight"
        >
          {t.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mt-6 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto"
        >
          {t.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <Link
            href="mailto:support@vastcalculators.com"
            className="rounded-2xl bg-primary text-primary-foreground font-semibold px-8 py-3 text-base shadow-sm hover:opacity-90 transition"
          >
            {t.primaryCta}
          </Link>

          <Link
            href={locale === "en" ? "/about" : `/${locale}/about`}
            className="rounded-2xl border border-border text-zinc-50 bg-zinc-900 font-semibold px-8 py-3 text-base hover:bg-zinc-900/95 transition"
          >
            {t.secondaryCta}
          </Link>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
}
