import { Card, CardContent } from "@/components/ui/card"
import { useRouter } from "next/navigation"
import { getTranslation, type Locale } from "@/lib/i18n"
import type { Calculator, CalculatorSection } from "@/lib/calculators/types"
import Link from "next/link"

interface CalculatorSectionsProps {
  calculator: Calculator
  category: string
  locale: Locale
  formulaFunc?: Function
}

export function CalculatorSections({ calculator, locale, category }: CalculatorSectionsProps) {
  const router = useRouter()
  const sections = calculator.sections || []

  const renderList = (listKey: string) => {
    if (!listKey) return null
    const list = getTranslation(locale, listKey)

    if (!Array.isArray(list) || list.length === 0) {
      return null
    }

    return (
      <ul className="space-y-2 list-disc pl-6 text-gray-600 my-4">
        {list.map((item: any, index: number) => (
          <li key={index} className="text-gray-600">
            {typeof item === 'string' ? item : JSON.stringify(item)}
          </li>
        ))}
      </ul>
    )
  }

  const renderMultipleLists = (listKeys: string[]) => {
    if (!listKeys || !Array.isArray(listKeys) || listKeys.length === 0) return null

    return (
      <>
        {listKeys.map((listKey: string, index: number) => (
          <div key={`list-${index}`}>
            {renderList(listKey)}
          </div>
        ))}
      </>
    )
  }

  const renderPoints = (pointsKey: string) => {
    if (!pointsKey) return null
    const points = getTranslation(locale, pointsKey)

    if (!Array.isArray(points) || points.length === 0) {
      return null
    }

    return (
      <ul className="space-y-2 list-disc pl-6 text-gray-600 my-4">
        {points.map((point: any, index: number) => (
          <li key={index} className="text-gray-600">
            {typeof point === 'string' ? point : JSON.stringify(point)}
          </li>
        ))}
      </ul>
    )
  }

  const renderMultiplePoints = (pointsKeys: string[]) => {
    if (!pointsKeys || !Array.isArray(pointsKeys) || pointsKeys.length === 0) return null

    return (
      <>
        {pointsKeys.map((pointsKey: string, index: number) => (
          <div key={`points-${index}`}>
            {renderPoints(pointsKey)}
          </div>
        ))}
      </>
    )
  }

  const renderFormula = (formulaKey: string) => {
    if (!formulaKey) return null
    const formula = getTranslation(locale, formulaKey)

    return (
      <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 my-6">
        <p className="text-gray-800 font-mono text-sm whitespace-pre-wrap">
          {formula}
        </p>
      </div>
    )
  }

  const renderMultipleFormulas = (formulaKeys: string[]) => {
    if (!formulaKeys || !Array.isArray(formulaKeys) || formulaKeys.length === 0) return null

    return (
      <>
        {formulaKeys.map((formulaKey: string, index: number) => (
          <div key={`formula-${index}`}>
            {renderFormula(formulaKey)}
          </div>
        ))}
      </>
    )
  }

  // NEW: Render multiple content paragraphs
  const renderMultipleContents = (contentKeys: string[]) => {
    if (!contentKeys || !Array.isArray(contentKeys) || contentKeys.length === 0) return null

    return (
      <>
        {contentKeys.map((contentKey: string, index: number) => (
          <p key={`content-${index}`} className="text-gray-600 leading-relaxed">
            {getTranslation(locale, contentKey)}
          </p>
        ))}
      </>
    )
  }

  const renderLinks = (links: Array<{ content: string; key: string; slug: string }>, type: string = "subsection") => {
    if (!links || !Array.isArray(links) || links.length === 0) return null

    return (
      <>
        {links.map((link, index) => (
          <p key={`link-${index}`} className="text-gray-600 leading-relaxed">
            {getTranslation(locale, link.content)}{" "}
            <Link
              className="text-blue-500 font-medium"
              target="_blank"
              href={locale === "en" ? `/${category}/${link.slug}` : `/${locale}/${category}/${link.slug}`}
            >
              {getTranslation(locale, link.key)}
            </Link>
          </p>
        ))}
      </>
    )
  }

  const renderSubsection = (subsection: CalculatorSection, depth = 1) => {
    const paddingClass = depth > 0 ? "pl-6 border-l-2 border-gray-200" : ""

    return (
      <div key={subsection.id} className={`space-y-4 ${paddingClass}`}>
        {subsection.titleKey && (
          <div className="scroll-mt-20" id={subsection.id}>
            <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-4">
              {getTranslation(locale, subsection.titleKey)}
            </h3>
          </div>
        )}

        {subsection.subtitleKey && (
          <p className="text-md font-semibold text-gray-800">
            {getTranslation(locale, subsection.subtitleKey)}
          </p>
        )}

        {subsection.introKey && (
          <p className="text-gray-600 leading-relaxed">
            {getTranslation(locale, subsection.introKey)}
          </p>
        )}

        {subsection.linkparacontent && subsection.linkparaKey && subsection.linkparaslug && (
          <p className="text-gray-600 leading-relaxed">
            {getTranslation(locale, subsection.linkparacontent)}{" "}
            <Link className="text-blue-500 font-medium"
              target="_blank"
              href={locale === "en" ? `/${category}/${subsection.linkparaslug}` : `/${locale}/${category}/${subsection.linkparaslug}`}
            >
              {getTranslation(locale, subsection.linkparaKey)}
            </Link>
          </p>
        )}

        {subsection.links && renderLinks(subsection.links, "subsection")}

        {subsection.beforeimagecontentKey && !subsection.type && (
          <p className="text-gray-600 leading-relaxed">
            {getTranslation(locale, subsection.beforeimagecontentKey)}
          </p>
        )}

        {subsection.imageKey && (
          <div className="my-6 flex lg:justify-start justify-center">
            <img
              className="max-w-full h-auto rounded-lg"
              src={getTranslation(locale, subsection.imageKey)}
              width={600}
              height={400}
              fetchPriority="high"
              alt={subsection.imageAltKey ? getTranslation(locale, subsection.imageAltKey) : ""}
            />
          </div>
        )}

        {/* Single content key - backward compatible */}
        {subsection.contentKey && !subsection.type && !subsection.contents && (
          <p className="text-gray-600 leading-relaxed">
            {getTranslation(locale, subsection.contentKey)}
          </p>
        )}

        {/* NEW: Multiple content keys */}
        {subsection.contents && renderMultipleContents(subsection.contents)}

        {subsection.textKey && (
          <p className="text-gray-600 leading-relaxed">
            {getTranslation(locale, subsection.textKey)}
          </p>
        )}
        
        {subsection.formulaKey && renderFormula(subsection.formulaKey)}
        {subsection.listKey && renderList(subsection.listKey)}

        {subsection.lists && renderMultipleLists(subsection.lists)}

        {subsection.pointsKey && renderPoints(subsection.pointsKey)}

        {subsection.points && renderMultiplePoints(subsection.points)}

        {subsection.formulas && renderMultipleFormulas(subsection.formulas)}

        {subsection.resultKey && (
          <p className="text-gray-600 leading-relaxed">
            {getTranslation(locale, subsection.resultKey)}
          </p>
        )}

        {subsection.labelKey && (
          <p className="text-gray-700 font-semibold">
            {getTranslation(locale, subsection.labelKey)}
          </p>
        )}

        {subsection.endKey && (
          <p className="text-gray-600 leading-relaxed">
            {getTranslation(locale, subsection.endKey)}
          </p>
        )}

        {subsection.endKey2 && (
          <p className="text-gray-600 leading-relaxed">
            {getTranslation(locale, subsection.endKey2)}
          </p>
        )}

        {subsection.subsections && subsection.subsections.length > 0 && (
          <div className="space-y-6 mt-6">
            {subsection.subsections.map((sub) => renderSubsection(sub, depth + 1))}
          </div>
        )}
      </div>
    )
  }

  const renderSection = (section: CalculatorSection) => {
    return (
      <div key={section.id} className="space-y-4">
        {section.titleKey && (
          <div className="scroll-mt-20" id={section.id}>
            <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-6">
              {getTranslation(locale, section.titleKey)}
            </h2>
          </div>
        )}

        {section.introKey && (
          <p className="text-gray-600 leading-relaxed">
            {getTranslation(locale, section.introKey)}
          </p>
        )}

        {/* Single content key - backward compatible */}
        {section.contentKey && !section.contents && (
          <p className="text-gray-600 leading-relaxed">
            {getTranslation(locale, section.contentKey)}
          </p>
        )}

        {/* NEW: Multiple content keys */}
        {section.contents && renderMultipleContents(section.contents)}

        {section.imageKey && (
          <div className="my-6 flex lg:justify-start justify-center">
            <img
              className="max-w-full h-auto rounded-lg"
              src={getTranslation(locale, section.imageKey)}
              width={600}
              height={400}
              fetchPriority="high"
              alt={section.imageAltKey ? getTranslation(locale, section.imageAltKey) : ""}
            />
          </div>
        )}
        
        {section.textKey && (
          <p className="text-gray-600 leading-relaxed">
            {getTranslation(locale, section.textKey)}
          </p>
        )}

        {section.linkparacontent && section.linkparaKey && section.linkparaslug && (
          <p className="text-gray-600 leading-relaxed">
            {getTranslation(locale, section.linkparacontent)}{" "}
            <Link
              className="text-blue-500 font-medium"
              target="_blank"
              href={locale === "en" ? `/${category}/${section.linkparaslug}` : `/${locale}/${category}/${section.linkparaslug}`}
            >
              {getTranslation(locale, section.linkparaKey)}
            </Link>
          </p>
        )}

        {section.links && renderLinks(section.links, "section")}

        {section.listKey && renderList(section.listKey)}

        {section.lists && renderMultipleLists(section.lists)}

        {section.subsections && section.subsections.length > 0 && (
          <div className="space-y-8 mt-8">
            {section.subsections.map((subsection) => renderSubsection(subsection))}
          </div>
        )}
      </div>
    )
  }

  const flattenSections = (secs: CalculatorSection[]): CalculatorSection[] => {
    let flat: CalculatorSection[] = []
    secs.forEach((section) => {
      flat.push(section)
      if (section.subsections) {
        flat = flat.concat(flattenSections(section.subsections))
      }
    })
    return flat
  }

  const allSections = flattenSections(sections)

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
      window.history.replaceState(null, "", `#${id}`)
    }
  }

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar Table of Contents */}
        <aside className="lg:col-span-1">
          <div className="sticky top-20 space-y-4">
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <h3 className="text-sm font-semibold uppercase text-gray-700 mb-4">{getTranslation(locale, calculator.tocheading)}</h3>
              <nav className="space-y-2">
                {calculator.toc && calculator.toc.length > 0 ? (
                  calculator.toc.map((item: any) => {
                    const section = allSections.find((s) => s.id === item.id)
                    const isActive = false

                    return (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        onClick={(e) => {
                          e.preventDefault()
                          scrollToSection(item.id)
                        }}
                        className={`block text-sm py-2 px-3 rounded-md transition-colors ${isActive
                            ? "bg-blue-100 text-blue-900 font-medium"
                            : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                          }`}
                      >
                        {getTranslation(locale, item.labelKey)}
                      </a>
                    )
                  })
                ) : (
                  <p className="text-xs text-gray-500">No sections</p>
                )}
              </nav>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="lg:col-span-3">
          <Card className="border-0 shadow-none bg-transparent">
            <CardContent className="p-0 space-y-8">
              {/* Render Main Sections */}
              {sections.map((section) => renderSection(section))}

              {/* Render FAQs */}
              {calculator.faqs && calculator.faqs.length > 0 && (
                <div id="faqs" className="scroll-mt-20 mt-12">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                    {getTranslation(locale, calculator.faqTitleKey || "common.faqs")}
                  </h2>
                  <div className="space-y-4">
                    {calculator.faqs.map((item, index) => (
                      <div key={index} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                        <p className="font-semibold text-gray-900 mb-2">
                          {getTranslation(locale, item.qKey)}
                        </p>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {getTranslation(locale, item.aKey)}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  )
}