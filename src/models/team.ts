export interface Team {
  id: number;
  title: string;
  author: string;
  description: string;
  planner: number;
  developer: number;
  designer: number;
  region?: string;
  status?: string;
  goal?: string;
  kind?: string;
  people?: string;
  image?: string;
  created_at: string;
}
