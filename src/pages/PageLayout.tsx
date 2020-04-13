import React from 'react';
import styled from 'styled-components';

const MainLayout = styled.div`
  padding: 7.5rem 1.375rem 0;
`;

const PageTitle = styled.h1`
  font-size: 2.25rem;
`;

const PageLayout: React.FC = ({ children }) => {
  return (
    <MainLayout>
      <PageTitle>개같하</PageTitle>
      {children}
    </MainLayout>
  );
};

export default PageLayout;
