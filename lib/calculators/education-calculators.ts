import type { Calculator } from "./types";

export const educationCalculators: Calculator[] = [
  {
    slug: "gpa-calculator",
    metaTitleKey: "education.gpa.metaTitle",
    metaDescriptionKey: "education.gpa.desc",
    titleKey: "education.gpa.title",
    category: "Education",
    descriptionKey: "education.gpa.desc",
    heading: "education.gpa.heading",
    formulaId: "gpa",

    inputs: [
      {
        label: "education.gpa.numberOfCourses",
        name: "numberOfCourses",
        type: "number",
        min: 1,
        max: 20,
        placeholder: "Enter number of courses",
        isDynamic: true,
        dynamicConfig: {
          generates: "courses",
          template: [
            {
              label: "education.gpa.courseName",
              name: "courseName",
              type: "text",
              placeholder: "e.g., Mathematics"
            },
            {
              label: "education.gpa.grade",
              name: "grade",
              type: "select",
              options: [
                { value: "4.0", label: "A (4.0)" },
                { value: "3.7", label: "A- (3.7)" },
                { value: "3.3", label: "B+ (3.3)" },
                { value: "3.0", label: "B (3.0)" },
                { value: "2.7", label: "B- (2.7)" },
                { value: "2.3", label: "C+ (2.3)" },
                { value: "2.0", label: "C (2.0)" },
                { value: "1.7", label: "C- (1.7)" },
                { value: "1.3", label: "D+ (1.3)" },
                { value: "1.0", label: "D (1.0)" },
                { value: "0.0", label: "F (0.0)" }
              ]
            },
            {
              label: "education.gpa.credits",
              name: "credits",
              type: "number",
              min: 1,
              max: 6,
              placeholder: "Credit hours"
            }
          ]
        }
      },
      {
        label: "education.gpa.gradeScale",
        name: "gradeScale",
        type: "select",
        options: [
          { value: "4.0", label: "4.0 Scale" },
          { value: "5.0", label: "5.0 Scale" }
        ]
      }
    ],

    result: {
      label: "education.gpa.result",
      explainKey: "education.gpa.resultExplain"
    },

    tocheading: "education.gpa.tocTitle",
    toc: [
      { id: "what-gpa", labelKey: "education.gpa.tocwhatgpa" },
      { id: "how", labelKey: "education.gpa.tochow" },
      { id: "how-to-use", labelKey: "education.gpa.tochowto" },
      { id: "why-use", labelKey: "education.gpa.tocwhyuse" },
      { id: "formula", labelKey: "education.gpa.tocformula" },
      { id: "understanding", labelKey: "education.gpa.tocunderstanding" },
    ],

    sections: [
      {
        id: "intro",
        titleKey: "education.gpa.introTitle",
        subsections: [
          {
            id: "what-gpa",
            titleKey: "education.gpa.whatTitle",
            contentKey: "education.gpa.whatContent",
          },
          {
            id: "how",
            titleKey: "education.gpa.howTitle",
            contentKey: "education.gpa.howContent",
          },
          {
            id: "how-to-use",
            titleKey: "education.gpa.howtoTitle",
            listKey: "education.gpa.howtoList",
            endKey: "education.gpa.howtoEnd",
          },
          {
            id: "why-use",
            titleKey: "education.gpa.whytitle",
            contentKey: "education.gpa.whycontent",
          },
        ]
      },

      {
        id: "formula",
        titleKey: "education.gpa.formulaTitle",
        introKey: "education.gpa.formulacontent",
        subsections: [
          {
            id: "main-formula",
            titleKey: "education.gpa.mainformulatitle",
            formulaKey: "education.gpa.mainFormula",
            type: "formula",
            endKey: "education.gpa.formulaExplain",
          },
          {
            id: "formula-image",
            imageKey: "education.gpa.imageurl",
            imageAltKey: "education.gpa.imagealttext",
          },
          {
            id: "understanding",
            titleKey: "education.gpa.understandingtitle",
            subsections: [
              {
                id: "grade-points",
                titleKey: "education.gpa.understandingsubtitle1",
                contentKey: "education.gpa.understandingsubcontent1",
              },
              {
                id: "credit-hours",
                titleKey: "education.gpa.understandingsubtitle2",
                contentKey: "education.gpa.understandingsubcontent2",
              },
              {
                id: "weighted-unweighted",
                titleKey: "education.gpa.understandingsubtitle3",
                contentKey: "education.gpa.understandingsubcontent3",
              },
              {
                id: "total-credits",
                titleKey: "education.gpa.understandingsubtitle4",
                contentKey: "education.gpa.understandingsubcontent4",
              },
              {
                id: "final-output",
                titleKey: "education.gpa.understandingsubtitle5",
                contentKey: "education.gpa.understandingsubcontent5",
              },
            ]
          },
          {
            id: "why-formula-helps",
            titleKey: "education.gpa.whyformulaTitle",
            linkparacontent: "education.gpa.whyformulaContent",
            linkparaKey: "education.gpa.whyformulainterlink",
            linkparaslug: "assignment-grade-calculator",
            endKey: "education.gpa.whyformulatextend",
          }
        ]
      },
    ],

    faqTitleKey: "education.gpa.faqTitle",
    faqs: [
      { qKey: "education.gpa.faq.0.q", aKey: "education.gpa.faq.0.a" },
      { qKey: "education.gpa.faq.1.q", aKey: "education.gpa.faq.1.a" },
      { qKey: "education.gpa.faq.2.q", aKey: "education.gpa.faq.2.a" },
      { qKey: "education.gpa.faq.3.q", aKey: "education.gpa.faq.3.a" },
      { qKey: "education.gpa.faq.4.q", aKey: "education.gpa.faq.4.a" },
      { qKey: "education.gpa.faq.5.q", aKey: "education.gpa.faq.5.a" },
    ]
  },

  {
    slug: "sat-score-converter",
    metaTitleKey: "education.sat.metaTitle",
    metaDescriptionKey: "education.sat.desc",
    titleKey: "education.sat.title",
    category: "Education",
    descriptionKey: "education.sat.desc",
    heading: "education.sat.heading",
    formulaId: "satConversion",

    inputs: [
      {
        label: "education.sat.mode",
        name: "conversionMode",
        type: "select",
        options: [
          { value: "raw-to-scaled", label: "education.sat.rawToScaled" },
          { value: "scaled-to-raw", label: "education.sat.scaledToRaw" }
        ]
      },
      {
        label: "education.sat.section",
        name: "section",
        type: "select",
        options: [
          { value: "math", label: "education.sat.math" },
          { value: "reading", label: "education.sat.reading" },
          { value: "writing", label: "education.sat.writing" }
        ]
      },
      {
        label: "education.sat.inputValue",
        name: "scoreInput",
        type: "number",
        min: 0,
        max: 800,
        placeholder: "Enter score"
      }
    ],

    result: {
      label: "education.sat.result",
      explainKey: "education.sat.resultExplain"
    },

    tocheading: "education.sat.tocTitle",
    toc: [
      { id: "howto", labelKey: "education.sat.tochowto" },
      { id: "example", labelKey: "education.sat.tocexamples" },
      { id: "step1", labelKey: "education.sat.tocstep1" },
      { id: "step2", labelKey: "education.sat.tocstep2" },
      { id: "step3", labelKey: "education.sat.tocstep3" },
      { id: "step4", labelKey: "education.sat.tocstep4" },
      { id: "whyformula", labelKey: "education.sat.tocwhyformula" },
    ],

    sections: [
      {
        id: "intro",
        titleKey: "education.sat.aboutTitle",
        contents: [
          "education.sat.aboutContent1",
          "education.sat.aboutContent2",
          "education.sat.aboutContent3",
          "education.sat.aboutContent4",
        ],
        contentKey: "education.sat.aboutContent",
        subsections: [
          {
            id: "howto",
            titleKey: "education.sat.howToUseTitle",
            listKey: "education.sat.howToUseList",
            endKey: "education.sat.howToUseNote"
          },
          {
            id: "example",
            titleKey: "education.sat.exampleUseCaseTitle",
            linkparacontent: "education.sat.exampleUseCaseContent",
            linkparaKey: "education.sat.exampleUseCaseInterlink",
            linkparaslug: "study-planner-generator",
            endKey: "education.sat.exampleUseCaseFooter"
          },
        ]
      },

      {
        id: "formula",
        titleKey: "education.sat.formulaTitle",
        introKey: "education.sat.formulaIntro",
        subsections: [
          {
            id: "core-formula",
            titleKey: "education.sat.coreFormulaTitle",
            formulaKey: "education.sat.coreFormula",
          },
          {
            id: "formulaexplaination",
            titleKey: "education.sat.formulaExplanationTitle",
            subsections: [
              {
                id: "step1",
                titleKey: "education.sat.subTitle1",
                contentKey: "education.sat.subContent1",
              },
              {
                id: "step2",
                titleKey: "education.sat.timespenttitle",
                contentKey: "education.sat.timespentcontent",
              },
              {
                id: "step3",
                titleKey: "education.sat.outputtitle",
                contentKey: "education.sat.outputcontent",
              },
              {
                id: "step4",
                titleKey: "education.sat.ComprehensionTitle",
                contentKey: "education.sat.ComprehensionContent",
              },
            ]
          },
          {
            id: "whyformula",
            titleKey: "education.sat.benefitTitle",
            contentKey: "education.sat.benefitContent",
          }
        ]
      },
    ],

    faqTitleKey: "education.sat.faqTitle",
    faqs: [
      { qKey: "education.sat.faq.0.q", aKey: "education.sat.faq.0.a" },
      { qKey: "education.sat.faq.1.q", aKey: "education.sat.faq.1.a" },
      { qKey: "education.sat.faq.2.q", aKey: "education.sat.faq.2.a" },
      { qKey: "education.sat.faq.3.q", aKey: "education.sat.faq.3.a" },
      { qKey: "education.sat.faq.4.q", aKey: "education.sat.faq.4.a" },
      { qKey: "education.sat.faq.5.q", aKey: "education.sat.faq.5.a" },
    ]
  },

  {
    slug: "reading-speed-calculator",
    metaTitleKey: "education.readspeed.metaTitle",
    metaDescriptionKey: "education.readspeed.desc",
    titleKey: "education.readspeed.title",
    category: "Education",
    descriptionKey: "education.readspeed.desc",
    heading: "education.readspeed.heading",
    formulaId: "readSpeed",

    inputs: [
      { label: "education.readspeed.totalWords", name: "totalWords", type: "number", min: 50, max: 200000 },
      { label: "education.readspeed.timeMinutes", name: "minutes", type: "number", min: 1, max: 600 },
      {
        label: "education.readspeed.textType",
        name: "textType",
        type: "select",
        options: [
          { value: "1", label: "education.readspeed.easy" },
          { value: "0.85", label: "education.readspeed.medium" },
          { value: "0.7", label: "education.readspeed.hard" }
        ]
      },
      {
        label: "education.readspeed.goalType",
        name: "goal",
        type: "select",
        options: [
          { value: "speed", label: "education.readspeed.goalSpeed" },
          { value: "comprehension", label: "education.readspeed.goalComp" }
        ]
      }
    ],

    result: {
      label: "education.readspeed.result",
      explainKey: "education.readspeed.resultExplain"
    },

    tocheading: "education.readspeed.tocTitle",

    toc: [
      { id: "howto", labelKey: "education.readspeed.tochowto" },
      { id: "example", labelKey: "education.readspeed.tocexamples" },
      { id: "step1", labelKey: "education.readspeed.tocstep1" },
      { id: "step2", labelKey: "education.readspeed.tocstep2" },
      { id: "step3", labelKey: "education.readspeed.tocstep3" },
      { id: "step4", labelKey: "education.readspeed.tocstep4" },
      { id: "whyformula", labelKey: "education.readspeed.tocwhyformula" },
    ],

    sections: [
      {
        id: "intro",
        titleKey: "education.readspeed.aboutTitle",
        contentKey: "education.readspeed.aboutContent",
        subsections: [
          {
            id: "howto",
            titleKey: "education.readspeed.howToUseTitle",
            listKey: "education.readspeed.howToUseList",
            endKey: "education.readspeed.howToUseNote"
          },
          {
            id: "example",
            titleKey: "education.readspeed.exampleUseCaseTitle",
            linkparacontent: "education.readspeed.exampleUseCaseContent",
            linkparaKey: "education.readspeed.exampleUseCaseInterlink",
            linkparaslug: "study-time-calculator",
            endKey: "education.readspeed.exampleUseCaseFooter"
          },
        ]
      },

      {
        id: "formula",
        titleKey: "education.readspeed.formulaTitle",
        introKey: "education.readspeed.formulaIntro",
        subsections: [
          {
            id: "core-formula",
            titleKey: "education.readspeed.coreFormulaTitle",
            formulaKey: "education.readspeed.coreFormula",
          },
          {
            id: "formulaexplaination",
            titleKey: "education.readspeed.formulaExplanationTitle",
            subsections: [
              {
                id: "step1",
                titleKey: "education.readspeed.subTitle1",
                contentKey: "education.readspeed.subContent1",
              },
              {
                id: "step2",
                titleKey: "education.readspeed.timespenttitle",
                contentKey: "education.readspeed.timespentcontent",
              },
              {
                id: "step3",
                titleKey: "education.readspeed.outputtitle",
                contentKey: "education.readspeed.outputcontent",
              },
              {
                id: "step4",
                titleKey: "education.readspeed.ComprehensionTitle",
                contentKey: "education.readspeed.ComprehensionContent",
              },
            ]
          },
          {
            id: "whyformula",
            titleKey: "education.readspeed.benefitTitle",
            contentKey: "education.readspeed.benefitContent",
          }
        ]
      },
    ],

    faqTitleKey: "education.readspeed.faqTitle",
    faqs: [
      { qKey: "education.readspeed.faq.0.q", aKey: "education.readspeed.faq.0.a" },
      { qKey: "education.readspeed.faq.1.q", aKey: "education.readspeed.faq.1.a" },
      { qKey: "education.readspeed.faq.2.q", aKey: "education.readspeed.faq.2.a" },
      { qKey: "education.readspeed.faq.3.q", aKey: "education.readspeed.faq.3.a" },
      { qKey: "education.readspeed.faq.4.q", aKey: "education.readspeed.faq.4.a" },
      { qKey: "education.readspeed.faq.5.q", aKey: "education.readspeed.faq.5.a" },
    ]
  },
  {
    slug: "study-time-calculator",
    metaTitleKey: "education.studytime.metaTitle",
    metaDescriptionKey: "education.studytime.metaDescription",
    titleKey: "education.studytime.title",
    category: "Education",
    descriptionKey: "education.studytime.desc",
    heading: "education.studytime.heading",
    formulaId: "studytime",

    inputs: [
      { label: "education.studytime.totalChapters", name: "chapters", type: "number", min: 1, max: 200 },
      { label: "education.studytime.hoursPerChapter", name: "hoursPerChapter", type: "number" },
      {
        label: "education.studytime.speedType",
        name: "speedType",
        type: "select",
        options: [
          { value: "normal", label: "education.studytime.normal" },
          { value: "slow", label: "education.studytime.slow" },
          { value: "fast", label: "education.studytime.fast" }
        ]
      },
      {
        label: "education.studytime.goalExam",
        name: "goal",
        type: "select",
        options: [
          { value: "revision", label: "education.studytime.revision" },
          { value: "deep", label: "education.studytime.deep" }
        ]
      }
    ],

    result: {
      label: "education.studytime.result",
      explainKey: "education.studytime.resultExplain"
    },

    tocheading: "education.studytime.tocTitle",

    toc: [
      { id: "how-to-use", labelKey: "education.studytime.tochow" },
      { id: "examples", labelKey: "education.studytime.tocexamples" },
      { id: "formula", labelKey: "education.studytime.tocformula" },
      { id: "understanding", labelKey: "education.studytime.tocunderstanding" },
      { id: "why-method", labelKey: "education.studytime.tocwhymethod" },
    ],

    sections: [
      {
        id: "intro",
        titleKey: "education.studytime.aboutTitle",
        contentKey: "education.studytime.aboutContent",
        subsections: [
          {
            id: "how-to-use",
            titleKey: "education.studytime.howTitle",
            listKey: "education.studytime.howList",
            endKey: "education.studytime.howEnd",
          },
          {
            id: "examples",
            titleKey: "education.studytime.exampleTitle",
            linkparacontent: "education.studytime.exampleContent",
            linkparaKey: "education.studytime.exampleInterLink",
            linkparaslug: "study-planner-generator",
            endKey: "education.studytime.examplecontentend",
          },
        ]
      },

      {
        id: "formula",
        titleKey: "education.studytime.formulaTitle",
        introKey: "education.studytime.formulacontent",
        subsections: [
          {
            id: "main-formula",
            titleKey: "education.studytime.mainFormulaTitle",
            formulaKey: "education.studytime.mainFormula",
            type: "formula",
            endKey: "education.studytime.mainformulacontent",
          },
          {
            id: "understanding",
            titleKey: "education.studytime.understandingtitle",
            subsections: [
              {
                id: "units",
                titleKey: "education.studytime.understandingsubtitle1",
                contentKey: "education.studytime.understandingsubcontent1",
              },
              {
                id: "time-per-unit",
                titleKey: "education.studytime.understandingsubtitle2",
                contentKey: "education.studytime.understandingsubcontent2",
              },
              {
                id: "difficulty",
                titleKey: "education.studytime.understandingsubtitle3",
                contentKey: "education.studytime.understandingsubcontent3",
              },
              {
                id: "break-time",
                titleKey: "education.studytime.understandingsubtitle4",
                contentKey: "education.studytime.understandingsubcontent4",
              },
            ]
          },
          {
            id: "why-method",
            titleKey: "education.studytime.whymethodtitle",
            contentKey: "education.studytime.whymethodcontent",
          }
        ]
      },
    ],

    faqTitleKey: "education.studytime.faqTitle",
    faqs: [
      { qKey: "education.studytime.faq.0.q", aKey: "education.studytime.faq.0.a" },
      { qKey: "education.studytime.faq.1.q", aKey: "education.studytime.faq.1.a" },
      { qKey: "education.studytime.faq.2.q", aKey: "education.studytime.faq.2.a" },
      { qKey: "education.studytime.faq.3.q", aKey: "education.studytime.faq.3.a" },
      { qKey: "education.studytime.faq.4.q", aKey: "education.studytime.faq.4.a" },
      { qKey: "education.studytime.faq.5.q", aKey: "education.studytime.faq.5.a" },
    ]
  },
  {
    slug: "exam-score-predictor",
    metaTitleKey: "education.exampredict.metaTitle",
    metaDescriptionKey: "education.exampredict.desc",
    titleKey: "education.exampredict.title",
    category: "Education",
    descriptionKey: "education.exampredict.desc",
    heading: "education.exampredict.heading",
    formulaId: "exampredict",

    inputs: [
      { label: "education.exampredict.currentScore", name: "currentScore", type: "number", min: 0, max: 100 },
      { label: "education.exampredict.weightCompleted", name: "completedWeight", type: "number", unit: "%" },
      { label: "education.exampredict.finalWeight", name: "finalWeight", type: "number", unit: "%" },

      {
        label: "education.exampredict.difficulty",
        name: "difficulty",
        type: "select",
        options: [
          { value: "easy", label: "education.exampredict.easy" },
          { value: "moderate", label: "education.exampredict.moderate" },
          { value: "hard", label: "education.exampredict.hard" }
        ]
      },

      {
        label: "education.exampredict.targetType",
        name: "targetType",
        type: "select",
        options: [
          { value: "pass", label: "education.exampredict.pass" },
          { value: "gradeA", label: "education.exampredict.gradeA" },
          { value: "gradeB", label: "education.exampredict.gradeB" }
        ]
      }
    ],

    result: {
      label: "education.exampredict.result",
      explainKey: "education.exampredict.resultExplain"
    },

    tocheading: "education.exampredict.tocTitle",
    toc: [
      { id: "what", labelKey: "education.exampredict.tocwhatgpa" },
      { id: "how", labelKey: "education.exampredict.tochow" },
      { id: "how-to-use", labelKey: "education.exampredict.tochowto" },
      { id: "why-use", labelKey: "education.exampredict.tocwhyuse" },
      { id: "formula", labelKey: "education.exampredict.tocformula" },
      { id: "how-formula-works", labelKey: "education.exampredict.tochowformula" },
    ],

    sections: [
      {
        id: "intro",
        titleKey: "education.exampredict.introTitle",
        subsections: [
          {
            id: "what",
            titleKey: "education.exampredict.whatTitle",
            contentKey: "education.exampredict.whatContent",
          },
          {
            id: "how",
            titleKey: "education.exampredict.howTitle",
            contentKey: "education.exampredict.howContent",
          },
          {
            id: "how-to-use",
            titleKey: "education.exampredict.howtoTitle",
            listKey: "education.exampredict.howtoList",
            endKey: "education.exampredict.howtoEnd",
          },
          {
            id: "why-use",
            titleKey: "education.exampredict.whytitle",
            contentKey: "education.exampredict.whycontent",
          },
        ]
      },

      {
        id: "formula",
        titleKey: "education.exampredict.formulaTitle",
        introKey: "education.exampredict.formulacontent",
        subsections: [
          {
            id: "main-formula",
            titleKey: "education.exampredict.mainformulatitle",
            formulaKey: "education.exampredict.mainFormula",
            type: "formula",
            endKey: "education.exampredict.formulaExplain",
          },
          {
            id: "formula-image",
            imageKey: "education.exampredict.imageurl",
            imageAltKey: "education.exampredict.imagealttext",
          },
          {
            id: "how-formula-works",
            titleKey: "education.exampredict.howformulatitle",
            subsections: [
              {
                id: "mock-score",
                titleKey: "education.exampredict.howformulasubtitle1",
                contentKey: "education.exampredict.howformulasubcontent1",
              },
              {
                id: "trend-factor",
                titleKey: "education.exampredict.howformulasubtitle2",
                contentKey: "education.exampredict.howformulasubcontent2",
              },
              {
                id: "difficulty",
                titleKey: "education.exampredict.howformulasubtitle3",
                contentKey: "education.exampredict.howformulasubcontent3",
              },
              {
                id: "score-range",
                titleKey: "education.exampredict.howformulasubtitle4",
                contentKey: "education.exampredict.howformulasubcontent4",
              },
            ]
          },
          {
            id: "why-formula-helps",
            titleKey: "education.exampredict.whyformulaTitle",
            linkparacontent: "education.exampredict.whyformulaContent",
            linkparaKey: "education.exampredict.whyformulainterlink",
            linkparaslug: "gpa-calculator",
            endKey: "education.exampredict.whyformulatextend",
          }
        ]
      },
    ],

    faqTitleKey: "education.exampredict.faqTitle",
    faqs: [
      { qKey: "education.exampredict.faq.0.q", aKey: "education.exampredict.faq.0.a" },
      { qKey: "education.exampredict.faq.1.q", aKey: "education.exampredict.faq.1.a" },
      { qKey: "education.exampredict.faq.2.q", aKey: "education.exampredict.faq.2.a" },
      { qKey: "education.exampredict.faq.3.q", aKey: "education.exampredict.faq.3.a" },
      { qKey: "education.exampredict.faq.4.q", aKey: "education.exampredict.faq.4.a" },
      { qKey: "education.exampredict.faq.5.q", aKey: "education.exampredict.faq.5.a" },
    ]
  },
  {
    slug: "assignment-grade-calculator",
    metaTitleKey: "education.assignment.metaTitle",
    metaDescriptionKey: "education.assignment.desc",
    titleKey: "education.assignment.title",
    category: "Education",
    descriptionKey: "education.assignment.desc",
    heading: "education.assignment.heading",
    formulaId: "assignment",

    inputs: [
      {
        label: "education.assignment.numTasks",
        name: "numTasks",
        type: "number",
        isDynamic: true,
        min: 1,
        max: 20,
        dynamicConfig: {
          generates: "tasks",
          template: [
            {
              label: "education.assignment.taskName",
              name: "taskName",
              type: "text"
            },
            {
              label: "education.assignment.taskScore",
              name: "taskScore",
              type: "number"
            },
            {
              label: "education.assignment.taskWeight",
              name: "taskWeight",
              type: "number",
              unit: "%"
            }
          ]
        }
      },

      {
        label: "education.assignment.gradeScale",
        name: "scale",
        type: "select",
        options: [
          { value: "100", label: "education.assignment.scale100" },
          { value: "4", label: "education.assignment.scale4" }
        ]
      }
    ],

    result: {
      label: "education.assignment.result",
      explainKey: "education.assignment.resultExplain"
    },

    tocheading: "education.assignment.tocTitle",
    toc: [
      { id: "how-to-use", labelKey: "education.assignment.tochowto" },
      { id: "how-students-use", labelKey: "education.assignment.tochowtouse" },
      { id: "formula", labelKey: "education.assignment.tocformula" },
      { id: "understanding", labelKey: "education.assignment.tocexamples" },
      { id: "how-formula-helps", labelKey: "education.assignment.tochowformula" },
    ],

    sections: [
      {
        id: "intro",
        titleKey: "education.assignment.aboutTitle",
        contents: [
          "education.assignment.aboutContent1",
          "education.assignment.aboutContent2",
          "education.assignment.aboutContent3",
          "education.assignment.aboutContent4",
        ],
        subsections: [
          {
            id: "how-to-use",
            titleKey: "education.assignment.howtoTitle",
            listKey: "education.assignment.howtoList",
            endKey: "education.assignment.howtoEnd",
          },
          {
            id: "how-students-use",
            titleKey: "education.assignment.examplesubtitle",
            contentKey: "education.assignment.examplesubpara",
          },
        ]
      },

      {
        id: "formula",
        titleKey: "education.assignment.formulaTitle",
        introKey: "education.assignment.formulaIntro",
        subsections: [
          {
            id: "main-formula",
            titleKey: "education.assignment.mainFormulaTitle",
            formulaKey: "education.assignment.mainFormula",
            type: "formula",
            endKey: "education.assignment.mainformulatext",
          },
          {
            id: "weighted-formula",
            titleKey: "education.assignment.weightedformulaTitle",
            formulaKey: "education.assignment.weightedformula",
            type: "formula",
            endKey: "education.assignment.weightedformulatext",
          },
          {
            id: "formula-image",
            imageKey: "education.assignment.imageUrl",
            imageAltKey: "education.assignment.imageAlt",
          },
          {
            id: "understanding",
            titleKey: "education.assignment.understandingtitle",
            subsections: [
              {
                id: "earned-marks",
                titleKey: "education.assignment.understandingsubtitle1",
                contentKey: "education.assignment.understandingsubcontent1",
              },
              {
                id: "total-marks",
                titleKey: "education.assignment.understandingsubtitle2",
                contentKey: "education.assignment.understandingsubcontent2",
              },
              {
                id: "weight",
                titleKey: "education.assignment.understandingsubtitle3",
                contentKey: "education.assignment.understandingsubcontent3",
              },
              {
                id: "combined",
                titleKey: "education.assignment.understandingsubtitle4",
                contentKey: "education.assignment.understandingsubcontent4",
              },
            ]
          },
          {
            id: "how-formula-helps",
            titleKey: "education.assignment.howformulatitle",
            linkparacontent: "education.assignment.howformulacontent",
            linkparaKey: "education.assignment.howformulalink",
            linkparaslug: "gpa-calculator",
          }
        ]
      },
    ],

    faqTitleKey: "education.assignment.faqTitle",
    faqs: [
      { qKey: "education.assignment.faq.0.q", aKey: "education.assignment.faq.0.a" },
      { qKey: "education.assignment.faq.1.q", aKey: "education.assignment.faq.1.a" },
      { qKey: "education.assignment.faq.2.q", aKey: "education.assignment.faq.2.a" },
      { qKey: "education.assignment.faq.3.q", aKey: "education.assignment.faq.3.a" },
      { qKey: "education.assignment.faq.4.q", aKey: "education.assignment.faq.4.a" },
      { qKey: "education.assignment.faq.5.q", aKey: "education.assignment.faq.5.a" },
    ]
  },

  {
    slug: "study-planner-generator",
    metaTitleKey: "education.studyplanner.metaTitle",
    metaDescriptionKey: "education.studyplanner.desc",
    titleKey: "education.studyplanner.title",
    category: "Education",
    descriptionKey: "education.studyplanner.desc",
    heading: "education.studyplanner.heading",
    formulaId: "studyplanner",

    inputs: [
      { label: "education.studyplanner.hoursAvailable", name: "hours", type: "number", min: 1, max: 24 },
      { label: "education.studyplanner.days", name: "days", type: "number", min: 1, max: 60 },

      {
        label: "education.studyplanner.taskCount",
        name: "taskCount",
        type: "number",
        min: 1,
        max: 15,
        isDynamic: true,
        dynamicConfig: {
          generates: "tasks",
          template: [
            { label: "education.studyplanner.taskName", name: "taskName", type: "text" },
            {
              label: "education.studyplanner.taskDifficulty", name: "difficulty", type: "select",
              options: [
                { value: "easy", label: "Easy" },
                { value: "medium", label: "Medium" },
                { value: "hard", label: "Hard" }
              ]
            },
            { label: "education.studyplanner.taskHours", name: "hoursNeeded", type: "number" }
          ]
        }
      }
    ],

    result: {
      label: "education.studyplanner.result",
      explainKey: "education.studyplanner.resultExplain"
    },

    tocheading: "education.studyplanner.tocTitle",
    toc: [
      { id: "how-to-use", labelKey: "education.studyplanner.tochow" },
      { id: "examples", labelKey: "education.studyplanner.tocexamples" },
      { id: "formula", labelKey: "education.studyplanner.tocformula" },
      { id: "basic-formula", labelKey: "education.studyplanner.tocformula1" },
      { id: "understanding", labelKey: "education.studyplanner.tocunderstanding" },
      { id: "why-method", labelKey: "education.studyplanner.tocwhymethod" },
    ],

    sections: [
      {
        id: "intro",
        titleKey: "education.studyplanner.aboutTitle",
        contentKey: "education.studyplanner.aboutContent",
        subsections: [
          {
            id: "how-to-use",
            titleKey: "education.studyplanner.howTitle",
            listKey: "education.studyplanner.howList",
            endKey: "education.studyplanner.howEnd",
          },
          {
            id: "examples",
            titleKey: "education.studyplanner.exampleTitle",
            linkparacontent: "education.studyplanner.exampleContent",
            linkparaKey: "education.studyplanner.exampleInterLink",
            linkparaslug: "study-time-calculator",
            endKey: "education.studyplanner.examplecontentend",
          },
        ]
      },

      {
        id: "formula",
        titleKey: "education.studyplanner.formulaTitle",
        introKey: "education.studyplanner.formulacontent",
        subsections: [
          {
            id: "basic-formula",
            titleKey: "education.studyplanner.mainFormulaTitle",
            formulaKey: "education.studyplanner.mainFormula",
            type: "formula",
            endKey: "education.studyplanner.mainformulacontent",
          },
          {
            id: "understanding",
            titleKey: "education.studyplanner.understandingtitle",
            subsections: [
              {
                id: "total-hours",
                titleKey: "education.studyplanner.understandingsubtitle1",
                contentKey: "education.studyplanner.understandingsubcontent1",
              },
              {
                id: "tasks",
                titleKey: "education.studyplanner.understandingsubtitle2",
                contentKey: "education.studyplanner.understandingsubcontent2",
              },
              {
                id: "priority",
                titleKey: "education.studyplanner.understandingsubtitle3",
                contentKey: "education.studyplanner.understandingsubcontent3",
              },
              {
                id: "breaks",
                titleKey: "education.studyplanner.understandingsubtitle4",
                contentKey: "education.studyplanner.understandingsubcontent4",
              },
            ]
          },
          {
            id: "why-method",
            titleKey: "education.studyplanner.whymethodtitle",
            contentKey: "education.studyplanner.whymethodcontent",
          }
        ]
      },
    ],

    faqTitleKey: "education.studyplanner.faqTitle",
    faqs: [
      { qKey: "education.studyplanner.faq.0.q", aKey: "education.studyplanner.faq.0.a" },
      { qKey: "education.studyplanner.faq.1.q", aKey: "education.studyplanner.faq.1.a" },
      { qKey: "education.studyplanner.faq.2.q", aKey: "education.studyplanner.faq.2.a" },
      { qKey: "education.studyplanner.faq.3.q", aKey: "education.studyplanner.faq.3.a" },
      { qKey: "education.studyplanner.faq.4.q", aKey: "education.studyplanner.faq.4.a" },
      { qKey: "education.studyplanner.faq.5.q", aKey: "education.studyplanner.faq.5.a" },
    ]
  },
  {
    slug: "adaptive-grading-calculator",
    metaTitleKey: "education.adaptivegrading.metaTitle",
    metaDescriptionKey: "education.adaptivegrading.desc",
    titleKey: "education.adaptivegrading.title",
    category: "Education",
    descriptionKey: "education.adaptivegrading.desc",
    heading: "education.adaptivegrading.heading",
    formulaId: "adaptivegrading",

    inputs: [
      {
        label: "education.adaptivegrading.assessments",
        name: "assessments",
        type: "number",
        min: 1,
        max: 20,
        placeholder: "Enter number of assessments",
        isDynamic: true,
        dynamicConfig: {
          generates: "assessmentList",
          template: [
            {
              label: "education.adaptivegrading.assessmentName",
              name: "name",
              type: "text",
              placeholder: "e.g., Midterm Exam"
            },
            {
              label: "education.adaptivegrading.score",
              name: "score",
              type: "number",
              min: 0,
              max: 100,
              placeholder: "Score out of 100"
            },
            {
              label: "education.adaptivegrading.weight",
              name: "weight",
              type: "number",
              min: 1,
              max: 100,
              placeholder: "Weight %"
            },
            {
              label: "education.adaptivegrading.difficulty",
              name: "difficulty",
              type: "select",
              options: [
                { value: "1.0", label: "Easy" },
                { value: "1.2", label: "Medium" },
                { value: "1.5", label: "Hard" }
              ]
            }
          ]
        }
      },
      {
        label: "education.adaptivegrading.gradeScale",
        name: "gradeScale",
        type: "select",
        options: [
          { value: "4.0", label: "4.0 Scale" },
          { value: "5.0", label: "5.0 Scale" }
        ]
      },
      {
        label: "education.adaptivegrading.extraCredit",
        name: "extraCredit",
        type: "number",
        min: 0,
        max: 10,
        placeholder: "Extra credit points"
      }
    ],

    result: {
      label: "education.adaptivegrading.result",
      explainKey: "education.adaptivegrading.resultExplain"
    },

    tocheading: "education.adaptivegrading.tocTitle",
    toc: [
      { id: "what", labelKey: "education.adaptivegrading.tocwhatgpa" },
      { id: "how", labelKey: "education.adaptivegrading.tochow" },
      { id: "how-to-use", labelKey: "education.adaptivegrading.tochowto" },
      { id: "why-use", labelKey: "education.adaptivegrading.tocwhyuse" },
      { id: "formula", labelKey: "education.adaptivegrading.tocformula" },
      { id: "how-formula-works", labelKey: "education.adaptivegrading.tochowformula" },
    ],

    sections: [
      {
        id: "intro",
        titleKey: "education.adaptivegrading.introTitle",
        subsections: [
          {
            id: "what",
            titleKey: "education.adaptivegrading.whatTitle",
            contentKey: "education.adaptivegrading.whatContent",
          },
          {
            id: "how",
            titleKey: "education.adaptivegrading.howTitle",
            contentKey: "education.adaptivegrading.howContent",
          },
          {
            id: "how-to-use",
            titleKey: "education.adaptivegrading.howtoTitle",
            listKey: "education.adaptivegrading.howtoList",
            endKey: "education.adaptivegrading.howtoEnd",
          },
          {
            id: "why-use",
            titleKey: "education.adaptivegrading.whytitle",
            contentKey: "education.adaptivegrading.whycontent",
          },
        ]
      },

      {
        id: "formula",
        titleKey: "education.adaptivegrading.formulaTitle",
        introKey: "education.adaptivegrading.formulacontent",
        subsections: [
          {
            id: "main-formula",
            titleKey: "education.adaptivegrading.mainformulatitle",
            formulaKey: "education.adaptivegrading.mainFormula",
            type: "formula",
            endKey: "education.adaptivegrading.formulaExplain",
          },
          {
            id: "formula-image",
            imageKey: "education.adaptivegrading.imageurl",
            imageAltKey: "education.adaptivegrading.imagealttext",
          },
          {
            id: "how-formula-works",
            titleKey: "education.adaptivegrading.howformulatitle",
            subsections: [
              {
                id: "mock-score",
                titleKey: "education.adaptivegrading.howformulasubtitle1",
                contentKey: "education.adaptivegrading.howformulasubcontent1",
              },
              {
                id: "trend-factor",
                titleKey: "education.adaptivegrading.howformulasubtitle2",
                contentKey: "education.adaptivegrading.howformulasubcontent2",
              },
              {
                id: "difficulty",
                titleKey: "education.adaptivegrading.howformulasubtitle3",
                contentKey: "education.adaptivegrading.howformulasubcontent3",
              },
              {
                id: "score-range",
                titleKey: "education.adaptivegrading.howformulasubtitle4",
                contentKey: "education.adaptivegrading.howformulasubcontent4",
              },
            ]
          },
          {
            id: "why-formula-helps",
            titleKey: "education.adaptivegrading.whyformulaTitle",
            linkparacontent: "education.adaptivegrading.whyformulaContent",
            linkparaKey: "education.adaptivegrading.whyformulainterlink",
            linkparaslug: "assignment-grade-calculator",
            endKey: "education.adaptivegrading.whyformulatextend",
          }
        ]
      },
    ],

    faqTitleKey: "education.adaptivegrading.faqTitle",
    faqs: [
      { qKey: "education.adaptivegrading.faq.0.q", aKey: "education.adaptivegrading.faq.0.a" },
      { qKey: "education.adaptivegrading.faq.1.q", aKey: "education.adaptivegrading.faq.1.a" },
      { qKey: "education.adaptivegrading.faq.2.q", aKey: "education.adaptivegrading.faq.2.a" },
      { qKey: "education.adaptivegrading.faq.3.q", aKey: "education.adaptivegrading.faq.3.a" },
      { qKey: "education.adaptivegrading.faq.4.q", aKey: "education.adaptivegrading.faq.4.a" },
      { qKey: "education.adaptivegrading.faq.5.q", aKey: "education.adaptivegrading.faq.5.a" },
    ]
  },

  {
    slug: "ielts-score-calculator",
    metaTitleKey: "education.ielts.metaTitle",
    metaDescriptionKey: "education.ielts.metaDescription",
    titleKey: "education.ielts.title",
    category: "Education",
    descriptionKey: "education.ielts.desc",
    heading: "education.ielts.heading",
    formulaId: "ielts",

    inputs: [
      {
        label: "education.ielts.testType",
        name: "testType",
        type: "select",
        options: [
          { value: "academic", label: "education.ielts.academic" },
          { value: "general", label: "education.ielts.general" },
        ]
      },
      {
        label: "education.ielts.listeningScore",
        name: "listeningScore",
        type: "number",
        unit: "correct answers",
        min: 0,
        max: 40
      },
      {
        label: "education.ielts.readingScore",
        name: "readingScore",
        type: "number",
        unit: "correct answers",
        min: 0,
        max: 40
      },
      {
        label: "education.ielts.writingBand",
        name: "writingBand",
        type: "select",
        options: [
          { value: "4.0", label: "Band 4.0" },
          { value: "4.5", label: "Band 4.5" },
          { value: "5.0", label: "Band 5.0" },
          { value: "5.5", label: "Band 5.5" },
          { value: "6.0", label: "Band 6.0" },
          { value: "6.5", label: "Band 6.5" },
          { value: "7.0", label: "Band 7.0" },
          { value: "7.5", label: "Band 7.5" },
          { value: "8.0", label: "Band 8.0" },
          { value: "8.5", label: "Band 8.5" },
          { value: "9.0", label: "Band 9.0" },
        ]
      },
      {
        label: "education.ielts.speakingBand",
        name: "speakingBand",
        type: "select",
        options: [
          { value: "4.0", label: "Band 4.0" },
          { value: "4.5", label: "Band 4.5" },
          { value: "5.0", label: "Band 5.0" },
          { value: "5.5", label: "Band 5.5" },
          { value: "6.0", label: "Band 6.0" },
          { value: "6.5", label: "Band 6.5" },
          { value: "7.0", label: "Band 7.0" },
          { value: "7.5", label: "Band 7.5" },
          { value: "8.0", label: "Band 8.0" },
          { value: "8.5", label: "Band 8.5" },
          { value: "9.0", label: "Band 9.0" },
        ]
      },
    ],

    result: {
      label: "education.ielts.result",
      explainKey: "education.ielts.resultExplain",
    },

    toc: [
      { id: "what", labelKey: "education.ielts.tocwhatgpa" },
      { id: "how", labelKey: "education.ielts.tochow" },
      { id: "how-to-use", labelKey: "education.ielts.tochowto" },
      { id: "why-use", labelKey: "education.ielts.tocwhyuse" },
      { id: "formula", labelKey: "education.ielts.tocformula" },
      { id: "understanding", labelKey: "education.ielts.tocunderstanding" },
    ],

    sections: [
      {
        id: "intro",
        titleKey: "education.ielts.introTitle",
        subsections: [
          {
            id: "what",
            titleKey: "education.ielts.whatTitle",
            contentKey: "education.ielts.whatContent",
          },
          {
            id: "how",
            titleKey: "education.ielts.howTitle",
            contentKey: "education.ielts.howContent",
          },
          {
            id: "how-to-use",
            titleKey: "education.ielts.howtoTitle",
            listKey: "education.ielts.howtoList",
            endKey: "education.ielts.howtoEnd",
          },
          {
            id: "why-use",
            titleKey: "education.ielts.whytitle",
            contentKey: "education.ielts.whycontent",
          },
        ]
      },

      {
        id: "formula",
        titleKey: "education.ielts.formulaTitle",
        introKey: "education.ielts.formulacontent",
        subsections: [
          {
            id: "main-formula",
            titleKey: "education.ielts.mainformulatitle",
            formulaKey: "education.ielts.mainFormula",
            type: "formula",
            endKey: "education.ielts.formulaExplain",
          },
          {
            id: "formula-image",
            imageKey: "education.ielts.imageurl",
            imageAltKey: "education.ielts.imagealttext",
          },
          {
            id: "understanding",
            titleKey: "education.ielts.understandingtitle",
            subsections: [
              {
                id: "listening",
                titleKey: "education.ielts.Listeningtitle1",
                linkparacontent: "education.ielts.Listeningcontent",
                linkparaKey: "education.ielts.Listeninginterlink",
                linkparaslug: "reading-speed-calculator",
              },
              {
                id: "writing-speaking",
                titleKey: "education.ielts.writingtitle",
                contentKey: "education.ielts.writingcontent",
              },
              {
                id: "overall-score",
                titleKey: "education.ielts.ieltsscoreformulatitle",
                formulaKey: "education.ielts.ieltsscoreformula",
                type: "formula",
                endKey: "education.ielts.ieltsscoreformulaendtext",
              },
            ]
          },
          {
            id: "why-formula-helps",
            titleKey: "education.ielts.whyformulaTitle",
            contentKey: "education.ielts.whyformulaContent",
          }
        ]
      },
    ],

    faqTitleKey: "education.ielts.faqTitle",
    faqs: [
      { qKey: "education.ielts.faq.0.q", aKey: "education.ielts.faq.0.a" },
      { qKey: "education.ielts.faq.1.q", aKey: "education.ielts.faq.1.a" },
      { qKey: "education.ielts.faq.2.q", aKey: "education.ielts.faq.2.a" },
      { qKey: "education.ielts.faq.3.q", aKey: "education.ielts.faq.3.a" },
      { qKey: "education.ielts.faq.4.q", aKey: "education.ielts.faq.4.a" },
      { qKey: "education.ielts.faq.5.q", aKey: "education.ielts.faq.5.a" },
    ]
  },

  {
    slug: "impact-factor-calculator",
    metaTitleKey: "education.impactfactor.metaTitle",
    metaDescriptionKey: "education.impactfactor.desc",
    titleKey: "education.impactfactor.title",
    category: "Education",
    descriptionKey: "education.impactfactor.desc",
    heading: "education.impactfactor.heading",
    formulaId: "impactfactor",

    inputs: [
      {
        label: "education.impactfactor.citationsCurrentYear",
        name: "citationsCurrentYear",
        type: "number",
        min: 0
      },
      {
        label: "education.impactfactor.articlesYear1",
        name: "articlesYear1",
        type: "number",
        min: 0
      },
      {
        label: "education.impactfactor.articlesYear2",
        name: "articlesYear2",
        type: "number",
        min: 0
      },
      {
        label: "education.impactfactor.calculationYear",
        name: "calculationYear",
        type: "number",
        unit: "year",
        min: 2000,
        max: 2030
      },
    ],

    

    result: {
      label: "education.impactfactor.result",
      explainKey: "education.impactfactor.resultExplain",
    },
    tocheading: "education.impactfactor.tocTitle",
    toc: [
      { id: "what", labelKey: "education.impactfactor.tocwhatgpa" },
      { id: "how", labelKey: "education.impactfactor.tochow" },
      { id: "how-to-use", labelKey: "education.impactfactor.tochowto" },
      { id: "why-use", labelKey: "education.impactfactor.tocwhyuse" },
      { id: "formula", labelKey: "education.impactfactor.tocformula" },
      { id: "understanding", labelKey: "education.impactfactor.tocunderstanding" },
    ],

    sections: [
      {
        id: "intro",
        titleKey: "education.impactfactor.introTitle",
        subsections: [
          {
            id: "what",
            titleKey: "education.impactfactor.whatTitle",
            contentKey: "education.impactfactor.whatContent",
          },
          {
            id: "how",
            titleKey: "education.impactfactor.howTitle",
            contentKey: "education.impactfactor.howContent",
          },
          {
            id: "how-to-use",
            titleKey: "education.impactfactor.howtoTitle",
            listKey: "education.impactfactor.howtoList",
            endKey: "education.impactfactor.howtoEnd",
          },
          {
            id: "why-use",
            titleKey: "education.impactfactor.whytitle",
            contentKey: "education.impactfactor.whycontent",
          },
        ]
      },

      {
        id: "formula",
        titleKey: "education.impactfactor.formulaTitle",
        introKey: "education.impactfactor.formulacontent",
        subsections: [
          {
            id: "main-formula",
            titleKey: "education.impactfactor.mainformulatitle",
            formulaKey: "education.impactfactor.mainFormula",
            type: "formula",
            endKey: "education.impactfactor.formulaExplain",
          },
          {
            id: "formula-image",
            imageKey: "education.impactfactor.imageurl",
            imageAltKey: "education.impactfactor.imagealttext",
          },
          {
            id: "understanding",
            titleKey: "education.impactfactor.formulaExplanationTitle",
            subsections: [
              {
                id: "citations",
                titleKey: "education.impactfactor.subTitle1",
                contentKey: "education.impactfactor.subContent1",
              },
              {
                id: "articles",
                titleKey: "education.impactfactor.timespenttitle",
                contentKey: "education.impactfactor.timespentcontent",
              },
              {
                id: "citation-rate",
                titleKey: "education.impactfactor.outputtitle",
                contentKey: "education.impactfactor.outputcontent",
              },
              {
                id: "interpretation",
                titleKey: "education.impactfactor.ComprehensionTitle",
                contentKey: "education.impactfactor.ComprehensionContent",
              },
            ]
          },
          {
            id: "why-formula-helps",
            titleKey: "education.impactfactor.whyformulaTitle",
            linkparacontent: "education.impactfactor.whyformulaContent",
            linkparaKey: "education.impactfactor.whyformulainterlink",
            linkparaslug: "gpa-calculator",
          }
        ]
      },
    ],

    faqTitleKey: "education.impactfactor.faqTitle",
    faqs: [
      { qKey: "education.impactfactor.faq.0.q", aKey: "education.impactfactor.faq.0.a" },
      { qKey: "education.impactfactor.faq.1.q", aKey: "education.impactfactor.faq.1.a" },
      { qKey: "education.impactfactor.faq.2.q", aKey: "education.impactfactor.faq.2.a" },
      { qKey: "education.impactfactor.faq.3.q", aKey: "education.impactfactor.faq.3.a" },
      { qKey: "education.impactfactor.faq.4.q", aKey: "education.impactfactor.faq.4.a" },
      { qKey: "education.impactfactor.faq.5.q", aKey: "education.impactfactor.faq.5.a" },
    ]
  },

];