export interface IComment {
  team: number;
  id?: number;
  user?: string;
  parent?: number;
  comment: string;
  created_at?: string;
  is_deleted?: boolean;
  reply?: IComment[];
}
