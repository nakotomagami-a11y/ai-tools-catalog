import { CATEGORIES, PRICING_OPTIONS } from "@shared/config";

interface FilterBarProps {
  activeCategory: string;
  activePricing: string;
  onCategoryChange: (id: string) => void;
  onPricingChange: (id: string) => void;
}

export function FilterBar({
  activeCategory,
  activePricing,
  onCategoryChange,
  onPricingChange,
}: FilterBarProps) {
  return (
    <div className="filters">
      <div className="filter-row">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            className={`filter-btn${activeCategory === cat.id ? " active" : ""}`}
            style={{ "--active-color": cat.color } as React.CSSProperties}
            onClick={() => onCategoryChange(cat.id)}
          >
            {cat.label}
          </button>
        ))}
      </div>
      <div className="filter-row">
        {PRICING_OPTIONS.map((opt) => (
          <button
            key={opt.id}
            className={`filter-btn${activePricing === opt.id ? " active" : ""}`}
            data-pricing={opt.id}
            onClick={() => onPricingChange(opt.id)}
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  );
}
