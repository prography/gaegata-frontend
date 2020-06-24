import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { CreateButton } from '../components/SideBar/style';

const MainLayout = styled.div`
  padding: 7.5rem 10% 0;
`;

const PageTitle = styled.h1`
  font-size: 2.25rem;
`;

const PageLayout: React.FC = ({ children }) => {
  return (
    <MainLayout>
      <div
        style={{
          height: '200px',
          display: 'flex',
          backgroundColor: 'gray',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '5px',
          flexDirection: 'column',
          marginBottom: '30px',
        }}
      >
        <div style={{ color: 'white', display: 'flex', fontSize: '1.5rem' }}>
          팀원을 찾고 계신가요?
        </div>
        <div style={{ color: 'white', display: 'flex', marginBottom: '30px' }}>
          지금바로 FIT이 맞는 사람들을 찾아보세요!
        </div>
        <div style={{ display: 'flex' }}>
          <CreateButton>
            <Link to="/team/create">팀원 찾기</Link>
          </CreateButton>
        </div>
      </div>
      <PageTitle>팀 리스트</PageTitle>
      {children}
    </MainLayout>
  );
};

export default PageLayout;
