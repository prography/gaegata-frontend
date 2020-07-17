import fetcher from '../utils/fetcher';

export const getUserProfile = async (user_id: string) => {
  const { data } = await fetcher.get(`/account/user/profile/${user_id}/`);

  return data;
};
