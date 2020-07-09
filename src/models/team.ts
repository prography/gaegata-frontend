import { User } from './user';

export interface Team {
  id: number;
  team_id: number;
  title: string;
  author: string;
  description: string;
  planner?: number;
  developer?: number;
  designer?: number;
  region?: string;
  status?: string;
  goal?: string;
  image: string;
  created_at: string;
  job: string;
  join_status: string;
}
