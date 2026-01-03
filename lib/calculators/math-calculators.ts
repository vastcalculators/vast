import type { Calculator } from "./types";

export const mathsCalculators: Calculator[] = [
  {
    slug: "attendance-calculator",
    metaTitleKey: "maths.attendance.metaTitle",
    metaDescriptionKey: "maths.attendance.desc",
    titleKey: "maths.attendance.title",
    category: "maths",
    descriptionKey: "maths.attendance.desc",
    heading: "maths.attendance.heading",
    formulaId: "attendance",

    inputs: [
      {
        label: "maths.attendance.totalClasses",
        name: "totalClasses",
        type: "number",
        min: 1,
        max: 500,
        placeholder: "Total classes held"
      },
      {
        label: "maths.attendance.attendedClasses",
        name: "attendedClasses",
        type: "number",
        min: 0,
        max: 500,
        placeholder: "Classes attended"
      }
    ],

    result: {
      label: "maths.attendance.result",
      explainKey: "maths.attendance.resultExplain"
    },

    tocheading: "maths.attendance.tocTitle",
    toc: [
      { id: "what", labelKey: "maths.attendance.tocwhatgpa" },
      { id: "how", labelKey: "maths.attendance.tochow" },
      { id: "how-to-use", labelKey: "maths.attendance.tochowto" },
      { id: "why-use", labelKey: "maths.attendance.tocwhyuse" },
      { id: "formula", labelKey: "maths.attendance.tocformula" },
      { id: "how-formula-works", labelKey: "maths.attendance.tochowformula" },
    ],

    sections: [
      {
        id: "intro",
        titleKey: "maths.attendance.introTitle",
        subsections: [
          {
            id: "what",
            titleKey: "maths.attendance.whatTitle",
            contentKey: "maths.attendance.whatContent",
          },
          {
            id: "how",
            titleKey: "maths.attendance.howTitle",
            contentKey: "maths.attendance.howContent",
          },
          {
            id: "how-to-use",
            titleKey: "maths.attendance.howtoTitle",
            listKey: "maths.attendance.howtoList",
            endKey: "maths.attendance.howtoEnd",
          },
          {
            id: "why-use",
            titleKey: "maths.attendance.whytitle",
            contentKey: "maths.attendance.whycontent",
          },
        ]
      },

      {
        id: "formula",
        titleKey: "maths.attendance.formulaTitle",
        introKey: "maths.attendance.formulacontent",
        subsections: [
          {
            id: "main-formula",
            titleKey: "maths.attendance.mainformulatitle",
            formulaKey: "maths.attendance.mainFormula",
            type: "formula",
            endKey: "maths.attendance.formulaExplain",
          },
          {
            id: "formula-image",
            imageKey: "maths.attendance.imageurl",
            imageAltKey: "maths.attendance.imagealttext",
          },
          {
            id: "how-formula-works",
            titleKey: "maths.attendance.howformulatitle",
            subsections: [
              {
                id: "mock-score",
                titleKey: "maths.attendance.howformulasubtitle1",
                contentKey: "maths.attendance.howformulasubcontent1",
              },
              {
                id: "trend-factor",
                titleKey: "maths.attendance.howformulasubtitle2",
                contentKey: "maths.attendance.howformulasubcontent2",
              },
              {
                id: "difficulty",
                titleKey: "maths.attendance.howformulasubtitle3",
                contentKey: "maths.attendance.howformulasubcontent3",
              },
              {
                id: "score-range",
                titleKey: "maths.attendance.howformulasubtitle4",
                contentKey: "maths.attendance.howformulasubcontent4",
              },
            ]
          },
          {
            id: "why-formula-helps",
            titleKey: "maths.attendance.whyformulaTitle",
            linkparacontent: "maths.attendance.whyformulaContent",
            linkparaKey: "maths.attendance.whyformulainterlink",
            linkparaslug: "grade-percentage-calculator",
            endKey: "maths.attendance.whyformulatextend",
          }
        ]
      },
    ],

    faqTitleKey: "maths.attendance.faqTitle",
    faqs: [
      { qKey: "maths.attendance.faq.0.q", aKey: "maths.attendance.faq.0.a" },
      { qKey: "maths.attendance.faq.1.q", aKey: "maths.attendance.faq.1.a" },
      { qKey: "maths.attendance.faq.2.q", aKey: "maths.attendance.faq.2.a" },
      { qKey: "maths.attendance.faq.3.q", aKey: "maths.attendance.faq.3.a" },
      { qKey: "maths.attendance.faq.4.q", aKey: "maths.attendance.faq.4.a" },
      { qKey: "maths.attendance.faq.5.q", aKey: "maths.attendance.faq.5.a" },
    ]
  },

  {
    slug: "grade-percentage-calculator",
    metaTitleKey: "maths.gradepercentage.metaTitle",
    metaDescriptionKey: "maths.gradepercentage.desc",
    titleKey: "maths.gradepercentage.title",
    category: "maths",
    descriptionKey: "maths.gradepercentage.desc",
    heading: "maths.gradepercentage.heading",
    formulaId: "gradePercentage",

    inputs: [
      {
        label: "maths.gradepercentage.numberOfAssessments",
        name: "numberOfAssessments",
        type: "number",
        min: 1,
        max: 30,
        placeholder: "Enter number of assessments",
        isDynamic: true,
        dynamicConfig: {
          generates: "assessments",
          template: [
            {
              label: "maths.gradepercentage.assessmentName",
              name: "assessmentName",
              type: "text",
              placeholder: "e.g., Midterm Exam"
            },
            {
              label: "maths.gradepercentage.scoreObtained",
              name: "scoreObtained",
              type: "number",
              min: 0,
              max: 100,
              placeholder: "Marks obtained"
            },
            {
              label: "maths.gradepercentage.totalScore",
              name: "totalScore",
              type: "number",
              min: 1,
              max: 200,
              placeholder: "Total marks"
            },
            {
              label: "maths.gradepercentage.weightage",
              name: "weightage",
              type: "number",
              min: 0,
              max: 100,
              placeholder: "Weightage (%) of this assessment",
            },
            {
              label: "maths.gradepercentage.category",
              name: "category",
              type: "text",
              placeholder: "e.g., Quiz, Assignment, Exam",
            }
          ]
        }
      },
      {
        label: "maths.gradepercentage.extraCredit",
        name: "extraCredit",
        type: "number",
        min: 0,
        max: 50,
        placeholder: "Extra credit marks (if any)",
      },
      {
        label: "maths.gradepercentage.roundingOption",
        name: "roundingOption",
        type: "select",
        options: [
          { label: "maths.gradepercentage.roundUp", value: "up" },
          { label: "maths.gradepercentage.roundDown", value: "down" },
          { label: "maths.gradepercentage.roundNearest", value: "nearest" }
        ],
      }
    ],

    result: {
      label: "maths.gradepercentage.result",
      explainKey: "maths.gradepercentage.resultExplain"
    },

    tocheading: "maths.gradepercentage.tocTitle",
    toc: [
      { id: "what", labelKey: "maths.gradepercentage.tocwhat" },
      { id: "how", labelKey: "maths.gradepercentage.tochow" },
      { id: "how-to-use", labelKey: "maths.gradepercentage.tochowtouse" },
      { id: "why", labelKey: "maths.gradepercentage.tocwhy" },
      { id: "formula", labelKey: "maths.gradepercentage.tocformula" },
      { id: "understanding", labelKey: "maths.gradepercentage.tocunderstanding" },
      { id: "how-formula-helps", labelKey: "maths.gradepercentage.tochowformula" },
    ],

    sections: [
      {
        id: "intro",
        titleKey: "maths.gradepercentage.introTitle",
        subsections: [
          {
            id: "what",
            titleKey: "maths.gradepercentage.whatTitle",
            contentKey: "maths.gradepercentage.whatContent",
          },
          {
            id: "how",
            titleKey: "maths.gradepercentage.howTitle",
            contentKey: "maths.gradepercentage.howContent",
          },
          {
            id: "how-to-use",
            titleKey: "maths.gradepercentage.howtoTitle",
            listKey: "maths.gradepercentage.howtoList",
            endKey: "maths.gradepercentage.howtoEnd",
          },
          {
            id: "why",
            titleKey: "maths.gradepercentage.whytitle",
            contentKey: "maths.gradepercentage.whycontent",
          },
        ]
      },

      {
        id: "formula",
        titleKey: "maths.gradepercentage.formulaTitle",
        introKey: "maths.gradepercentage.formulacontent",
        subsections: [
          {
            id: "main-formula",
            titleKey: "maths.gradepercentage.mainFormulatitle",
            formulaKey: "maths.gradepercentage.mainFormula",
            type: "formula",
            endKey: "maths.gradepercentage.formulaExplain",
          },
          {
            id: "formula-image",
            imageKey: "maths.gradepercentage.imageurl",
            imageAltKey: "maths.gradepercentage.imagealttext",
          },
          {
            id: "understanding",
            titleKey: "maths.gradepercentage.understandingtitle",
            subsections: [
              {
                id: "earned-marks",
                titleKey: "maths.gradepercentage.understandingsubtitle1",
                contentKey: "maths.gradepercentage.understandingsubcontent1",
              },
              {
                id: "total-marks",
                titleKey: "maths.gradepercentage.understandingsubtitle2",
                contentKey: "maths.gradepercentage.understandingsubcontent2",
              },
              {
                id: "weighted-marks",
                titleKey: "maths.gradepercentage.understandingsubtitle3",
                contentKey: "maths.gradepercentage.understandingsubcontent3",
              },
              {
                id: "final-output",
                titleKey: "maths.gradepercentage.understandingsubtitle4",
                contentKey: "maths.gradepercentage.understandingsubcontent4",
              },
            ]
          },
          {
            id: "how-formula-helps",
            titleKey: "maths.gradepercentage.howformulaTitle",
            linkparacontent: "maths.gradepercentage.exampleContent",
            linkparaKey: "maths.gradepercentage.exampleinterlink",
            linkparaslug: "attendance-calculator",
          }
        ]
      },
    ],

    faqTitleKey: "maths.gradepercentage.faqTitle",
    faqs: [
      { qKey: "maths.gradepercentage.faq.0.q", aKey: "maths.gradepercentage.faq.0.a" },
      { qKey: "maths.gradepercentage.faq.1.q", aKey: "maths.gradepercentage.faq.1.a" },
      { qKey: "maths.gradepercentage.faq.2.q", aKey: "maths.gradepercentage.faq.2.a" },
      { qKey: "maths.gradepercentage.faq.3.q", aKey: "maths.gradepercentage.faq.3.a" },
      { qKey: "maths.gradepercentage.faq.4.q", aKey: "maths.gradepercentage.faq.4.a" },
      { qKey: "maths.gradepercentage.faq.5.q", aKey: "maths.gradepercentage.faq.5.a" },
    ]
  },

  {
    slug: "percentage-increase-decrease-calculator",
    metaTitleKey: "maths.percentchange.metaTitle",
    metaDescriptionKey: "maths.percentchange.desc",
    titleKey: "maths.percentchange.title",
    category: "maths",
    descriptionKey: "maths.percentchange.desc",
    heading: "maths.percentchange.heading",
    formulaId: "percentageChange",

    inputs: [
      {
        label: "maths.percentchange.originalValue",
        name: "originalValue",
        type: "number",
        min: 0,
        placeholder: "Enter original value"
      },
      {
        label: "maths.percentchange.newValue",
        name: "newValue",
        type: "number",
        min: 0,
        placeholder: "Enter new value"
      }
    ],

    result: {
      label: "maths.percentchange.result",
      explainKey: "maths.percentchange.resultExplain"
    },

    tocheading: "maths.percentchange.tocTitle",
    toc: [
      { id: "what", labelKey: "maths.percentchange.tocwhat" },
      { id: "how", labelKey: "maths.percentchange.tochow" },
      { id: "how-to-use", labelKey: "maths.percentchange.tochowtouse" },
      { id: "why-use", labelKey: "maths.percentchange.tocwhy" },
      { id: "formula", labelKey: "maths.percentchange.tocformula" },
      { id: "understanding", labelKey: "maths.percentchange.tocunderstanding" },
      { id: "how-formula-helps", labelKey: "maths.percentchange.tochowformula" },
    ],

    sections: [
      {
        id: "intro",
        titleKey: "maths.percentchange.introTitle",
        subsections: [
          {
            id: "what",
            titleKey: "maths.percentchange.whatTitle",
            contentKey: "maths.percentchange.whatContent",
          },
          {
            id: "how",
            titleKey: "maths.percentchange.howTitle",
            linkparacontent: "maths.percentchange.howContent",
            linkparaKey: "maths.percentchange.howinterlink",
            linkparaslug: "average-calculator",
          },
          {
            id: "how-to-use",
            titleKey: "maths.percentchange.howtoTitle",
            listKey: "maths.percentchange.howtoList",
            endKey: "maths.percentchange.howtoEnd",
          },
          {
            id: "why-use",
            titleKey: "maths.percentchange.whytitle",
            contentKey: "maths.percentchange.whycontent",
          },
        ]
      },

      {
        id: "formula",
        titleKey: "maths.percentchange.formulaTitle",
        introKey: "maths.percentchange.formulacontent",
        subsections: [
          {
            id: "increase-formula",
            titleKey: "maths.percentchange.mainFormulatitle",
            formulaKey: "maths.percentchange.mainFormula",
            type: "formula",
            endKey: "maths.percentchange.formulaExplain",
          },
          {
            id: "decrease-formula",
            titleKey: "maths.percentchange.mainFormulatitle2",
            formulaKey: "maths.percentchange.mainFormula2",
            type: "formula",
            endKey: "maths.percentchange.formulaExplain2",
          },
          {
            id: "formula-image",
            imageKey: "maths.percentchange.imageurl",
            imageAltKey: "maths.percentchange.imagealttext",
          },
          {
            id: "understanding",
            titleKey: "maths.percentchange.understandingtitle",
            subsections: [
              {
                id: "old-value",
                titleKey: "maths.percentchange.understandingsubtitle1",
                contentKey: "maths.percentchange.understandingsubcontent1",
              },
              {
                id: "new-value",
                titleKey: "maths.percentchange.understandingsubtitle2",
                contentKey: "maths.percentchange.understandingsubcontent2",
              },
              {
                id: "difference",
                titleKey: "maths.percentchange.understandingsubtitle3",
                contentKey: "maths.percentchange.understandingsubcontent3",
              },
              {
                id: "calculation",
                titleKey: "maths.percentchange.understandingsubtitle4",
                contentKey: "maths.percentchange.understandingsubcontent4",
              },
            ]
          },
          {
            id: "how-formula-helps",
            titleKey: "maths.percentchange.howformulaTitle",
            contentKey: "maths.percentchange.exampleContent",
          }
        ]
      },
    ],

    faqTitleKey: "maths.percentchange.faqTitle",
    faqs: [
      { qKey: "maths.percentchange.faq.0.q", aKey: "maths.percentchange.faq.0.a" },
      { qKey: "maths.percentchange.faq.1.q", aKey: "maths.percentchange.faq.1.a" },
      { qKey: "maths.percentchange.faq.2.q", aKey: "maths.percentchange.faq.2.a" },
      { qKey: "maths.percentchange.faq.3.q", aKey: "maths.percentchange.faq.3.a" },
      { qKey: "maths.percentchange.faq.4.q", aKey: "maths.percentchange.faq.4.a" },
      { qKey: "maths.percentchange.faq.5.q", aKey: "maths.percentchange.faq.5.a" },
    ]
  },

  {
    slug: "quadratic-equation-solver",
    metaTitleKey: "maths.quadratic.metaTitle",
    metaDescriptionKey: "maths.quadratic.metaDescription",
    titleKey: "maths.quadratic.title",
    category: "maths",
    descriptionKey: "maths.quadratic.desc",
    heading: "maths.quadratic.heading",
    formulaId: "quadratic",

    inputs: [
      {
        label: "maths.quadratic.coeffA",
        name: "coeffA",
        type: "number",
        placeholder: "a (≠ 0)"
      },
      {
        label: "maths.quadratic.coeffB",
        name: "coeffB",
        type: "number",
        placeholder: "b"
      },
      {
        label: "maths.quadratic.coeffC",
        name: "coeffC",
        type: "number",
        placeholder: "c"
      },
    ],

    result: {
      label: "maths.quadratic.result",
      explainKey: "maths.quadratic.resultExplain",
    },

    tocheading: "maths.percentchange.tocTitle",
    toc: [
      { id: "what", labelKey: "maths.quadratic.tocwhat" },
      { id: "how", labelKey: "maths.quadratic.tochow" },
      { id: "how-to-use", labelKey: "maths.quadratic.tochowtouse" },
      { id: "why-use", labelKey: "maths.quadratic.tocwhy" },
      { id: "formula", labelKey: "maths.quadratic.tocformula" },
      { id: "understanding", labelKey: "maths.quadratic.tocunderstanding" },
    ],

    sections: [
      {
        id: "intro",
        titleKey: "maths.quadratic.introTitle",
        subsections: [
          {
            id: "what",
            titleKey: "maths.quadratic.whatTitle",
            contentKey: "maths.quadratic.whatContent",
          },
          {
            id: "how",
            titleKey: "maths.quadratic.howTitle",
            linkparacontent: "maths.quadratic.howContent",
            linkparaKey: "maths.quadratic.howinterlink",
            linkparaslug: "average-calculator",
          },
          {
            id: "how-to-use",
            titleKey: "maths.quadratic.howtoTitle",
            listKey: "maths.quadratic.howtoList",
            endKey: "maths.quadratic.howtoEnd",
          },
          {
            id: "why-use",
            titleKey: "maths.quadratic.whytitle",
            contentKey: "maths.quadratic.whycontent",
          },
        ]
      },

      {
        id: "formula",
        titleKey: "maths.quadratic.formulaTitle",
        introKey: "maths.quadratic.formulacontent",
        subsections: [
          {
            id: "main-formula",
            titleKey: "maths.quadratic.mainFormulatitle",
            formulaKey: "maths.quadratic.mainFormula",
            type: "formula",
            endKey: "maths.quadratic.formulaExplain",
          },
          {
            id: "formula-image",
            imageKey: "maths.quadratic.imageurl",
            imageAltKey: "maths.quadratic.imagealttext",
          },
          {
            id: "understanding",
            titleKey: "maths.quadratic.understandingtitle",
            subsections: [
              {
                id: "coefficients",
                titleKey: "maths.quadratic.understandingsubtitle1",
                contentKey: "maths.quadratic.understandingsubcontent1",
              },
              {
                id: "discriminant",
                titleKey: "maths.quadratic.understandingsubtitle2",
                contentKey: "maths.quadratic.understandingsubcontent2",
                listKey: "maths.quadratic.understandingsubcontent2List",
              },
              {
                id: "apply-formula",
                titleKey: "maths.quadratic.understandingsubtitle3",
                contentKey: "maths.quadratic.understandingsubcontent3",
              },
              {
                id: "root-type",
                titleKey: "maths.quadratic.understandingsubtitle4",
                contentKey: "maths.quadratic.understandingsubcontent4",
              },
            ]
          },
          {
            id: "why-formula-helps",
            titleKey: "maths.quadratic.howformulaTitle",
            contentKey: "maths.quadratic.exampleContent",
          }
        ]
      },
    ],

    faqTitleKey: "maths.quadratic.faqTitle",
    faqs: [
      { qKey: "maths.quadratic.faq.0.q", aKey: "maths.quadratic.faq.0.a" },
      { qKey: "maths.quadratic.faq.1.q", aKey: "maths.quadratic.faq.1.a" },
      { qKey: "maths.quadratic.faq.2.q", aKey: "maths.quadratic.faq.2.a" },
      { qKey: "maths.quadratic.faq.3.q", aKey: "maths.quadratic.faq.3.a" },
      { qKey: "maths.quadratic.faq.4.q", aKey: "maths.quadratic.faq.4.a" },
      { qKey: "maths.quadratic.faq.5.q", aKey: "maths.quadratic.faq.5.a" },
    ]
  },

  {
    slug: "average-calculator",
    metaTitleKey: "maths.average.metaTitle",
    metaDescriptionKey: "maths.average.desc",
    titleKey: "maths.average.title",
    category: "maths",
    descriptionKey: "maths.average.desc",
    heading: "maths.average.heading",
    formulaId: "average",

    inputs: [
      {
        label: "maths.average.numbers",
        name: "numbers",
        type: "text",
        placeholder: "Enter numbers separated by commas"
      }
    ],

    result: {
      label: "maths.average.result",
      explainKey: "maths.average.resultExplain"
    },

    tocheading: "maths.average.tocTitle",
    toc: [
      { id: "what", labelKey: "maths.average.tocwhat" },
      { id: "how", labelKey: "maths.average.tochow" },
      { id: "how-to-use", labelKey: "maths.average.tochowtouse" },
      { id: "why", labelKey: "maths.average.tocwhy" },
      { id: "formula", labelKey: "maths.average.tocformula" },
      { id: "understanding", labelKey: "maths.average.tocunderstanding" },
      { id: "how-formula-helps", labelKey: "maths.average.tochowformula" },
    ],

    sections: [
      {
        id: "intro",
        titleKey: "maths.average.introTitle",
        subsections: [
          {
            id: "what",
            titleKey: "maths.average.whatTitle",
            contentKey: "maths.average.whatContent",
          },
          {
            id: "how",
            titleKey: "maths.average.howTitle",
            contentKey: "maths.average.howContent",
          },
          {
            id: "how-to-use",
            titleKey: "maths.average.howtoTitle",
            listKey: "maths.average.howtoList",
            endKey: "maths.average.howtoEnd",
          },
          {
            id: "why",
            titleKey: "maths.average.whytitle",
            contentKey: "maths.average.whycontent",
          },
        ]
      },

      {
        id: "formula",
        titleKey: "maths.average.formulaTitle",
        introKey: "maths.average.formulacontent",
        subsections: [
          {
            id: "main-formula",
            titleKey: "maths.average.mainFormulatitle",
            formulaKey: "maths.average.mainFormula",
            type: "formula",
            endKey: "maths.average.formulaExplain",
          },
          {
            id: "formula-image",
            imageKey: "maths.average.imageurl",
            imageAltKey: "maths.average.imagealttext",
          },
          {
            id: "understanding",
            titleKey: "maths.average.understandingtitle",
            subsections: [
              {
                id: "earned-marks",
                titleKey: "maths.average.understandingsubtitle1",
                contentKey: "maths.average.understandingsubcontent1",
              },
              {
                id: "total-marks",
                titleKey: "maths.average.understandingsubtitle2",
                contentKey: "maths.average.understandingsubcontent2",
              },
              {
                id: "weighted-marks",
                titleKey: "maths.average.understandingsubtitle3",
                contentKey: "maths.average.understandingsubcontent3",
              },
              {
                id: "final-output",
                titleKey: "maths.average.understandingsubtitle4",
                contentKey: "maths.average.understandingsubcontent4",
              },
            ]
          },
          {
            id: "how-formula-helps",
            titleKey: "maths.average.howformulaTitle",
            linkparacontent: "maths.average.exampleContent",
            linkparaKey: "maths.average.exampleinterlink",
            linkparaslug: "percentage-increase-decrease-calculator",
          }
        ]
      },
    ],

    faqTitleKey: "maths.average.faqTitle",
    faqs: [
      { qKey: "maths.average.faq.0.q", aKey: "maths.average.faq.0.a" },
      { qKey: "maths.average.faq.1.q", aKey: "maths.average.faq.1.a" },
      { qKey: "maths.average.faq.2.q", aKey: "maths.average.faq.2.a" },
      { qKey: "maths.average.faq.3.q", aKey: "maths.average.faq.3.a" },
      { qKey: "maths.average.faq.4.q", aKey: "maths.average.faq.4.a" },
      { qKey: "maths.average.faq.5.q", aKey: "maths.average.faq.5.a" },
    ]
  },

  {
    slug: "percentage-calculator",
    metaTitleKey: "maths.percent.metaTitle",
    metaDescriptionKey: "maths.percent.metaDescription",
    titleKey: "maths.percent.title",
    category: "Maths",
    descriptionKey: "maths.percent.desc",
    heading: "maths.percent.heading",
    formulaId: "percentagecalculator",

   inputs: [
  {
    label: "maths.percent.percentageValue",
    name: "percentage",
    type: "number",
    unit: "%",
    min: 0
  },
  {
    label: "maths.percent.baseValue",
    name: "value",
    type: "number",
    min: 0
  }
],


    result: {
      label: "maths.percent.result",
      explainKey: "maths.percent.resultExplain",
    },
    tocheading: "maths.percent.tocTitle",
    toc: [
      { id: "what", labelKey: "maths.percent.tocwhat" },
      { id: "how", labelKey: "maths.percent.tochow" },
      { id: "why-use", labelKey: "maths.percent.tochowtouse" },
      { id: "formula", labelKey: "maths.percent.tocformula" },
      { id: "understanding", labelKey: "maths.percent.tocunderstanding" },
      { id: "increase-decrease", labelKey: "maths.percent.tochowformula" },
    ],

    sections: [
      {
        id: "intro",
        titleKey: "maths.percent.introTitle",
        subsections: [
          {
            id: "what",
            titleKey: "maths.percent.whatTitle",
            contentKey: "maths.percent.whatContent",
            contentKey2: "maths.percent.whatContent2",
          },
          {
            id: "how",
            titleKey: "maths.percent.howTitle",
            contentKey: "maths.percent.howContent",
            contentKey2: "maths.percent.howContent2",
            linkparacontent: "maths.percent.howContent2",
            linkparaKey: "maths.percent.howinterlink",
            linkparaslug: "percentage-increase-decrease-calculator",
          },
          {
            id: "why-use",
            titleKey: "maths.percent.howtoTitle",
            contentKey: "maths.percent.howtocontent",
            imageKey: "maths.percent.imageurl",
            imageAltKey: "maths.percent.imagealttext",
          },
        ]
      },

      {
        id: "formula",
        titleKey: "maths.percent.formulaTitle",
        subsections: [
          {
            id: "basic-formula",
            titleKey: "maths.percent.formulatitle1",
            introKey: "maths.percent.formulacontent",
            formulaKey: "maths.percent.mainFormula",
            type: "formula",
            endKey: "maths.percent.formulaExplain",
          },
          {
            id: "understanding",
            titleKey: "maths.percent.understandingtitle",
            contentKey: "maths.percent.understandingcontent",
          },
          {
            id: "increase-decrease",
            titleKey: "maths.percent.formulaincreasetitle",
            contentKey: "maths.percent.formulaincreasecontent",
            formulaKey: "maths.percent.formulaincrease",
            type: "formula",
            endKey: "maths.percent.formulaincreaseend",
          },
          {
            id: "difference",
            titleKey: "maths.percent.formuladiffrencetitle",
            contentKey: "maths.percent.formuladiffrencecontent",
            formulaKey: "maths.percent.formuladiffrence",
            type: "formula",
            endKey: "maths.percent.formuladiffrenceend",
          },
        ]
      },
    ],

    faqTitleKey: "maths.percent.faqTitle",
    faqs: [
      { qKey: "maths.percent.faq.0.q", aKey: "maths.percent.faq.0.a" },
      { qKey: "maths.percent.faq.1.q", aKey: "maths.percent.faq.1.a" },
      { qKey: "maths.percent.faq.2.q", aKey: "maths.percent.faq.2.a" },
      { qKey: "maths.percent.faq.3.q", aKey: "maths.percent.faq.3.a" },
      { qKey: "maths.percent.faq.4.q", aKey: "maths.percent.faq.4.a" },
      { qKey: "maths.percent.faq.5.q", aKey: "maths.percent.faq.5.a" },
    ]
  },
  {
    slug: "cube-root-calculator",
    metaTitleKey: "maths.cuberoot.metaTitle",
    metaDescriptionKey: "maths.cuberoot.metaDescription",
    titleKey: "maths.cuberoot.title",
    category: "Maths",
    descriptionKey: "maths.cuberoot.desc",
    heading: "maths.cuberoot.heading",
    formulaId: "cuberoot",

    inputs: [
      {
        label: "maths.cuberoot.number",
        name: "number",
        type: "number",
        placeholder: "Enter any number"
      },
    ],

    result: {
      label: "maths.cuberoot.result",
      explainKey: "maths.cuberoot.resultExplain",
    },
    tocheading: "maths.cuberoot.tocTitle",
    toc: [
      { id: "what", labelKey: "maths.cuberoot.tocwhat" },
      { id: "understanding", labelKey: "maths.cuberoot.tocunderstanding" },
      { id: "how", labelKey: "maths.cuberoot.tochow" },
      { id: "when-to-use", labelKey: "maths.cuberoot.tocwhentouse" },
      { id: "formula", labelKey: "maths.cuberoot.tocformula" },
      { id: "calculation", labelKey: "maths.cuberoot.tocdrinksize" },
    ],

    sections: [
      {
        id: "intro",
        titleKey: "maths.cuberoot.introTitle",
        subsections: [
          {
            id: "what",
            titleKey: "maths.cuberoot.whatTitle",
            contentKey: "maths.cuberoot.whatContent",
            contentKey2: "maths.cuberoot.whatContent2",
          },
          {
            id: "understanding",
            titleKey: "maths.cuberoot.understandingTitle",
            contentKey: "maths.cuberoot.understandingContent",
            contentKey2: "maths.cuberoot.understandingcontent2",
          },
          {
            id: "how",
            titleKey: "maths.cuberoot.howtitle",
            contentKey: "maths.cuberoot.howcontent",
          },
          {
            id: "when-to-use",
            titleKey: "maths.cuberoot.whentousetitle",
            contentKey: "maths.cuberoot.whentousecontent",
            linkparacontent: "maths.cuberoot.whentousecontent",
            linkparaKey: "maths.cuberoot.interlink",
            linkparaslug: "digital-root-calculator",
            imageKey: "maths.cuberoot.imageurl",
            imageAltKey: "maths.cuberoot.imagealttext",
          },
        ]
      },

      {
        id: "formula",
        titleKey: "maths.cuberoot.formulaTitle",
        subsections: [
          {
            id: "basic-formula",
            titleKey: "maths.cuberoot.formulasubtitle",
            contentKey: "maths.cuberoot.formulasubcontent",
          },
          {
            id: "radical-notation",
            titleKey: "maths.cuberoot.mainFormulatitle",
            contentKey: "maths.cuberoot.mainFormulacontent",
            type: "formula",
          },
          {
            id: "calculation",
            titleKey: "maths.cuberoot.howcalctitle",
            contentKey: "maths.cuberoot.howcalccontent",
          },
          {
            id: "calculation-steps",
            titleKey: "maths.cuberoot.stepTitle",
            listKey: "maths.cuberoot.stepList",
            endKey: "maths.cuberoot.stepEnd",
          },
          {
            id: "number-analysis",
            titleKey: "maths.cuberoot.howcuberootstitle",
            contentKey: "maths.cuberoot.howcuberootscontent",
          },
        ]
      },
    ],

    faqTitleKey: "maths.cuberoot.faqTitle",
    faqs: [
      { qKey: "maths.cuberoot.faq.0.q", aKey: "maths.cuberoot.faq.0.a" },
      { qKey: "maths.cuberoot.faq.1.q", aKey: "maths.cuberoot.faq.1.a" },
      { qKey: "maths.cuberoot.faq.2.q", aKey: "maths.cuberoot.faq.2.a" },
      { qKey: "maths.cuberoot.faq.3.q", aKey: "maths.cuberoot.faq.3.a" },
      { qKey: "maths.cuberoot.faq.4.q", aKey: "maths.cuberoot.faq.4.a" },
      { qKey: "maths.cuberoot.faq.5.q", aKey: "maths.cuberoot.faq.5.a" },
    ]
  },

  {
    slug: "digital-root-calculator",
    metaTitleKey: "maths.digitalroot.metaTitle",
    metaDescriptionKey: "maths.digitalroot.metaDescription",
    titleKey: "maths.digitalroot.title",
    category: "maths",
    descriptionKey: "maths.digitalroot.desc",
    heading: "maths.digitalroot.heading",
    formulaId: "digitalroot",

    inputs: [
      {
        label: "maths.digitalroot.number",
        name: "number",
        type: "number",
        placeholder: "Enter any positive number",
        min: 0
      },
    ],

    result: {
      label: "maths.digitalroot.result",
      explainKey: "maths.digitalroot.resultExplain",
    },
    tocheading: "maths.digitalroot.tocTitle",
    toc: [
      { id: "what", labelKey: "maths.digitalroot.tocwhat" },
      { id: "understanding", labelKey: "maths.digitalroot.tocunderstanding" },
      { id: "how", labelKey: "maths.digitalroot.tochow" },
      { id: "formula", labelKey: "maths.digitalroot.tocformula" },
      { id: "modulo-method", labelKey: "maths.digitalroot.tocmainformula" },
      { id: "why-accurate", labelKey: "maths.digitalroot.tocwhy" },
    ],

    sections: [
      {
        id: "intro",
        titleKey: "maths.digitalroot.introTitle",
        subsections: [
          {
            id: "what",
            titleKey: "maths.digitalroot.whatTitle",
            contentKey: "maths.digitalroot.whatContent",
            contentKey2: "maths.digitalroot.whatContent2",
          },
          {
            id: "understanding",
            titleKey: "maths.digitalroot.understandingTitle",
            contentKey: "maths.digitalroot.understandingContent",
            contentKey2: "maths.digitalroot.understandingcontent2",
          },
          {
            id: "how",
            titleKey: "maths.digitalroot.howtitle",
            contentKey: "maths.digitalroot.howcontent",
          },
          {
            id: "when-to-use",
            titleKey: "maths.digitalroot.whentousetitle",
            linkparacontent: "maths.digitalroot.whentousecontent",
            linkparaKey: "maths.digitalroot.interlink",
            linkparaslug: "cube-root-calculator",
            imageKey: "maths.digitalroot.imageurl",
            imageAltKey: "maths.digitalroot.imagealttext",
          },
        ]
      },

      {
        id: "formula",
        titleKey: "maths.digitalroot.formulaTitle",
        subsections: [
          {
            id: "basic-formula",
            titleKey: "maths.digitalroot.formulasubtitle",
            contentKey: "maths.digitalroot.formulasubcontent",
          },
          {
            id: "modulo-method",
            titleKey: "maths.digitalroot.mainFormulatitle",
            contentKey: "maths.digitalroot.mainFormulacontent",
            formulaKey: "maths.digitalroot.mainformula",
            type: "formula",
            endKey: "maths.digitalroot.mainformulaend",
          },
          {
            id: "calculation-steps",
            titleKey: "maths.digitalroot.stepTitle",
            contentKey: "maths.digitalroot.stepcontent",
          },
          {
            id: "why-accurate",
            titleKey: "maths.digitalroot.whyformulatitle",
            contentKey: "maths.digitalroot.whyformulacontent",
          },
        ]
      },
    ],

    faqTitleKey: "maths.digitalroot.faqTitle",
    faqs: [
      { qKey: "maths.digitalroot.faq.0.q", aKey: "maths.digitalroot.faq.0.a" },
      { qKey: "maths.digitalroot.faq.1.q", aKey: "maths.digitalroot.faq.1.a" },
      { qKey: "maths.digitalroot.faq.2.q", aKey: "maths.digitalroot.faq.2.a" },
      { qKey: "maths.digitalroot.faq.3.q", aKey: "maths.digitalroot.faq.3.a" },
      { qKey: "maths.digitalroot.faq.4.q", aKey: "maths.digitalroot.faq.4.a" },
      { qKey: "maths.digitalroot.faq.5.q", aKey: "maths.digitalroot.faq.5.a" },
    ]
  },

  {
    slug: "division-calculator",
    metaTitleKey: "maths.division.metaTitle",
    metaDescriptionKey: "maths.division.metaDescription",
    titleKey: "maths.division.title",
    category: "maths",
    descriptionKey: "maths.division.desc",
    heading: "maths.division.heading",
    formulaId: "division",

    inputs: [
      {
        label: "maths.division.dividend",
        name: "dividend",
        type: "number",
        placeholder: "Enter dividend"
      },
      {
        label: "maths.division.divisor",
        name: "divisor",
        type: "number",
        placeholder: "Enter divisor (≠ 0)"
      },
    ],

    result: {
      label: "maths.division.result",
      explainKey: "maths.division.resultExplain",
    },

    tocheading: "maths.division.tocTitle",
    toc: [
      { id: "what", labelKey: "maths.division.tocwhat" },
      { id: "understanding", labelKey: "maths.division.tocunderstanding" },
      { id: "how", labelKey: "maths.division.tochow" },
      { id: "formula", labelKey: "maths.division.tocformula" },
      { id: "fraction", labelKey: "maths.division.tocfraction" },
      { id: "results", labelKey: "maths.division.tocresults" },
    ],

    sections: [
      {
        id: "intro",
        titleKey: "maths.division.introTitle",
        subsections: [
          {
            id: "what",
            titleKey: "maths.division.whatTitle",
            contentKey: "maths.division.whatContent",
            contentKey2: "maths.division.whatContent2",
          },
          {
            id: "understanding",
            titleKey: "maths.division.understandingTitle",
            contentKey: "maths.division.understandingContent",
            contentKey2: "maths.division.understandingcontent2",
          },
          {
            id: "how",
            titleKey: "maths.division.howtitle",
            contentKey: "maths.division.howcontent",
          },
          {
            id: "when-to-use",
            titleKey: "maths.division.whentousetitle",
            linkparacontent: "maths.division.whentousecontent",
            linkparaKey: "maths.division.interlink",
            linkparaslug: "decimal-calculator",
            imageKey: "maths.division.imageurl",
            imageAltKey: "maths.division.imagealttext",
          },
        ]
      },

      {
        id: "formula",
        titleKey: "maths.division.formulaTitle",
        subsections: [
          {
            id: "basic-formula",
            titleKey: "maths.division.mainFormulatitle",
            formulaKey: "maths.division.mainformula",
            type: "formula",
            contentKey: "maths.division.mainFormulacontent",
            endKey: "maths.division.mainformulaend",
          },
          {
            id: "long-division",
            titleKey: "maths.division.howtoTitle",
            contentKey: "maths.division.howtocontent",
          },
          {
            id: "decimal-division",
            titleKey: "maths.division.whyformulatitle",
            contentKey: "maths.division.whyformulacontent",
          },
          {
            id: "fraction",
            titleKey: "maths.division.fractiontitle",
            contentKey: "maths.division.fractioncontent",
            formulaKey: "maths.division.fractionformula",
            type: "formula",
            endKey: "maths.division.fractionformulaend",
          },
          {
            id: "results",
            titleKey: "maths.division.resultstitle",
            contentKey: "maths.division.resultscontent",
          },
        ]
      },
    ],

    faqTitleKey: "maths.division.faqTitle",
    faqs: [
      { qKey: "maths.division.faq.0.q", aKey: "maths.division.faq.0.a" },
      { qKey: "maths.division.faq.1.q", aKey: "maths.division.faq.1.a" },
      { qKey: "maths.division.faq.2.q", aKey: "maths.division.faq.2.a" },
      { qKey: "maths.division.faq.3.q", aKey: "maths.division.faq.3.a" },
      { qKey: "maths.division.faq.4.q", aKey: "maths.division.faq.4.a" },
      { qKey: "maths.division.faq.5.q", aKey: "maths.division.faq.5.a" },
    ]
  },

  {
    slug: "decimal-calculator",
    metaTitleKey: "maths.decimal.metaTitle",
    metaDescriptionKey: "maths.decimal.metaDescription",
    titleKey: "maths.decimal.title",
    category: "maths",
    descriptionKey: "maths.decimal.desc",
    heading: "maths.decimal.heading",
    formulaId: "decimal",

    inputs: [
      {
        label: "maths.decimal.firstNumber",
        name: "firstNumber",
        type: "number",
        placeholder: "Enter first decimal number"
      },
      {
        label: "maths.decimal.operation",
        name: "operation",
        type: "select",
        options: [
          { value: "add", label: "Addition (+)" },
          { value: "subtract", label: "Subtraction (−)" },
          { value: "multiply", label: "Multiplication (×)" },
          { value: "divide", label: "Division (÷)" },
        ]
      },
      {
        label: "maths.decimal.secondNumber",
        name: "secondNumber",
        type: "number",
        placeholder: "Enter second decimal number"
      },
      {
        label: "maths.decimal.decimalPlaces",
        name: "decimalPlaces",
        type: "number",
        min: 0,
        max: 10,
      },
    ],

    result: {
      label: "maths.decimal.result",
      explainKey: "maths.decimal.resultExplain",
    },

    tocheading: "maths.decimal.tocTitle",

    toc: [
      { id: "what", labelKey: "maths.decimal.tocwhat" },
      { id: "understanding", labelKey: "maths.decimal.tocunderstanding" },
      { id: "how", labelKey: "maths.decimal.tochow" },
      { id: "formula", labelKey: "maths.decimal.tocformula" },
      { id: "division", labelKey: "maths.decimal.tocfraction" },
      { id: "rounding", labelKey: "maths.decimal.tocresults" },
    ],

    sections: [
      {
        id: "intro",
        titleKey: "maths.decimal.introTitle",
        subsections: [
          {
            id: "what",
            titleKey: "maths.decimal.whatTitle",
            contentKey: "maths.decimal.whatContent",
            contentKey2: "maths.decimal.whatContent2",
          },
          {
            id: "understanding",
            titleKey: "maths.decimal.understandingTitle",
            contentKey: "maths.decimal.understandingContent",
            contentKey2: "maths.decimal.understandingcontent2",
          },
          {
            id: "how",
            titleKey: "maths.decimal.howtitle",
            contentKey: "maths.decimal.howcontent",
          },
          {
            id: "when-to-use",
            titleKey: "maths.decimal.whentousetitle",
            linkparacontent: "maths.decimal.whentousecontent",
            linkparaKey: "maths.decimal.interlink",
            linkparaslug: "division-calculator",
            imageKey: "maths.decimal.imageurl",
            imageAltKey: "maths.decimal.imagealttext",
          },
        ]
      },

      {
        id: "formula",
        titleKey: "maths.decimal.formulaTitle",
        subsections: [
          {
            id: "basic-operations",
            titleKey: "maths.decimal.mainFormulatitle",
            contentKey: "maths.decimal.mainformulaend",
          },
          {
            id: "addition-subtraction",
            titleKey: "maths.decimal.howtoTitle",
            contentKey: "maths.decimal.howtocontent",
          },
          {
            id: "multiplication",
            titleKey: "maths.decimal.whyformulatitle",
            contentKey: "maths.decimal.whyformulacontent",
          },
          {
            id: "division",
            titleKey: "maths.decimal.fractiontitle",
            contentKey: "maths.decimal.fractionformulacontent",
          },
          {
            id: "rounding",
            titleKey: "maths.decimal.resultstitle",
            contentKey: "maths.decimal.resultscontent",
          },
        ]
      },
    ],

    faqTitleKey: "maths.decimal.faqTitle",
    faqs: [
      { qKey: "maths.decimal.faq.0.q", aKey: "maths.decimal.faq.0.a" },
      { qKey: "maths.decimal.faq.1.q", aKey: "maths.decimal.faq.1.a" },
      { qKey: "maths.decimal.faq.2.q", aKey: "maths.decimal.faq.2.a" },
      { qKey: "maths.decimal.faq.3.q", aKey: "maths.decimal.faq.3.a" },
      { qKey: "maths.decimal.faq.4.q", aKey: "maths.decimal.faq.4.a" },
      { qKey: "maths.decimal.faq.5.q", aKey: "maths.decimal.faq.5.a" },
    ]
  },

]