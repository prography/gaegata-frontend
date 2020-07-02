import fetcher from '../utils/fetcher';
import { getAuthToken } from 'utils/auth';
import { IAnswer } from 'models/apply';

export interface IApplyParams {
  team: {
    job: string;
  };
  answers: IAnswer[];
}

export const postApplyTeam = async (payload: IApplyParams, team_id: number) => {
  const token = getAuthToken();
  const headers = token
    ? {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      }
    : {};
  const { data } = await fetcher.post(
    `teams/board/${team_id}/applications/`,
    payload,
    {
      headers,
    },
  );
  return data;
};

export interface ApplicantParams {
  team_id: string;
}

export const getApplicantList = async ({
  team_id,
}: {
  team_id: ApplicantParams;
}) => {
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

export interface ApproveApplicantParams {
  id: number;
}

export const getApproveApplicant = async (id: ApproveApplicantParams) => {
  const token = getAuthToken();
  const headers = token
    ? {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      }
    : {};
  const { data } = await fetcher.get(`applications/${id}/approve/`, {
    headers: headers,
  });
  return data;
};

export const getRefuseApplicant = async (id: ApproveApplicantParams) => {
  const token = getAuthToken();
  const headers = token
    ? {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      }
    : {};
  const { data } = await fetcher.get(`applications/${id}/refuse/`, {
    headers: headers,
  });
  return data;
};
