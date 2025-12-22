"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { getTranslation, type Locale } from "@/lib/i18n"
import type { Calculator } from "@/lib/calculators/types"
import Select from "react-select"
import { Loader2 } from "lucide-react"

interface CalculatorFormProps {
  calculator: Calculator
  locale: Locale
  onCalculate: (inputs: Record<string, number | string>) => void
  result: string | number | null
  resetInputsTrigger?: boolean
}

export function CalculatorForm({
  calculator,
  locale,
  onCalculate,
  result,
  resetInputsTrigger,
}: CalculatorFormProps) {
  const [inputs, setInputs] = useState<Record<string, any>>({})
  const [dynamicFields, setDynamicFields] = useState<Record<string, any[]>>({})
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [loading, setLoading] = useState(false)

  const handleInputChange = (name: string, value: string | number) => {
    setInputs((prev) => ({ ...prev, [name]: value }))
    
    // Check if this input triggers dynamic fields
    const dynamicInput = calculator.inputs?.find(
      (inp) => inp.isDynamic && inp.name === name
    )
    
    if (dynamicInput?.dynamicConfig) {
      const count = Number(value)
      if (count > 0 && count <= (dynamicInput.max || 50)) {
        generateDynamicFields(
          dynamicInput.dynamicConfig.generates, 
          count, 
          dynamicInput.dynamicConfig.template
        )
      } else {
        setDynamicFields((prev) => ({ 
          ...prev, 
          [dynamicInput.dynamicConfig!.generates]: [] 
        }))
      }
    }

    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const generateDynamicFields = (fieldName: string, count: number, template: any[]) => {
    const fields = Array.from({ length: count }, (_, index) => {
      const fieldData: Record<string, any> = { _index: index }
      template.forEach((field) => {
        fieldData[field.name] = ""
      })
      return fieldData
    })
    setDynamicFields((prev) => ({ ...prev, [fieldName]: fields }))
  }

  const handleDynamicFieldChange = (
    fieldName: string, 
    index: number, 
    subFieldName: string, 
    value: any
  ) => {
    setDynamicFields((prev) => {
      const updated = { ...prev }
      if (updated[fieldName]) {
        updated[fieldName] = [...updated[fieldName]]
        updated[fieldName][index] = {
          ...updated[fieldName][index],
          [subFieldName]: value
        }
      }
      return updated
    })
    
    // Clear error for this dynamic field
    const errorKey = `${fieldName}_${index}_${subFieldName}`
    if (errors[errorKey]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[errorKey]
        return newErrors
      })
    }
  }

  useEffect(() => {
    if (resetInputsTrigger) {
      setInputs({})
      setDynamicFields({})
      setErrors({})
      setLoading(false)
    }
  }, [resetInputsTrigger])

  const validateInputs = (): boolean => {
    const newErrors: Record<string, string> = {}

    // Validate static inputs
    calculator.inputs?.forEach((input) => {
      if (input.isDynamic) return

      const value = inputs[input.name]

      if (value === undefined || value === "" || value === null) {
        newErrors[input.name] = `${getTranslation(locale, input.label)} is required`
        return
      }

      if (input.type === "number") {
        const numValue = Number(value)
        if (isNaN(numValue)) {
          newErrors[input.name] = `${getTranslation(locale, input.label)} must be a valid number`
          return
        }
        if (numValue <= 0) {
          newErrors[input.name] = `${getTranslation(locale, input.label)} must be greater than 0`
          return
        }
      }

      if (input.type === "select" && !value) {
        newErrors[input.name] = `Please select a ${getTranslation(locale, input.label)}`
      }
    })

    // Validate dynamic fields
    Object.entries(dynamicFields).forEach(([fieldName, fields]) => {
      fields.forEach((field, index) => {
        const dynamicInput = calculator.inputs?.find(
          (inp) => inp.dynamicConfig?.generates === fieldName
        )
        if (dynamicInput?.dynamicConfig?.template) {
          dynamicInput.dynamicConfig.template.forEach((templateField) => {
            const value = field[templateField.name]
            if (!value || value === "") {
              newErrors[`${fieldName}_${index}_${templateField.name}`] = 
                `${getTranslation(locale, templateField.label)} is required for item ${index + 1}`
            }
          })
        }
      })
    })

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateInputs()) return

    setLoading(true)
    try {
      // Merge static inputs with dynamic fields
      const allInputs = {
        ...inputs,
        ...dynamicFields
      }
      await onCalculate(allInputs)
    } finally {
      setLoading(false)
    }
  }

  const formatSelectOptions = (options: any[] | undefined) => {
    return (options || []).map((option) => ({
      value: option.value,
      label: getTranslation(locale, option.label),
    }))
  }

  const customStyles = {
    control: (base: any, state: any) => ({
      ...base,
      borderColor: errors[state.selectProps.name] ? "#ef4444" : base.borderColor,
      borderRadius: "0.375rem",
      minHeight: "40px",
      boxShadow: state.isFocused ? "0 0 0 1px rgb(59, 130, 246)" : "none",
    }),
    option: (base: any, state: any) => ({
      ...base,
      backgroundColor: state.isSelected ? "rgb(59, 130, 246)" : state.isFocused ? "rgb(229, 231, 235)" : "white",
      color: state.isSelected ? "white" : "black",
      cursor: "pointer",
      padding: "10px 12px",
    }),
    menuList: (base: any) => ({
      ...base,
      maxHeight: "200px",
    }),
  }

  const renderStaticInput = (input: any) => {
    if (input.isDynamic) {
      return (
        <div key={input.name} className="space-y-2">
          <Label htmlFor={input.name}>
            {getTranslation(locale, input.label)}
            <span className="text-red-500 ml-1">*</span>
          </Label>
          <Input
            id={input.name}
            type="number"
            min={input.min}
            max={input.max}
            placeholder={input.placeholder}
            value={inputs[input.name] || ""}
            onChange={(e) => handleInputChange(input.name, e.target.value)}
            className={errors[input.name] ? "border-red-500" : ""}
          />
          {errors[input.name] && (
            <p className="text-sm text-red-500 mt-1">{errors[input.name]}</p>
          )}
        </div>
      )
    }

    if (input.type === "select") {
      return (
        <div key={input.name} className="space-y-2">
          <Label htmlFor={input.name}>
            {getTranslation(locale, input.label)}
            <span className="text-red-500 ml-1">*</span>
          </Label>
          <Select
            name={input.name}
            options={formatSelectOptions(input.options)}
            value={
              inputs[input.name]
                ? {
                    value: inputs[input.name],
                    label: (input.options || []).find(
                      (opt: { value: any }) => opt.value === inputs[input.name]
                    )
                      ? getTranslation(
                          locale,
                          (input.options || []).find(
                            (opt: { value: any }) => opt.value === inputs[input.name]
                          )?.label || ""
                        )
                      : inputs[input.name],
                  }
                : null
            }
            onChange={(option) => {
              if (option) {
                handleInputChange(input.name, option.value)
              }
            }}
            placeholder={`Select ${getTranslation(locale, input.label).toLowerCase()}...`}
            isClearable
            isSearchable
            styles={customStyles}
            className={errors[input.name] ? "border-red-500" : ""}
          />
          {errors[input.name] && (
            <p className="text-sm text-red-500 mt-1">{errors[input.name]}</p>
          )}
        </div>
      )
    }

    return (
      <div key={input.name} className="space-y-2">
        <Label htmlFor={input.name}>
          {getTranslation(locale, input.label)}
          <span className="text-red-500 ml-1">*</span>
        </Label>
        <Input
          id={input.name}
          type={input.type}
          placeholder={input.placeholder || getTranslation(locale, input.label)}
          value={inputs[input.name] || ""}
          onChange={(e) => handleInputChange(input.name, e.target.value)}
          className={errors[input.name] ? "border-red-500" : ""}
          required
        />
        {errors[input.name] && (
          <p className="text-sm text-red-500 mt-1">{errors[input.name]}</p>
        )}
      </div>
    )
  }

  const renderDynamicFields = (fieldName: string, template: any[]) => {
    const fields = dynamicFields[fieldName] || []
    
    return (
      <div className="space-y-4 mt-6 border-t pt-4">
        <h3 className="font-semibold text-lg capitalize">
          {fieldName.replace(/([A-Z])/g, ' $1').trim()}
        </h3>
        {fields.map((field, index) => (
          <Card key={index} className="p-4 bg-gray-50">
            <h4 className="font-medium mb-3">
              {fieldName.slice(0, -1).replace(/([A-Z])/g, ' $1').trim()} {index + 1}
            </h4>
            <div className="space-y-3">
              {template.map((templateField) => {
                const fieldKey = `${fieldName}_${index}_${templateField.name}`
                
                if (templateField.type === "select") {
                  return (
                    <div key={templateField.name} className="space-y-2">
                      <Label>{getTranslation(locale, templateField.label)}</Label>
                      <Select
                        options={formatSelectOptions(templateField.options)}
                        value={
                          field[templateField.name]
                            ? {
                                value: field[templateField.name],
                                label: templateField.options?.find(
                                  (opt: { value: any }) => opt.value === field[templateField.name]
                                )?.label || field[templateField.name]
                              }
                            : null
                        }
                        onChange={(option) => {
                          if (option) {
                            handleDynamicFieldChange(fieldName, index, templateField.name, option.value)
                          }
                        }}
                        styles={customStyles}
                        placeholder={templateField.placeholder}
                      />
                      {errors[fieldKey] && (
                        <p className="text-sm text-red-500">{errors[fieldKey]}</p>
                      )}
                    </div>
                  )
                }
                
                return (
                  <div key={templateField.name} className="space-y-2">
                    <Label>{getTranslation(locale, templateField.label)}</Label>
                    <Input
                      type={templateField.type}
                      min={templateField.min}
                      max={templateField.max}
                      placeholder={templateField.placeholder}
                      value={field[templateField.name] || ""}
                      onChange={(e) => 
                        handleDynamicFieldChange(fieldName, index, templateField.name, e.target.value)
                      }
                      className={errors[fieldKey] ? "border-red-500" : ""}
                    />
                    {errors[fieldKey] && (
                      <p className="text-sm text-red-500">{errors[fieldKey]}</p>
                    )}
                  </div>
                )
              })}
            </div>
          </Card>
        ))}
      </div>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <h1>{getTranslation(locale, calculator.heading || calculator.titleKey)}</h1>
        </CardTitle>
        <CardDescription>
          {getTranslation(locale, calculator.descriptionKey)}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Render static inputs */}
          {(calculator.inputs ?? []).map(renderStaticInput)}

          {/* Render dynamic fields */}
          {Object.entries(dynamicFields).map(([fieldName, fields]) => {
            const dynamicInput = calculator.inputs?.find(
              (inp) => inp.dynamicConfig?.generates === fieldName
            )
            if (dynamicInput?.dynamicConfig?.template && fields.length > 0) {
              return renderDynamicFields(fieldName, dynamicInput.dynamicConfig.template)
            }
            return null
          })}

          <Button
            type="submit"
            className="w-full flex justify-center items-center gap-2"
            disabled={Object.keys(inputs).length === 0 || loading}
          >
            {loading && <Loader2 className="animate-spin h-5 w-5" />}
            {getTranslation(locale, "calculatorform.btn")}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}