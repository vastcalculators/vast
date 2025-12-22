"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { type Locale, getTranslation } from "@/lib/i18n";
import { allCalculatorCategories } from "@/lib/calculators";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Search, ArrowRight, Clock, TrendingUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";

interface CalculatorSearchProps {
  locale: Locale;
}

export function CalculatorSearch({ locale }: CalculatorSearchProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const [focusedIndex, setFocusedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const stored = localStorage.getItem("recentSearches");
    if (stored) {
      setRecentSearches(JSON.parse(stored));
    }
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "/" && !open) {
        e.preventDefault();
        setOpen(true);
      }
      if (e.key === "Escape" && open) {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  useEffect(() => {
    if (open && inputRef.current) {
      inputRef.current.focus();
    }
  }, [open]);

  const filteredCategories =
    selectedCategory === "all" || !selectedCategory
      ? allCalculatorCategories
      : allCalculatorCategories.filter((cat) => cat.id === selectedCategory);

  const filteredResults = filteredCategories.flatMap((category) => ({
    category,
    calculators: category.calculators.filter(
      (calc) =>
        getTranslation(locale, calc.heading).toLowerCase().includes(searchQuery.toLowerCase()) ||
        getTranslation(locale, calc.descriptionKey).toLowerCase().includes(searchQuery.toLowerCase())
    ),
  }));

  const allResults = filteredResults.flatMap((r) =>
    r.calculators.map((calc) => ({
      ...calc,
      categoryId: r.category.id,
    }))
  );

  const hasResults = filteredResults.some((cat) => cat.calculators.length > 0);

  const handleSearch = (query: string) => {
    if (query.trim()) {
      const updated = [query, ...recentSearches.filter((s) => s !== query)].slice(0, 5);
      setRecentSearches(updated);
      localStorage.setItem("recentSearches", JSON.stringify(updated));
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setFocusedIndex((prev) => Math.min(prev + 1, allResults.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setFocusedIndex((prev) => Math.max(prev - 1, 0));
    } else if (e.key === "Enter" && allResults.length > 0) {
      e.preventDefault();
      const selected = allResults[focusedIndex];
      if (selected) {
        window.location.href = locale === "en"
          ? `/${selected.categoryId}/${selected.slug}`
          : `/${locale}/${selected.categoryId}/${selected.slug}`;

        handleSearch(searchQuery);
        setOpen(false);
      }
    }
  };

  useEffect(() => {
    setFocusedIndex(0);
  }, [searchQuery]);

  return (
    <>
      <Button
        variant="outline"
        size="sm"
        onClick={() => setOpen(true)}
        className="gap-2 bg-transparent hover:bg-accent transition-all"
      >
        <Search className="h-4 w-4" />
        <span className="hidden sm:inline text-muted-foreground">
          {getTranslation(locale, "search.placeholder")}
        </span>
        <kbd className="hidden sm:inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100">
          /
        </kbd>
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-2xl p-0 gap-0 overflow-y-scroll sm:max-w-2xl max-w-[95vw]">
          <div className="flex flex-col  sm:h-[500px] h-[85vh]">
            <div className="p-3 sm:p-4 border-b space-y-3 sm:space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground" />
                <Input
                  ref={inputRef}
                  placeholder={getTranslation(locale, "search.placeholder")}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="pl-9 sm:pl-10 h-10 sm:h-12 text-sm sm:text-base border-0 focus-visible:ring-0 shadow-none"
                />
              </div>

              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                <Button
                  variant={!selectedCategory ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(null)}
                  className="text-xs rounded-full h-7 sm:h-8 px-2.5 sm:px-3"
                >
                  {getTranslation(locale, "categories.all")}
                </Button>
                {allCalculatorCategories.map((cat) => (
                  <Button
                    key={cat.id}
                    variant={selectedCategory === cat.id ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(cat.id)}
                    className="text-xs rounded-full h-7 sm:h-8 px-2.5 sm:px-3"
                  >
                    {getTranslation(locale, cat.name)}
                  </Button>
                ))}
              </div>
            </div>

            <ScrollArea className="flex-1">
              <div className="p-3 sm:p-4">
                {!searchQuery && recentSearches.length > 0 && (
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {recentSearches.map((search, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="cursor-pointer hover:bg-accent"
                          onClick={() => setSearchQuery(search)}
                        >
                          {search}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                {searchQuery && hasResults && (
                  <div className="space-y-4">
                    {filteredResults.map(
                      (item) =>
                        item.calculators.length > 0 && (
                          <div key={item.category.id}>
                            <div className="flex items-center gap-2 mb-3">
                              <TrendingUp className="h-4 w-4 text-muted-foreground" />
                              <h3 className="text-sm font-semibold text-muted-foreground">
                                {getTranslation(locale, item.category.name)}
                              </h3>
                            </div>
                            <div className="space-y-1">
                              {item.calculators.map((calc, idx) => {
                                const globalIndex = allResults.findIndex(
                                  (r) => r.slug === calc.slug
                                );
                                const isFocused = globalIndex === focusedIndex;

                                return (
                                  <Link
                                    key={calc.slug}
                                    href={locale === "en" ? `/${item.category.id}/${calc.slug}` : `/${locale}/${item.category.id}/${calc.slug}`}
                                    className={`flex items-center justify-between group rounded-lg px-4 py-3 transition-all ${isFocused ? "bg-accent" : "hover:bg-accent/50"
                                      }`}
                                    onClick={() => {
                                      handleSearch(searchQuery);
                                      setOpen(false);
                                      setSearchQuery("");
                                      setSelectedCategory(null);
                                    }}
                                  >
                                    <div>
                                      <p className="font-medium">
                                        {getTranslation(locale, calc.heading)}
                                      </p>
                                      <p className="text-sm text-muted-foreground">
                                        {getTranslation(locale, calc.descriptionKey)}
                                      </p>
                                    </div>
                                    <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                  </Link>
                                );
                              })}
                            </div>
                          </div>
                        )
                    )}
                  </div>
                )}

                {searchQuery && !hasResults && (
                  <div className="text-center py-12">
                    <Search className="h-12 w-12 mx-auto text-muted-foreground opacity-50 mb-4" />
                    <p className="text-muted-foreground">
                      {getTranslation(locale, "search.notFound")}
                    </p>
                  </div>
                )}

                {!searchQuery && !selectedCategory && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {allCalculatorCategories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className="flex items-center justify-between group rounded-lg px-4 py-4 hover:bg-accent transition-all border border-border text-left"
                      >
                        <div>
                          <p className="font-semibold">
                            {getTranslation(locale, category.name)}
                          </p>
                          <p className="text-xs text-muted-foreground mt-1">
                            {category.calculators.length} calculators
                          </p>
                        </div>
                        <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </button>
                    ))}
                  </div>
                )}

                {!searchQuery && selectedCategory && (
                  <div className="space-y-4">
                    {filteredResults.map(
                      (item) =>
                        item.calculators.length > 0 && (
                          <div key={item.category.id}>
                            <div className="flex items-center gap-2 mb-3">
                              <TrendingUp className="h-4 w-4 text-muted-foreground" />
                              <h3 className="text-sm font-semibold text-muted-foreground">
                                {getTranslation(locale, item.category.name)}
                              </h3>
                            </div>
                            <div className="space-y-1">
                              {item.calculators.map((calc) => (
                                <Link
                                  key={calc.slug}
                                  href={locale === "en" ? `/${item.category.id}/${calc.slug}` : `/${locale}/${item.category.id}/${calc.slug}`}
                                  className="flex items-center justify-between group rounded-lg px-4 py-3 hover:bg-accent transition-all"
                                  onClick={() => {
                                    setOpen(false);
                                    setSelectedCategory(null);
                                  }}
                                >
                                  <div>
                                    <p className="font-medium">
                                      {getTranslation(locale, calc.heading)}
                                    </p>
                                    <p className="text-sm text-muted-foreground">
                                      {getTranslation(locale, calc.descriptionKey)}
                                    </p>
                                  </div>
                                  <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </Link>
                              ))}
                            </div>
                          </div>
                        )
                    )}
                  </div>
                )}
              </div>
            </ScrollArea>

            <div className="border-t p-2 sm:p-3 bg-muted/30">
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <div className="hidden sm:flex items-center gap-4">
                  <span className="flex items-center gap-1">
                    <kbd className="px-2 py-1 bg-background border rounded">↑</kbd>
                    <kbd className="px-2 py-1 bg-background border rounded">↓</kbd>
                    <span>Navigate</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <kbd className="px-2 py-1 bg-background border rounded">Enter</kbd>
                    <span>Select</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <kbd className="px-2 py-1 bg-background border rounded">Esc</kbd>
                    <span>Close</span>
                  </span>
                </div>
                <span className="sm:hidden text-center w-full">Tap to select</span>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
