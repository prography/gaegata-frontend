export interface IAuthUser {
  error: string;
  isLoggedIn: boolean;
  userInfo: {
    user_id?: number;
    username: string;
    nickname: string;
    introduction?: string;
    image?: string;
    is_github_authenticated?: string;
  };
}

export interface IAuthLogin {
  authStatus?: string;
  username: string;
  password?: string;
  error?: string;
  progressStatus?: string;
}

export interface IRegisterUser {
  username: string;
  password: string;
  nickname: string;
}
