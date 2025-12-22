"use client"

import { Locale, translations } from "@/lib/i18n"
import { motion } from "framer-motion"
import React from "react"

interface AboutValuesProps {
  locale: Locale
}

function AboutValues({ locale }: AboutValuesProps) {


  const t = translations[locale]

  return (
    <section className="relative w-full py-28 bg-background border-t border-border/60">
      <div className="container mx-auto max-w-5xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold text-foreground">{t.about.valuetitle}</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            {t.about.valuesubtitle}
          </p>
        </motion.div>

        <div className="space-y-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-start md:items-center gap-8"
          >
            <div className="md:w-1/3 text-left">
              <h3 className="text-2xl font-semibold text-foreground">{t.about.value1Title}</h3>
            </div>
            <p className="md:w-2/3 text-muted-foreground text-base leading-relaxed">
              {t.about.value1Desc}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-start md:items-center gap-8"
          >
            <div className="md:w-1/3 text-left">
              <h3 className="text-2xl font-semibold text-foreground">{t.about.value2Title}</h3>
            </div>
            <p className="md:w-2/3 text-muted-foreground text-base leading-relaxed">
              {t.about.value2Desc}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-start md:items-center gap-8"
          >
            <div className="md:w-1/3 text-left">
              <h3 className="text-2xl font-semibold text-foreground">{t.about.value3Title}</h3>
            </div>
            <p className="md:w-2/3 text-muted-foreground text-base leading-relaxed">
              {t.about.value3Desc}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutValues
