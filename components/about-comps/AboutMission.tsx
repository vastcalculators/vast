"use client"
import { Locale, translations } from "@/lib/i18n"
import React from "react"
import { motion } from "framer-motion"

interface AboutMissionProps {
  locale: Locale
}

function AboutMission({ locale }: AboutMissionProps) {
    const t = translations[locale]
  return (
    <section className="relative w-full overflow-hidden py-24 bg-background">
      {/* Subtle light effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(120,119,198,0.12),_transparent_50%)] blur-3xl" />

      <div className="container relative z-10 mx-auto px-6 lg:px-10">
        {/* Heading and mission statement */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground">
            {t.about.missiontitle}
          </h2>

          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            {t.about.missionsub}
          </p>

          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            {t.about.missionsub2}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-20 grid sm:grid-cols-3 gap-8 text-center"
        >
          <div className="p-8 rounded-2xl border border-border bg-card/60 backdrop-blur-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <h3 className="text-xl font-semibold text-foreground"> {t.about.missioncard1} </h3>
            <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
              {t.about.card1sub}
            </p>
          </div>

          <div className="p-8 rounded-2xl border border-border bg-card/60 backdrop-blur-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <h3 className="text-xl font-semibold text-foreground">{t.about.missioncard2}</h3>
            <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
             {t.about.card2sub}
            </p>
          </div>

          <div className="p-8 rounded-2xl border border-border bg-card/60 backdrop-blur-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <h3 className="text-xl font-semibold text-foreground">{t.about.missioncard1}</h3>
            <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
              {t.about.card3sub}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutMission
