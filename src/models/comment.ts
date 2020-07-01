import { User } from './user';

export interface IComment {
  team: number;
  id?: number;
  user?: User;
  parent?: number;
  comment: string;
  created_at?: string;
  is_deleted?: boolean;
  reply?: IComment[];
}
