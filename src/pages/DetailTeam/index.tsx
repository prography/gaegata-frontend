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
import ApplicantCheck from 'components/ApplicantCheck';
import CommentContainer from 'containers/CommentContainer';
import ApplyContainer from 'containers/ApplyContainer';
import UserProfile from 'components/UserProfile';

interface MatchParams {
  team_id: string;
}

const DetailTeam: React.FC<RouteComponentProps<MatchParams>> = ({ match }) => {
  const [visible, setVisible] = useState(false);
  const [profileVisible, setProfileVisible] = useState(false);
  const [userId, setUserId] = useState(-1);
  const team_id = parseInt(match.params.team_id);

  const dispatch = useDispatch();

  const team = useSelector((state: StoreState) => state.team.team);
  const { username, isLoggedIn } = useSelector(
    (state: StoreState) => state.auth.me,
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
    leader,
    member,
  } = team;
  const getData = useCallback(() => {
    dispatch(detailTeam(team_id));
  }, [dispatch, team_id]);

  useEffect(() => {
    getData();
  }, []);

  const handleVisible = (): void => {
    setVisible(true);
  };

  const handleProfileVisible = (id: number) => {
    setProfileVisible(true);
    setUserId(id);
  };

  const handleCancel = useCallback(async () => {
    setVisible(false);
    setProfileVisible(false);
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
          {isLoggedIn ? (
            username !== author ? (
              application ? (
                <CreateButton>신청취소</CreateButton>
              ) : (
                <CreateButton onClick={handleVisible}>지원하기</CreateButton>
              )
            ) : (
              <CreateButton onClick={handleVisible}>신청자보기</CreateButton>
            )
          ) : (
            <></>
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
              <TeamPeople
                onClick={() => handleProfileVisible(leader.id)}
                style={{ cursor: 'pointer' }}
              >
                <TeamPeopleImage>
                  <img
                    src={leader.image}
                    style={{
                      borderRadius: '100%',
                      height: '100%',
                      width: '100%',
                    }}
                  />
                </TeamPeopleImage>
                <div style={{ textAlign: 'center' }}>팀장</div>
              </TeamPeople>
              {member.map(({ id, image }) => {
                return (
                  <TeamPeople
                    onClick={() => handleProfileVisible(id)}
                    style={{ cursor: 'pointer' }}
                  >
                    <TeamPeopleImage>
                      <img
                        src={image}
                        style={{
                          borderRadius: '100%',
                          height: '100%',
                          width: '100%',
                        }}
                      />
                    </TeamPeopleImage>
                    <div style={{ textAlign: 'center' }}>팀원</div>
                  </TeamPeople>
                );
              })}
            </TeamPeopleContent>
          </TeamPeopleWrap>
          <Hr />
          <CommentContainer team_id={team_id} />
        </Container>
      </DetailTeamWrap>

      {visible && username !== author ? (
        <ApplyContainer
          team_id={team_id}
          handleCancel={handleCancel}
          visible={visible}
        />
      ) : (
        <ModalComponent
          handleCancel={handleCancel}
          visible={visible}
          width={600}
        >
          <ApplicantCheck team_id={team_id} />
        </ModalComponent>
      )}

      {profileVisible ? (
        <ModalComponent
          handleCancel={handleCancel}
          visible={profileVisible}
          width={600}
        >
          <UserProfile user_id={userId} />
        </ModalComponent>
      ) : (
        ''
      )}
    </>
  );
};

export default DetailTeam;
