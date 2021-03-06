import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import ModalComponent from 'components/Modal/index';
import Login from 'components/Login/index';
import Register from 'components/Register/index';
import {
  NavLayout,
  NavLogo,
  NavContainer,
  NavGlobalMenu,
  NavTopWrap,
  NavUserWrap,
  NavUserName,
  NavUserLogin,
  CreateButton,
} from './style';
import 'styles/SideBar.css';
import 'antd/dist/antd.css';
import { useSelector, useDispatch } from 'react-redux';
import { reset } from 'store/auth/action';
import { destroyAuthToken } from 'utils/auth';

const SideBar = () => {
  const [visible, setVisible] = useState(false);
  const isLoggedIn = useSelector(
    (state: StoreState) => state.auth.me.isLoggedIn,
  );
  const { status } = useSelector((state: StoreState) => state.auth.emailCheck);
  const { username, email } = useSelector((state: StoreState) => state.auth.me);
  const dispatch = useDispatch();
  const handleVisible = (): void => {
    setVisible(true);
  };
  const handleCancel = useCallback(async () => {
    setVisible(false);
    dispatch(reset());

    return visible;
  }, [visible]);

  const handleLogout = () => {
    destroyAuthToken();
    alert('로그아웃되었습니다.');
    window.location.href = '/';
  };

  return (
    <>
      <NavLayout>
        <NavTopWrap>
          <NavLogo>
            <Link to="/">Fitple</Link>
          </NavLogo>
          <CreateButton>
            <Link to="/team/create">팀원 모집하기</Link>
          </CreateButton>
        </NavTopWrap>
        <NavContainer>
          <NavGlobalMenu></NavGlobalMenu>
          {isLoggedIn ? (
            <NavUserWrap>
              <NavUserName>
                {' '}
                <Link to="/mypage">{username}</Link>
              </NavUserName>
              <NavUserLogin>{email}</NavUserLogin>
              <button onClick={handleLogout}>로그아웃</button>
            </NavUserWrap>
          ) : (
            <NavUserWrap onClick={handleVisible}>
              <NavUserName>로그인 하기</NavUserName>
              <NavUserLogin>Log in</NavUserLogin>
            </NavUserWrap>
          )}
        </NavContainer>
      </NavLayout>
      {visible && (
        <ModalComponent
          handleCancel={handleCancel}
          visible={visible}
          width={700}
        >
          {status == 'register' ? <Register /> : <Login />}
        </ModalComponent>
      )}
    </>
  );
};

export default SideBar;
