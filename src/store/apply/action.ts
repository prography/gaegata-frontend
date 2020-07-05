import { createEntity } from '../../utils/redux';
import * as applyApi from '../../api/applyTeam';

export const APPLY_TEAM = 'APPLY_TEAM';
export const APPLY_TEAM_1 = 'APPLY_TEAM_1';
export const APPLY_TEAM_2 = 'APPLY_TEAM_2';
export const APPLICANT_LIST = 'APPLICANT_LIST';
export const APPROVE_APPLICANT = 'APPROVE_APPLICANT';
export const REFUSE_APPLICANT = 'REFUSE_APPLICANT';
export const RESET = 'RESET';

export const applyTeamEntity = createEntity(APPLY_TEAM, applyApi.postApplyTeam);
export const applyTeam = (params: applyApi.IApplyParams, team_id: number) => ({
  type: APPLY_TEAM,
  params,
  team_id,
});

export const applicantsEntity = createEntity(
  APPLICANT_LIST,
  applyApi.getApplicantList,
);
export const applicants = (team_id: number) => ({
  type: APPLICANT_LIST,
  team_id,
});

export const approveApplicantEntity = createEntity(
  APPROVE_APPLICANT,
  applyApi.getApproveApplicant,
);
export const approveApplicant = (id: number) => ({
  type: APPROVE_APPLICANT,
  id,
});

export const refuseApplicantEntity = createEntity(
  REFUSE_APPLICANT,
  applyApi.getRefuseApplicant,
);
export const refuseApplicant = (id: number) => ({
  type: REFUSE_APPLICANT,
  id,
});

interface IApplyTeam01 {
  job: string;
  answer1: { question: number; answer: string };
}

export const applyTeam01 = (params: IApplyTeam01) => ({
  type: APPLY_TEAM_1,
  params,
});

interface IApplyTeam02 {
  answer2: { question: number; answer: string };
  answer3: { question: number; answer: string };
}

export const applyTeam02 = (params: IApplyTeam02) => ({
  type: APPLY_TEAM_2,
  params,
});

export const reset = () => ({
  type: RESET,
});

export type ApplyTeam = ReturnType<typeof applyTeam>;
export type Applicants = ReturnType<typeof applicants>;
export type ApproveApplicant = ReturnType<typeof approveApplicant>;
export type RefuseApplicant = ReturnType<typeof refuseApplicant>;
