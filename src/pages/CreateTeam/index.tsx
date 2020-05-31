import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import { TeamParams } from 'api/team';
import {
  CreateTeamWrap,
  Title,
  Input,
  Hr,
  Container,
  SubTitle,
  FieldWrap,
  NumberInput,
  TextArea,
  SelectArea,
  CreateButton,
  Form,
} from './styled';
import { useDispatch, useSelector } from 'react-redux';
import { createTeam } from 'store/team/action';

const CreateTeam: React.FC = () => {
  const [teamContent, setTeamContent] = useState<TeamParams>({
    title: '',
    description: '',
    planner: 0,
    developer: 0,
    designer: 0,
    region: '',
  });

  const dispatch = useDispatch();
  const { status } = useSelector((state: StoreState) => state.team.team);

  const handleChange = (
    e:
      | ChangeEvent<HTMLInputElement>
      | ChangeEvent<HTMLTextAreaElement>
      | ChangeEvent<HTMLSelectElement>,
  ) => {
    setTeamContent({
      ...teamContent,
      [e.currentTarget.id]: e.currentTarget.value,
    });
  };

  useEffect(() => {
    if (status === 'SUCCESS') {
      window.alert('팀이 생성 되었습니다.');
      window.location.href = '/';
    }
    if (status === 'FAILTURE') {
      window.alert('팀이 생성 되지 않았습니다.');
    }
  }, [status]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    await dispatch(
      createTeam({
        title: teamContent.title,
        description: teamContent.description,
        planner: teamContent.planner,
        developer: teamContent.developer,
        designer: teamContent.designer,
        region: teamContent.region == '' ? '0' : teamContent.region,
        status: 'delay',
        goal: '목표',
        kind: '웹',
        people: '사용고객',
      }),
    );
  };

  return (
    <CreateTeamWrap>
      <Title>프로젝트 생성하기</Title>
      <Hr></Hr>
      <Container>
        <Form onSubmit={handleSubmit}>
          <SubTitle>프로젝트 명</SubTitle>
          <Input
            id="title"
            type="text"
            placeholder="프로젝트 명을 입력해주세요."
            onChange={handleChange}
          ></Input>
          <SubTitle>모집분야</SubTitle>
          <FieldWrap>
            기획자{' '}
            <NumberInput
              id="planner"
              type="number"
              min="0"
              max="10"
              defaultValue="0"
              onChange={handleChange}
            ></NumberInput>{' '}
            개발자{' '}
            <NumberInput
              id="developer"
              type="number"
              min="0"
              max="10"
              defaultValue="0"
              onChange={handleChange}
            ></NumberInput>{' '}
            디자이너{' '}
            <NumberInput
              id="designer"
              type="number"
              min="0"
              max="10"
              defaultValue="0"
              onChange={handleChange}
            ></NumberInput>
          </FieldWrap>
          <SubTitle>프로젝트 설명</SubTitle>
          <TextArea
            id="description"
            placeholder="프로젝트에 대한 세부설명을 입력해주세요."
            onChange={handleChange}
          ></TextArea>
          <SubTitle>지역</SubTitle>
          <SelectArea id="region" onChange={handleChange}>
            <option value="0">서울특별시</option>
            <option value="1">부산광역시</option>
            <option value="2">대구광역시</option>
            <option value="3">광주광역시</option>
            <option value="4">울산광역시</option>
          </SelectArea>

          <CreateButton type="submit">작성 완료</CreateButton>
        </Form>
      </Container>
    </CreateTeamWrap>
  );
};

export default CreateTeam;
