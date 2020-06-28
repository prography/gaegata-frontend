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
  ItemWrap,
  NumberInputWrap,
} from './styled';
import { useDispatch, useSelector } from 'react-redux';
import { createTeam } from 'store/team/action';
import { useHistory } from 'react-router';
import { Upload, Modal } from 'antd';

const getBase64 = (file: any) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
};

const CreateTeam: React.FC = () => {
  const [teamContent, setTeamContent] = useState<TeamParams>({
    title: '',
    description: '',
    planner: 0,
    developer: 0,
    designer: 0,
    region: '',
  });

  const [question1, setQuestion1] = useState('');
  const [question2, setQuestion2] = useState('');
  const [question3, setQuestion3] = useState('');

  const [previewVisible, setPreviewvisible] = useState(false);
  const [previewImage, setPreviewimage] = useState('');
  const [image, setImage] = useState('');

  const history = useHistory();
  const dispatch = useDispatch();
  const { status, id } = useSelector((state: StoreState) => state.team.team);

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

  const handleQuestion1 = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setQuestion1(e.target.value);
  };

  const handleQuestion2 = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setQuestion2(e.target.value);
  };

  const handleQuestion3 = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setQuestion3(e.target.value);
  };

  useEffect(() => {
    if (status === 'CREATE_SUCCESS') {
      window.alert('팀이 생성 되었습니다.');
      history.push(`/team/detail/${id}`);
    }
    if (status === 'CREATE_FAILTURE') {
      window.alert('팀이 생성 되지 않았습니다.');
    }
  }, [status]);

  const handlePreview = async (file: any) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewimage(file.url || file.preview);
    setPreviewvisible(true);
  };

  const handleImage = ({ file }: any) => {
    setImage(file.originFileObj);

    if (file.status === 'removed') {
      setImage('');
    }
  };
  const handleCancel = () => setPreviewvisible(false);
  const uploadButton = (
    <div>
      <div className="ant-upload-text">Upload</div>
    </div>
  );

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const questionArr = [];

    if (question1) {
      const question1Param = { question: question1 };
      questionArr.push(question1Param);
    }

    if (question2) {
      const question2Param = { question: question2 };
      questionArr.push(question2Param);
    }

    if (question3) {
      const question3Param = { question: question3 };
      questionArr.push(question3Param);
    }

    const team = {
      title: teamContent.title,
      description: teamContent.description,
      region: teamContent.region,
      planner: teamContent.planner,
      developer: teamContent.developer,
      designer: teamContent.designer,
      goal: teamContent.goal,
      image: image,
    };
    const questions = questionArr;

    const formdata1 = new FormData();
    const formdata = new FormData();

    formdata.append('title', teamContent.title);
    formdata.append('description', teamContent.description);
    formdata.append('region', teamContent.region);
    formdata.append('planner', teamContent.planner.toString());
    formdata.append('developer', teamContent.developer.toString());
    formdata.append('designer', teamContent.designer.toString());
    if (teamContent.goal) {
      formdata.append('goal', teamContent.goal);
    }
    formdata.append('image', image);
    //formdata.append('questions', JSON.stringify(questions));
    //formdata1.append('team', formdata);
    for (var value of formdata.values()) {
      console.log(value);
    }

    await dispatch(createTeam(formdata));
  };

  return (
    <>
      <div
        style={{
          height: '250px',
          backgroundColor: 'gray',
          paddingTop: '60px',
          flexDirection: 'column',
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <div style={{ width: '50%', color: 'white', marginBottom: '10px' }}>
          <h1 style={{ margin: '0', color: 'white' }}>팀 기본 정보 입력하기</h1>
          <p>FIT이 맞는 사람을 찾기 위해 자세하게 팀에 대해서 입력해주세요!</p>
        </div>
      </div>
      <CreateTeamWrap>
        <Container>
          <Form onSubmit={handleSubmit}>
            <ItemWrap>
              <Title>팀 기본 정보</Title>
              <Input
                id="title"
                type="text"
                placeholder="팀 제목을 입력해주세요."
                onChange={handleChange}
              ></Input>
              <TextArea
                id="description"
                placeholder="팀을 소개하는 글을 입력해주세요."
                onChange={handleChange}
              ></TextArea>
              <SelectArea id="region" onChange={handleChange}>
                <option value="서울특별시">서울특별시</option>
                <option value="부산광역시">부산광역시</option>
                <option value="대구광역시">대구광역시</option>
                <option value="광주광역시">광주광역시</option>
                <option value="울산광역시">울산광역시</option>
              </SelectArea>
            </ItemWrap>
            <ItemWrap style={{ paddingTop: '8%' }}>
              <Title>팀 모집 인원</Title>
              <FieldWrap>
                <NumberInputWrap>
                  <NumberInput
                    id="planner"
                    type="number"
                    min="0"
                    max="10"
                    onChange={handleChange}
                    placeholder="몇명의 디자이너가 필요하신가요?"
                  ></NumberInput>{' '}
                </NumberInputWrap>
                <NumberInputWrap>
                  <NumberInput
                    id="developer"
                    type="number"
                    min="0"
                    max="10"
                    onChange={handleChange}
                    placeholder="몇명의 기획자가 필요하신가요?"
                  ></NumberInput>{' '}
                </NumberInputWrap>
                <NumberInputWrap>
                  <NumberInput
                    id="designer"
                    type="number"
                    min="0"
                    max="10"
                    onChange={handleChange}
                    placeholder="몇명의 개발자가 필요하신가요?"
                  ></NumberInput>
                </NumberInputWrap>
              </FieldWrap>
            </ItemWrap>
            <ItemWrap style={{ paddingTop: '8%' }}>
              <Title>썸네일 이미지 선택</Title>
              <Upload
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                listType="picture-card"
                onPreview={handlePreview}
                onChange={handleImage}
                accept="image/*"
              >
                {image === '' ? uploadButton : null}
              </Upload>
              <Modal
                visible={previewVisible}
                footer={null}
                onCancel={handleCancel}
              >
                <img
                  alt="example"
                  style={{ width: '100%' }}
                  src={previewImage}
                />
              </Modal>
            </ItemWrap>
            <ItemWrap style={{ paddingTop: '8%' }}>
              <Title>질문</Title>
              <SubTitle>첫번째 질문</SubTitle>
              <TextArea
                id="question1"
                placeholder="팀원들에게 물어보고 싶은 질문을 입력해주세요."
                onChange={handleQuestion1}
              ></TextArea>
              <SubTitle>두번째 질문</SubTitle>
              <TextArea
                id="question2"
                placeholder="팀원들에게 물어보고 싶은 질문을 입력해주세요."
                onChange={handleQuestion2}
              ></TextArea>
              <SubTitle>세번째 질문</SubTitle>
              <TextArea
                id="question3"
                placeholder="팀원들에게 물어보고 싶은 질문을 입력해주세요."
                onChange={handleQuestion3}
              ></TextArea>
            </ItemWrap>
            <CreateButton type="submit">제출</CreateButton>
          </Form>
        </Container>
      </CreateTeamWrap>
    </>
  );
};

export default CreateTeam;
