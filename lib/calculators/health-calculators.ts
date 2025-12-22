import type { Calculator } from "./types"

export const healthCalculators: Calculator[] = [
  {
    slug: "body-fat-calculator",
    metaTitleKey: "health.bodyFat.metaTitle",
    metaDescriptionKey: "health.bodyFat.desc",
    titleKey: "health.bodyFat.metaTitle",
    category: "Health",
    descriptionKey: "health.bodyFat.desc",
    formulaId: "bodyfat",

    toc: [
      { id: "why-use", labelKey: "health.bodyFat.tocAbout" },
      { id: "how-works", labelKey: "health.bodyFat.tochow" },
      { id: "why-track", labelKey: "health.bodyFat.toctrack" },
      { id: "understanding", labelKey: "health.bodyFat.tocunderstanding" },
      { id: "examples", labelKey: "health.bodyFat.tocexample" },
      { id: "interpret", labelKey: "health.bodyFat.tocinterpret" },
      { id: "reliable", labelKey: "health.bodyFat.tocreliable" },
    ],

    inputs: [
      {
        label: "health.bodyFat.gender", name: "gender", type: "select", options: [
          { value: "male", label: "health.bodyFat.male" },
          { value: "female", label: "health.bodyFat.female" },
        ]
      },
      {
        label: "health.bodyFat.unit",
        name: "unit",
        type: "select",
        options: [
          { value: "cm", label: "Centimeters" },
          { value: "inch", label: "Inches" },
        ]
      },

      { label: "health.bodyFat.height", name: "height", type: "number", unit: "cm" },
      { label: "health.bodyFat.weight", name: "weight", type: "number", unit: "kg" },
      { label: "health.bodyFat.waist", name: "waist", type: "number", unit: "cm" },
      { label: "health.bodyFat.neck", name: "neck", type: "number", unit: "cm" },
      { label: "health.bodyFat.hip", name: "hip", type: "number", unit: "cm" },
    ],

    result: {
      label: "health.bodyFat.result",
      explainKey: "health.bodyFat.resultExplain",
    },

    heading: "health.bodyFat.heading",

    sections: [
      {
        id: "about",
        titleKey: "health.bodyFat.section1Title",
        contentKey: "health.bodyFat.section1Content",
        linkparacontent: "health.bodyFat.section1ExtraText",
        linkparaKey: "health.bodyFat.section1Link",
        linkparaslug: "tdee-calculator",
        subsections: [
          {
            id: "why-use",
            titleKey: "health.bodyFat.section1Sub1Title",
            introKey: "health.bodyFat.section1Sub1Intro",
            listKey: "health.bodyFat.section1Sub1List",
            contentKey: "health.bodyFat.section1Sub1Text",
          },
          {
            id: "how-works",
            titleKey: "health.bodyFat.section1Sub2Title",
            introKey: "health.bodyFat.section1Sub2Intro",
            listKey: "health.bodyFat.section1Sub2List",
            contentKey: "health.bodyFat.section1Sub2Text",
            lists: ["health.bodyFat.section1Sub2EndList"],
            endKey: "health.bodyFat.section1Sub2End",
          },
          {
            id: "why-track",
            titleKey: "health.bodyFat.section1Sub3Title",
            introKey: "health.bodyFat.section1Sub3Intro",
            listKey: "health.bodyFat.section1Sub3List",
            endKey: "health.bodyFat.section1Sub3End",
          },
        ],
      },
      {
        id: "formula",
        titleKey: "health.bodyFat.formulatitle",
        contentKey: "health.bodyFat.formulaText",
        subsections: [
          {
            id: "navy-formula",
            titleKey: "health.bodyFat.formulasubtitle1",
            formulas: [
              "health.bodyFat.formulaMale",
              "health.bodyFat.formulaFemale"
            ],
            type: "formula",
          },
          {
            id: "understanding",
            titleKey: "health.bodyFat.formulasubtitle2",
            imageKey: "health.bodyFat.formulasub2Image",
            imageAltKey: "health.bodyFat.formulasub2ImageAlt",
            contentKey: "health.bodyFat.formulasub2text",
            listKey: "health.bodyFat.formulasub2List",
            textKey: "health.bodyFat.formulasub2end",
            lists: ["health.bodyFat.formulasub2List2"],
            endKey: "health.bodyFat.formulasub2end2",
          },
          {
            id: "examples",
            titleKey: "health.bodyFat.formulasub3title",
            introKey: "health.bodyFat.formulasub3line",
            subsections: [
              {
                id: "male-example",
                labelKey: "health.bodyFat.formulasub3line2",
                listKey: "health.bodyFat.formulasub3List",
                subsections: [
                  {
                    id: "step-1",
                    titleKey: "health.bodyFat.formulasteptitle",
                    formulaKey: "health.bodyFat.formulastep1",
                  },
                  {
                    id: "step-2",
                    titleKey: "health.bodyFat.formulasteptitle2",
                    lists: ["health.bodyFat.formulastepList"],
                    resultKey: "health.bodyFat.resulttext",
                  },
                ],
              },
            ],
          },
          {
            id: "interpret",
            titleKey: "health.bodyFat.formulasub4title",
            imageKey: "health.bodyFat.formulasub4Image",
            imageAltKey: "health.bodyFat.formulasub4ImageAlt",
            contentKey: "health.bodyFat.formulasub4content",
          },
          {
            id: "reliable",
            titleKey: "health.bodyFat.formulasub5title",
            contentKey: "health.bodyFat.formulasub5content",
          },
        ],
      },
    ],

    faqTitleKey: "health.bodyFat.faqTitle",
    faqs: [
      { qKey: "health.bodyFat.faq.0.q", aKey: "health.bodyFat.faq.0.a" },
      { qKey: "health.bodyFat.faq.1.q", aKey: "health.bodyFat.faq.1.a" },
      { qKey: "health.bodyFat.faq.2.q", aKey: "health.bodyFat.faq.2.a" },
      { qKey: "health.bodyFat.faq.3.q", aKey: "health.bodyFat.faq.3.a" },
      { qKey: "health.bodyFat.faq.4.q", aKey: "health.bodyFat.faq.4.a" },
      { qKey: "health.bodyFat.faq.5.q", aKey: "health.bodyFat.faq.5.a" },
    ],
  },

  {
    slug: "bmi-calculator",
    metaTitleKey: "health.bmi.metaTitle",
    metaDescriptionKey: "health.bmi.desc",
    titleKey: "health.bmi.metaTitle",
    category: "Health",
    descriptionKey: "health.bmi.desc",
    formulaId: "bmi",

    toc: [
      { id: "why-use", labelKey: "health.bmi.tocwhy" },
      { id: "how-works", labelKey: "health.bmi.tochowitworks" },
      { id: "why-matters", labelKey: "health.bmi.tocwhybmi" },
      { id: "understanding", labelKey: "health.bmi.tocUnderstanding" },
      { id: "examples", labelKey: "health.bmi.tocexample" },
      { id: "categories", labelKey: "health.bmi.toccategories" },
    ],

    inputs: [
      {
        label: "health.bmi.gender", name: "gender", type: "select",
        options: [
          { value: "male", label: "health.bmi.male" },
          { value: "female", label: "health.bmi.female" },
          { value: "other", label: "health.bmi.other" },
        ],
      },

      {
        label: "health.bmi.weightUnit", name: "weightUnit", type: "select",
        options: [
          { value: "kg", label: "health.bmi.kg" },
          { value: "lb", label: "health.bmi.lb" },
        ],
      },
      { label: "health.bmi.weight", name: "weight", type: "number" },

      {
        label: "health.bmi.heightUnit", name: "heightUnit", type: "select",
        options: [
          { value: "cm", label: "health.bmi.cm" },
          { value: "inch", label: "health.bmi.inch" },
        ],
      },
      { label: "health.bmi.height", name: "height", type: "number" },
    ],

    result: {
      label: "health.bmi.result",
      explainKey: "health.bmi.resultExplain",
    },

    heading: "health.bmi.heading",

    sections: [
      {
        id: "about",
        titleKey: "health.bmi.section1Title",
        contentKey: "health.bmi.section1Content",
        linkparacontent: "health.bmi.section1ExtraText",
        linkparaKey: "health.bmi.section1ExtraLinkText",
        linkparaslug: "body-fat-calculator",
        subsections: [
          {
            id: "why-use",
            titleKey: "health.bmi.section1Sub1Title",
            introKey: "health.bmi.section1Sub1Intro",
            contentKey: "health.bmi.section1Sub1Text",
            listKey: "health.bmi.section1Sub1List",
            endKey: "health.bmi.section1Sub1End",
          },
          {
            id: "how-works",
            titleKey: "health.bmi.section1Sub2Title",
            introKey: "health.bmi.section1Sub2Intro",
            listKey: "health.bmi.section1Sub2List",
            contentKey: "health.bmi.section1Sub2Text",
            endKey: "health.bmi.section1Sub2End",
          },
          {
            id: "why-matters",
            titleKey: "health.bmi.section1Sub3Title",
            contentKey: "health.bmi.section1Sub3Intro",
            endKey: "health.bmi.section1Sub3End",
          },
        ],
      },
      {
        id: "formula",
        titleKey: "health.bmi.section2Title",
        introKey: "health.bmi.section2Intro",
        contentKey: "health.bmi.section2Text",
        subsections: [
          {
            id: "metric-formula",
            formulaKey: "health.bmi.section2MetricFormula",
            type: "formula",
          },
          {
            id: "imperial-formula",
            introKey: "health.bmi.section2ImperialIntro",
            formulaKey: "health.bmi.section2ImperialFormula",
            type: "formula",
          },
          {
            id: "formula-end",
            contentKey: "health.bmi.section2End",
          },
          {
            id: "understanding",
            titleKey: "health.bmi.section2Sub1Title",
            imageKey: "health.bmi.section2Sub1Image",
            imageAltKey: "health.bmi.section2Sub1ImageAlt",
            contentKey: "health.bmi.section2Sub1Intro",
            textKey: "health.bmi.section2Sub1Text",
            pointsKey: "health.bmi.section2Sub1Points",
          },
          {
            id: "examples",
            titleKey: "health.bmi.section2Sub2Title",
            introKey: "health.bmi.section2Sub2Intro",
            subsections: [
              {
                id: "metric-example",
                labelKey: "health.bmi.section2Sub2MetricLabel",
                contentKey: "health.bmi.section2Sub2MetricText",
                formulaKey: "health.bmi.section2Sub2MetricFormula",
                resultKey: "health.bmi.section2Sub2MetricResult",
              },
              {
                id: "imperial-example",
                labelKey: "health.bmi.section2Sub2ImperialLabel",
                contentKey: "health.bmi.section2Sub2ImperialText",
                formulaKey: "health.bmi.section2Sub2ImperialFormula",
                resultKey: "health.bmi.section2Sub2ImperialResult",
              },
            ],
          },
          {
            id: "categories",
            titleKey: "health.bmi.section2Sub3Title",
            contentKey: "health.bmi.section2Sub3Intro",
            imageKey: "health.bmi.section2Sub3Image",
            imageAltKey: "health.bmi.section2Sub3ImageAlt",
            endKey: "health.bmi.section2Sub3End1",
            end2Key: "health.bmi.section2Sub3End2",
          },
        ],
      },
    ],

    faqTitleKey: "health.bmi.faqTitle",
    faqs: [
      { qKey: "health.bmi.faq.0.q", aKey: "health.bmi.faq.0.a" },
      { qKey: "health.bmi.faq.1.q", aKey: "health.bmi.faq.1.a" },
      { qKey: "health.bmi.faq.2.q", aKey: "health.bmi.faq.2.a" },
      { qKey: "health.bmi.faq.3.q", aKey: "health.bmi.faq.3.a" },
      { qKey: "health.bmi.faq.4.q", aKey: "health.bmi.faq.4.a" },
      { qKey: "health.bmi.faq.5.q", aKey: "health.bmi.faq.5.a" },
    ],
  },
  {
    slug: "calorie-calculator",
    metaTitleKey: "health.calories.metaTitle",
    metaDescriptionKey: "health.calories.desc",
    titleKey: "health.calories.metaTitle",
    category: "Health",
    descriptionKey: "health.calories.desc",
    formulaId: "calories",

    toc: [
      { id: "why-use", labelKey: "health.calories.tocwhy" },
      { id: "how-works", labelKey: "health.calories.tochowitworks" },
      { id: "why-matters", labelKey: "health.calories.tocwhymatters" },
      { id: "activity-factor", labelKey: "health.calories.tocactivity" },
      { id: "understanding", labelKey: "health.calories.tocunderstanding" },
      { id: "examples", labelKey: "health.calories.tocexample" },
      { id: "result", labelKey: "health.calories.tocresult" },
      { id: "reliable", labelKey: "health.calories.tocreliable" },
    ],

    inputs: [
      {
        label: "health.calories.gender", name: "gender", type: "select",
        options: [
          { value: "male", label: "health.calories.male" },
          { value: "female", label: "health.calories.female" },
        ],
      },

      {
        label: "health.calories.activity", name: "activity", type: "select",
        options: [
          { value: "1.2", label: "health.calories.sedentary" },
          { value: "1.375", label: "health.calories.light" },
          { value: "1.55", label: "health.calories.moderate" },
          { value: "1.725", label: "health.calories.active" },
          { value: "1.9", label: "health.calories.veryActive" },
        ],
      },
      { label: "health.calories.age", name: "age", type: "number", unit: "years" },
      {
        label: "health.calories.weightUnit",
        name: "weightUnit",
        type: "select",
        options: [
          { value: "kg", label: "health.calories.kg" },
          { value: "pounds", label: "health.calories.pounds" },
        ],
      },
      { label: "health.calories.weight", name: "weight", type: "number", unit: "kg" },
      {
        label: "health.calories.heightUnit",
        name: "heightUnit",
        type: "select",
        options: [
          { value: "cm", label: "health.calories.cm" },
          { value: "inch", label: "health.calories.inch" },
        ],
      },
      { label: "health.calories.height", name: "height", type: "number", unit: "cm" },
    ],

    result: {
      label: "health.calories.result",
      explainKey: "health.calories.resultExplain",
    },

    heading: "health.calories.heading",

    sections: [
      {
        id: "about",
        titleKey: "health.calories.section1Title",
        contentKey: "health.calories.section1Content",
        linkparacontent: "health.calories.section1ExtraText",
        linkparaKey: "health.calories.section1ExtraLinkText",
        linkparaslug: "macro-calculator",
        subsections: [
          {
            id: "why-use",
            titleKey: "health.calories.section1Sub1Title",
            introKey: "health.calories.section1Sub1Intro",
            contentKey: "health.calories.section1Sub1Text",
          },
          {
            id: "how-works",
            titleKey: "health.calories.section1Sub2Title",
            introKey: "health.calories.section1Sub2Intro",
            listKey: "health.calories.section1Sub2List",
            contentKey: "health.calories.section1Sub2Text",
            endKey: "health.calories.section1Sub2End",
          },
          {
            id: "why-matters",
            titleKey: "health.calories.section1Sub3Title",
            contentKey: "health.calories.section1Sub3Intro",
            endKey: "health.calories.section1Sub3End",
          },
        ],
      },

      {
        id: "formula",
        titleKey: "health.calories.section2Title",
        introKey: "health.calories.section2Intro",
        subsections: [
          {
            id: "metric-formula-male",
            formulaKey: "health.calories.section2MetricFormulaMale",
            type: "formula",
          },
          {
            id: "metric-formula-female",
            formulaKey: "health.calories.section2MetricFormulaFemale",
            type: "formula",
          },
          {
            id: "formula-end",
            contentKey: "health.calories.section2End",
          },
          {
            id: "activity-factor",
            titleKey: "health.calories.section2Sub1Title",
            imageKey: "health.calories.section2Sub1Image",
            imageAltKey: "health.calories.section2Sub1ImageAlt",
            endKey: "health.calories.section2Sub1End",
          },
          {
            id: "understanding",
            titleKey: "health.calories.section2Sub2Title",
            contentKey: "health.calories.section2Sub2Intro",
          },
          {
            id: "examples",
            titleKey: "health.calories.section2Sub3Title",
            introKey: "health.calories.section2Sub3ExampleText",
            subsections: [
              {
                id: "male-example",
                listKey: "health.calories.section2Sub3List",
                formulas: [
                  "health.calories.section2Sub3Formula1",
                  "health.calories.section2Sub3Formula2",
                  "health.calories.section2Sub3Formula3"
                ],
                endKey: "health.calories.section2Sub3End",
              },
            ],
          },
          {
            id: "result",
            titleKey: "health.calories.section2Sub4Title",
            contentKey: "health.calories.section2Sub4Intro",
          },
          {
            id: "reliable",
            titleKey: "health.calories.section2Sub5Title",
            contentKey: "health.calories.section2Sub5Intro",
          },
        ],
      },
    ],

    faqTitleKey: "health.calories.faqTitle",
    faqs: [
      { qKey: "health.calories.faq.0.q", aKey: "health.calories.faq.0.a" },
      { qKey: "health.calories.faq.1.q", aKey: "health.calories.faq.1.a" },
      { qKey: "health.calories.faq.2.q", aKey: "health.calories.faq.2.a" },
      { qKey: "health.calories.faq.3.q", aKey: "health.calories.faq.3.a" },
      { qKey: "health.calories.faq.4.q", aKey: "health.calories.faq.4.a" },
      { qKey: "health.calories.faq.5.q", aKey: "health.calories.faq.5.a" },
    ],
  },

  {
    slug: "water-intake-calculator",
    metaTitleKey: "health.waterIntake.metaTitle",
    metaDescriptionKey: "health.waterIntake.desc",
    titleKey: "health.waterIntake.heading",
    category: "Health",
    descriptionKey: "health.waterIntake.desc",
    heading: "health.waterIntake.heading",
    formulaId: "water",

    inputs: [
      { label: "health.waterIntake.age", name: "age", type: "number", unit: "years" },
      {
        label: "health.waterIntake.gender", name: "gender", type: "select", options: [
          { label: "health.waterIntake.male", value: "male" },
          { label: "health.waterIntake.female", value: "female" },
        ]
      },
      {
        label: "health.waterIntake.activity",
        name: "activity",
        type: "select",
        options: [
          { label: "health.waterIntake.activityLevel.none", value: "0" },
          { label: "health.waterIntake.activityLevel.moderate", value: "1" },
          { label: "health.waterIntake.activityLevel.high", value: "2" },
        ],
      },
    ],


    result: {
      label: "health.waterIntake.result",
      explainKey: "health.waterIntake.resultExplain",
    },
    tocheading: "health.waterIntake.tocTitle",
    toc: [
      { id: "why-use", labelKey: "health.waterIntake.tocwhy" },
      { id: "how-works", labelKey: "health.waterIntake.tochowitworks" },
      { id: "why-matters", labelKey: "health.waterIntake.tocwhyuse" },
      { id: "examples", labelKey: "health.waterIntake.tocExample" },
      { id: "understanding", labelKey: "health.waterIntake.tocResultUnderstanding" }
    ],

    sections: [
      {
        id: "intro",
        titleKey: "health.waterIntake.section1Title",
        contentKey: "health.waterIntake.section1Content",
        linkparacontent: "health.waterIntake.section1ExtraText",
        linkparaKey: "health.waterIntake.section1Link",
        linkparaslug: "tdee-calculator",
        subsections: [
          {
            id: "why-use",
            titleKey: "health.waterIntake.section1Sub1Title",
            introKey: "health.waterIntake.section1Sub1Intro",
          },
          {
            id: "how-works",
            titleKey: "health.waterIntake.section1Sub2Title",
            introKey: "health.waterIntake.section1Sub2Intro",
            listKey: "health.waterIntake.section1Sub2List",
            endKey: "health.waterIntake.section1Sub2Text",
          },
          {
            id: "why-matters",
            titleKey: "health.waterIntake.section1Sub3Title",
            introKey: "health.waterIntake.section1Sub3Intro",
          },
        ]
      },

      {
        id: "formula",
        titleKey: "health.waterIntake.section2Title",
        introKey: "health.waterIntake.section2Intro",
        subsections: [
          {
            id: "main-formula",
            formulaKey: "health.waterIntake.section2Formula",
            type: "formula",
            endKey: "health.waterIntake.section2end"
          },
          {
            id: "adjustment",
            titleKey: "health.waterIntake.section2AdjustmentTitle",
            beforeimagecontentKey: "health.waterIntake.section2AdjustmentText",
            imageKey: "health.waterIntake.section2AdjustmentImage",
            imageAltKey: "health.waterIntake.section2AdjustmentImageAlt",
          },
          {
            id: "examples",
            titleKey: "health.waterIntake.section2Sub1Title",
            introKey: "health.waterIntake.section2Sub1Intro",
            formulas: [
              "health.waterIntake.section2Sub1Step1",
              "health.waterIntake.section2Sub1Step2"
            ],
            endKey: "health.waterIntake.section2Sub1Result",
            endKey2: "health.waterIntake.section2Sub1Result2",
          },
          {
            id: "understanding",
            titleKey: "health.waterIntake.section3Title",
            imageKey: "health.waterIntake.section3Image",
            imageAltKey: "health.waterIntake.section3ImageAlt",
            contentKey: "health.waterIntake.section3Text",
          },
          {
            id: "why-formula-works",
            titleKey: "health.waterIntake.section4Title",
            contentKey: "health.waterIntake.section4Text",
          }
        ]
      },
    ],

    faqTitleKey: "health.waterIntake.faqTitle",
    faqs: [
      { qKey: "health.waterIntake.faq.0.q", aKey: "health.waterIntake.faq.0.a" },
      { qKey: "health.waterIntake.faq.1.q", aKey: "health.waterIntake.faq.1.a" },
      { qKey: "health.waterIntake.faq.2.q", aKey: "health.waterIntake.faq.2.a" },
      { qKey: "health.waterIntake.faq.3.q", aKey: "health.waterIntake.faq.3.a" },
      { qKey: "health.waterIntake.faq.4.q", aKey: "health.waterIntake.faq.4.a" },
      { qKey: "health.waterIntake.faq.5.q", aKey: "health.waterIntake.faq.5.a" },
    ]
  },

  {
    slug: "tdee-calculator",
    metaTitleKey: "health.tdee.metaTitle",
    metaDescriptionKey: "health.tdee.desc",
    titleKey: "health.tdee.metaTitle",
    category: "Health",
    descriptionKey: "health.tdee.desc",
    formulaId: "tdee",
    tocheading: "health.tdee.tocTitle",
    toc: [
      { id: "why-important", labelKey: "health.tdee.tocwhy" },
      { id: "how-it-works", labelKey: "health.tdee.tochowitworks" },
      { id: "why-use", labelKey: "health.tdee.tocwhyuse" },
      { id: "example", labelKey: "health.tdee.tocExample" },
      { id: "use-result", labelKey: "health.tdee.tochowtouse" },
    ],

    inputs: [
      {
        label: "health.tdee.bmrformula",
        name: "formula",
        type: "select",
        options: [
          { label: "health.tdee.mifflin", value: "mifflin" },
          { label: "health.tdee.harris", value: "harris" },
          { label: "health.tdee.revisedHarris", value: "revisedHarris" },
          { label: "health.tdee.katch", value: "katch" },
          { label: "health.tdee.schofield", value: "schofield" },
        ],
      },
      {
        label: "health.tdee.gender",
        name: "gender",
        type: "select",
        options: [
          { label: "health.tdee.male", value: "male" },
          { label: "health.tdee.female", value: "female" },
        ],
      },
      { label: "health.tdee.age", name: "age", type: "number", unit: "years" },

      // Height: select + input
      {
        label: "health.tdee.heightUnit",
        name: "heightUnit",
        type: "select",
        options: [
          { label: "health.tdee.cm", value: "cm" },
          { label: "health.tdee.inch", value: "inch" },
        ],
      },
      {
        label: "health.tdee.height",
        name: "height",
        type: "number",
      },

      // Weight: select + input
      {
        label: "health.tdee.weightUnit",
        name: "weightUnit",
        type: "select",
        options: [
          { label: "health.tdee.kg", value: "kg" },
          { label: "health.tdee.pound", value: "pound" },
        ],
      },
      {
        label: "health.tdee.weight",
        name: "weight",
        type: "number",
      },


      {
        label: "health.tdee.activity",
        name: "activity",
        type: "select",
        options: [
          {
            label: "health.tdee.sedentary",
            value: "1.2", // Little/no exercise
          },
          {
            label: "health.tdee.light",
            value: "1.375", // Light exercise 1–2 times/week
          },
          {
            label: "health.tdee.moderate",
            value: "1.55", // Moderate exercise 2–3 times/week
          },
          {
            label: "health.tdee.hard",
            value: "1.725", // Hard exercise 4–5 times/week
          },
          {
            label: "health.tdee.veryHard",
            value: "1.9", // Physical job / hard exercise 6–7 times/week
          },
          {
            label: "health.tdee.athlete",
            value: "2.0", // Professional athlete
          },
        ],
      },
    ],

    result: {
      label: "health.tdee.result",
      explainKey: "health.tdee.resultExplain",
    },

    heading: "health.tdee.heading",

    sections: [
      {
        id: "about",
        titleKey: "health.tdee.section1Title",
        contentKey: "health.tdee.section1Content",
        subsections: [
          {
            id: "why-important",
            titleKey: "health.tdee.section1Sub1Title",
            introKey: "health.tdee.section1Sub1Intro",
            lists: ["health.tdee.section1Sub1List"],
            contentKey: "health.tdee.section1Sub1Text"
          },
          {
            id: "how-it-works",
            titleKey: "health.tdee.section1Sub2Title",
            introKey: "health.tdee.section1Sub2Intro",
            lists: ["health.tdee.section1Sub2List"],
            contentKey: "health.tdee.section1Sub2Text"
          },
          {
            id: "why-use",
            titleKey: "health.tdee.section1Sub3Title",
            contentKey: "health.tdee.section1Sub3Intro"
          }
        ]
      },

      {
        id: "formula",
        titleKey: "health.tdee.section2Title",
        introKey: "health.tdee.section2Intro",
        lists: ["health.tdee.section2List"],
        subsections: [
          {
            id: "bmr-step",
            titleKey: "health.tdee.section2Step1",
            formulas: [
              "health.tdee.section2Step1MaleFormula",
              "health.tdee.section2Step1FemaleFormula"
            ],
          },
          {
            id: "activity-step",
            titleKey: "health.tdee.section2Step2",
            contentKey: "health.tdee.section2Step2Text",
          },
          {
            id: "formula-summary",
            titleKey: "health.tdee.section2Step3",
            formulas: ["health.tdee.section2Step3Formula"],
            contentKey: "health.tdee.section2Step3Text"
          },
          {
            id: "example",
            titleKey: "health.tdee.section2Sub1Title",
            imageKey: "health.tdee.section2Sub1Image",
            imageAltKey: "health.tdee.section2Sub1ImageAlt",
            introKey: "health.tdee.section2Sub1Example",
            contentKey: "health.tdee.section2Sub1ExampleMale",
            lists: ["health.tdee.section2Sub1List"],
            formulas: [
              "health.tdee.section2Step1Formula",
              "health.tdee.section2Step1Formula2",
              "health.tdee.section2Step2Formula",
            ],
            endKey: "health.tdee.section2Step2End"
          },
          {
            id: "use-result",
            titleKey: "health.tdee.section2Sub2Title",
            introKey: "health.tdee.section2Sub2Intro",
            lists: ["health.tdee.section2Sub2List"],
            linkparacontent: "health.tdee.section2Sub2Extra",
            linkparaKey: "health.tdee.section2Sub2ExtraLink",
            linkparaslug: "macro-calculator"
          },
          {
            id: "why-this-works",
            titleKey: "health.tdee.section2Sub3Title",
            contentKey: "health.tdee.section2Sub3Intro"
          }
        ]
      }
    ],

    faqTitleKey: "health.tdee.faqTitle",
    faqs: [
      { qKey: "health.tdee.faq.0.q", aKey: "health.tdee.faq.0.a" },
      { qKey: "health.tdee.faq.1.q", aKey: "health.tdee.faq.1.a" },
      { qKey: "health.tdee.faq.2.q", aKey: "health.tdee.faq.2.a" },
      { qKey: "health.tdee.faq.3.q", aKey: "health.tdee.faq.3.a" },
      { qKey: "health.tdee.faq.4.q", aKey: "health.tdee.faq.4.a" },
      { qKey: "health.tdee.faq.5.q", aKey: "health.tdee.faq.5.a" },
    ]
  },
  {
    slug: "macro-calculator",
    metaTitleKey: "health.macros.metaTitle",
    metaDescriptionKey: "health.macros.desc",
    titleKey: "health.macros.metaTitle",
    category: "Health",
    descriptionKey: "health.macros.desc",
    formulaId: "macros",
    tocheading: "health.macros.tocTitle",
    toc: [
      { id: "why-tracking", labelKey: "health.macros.tocwhy" },
      { id: "how-it-works", labelKey: "health.macros.tochowitworks" },
      { id: "why-use", labelKey: "health.macros.tocwhyuse" },
      { id: "macro-example", labelKey: "health.macros.tocMacro" },
      { id: "use-result", labelKey: "health.macros.tocresult" },
      { id: "formula", labelKey: "health.macros.tocformula" },
    ],

    inputs: [
      {
        label: "health.macros.gender", name: "gender", type: "select",
        options: [
          { label: "health.macros.male", value: "male" },
          { label: "health.macros.female", value: "female" },
        ],
      },
      { label: "health.macros.age", name: "age", type: "text", unit: "years" },

      {
        label: "health.macros.heightUnit", name: "heightUnit", type: "select",
        options: [
          { label: "health.macros.cm", value: "cm" },
          { label: "health.macros.inch", value: "inch" },
        ],
      },

      { label: "health.macros.height", name: "height", type: "text" },

      {
        label: "health.macros.weightUnit", name: "weightUnit", type: "select",
        options: [
          { label: "health.macros.kg", value: "kg" },
          { label: "health.macros.pounds", value: "pounds" },
        ],
      },

      { label: "health.macros.weight", name: "weight", type: "text" },

      {
        label: "health.macros.activityLevel", name: "activity", type: "select",
        options: [
          { label: "health.macros.activitylabel1", value: "1.2" },
          { label: "health.macros.activitylabel2", value: "1.375" },
          { label: "health.macros.activitylabel3", value: "1.55" },
          { label: "health.macros.activitylabel4", value: "1.725" },
          { label: "health.macros.activitylabel5", value: "1.9" },
          { label: "health.macros.activitylabel6", value: "2.0" },
        ],
      },

      {
        label: "health.macros.goal", name: "goal", type: "select",
        options: [
          { label: "health.macros.maintainweight", value: "maintain" },
          { label: "health.macros.changeweight", value: "change" },
        ],
      },
    ],

    result: {
      label: "health.macros.result",
      explainKey: "health.macros.resultExplain",
    },

    heading: "health.macros.heading",

    sections: [
      {
        id: "about",
        titleKey: "health.macros.section1Title",
        contentKey: "health.macros.section1Content",
        subsections: [
          {
            id: "why-tracking",
            titleKey: "health.macros.section1Sub1Title",
            introKey: "health.macros.section1Sub1Intro",
            lists: ["health.macros.section1Sub1List"],
            contentKey: "health.macros.section1Sub1Text",
          },
          {
            id: "how-it-works",
            titleKey: "health.macros.section1Sub2Title",
            introKey: "health.macros.section1Sub2Intro",
            lists: [
              "health.macros.section1Sub2List",
              "health.macros.section1Sub2List1"
            ],
            contentKey: "health.macros.section1Sub2Text",
          },
          {
            id: "why-use",
            titleKey: "health.macros.section1Sub3Title",
            contentKey: "health.macros.section1Sub3Intro",
          }
        ]
      },
      {
        id: "formula",
        titleKey: "health.macros.section2Title",
        introKey: "health.macros.section2Intro",
        textKey: "health.macros.section2Intro2",
        lists: ["health.macros.section2List"],
        linkparacontent: "health.macros.section2ExtraText",
        linkparaKey: "health.macros.section2ExtraLink",
        linkparaslug: "calorie-calculator",
        subsections: [
          {
            id: "calorie-step",
            titleKey: "health.macros.section2StepsTitle",
            introKey: "health.macros.section2StepsText",
            lists: ["health.macros.section2StepList1"],
            endKey: "health.macros.section2StepTextend",
          },
          {
            id: "distribution-goals",
            titleKey: "health.macros.section2StepsTitle2",
            subtitleKey: "health.macros.section2StepsTitle3",
            lists: ["health.macros.section2StepList2"],
            endKey: "health.macros.section2StepTextend2",
          },
          {
            id: "macro-formula",
            titleKey: "health.macros.section2StepsTitle4",
            textKey: "health.macros.section2StepsExample",
            formulas: [
              "health.macros.section2Macroformula",
              "health.macros.section2Proteinformula"
            ],
            endKey: "health.macros.section2StepTextend3",
          },
          {
            id: "example",
            titleKey: "health.macros.section2Sub1Title",
            imageKey: "health.macros.section2Sub1Image",
            imageAltKey: "health.macros.section2Sub1ImageAlt",
            introKey: "health.macros.section2Sub1ExampleText",
            lists: [
              "health.macros.section2Sub1List",
              "health.macros.section2Sub1DailyList"
            ],
            endKey: "health.macros.section2Sub1DailyEnd"
          },
          {
            id: "use-result",
            titleKey: "health.macros.section2Sub2Title",
            contentKey: "health.macros.section2Sub2Intro",
          },
          {
            id: "why-this-works",
            titleKey: "health.macros.section2Sub3Title",
            contentKey: "health.macros.section2Sub3Intro",
          }
        ]
      }
    ],

    faqTitleKey: "health.macros.faqTitle",
    faqs: [
      { qKey: "health.macros.faq.0.q", aKey: "health.macros.faq.0.a" },
      { qKey: "health.macros.faq.1.q", aKey: "health.macros.faq.1.a" },
      { qKey: "health.macros.faq.2.q", aKey: "health.macros.faq.2.a" },
      { qKey: "health.macros.faq.3.q", aKey: "health.macros.faq.3.a" },
      { qKey: "health.macros.faq.4.q", aKey: "health.macros.faq.4.a" },
      { qKey: "health.macros.faq.5.q", aKey: "health.macros.faq.5.a" },
    ]
  },

  {
    slug: "protein-calculator",
    metaTitleKey: "health.protein.title",
    metaDescriptionKey: "health.protein.desc",
    titleKey: "health.protein.title",
    category: "Health",
    descriptionKey: "health.protein.desc",
    heading: "health.protein.heading",
    formulaId: "protein",

    inputs: [
      { label: "health.protein.weight", name: "weight", type: "number", unit: "kg" },
      { label: "health.protein.age", name: "age", type: "number", unit: "years" },
      {
        label: "health.protein.gender",
        name: "gender",
        type: "select",
        options: [
          { value: "male", label: "health.protein.male" },
          { value: "female", label: "health.protein.female" },
          { value: "other", label: "health.protein.other" },
        ],
      },
      {
        label: "health.protein.activity",
        name: "activity",
        type: "select",
        options: [
          { value: "sedentary", label: "health.protein.sedentary" },
          { value: "moderate", label: "health.protein.moderate" },
          { value: "active", label: "health.protein.active" },
        ],
      },
      {
        label: "health.protein.goal",
        name: "goal",
        type: "select",
        options: [
          { value: "0.8", label: "health.protein.maintenance" },
          { value: "1.4", label: "health.protein.loss" },
          { value: "1.9", label: "health.protein.muscle" },
        ],
      },
      {
        label: "health.protein.diet",
        name: "diet",
        type: "select",
        options: [
          { value: "omnivore", label: "health.protein.omnivore" },
          { value: "vegetarian", label: "health.protein.vegetarian" },
          { value: "vegan", label: "health.protein.vegan" },
        ],
      },
    ],

    result: {
      label: "health.protein.result",
      explainKey: "health.protein.resultExplain",
    },

    tocheading: "health.protein.tocTitle",
    toc: [
      { id: "why-protein", labelKey: "health.protein.tocwhy" },
      { id: "how-works", labelKey: "health.protein.tochowitworks" },
      { id: "why-use", labelKey: "health.protein.tocwhyprotein" },
      { id: "examples", labelKey: "health.protein.tocexample" },
      { id: "understanding", labelKey: "health.protein.tocUnderstanding" },
    ],

    sections: [
      {
        id: "intro",
        titleKey: "health.protein.headingabout",
        contentKey: "health.protein.description",
        linkparacontent: "health.protein.paragraph2",
        linkparaKey: "health.protein.interlink",
        linkparaslug: "calorie-calculator",
        subsections: [
          {
            id: "why-protein",
            titleKey: "health.protein.whyProteinheading",
            introKey: "health.protein.whyProteindescription",
            contentKey: "health.protein.whyProteinparagraph2",
          },
          {
            id: "how-works",
            titleKey: "health.protein.howItWorksheading",
            introKey: "health.protein.howItWorksintro",
            listKey: "health.protein.steps",
            endKey: "health.protein.howItWorksresult",
          },
          {
            id: "why-use",
            titleKey: "health.protein.whyUseheading",
            introKey: "health.protein.whyUsedescription",
            contentKey: "health.protein.whyUseparagraph2",
          },
        ]
      },

      {
        id: "formula",
        titleKey: "health.protein.formulaheading",
        introKey: "health.protein.proteinCalculatorTitle",
        subsections: [
          {
            id: "main-formula",
            contentKey: "health.protein.proteinFormulatext",
            formulaKey: "health.protein.proteinFormula",
            type: "formula",
            endKey: "health.protein.proteinFactorInfo"
          },
          {
            id: "protein-factors",
            titleKey: "health.protein.recommendedProteinFactorsHeading",
            imageKey: "health.protein.recommendedProteinFactorsImage",
            imageAltKey: "health.protein.recommendedProteinFactorsImageAlt",
            beforeimagecontentKey: "health.protein.recommendedProteinFactorsNote",
          },
          {
            id: "examples",
            titleKey: "health.protein.proteinExampleHeading",
            imageKey: "health.protein.proteinExampleImage",
            imageAltKey: "health.protein.proteinExampleImageAlt",
            introKey: "health.protein.proteinExampleIntro",
            formulas: [
              "health.protein.proteinExampleSteps",
            ],
            formulaKey: "health.protein.proteinExampleFormula",
            endKey: "health.protein.proteinExampleResult",
            endKey2: "health.protein.proteinExampleVariation",
          },
          {
            id: "understanding",
            titleKey: "health.protein.understandingResultHeading",
            contentKey: "health.protein.understandingResultText",
            introKey: "health.protein.understandingResultExampleIntro",
            listKey: "health.protein.understandingResultList",
            endKey: "health.protein.understandingResultNote",
          },
          {
            id: "why-formula-works",
            titleKey: "health.protein.whyFormulaWorksHeading",
            contentKey: "health.protein.whyFormulaWorksText",
          }
        ]
      },
    ],

    faqTitleKey: "health.protein.faqTitle",
    faqs: [
      { qKey: "health.protein.faq.0.q", aKey: "health.protein.faq.0.a" },
      { qKey: "health.protein.faq.1.q", aKey: "health.protein.faq.1.a" },
      { qKey: "health.protein.faq.2.q", aKey: "health.protein.faq.2.a" },
      { qKey: "health.protein.faq.3.q", aKey: "health.protein.faq.3.a" },
      { qKey: "health.protein.faq.4.q", aKey: "health.protein.faq.4.a" },
      { qKey: "health.protein.faq.5.q", aKey: "health.protein.faq.5.a" },
    ]
  },
  {
    slug: "heart-rate-zone-calculator",
    metaTitleKey: "health.heartRate.title",
    metaDescriptionKey: "health.heartRate.desc",
    titleKey: "health.heartRate.title",
    category: "Health",
    descriptionKey: "health.heartRate.desc",
    heading: "health.heartRate.heading",
    formulaId: "heartRate",

    inputs: [
      { label: "health.heartRate.age", name: "age", type: "number", unit: "years" },
      {
        label: "health.heartRate.goal",
        name: "goal",
        type: "select",
        options: [
          { value: "warmup", label: "health.heartRate.goalwarmup" },
          { value: "fatburn", label: "health.heartRate.goalfatburn" },
          { value: "endurance", label: "health.heartRate.goalendurance" },
          { value: "highintensity", label: "health.heartRate.goalhighintensity" },
          { value: "maxeffort", label: "health.heartRate.goalmaxeffort" }
        ]
      }
    ],

    result: {
      label: "health.heartRate.result",
      explainKey: "health.heartRate.resultExplain",
    },

    toc: [
      { id: "why-matters", labelKey: "health.heartRate.tocwhy" },
      { id: "how-works", labelKey: "health.heartRate.tochowitworks" },
      { id: "why-use", labelKey: "health.heartRate.tocwhybmi" },
      { id: "formula", labelKey: "health.heartRate.tocformula" },
      { id: "standard-zones", labelKey: "health.heartRate.tocstandard" },
      { id: "why-formula-works", labelKey: "health.heartRate.tocwhyformulaworks" },
    ],

    sections: [
      {
        id: "intro",
        titleKey: "health.heartRate.section1Title",
        contentKey: "health.heartRate.section1Content",
        subsections: [
          {
            id: "why-matters",
            titleKey: "health.heartRate.section1WhyTitle",
            introKey: "health.heartRate.section1WhyContent",
            listKey: "health.heartRate.section1WhyList",
            endKey: "health.heartRate.section1WhyEnd",
            linkparacontent: "health.heartRate.section1WhyEnd",
            linkparaKey: "health.heartRate.interlink",
            linkparaslug: "running-pace-calculator",
          },
          {
            id: "how-works",
            titleKey: "health.heartRate.section1HowTitle",
            introKey: "health.heartRate.section1HowIntro",
            listKey: "health.heartRate.section1HowList",
            endKey: "health.heartRate.section1HowEnd",
          },
          {
            id: "why-use",
            titleKey: "health.heartRate.section1WhyUseTitle",
            introKey: "health.heartRate.section1WhyUseContent",
          },
        ]
      },

      {
        id: "formula",
        titleKey: "health.heartRate.formulaTitle",
        introKey: "health.heartRate.formulaIntro",
        subsections: [
          {
            id: "formula-image",
            imageKey: "health.heartRate.formulaImage",
            imageAltKey: "health.heartRate.formulaImageAlt",
          },
          {
            id: "step1",
            titleKey: "health.heartRate.step1Title",
            contentKey: "health.heartRate.step1Content",
          },
          {
            id: "step2",
            titleKey: "health.heartRate.step2Title",
            contentKey: "health.heartRate.step2Content",
          },
          {
            id: "step3",
            titleKey: "health.heartRate.step3Title",
            contentKey: "health.heartRate.step3Content",
          },
          {
            id: "standard-zones",
            titleKey: "health.heartRate.standardZoneTitle",
            imageKey: "health.heartRate.standardZoneImage",
            imageAltKey: "health.heartRate.standardZoneImageAlt",
            contentKey: "health.heartRate.standardZoneContent",
          },
          {
            id: "examples",
            titleKey: "health.heartRate.exampleTitle",
            introKey: "health.heartRate.exampleIntro",
            listKey: "health.heartRate.exampleList",
            formulas: [
              "health.heartRate.exampleStep1",
              "health.heartRate.exampleStep2"
            ],
            subsections: [
              {
                id: "zone1",
                titleKey: "health.heartRate.zone1Title",
                contentKey: "health.heartRate.zone1Content",
              },
              {
                id: "zone2",
                titleKey: "health.heartRate.zone2Title",
                contentKey: "health.heartRate.zone2Content",
              },
              {
                id: "zone3",
                titleKey: "health.heartRate.zone3Title",
                contentKey: "health.heartRate.zone3Content",
              },
              {
                id: "zone4",
                titleKey: "health.heartRate.zone4Title",
                contentKey: "health.heartRate.zone4Content",
              },
              {
                id: "zone5",
                titleKey: "health.heartRate.zone5Title",
                contentKey: "health.heartRate.zone5Content",
              },
            ],
            endKey: "health.heartRate.zoneConclusion",
          },
          {
            id: "how-to-use",
            titleKey: "health.heartRate.howToUseTitle",
            listKey: "health.heartRate.howToUseList",
            endKey: "health.heartRate.howToUseEnd",
          },
          {
            id: "why-formula-works",
            titleKey: "health.heartRate.whyWorksTitle",
            contentKey: "health.heartRate.whyWorksContent",
          }
        ]
      },
    ],

    faqTitleKey: "health.heartRate.faqTitle",
    faqs: [
      { qKey: "health.heartRate.faq.0.q", aKey: "health.heartRate.faq.0.a" },
      { qKey: "health.heartRate.faq.1.q", aKey: "health.heartRate.faq.1.a" },
      { qKey: "health.heartRate.faq.2.q", aKey: "health.heartRate.faq.2.a" },
      { qKey: "health.heartRate.faq.3.q", aKey: "health.heartRate.faq.3.a" },
      { qKey: "health.heartRate.faq.4.q", aKey: "health.heartRate.faq.4.a" },
      { qKey: "health.heartRate.faq.5.q", aKey: "health.heartRate.faq.5.a" },
    ]
  },
  {
    slug: "running-pace-calculator",
    metaTitleKey: "health.pace.title",
    metaDescriptionKey: "health.pace.desc",
    titleKey: "health.pace.title",
    category: "Health",
    descriptionKey: "health.pace.desc",
    heading: "health.pace.heading",
    formulaId: "pace",

    inputs: [
      { label: "health.pace.distance", name: "distance", type: "number", unit: "km" },
      {
        label: "health.pace.distanceUnit",
        name: "distanceUnit",
        type: "select",
        options: [
          { value: "km", label: "health.pace.distanceUnitKm" },
          { value: "mi", label: "health.pace.distanceUnitMi" }
        ]
      },
      { label: "health.pace.hours", name: "hours", type: "number", unit: "h" },
      { label: "health.pace.minutes", name: "minutes", type: "number", unit: "m" },
      { label: "health.pace.seconds", name: "seconds", type: "number", unit: "s" }
    ],



    result: {
      label: "health.pace.result",
      explainKey: "health.pace.resultExplain",
    },

    tocheading: "health.pace.tocTitle",
    toc: [
      { id: "why-matters", labelKey: "health.pace.tocwhy" },
      { id: "how-works", labelKey: "health.pace.tochowitworks" },
      { id: "why-use", labelKey: "health.pace.tocwhypace" },
      { id: "formula", labelKey: "health.pace.tocformula" },
      { id: "examples", labelKey: "health.pace.tocexample" },
      { id: "training-zones", labelKey: "health.pace.toctraining" },
      { id: "why-formula-works", labelKey: "health.pace.tocwhyformula" },
    ],

    sections: [
      {
        id: "intro",
        titleKey: "health.pace.section1Title",
        contentKey: "health.pace.section1Content",
        linkparacontent: "health.pace.section1Content",
        linkparaKey: "health.pace.section1LinkText",
        linkparaslug: "calorie-calculator",
        subsections: [
          {
            id: "why-matters",
            titleKey: "health.pace.section1Sub1Title",
            introKey: "health.pace.section1Sub1Intro",
            listKey: "health.pace.section1Sub1List",
            endKey: "health.pace.section1Sub1End",
          },
          {
            id: "how-works",
            titleKey: "health.pace.section1Sub2Title",
            introKey: "health.pace.section1Sub2Intro",
            listKey: "health.pace.section1Sub2List",
            contentKey: "health.pace.section1Sub2End",
            listKey2: "health.pace.section1Sub2EndList",
          },
          {
            id: "why-use",
            titleKey: "health.pace.section1Sub3Title",
            introKey: "health.pace.section1Sub3Content",
          },
        ]
      },

      {
        id: "formula",
        titleKey: "health.pace.formulatitle",
        introKey: "health.pace.formulaIntro",
        subsections: [
          {
            id: "core-formula",
            titleKey: "health.pace.coreFormulaTitle",
            formulaKey: "health.pace.coreFormula",
            type: "formula",
            endKey: "health.pace.coreFormulaExplain",
          },
          {
            id: "related-formulas",
            titleKey: "health.pace.relatedFormulasTitle",
            listKey: "health.pace.relatedFormulasList",
            endKey: "health.pace.relatedFormulasExplain",
          },
          {
            id: "examples",
            titleKey: "health.pace.exampleOfCalculationTitle",
            imageKey: "health.pace.image",
            imageAltKey: "health.pace.imageAlt",
            subsections: [
              {
                id: "example-calculation",
                titleKey: "health.pace.exampleTitle",
                introKey: "health.pace.exampleLine1",
                formulas: [
                  "health.pace.exampleStep1",
                  "health.pace.exampleStep1Value",
                  "health.pace.exampleStep2",
                  "health.pace.exampleStep2Formula",
                ],
                contentKey: "health.pace.exampleResult",
                formulas2: [
                  "health.pace.exampleStep3",
                  "health.pace.exampleStep3Formula",
                ],
                endKey: "health.pace.exampleStep3Result",
              },
              {
                id: "race-prediction",
                titleKey: "health.pace.racePredictionTitle",
                introKey: "health.pace.racePredictionIntro",
                listKey: "health.pace.racePredictionList",
                endKey: "health.pace.racePredictionEnd",
              },
            ],
          },
          {
            id: "training-zones",
            titleKey: "health.pace.splitTitle",
            contentKey: "health.pace.splitContent",
            introKey: "health.pace.trainingZonesIntro",
            listKey: "health.pace.trainingZonesList",
            endKey: "health.pace.trainingZonesEnd",
          },
          {
            id: "why-formula-works",
            titleKey: "health.pace.whyWorksTitle",
            contentKey: "health.pace.whyWorksContent",
          }
        ]
      },
    ],

    faqTitleKey: "health.pace.faqTitle",
    faqs: [
      { qKey: "health.pace.faq.0.q", aKey: "health.pace.faq.0.a" },
      { qKey: "health.pace.faq.1.q", aKey: "health.pace.faq.1.a" },
      { qKey: "health.pace.faq.2.q", aKey: "health.pace.faq.2.a" },
      { qKey: "health.pace.faq.3.q", aKey: "health.pace.faq.3.a" },
      { qKey: "health.pace.faq.4.q", aKey: "health.pace.faq.4.a" },
      { qKey: "health.pace.faq.5.q", aKey: "health.pace.faq.5.a" },
    ]
  },

  {
    slug: "body-fat-percentage",
    metaTitleKey: "health.bfp.title",
    metaDescriptionKey: "health.bfp.desc",
    titleKey: "health.bfp.title",
    category: "Health",
    descriptionKey: "health.bfp.desc",
    heading: "health.bfp.heading",
    formulaId: "bfp",

    inputs: [
      {
        label: "health.bfp.gender",
        name: "gender",
        type: "select",
        options: [
          { value: "male", label: "health.bfp.male" },
          { value: "female", label: "health.bfp.female" }
        ]
      },

      { label: "health.bfp.age", name: "age", type: "number", unit: "years" },

      {
        label: "health.bfp.height",
        name: "heightUnit",
        type: "select",
        options: [
          { value: "cm", label: "health.bfp.heightUnitCm" },
          { value: "inch", label: "health.bfp.heightUnitInch" }
        ]
      },
      { label: "health.bfp.height", name: "height", type: "number", unit: "cm" },

      {
        label: "health.bfp.weight",
        name: "weightUnit",
        type: "select",
        options: [
          { value: "kg", label: "health.bfp.weightUnitKg" },
          { value: "lb", label: "health.bfp.weightUnitLb" }
        ]
      },
      { label: "health.bfp.weight", name: "weight", type: "number", unit: "kg" },

      { label: "health.bfp.waist", name: "waist", type: "number", unit: "cm" },
      { label: "health.bfp.neck", name: "neck", type: "number", unit: "cm" },
      { label: "health.bfp.hip", name: "hip", type: "number", unit: "cm" }
    ],


    result: {
      label: "health.bfp.result",
      explainKey: "health.bfp.resultExplain",
    },

    tocheading: "health.bfp.tocTitle",
    toc: [
      { id: "why-matters", labelKey: "health.bfp.tocwhy" },
      { id: "how-works", labelKey: "health.bfp.tochowitworks" },
      { id: "why-use", labelKey: "health.bfp.tocwhyuse" },
      { id: "formula", labelKey: "health.bfp.tocMethod" },
      { id: "understanding", labelKey: "health.bfp.tocresult" },
      { id: "why-formula-works", labelKey: "health.bfp.tocformula" },
    ],

    sections: [
      {
        id: "intro",
        titleKey: "health.bfp.section1Title",
        linkparacontent: "health.bfp.section1Content",
        linkparaKey: "health.bfp.section1InterLink",
        linkparaslug: "bmi-calculator",
        subsections: [
          {
            id: "why-matters",
            titleKey: "health.bfp.section1Sub1Title",
            introKey: "health.bfp.section1Sub1Intro",
            listKey: "health.bfp.section1Sub1List",
          },
          {
            id: "how-works",
            titleKey: "health.bfp.section1Sub2Title",
            introKey: "health.bfp.section1Sub2Intro",
            listKey: "health.bfp.section1Sub2List",
            endKey: "health.bfp.section1Sub2Text",
          },
          {
            id: "why-use",
            titleKey: "health.bfp.section1Sub3Title",
            introKey: "health.bfp.section1Sub3Intro",
          },
        ]
      },

      {
        id: "formula",
        titleKey: "health.bfp.formulatitle",
        introKey: "health.bfp.formulaText",
        subsections: [
          {
            id: "navy-formula",
            titleKey: "health.bfp.formulasubtitle1",
            formulas: [
              "health.bfp.formulaMale",
              "health.bfp.formulaFemale"
            ],
            type: "formula",
          },
          {
            id: "measurements",
            titleKey: "health.bfp.formulasubtitle2",
            contentKey: "health.bfp.formulasub2text",
            imageKey: "health.bfp.formulasub2Image",
            imageAltKey: "health.bfp.formulasub2ImageAlt",
            listKey: "health.bfp.formulasub2List",
          },
          {
            id: "examples",
            titleKey: "health.bfp.formulasub3title",
            introKey: "health.bfp.formulasub3line",
            contentKey: "health.bfp.formulasub3line2",
            listKey: "health.bfp.formulasub3List",
            subsections: [
              {
                id: "step1",
                titleKey: "health.bfp.formulasteptitle",
                formulaKey: "health.bfp.formulastep1",
              },
              {
                id: "step2",
                titleKey: "health.bfp.formulasteptitle2",
                listKey: "health.bfp.formulastepList",
              },
            ],
            endKey: "health.bfp.formulasub3Result",
          },
          {
            id: "understanding",
            titleKey: "health.bfp.formulasub4title",
            imageKey: "health.bfp.formulasub4Image",
            imageAltKey: "health.bfp.formulasub4ImageAlt",
            contentKey: "health.bfp.formulasub4content",
          },
          {
            id: "why-formula-works",
            titleKey: "health.bfp.formulasub5title",
            contentKey: "health.bfp.formulasub5content",
          }
        ]
      },
    ],

    faqTitleKey: "health.bfp.faqTitle",
    faqs: [
      { qKey: "health.bfp.faq.0.q", aKey: "health.bfp.faq.0.a" },
      { qKey: "health.bfp.faq.1.q", aKey: "health.bfp.faq.1.a" },
      { qKey: "health.bfp.faq.2.q", aKey: "health.bfp.faq.2.a" },
      { qKey: "health.bfp.faq.3.q", aKey: "health.bfp.faq.3.a" },
      { qKey: "health.bfp.faq.4.q", aKey: "health.bfp.faq.4.a" },
      { qKey: "health.bfp.faq.5.q", aKey: "health.bfp.faq.5.a" },
    ]
  },
  {
  slug: "starbucks-calories-calculator",
  metaTitleKey: "health.starbucks.metaTitle",
  metaDescriptionKey: "health.starbucks.metaDescription",
  titleKey: "health.starbucks.title",
  category: "Health",
  descriptionKey: "health.starbucks.desc",
  heading: "health.starbucks.heading",
  formulaId: "starbucks",

  inputs: [
    { 
      label: "health.starbucks.menuItem", 
      name: "menuItem", 
      type: "select",
      options: [
        { value: "latte", label: "Latte" },
        { value: "cappuccino", label: "Cappuccino" },
        { value: "americano", label: "Americano" },
        { value: "mocha", label: "Mocha" },
        { value: "frappuccino", label: "Frappuccino" },
        { value: "tea", label: "Tea" },
        // More drinks can be added
      ]
    },
    { 
      label: "health.starbucks.drinkSize", 
      name: "drinkSize", 
      type: "select",
      options: [
        { value: "tall", label: "Tall (12 oz)" },
        { value: "grande", label: "Grande (16 oz)" },
        { value: "venti", label: "Venti (20 oz)" },
        { value: "trenta", label: "Trenta (30 oz)" },
      ]
    },
    { 
      label: "health.starbucks.milkType", 
      name: "milkType", 
      type: "select",
      options: [
        { value: "whole", label: "Whole Milk" },
        { value: "2percent", label: "2% Milk" },
        { value: "nonfat", label: "Nonfat Milk" },
        { value: "almond", label: "Almond Milk" },
        { value: "oat", label: "Oat Milk" },
        { value: "soy", label: "Soy Milk" },
        { value: "coconut", label: "Coconut Milk" },
      ]
    },
    { 
      label: "health.starbucks.syrupPumps", 
      name: "syrupPumps", 
      type: "number",
      unit: "pumps",
      min: 0,
      max: 10,
    },
    { 
      label: "health.starbucks.whippedCream", 
      name: "whippedCream", 
      type: "select",
      options: [
        { value: "none", label: "No Whipped Cream" },
        { value: "regular", label: "Regular Whipped Cream" },
        { value: "extra", label: "Extra Whipped Cream" },
      ]
    },
    { 
      label: "health.starbucks.extraToppings", 
      name: "extraToppings", 
      type: "multiselect",
      options: [
        { value: "caramel-drizzle", label: "Caramel Drizzle" },
        { value: "chocolate-chips", label: "Chocolate Chips" },
        { value: "cinnamon", label: "Cinnamon" },
        { value: "vanilla-powder", label: "Vanilla Powder" },
      ],
    },
  ],

  result: {
    label: "health.starbucks.result",
    explainKey: "health.starbucks.resultExplain",
  },

  toc: [
    { id: "what", labelKey: "health.starbucks.tocwhat" },
    { id: "how", labelKey: "health.starbucks.tochow" },
    { id: "why", labelKey: "health.starbucks.tocwhy" },
    { id: "formula", labelKey: "health.starbucks.tocformula" },
    { id: "drink-calculation", labelKey: "health.starbucks.tochowformula" },
    { id: "drink-size", labelKey: "health.starbucks.tocdrinksize" },
  ],

  sections: [
    {
      id: "intro",
      titleKey: "health.starbucks.introTitle",
      subsections: [
        {
          id: "what",
          titleKey: "health.starbucks.whatTitle",
          contentKey: "health.starbucks.whatContent",
          contentKey2: "health.starbucks.whatContent2",
        },
        {
          id: "how",
          titleKey: "health.starbucks.howTitle",
          contentKey: "health.starbucks.howContent",
          contentKey2: "health.starbucks.howcontent2",
        },
        {
          id: "why",
          titleKey: "health.starbucks.whytitle",
          linkparacontent: "health.starbucks.whycontent",
          linkparaKey: "health.starbucks.whyinterlink",
          linkparaslug: "calorie-calculator",
        },
      ]
    },

    {
      id: "formula",
      titleKey: "health.starbucks.formulaTitle",
      subsections: [
        {
          id: "how-calculated",
          titleKey: "health.starbucks.formulasubtitle",
          contentKey: "health.starbucks.formulasubcontent",
          imageKey: "health.starbucks.imageurl",
          imageAltKey: "health.starbucks.imagealttext",
        },
        {
          id: "drink-calculation",
          titleKey: "health.starbucks.mainFormulatitle",
          formulaKey: "health.starbucks.mainFormula",
          type: "formula",
          endKey: "health.starbucks.formulaExplain",
        },
        {
          id: "drink-size",
          titleKey: "health.starbucks.drinktitle",
          contentKey: "health.starbucks.drinkcontent",
        },
        {
          id: "food-items",
          titleKey: "health.starbucks.calorietitle",
          contentKey: "health.starbucks.caloriecontent",
        },
        {
          id: "macronutrients",
          titleKey: "health.starbucks.macrotitle",
          contentKey: "health.starbucks.macrocontent",
        },
      ]
    },
  ],

  faqTitleKey: "health.starbucks.faqTitle",
  faqs: [
    { qKey: "health.starbucks.faq.0.q", aKey: "health.starbucks.faq.0.a" },
    { qKey: "health.starbucks.faq.1.q", aKey: "health.starbucks.faq.1.a" },
    { qKey: "health.starbucks.faq.2.q", aKey: "health.starbucks.faq.2.a" },
    { qKey: "health.starbucks.faq.3.q", aKey: "health.starbucks.faq.3.a" },
    { qKey: "health.starbucks.faq.4.q", aKey: "health.starbucks.faq.4.a" },
    { qKey: "health.starbucks.faq.5.q", aKey: "health.starbucks.faq.5.a" },
  ]
}
]