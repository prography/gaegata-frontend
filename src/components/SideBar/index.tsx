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
  NavFirstLevelWrap,
  NavSecondMenuWarp,
  NavMenu,
  NavUserWrap,
  NavUserName,
  NavUserLogin,
} from './style';
import 'styles/sideBar.css';
import 'antd/dist/antd.css';
import { useSelector, useDispatch } from 'react-redux';
import { IRootState } from 'reducers/index';
import { loginModalCancelAction } from 'actions/auth';

const SideBar = () => {
  const [visible, setVisible] = useState(false);

  const { isLoggedIn, userInfo } = useSelector(
    (state: IRootState) => state.auth.user,
  );
  const { progressStatus } = useSelector(
    (state: IRootState) => state.auth.login,
  );
  const dispatch = useDispatch();

  const handleVisible = (): void => {
    setVisible(true);
  };

  const handleCancel = useCallback(async () => {
    setVisible(false);
    await dispatch(loginModalCancelAction());

    return visible;
  }, [visible]);

  return (
    <>
      <NavLayout>
        <NavLogo>개</NavLogo>
        <NavContainer>
          <NavGlobalMenu>
            <NavFirstLevelWrap>
              <Link to="/">홈</Link>
            </NavFirstLevelWrap>
            <NavSecondMenuWarp>
              메뉴
              <NavMenu>
                <li>팀 생성하기</li>
                <li>북마크</li>
              </NavMenu>
            </NavSecondMenuWarp>
          </NavGlobalMenu>
          {isLoggedIn ? (
            <NavUserWrap>
              <NavUserName>{userInfo.username}</NavUserName>
              <NavUserLogin>{userInfo.is_github_authenticated}</NavUserLogin>
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
          width={400}
          title="개같하"
        >
          {progressStatus == 'FALSE' ? (
            <Register />
          ) : (
            <Login handleCancel={handleCancel} />
          )}
        </ModalComponent>
      )}
    </>
  );
};

export default SideBar;
