import * as React from 'react';
import Footer from 'components/Footer';
import MainTemplate from 'components/MainTemplate';
import HomeContainer from 'containers/HomeContainer';
import HeaderContainer from 'containers/HeaderContainer';

const Home: React.FC = () => {
  return (
    <MainTemplate header={<HeaderContainer />} footer={<Footer />}>
      <HomeContainer />
    </MainTemplate>
  );
};

export default Home;
