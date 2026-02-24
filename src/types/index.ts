export type ProjectCategory = "architecture" | "process" | "client";

export type FilterType = "all" | ProjectCategory;

export interface Project {
  id: string;
  title: string;
  period: string;
  role: string;
  isKey?: boolean;
  category: ProjectCategory;
  summary: string;
  description: string;
  impact?: string[];
  tags: string[];
  badge?: string;
  cardImpact?: string;
}
