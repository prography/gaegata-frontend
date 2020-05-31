import { createEntity } from '../../utils/redux';
import * as authApi from '../../api/team';

export const CREAT_TEAM = 'CREAT_TEAM';

export const createTeamEntity = createEntity(CREAT_TEAM, authApi.createTeam);
export const createTeam = (params: authApi.TeamParams) => ({
  type: CREAT_TEAM,
  params,
});

export type CreateTeam = ReturnType<typeof createTeam>;
