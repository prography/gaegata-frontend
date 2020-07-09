import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { CreateButton } from '../components/SideBar/style';
import { useSelector, useDispatch } from 'react-redux';
import ModalComponent from 'components/Modal/index';
import Login from 'components/Login/index';
import Register from 'components/Register/index';
import 'antd/dist/antd.css';
import { reset } from 'store/auth/action';

const MainLayout = styled.div`
  padding: 7.5rem 10% 0;
`;

const PageTitle = styled.h1`
  font-size: 2.25rem;
`;

const PageLayout: React.FC = ({ children }) => {
  const [visible, setVisible] = useState(false);
  const { isLoggedIn } = useSelector((state: StoreState) => state.auth.me);
  const { status } = useSelector((state: StoreState) => state.auth.emailCheck);

  const dispatch = useDispatch();

  const handleVisible = (): void => {
    setVisible(true);
  };

  const handleCancel = useCallback(async () => {
    setVisible(false);
    dispatch(reset());

    return visible;
  }, [visible]);

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
          backgroundImage: 'url(/images/team1.jpg)',
        }}
      >
        <div style={{ color: 'white', display: 'flex', fontSize: '1.5rem' }}>
          팀원을 찾고 계신가요?
        </div>
        <div style={{ color: 'white', display: 'flex', marginBottom: '30px' }}>
          지금바로 FIT이 맞는 사람들을 찾아보세요!
        </div>
        <div style={{ display: 'flex' }}>
          {isLoggedIn ? (
            <Link to="/team/create">
              <CreateButton>팀원 찾기</CreateButton>
            </Link>
          ) : (
            <CreateButton onClick={handleVisible}>팀원 찾기</CreateButton>
          )}
        </div>
      </div>
      {visible && (
        <ModalComponent
          handleCancel={handleCancel}
          visible={visible}
          width={700}
        >
          {status == 'register' ? <Register /> : <Login />}
        </ModalComponent>
      )}
      <PageTitle>팀 리스트</PageTitle>
      {children}
    </MainLayout>
  );
};

export default PageLayout;
