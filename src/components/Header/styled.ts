import styled from 'styled-components';

export const HeaderWrap = styled.header`
  background-color: #fff;
  box-shadow: 0 1px 2px 0 rgba(40, 50, 60, 0.06);
  border-bottom: 1px solid #d9dfeb;
  position: relative;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  height: 60px;
  display: flex !important;
  align-items: center;
  z-index: 900;
`;

export const HeaderContainer = styled.div`
  justify-content: space-between;
  max-width: 1200px;
  width: 90%;
  margin: 0 auto;
  display: flex;
`;

export const NavLogo = styled.div`
  font-size: 2rem;
  font-weight: 800;
  color: #5b5c5f;
  margin-top: 10px;
`;

export const NavUser = styled.div`
  display: flex;
  align-items: center;
`;

export const NavUl = styled.ul`
  display: flex;
  flex-direction: row;
  margin: 0;
`;
export const NavLi = styled.li`
  cursor: pointer;
  padding: 10px;
  fontweight: 800;
  margintop: 15px;
`;
