import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  ProfileWrap,
  ProfileImageBox,
  ProfileImage,
  Input,
  SelectArea,
  TextArea,
} from './styled';
import { userProfileFuck } from 'store/profile/action';

interface Props {
  user_id: number;
}

const UserProfile = ({ user_id }: Props) => {
  const dispatch = useDispatch();
  const { username, email, livingArea, introduce, phone, image } = useSelector(
    (state: StoreState) => state.userProfile.userProfile,
  );

  useEffect(() => {
    dispatch(userProfileFuck(user_id));
  }, []);

  return (
    <ProfileWrap>
      <h1>프로필 수정</h1>
      <ProfileImageBox>
        <ProfileImage>
          <img src={image}></img>
        </ProfileImage>
      </ProfileImageBox>

      <Input value={email} id="email" type="text" readOnly />

      <Input value={username} id="username" type="text" readOnly />

      <Input value={phone} id="phone" type="text" readOnly />

      <SelectArea id="livingArea" value={livingArea} disabled>
        <option value="">- 지역 -</option>
        <option value="서울특별시">서울특별시</option>
        <option value="부산광역시">부산광역시</option>
        <option value="대구광역시">대구광역시</option>
        <option value="광주광역시">광주광역시</option>
        <option value="울산광역시">울산광역시</option>
      </SelectArea>

      <TextArea value={introduce} id="introduce" readOnly />
    </ProfileWrap>
  );
};

export default UserProfile;
