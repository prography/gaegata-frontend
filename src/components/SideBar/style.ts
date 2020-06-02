import styled from 'styled-components';

export const NavLayout = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  padding: 10px;
  width: 300px;
  height: 100vh;
  background-color: #f7f8fb;
  border-right: 1px solid #efefef;
`;

export const NavTopWrap = styled.div`
  height: 10%;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;

export const NavLogo = styled.div`
  font-size: 2rem;
  font-weight: 800;
  color: #3562ff;
`;

export const NavContainer = styled.div`
  height: 90%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

export const NavGlobalMenu = styled.div`
  padding: 10px;
  font-size: 1rem;
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

export const CreateButton = styled.button`
  width: 40%;
  height: 30px;
  border-radius: 15px;
  border: 0px solid;
  font-size: 0.75rem;
  font-weight: 600;
  background-color: #3562ff;
  color: #fff;
  text-align: center;
  cursor: pointer;
  display: block;
  margin-left: auto;
  margin-top: 5%;
  margin-bottom: 5%;
  a {
    color: #fff;
  }
`;
