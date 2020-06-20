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
