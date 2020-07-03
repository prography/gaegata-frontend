import styled from 'styled-components';

interface InputPropsType {
  error?: String;
}

export const ApplyWrap = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 450px;
`;

export const ApplyTitle = styled.p`
  font-size: 2rem;
  margin: 4% 0;
  font-weight: 800;
  margin-bottom: 10px;
`;

export const FieldWrap = styled.div`
  display: flex;
  margin-top: 5%;
`;

export const NumberInputWrap = styled.div`
  width: 80%;
`;

export const NumberInput = styled.input`
  padding-right: 15px;
  padding-left: 15px;
  border-radius: 5px;
  border: 1px solid #e1e2e3;
  font-size: 15px;
  color: #333;
`;

export const ApplyButton = styled.button`
  width: 100%;
  height: 60px;
  border-radius: 5px 5px;
  border: 0px solid;
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  cursor: pointer;
  background-color: #393c42;
  color: #fff;
`;

export const Hr = styled.hr`
  width: 20%;
  display: inline-block;
  margin: 33px 10px;
`;

export const ItemWrap = styled.div`
  margin: 5% 0;
`;

export const TextArea = styled.textarea<InputPropsType>`
  display: block;
  width: 100%;
  height: 150px;
  padding: 15px;
  border-radius: 5px;
  border: 1px solid #f7f8fb;
  font-size: 15px;
  color: #333;
  background-color: #f7f8fb;
  margin: 10px 0;
  border-color: ${(props: InputPropsType) => (props.error ? 'red' : '')};
`;
