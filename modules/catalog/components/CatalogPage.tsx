import { ToolsData } from "@shared/types/tool";
import { useFilters } from "../hooks/useFilters";
import { useLazyLoad } from "../hooks/useLazyLoad";
import { SearchBar } from "./SearchBar";
import { FilterBar } from "./FilterBar";
import { ToolCard } from "./ToolCard";

interface CatalogPageProps {
  data: ToolsData;
}

export function CatalogPage({ data }: CatalogPageProps) {
  const {
    filtered,
    activeCategory,
    setActiveCategory,
    activePricing,
    setActivePricing,
    setSearchQuery,
  } = useFilters(data.tools);

  const { visible, hasMore, sentinelRef } = useLazyLoad(filtered);

  return (
    <div className="container">
      <header className="header">
        <h1>Free AI Tools</h1>
        <p>A curated catalog of the best free AI tools for developers, designers, and creators.</p>

        <SearchBar onSearch={setSearchQuery} />

        <FilterBar
          activeCategory={activeCategory}
          activePricing={activePricing}
          onCategoryChange={setActiveCategory}
          onPricingChange={setActivePricing}
        />

        <div className="tool-count">
          Showing <span>{visible.length}</span> of <span>{filtered.length}</span> tools ({data.tools.length} total)
        </div>
      </header>

      <main className="grid">
        {visible.length === 0 ? (
          <div className="empty-state">
            <p>No tools match your filters</p>
            <small>Try a different search or category</small>
          </div>
        ) : (
          visible.map((tool, i) => <ToolCard key={tool.name + tool.pricing} tool={tool} index={i} />)
        )}
        {hasMore && <div ref={sentinelRef} className="load-sentinel" />}
      </main>

      <footer className="site-footer">
        Built with Next.js, TypeScript &amp; Tailwind CSS.
      </footer>
    </div>
  );
}
