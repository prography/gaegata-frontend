import React, { useState, ChangeEvent } from 'react';
import { useSelector } from 'react-redux';
import {
  ProfileWrap,
  ProfileImageBox,
  ProfileImage,
  Image,
  Input,
  SelectArea,
  Button,
  TextArea,
} from './styled';
import { Upload, message } from 'antd';
import * as myPageApi from 'api/myPage';

function getBase64(img: any, callback: any) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file: any) {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
}

const Profile = () => {
  const { username, email, image, phone, livingArea, introduce } = useSelector(
    (state: StoreState) => state.auth.me,
  );

  const [editUserName, setEditUserName] = useState(username);
  const [editImage, setEditImage] = useState(image);
  const [editPhone, setEditPhone] = useState(phone);
  const [editLivingArea, setEditLivingArea] = useState(livingArea);
  const [editIntroduce, setEditIntroduce] = useState(introduce);

  const [loading, setLoading] = useState(false);

  const handleUserName = (e: ChangeEvent<HTMLInputElement>) => {
    setEditUserName(e.target.value);
  };
  const handlePhone = (e: ChangeEvent<HTMLInputElement>) => {
    setEditPhone(e.target.value);
  };
  const handleLivingArea = (e: ChangeEvent<HTMLSelectElement>) => {
    setEditLivingArea(e.target.value);
  };
  const handleIntroduce = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setEditIntroduce(e.target.value);
  };

  const handleChange = (info: any) => {
    if (info.file.status === 'uploading') {
      setLoading(true);
      return;
    }
    // if (info.file.status === 'done') {
    //   getBase64(info.file.originFileObj, imageUrl =>
    //     setLoading( false )

    //   );
  };

  const handleSubmit = async () => {
    try {
      const formdata = new FormData();
      if (email) formdata.append('email', email);
      if (editUserName) formdata.append('username', editUserName);
      // if (editImage) formdata.append('image', editImage);
      if (editPhone) formdata.append('phone', editPhone);
      if (editLivingArea) formdata.append('livingArea', editLivingArea);
      if (editIntroduce) formdata.append('introduce', editIntroduce);

      const status = await myPageApi.putMyPage(formdata);

      if (status == 'ok.') {
        message.success('프로필 수정에 성공했습니다.');
      }
    } catch (err) {
      message.error('프로필 수정에 실패했습니다.');
    }
  };

  return (
    <ProfileWrap>
      <h1>프로필 수정</h1>
      <ProfileImageBox>
        <ProfileImage>
          <Image src={image} />
        </ProfileImage>
      </ProfileImageBox>

      <Input value={email} id="email" type="text" readOnly />

      <Input
        value={editUserName}
        id="username"
        type="text"
        placeholder="이름을 입력해주세요."
        onChange={handleUserName}
      />

      <Input
        value={editPhone}
        id="phone"
        type="text"
        placeholder="핸드폰 번호를 입력해주세요."
        onChange={handlePhone}
      />

      <SelectArea
        id="livingArea"
        value={editLivingArea}
        onChange={handleLivingArea}
      >
        <option value="">- 지역 -</option>
        <option value="서울특별시">서울특별시</option>
        <option value="부산광역시">부산광역시</option>
        <option value="대구광역시">대구광역시</option>
        <option value="광주광역시">광주광역시</option>
        <option value="울산광역시">울산광역시</option>
      </SelectArea>

      <TextArea
        value={editIntroduce}
        id="introduce"
        placeholder="간단한 자기소개를 입력해주세요."
        onChange={handleIntroduce}
      />
      <Button onClick={handleSubmit}>수정</Button>
    </ProfileWrap>
  );
};

export default Profile;
