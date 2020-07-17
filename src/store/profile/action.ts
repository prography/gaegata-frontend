import { createEntity } from 'utils/redux';
import * as profileApi from 'api/profile';

export const USER_PROFILE_FUCK = 'USER_PROFILE_FUCK';

export const userProfileFuckEntity = createEntity(
  USER_PROFILE_FUCK,
  profileApi.getUserProfile,
);
export const userProfileFuck = (user_id: number) => ({
  type: USER_PROFILE_FUCK,
  user_id,
});

export type UserProfileFuck = ReturnType<typeof userProfileFuck>;
