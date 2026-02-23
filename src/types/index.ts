export interface Project {
  id: string;
  title: string;
  period: string;
  role: string;
  description: string;
  tags: string[];
  highlights?: string[];
  badge?: string;
}
