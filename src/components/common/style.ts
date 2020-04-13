import styled from 'styled-components';

interface ButtonPropsType {
    color:string;
    backgroundColor : string;
}

interface InputPropsType {
  error?: String;
}

export const LoginInputWarp = styled.div`
  padding-bottom: 24px;
  color: #767676;
  text-align: left;
`;


export const LoginButton = styled.button<ButtonPropsType>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  border-radius: 10px;
  border: 0px solid;
  font-size: 16px;
  font-weight: 600;
  color: ${({color}: ButtonPropsType) =>  color};
  background-color: ${({backgroundColor}: ButtonPropsType) => backgroundColor};
  text-align: center;
  cursor: pointer;
`;

export const LoginInput = styled.input<InputPropsType>`
  width: 100%;
  height: 50px;
  margin-top: 10px;
  padding-right: 15px;
  padding-left: 15px;
  border-radius: 5px;
  border: 1px solid #e1e2e3;
  font-size: 15px;
  color: #333;
  border-color: ${(props: InputPropsType) => (props.error ? 'red' : '')};
`;