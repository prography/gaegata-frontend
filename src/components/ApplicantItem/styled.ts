import styled from 'styled-components';

export const ApplicantItemWrap = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #f7f8fb;
  padding: 10px;
  justify-content: space-between;
  margin: 3% 0;
`;

export const ApplicantName = styled.span`
  font-size: 1.25rem;
  margin: 5% 5%;
`;

export const ApplicantImage = styled.div`
  width: 62px;
  height: 62px;
  background-color: #fff;
  border-radius: 100%;
  border: 1px solid black;
  display: inline-block;
`;

export const ApplyButton = styled.button`
  border-radius: 5px 5px;
  border: 0px solid;
  font-size: 14px;
  text-align: center;
  cursor: pointer;
  background-color: #3562ff;
  color: #fff;
  height: 40px;
  width: 120px;
  margin: 4% 0;
`;
