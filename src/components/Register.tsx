import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { LoginOutlined, GithubOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import authApi from 'lib/api/auth';
import { Store } from 'rc-field-form/lib/interface';
import swal from 'sweetalert';
import { IUser } from 'models/user';
import { registerActions } from 'actions/auth';

const Register: React.FC = () => {
  const dispatch = useDispatch();

  const onsubmit = async (values: Store) => {
    const params: IUser = {
      username: values.username,
      password: values.password,
      email: values.email,
      introduction: values.introduction,
      nickname: values.nickname,
    };

    await dispatch(registerActions.registerRequest(params));

    swal(
      '회원가입 성공',
      '지금부터 같이 개발할 사람을 찾아보세요!',
      'success',
    ).then(() => {
      window.location.href = '/';
    });
  };

  return (
    <>
      <section id="register-content">
        <div className="container">
          <div className="display-flex flex-direction-column align-items-center content-title-aria">
            <div className="text-bold register-title .mb-20">회원가입</div>
            <div style={{ width: '50%' }}>
              <Form layout="vertical" onFinish={onsubmit}>
                <Form.Item
                  name="username"
                  hasFeedback
                  label="로그인 아이디"
                  rules={[
                    {
                      required: true,
                      message: '아이디를 입력하세요.',
                    },
                    {
                      pattern: /^[a-z]{1}[a-z0-9]{4,15}$/i,
                      message: '로그인 형식을 입력하세요.',
                    },
                    () => ({
                      async validator(rule, value) {
                        const payload = {
                          username: value,
                        };

                        const { data } = await authApi.idCheck(payload);
                        if (!data.username) {
                          return Promise.resolve();
                        } else {
                          return Promise.reject('로그인중복입니다.');
                        }
                      },
                    }),
                  ]}
                >
                  <Input size="large" placeholder="login id" />
                </Form.Item>
                <Form.Item
                  name="password"
                  label="비밀번호"
                  hasFeedback
                  rules={[
                    {
                      required: true,
                      message: '비밀번호를 입력하세요.',
                    },
                    {
                      pattern: /(?=.*?[A-Za-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/i,
                      message:
                        '비밀번호는 6자 이상의 영문, 숫자, 특수문자가 필요합니다.',
                    },
                  ]}
                >
                  <Input.Password size="large" placeholder="*******" />
                </Form.Item>
                <Form.Item
                  name="password check"
                  label="비밀번호 확인"
                  hasFeedback
                  dependencies={['password']}
                  rules={[
                    {
                      required: true,
                      message: '비밀번호를 확인하세요.',
                    },
                    ({ getFieldValue }) => ({
                      validator(rule, value) {
                        if (!value || getFieldValue('password') === value) {
                          return Promise.resolve();
                        }
                        return Promise.reject('비밀번호가 일치하지 않습니다.');
                      },
                    }),
                  ]}
                >
                  <Input.Password size="large" placeholder="*******" />
                </Form.Item>
                <Form.Item
                  name="email"
                  label="이메일"
                  rules={[
                    {
                      type: 'email',
                      message: '이메일이 올바르지 않습니다.',
                    },
                    {
                      required: true,
                      message: '이메일은 필수로 입력해주세요.',
                    },
                  ]}
                >
                  <Input size="large" placeholder="example@gmail.com" />
                </Form.Item>
                <Form.Item
                  name="introduction"
                  label="한줄 소개"
                  hasFeedback
                  rules={[
                    {
                      max: 200,
                      message: '한줄 소개는 200자 내로 작성해주세요.',
                    },
                  ]}
                >
                  <Input size="large" placeholder="안녕하세요." />
                </Form.Item>
                <Form.Item
                  name="nickname"
                  label="이름"
                  hasFeedback
                  rules={[
                    {
                      pattern: /^[a-zA-Z가-힣]{1}[a-zA-Z0-9가-힣]{1,9}$/i,
                      message: '이름은 특수문자 제외 한글자 이상이어야 합니다.',
                    },
                  ]}
                >
                  <Input size="large" placeholder="홍길동" />
                </Form.Item>
                <Form.Item
                  name="agreement"
                  valuePropName="checked"
                  rules={[
                    {
                      validator: (_, value) =>
                        value
                          ? Promise.resolve()
                          : Promise.reject(
                              '이용약관 및 개인정보 처리방침 동의 해주세요.',
                            ),
                    },
                  ]}
                >
                  <Checkbox>
                    <a href="#">이용약관</a> 및 개인정보 처리방침 동의 (필수)
                  </Checkbox>
                </Form.Item>

                <Form.Item>
                  <Button
                    size="large"
                    className="login-button"
                    htmlType="submit"
                    block
                  >
                    <LoginOutlined className="login-icon" />
                    가입하기
                    <span className="right-space" />
                  </Button>
                  <div className="button-border">
                    <Button className="github-button" size="large" block>
                      <GithubOutlined className="github-icon" />
                      깃허브로 시작하기
                      <span className="right-space" />
                    </Button>
                  </div>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
