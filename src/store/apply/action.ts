import { createEntity } from '../../utils/redux';
import * as authApi from '../../api/applyTeam';

export const APPLY_TEAM = 'APPLY_TEAM';
export const APPLICANT_LIST = 'APPLICANT_LIST';

export const applyTeamEntity = createEntity(APPLY_TEAM, authApi.postApplyTeam);
export const applyTeam = (params: authApi.ApplyTeamParams) => ({
  type: APPLY_TEAM,
  params,
});

export const applicantsEntity = createEntity(
  APPLICANT_LIST,
  authApi.getApplicantList,
);
export const applicants = (params: string | {}) => ({
  type: APPLICANT_LIST,
  params,
});

export type ApplyTeam = ReturnType<typeof applyTeam>;
export type Applicants = ReturnType<typeof applicants>;
