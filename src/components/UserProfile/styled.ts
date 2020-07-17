import styled from 'styled-components';
interface InputPropsType {
  error?: String;
}

export const ProfileWrap = styled.div``;

export const ProfileImageBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const ProfileImage = styled.div`
  border-radius: 50%;
  width: 200px;
  height: 200px;
  border: 1px solid #efefef;
  overflow: hidden;
  margin-bottom: 20px;
`;

export const Image = styled.img`
  width: 198px;
`;

export const H3 = styled.h3`
  font-size: 1.5rem;
`;
export const Span = styled.span`
  font-size: 0.8rem;
  color: #aaa;
`;

export const P = styled.p`
  font-size: 0.8rem;
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

export const Button = styled.button`
  width: 60px;
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
