
export interface DynamicFieldTemplate {
  label: string
  name: string
  type: "number" | "text" | "select"
  min?: number
  max?: number
  placeholder?: string
  unit?: string
  options?: Array<{ value: string; label: string }>
}

export interface DynamicConfig {
  generates: string
  template: DynamicFieldTemplate[]
}

export interface CalculatorInput {
  label: string
  name: string
  type: "number" | "select" | "text" | "multiselect"
  unit?: string
  options?: Array<{ value: string; label: string }>
  
  min?: number
  max?: number
  placeholder?: string
  isDynamic?: boolean
  dynamicConfig?: DynamicConfig
}

export interface CalculatorHighlight {
  key: string 
}

export interface CalculatorSection {
  id: string
  titleKey?: string
  contentKey?: string
  formulaKey?: string
  exampleKey?: string
  subsections?: CalculatorSection[]
  [key: string]: any
}

export interface HighlightsSection extends CalculatorSection {
  id: "highlights"
  titleKey: string
  highlights?: CalculatorHighlight[]
}

export interface CalculatorFAQ {
  qKey: string
  aKey: string
}

export interface Calculator {
  slug: string
  metaTitleKey: string
  metaDescriptionKey: string
  titleKey?: any
  category: string
  descriptionKey: string
  result?: {
    label?: string
    explainKey?: string
  }

  inputs?: CalculatorInput[]
  formulaId?: string

  sections?: CalculatorSection[]

  highlightsTitleKey?: string
  highlights?: CalculatorHighlight[]

  faqTitleKey?: string
  faqs?: CalculatorFAQ[]

  [key: string]: any
}

export interface CalculatorCategory {
  id: string
  metaTitle: string
  metaDescription: string
  name: string
  description: string
  calculators: Calculator[]
}