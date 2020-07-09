import fetcher from '../utils/fetcher';
import { getAuthToken } from 'utils/auth';

export const getMyPage = async () => {
  const token = getAuthToken();
  const headers = token
    ? {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      }
    : {};
  const { data } = await fetcher.get('/account/profile/', {
    headers: headers,
  });
  return data;
};

export const putMyPage = async (params: FormData) => {
  const token = getAuthToken();
  const headers = token
    ? {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      }
    : {};

  const { data } = await fetcher.put('/account/profile/', params, {
    headers: headers,
  });
  const status = data.message;
  return status;
};

export const getMyApplicationList = async () => {
  const token = getAuthToken();
  const headers = token
    ? {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      }
    : {};

  const { data } = await fetcher.get('/account/profile/application/', {
    headers: headers,
  });

  return data;
};

export const getMyteamList = async () => {
  const token = getAuthToken();
  const headers = token
    ? {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      }
    : {};
  const { data } = await fetcher.get('account/profile/team/', {
    headers,
  });

  return data;
};
