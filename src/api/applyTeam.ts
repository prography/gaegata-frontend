import fetcher from '../utils/fetcher';
import { getAuthToken } from 'utils/auth';

export interface ApplyTeamParams {
  apply_id: number;
  team_id: number;
  job: string;
  name: string;
  email: string;
  applyStatus?: string;
}

export const postApplyTeam = async (payload: ApplyTeamParams) => {
  const token = getAuthToken();
  const headers = token
    ? {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      }
    : {};
  const { data } = await fetcher.post(
    `teams/board/${payload.team_id}/applications/`,
    payload,
    {
      headers: headers,
    },
  );
  return data;
};

export interface ApplicantParams {
  team_id: string;
}

export const getApplicantList = async ({ team_id }: { team_id: string }) => {
  const token = getAuthToken();
  const headers = token
    ? {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      }
    : {};
  const { data } = await fetcher.get(`teams/board/${team_id}/applications/`, {
    headers: headers,
  });
  return data;
};
