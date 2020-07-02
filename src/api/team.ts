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
  goal: string;
  image?: string;
  questions?: Question[];
}

export const createTeam = async (payload: FormData) => {
  const token = getAuthToken();
  const headers = token
    ? {
        Authorization: `Bearer ${token}`,
        'content-type':
          'multipart/form-data; boundary=ebf9f03029db4c2799ae16b5428b06bd',
      }
    : {};

  const { data } = await fetcher.post('/teams/board/', payload, {
    headers,
  });

  return data;
};

export const detailTeam = async (team_id: number) => {
  const token = getAuthToken();
  const headers = token
    ? {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      }
    : {};
  const { data } = await fetcher.get(`/teams/board/${team_id}/`, {
    headers,
  });
  return data;
};

export const listTeam = async () => {
  const { data } = await fetcher.get('/teams/board/');
  return data;
};

export const listQuestion = async (team_id: number) => {
  const token = getAuthToken();
  const headers = token
    ? {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      }
    : {};
  const { data } = await fetcher.get(`/teams/board/${team_id}/questions/`, {
    headers,
  });

  return data;
};
