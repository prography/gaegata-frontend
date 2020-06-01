import React, { useEffect } from 'react';
import PageLayout from './PageLayout';
import { Row, Col } from 'antd';
import PostCard from 'components/PostCard';
import { Team } from 'models/team';
import { listTeam } from 'store/team/action';
import { useDispatch, useSelector } from 'react-redux';

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const { list } = useSelector((state: StoreState) => state.team.teamList);
  /* 더미데이터 */

  const getList = () => {
    dispatch(listTeam(''));
  };

  useEffect(() => {
    getList();

    return getList();
  }, []);
  const { results } = list;
  return (
    <PageLayout>
      <Row gutter={[22, 22]}>
        {results.map(teamData => (
          <Col
            className="gutter-row"
            xs={24}
            lg={12}
            xl={8}
            xxl={6}
            key={teamData['id']}
          >
            <PostCard {...teamData} />
          </Col>
        ))}
      </Row>
    </PageLayout>
  );
};

export default Home;
