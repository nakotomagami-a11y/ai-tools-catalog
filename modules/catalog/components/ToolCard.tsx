import { Tool } from "@shared/types/tool";
import { accentMap } from "@shared/config";
import { CATEGORIES } from "@shared/config";
import { useTilt } from "../hooks/useTilt";

const PRICING_LABELS: Record<string, string> = {
  free: "Free",
  freemium: "Freemium",
  "open-source": "Open Source",
  paid: "Paid",
  upcoming: "Upcoming",
};

interface ToolCardProps {
  tool: Tool;
  index: number;
}

export function ToolCard({ tool, index }: ToolCardProps) {
  const tiltRef = useTilt<HTMLDivElement>();
  const accent = accentMap[tool.category] || accentMap.all;
  const catLabel = CATEGORIES.find((c) => c.id === tool.category)?.label || tool.category;
  const badgeClass = "badge badge-" + tool.pricing.replace(" ", "-");

  return (
    <div
      ref={tiltRef}
      className="card"
      style={
        {
          "--card-accent": accent,
          animationDelay: Math.min(index * 0.03, 0.5) + "s",
        } as React.CSSProperties
      }
    >
      <div className="card-header">
        <span className="card-name">
          {tool.isNew && <span className="badge badge-new">New</span>}
          {tool.name}
        </span>
        <span className={badgeClass}>{PRICING_LABELS[tool.pricing] || tool.pricing}</span>
      </div>

      {tool.price && <div className="card-price">{tool.price}</div>}
      {tool.status && <div className="card-status">{tool.status}</div>}

      <p className="card-desc">{tool.description}</p>

      <div className="card-tags">
        {tool.tags.map((t) => (
          <span key={t} className="tag">{t}</span>
        ))}
      </div>

      <div className="card-footer">
        <span className="card-category">{catLabel}</span>
        <a href={tool.url} target="_blank" rel="noopener noreferrer" className="visit-btn">
          Visit
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 3h7v7" />
            <path d="M13 3L6 10" />
            <path d="M3 7v6h6" />
          </svg>
        </a>
      </div>
    </div>
  );
}
