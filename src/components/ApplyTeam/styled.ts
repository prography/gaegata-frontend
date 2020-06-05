import styled from 'styled-components';

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
  justify-content: space-between;
  display: flex;
  margin-top: 10%;
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
  margin-top: 28%;
`;

export const Hr = styled.hr`
  width: 20%;
  display: inline-block;
  margin: 33px 10px;
`;
