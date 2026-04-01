export interface Tool {
  name: string;
  url: string;
  description: string;
  category: string;
  tags: string[];
  pricing: "free" | "freemium" | "open-source" | "paid" | "upcoming";
  price?: string;
  status?: string;
  isNew?: boolean;
}

export interface Category {
  id: string;
  label: string;
  color: string;
}

export interface ToolsData {
  categories: Category[];
  tools: Tool[];
}
