export interface IUser {
  user_id?: string;
  username: string;
  password: string;
  email: string;
  introduction?: string;
  nickname?: string;
  is_new?: boolean;
}

export interface ILoginUser {
  username: string;
  password: string;
}

export interface IAuth {
  access: string;
}
