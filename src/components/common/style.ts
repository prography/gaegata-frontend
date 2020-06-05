import styled from 'styled-components';

interface ButtonPropsType {
  color: string;
  backgroundColor: string;
}

interface InputPropsType {
  error?: String;
}

export const ItemWrap = styled.div`
  padding-bottom: 12px;
  color: #767676;
  text-align: left;
  display: flex;
  justify-content: center;
`;

export const LoginButton = styled.button<ButtonPropsType>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 60px;
  border-radius: 40px 40px;
  border: 0px solid;
  font-size: 14px;
  font-weight: 600;
  color: ${({ color }: ButtonPropsType) => color};
  background-color: ${({ backgroundColor }: ButtonPropsType) =>
    backgroundColor};
  text-align: center;
  cursor: pointer;
`;

export const LoginInput = styled.input<InputPropsType>`
  height: 60px;
  width: 50%;
  padding-right: 15px;
  padding-left: 15px;
  border-radius: 40px 40px;
  border: 1px solid #e1e2e3;
  font-size: 15px;
  color: #333;
  border-color: ${(props: InputPropsType) => (props.error ? 'red' : '')};
`;
