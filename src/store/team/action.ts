import { createEntity } from '../../utils/redux';
import * as teamApi from '../../api/team';

export const CREAT_TEAM = 'CREAT_TEAM';
export const DETAIL_TEAM = 'DETAIL_TEAM';
export const LIST_TEAM = 'LIST_TEAM';
export const LIST_QUESTION = 'LIST_QUESTION';

export const createTeamEntity = createEntity(CREAT_TEAM, teamApi.createTeam);
export const createTeam = (params: FormData) => ({
  type: CREAT_TEAM,
  params,
});

export const detailTeamEntity = createEntity(DETAIL_TEAM, teamApi.detailTeam);
export const detailTeam = (params: number) => ({
  type: DETAIL_TEAM,
  params,
});

export const listTeamEntity = createEntity(LIST_TEAM, teamApi.listTeam);
export const listTeam = (params: string) => ({
  type: LIST_TEAM,
  params,
});

export const listQuestionEntity = createEntity(
  LIST_QUESTION,
  teamApi.listQuestion,
);
export const listQuestion = (params: number) => ({
  type: LIST_QUESTION,
  params,
});

export type CreateTeam = ReturnType<typeof createTeam>;
export type DetailTeam = ReturnType<typeof detailTeam>;
export type ListTeam = ReturnType<typeof listTeam>;
export type ListQuestion = ReturnType<typeof listQuestion>;
