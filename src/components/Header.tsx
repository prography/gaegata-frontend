import React from 'react';
import { Link } from 'react-router-dom';
import { Modal } from 'antd';
import LoginForm from 'components/LoginForm';
import 'antd/dist/antd.css';

interface Props {
  visible: boolean;
  isLoggedIn: boolean;
  handleCancel: () => boolean;
  handleVisible: () => void;
  handleLogout: () => void;
}
const Header: React.SFC<Props> = ({
  visible,
  isLoggedIn,
  handleCancel,
  handleVisible,
  handleLogout,
}) => {
  return (
    <>
      {visible && (
        <Modal
          style={{ pointerEvents: 'all' }}
          title="개같하"
          visible={visible}
          footer={null}
          onCancel={handleCancel}
        >
          <LoginForm onCancel={handleCancel} />
        </Modal>
      )}
      <header>
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
                    <Link to="#">회원가입</Link>
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

export default Header;
