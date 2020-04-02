import React from 'react';
import { Link } from 'react-router-dom';
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
import 'styles/SideBar.css';

const SideBar = () => {
  return (
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
        <NavUserWrap>
          <NavUserName>로그인 하기</NavUserName>
          <NavUserLogin>Log in</NavUserLogin>
        </NavUserWrap>
      </NavContainer>
    </NavLayout>
  );
};

export default SideBar;
