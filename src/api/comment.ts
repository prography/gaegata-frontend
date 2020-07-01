import fetcher from '../utils/fetcher';
import { getAuthToken } from '../utils/auth';

export interface ICommentParams {
  team: number;
  comment: string;
  parent?: number;
}

export const postComment = async (params: ICommentParams) => {
  const token = getAuthToken();
  const headers = token
    ? {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      }
    : {};
  const { data } = await fetcher.post('/teams/comments/', params, {
    headers: headers,
  });
  return data;
};

export const getComments = async (team: number) => {
  const { data } = await fetcher.get(`/teams/comment/${team}`);
  return data;
};
