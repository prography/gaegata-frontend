import * as React from 'react';
import PageLayout from './PageLayout';
import { Row, Col } from 'antd';
import PostCard from 'components/PostCard';
import { Team } from 'models/team';

const Home: React.FC = () => {
  return (
    <PageLayout>
      <Row gutter={[22, 22]}></Row>
    </PageLayout>
  );
};

export default Home;
