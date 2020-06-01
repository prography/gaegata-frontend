import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { detailTeam } from 'store/team/action';
import {
  DetailTeamWrap,
  Container,
  Title,
  Hr,
  Description,
  CreateButton,
} from './styled';
import { RouteComponentProps } from 'react-router-dom';

const DetailTeam: React.FC<RouteComponentProps> = ({ match }) => {
  const team_id = match.params;
  const dispatch = useDispatch();
  const team = useSelector((state: StoreState) => state.team.team);

  const { title, description } = team;
  const getData = useCallback(() => {
    console.log(team_id);
    dispatch(detailTeam(team_id));
  }, [dispatch, team_id]);

  useEffect(() => {
    getData();
  }, []);

  return (
    <DetailTeamWrap>
      <Container>
        <Title>{title}</Title>
        <CreateButton>지원하기</CreateButton>
        <Hr />
        <Description>{description}</Description>
        <Hr />

        <Hr />
        {/* <Comment team_id={team_id} /> */}
      </Container>
    </DetailTeamWrap>
  );
};

export default DetailTeam;
