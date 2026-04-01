import { useState, useMemo } from "react";
import { Tool } from "@shared/types/tool";

export function useFilters(tools: Tool[]) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [activePricing, setActivePricing] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = useMemo(() => {
    const result = tools.filter((tool) => {
      if (activeCategory !== "all" && tool.category !== activeCategory) return false;
      if (activePricing !== "all" && tool.pricing !== activePricing) return false;
      if (searchQuery) {
        const haystack = (
          tool.name + " " + tool.description + " " + tool.tags.join(" ") + " " + (tool.price || "")
        ).toLowerCase();
        if (!haystack.includes(searchQuery)) return false;
      }
      return true;
    });
    // Sort: new items first, then preserve original order
    return result.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
  }, [tools, activeCategory, activePricing, searchQuery]);

  return {
    filtered,
    activeCategory,
    setActiveCategory,
    activePricing,
    setActivePricing,
    searchQuery,
    setSearchQuery,
  };
}
