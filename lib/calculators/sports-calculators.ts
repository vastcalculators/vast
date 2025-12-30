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

  {
    slug: "magic-number-calculator",
    metaTitleKey: "sports.magicnumber.metaTitle",
    metaDescriptionKey: "sports.magicnumber.metaDescription",
    titleKey: "sports.magicnumber.title",
    category: "Sports",
    descriptionKey: "sports.magicnumber.desc",
    heading: "sports.magicnumber.heading",
    formulaId: "magicnumber",

    inputs: [
      {
        label: "sports.magicnumber.totalGames",
        name: "totalGames",
        type: "number",
        placeholder: "Total season games (usually 162)"
      },
      {
        label: "sports.magicnumber.teamWins",
        name: "teamWins",
        type: "number",
        min: 0,
        placeholder: "Your team's wins"
      },
      {
        label: "sports.magicnumber.opponentLosses",
        name: "opponentLosses",
        type: "number",
        min: 0,
        placeholder: "Closest opponent's losses"
      },
    ],

    result: {
      label: "sports.magicnumber.result",
      explainKey: "sports.magicnumber.resultExplain",
    },

    tocheading: "sports.magicnumber.tocTitle",
    toc: [
      { id: "what", labelKey: "sports.magicnumber.tocwhat" },
      { id: "why", labelKey: "sports.magicnumber.tocwhy" },
      { id: "formula", labelKey: "sports.magicnumber.tocformula" },
      { id: "step-by-step", labelKey: "sports.magicnumber.tocstepbystep" },
      { id: "how-calculator", labelKey: "sports.magicnumber.tochow" },
    ],

    sections: [
      {
        id: "intro",
        titleKey: "sports.magicnumber.introTitle",
        subsections: [
          {
            id: "what",
            titleKey: "sports.magicnumber.whattitle",
            contents: [
              "sports.magicnumber.whatContent1",
              "sports.magicnumber.whatContent2",
            ],
          },
          {
            id: "why",
            titleKey: "sports.magicnumber.understandingtitle",
            contents: [
              "sports.magicnumber.understandingpara1",
              "sports.magicnumber.understandingpara2",
            ],
          },
          {
            id: "how-helps",
            titleKey: "sports.magicnumber.howtitle",
            contentKey: "sports.magicnumber.howpara1",
            contentKey2: "sports.magicnumber.howpara2",
            linkparacontent: "sports.magicnumber.howpara2",
            linkparaKey: "sports.magicnumber.howlink",
            linkparaslug: "batting-average-calculator",
            imageKey: "sports.magicnumber.imageUrl",
            imageAltKey: "sports.magicnumber.imageAlt",
          },
        ]
      },

      {
        id: "formula",
        titleKey: "sports.magicnumber.formulaTitle",
        introKey: "sports.magicnumber.formulaIntro",
        subsections: [
          {
            id: "main-formula",
            formulaKey: "sports.magicnumber.mainFormula",
            type: "formula",
            endKey: "sports.magicnumber.mainformulatext",
          },
          {
            id: "understanding-parts",
            titleKey: "sports.magicnumber.understandingTitle",
            listKey: "sports.magicnumber.understandingList",
            endKey: "sports.magicnumber.understandingEnd",
          },
          {
            id: "step-by-step",
            titleKey: "sports.magicnumber.stepTitle",
            contentKey: "sports.magicnumber.steptext1",
            formulaKey: "sports.magicnumber.stepformula",
            type: "formula",
            endKey: "sports.magicnumber.howhitstext2",
          },
          {
            id: "how-calculator",
            titleKey: "sports.magicnumber.howtotitle",
            contents: [
              "sports.magicnumber.howtocontent1",
              "sports.magicnumber.howtocontent2",
            ],
          },
          {
            id: "vs-metrics",
            titleKey: "sports.magicnumber.magictitle",
            contents: [
              "sports.magicnumber.magiccontent1",
              "sports.magicnumber.magiccontent2",
            ],
          },
        ]
      },
    ],

    faqTitleKey: "sports.magicnumber.faqTitle",
    faqs: [
      { qKey: "sports.magicnumber.faq.0.q", aKey: "sports.magicnumber.faq.0.a" },
      { qKey: "sports.magicnumber.faq.1.q", aKey: "sports.magicnumber.faq.1.a" },
      { qKey: "sports.magicnumber.faq.2.q", aKey: "sports.magicnumber.faq.2.a" },
      { qKey: "sports.magicnumber.faq.3.q", aKey: "sports.magicnumber.faq.3.a" },
      { qKey: "sports.magicnumber.faq.4.q", aKey: "sports.magicnumber.faq.4.a" },
      { qKey: "sports.magicnumber.faq.5.q", aKey: "sports.magicnumber.faq.5.a" },
    ]
  },
  {
    slug: "fielding-percentage-calculator",
    metaTitleKey: "sports.fielding.metaTitle",
    metaDescriptionKey: "sports.fielding.metaDescription",
    titleKey: "sports.fielding.title",
    category: "Sports",
    descriptionKey: "sports.fielding.desc",
    heading: "sports.fielding.heading",
    formulaId: "fielding",

    inputs: [
      {
        label: "sports.fielding.putouts",
        name: "putouts",
        type: "number",
        min: 0,
        placeholder: "Enter putouts"
      },
      {
        label: "sports.fielding.assists",
        name: "assists",
        type: "number",
        min: 0,
        placeholder: "Enter assists"
      },
      {
        label: "sports.fielding.errors",
        name: "errors",
        type: "number",
        min: 0,
        placeholder: "Enter errors"
      },
    ],

    result: {
      label: "sports.fielding.result",
      explainKey: "sports.fielding.resultExplain",
    },

    tocheading: "sports.fielding.tocTitle",
    toc: [
      { id: "what", labelKey: "sports.fielding.tocwhat" },
      { id: "understanding", labelKey: "sports.fielding.tocwhy" },
      { id: "formula", labelKey: "sports.fielding.tocformula" },
      { id: "step-by-step", labelKey: "sports.fielding.tocstepbystep" },
      { id: "how-calculator", labelKey: "sports.fielding.tochow" },
    ],

    sections: [
      {
        id: "intro",
        titleKey: "sports.fielding.introTitle",
        subsections: [
          {
            id: "what",
            titleKey: "sports.fielding.whattitle",
            contents: [
              "sports.fielding.whatContent1",
              "sports.fielding.whatContent2",
            ],
          },
          {
            id: "understanding",
            titleKey: "sports.fielding.understandingtitle",
            contents: [
              "sports.fielding.understandingpara1",
              "sports.fielding.understandingpara2",
            ],
          },
          {
            id: "how-works",
            titleKey: "sports.fielding.howtitle",
            contents: [
              "sports.fielding.howpara1",
              "sports.fielding.howpara2",
            ],
          },
          {
            id: "why-matters",
            titleKey: "sports.fielding.whytitle",
            contentKey: "sports.fielding.whypara1",
            contentKey2: "sports.fielding.whypara2",
            linkparacontent: "sports.fielding.whypara2",
            linkparaKey: "sports.fielding.whylink",
            linkparaslug: "slugging-percentage-calculator",
            imageKey: "sports.fielding.imageUrl",
            imageAltKey: "sports.fielding.imageAlt",
          },
        ]
      },

      {
        id: "formula",
        titleKey: "sports.fielding.formulaTitle",
        subsections: [
          {
            id: "official-formula",
            titleKey: "sports.fielding.formulasubtitle",
            introKey: "sports.fielding.formulasubIntro",
            formulaKey: "sports.fielding.mainFormula",
            type: "formula",
            endKey: "sports.fielding.formulasubtext",
          },
          {
            id: "total-chances",
            titleKey: "sports.fielding.whatTitle",
            listKey: "sports.fielding.whatList",
            endKey: "sports.fielding.whatEnd",
          },
          {
            id: "step-by-step",
            titleKey: "sports.fielding.stepTitle",
            listKey: "sports.fielding.stepList",
            formulaKey: "sports.fielding.stepformula",
            type: "formula",
            endKey: "sports.fielding.stepend",
          },
          {
            id: "how-calculator",
            titleKey: "sports.fielding.howtotitle",
            contents: [
              "sports.fielding.howtocontent1",
              "sports.fielding.howtocontent2",
            ],
          },
          {
            id: "why-formula",
            titleKey: "sports.fielding.whyformulatitle",
            contents: [
              "sports.fielding.whyformulacontent1",
              "sports.fielding.whyformulacontent2",
            ],
          },
        ]
      },
    ],

    faqTitleKey: "sports.fielding.faqTitle",
    faqs: [
      { qKey: "sports.fielding.faq.0.q", aKey: "sports.fielding.faq.0.a" },
      { qKey: "sports.fielding.faq.1.q", aKey: "sports.fielding.faq.1.a" },
      { qKey: "sports.fielding.faq.2.q", aKey: "sports.fielding.faq.2.a" },
      { qKey: "sports.fielding.faq.3.q", aKey: "sports.fielding.faq.3.a" },
      { qKey: "sports.fielding.faq.4.q", aKey: "sports.fielding.faq.4.a" },
      { qKey: "sports.fielding.faq.5.q", aKey: "sports.fielding.faq.5.a" },
    ]
  },

  {
  slug: "slugging-percentage-calculator",
  metaTitleKey: "sports.slugging.metaTitle",
  metaDescriptionKey: "sports.slugging.metaDescription",
  titleKey: "sports.slugging.title",
  category: "Sports",
  descriptionKey: "sports.slugging.desc",
  heading: "sports.slugging.heading",
  formulaId: "slugging",

  inputs: [
    { 
      label: "sports.slugging.singles", 
      name: "singles", 
      type: "number",
      min: 0,
      placeholder: "Enter singles"
    },
    { 
      label: "sports.slugging.doubles", 
      name: "doubles", 
      type: "number",
      min: 0,
      placeholder: "Enter doubles"
    },
    { 
      label: "sports.slugging.triples", 
      name: "triples", 
      type: "number",
      min: 0,
      placeholder: "Enter triples"
    },
    { 
      label: "sports.slugging.homeRuns", 
      name: "homeRuns", 
      type: "number",
      min: 0,
      placeholder: "Enter home runs"
    },
    { 
      label: "sports.slugging.atBats", 
      name: "atBats", 
      type: "number",
      min: 1,
      placeholder: "Enter at-bats"
    },
  ],

  result: {
    label: "sports.slugging.result",
    explainKey: "sports.slugging.resultExplain",
  },

  tocheading: "sports.slugging.tocTitle",
  toc: [
    { id: "what", labelKey: "sports.slugging.tocwhat" },
    { id: "understanding", labelKey: "sports.slugging.tocwhy" },
    { id: "formula", labelKey: "sports.slugging.tocformula" },
    { id: "step-by-step", labelKey: "sports.slugging.tocstepbystep" },
    { id: "how-calculator", labelKey: "sports.slugging.tochow" },
  ],

  sections: [
    {
      id: "intro",
      titleKey: "sports.slugging.introTitle",
      subsections: [
        {
          id: "what",
          titleKey: "sports.slugging.whattitle",
          contents: [
            "sports.slugging.whatContent1",
            "sports.slugging.whatContent2",
          ],
        },
        {
          id: "understanding",
          titleKey: "sports.slugging.understandingtitle",
          contents: [
            "sports.slugging.understandingpara1",
            "sports.slugging.understandingpara2",
          ],
        },
        {
          id: "how-works",
          titleKey: "sports.slugging.howtitle",
          contents: [
            "sports.slugging.howpara1",
            "sports.slugging.howpara2",
          ],
        },
        {
          id: "why-matters",
          titleKey: "sports.slugging.whytitle",
          contentKey: "sports.slugging.whypara1",
          contentKey2: "sports.slugging.whypara2",
          linkparacontent: "sports.slugging.whypara2",
          linkparaKey: "sports.slugging.whylink",
          linkparaslug: "fielding-percentage-calculator",
          imageKey: "sports.slugging.imageUrl",
          imageAltKey: "sports.slugging.imageAlt",
        },
      ]
    },

    {
      id: "formula",
      titleKey: "sports.slugging.formulaTitle",
      subsections: [
        {
          id: "official-formula",
          titleKey: "sports.slugging.formulasubtitle",
          introKey: "sports.slugging.formulasubIntro",
          formulaKey: "sports.slugging.mainFormula",
          type: "formula",
          endKey: "sports.slugging.formulasubtext",
        },
        {
          id: "total-bases",
          titleKey: "sports.slugging.whatTitle",
          listKey: "sports.slugging.whatList",
          endKey: "sports.slugging.whatEnd",
        },
        {
          id: "at-bats-role",
          titleKey: "sports.slugging.roleformulatitle",
          contents: [
            "sports.slugging.roleformulacontent1",
            "sports.slugging.roleformulacontent2",
          ],
        },
        {
          id: "step-by-step",
          titleKey: "sports.slugging.stepTitle",
          listKey: "sports.slugging.stepList",
          formulaKey: "sports.slugging.stepformula",
          type: "formula",
          endKey: "sports.slugging.stepend",
        },
        {
          id: "how-calculator",
          titleKey: "sports.slugging.howtotitle",
          contents: [
            "sports.slugging.howtocontent1",
            "sports.slugging.howtocontent2",
          ],
        },
        {
          id: "why-matters",
          titleKey: "sports.slugging.whytotitle",
          contents: [
            "sports.slugging.whytocontent1",
            "sports.slugging.whytocontent2",
          ],
        },
      ]
    },
  ],

  faqTitleKey: "sports.slugging.faqTitle",
  faqs: [
    { qKey: "sports.slugging.faq.0.q", aKey: "sports.slugging.faq.0.a" },
    { qKey: "sports.slugging.faq.1.q", aKey: "sports.slugging.faq.1.a" },
    { qKey: "sports.slugging.faq.2.q", aKey: "sports.slugging.faq.2.a" },
    { qKey: "sports.slugging.faq.3.q", aKey: "sports.slugging.faq.3.a" },
    { qKey: "sports.slugging.faq.4.q", aKey: "sports.slugging.faq.4.a" },
    { qKey: "sports.slugging.faq.5.q", aKey: "sports.slugging.faq.5.a" },
  ]
},

];