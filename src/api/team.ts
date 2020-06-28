import fetcher from '../utils/fetcher';
import { getAuthToken } from 'utils/auth';

export interface Question {
  question: string;
}

export interface TeamParams {
  title: string;
  description: string;
  planner: number;
  developer: number;
  designer: number;
  region: string;
  active_status?: string;
  goal?: string;
  image?: string;
  questions?: Question[];
}

export const createTeam = async (payload: FormData) => {
  const token = getAuthToken();
  const headers = token
    ? {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      }
    : {};

  console.log(payload);

  for (var value of payload.values()) {
    console.log(value);
  }
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
