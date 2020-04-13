import styled from 'styled-components';

export const NavLayout = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  padding: 10px;
  width: 180px;
  height: 98%;
  background-color: #f7f8fb;
`;

export const NavLogo = styled.div`
  height: 10%;
  padding: 10px;
`;

export const NavContainer = styled.div`
  height: 90%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

export const NavGlobalMenu = styled.div`
  padding: 10px;
  fontsize: 1rem;
`;

export const NavFirstLevelWrap = styled.div`
  padding-bottom: 40px;
  font-size: 14px;
`;

export const NavSecondMenuWarp = styled.div`
  color: #9e9fa2;
  font-size: 0.875rem;
`;

export const NavMenu = styled.ul`
  line-height: 28px;
  color: #5b5c5f;
  font-size: 0.875rem;
  padding: 0;
`;

export const NavUserWrap = styled.ul`
  cursor: pointer;
  padding: 10px;
`;

export const NavUserName = styled.li`
  font-size: 0.875rem;
`;

export const NavUserLogin = styled.li`
  font-size: 0.75rem;
  color: #9e9fa2;
`;
