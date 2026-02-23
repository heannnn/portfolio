export interface Project {
  id: string;
  title: string;
  period: string;
  role: string;
  summary: string;
  description: string;
  impact?: string[];
  tags: string[];
  highlights?: string[];
  badge?: string;
}
