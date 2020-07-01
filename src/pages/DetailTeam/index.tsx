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
import ApplicantCheck from 'components/ApplicantCheck';
import CommentContainer from 'containers/CommentContainer';

interface MatchParams {
  team_id: string;
}

const DetailTeam: React.FC<RouteComponentProps<MatchParams>> = ({ match }) => {
  const [visible, setVisible] = useState(false);
  const team_id = parseInt(match.params.team_id);

  const dispatch = useDispatch();

  const team = useSelector((state: StoreState) => state.team.team);
  const { username } = useSelector((state: StoreState) => state.auth.me);
  const { applyStatus } = useSelector(
    (state: StoreState) => state.applyTeam.applyTeam,
  );

  const {
    title,
    description,
    image,
    designer,
    developer,
    planner,
    author,
    application,
  } = team;
  const getData = useCallback(() => {
    dispatch(detailTeam(team_id));
  }, [dispatch, team_id]);

  useEffect(() => {
    getData();
  }, [applyStatus]);

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
          {username !== author.username ? (
            application ? (
              <CreateButton>신청취소</CreateButton>
            ) : (
              <CreateButton onClick={handleVisible}>지원하기</CreateButton>
            )
          ) : (
            <CreateButton onClick={handleVisible}>신청자보기</CreateButton>
          )}
          <Hr />
          <ImageWrap>
            <img src={image} style={{ height: '50%', width: '50%' }} />
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
          <CommentContainer team_id={team_id} />
        </Container>
      </DetailTeamWrap>

      {visible && username !== author.username ? (
        <ModalComponent
          handleCancel={handleCancel}
          visible={visible}
          width={600}
        >
          <ApplyTeam handleCancel={handleCancel}></ApplyTeam>
        </ModalComponent>
      ) : (
        <ModalComponent
          handleCancel={handleCancel}
          visible={visible}
          width={600}
        >
          <ApplicantCheck team_id={team_id} />
        </ModalComponent>
      )}
    </>
  );
};

export default DetailTeam;
