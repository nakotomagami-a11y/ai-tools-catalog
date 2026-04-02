import { Category } from "@shared/types/tool";

export const CATEGORIES: Category[] = [
  { id: "all", label: "All", color: "#a78bfa" },
  { id: "coding", label: "Coding & Dev", color: "#34d399" },
  { id: "security", label: "Security", color: "#ef4444" },
  { id: "marketing", label: "Marketing & SEO", color: "#f97316" },
  { id: "finance", label: "Finance & Trading", color: "#10b981" },
  { id: "data", label: "Data & Analytics", color: "#06b6d4" },
  { id: "design", label: "UI & Design", color: "#f472b6" },
  { id: "gamedev", label: "Game Dev", color: "#fb923c" },
  { id: "3d", label: "3D & Motion", color: "#38bdf8" },
  { id: "audio-video", label: "Audio & Video", color: "#facc15" },
  { id: "productivity", label: "Productivity", color: "#c084fc" },
  { id: "robotics", label: "Robotics & Physical AI", color: "#14b8a6" },
  { id: "science", label: "Science & Research", color: "#8b5cf6" },
  { id: "infrastructure", label: "AI Infrastructure", color: "#64748b" },
];

export const PRICING_OPTIONS = [
  { id: "all", label: "All Pricing" },
  { id: "free", label: "Free" },
  { id: "freemium", label: "Freemium" },
  { id: "open-source", label: "Open Source" },
  { id: "paid", label: "Paid" },
  { id: "upcoming", label: "Upcoming" },
] as const;

export const accentMap: Record<string, string> = Object.fromEntries(
  CATEGORIES.map((c) => [c.id, c.color])
);
