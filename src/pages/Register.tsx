import * as React from 'react';
import Footer from '../components/Footer';
import MainTemplate from '../components/MainTemplate';
import RegisterContainer from '../containers/RegisterContainer';
import HeaderContainer from '../containers/HeaderContainer';

const Home: React.FC = () => {
  return (
    <MainTemplate header={<HeaderContainer />} footer={<Footer />}>
      <RegisterContainer />
    </MainTemplate>
  );
};

export default Home;
