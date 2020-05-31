import React, { useState, useEffect } from 'react';
import { LoginWrap, LoginTitle, LoginContent } from './style';
import { LoginButton, LoginInput, LoginInputWarp } from '../common/style';
import { useDispatch, useSelector } from 'react-redux';
import { LoginParams } from 'api/auth';
import { MailOutlined } from '@ant-design/icons';
import 'styles/login.css';
import { login, emailCheck } from 'store/auth/action';

interface Props {
  handleCancel: () => void;
}
const Login: React.FunctionComponent<Props> = ({ handleCancel }) => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const dispatch = useDispatch();
  const { status } = useSelector((state: StoreState) => state.auth.emailCheck);
  const { loginStatus } = useSelector((state: StoreState) => state.auth.login);
  const onChangeUsername = (e: React.FormEvent<HTMLInputElement>): void => {
    setEmail(e.currentTarget.value);
    setEmailError('');
  };

  const onChangePassword = (e: React.FormEvent<HTMLInputElement>): void => {
    setPassword(e.currentTarget.value);
    setPasswordError('');
  };

  const enterEmailCheck = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onEmailCheck();
    }
  };

  const enterPasswordCheck = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onEmailLogin();
    }
  };

  useEffect(() => {
    if (loginStatus === 'SUCCESS') {
      window.alert('로그인되었습니다.');
      window.location.href = '/';
    }
    if (loginStatus === 'FAILURE') {
      window.alert('비밀번호가 일치하지않습니다.');
    }
  }, [loginStatus]);

  const onEmailCheck = async () => {
    const payload = {
      email,
    };
    const emailRule = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i; //이메일 정규식

    if (emailRule.test(email)) {
      await dispatch(emailCheck(payload));
    } else {
      setEmailError('올바른 이메일 형식을 입력해주세요.');
    }
  };

  const onEmailLogin = async () => {
    const params: LoginParams = {
      email,
      password,
    };
    await dispatch(login(params));
  };

  return (
    <LoginWrap>
      <LoginTitle>개같하로 개발 같이 하기</LoginTitle>
      <LoginContent>
        15초만에 간편하게 가입하고
        <br /> 나에게 맞는 팀을 확인하세요!
      </LoginContent>
      {status === 'login' ? (
        <>
          <LoginInputWarp>
            <LoginInput
              type="password"
              name="password"
              placeholder="비밀번호를 입력해주세요."
              onChange={onChangePassword}
              error={passwordError}
              autoFocus={true}
              onKeyPress={enterPasswordCheck}
            />
            <div style={{ textAlign: 'left', color: 'red', fontSize: '12px' }}>
              {passwordError}
            </div>
          </LoginInputWarp>
          <LoginButton
            onClick={onEmailLogin}
            color="#fff"
            backgroundColor="#5f76f3"
          >
            로그인
          </LoginButton>
        </>
      ) : (
        <>
          <LoginInputWarp>
            <label htmlFor="username">이메일</label>
            <LoginInput
              type="email"
              name="username"
              id="username"
              placeholder="이메일을 입력해주세요."
              onChange={onChangeUsername}
              error={emailError}
              onKeyPress={enterEmailCheck}
              autoFocus={true}
            />
            <div style={{ textAlign: 'left', color: 'red', fontSize: '12px' }}>
              {emailError}
            </div>
          </LoginInputWarp>
          <LoginButton
            onClick={onEmailCheck}
            color="#fff"
            backgroundColor="#5f76f3"
          >
            <MailOutlined className="icon-margin" /> 이메일로 시작하기
          </LoginButton>
        </>
      )}
    </LoginWrap>
  );
};

export default Login;
