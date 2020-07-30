import React, { useState, useEffect } from 'react';
import { LoginWrap, LoginTitle, LoginContent } from './style';
import { LoginButton, LoginInput, ItemWrap } from '../Common/style';
import { useDispatch, useSelector } from 'react-redux';
import { LoginParams } from 'api/auth';
import 'styles/login.css';
import { login, emailCheck } from 'store/auth/action';

const Login: React.FunctionComponent = () => {
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
    if (loginStatus === 'FAILTURE') {
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
      <LoginTitle>시작하기</LoginTitle>
      <LoginContent>
        Fitple은 나와 핏이 맞는 사람들과 함께 프로젝트를
        <br />
        진행할 수 있는 서비스입니다.
      </LoginContent>
      {status === 'login' ? (
        <>
          <ItemWrap style={{ display: 'block' }}>
            <LoginInput
              type="password"
              name="password"
              placeholder="비밀번호를 입력해주세요."
              onChange={onChangePassword}
              error={passwordError}
              autoFocus={true}
              onKeyPress={enterPasswordCheck}
              autoComplete="new-password"
              value={password}
            />
            <div style={{ color: 'red', fontSize: '12px' }}>
              {passwordError}
            </div>
          </ItemWrap>
          <ItemWrap>
            <LoginButton
              onClick={onEmailLogin}
              color="#fff"
              backgroundColor="#3562ff"
            >
              로그인
            </LoginButton>
          </ItemWrap>
          <div
            style={{ color: '#3562ff', marginTop: '2%', marginBottom: '7%' }}
          >
            비밀번호를 잊으셨나요?
          </div>
        </>
      ) : (
        <>
          <ItemWrap>
            <LoginInput
              type="email"
              name="username"
              id="username"
              placeholder="이메일을 입력해주세요."
              onChange={onChangeUsername}
              error={emailError}
              onKeyPress={enterEmailCheck}
              autoFocus={true}
              autoComplete="nope"
            />
            <div style={{ color: 'red', fontSize: '12px' }}>{emailError}</div>
          </ItemWrap>
          <ItemWrap>
            <LoginButton
              onClick={onEmailCheck}
              color="#fff"
              backgroundColor="#3562ff"
            >
              이메일로 시작하기
            </LoginButton>
          </ItemWrap>
          <div
            style={{ textAlign: 'center', marginTop: '3%', marginBottom: '7%' }}
          >
            로그인은 개인 정보 보호 정책 및 서비스 약관에 동의하는 것을
            의미합니다.
          </div>
        </>
      )}
    </LoginWrap>
  );
};

export default Login;
