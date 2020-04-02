import React, { useState, useEffect } from 'react';
import { loginActions } from '../actions/auth';
import { Input, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { LogoutOutlined, GithubOutlined } from '@ant-design/icons';
import { IRootState } from 'reducers/index';
import swal from 'sweetalert';
import { ILoginUser } from 'models/user';

export interface Props {
  onCancel: () => void;
}

const Login: React.SFC<Props> = ({ onCancel }) => {
  const { authStatus } = useSelector((state: IRootState) => state.auth.login);
  const dispatch = useDispatch();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onChangeUsername = (e: React.FormEvent<HTMLInputElement>): void => {
    setUsername(e.currentTarget.value);
  };
  const onChangePassword = (e: React.FormEvent<HTMLInputElement>): void => {
    setPassword(e.currentTarget.value);
  };

  const clickLogin = async () => {
    const params: ILoginUser = {
      username,
      password,
    };
    await dispatch(loginActions.loginRequest(params));
  };

  useEffect(() => {
    if (authStatus === 'FAILURE') {
      swal('로그인 실패', '아이디 또는 비밀번호가 올바르지 않습니다.', 'error');
    } else if (authStatus === 'SUCCESS') {
      swal('로그인 완료', '환영합니다!', 'success');
      onCancel();
    }
  }, [authStatus]);

  return (
    <div className="login-contents">
      <p className="login-title">개같하로 개발 같이 하기</p>
      <p className="login-content">
        15초만에 간편하게 가입하고
        <br /> 나에게 맞는 팀을 확인하세요!
      </p>
      <Input
        className="username-input"
        value={username}
        name="username"
        onChange={onChangeUsername}
        placeholder="아이디를 입력해주세요."
        size="large"
      />

      <Input.Password
        className="password-input"
        value={password}
        name="password"
        onChange={onChangePassword}
        placeholder="패스워드를 입력해주세요."
        size="large"
      />
      <Button size="large" className="login-button" block onClick={clickLogin}>
        <LogoutOutlined className="login-icon" />
        아이디로 시작하기
        <span id="right-space" />
      </Button>
      <div className="button-border">
        <Button className="github-button" size="large" block>
          <GithubOutlined className="github-icon" />
          깃허브로 시작하기
          <span className="right-space" />
        </Button>
      </div>
    </div>
  );
};

export default Login;
