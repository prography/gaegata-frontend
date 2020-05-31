import React, { useState, useEffect } from 'react';
import { RegisterWrap } from './style';
import { LoginInput, LoginButton, LoginInputWarp } from '../common/style';
import { RegisterParams } from 'api/auth';
import { useSelector, useDispatch } from 'react-redux';
import { register } from 'store/auth/action';

const Register = () => {
  const [username, setUsername] = useState('');
  const [usernameError, setUsernameError] = useState('');

  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const [passwordRepeat, setPasswordRepeat] = useState('');
  const [passwordRepeatError, setPasswordRepeatError] = useState('');

  const dispatch = useDispatch();
  const { email } = useSelector((state: StoreState) => state.auth.emailCheck);
  const { status } = useSelector((state: StoreState) => state.auth.register);

  const onChangeNickname = (e: React.FormEvent<HTMLInputElement>): void => {
    setUsername(e.currentTarget.value);
    setUsernameError('');
  };

  const onChangePassword = (e: React.FormEvent<HTMLInputElement>): void => {
    setPassword(e.currentTarget.value);
    setPasswordError('');
  };

  const onChangePasswordRepeat = (
    e: React.FormEvent<HTMLInputElement>,
  ): void => {
    setPasswordRepeat(e.currentTarget.value);
    setPasswordRepeatError('');
  };

  const nicknameViladation = () => {
    const nicknameRule = /^[a-zA-Z가-힣]{1}[a-zA-Z0-9가-힣]{1,9}$/i;
    return nicknameRule.test(username);
  };

  const passwordViladation = () => {
    const passwordRule = /(?=.*?[A-Za-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/i;
    return passwordRule.test(password);
  };

  const onsubmit = async () => {
    if (!nicknameViladation()) {
      setUsernameError('이름은 특수문자 제외 한글자 이상이어야 합니다.');
      return;
    }

    if (!passwordViladation()) {
      setPasswordError(
        '비밀번호는 6자 이상의 영문, 숫자, 특수문자가 필요합니다.',
      );
      return;
    }

    if (password != passwordRepeat) {
      setPasswordRepeatError('비밀번호가 일치하지 않습니다.');
      return;
    }

    const params: RegisterParams = {
      email,
      username,
      password,
    };

    await dispatch(register(params));
  };

  useEffect(() => {
    if (status === 'SUCCESS') {
      window.alert('회원가입 되었습니다.');
      window.location.href = '/';
    }
    if (status === 'FAILURE') {
      window.alert('회원가입이 되지 않았습니다.');
    }
  }, [status]);

  return (
    <RegisterWrap>
      <LoginInputWarp>
        <label htmlFor="nickname">이름</label>
        <LoginInput
          type="text"
          name="nickname"
          id="nickname"
          placeholder="이름을 입력해주세요."
          onChange={onChangeNickname}
          error={usernameError}
        />
        <div style={{ textAlign: 'left', color: 'red', fontSize: '12px' }}>
          {usernameError}
        </div>
      </LoginInputWarp>
      <LoginInputWarp>
        <label htmlFor="password">비밀번호</label>
        <LoginInput
          type="password"
          name="password"
          id="password"
          placeholder="비밀번호를 입력해주세요."
          onChange={onChangePassword}
          error={passwordError}
        />
        <div style={{ textAlign: 'left', color: 'red', fontSize: '12px' }}>
          {passwordError}
        </div>
      </LoginInputWarp>
      <LoginInputWarp>
        <label htmlFor="passwordCheck">비밀번호 확인</label>
        <LoginInput
          type="password"
          name="passwordCheck"
          id="passwordCheck"
          placeholder="비밀번호를 다시 입력해주세요."
          onChange={onChangePasswordRepeat}
          error={passwordRepeatError}
        />
        <div style={{ textAlign: 'left', color: 'red', fontSize: '12px' }}>
          {passwordRepeatError}
        </div>
      </LoginInputWarp>

      <LoginButton onClick={onsubmit} color="#fff" backgroundColor="#5f76f3">
        회원가입하기
      </LoginButton>
    </RegisterWrap>
  );
};

export default Register;
