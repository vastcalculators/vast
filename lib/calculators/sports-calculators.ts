import type { Calculator } from "./types";

export const sportsCalculators: Calculator[] = [
{
  slug: "batting-average-calculator",
  metaTitleKey: "sports.batting.metaTitle",
  metaDescriptionKey: "sports.batting.metaDescription",
  titleKey: "sports.batting.title",
  category: "Sports",
  descriptionKey: "sports.batting.desc",
  heading: "sports.batting.heading",
  formulaId: "batting",

  inputs: [
    { 
      label: "sports.batting.hits", 
      name: "hits", 
      type: "number",
      min: 0,
      placeholder: "Enter total hits"
    },
    { 
      label: "sports.batting.atBats", 
      name: "atBats", 
      type: "number",
      min: 1,
      placeholder: "Enter total at-bats"
    },
  ],

  result: {
    label: "sports.batting.result",
    explainKey: "sports.batting.resultExplain",
  },

  tocheading: "sports.batting.tocTitle",
  toc: [
    { id: "what", labelKey: "sports.batting.tocwhat" },
    { id: "understanding", labelKey: "sports.batting.tocunderstanding" },
    { id: "formula", labelKey: "sports.batting.tocformula" },
    { id: "how-hits", labelKey: "sports.batting.tochowhits" },
    { id: "step-by-step", labelKey: "sports.batting.tocstepbystep" },
  ],

  sections: [
    {
      id: "intro",
      titleKey: "sports.batting.introTitle",
      subsections: [
        {
          id: "what",
          titleKey: "sports.batting.whattitle",
          contents: [
            "sports.batting.whatContent1",
            "sports.batting.whatContent2",
          ],
        },
        {
          id: "understanding",
          titleKey: "sports.batting.understandingtitle",
          contents: [
            "sports.batting.understandingpara1",
            "sports.batting.understandingpara2",
          ],
        },
        {
          id: "how-works",
          titleKey: "sports.batting.howtitle",
          contents: [
            "sports.batting.howpara1",
            "sports.batting.howpara2",
          ],
        },
        {
          id: "why-matters",
          titleKey: "sports.batting.whytitle",
          contentKey: "sports.batting.whypara1",
          contentKey2: "sports.batting.whypara2",
          linkparacontent: "sports.batting.whypara2",
          linkparaKey: "sports.batting.whylink",
          linkparaslug: "magic-number-calculator",
          imageKey: "sports.batting.imageUrl",
          imageAltKey: "sports.batting.imageAlt",
        },
      ]
    },

    {
      id: "formula",
      titleKey: "sports.batting.formulaTitle",
      introKey: "sports.batting.formulaIntro",
      subsections: [
        {
          id: "main-formula",
          formulaKey: "sports.batting.mainFormula",
          type: "formula",
          endKey: "sports.batting.mainformulatext",
        },
        {
          id: "how-hits",
          titleKey: "sports.batting.howhitsTitle",
          contents: [
            "sports.batting.howhitstext1",
            "sports.batting.howhitstext2",
          ],
        },
        {
          id: "step-by-step",
          titleKey: "sports.batting.stepTitle",
          listKey: "sports.batting.stepList",
          endKey: "sports.batting.stepEnd",
        },
        {
          id: "decimal-format",
          titleKey: "sports.batting.decimaltitle",
          contents: [
            "sports.batting.decimalcontent1",
            "sports.batting.decimalcontent2",
          ],
        },
        {
          id: "performance",
          titleKey: "sports.batting.performancetitle",
          contents: [
            "sports.batting.performancecontent1",
            "sports.batting.performancecontent2",
          ],
        },
      ]
    },
  ],

  faqTitleKey: "sports.batting.faqTitle",
  faqs: [
    { qKey: "sports.batting.faq.0.q", aKey: "sports.batting.faq.0.a" },
    { qKey: "sports.batting.faq.1.q", aKey: "sports.batting.faq.1.a" },
    { qKey: "sports.batting.faq.2.q", aKey: "sports.batting.faq.2.a" },
    { qKey: "sports.batting.faq.3.q", aKey: "sports.batting.faq.3.a" },
    { qKey: "sports.batting.faq.4.q", aKey: "sports.batting.faq.4.a" },
    { qKey: "sports.batting.faq.5.q", aKey: "sports.batting.faq.5.a" },
  ]
},

];