import React from 'react';
import PageLayout from './PageLayout';
import { Row, Col } from 'antd';
import PostCard from 'components/PostCard';
import { Team } from 'models/team';

const Home: React.FC = () => {
  /* 더미데이터 */
  const datas: Team[] = [
    {
      id: 1,
      title: '저랑 토이프로젝트 만들어요!',
      description:
        '프로그라피에서 토이프로젝트를 함께 할 인재를 구하고 있어요!',
      created_at: '2020-04-13',
    },
    {
      id: 2,
      title: '안냐세요',
      description:
        '프로그라피에서 토이프로젝트를 함께 할 인재를 구하고 있어요!',
      created_at: '2020-04-13',
      image:
        'https://media.vlpt.us/post-images/velopert/c3b83ae0-dfbb-11e9-8dd2-b1144eac7705/ts.png',
    },
  ];

  return (
    <PageLayout>
      <Row gutter={[22, 22]}>
        {datas.map((teamData) => (
          <Col
            className="gutter-row"
            xs={24}
            lg={12}
            xl={8}
            xxl={6}
            key={teamData.id}
          >
            <PostCard {...teamData} />
          </Col>
        ))}
      </Row>
    </PageLayout>
  );
};

export default Home;
