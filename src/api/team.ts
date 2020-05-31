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
  console.log(token);

  console.log(payload);
  const { data } = await fetcher.post('teams/board/', payload, {
    headers: headers,
  });
  return data;
};
