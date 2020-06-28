import { createEntity } from '../../utils/redux';
import * as authApi from '../../api/team';

export const CREAT_TEAM = 'CREAT_TEAM';
export const DETAIL_TEAM = 'DETAIL_TEAM';
export const LIST_TEAM = 'LIST_TEAM';

export const createTeamEntity = createEntity(CREAT_TEAM, authApi.createTeam);
export const createTeam = (params: FormData) => ({
  type: CREAT_TEAM,
  params,
});

export const detailTeamEntity = createEntity(DETAIL_TEAM, authApi.detailTeam);
export const detailTeam = (params: string | {}) => ({
  type: DETAIL_TEAM,
  params,
});

export const listTeamEntity = createEntity(LIST_TEAM, authApi.listTeam);
export const listTeam = (params: string) => ({
  type: LIST_TEAM,
  params,
});

export type CreateTeam = ReturnType<typeof createTeam>;
export type DetailTeam = ReturnType<typeof detailTeam>;
export type ListTeam = ReturnType<typeof listTeam>;
