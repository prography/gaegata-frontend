import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { Link, RouteComponentProps, Route } from 'react-router-dom';
import { Menu, Row, Col, PageHeader } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import Profile from 'components/Profile';
import EditProfile from 'components/EditProfile';
import ModalComponent from 'components/Modal/index';
import UserTeamListContainer from 'containers/UserTeamListContainer';

const { SubMenu } = Menu;
const MyPageWrapper = styled.div`
  padding: 60px 0;
`;

const RightContent = styled.div`
  min-height: 700px;
`;

const MenuTitle = styled.div`
  font-size: 1.25rem;
  font-weight: bold;
  border-bottom: 1px solid #efefef;
  padding: 50px 20px 15px;
`;

const MyPage: React.FC<RouteComponentProps> = ({ match }) => {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);

  const getData = useCallback(() => {
    //dispatch(myPage());
  }, [dispatch]);

  useEffect(() => {
    getData();
  }, []);

  const handleCancel = useCallback(async () => {
    setVisible(false);

    return visible;
  }, [visible]);

  const handleVisible = (): void => {
    setVisible(true);
  };

  return (
    <div>
      <MyPageWrapper>
        <div
          style={{
            maxWidth: '1200px',
            width: '90%',
            margin: '0 auto',
          }}
        >
          <Row gutter={60}>
            <Col md={24} xl={6} className="left-content pb-10">
              <Profile handleVisible={handleVisible} />
              {visible ? (
                <ModalComponent
                  handleCancel={handleCancel}
                  visible={visible}
                  width={600}
                >
                  <EditProfile />
                </ModalComponent>
              ) : (
                ''
              )}
              <MenuTitle>나의 FITPLE</MenuTitle>
              <Menu
                mode="inline"
                defaultOpenKeys={['application', 'own']}
                className="mb-20"
              >
                <SubMenu
                  key="application"
                  title={
                    <span>
                      <span>신청한 팀</span>
                    </span>
                  }
                >
                  <Menu.Item key="application_all">
                    <Link to="/mypage/application/all">전체</Link>
                  </Menu.Item>
                </SubMenu>
                <SubMenu
                  key="own"
                  title={
                    <span>
                      <span>생성한 팀</span>
                    </span>
                  }
                >
                  <Menu.Item key="own_all">
                    <Link to="/mypage/own">전체</Link>
                  </Menu.Item>
                </SubMenu>
              </Menu>
            </Col>
            <Col md={24} xl={18}>
              <RightContent>
                <PageHeader
                  className="no-padding pb-20"
                  title="팀 리스트"
                  subTitle="너 내 동료가 돼라"
                />
                <Route
                  exact
                  path="/mypage"
                  render={() => (
                    <UserTeamListContainer teamType="application" />
                  )}
                />
                <Route
                  path="/mypage/application/:sortby"
                  render={() => (
                    <UserTeamListContainer teamType="application" />
                  )}
                />
                <Route
                  path="/mypage/own"
                  render={() => <UserTeamListContainer teamType="own" />}
                />
              </RightContent>
            </Col>
          </Row>
        </div>
      </MyPageWrapper>
    </div>
  );
};

export default MyPage;
