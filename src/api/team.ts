import fetcher from '../utils/fetcher';
import { getAuthToken } from 'utils/auth';

export interface TeamParams {
  title: string;
  description: string;
  planner: number;
  developer: number;
  designer: number;
  region?: string;
  status?: string;
  goal?: string;
  kind?: string;
  people?: string;
  image?: string;
}

export const createTeam = async (payload: TeamParams) => {
  const token = getAuthToken();
  const headers = token
    ? {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      }
    : {};
  const { data } = await fetcher.post('/teams/board/', payload, {
    headers: headers,
  });
  return data;
};

export const detailTeam = async ({ team_id }: { team_id: string }) => {
  const token = getAuthToken();
  const headers = token
    ? {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      }
    : {};
  const { data } = await fetcher.get(`/teams/board/${team_id}/`, {
    headers: headers,
  });
  return data;
};

export const listTeam = async () => {
  const { data } = await fetcher.get('/teams/board/');

  return data;
};
