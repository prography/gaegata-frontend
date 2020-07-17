import React, { useEffect, useState, useCallback } from 'react';
import PageLayout from './PageLayout';
import { Row, Col } from 'antd';
import PostCard from 'components/PostCard';
import { listTeam } from 'store/team/action';
import { useDispatch, useSelector } from 'react-redux';
import ModalComponent from 'components/Modal/index';
import UserProfile from '../components/UserProfile';

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const { list } = useSelector((state: StoreState) => state.team.teamList);
  const [userId, setUserId] = useState(-1);

  const handleVisible = (id: number): void => {
    setVisible(true);
    setUserId(id);
  };

  const handleCancel = useCallback(async () => {
    setVisible(false);

    return visible;
  }, [visible]);

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
            <PostCard
              {...teamData}
              visible={visible}
              handleCancel={handleCancel}
              handleVisible={handleVisible}
            />
          </Col>
        ))}
      </Row>
      {visible ? (
        <ModalComponent
          handleCancel={handleCancel}
          visible={visible}
          width={600}
        >
          <UserProfile user_id={userId} />
        </ModalComponent>
      ) : (
        ''
      )}
    </PageLayout>
  );
};

export default Home;
