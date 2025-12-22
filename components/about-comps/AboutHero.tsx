"use client";

import React from "react";
import { type Locale, translations } from "@/lib/i18n";
import { motion } from "framer-motion";
import Link from "next/link";

interface AboutHeroProps {
  locale: Locale;
}

const AboutHero: React.FC<AboutHeroProps> = ({ locale }) => {
  const t = translations[locale]

  return (
    <section
      className="relative overflow-hidden bg-gradient-to-b from-background via-background/80 to-muted py-24 md:py-32"
      aria-labelledby="about-heading"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.1),transparent_60%)] pointer-events-none" />

      <div className="container mx-auto max-w-6xl px-6 text-center relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-sm uppercase tracking-widest text-primary font-semibold mb-4"
        >
          {t.about.tagline}
        </motion.p>

        <motion.h1
          id="about-heading"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold text-foreground leading-tight"
        >
           {t.about.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mt-6 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto"
        >
         {t.about.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <Link
           href={locale === "en" ? "/#home-calculators" : `/${locale}#home-calculators`}
            className="rounded-2xl bg-primary text-primary-foreground font-semibold px-8 py-3 text-base shadow-sm hover:opacity-90 transition"
          >
            {t.about.cta}
          </Link>

          <Link
            href={locale === "en" ? "/contact" : `/${locale}/contact`}
            className="rounded-2xl border border-border text-foreground font-semibold px-8 py-3 text-base hover:bg-accent hover:text-accent-foreground transition"
          >
             {t.nav.contact}
          </Link>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
};

export default AboutHero;
