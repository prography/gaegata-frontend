import fetcher from 'utils/fetcher';

export interface LoginParams {
  email: string;
  password: string;
}

export const postLogin = async (payload: LoginParams) => {
  const { data } = await fetcher.post('account/user/login/', payload);
  return data;
};

export interface EmailCheckParams {
  email: string;
}

export const emailCheck = async (payload: EmailCheckParams) => {
  const { data } = await fetcher.post('account/user/check/', payload);
  return data;
};

export interface RegisterParams {
  email: string;
  username: string;
  password: string;
}

export const postRigster = async (payload: RegisterParams) => {
  const { data } = await fetcher.post('account/user/create/', payload);
  return data;
};

export const getUser = async (token?: string) => {
  const headers = token
    ? {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      }
    : {};
  const { data } = await fetcher.get('account/profile/', {
    headers,
  });

  return data;
};
