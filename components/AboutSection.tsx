import { type Locale, getTranslation } from "@/lib/i18n";
import Link from 'next/link';
import React from 'react'

interface AboutSectionProps {
    locale: Locale;
}
function AboutSection({ locale }: AboutSectionProps) {

    const aboutHref = locale === "en" ? "/about" : `/${locale}/about`
    return (
        <section className='my-10 px-5'>
            <div >
                <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-4xl text-center mb-4"> {getTranslation(locale, "aboutsection.title")}</h2>
                <p className="mx-auto max-w-4xl text-black/90 text-center mb-6 font-medium text-sm md:text-base">{getTranslation(locale, "aboutsection.description")}</p>
                <p className="mx-auto max-w-xl text-zinc-800 text-center font-black md:text-3xl text-xl">  <span  className="text-xl md:text-3xl mr-2 text-red-500 align-middle">“</span>
  {getTranslation(locale, "aboutsection.quote")}
  <span className="text-xl md:text-3xl ml-2 text-red-500 align-middle">”</span></p>

                <div className='flex justify-center items-center mt-2 md:scale-100 scale-90'>
                    <Link href={`${aboutHref}`} className="mt-4 rounded-lg bg-transparent 
                    border-black border px-8 py-3 font-semibold text-zinc-950 hover:bg-zinc-900 hover:text-zinc-50  duration-200 backdrop-blur-md transition ease-in hover:scale-105">{getTranslation(locale, "aboutsection.cta")}</Link>
                </div>
            </div>
        </section>
    )
}

export default AboutSection