import React from 'react';
import { Link, withRouter, RouteComponentProps } from 'react-router-dom';
import { Modal } from 'antd';
import 'antd/dist/antd.css';

interface Props {
  visible: boolean;
  isLoggedIn: boolean;
  handleCancel: () => boolean;
  handleVisible: () => void;
  handleLogout: () => void;
}
const Header: React.FC<RouteComponentProps & Props> = ({
  visible,
  isLoggedIn,
  handleCancel,
  handleVisible,
  handleLogout,
  location,
}) => {
  return (
    <>
      {visible && (
        <Modal
          className="main-logo"
          title="개같하"
          visible={visible}
          footer={null}
          onCancel={handleCancel}
        ></Modal>
      )}
      <header className={location.pathname !== '/' ? 'scrolled' : ''}>
        <div className="container display-flex justify-content-space-between">
          <Link to="/" className="logo">
            개같하
          </Link>
          <div className="navigation">
            <ul>
              {isLoggedIn ? (
                <>
                  <li>
                    <Link to="#" type="primary" onClick={handleLogout}>
                      로그아웃
                    </Link>
                  </li>
                  <li>
                    <Link to="#">마이페이지</Link>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link to="#" type="primary" onClick={handleVisible}>
                      로그인
                    </Link>
                  </li>
                  <li>
                    <Link to="/register">회원가입</Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default withRouter(Header);
