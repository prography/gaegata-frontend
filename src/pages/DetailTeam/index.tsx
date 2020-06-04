import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { detailTeam } from 'store/team/action';
import {
  DetailTeamWrap,
  Container,
  Title,
  Hr,
  Description,
  CreateButton,
  SubTitle,
  ImageWrap,
  TeamPeopleWrap,
  TeamPeopleTitle,
  TeamPeopleContent,
  TeamPeopleImage,
  TeamPeople,
} from './styled';
import { RouteComponentProps } from 'react-router-dom';
import { reset } from 'store/auth/action';
import ModalComponent from 'components/Modal/index';
import ApplyTeam from 'components/ApplyTeam';

const DetailTeam: React.FC<RouteComponentProps> = ({ match }) => {
  const [visible, setVisible] = useState(false);
  const team_id = match.params;
  const dispatch = useDispatch();
  const team = useSelector((state: StoreState) => state.team.team);

  const { title, description, image, designer, developer, planner } = team;
  const getData = useCallback(() => {
    dispatch(detailTeam(team_id));
  }, [dispatch, team_id]);

  useEffect(() => {
    getData();
  }, []);

  const handleVisible = (): void => {
    setVisible(true);
  };
  const handleCancel = useCallback(async () => {
    setVisible(false);
    dispatch(reset());

    return visible;
  }, [visible]);

  return (
    <>
      <DetailTeamWrap>
        <Container>
          <Title>{title}</Title>
          <SubTitle>
            모집 인원(기획자 : {planner}명, 개발자 : {developer}명, 디자이너 :{' '}
            {designer}명)
          </SubTitle>
          <CreateButton onClick={handleVisible}>지원하기</CreateButton>
          <Hr />
          <ImageWrap>
            <img src={image} style={{ height: '100%' }} />
          </ImageWrap>
          <Description>
            {description.split('\n').map(line => {
              return (
                <>
                  {line}
                  <br />
                </>
              );
            })}
          </Description>
          <Hr />
          <TeamPeopleWrap>
            <TeamPeopleTitle>현재 팀원</TeamPeopleTitle>
            <TeamPeopleContent>
              <TeamPeople>
                <TeamPeopleImage></TeamPeopleImage>
                팀장
              </TeamPeople>
            </TeamPeopleContent>
          </TeamPeopleWrap>
          <Hr />
        </Container>
      </DetailTeamWrap>

      {visible && (
        <ModalComponent
          handleCancel={handleCancel}
          visible={visible}
          width={600}
        >
          <ApplyTeam></ApplyTeam>
        </ModalComponent>
      )}
    </>
  );
};

export default DetailTeam;
