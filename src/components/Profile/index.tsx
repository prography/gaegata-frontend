import React from 'react';
import { useSelector } from 'react-redux';
import {
  ProfileWrap,
  ProfileImageBox,
  ProfileImage,
  P,
  H3,
  Image,
  Span,
  Button,
} from './styled';

interface Props {
  handleVisible: () => void;
}

const Profile = ({ handleVisible }: Props) => {
  const { username, email, image } = useSelector(
    (state: StoreState) => state.auth.me,
  );

  return (
    <ProfileWrap>
      <ProfileImageBox>
        <ProfileImage>
          <Image src={image} />
        </ProfileImage>
        <H3>
          {username} <Span>@{email}</Span>
        </H3>
        <Button onClick={handleVisible}>수정</Button>
      </ProfileImageBox>
    </ProfileWrap>
  );
};

export default Profile;
