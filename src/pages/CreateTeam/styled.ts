import styled from 'styled-components';

interface InputPropsType {
  error?: String;
}

export const CreateTeamWrap = styled.div`
  padding: 60px 1.375rem 0;
  flex-direction: column;
  align-items: center;
  display: flex;
`;

export const Container = styled.div`
  width: 62%;
  border: 1px solid #fff;
  background-color: #fff;
  padding: 2%;
  box-shadow: 4px 4px 4px 4px rgba(40, 50, 60, 0.06);
  margin: 1%;
  border-radius: 5px;
`;

export const Form = styled.form``;

export const SubTitle = styled.label`
  font-size: 1.2rem;
  font-weight: 400;
`;

export const ItemWrap = styled.div``;

export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 800;
`;

export const Input = styled.input<InputPropsType>`
  width: 100%;
  height: 40px;
  padding-right: 15px;
  padding-left: 15px;
  border-radius: 5px;
  border: 1px solid #f7f8fb;
  font-size: 15px;
  color: #333;
  background-color: #f7f8fb;
  margin: 10px 0;
  border-color: ${(props: InputPropsType) => (props.error ? 'red' : '')};
`;

export const NumberInputWrap = styled.div`
  width: 80%;
`;

export const NumberInput = styled.input<InputPropsType>`
  width: 90%;
  height: 40px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #f7f8fb;
  font-size: 15px;
  color: #333;
  background-color: #f7f8fb;
  margin: 10px 0;
  border-color: ${(props: InputPropsType) => (props.error ? 'red' : '')};
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

export const FieldWrap = styled.div`
  justify-content: space-between;
  display: flex;
`;

export const SelectArea = styled.select`
  display: block;
  width: 25%;
  height: 40px;
  padding-right: 15px;
  padding-left: 15px;
  border-radius: 5px;
  border: 1px solid #f7f8fb;
  font-size: 15px;
  color: #333;
  background-color: #f7f8fb;
  margin: 10px 0;
`;

export const CreateButton = styled.button`
  width: 14%;
  height: 30px;
  border-radius: 15px;
  border: 0px solid;
  font-size: 12px;
  font-weight: 600;
  background-color: #3562ff;
  color: #ffffff;
  text-align: center;
  cursor: pointer;
  display: block;
  margin-left: auto;
  margin-top: 5%;
  margin-bottom: 5%;
`;
