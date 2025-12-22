"use client"

import { useState } from "react"

interface SearchAndFilterProps {
  onSearch: (query: string) => void
  onFilterLetter: (letter: string) => void
  calculatorNames: string[] // <-- Add this prop
}

export function SearchAndFilter({
  onSearch,
  onFilterLetter,
  calculatorNames,
}: SearchAndFilterProps) {
  const [activeLetter, setActiveLetter] = useState<string>("")

  const availableLetters = Array.from(
    new Set(
      calculatorNames
        .map((name) => name.charAt(0).toUpperCase())
        .filter((char) => /[A-Z]/.test(char))
    )
  ).sort()

  const handleLetterClick = (letter: string) => {
    if (activeLetter === letter) {
      setActiveLetter("")
      onFilterLetter("")
    } else {
      setActiveLetter(letter)
      onFilterLetter(letter)
    }
  }

  return (
    <div className="mb-8 space-y-4">
      {/* 🔍 Search Input */}
      <input
        type="text"
        placeholder="Search calculators..."
        className="w-full sm:w-1/2 border border-zinc-200 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500 transition"
        onChange={(e) => onSearch(e.target.value)}
      />

      <div className="flex flex-wrap justify-center sm:justify-start gap-1 pt-2">
        {availableLetters.map((letter) => (
          <button
            key={letter}
            className={`px-2 py-1 text-sm rounded-md transition-all duration-200 
              ${
                activeLetter === letter
                  ? "bg-blue-600 text-white"
                  : "text-zinc-500 hover:text-blue-600 hover:bg-zinc-100"
              }`}
            onClick={() => handleLetterClick(letter)}
          >
            {letter}
          </button>
        ))}
      </div>
    </div>
  )
}