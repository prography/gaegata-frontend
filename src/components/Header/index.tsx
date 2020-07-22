import React, { useState, useCallback } from 'react';
import {
  HeaderWrap,
  HeaderContainer,
  NavLogo,
  NavUser,
  NavUl,
  NavLi,
} from './styled';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ModalComponent from 'components/Modal/index';
import Login from 'components/Login/index';
import Register from 'components/Register/index';
import { reset } from 'store/auth/action';
import 'styles/SideBar.css';
import 'antd/dist/antd.css';
import { destroyAuthToken } from 'utils/auth';

const Header = () => {
  const [visible, setVisible] = useState(false);
  const isLoggedIn = useSelector(
    (state: StoreState) => state.auth.me.isLoggedIn,
  );
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

  const handleLogout = () => {
    destroyAuthToken();
    alert('로그아웃되었습니다.');
    window.location.href = '/';
  };

  return (
    <>
      <HeaderWrap>
        <HeaderContainer>
          <NavLogo>
            <Link to="/" style={{ color: '#5b5c5f' }}>
              <img src="/images/fitple_logo_0.svg" width="60%" />
            </Link>
          </NavLogo>
          <NavLogo>
            {/* <Link
              to="/feedback"
              style={{ fontSize: '1.25rem', color: '#5b5c5f' }}
            >
              feedback
            </Link> */}
          </NavLogo>
          <NavUser>
            {isLoggedIn ? (
              <NavUl>
                <NavLi onClick={handleLogout} style={{ fontWeight: 800 }}>
                  로그아웃
                </NavLi>
                <NavLi>
                  <Link
                    to="/mypage"
                    style={{ color: 'rgba(0, 0, 0, 0.65);', fontWeight: 800 }}
                  >
                    마이페이지
                  </Link>
                </NavLi>
              </NavUl>
            ) : (
              <NavUl onClick={handleVisible}>
                <NavLi>로그인/회원가입</NavLi>
              </NavUl>
            )}
          </NavUser>
        </HeaderContainer>
      </HeaderWrap>
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

export default Header;
